import { useEffect, useState } from 'react';

const INITIAL_SECONDS = 8 * 3600 + 45 * 60 + 20;
const CYCLE_SECONDS = 8 * 3600;

// Shared at module level so every countdown on the page shows the same time.
let deadline = Date.now() + INITIAL_SECONDS * 1000;

function secondsLeft() {
  let left = Math.ceil((deadline - Date.now()) / 1000);
  if (left <= 0) {
    // Demo offer: roll over into a fresh cycle instead of hitting zero.
    deadline = Date.now() + CYCLE_SECONDS * 1000;
    left = CYCLE_SECONDS;
  }
  return left;
}

const pad = (n) => String(n).padStart(2, '0');

export function useCountdown() {
  const [left, setLeft] = useState(secondsLeft);

  useEffect(() => {
    const id = setInterval(() => setLeft(secondsLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return {
    hours: pad(Math.floor(left / 3600)),
    minutes: pad(Math.floor((left % 3600) / 60)),
    seconds: pad(left % 60),
  };
}
