import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Layers, 
  Star, 
  Download, 
  ArrowRight, 
  Play, 
  Check, 
  Sparkles,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { COURSES } from '../data/coursesData';

const CATEGORIES = [
  'All Masterclasses',
  'Color Grading & Tones',
  'Portraits & Retouching',
  'Landscapes & Nature',
  'Speed & Batch Workflow'
];

export default function CourseCatalog({ onEnrollClick, onOpenPreview }) {
  const [selectedCategory, setSelectedCategory] = useState('All Masterclasses');

  const filteredCourses = selectedCategory === 'All Masterclasses'
    ? COURSES
    : COURSES.filter(c => c.category === selectedCategory || c.badge === 'FLAGSHIP 2026');

  return (
    <section id="courses" className="py-20 md:py-28 relative bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Masterclasses</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Learn From The Masters. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400">
              Own The Complete Library.
            </span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Every course includes high-resolution exercise RAWs, production cheat sheets, 
            and lifetime access with zero monthly subscriptions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const isFlagship = course.badge.includes('FLAGSHIP');

            return (
              <div 
                key={course.id}
                className={`group relative rounded-3xl overflow-hidden glass-card flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                  isFlagship 
                    ? 'border-emerald-500/40 shadow-2xl shadow-emerald-950/40 ring-1 ring-emerald-500/30' 
                    : 'border-white/10 hover:border-slate-700'
                }`}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-black/30 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md ${
                      isFlagship 
                        ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-500/30' 
                        : 'bg-black/75 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {course.badge}
                    </span>
                  </div>

                  {/* Play preview hover trigger */}
                  <button
                    onClick={() => onOpenPreview(course)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs"
                    title="Watch Course Syllabus Preview"
                  >
                    <div className="w-13 h-13 rounded-full bg-emerald-400 text-black flex items-center justify-center shadow-xl shadow-emerald-500/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </button>

                  {/* Hours and lessons badge */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{course.hours}</span>
                      <span>•</span>
                      <span>{course.lessonsCount} Lessons</span>
                    </div>

                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 text-[11px]">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-white">{course.rating}</span>
                      <span className="text-slate-400">({course.reviewsCount})</span>
                    </div>
                  </div>
                </div>

                {/* Course Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-[#0b0e17]">
                  <div>
                    {/* Instructor profile */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <img 
                        src={course.instructor.avatar} 
                        alt={course.instructor.name}
                        className="w-6 h-6 rounded-full object-cover ring-1 ring-emerald-500/40"
                      />
                      <span className="text-xs text-slate-300 font-medium">{course.instructor.name}</span>
                      <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">• {course.instructor.role.split('&')[0]}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug mb-2 font-heading">
                      {course.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {course.tagline}
                    </p>

                    {/* Bullet features */}
                    <ul className="space-y-1.5 mb-6 text-xs text-slate-300">
                      {course.includes.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Action Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-white font-heading">${course.price}</span>
                        <span className="text-xs text-slate-500 line-through">${course.originalPrice}</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                        One-Time • Lifetime
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenPreview(course)}
                        className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700/60"
                      >
                        Preview
                      </button>

                      <button
                        onClick={() => onEnrollClick(course)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                          isFlagship
                            ? 'bg-emerald-400 hover:bg-emerald-300 text-black shadow-md shadow-emerald-500/25'
                            : 'bg-slate-800 hover:bg-emerald-400 hover:text-black text-white'
                        }`}
                      >
                        <span>Enroll</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bundle Banner */}
        <div className="mt-14 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-950/70 via-slate-900 to-black border border-emerald-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30 inline-block mb-3">
                Ultimate Bundle Value
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Want Access to All 6 Masterclasses + All RAW Practice Files?
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Save over $530 with the All-Access Master Pass. Includes all future masterclasses, 
                our entire 45-preset suite, weekly private photo critique sessions, and priority mentor feedback.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <div className="text-center sm:text-right">
                <div className="flex items-baseline justify-center sm:justify-end gap-2">
                  <span className="text-3xl font-extrabold text-white font-heading">$149</span>
                  <span className="text-slate-400 line-through text-sm">$680</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono">Save 78% with All-Access</span>
              </div>

              <button
                onClick={() => onEnrollClick({ title: 'All-Access Master Pass', price: 149 })}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-300 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Claim All-Access Pass</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
