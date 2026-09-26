// All site copy lives here so sections stay purely presentational.
// Numbers match the real course (previously sold on pixelacademyit.com): the old
// course page showed "78 enrolled", but 42 students actually took it there.

export const COURSE = {
  title: 'Lightroom Mastery',
  subtitle: 'প্রফেশনাল ফটো এডিটিং ও ফ্রিল্যান্সিং কোর্স',
  format: 'রেকর্ডেড কোর্স',
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

// Strongest proof first: the owner's in-person students (confirmed 2026-09-26).
// 42 students also took the course on the old site (Tutor LMS).
export const SOCIAL_PROOF = {
  headline: 'অফিসে শেখা ৯২ জনের ৭৭+ জন এখন নিজের ক্লায়েন্টের কাজ করেন',
  sub: 'অনলাইনে আরও ৪০+ জন কোর্সটি করেছেন',
  badge: '৭৭+',
  // First letters of real students' names (Maruf, Tanvir, Eamin, Rabby).
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

// The lesson count and total length are added in front from the live curriculum.
export const COURSE_INCLUDES = [
  'লাইফটাইম অ্যাক্সেস — নিজের সময়ে শিখুন',
  '৫০+ প্রিমিয়াম প্রিসেট প্যাক',
  '১০০+ RAW প্র্যাকটিস ফাইল',
  'প্রাইভেট সাপোর্ট গ্রুপ',
  'কোর্স কমপ্লিশন সার্টিফিকেট',
];

// Money-back guarantee, decided by the owner on 2026-09-26.
export const GUARANTEE = {
  days: '৭',
  summary: 'ভর্তির ৭ দিনের মধ্যে কোর্স ভালো না লাগলে পুরো টাকা ফেরত।',
  terms: [
    'অ্যাক্সেস চালু হওয়ার ৭ দিনের মধ্যে হোয়াটসঅ্যাপে রিফান্ডের অনুরোধ করতে হবে।',
    'কেন ভালো লাগেনি জানালে আমরা কৃতজ্ঞ থাকব, তবে রিফান্ডের জন্য কোনো জেরা করা হবে না।',
    'যে বিকাশ বা নগদ নম্বর থেকে টাকা পাঠিয়েছিলেন, সেই নম্বরেই টাকা ফেরত যাবে।',
    'অনুরোধ পাওয়ার ৩ কর্মদিবসের মধ্যে টাকা ফেরত দেওয়া হবে।',
    'রিফান্ডের পর কোর্স ও প্রাইভেট গ্রুপের অ্যাক্সেস বন্ধ হয়ে যাবে।',
  ],
};

// One lesson anyone can watch before buying (owner chose lesson 2).
export const FREE_PREVIEW = {
  url: 'https://youtu.be/5k2ToYBr_4M',
  lessonTitle: 'Lightroom Interface', // marks this lesson "ফ্রি" in the curriculum
  label: 'ফ্রি ক্লাস: লাইটরুম ইন্টারফেস',
};

// Real student reviews only, used with their permission. Put files in
// /public/reviews/ and add entries here; the section stays hidden while empty.
//   videos:      { name, detail, youtubeUrl }           (record vertically, 9:16)
//   screenshots: { src: '/reviews/1.jpg', caption }
export const REVIEWS = {
  videos: [],
  screenshots: [],
};

export const REQUIREMENTS = [
  'একটা ল্যাপটপ বা ডেস্কটপ কম্পিউটার',
  'প্র্যাকটিসের RAW ছবি আমরাই দেব — ক্যামেরা না থাকলেও চলবে',
  'দিনে ২-৪ ঘণ্টা সময় আর নিয়মিত প্র্যাকটিস',
];

export const INCOME_DISCLAIMER =
  'আয় নির্ভর করে আপনার প্র্যাকটিস, কাজের মান আর চেষ্টার উপর। আমরা কোনো নির্দিষ্ট আয়ের গ্যারান্টি দিই না — পথটা হাতে ধরে দেখাই।';

export const HOW_TO_BUY = [
  { title: 'কোর্সটি কিনুন বাটনে ক্লিক করুন', text: 'নাম, মোবাইল নম্বর ও ইমেইল দিয়ে অ্যাকাউন্ট খুলুন।' },
  { title: 'বিকাশ / নগদে Send Money করুন', text: '01871303786 নম্বরে ৪,৯৯০ টাকা পাঠান।' },
  { title: 'TrxID দিয়ে অর্ডার কনফার্ম করুন', text: 'যাচাই হলেই লগইন করে কোর্স দেখা শুরু করুন।' },
];

export const NAV_LINKS = [
  { href: '#for-whom', label: 'কাদের জন্য' },
  { href: '#instructor', label: 'মেন্টর' },
  { href: '#curriculum', label: 'কারিকুলাম' },
  { href: '#bonuses', label: 'বোনাস' },
  { href: '#pricing', label: 'দাম' },
  { href: '#faq', label: 'প্রশ্নোত্তর' },
];

// Intro video in the hero card: an unlisted YouTube link, e.g.
// 'https://youtu.be/XXXXXXXXXXX'. While it's null the before/after slider shows
// there instead; once set, the slider moves to the editing-styles section.
export const PROMO_VIDEO_URL = 'https://youtu.be/MA0IYwbQCIs';

// Hero before/after. Put your own edit in /public (e.g. /hero-before.jpg and
// /hero-after.jpg) and set both paths; until then one photo is shown with a
// flat "RAW-like" filter on the left side.
export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80';
export const HERO_BEFORE_IMAGE = null;

export const TRUST_METRICS = [
  { value: '৯২ জন', label: 'অফিসে সরাসরি শিখেছেন', accent: false },
  { value: '৭৭+', label: 'স্টুডেন্ট এখন ক্লায়েন্টের কাজ করেন', accent: true },
  { value: '৪০+', label: 'অনলাইনে কোর্সটি করেছেন', accent: false },
  { value: '২০১৮', label: 'থেকে বিদেশি ক্লায়েন্টের কাজ', accent: true },
];

// Who the course is for, from the old course page's target audience.
export const FOR_WHOM = [
  'মোবাইলে ছবি এডিট করেন, এবার প্রফেশনালি শিখে আয় করতে চান',
  'চাকরি বা পড়াশোনার পাশাপাশি বাড়তি আয় করতে চান',
  'বাইরে গিয়ে কাজ করা সম্ভব নয়, ঘরে বসে আয় করতে চান',
  'কোনো অভিজ্ঞতা নেই — একদম শুরু থেকে শিখতে চান',
];

// Being honest about who it isn't for builds trust with the right buyers.
export const NOT_FOR = [
  'রাতারাতি আয়ের শর্টকাট খুঁজছেন',
  'দিনে ২-৪ ঘণ্টা প্র্যাকটিসের সময় দিতে পারবেন না',
  'কম্পিউটার বা ল্যাপটপ নেই (লাইটরুম ক্লাসিক কম্পিউটারে চলে)',
];

// Illustrative photos of the editing styles taught; replace with your own work.
export const GALLERY = [
  {
    label: 'ওয়েডিং',
    title: 'ওয়েডিং ও ইভেন্ট ফটো এডিটিং',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'কালার কারেকশন',
    title: 'ন্যাচারাল স্কিন টোন ও কালার কারেকশন',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'কাস্টম প্রিসেট',
    title: 'নিজের প্রিসেট দিয়ে এক রকম লুক',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
  },
];

// Fallback only: the live curriculum is loaded from the database (lessons you
// add in /admin/content show up automatically). Shown until that loads.
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

// Facts confirmed by the owner (Sept 2026) plus the old site's Fiverr record.
export const INSTRUCTOR = {
  name: 'মোঃ রাসেল মিয়া',
  role: 'প্রফেশনাল ফটো এডিটর • Fiverr Level 2 Seller',
  // Path to a real photo in /public, e.g. '/rasel.jpg'. Without one, a monogram shows.
  photo: null,
  initial: 'রা',
  bio: [
    '২০১৮ সাল থেকে রাসেল আমেরিকা, যুক্তরাজ্য আর ইউরোপের ফটোগ্রাফারদের ছবি এডিট করছেন। ফাইভারে ৫-স্টার রিভিউসহ ৫০০+ অর্ডার সম্পন্ন করেছেন, আর বর্তমানে ৩০+ প্রফেশনাল এডিটরের একটি টিম পরিচালনা করছেন।',
    'নিজের অফিসে সরাসরি ক্লাস নিয়ে এ পর্যন্ত ৯২ জনকে এডিটিং শিখিয়েছেন, যাদের ৭৭+ জন এখন নিজের ক্লায়েন্টের কাজ করেন। এই অনলাইন কোর্সে সেই একই পদ্ধতি, যাতে দেশের যেকোনো জায়গা থেকে শেখা যায়।',
  ],
  // Shown like Lightroom's Metadata panel.
  metadata: [
    { label: 'কাজ শুরু', value: '২০১৮ সাল' },
    { label: 'ক্লায়েন্ট', value: 'আমেরিকা, যুক্তরাজ্য, ইউরোপ' },
    { label: 'Fiverr', value: 'লেভেল ২ সেলার' },
    { label: 'Fiverr অর্ডার', value: '৫০০+ (৫-স্টার)' },
    { label: 'Fiverr আয়', value: '$২১,০০০+' },
    { label: 'লাইফটাইম আয়', value: '$১,০০,০০০+' },
    { label: 'অফলাইন স্টুডেন্ট', value: '৯২ জন' },
    { label: 'ক্লায়েন্ট পেয়েছেন', value: '৭৭+ জন স্টুডেন্ট' },
  ],
  quote: 'আমি নিজে প্রতিদিন বিদেশি ক্লায়েন্টের কাজ করি। এই কোর্সে ঠিক সেই ওয়ার্কফ্লোটাই শেখাই — কোনো থিওরি না, যেটা দিয়ে আসলে কাজ হয়।',
};
// The first line (lessons + length) comes from the live curriculum.
export const PRICING_FEATURES = [
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
    answer: 'এটি সম্পূর্ণ রেকর্ডেড কোর্স। একবার কিনলে লাইফটাইম অ্যাক্সেস — যখন খুশি, যতবার খুশি দেখতে পারবেন।',
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
    question: 'কোর্স ভালো না লাগলে কি টাকা ফেরত পাব?',
    answer: 'হ্যাঁ। অ্যাক্সেস চালু হওয়ার ৭ দিনের মধ্যে হোয়াটসঅ্যাপে জানালে যে বিকাশ/নগদ নম্বর থেকে পাঠিয়েছিলেন, সেই নম্বরে ৩ কর্মদিবসের মধ্যে পুরো টাকা ফেরত দেওয়া হবে।',
  },
  {
    question: 'কেনার আগে কি কোনো ক্লাস দেখে নিতে পারব?',
    answer: 'হ্যাঁ, "লাইটরুম ইন্টারফেস" ক্লাসটি সবার জন্য ফ্রি — পেজের উপরে বা কারিকুলামে "ফ্রি ক্লাস দেখুন" বাটনে চাপুন।',
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
