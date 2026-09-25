const BN = '০১২৩৪৫৬৭৮৯';

export const toBnDigits = (value) => String(value).replace(/\d/g, (d) => BN[d]);

export const toEnDigits = (value) => String(value).replace(/[০-৯]/g, (d) => BN.indexOf(d));

export const formatTaka = (amount) => `৳ ${toBnDigits(amount.toLocaleString('en-IN'))}`;

// Accepts 01XXXXXXXXX, +8801XXXXXXXXX or Bangla digits; returns 01XXXXXXXXX or null.
export function normalizeBdPhone(input) {
  const digits = toEnDigits(input).replace(/\D/g, '').replace(/^88(?=01)/, '');
  return /^01[3-9]\d{8}$/.test(digits) ? digits : null;
}

export const normalizeTrxId = (input) => toEnDigits(input).replace(/\s/g, '').toUpperCase();

export const isValidTrxId = (trxId) => /^[A-Z0-9]{6,20}$/.test(trxId);

export function whatsappLink(phone, text) {
  const number = phone.replace(/^0/, '880');
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
