import { useState } from 'react';
import { ArrowDown, ArrowUp, Check, CircleAlert, ExternalLink, Plus, Trash2, Video } from 'lucide-react';
import { useAsync } from '../../hooks/useAsync';
import { fetchCourseContent } from '../../lib/course';
import { addLesson, addModule, deleteLesson, deleteModule, swapPositions, updateLesson, updateModule } from '../../lib/admin';
import { toEmbed } from '../../lib/video';
import { toBnDigits } from '../../lib/format';
import { ErrorNote, PageHeader, Panel } from '../../components/admin/ui';
import { buttonStyles, inputStyles } from '../../components/admin/styles';
import Spinner from '../../components/ui/Spinner';

const nextPosition = (rows) => Math.max(0, ...rows.map((r) => r.position)) + 1;

function LessonRow({ lesson, index, isFirst, isLast, onMove, onSave, onDelete }) {
  const [title, setTitle] = useState(lesson.title);
  const [videoUrl, setVideoUrl] = useState(lesson.video_url ?? '');
  const [duration, setDuration] = useState(lesson.duration ?? '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const dirty =
    title.trim() !== lesson.title || (videoUrl.trim() || null) !== lesson.video_url || (duration.trim() || null) !== lesson.duration;
  const embed = toEmbed(videoUrl.trim());
  const badLink = videoUrl.trim() !== '' && !embed;

  const save = async () => {
    if (!title.trim() || badLink) return;
    setSaving(true);
    try {
      await onSave(lesson.id, { title: title.trim(), video_url: videoUrl.trim() || null, duration: duration.trim() || null });
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    } finally {
      setSaving(false);
    }
  };

  return (
    <li className="grid gap-3 px-4 py-4 sm:px-5 lg:grid-cols-[auto_1fr_5rem_1.2fr_auto] lg:items-start">
      <span className="flex size-8 items-center justify-center rounded-lg bg-slate-800 font-sans text-xs font-bold text-slate-300">
        {toBnDigits(index + 1)}
      </span>
      <label>
        <span className="sr-only">লেসনের নাম</span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="লেসনের নাম" className={inputStyles} />
      </label>
      <label>
        <span className="sr-only">ভিডিওর দৈর্ঘ্য</span>
        <input value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="১০:২০" title="ভিডিওর দৈর্ঘ্য (মিনিট:সেকেন্ড)" className={`${inputStyles} font-sans`} />
      </label>
      <label>
        <span className="sr-only">ভিডিও লিংক</span>
        <div className="relative">
          <Video className={`pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 ${embed ? 'text-emerald-400' : 'text-slate-500'}`} aria-hidden="true" />
          <input
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="YouTube (unlisted) / Vimeo / Bunny লিংক"
            className={`${inputStyles} pl-10 font-sans ${badLink ? 'border-red-500/70' : ''}`}
            spellCheck={false}
          />
        </div>
        {badLink ? (
          <span className="mt-1 flex items-center gap-1 text-xs text-red-400">
            <CircleAlert className="size-3.5" /> সঠিক লিংক দিন (https:// দিয়ে শুরু)
          </span>
        ) : !videoUrl.trim() ? (
          <span className="mt-1 block text-xs text-amber-300">খসড়া — ভিডিও লিংক না দেওয়া পর্যন্ত সাইটে দেখাবে না</span>
        ) : (
          <a href={videoUrl.trim()} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white">
            <ExternalLink className="size-3" /> লিংক খুলে দেখুন
          </a>
        )}
      </label>
      <div className="flex items-center gap-1">
        <button type="button" onClick={save} disabled={!dirty || saving || !title.trim() || badLink} className={buttonStyles.primary}>
          {saved ? <Check className="size-4" /> : null}
          {saved ? 'সেভ হয়েছে' : 'সেভ'}
        </button>
        <button type="button" onClick={() => onMove(-1)} disabled={isFirst} className={buttonStyles.icon} aria-label="উপরে সরান">
          <ArrowUp className="size-4" />
        </button>
        <button type="button" onClick={() => onMove(1)} disabled={isLast} className={buttonStyles.icon} aria-label="নিচে সরান">
          <ArrowDown className="size-4" />
        </button>
        <button type="button" onClick={onDelete} className={`${buttonStyles.icon} hover:text-red-400`} aria-label="লেসন মুছুন">
          <Trash2 className="size-4" />
        </button>
      </div>
    </li>
  );
}

function ModuleCard({ module, index, isFirst, isLast, run }) {
  const [title, setTitle] = useState(module.title);
  const lessons = module.lessons;

  return (
    <Panel>
      <div className="flex flex-col gap-3 border-b border-slate-800 px-4 py-4 sm:flex-row sm:items-center sm:px-5">
        <span className="shrink-0 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-sans text-xs font-bold text-emerald-400">
          Module {String(index + 1).padStart(2, '0')}
        </span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => title.trim() && title.trim() !== module.title && run(() => updateModule(module.id, { title: title.trim() }))}
          aria-label="মডিউলের নাম"
          className={`${inputStyles} font-bold`}
        />
        <div className="flex shrink-0 items-center gap-1">
          <button type="button" disabled={isFirst} onClick={() => run(() => swapPositions('modules', module, module.prev))} className={buttonStyles.icon} aria-label="মডিউল উপরে সরান">
            <ArrowUp className="size-4" />
          </button>
          <button type="button" disabled={isLast} onClick={() => run(() => swapPositions('modules', module, module.next))} className={buttonStyles.icon} aria-label="মডিউল নিচে সরান">
            <ArrowDown className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => window.confirm(`"${module.title}" মডিউল ও এর ${lessons.length}টি লেসন মুছে ফেলবেন?`) && run(() => deleteModule(module.id))}
            className={`${buttonStyles.icon} hover:text-red-400`}
            aria-label="মডিউল মুছুন"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>

      <ul className="divide-y divide-slate-800/70">
        {lessons.map((lesson, i) => (
          <LessonRow
            key={`${lesson.id}:${lesson.title}:${lesson.video_url}:${lesson.duration}`}
            lesson={lesson}
            index={i}
            isFirst={i === 0}
            isLast={i === lessons.length - 1}
            onMove={(dir) => run(() => swapPositions('lessons', lesson, lessons[i + dir]))}
            onSave={(id, changes) => run(() => updateLesson(id, changes))}
            onDelete={() => window.confirm(`"${lesson.title}" লেসনটি মুছে ফেলবেন?`) && run(() => deleteLesson(lesson.id))}
          />
        ))}
      </ul>

      <div className="px-4 py-3 sm:px-5">
        <button type="button" onClick={() => run(() => addLesson(module.id, 'নতুন লেসন', nextPosition(lessons)))} className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
          <Plus className="size-4" /> লেসন যোগ করুন
        </button>
      </div>
    </Panel>
  );
}

export default function Content() {
  const { data: modules, error, loading, reload } = useAsync(fetchCourseContent, 'content');
  const [actionError, setActionError] = useState(null);

  // Every edit writes to the database, then reloads so the page shows what's saved.
  const run = async (action) => {
    setActionError(null);
    try {
      await action();
      reload();
    } catch {
      setActionError('সেভ করা যায়নি। ইন্টারনেট চেক করে আবার চেষ্টা করুন।');
    }
  };

  if (loading && !modules) return <Spinner />;

  const all = modules ?? [];
  const lessonCount = all.reduce((n, m) => n + m.lessons.length, 0);
  const withVideo = all.reduce((n, m) => n + m.lessons.filter((l) => l.video_url).length, 0);

  return (
    <>
      <PageHeader
        title="কোর্স কনটেন্ট"
        subtitle={`${toBnDigits(all.length)}টি মডিউল • ${toBnDigits(lessonCount)}টি লেসন • ${toBnDigits(withVideo)}টিতে ভিডিও যোগ হয়েছে`}
        actions={
          <button type="button" onClick={() => run(() => addModule('নতুন মডিউল', nextPosition(all)))} className={buttonStyles.primary}>
            <Plus className="size-4" /> মডিউল যোগ করুন
          </button>
        }
      />

      <div className="mb-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-sm leading-relaxed text-slate-400">
        <p className="font-semibold text-slate-200">ভিডিও যোগ করার নিয়ম</p>
        YouTube-এ ভিডিও আপলোড করে Visibility <span className="font-semibold text-white">Unlisted</span> দিন, তারপর লিংকটি এখানে পেস্ট করে সেভ করুন।
        শুধু যাদের পেমেন্ট অনুমোদিত তারাই লিংক দেখতে পাবে। আরও সুরক্ষার জন্য Bunny Stream বা Vimeo-র embed লিংকও দিতে পারেন।
      </div>

      {(error || actionError) && <ErrorNote>{actionError ?? 'কনটেন্ট লোড করা যায়নি।'}</ErrorNote>}

      <div className={`space-y-5 transition-opacity ${loading ? 'opacity-60' : ''}`}>
        {all.map((module, i) => (
          <ModuleCard
            key={`${module.id}:${module.title}`}
            module={{ ...module, prev: all[i - 1], next: all[i + 1] }}
            index={i}
            isFirst={i === 0}
            isLast={i === all.length - 1}
            run={run}
          />
        ))}
      </div>
    </>
  );
}
