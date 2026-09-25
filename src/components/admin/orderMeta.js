// Order status labels and date formatting shared by the admin pages.

export const STATUS = {
  pending: { label: 'যাচাই বাকি', badge: 'bg-amber-500/15 text-amber-300' },
  approved: { label: 'অনুমোদিত', badge: 'bg-emerald-500/15 text-emerald-300' },
  rejected: { label: 'বাতিল', badge: 'bg-red-500/15 text-red-300' },
};

export const METHOD_LABELS = { bkash: 'বিকাশ', nagad: 'নগদ', manual: 'ম্যানুয়াল (অ্যাডমিন)' };

export const formatDateTime = (iso) =>
  new Date(iso).toLocaleString('bn-BD', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
