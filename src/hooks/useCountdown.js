import { useEffect, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');

function remaining(endsAt) {
  const ms = new Date(endsAt).getTime() - Date.now();
  if (!(ms > 0)) return null;
  const total = Math.floor(ms / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: pad(Math.floor((total % 86400) / 3600)),
    minutes: pad(Math.floor((total % 3600) / 60)),
    seconds: pad(total % 60),
  };
}

// Counts down to a real deadline; returns null once it has passed.
export function useCountdown(endsAt) {
  const [left, setLeft] = useState(() => remaining(endsAt));

  useEffect(() => {
    const id = setInterval(() => {
      const next = remaining(endsAt);
      setLeft(next);
      if (!next) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  return left;
}
