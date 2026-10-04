// Order status labels and date formatting shared by the admin pages.

export const STATUS = {
  pending: { label: 'যাচাই বাকি', badge: 'bg-amber-50 text-amber-800 border border-amber-200' },
  approved: { label: 'অনুমোদিত', badge: 'bg-emerald-50 text-emerald-800 border border-emerald-200' },
  rejected: { label: 'বাতিল', badge: 'bg-red-50 text-red-800 border border-red-200' },
};

export const METHOD_LABELS = { bkash: 'বিকাশ', nagad: 'নগদ', manual: 'ম্যানুয়াল (অ্যাডমিন)' };

export const formatDateTime = (iso) =>
  new Date(iso).toLocaleString('bn-BD', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
