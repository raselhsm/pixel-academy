// Optional Meta (Facebook) Pixel, enabled by setting VITE_META_PIXEL_ID.
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

let loaded = false;

function load() {
  if (loaded || !PIXEL_ID || typeof window === 'undefined') return;
  loaded = true;
  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  window.fbq('init', PIXEL_ID);
}

export function track(event, params) {
  if (!PIXEL_ID) return;
  load();
  window.fbq('track', event, params);
}
