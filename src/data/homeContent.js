// All site copy lives here so sections stay purely presentational.
// Numbers match the real course (previously sold on pixelacademyit.com).

export const COURSE = {
  title: 'Lightroom Mastery',
  subtitle: 'প্রফেশনাল ফটো এডিটিং ও ফ্রিল্যান্সিং কোর্স',
  format: 'রেকর্ডেড কোর্স',
  lessons: '১৩টি লেসন',
  duration: '৮ ঘণ্টা ২০ মিনিট',
};

export const PRICE = {
  amount: 4990, // Taka actually charged; checkout and the admin panel use this.
  regular: '৳ ৬,৪৯০',
  offer: '৳ ৪,৯৯০',
  discountLabel: '৳১,৫০০',
};

// End of a limited-time offer, e.g. '2026-10-31T23:59:59+06:00'. Countdowns
// only show while a real deadline is set and hide themselves after it passes.
export const OFFER_ENDS_AT = null;

export const SOCIAL_PROOF = {
  rating: '5.0',
  reviews: '৪টি রিভিউ',
  students: '৭৮+',
  // First letters of real students' names (Maruf, Tanvir, Eamin, Rabby, Fahad).
  initials: ['ম', 'ত', 'ই', 'র'],
};

export const CONTACT = {
  phone: '01871303786',
  email: 'pixelacademyit@gmail.com',
  address: 'West Atadi, Araihazar, Narayanganj 1450',
  facebook: 'https://www.facebook.com/pixelacademyit',
  youtube: 'https://www.youtube.com/@pixelacademyit',
};

export const SUPPORT_PHONE = CONTACT.phone;
export const WHATSAPP_URL = 'https://wa.me/8801871303786';

export const PAYMENT = {
  number: '01871303786',
  type: 'Send Money',
  verifyTime: 'সাধারণত কয়েক ঘণ্টার মধ্যে',
  methods: {
    bkash: { label: 'বিকাশ', ussd: '*247#', app: 'bKash অ্যাপ' },
    nagad: { label: 'নগদ', ussd: '*167#', app: 'Nagad অ্যাপ' },
  },
};

export const COURSE_INCLUDES = [
  '১৩টি রেকর্ডেড লেসন (৮ ঘণ্টা ২০ মিনিট)',
  'লাইফটাইম অ্যাক্সেস — নিজের সময়ে শিখুন',
  '৫০+ প্রিমিয়াম প্রিসেট প্যাক',
  '১০০+ RAW প্র্যাকটিস ফাইল',
  'প্রাইভেট সাপোর্ট গ্রুপ',
  'কোর্স কমপ্লিশন সার্টিফিকেট',
];

export const HOW_TO_BUY = [
  { title: 'কোর্সটি কিনুন বাটনে ক্লিক করুন', text: 'নাম, মোবাইল নম্বর ও ইমেইল দিয়ে অ্যাকাউন্ট খুলুন।' },
  { title: 'বিকাশ / নগদে Send Money করুন', text: '01871303786 নম্বরে ৪,৯৯০ টাকা পাঠান।' },
  { title: 'TrxID দিয়ে অর্ডার কনফার্ম করুন', text: 'যাচাই হলেই লগইন করে কোর্স দেখা শুরু করুন।' },
];

export const NAV_LINKS = [
  { href: '#why', label: 'কেন শিখবেন?' },
  { href: '#curriculum', label: 'কারিকুলাম' },
  { href: '#gallery', label: 'এডিটিং স্টাইল' },
  { href: '#bonuses', label: 'বোনাস' },
  { href: '#instructor', label: 'মেন্টর' },
  { href: '#faq', label: 'প্রশ্নোত্তর' },
];

// Hero before/after. Put your own edit in /public (e.g. /hero-before.jpg and
// /hero-after.jpg) and set both paths; until then one photo is shown with a
// flat "RAW-like" filter on the left side.
export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80';
export const HERO_BEFORE_IMAGE = null;

export const TRUST_METRICS = [
  { value: '৭৮+', label: 'শিক্ষার্থী কোর্সটিতে ভর্তি হয়েছেন', accent: false },
  { value: '৮ ঘণ্টা+', label: 'রেকর্ডেড ভিডিও লেসন', accent: true },
  { value: '৫০০+', label: 'ফাইভার অর্ডার সম্পন্ন করেছেন মেন্টর', accent: false },
  { value: '$১ লাখ+', label: 'মেন্টরের ফ্রিল্যান্সিং আয়', accent: true },
];

export const PAIN_POINTS = [
  'ইউটিউবের এলোমেলো টিউটোরিয়াল দেখে পুরো ওয়ার্কফ্লো বুঝতে না পারা।',
  'শত শত ওয়েডিং ছবি থেকে বাছাই (Culling) করতে দিনের পর দিন লেগে যাওয়া।',
  'কালার ও স্কিন টোন ঠিক না হওয়ায় ক্লায়েন্টের রিজেক্ট বা ব্যাড রিভিউ পাওয়া।',
  'ফাইভারে অ্যাকাউন্ট ও গিগ ঠিকভাবে সাজাতে না পারায় অর্ডার না পাওয়া।',
];

export const OUTCOMES = [
  'লাইটরুমের প্রতিটি টুল বেসিক থেকে অ্যাডভান্সড পর্যন্ত হাতে-কলমে ব্যবহার।',
  'দ্রুত Culling, ক্রপিং ও প্রফেশনাল কালার কারেকশনের ওয়ার্কফ্লো।',
  'নিজের প্রিসেট বানিয়ে ওয়েডিং প্রজেক্ট দ্রুত শেষ করে ক্লায়েন্টকে ডেলিভারি।',
  'ফাইভার অ্যাকাউন্ট খোলা, গিগ পাবলিশ এবং প্রাইস ও পেমেন্ট হ্যান্ডেল করা।',
];

// Illustrative photos of the editing styles taught; replace with your own work.
export const GALLERY = [
  {
    tag: 'WEDDING EDITING',
    title: 'ওয়েডিং ও ইভেন্ট ফটো এডিটিং',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'COLOR CORRECTION',
    title: 'ন্যাচারাল স্কিন টোন ও কালার কারেকশন',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'CUSTOM PRESETS',
    title: 'নিজের প্রিসেট দিয়ে এক রকম লুক',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
  },
];

export const CURRICULUM = [
  {
    title: 'লাইটরুম বেসিক',
    lessons: [
      { title: 'Lightroom Download & Installation', duration: '2:53' },
      { title: 'Lightroom Interface', duration: '20:24' },
      { title: 'Lightroom Basic Tool', duration: '10:44' },
      { title: 'Lightroom Other Tools', duration: '24:22' },
    ],
  },
  {
    title: 'প্রফেশনাল এডিটিং ওয়ার্কফ্লো',
    lessons: [
      { title: 'Culling / Filtering Images', duration: '55:02' },
      { title: 'Cropping', duration: '29:54' },
      { title: 'Color Correction', duration: '35:04' },
      { title: 'Preset Creation & Import', duration: '6:07' },
      { title: 'Export Settings', duration: '7:13' },
    ],
  },
  {
    title: 'রিয়েল ওয়েডিং প্রজেক্ট',
    lessons: [{ title: 'Wedding / Real Project', duration: '19:55' }],
  },
  {
    title: 'ফ্রিল্যান্সিং ও ফাইভার',
    lessons: [
      { title: 'Price / Delivery / Payment', duration: '8:27' },
      { title: 'Fiverr Account Creation', duration: '9:12' },
      { title: 'Fiverr Gig Publishing', duration: '42:32' },
    ],
  },
];

export const BONUSES = [
  {
    title: '৫০+ প্রিমিয়াম প্রিসেট প্যাক',
    description: 'এক ক্লিকে ওয়েডিং ও সিনেমাটিক কালার গ্রেডিং করার প্রিসেট কালেকশন।',
  },
  {
    title: '১০০+ RAW প্র্যাকটিস ফাইল',
    description: 'কোর্সের সাথে সাথে প্র্যাকটিস করার জন্য ফুল রেজ্যুলেশন RAW ছবি।',
  },
  {
    title: 'প্রাইভেট সাপোর্ট গ্রুপ',
    description: 'কাজে বা মার্কেটপ্লেসে ক্লায়েন্ট হ্যান্ডেল করতে সমস্যা হলে সরাসরি মেন্টরের সাপোর্ট।',
  },
];

export const INSTRUCTOR = {
  name: 'রাসেল',
  role: 'ফাউন্ডার, পিক্সেল একাডেমি আইটি • Fiverr Level 2 Seller',
  // Path to a real photo in /public, e.g. '/rasel.jpg'. Without one, a monogram shows.
  photo: null,
  initial: 'র',
  bio: 'ফাইভারে ৫-স্টার রিভিউসহ ৫০০+ অর্ডার সম্পন্ন করেছেন, ফ্রিল্যান্সিং থেকে লাইফটাইম আয় $১,০০,০০০+। বর্তমানে ৩০+ প্রফেশনাল এডিটরের একটি টিম পরিচালনা করছেন। রিয়েল ক্লায়েন্টদের কাজ যে ওয়ার্কফ্লোতে করা হয়, এই কোর্সে ঠিক সেটাই হাতে-কলমে শেখানো হয়েছে।',
  stats: [
    { value: '৫০০+', label: 'ফাইভার অর্ডার' },
    { value: '$১০০k+', label: 'লাইফটাইম আয়' },
    { value: '৩০+', label: 'এডিটরের টিম' },
  ],
};

export const PRICING_FEATURES = [
  '১৩টি রেকর্ডেড লেসন (৮ ঘণ্টা+)',
  'লাইফটাইম ভিডিও অ্যাক্সেস',
  '৫০+ প্রিসেট ও ১০০+ RAW ফাইল',
  'ফাইভার অ্যাকাউন্ট ও গিগ গাইড',
  'প্রাইভেট সাপোর্ট গ্রুপ',
  'কোর্স কমপ্লিশন সার্টিফিকেট',
];

export const FAQS = [
  {
    question: 'পেমেন্ট করার পর কোর্সটি কীভাবে দেখব?',
    answer: 'বিকাশ বা নগদে Send Money করে TrxID দিয়ে অর্ডার কনফার্ম করুন। পেমেন্ট যাচাই হলেই (সাধারণত কয়েক ঘণ্টার মধ্যে) আপনার ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করে "আমার কোর্স" পেজ থেকে সব ভিডিও দেখতে পারবেন।',
  },
  {
    question: 'কোর্সটি কি লাইভ নাকি রেকর্ডেড? কতদিন দেখতে পারব?',
    answer: 'এটি সম্পূর্ণ রেকর্ডেড কোর্স (১৩টি লেসন, মোট ৮ ঘণ্টা ২০ মিনিট)। একবার কিনলে লাইফটাইম অ্যাক্সেস — যখন খুশি, যতবার খুশি দেখতে পারবেন।',
  },
  {
    question: 'আমার কোনো পূর্ব অভিজ্ঞতা নেই, আমি কি শিখতে পারব?',
    answer: 'হ্যাঁ, কোর্সটি একদম জিরো থেকে সাজানো — লাইটরুম ইনস্টল করা থেকে শুরু। কম্পিউটার চালাতে জানলেই আপনি শিখতে পারবেন।',
  },
  {
    question: 'প্রতিদিন কতটুকু সময় দিতে হবে?',
    answer: 'দিনে ২-৪ ঘণ্টা সময় দিয়ে নিয়মিত প্র্যাকটিস করলে ৩-৪ মাসের মধ্যে ক্লায়েন্টের কাজ করার মতো দক্ষ হয়ে ওঠা সম্ভব। তবে ফলাফল আপনার প্র্যাকটিসের উপর নির্ভর করবে।',
  },
  {
    question: 'কোনো সমস্যা হলে সাপোর্ট কীভাবে পাব?',
    answer: 'কোর্সের সাথে একটি প্রাইভেট সাপোর্ট গ্রুপ রয়েছে, যেখানে সরাসরি মেন্টর আপনার কাজের ফিডব্যাক এবং সমস্যার সমাধান দেবেন।',
  },
  {
    question: 'আগের ওয়েবসাইট থেকে কোর্সটি কিনেছিলাম, এখন কীভাবে দেখব?',
    answer: 'যে ইমেইল দিয়ে আগে কিনেছিলেন, সেই ইমেইল দিয়ে এখানে অ্যাকাউন্ট খুলুন এবং হোয়াটসঅ্যাপে (01871303786) জানান। আমরা যাচাই করে কোনো টাকা ছাড়াই অ্যাক্সেস চালু করে দেব।',
  },
  {
    question: 'পেমেন্ট করেছি কিন্তু এখনো অ্যাক্সেস পাইনি, কী করব?',
    answer: 'আপনার TrxID সহ আমাদের হোয়াটসঅ্যাপে (01871303786) মেসেজ দিন, আমরা দ্রুত চেক করে অ্যাক্সেস চালু করে দেব।',
  },
  {
    question: 'মোবাইল দিয়ে কি কোর্সটি করা সম্ভব?',
    answer: 'ভিডিওগুলো মোবাইলেও দেখা যাবে, তবে কোর্সটি লাইটরুম ক্লাসিক (কম্পিউটার/ল্যাপটপ) বেইজড। মার্কেটপ্লেসে কাজ করতে ল্যাপটপ বা পিসি প্রয়োজন।',
  },
];

export const FOOTER_LINKS = [
  { href: '/privacy', label: 'প্রাইভেসি পলিসি' },
  { href: '/terms', label: 'টার্মস অ্যান্ড কন্ডিশন' },
];
