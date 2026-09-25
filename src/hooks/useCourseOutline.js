import { useEffect, useState } from 'react';
import { fetchOutline, summarize } from '../lib/outline';
import { toBnDigits } from '../lib/format';
import { COURSE_INCLUDES, CURRICULUM } from '../data/homeContent';

// Live curriculum from the database, falling back to the copy in
// homeContent.js until it loads (or if it can't).
export function useCourseOutline() {
  const [modules, setModules] = useState(CURRICULUM);

  useEffect(() => {
    let cancelled = false;
    fetchOutline().then((live) => !cancelled && live?.length && setModules(live));
    return () => {
      cancelled = true;
    };
  }, []);

  return { modules, ...summarize(modules) };
}

// "What's included", led by the live lesson count and total length.
export function useCourseIncludes() {
  const { lessonCount, durationLabel } = useCourseOutline();
  return [`${toBnDigits(lessonCount)}টি রেকর্ডেড ভিডিও লেসন (${durationLabel})`, ...COURSE_INCLUDES];
}
