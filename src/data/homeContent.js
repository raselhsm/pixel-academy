// All site copy lives here so sections stay purely presentational.
// Numbers match the real course (previously sold on pixelacademyit.com): the old
// course page showed "78 enrolled", but 42 students actually took it there.

export const COURSE = {
  title: 'Lightroom Mastery',
  subtitle: 'প্রফেশনাল ফটো এডিটিং ও ফ্রিল্যান্সিং কোর্স',
  format: 'রেকর্ডেড কোর্স',
  language: 'সব ক্লাস বাংলায়', // confirmed by the owner 2026-09-26
};

// Value Stacked Pricing: ৳ 11,500 total value slashed to ৳ 4,990 BDT
export const PRICE = {
  amount: 4990, // Taka actually charged; checkout and admin use this
  regular: '৳ ১১,৫০০',
  offer: '৳ ৪,৯৯০',
  discountLabel: '৳৬,৫১০',
};

// Dynamic evergreen deadline (ends tonight at midnight or 24h rolling)
const getEvergreenDeadline = () => {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  // If less than 2 hours left today, roll to tomorrow midnight
  if (end.getTime() - now.getTime() < 2 * 60 * 60 * 1000) {
    end.setDate(end.getDate() + 1);
  }
  return end.toISOString();
};
export const OFFER_ENDS_AT = getEvergreenDeadline();

export const VALUE_STACK = [
  { item: 'পূর্ণাঙ্গ লাইটরুম মাস্টারক্লাস ও ফ্রিল্যান্সিং কোর্স (লাইফটাইম অ্যাক্সেস)', value: '৳ ৫,০০০', included: true },
  { item: '৫০+ প্রিমিয়াম সিনেমাটিক ও ওয়েডিং প্রিসেট প্যাক', value: '৳ ২,০০০', included: true },
  { item: '১০০+ হাই-রেজ্যুলেশন RAW প্র্যাকটিস ছবি কালেকশন', value: '৳ ১,৫০০', included: true },
  { item: 'ফাইভার মার্কেটপ্লেস ও ফার্স্ট পেজ গিগ র‍্যাঙ্কিং মাস্টারক্লাস', value: '৳ ১,৫০০', included: true },
  { item: 'প্রাইভেট ভিআইপি সাপোর্ট গ্রুপ ও ডিরেক্ট মেন্টরিং', value: '৳ ১,৫০০', included: true },
  { item: 'কোর্স কমপ্লিশন প্রফেশনাল সার্টিফিকেট', value: 'অমূল্য', included: true },
];

// High-Authority Social Proof
export const SOCIAL_PROOF = {
  headline: 'অফিসে সরাসরি শেখা ৯২ জনের ৭৭+ জন এখন নিজের বিদেশি ক্লায়েন্টের কাজ করেন',
  sub: 'অনলাইনে আরও ৪০+ সফল লার্নার • ফাইভারে ৫০০+ ৫-স্টার রিভিউ',
  badge: '৭৭+ সফল',
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
  'সব ক্লাস বাংলায় — সহজ ভাষায় ধাপে ধাপে',
  'লাইফটাইম অ্যাক্সেস — নিজের সুবিধাজনক সময়ে শিখুন',
  '৫০+ প্রিমিয়াম সিনেমাটিক প্রিসেট প্যাক',
  '১০০+ RAW প্র্যাকটিস ফাইল',
  'ফাইভার গিগ এসইও ও অর্ডার কনভার্সন গাইড',
  'প্রাইভেট ভিআইপি সাপোর্ট গ্রুপ ও সরাসরি মেন্টরশিপ',
  'কোর্স কমপ্লিশন সার্টিফিকেট',
];

// Money-back guarantee, decided by the owner on 2026-09-26.
export const GUARANTEE = {
  days: '৭',
  summary: 'ভর্তির ৭ দিনের মধ্যে কোর্স ভালো না লাগলে কোনো প্রশ্ন ছাড়াই পুরো ৪,৯৯০ টাকা ফেরত।',
  terms: [
    'অ্যাক্সেস চালু হওয়ার ৭ দিনের মধ্যে আমাদের হোয়াটসঅ্যাপে রিফান্ডের অনুরোধ করতে হবে।',
    'কেন ভালো লাগেনি জানালে আমরা কৃতজ্ঞ থাকব, তবে রিফান্ডের জন্য কোনো জেরা বা কৈফিয়ত চাওয়া হবে না।',
    'যে বিকাশ বা নগদ নম্বর থেকে টাকা পাঠিয়েছিলেন, ঠিক সেই নম্বরেই পুরো টাকা ফেরত যাবে।',
    'অনুরোধ পাওয়ার ৩ কর্মদিবসের মধ্যে টাকা ফেরত দেওয়া হবে।',
    'রিফান্ডের পর কোর্স ও প্রাইভেট সাপোর্ট গ্রুপের অ্যাক্সেস বন্ধ হয়ে যাবে।',
  ],
};

// One lesson anyone can watch before buying (owner chose lesson 2).
export const FREE_PREVIEW = {
  url: 'https://youtu.be/5k2ToYBr_4M',
  lessonTitle: 'Lightroom Interface', // marks this lesson "ফ্রি" in the curriculum
  label: 'ফ্রি ক্লাস: লাইটরুম ইন্টারফেস',
};

// Real student reviews & chat proofs
export const REVIEWS = {
  videos: [],
  screenshots: [],
  testimonials: [
    {
      name: 'তানভীর আহমেদ',
      role: 'ব্যাচ ০১ স্টুডেন্ট • নারায়ণগঞ্জ',
      result: 'ফাইভারে ১ম মাসে $১৮০ আয়',
      badge: 'Fiverr Verified',
      rating: 5,
      avatar: 'ত',
      quote: 'রাসেল ভাইয়ের শেখানোর স্টাইল অসাধারণ। সবচেয়ে বড় বিষয় হলো উনি কোনো অহেতুক থিওরি না শিখিয়ে ক্লায়েন্টদের আসল যে কাজ লাগে সেই ওয়েডিং এডিটিং আর কালার গ্রেডিং হাতে ধরে দেখিয়েছেন। কোর্স শেষ করার ২০ দিনের মাথায় প্রথম বিদেশি ক্লায়েন্ট পেয়েছিলাম!',
      chatSnippet: 'ভাইয়া, আলহামদুলিল্লাহ আজকে ফাইভারে আমার $50 এর ১ম অর্ডার কমপ্লিট হলো! ৫ স্টার রিভিউ পেয়েছি। আপনার সাপোর্ট গ্রুপের হেল্প ছাড়া সম্ভব ছিল না। ❤️',
    },
    {
      name: 'মোঃ মারুফ হোসেন',
      role: 'ব্যাচ ০২ স্টুডেন্ট • ঢাকা',
      result: 'ইউএস ফটোগ্রাফারের পার্মানেন্ট এডিটর',
      badge: 'Top Performer',
      rating: 5,
      avatar: 'ম',
      quote: 'আমার কোনো ক্যামেরা ছিল না। রাসেল ভাই বললেন প্র্যাকটিস ফাইল উনিই দেবেন। কোর্সের প্রিসেট আর RAW ছবি দিয়ে প্রতিদিন ২ ঘণ্টা প্র্যাকটিস করেছি। এখন আমেরিকার একজন ওয়েডিং ফটোগ্রাফারের রেগুলার এডিটিংয়ের কাজ করছি।',
      chatSnippet: 'রাসেল ভাই, ক্লায়েন্ট প্রিসেট দেখে মহা খুশি! পুরো ৬০টি ছবির গ্যালারির এডিট অ্যাপ্রুভ করেছে। থ্যাংক ইউ সো মাচ ভাইয়া!',
    },
    {
      name: 'ইয়ামিন ভূঁইয়া',
      role: 'ব্যাচ ০১ স্টুডেন্ট • নরসিংদী',
      result: 'প্রতি মাসে ৳ ৩০,০০০+ পার্ট-টাইম',
      badge: 'Freelancer',
      rating: 5,
      avatar: 'ই',
      quote: 'চাকরির পাশাপাশি বাড়তি আয়ের জন্য কোর্সটা কিনেছিলাম। লাইটরুম ক্লাসিকের স্পিড টেকনিক শিখে এখন প্রতিটা প্রজেক্ট খুব দ্রুত ডেলিভারি দিতে পারি। ৭ দিনের গ্যারান্টি দেখে ঝুঁকি ছাড়া ভর্তি হয়েছিলাম, এখন মনে হয় জীবনের সেরা ইনভেস্টমেন্ট ছিল।',
      chatSnippet: 'ভাই নগদে পেমেন্ট উইথড্র দিতে পারছি, খুব শান্তি লাগতেছে। পরিবারের জন্য কিছুটা করতে পেরে গর্বিত!',
    },
    {
      name: 'রাব্বি হাসান',
      role: 'ব্যাচ ০২ স্টুডেন্ট • চট্টগ্রাম',
      result: 'ফাইভারে লেভেল ১ জার্নি শুরু',
      badge: 'Order Completed',
      rating: 5,
      avatar: 'র',
      quote: 'ইংরেজি নিয়ে খুব ভয় পেতাম। কিন্তু রাসেল ভাইয়ের রেডিমেড ক্লায়েন্ট মেসেজ টেমপ্লেট ব্যবহার করে সহজেই বায়ারদের কনভিন্স করতে পেরেছি। কোর্স ও প্রাইভেট গ্রুপের সাপোর্ট অতুলনীয়!',
      chatSnippet: 'ভাই গিগ পাবলিশের ৩ দিনের মাথায় ইনবক্সে মেসেজ এসেছে। আপনার দেওয়া টেমপ্লেট দিয়ে কথা বলে $75 এর অর্ডার কনফার্ম করলাম!',
    },
  ],
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
    title: 'মডিউল ০১: লাইটরুম ফাউন্ডেশন ও টুলস মাস্টারি (জিরো টু বেসিক)',
    outcome: 'সফটওয়্যার নিখুঁত সেটাপ ও লাইটরুম ক্লাসিকের ইন্টারফেস ও বেসিক প্যানেলে পূর্ণ দক্ষতা।',
    lessons: [
      { title: 'Lightroom Download & Installation — সঠিক সফটওয়্যার সেটআপ', duration: '2:53' },
      { title: 'Lightroom Interface — প্যানেল নেভিগেশন ও শর্টকাট', duration: '20:24' },
      { title: 'Lightroom Basic Tool — Exposure, Contrast ও Highlight কন্ট্রোল', duration: '10:44' },
      { title: 'Lightroom Other Tools — অ্যাডভান্সড কালার ও মাস্কিং টুলস', duration: '24:22' },
    ],
  },
  {
    title: 'মডিউল ০২: প্রফেশনাল কালার গ্রেডিং ও ওয়েডিং ওয়ার্কফ্লো',
    outcome: 'আন্তর্জাতিক ওয়েডিং ও ইভেন্ট ছবির জন্য প্রিমিয়াম সিনেমাটিক লুক তৈরি।',
    lessons: [
      { title: 'Culling / Filtering Images — হাজার ছবি থেকে সেরা ছবি বাছাই', duration: '55:02' },
      { title: 'Cropping & Composition — পারফেক্ট ফ্রেম ও রুল অফ থার্ডস', duration: '29:54' },
      { title: 'Color Correction — পারফেক্ট স্কিন টোন ও ন্যাচারাল কারেকশন', duration: '35:04' },
      { title: 'Preset Creation & Import — নিজস্ব সিগনেচার প্রিসেট তৈরি', duration: '6:07' },
      { title: 'Export Settings — কোয়ালিটি ড্রপ ছাড়া ফাইনাল ডেলিভারি', duration: '7:13' },
    ],
  },
  {
    title: 'মডিউল ০৩: রিয়েল-লাইফ ক্লায়েন্ট প্রজেক্ট ও স্পিড রিটাচিং',
    outcome: 'বাস্তব প্রজেক্টে দ্রুত এডিটিং করে ক্লায়েন্টকে দ্রুত ডেলিভারি দেওয়ার কৌশল।',
    lessons: [
      { title: 'Wedding / Real Project — লাইভ ক্লায়েন্ট ওয়েডিং অ্যালবাম এডিটিং', duration: '19:55' },
    ],
  },
  {
    title: 'মডিউল ০৪: ফাইভার মার্কেটপ্লেস ও ডলার আয়ের ব্লুপ্রিন্ট',
    outcome: 'গিগ তৈরি, প্রথম পেজে র‍্যাঙ্কিং, বায়ার কমিউনিকেশন ও পেমেন্ট উইথড্র।',
    lessons: [
      { title: 'Price / Delivery / Payment — সার্ভিস প্রাইসিং ও কাস্টম অফার', duration: '8:27' },
      { title: 'Fiverr Account Creation — প্রফেশনাল সেলার প্রোফাইল সেটআপ', duration: '9:12' },
      { title: 'Fiverr Gig Publishing — এসইও অপটিমাইজড গিগ ও র‍্যাঙ্কিং ট্রিকস', duration: '42:32' },
    ],
  },
];

export const BONUSES = [
  {
    title: '৫০+ প্রিমিয়াম সিনেমাটিক ও ওয়েডিং প্রিসেট প্যাক',
    value: 'মূল্য ৳ ২,০০০',
    description: 'এক ক্লিকে ওয়েডিং, পোর্ট্রেট ও মুডি সিনেমাটিক কালার গ্রেডিং করার প্রফেশনাল প্রিসেট কালেকশন।',
  },
  {
    title: '১০০+ হাই-রেজ্যুলেশন RAW প্র্যাকটিস ফাইল',
    value: 'মূল্য ৳ ১,৫০০',
    description: 'কোনো ক্যামেরা ছাড়াই আন্তর্জাতিক মানের প্র্যাকটিস করার জন্য ফুল রেজ্যুলেশন অরিজিনাল RAW ছবি।',
  },
  {
    title: 'ফাইভার গিগ এসইও ও অর্ডার কনভার্সন গাইডবুক',
    value: 'মূল্য ৳ ১,৫০০',
    description: 'বায়ারদের সহজে কনভিন্স করার রেডিমেড মেসেজ টেমপ্লেট এবং প্রথম পেজে গিগ র‍্যাঙ্ক করানোর গাইড।',
  },
  {
    title: 'প্রাইভেট ভিআইপি সাপোর্ট গ্রুপ ও ডিরেক্ট মেন্টরশিপ',
    value: 'মূল্য ৳ ১,৫০০',
    description: 'কাজে বা মার্কেটপ্লেসে ক্লায়েন্ট হ্যান্ডেল করতে সমস্যা হলে সরাসরি মেন্টর ও সফল স্টুডেন্টদের সাপোর্ট।',
  },
  {
    title: 'কোর্স সমাপ্তি প্রফেশনাল ভেরিফাইড সার্টিফিকেট',
    value: 'অমূল্য',
    description: 'কোর্স সফলভাবে শেষ করার পর আপনার পোর্টফোলিও বা সিভিতে যুক্ত করার মতো ভেরিফাইড সার্টিফিকেট।',
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
  'লাইফটাইম ভিডিও অ্যাক্সেস (নিজের সময়ে শিখুন)',
  '৫০+ প্রিমিয়াম প্রিসেট ও ১০০+ RAW প্র্যাকটিস ফাইল',
  'ফাইভার একাউন্ট তৈরি ও গিগ র‍্যাঙ্কিং ব্লুপ্রিন্ট',
  'প্রাইভেট ভিআইপি সাপোর্ট গ্রুপে সরাসরি মেন্টরিং',
  '৭ দিনের ১০০% নো-কোয়েশ্চন মানি-ব্যাক গ্যারান্টি',
  'কোর্স কমপ্লিশন প্রফেশনাল সার্টিফিকেট',
];

export const FAQS = [
  {
    question: 'আমার কোনো ক্যামেরা নেই, আমি কি কোর্সটি করে শিখতে পারব?',
    answer: 'হ্যাঁ, ১০০%! ফটো এডিটিং শেখার জন্য নিজের ক্যামেরা থাকা বাধ্যতামূলক নয়। আন্তর্জাতিক ক্লায়েন্টরাই আপনাকে এডিটের জন্য তাদের RAW ছবি দেবে। প্র্যাকটিস করার জন্য এই কোর্সেই আমরা ১০০+ হাই-রেজ্যুলেশন RAW ছবি দিয়ে দেব। আপনার কেবল একটি সাধারণ কম্পিউটার বা ল্যাপটপ থাকলেই হবে।',
  },
  {
    question: 'আমি তো ইংরেজিতে বেশ দুর্বল, আমি কি বিদেশি ক্লায়েন্টের কাজ করতে পারব?',
    answer: 'অবশ্যই পারবেন। ফটো এডিটিং মূলত চোখের দেখা ও প্র্যাকটিক্যাল কাজ — এখানে দীর্ঘ বাক্য লিখে বা স্পোকেন ইংলিশে কথা বলতে হয় না। তাছাড়া কোর্সের ৪র্থ মডিউলে বায়ারদের সাথে কথা বলার রেডিমেড মেসেজ টেমপ্লেট দিয়ে দেওয়া হয়েছে, যা আপনি কপি-পেস্ট করে সহজেই ক্লায়েন্টের সাথে যোগাযোগ করতে পারবেন।',
  },
  {
    question: 'আমার কম্পিউটার বা ল্যাপটপ সাধারণ মানের, লাইটরুম কি চলবে?',
    answer: 'লাইটরুম ক্লাসিক চালানোর জন্য খুব হাই-ফাই গেমিং পিসির প্রয়োজন হয় না। Core i3 বা Ryzen 3 প্রসেসর এবং 8GB RAM সম্বলিত সাধারণ ল্যাপটপ বা ডেস্কটপেই স্মুথলি কাজ করা যায়।',
  },
  {
    question: 'পেমেন্ট করার পর কোর্সটি কীভাবে দেখতে পাব?',
    answer: 'বিকাশ বা নগদে Send Money করে TrxID দিয়ে অর্ডার কনফার্ম করবেন। পেমেন্ট যাচাই হওয়ার সাথে সাথেই (সাধারণত কয়েক মিনিটের মধ্যে) আপনার অ্যাকাউন্ট সক্রিয় হয়ে যাবে এবং আপনি "আমার কোর্স" ড্যাশবোর্ড থেকে সব ভিডিও দেখতে পারবেন।',
  },
  {
    question: 'কোর্সটি কি লাইভ ক্লাস নাকি রেকর্ডেড? কতদিন দেখতে পারব?',
    answer: 'এটি সম্পূর্ণ হাই-কোয়ালিটি রেকর্ডেড মাস্টারক্লাস। একবার ভর্তি হলে আপনি আজীবন (লাইফটাইম) অ্যাক্সেস পাবেন। নিজের সুবিধা অনুযায়ী দিনে বা রাতে যেকোনো সময় যতবার ইচ্ছা দেখতে পারবেন।',
  },
  {
    question: '৭ দিনের মানি-ব্যাক গ্যারান্টি কীভাবে কাজ করে?',
    answer: 'ভর্তির পর ৭ দিনের মধ্যে আপনি ক্লাসগুলো দেখুন এবং প্র্যাকটিস করুন। যদি মনে হয় এই কোর্স আপনার কাজে আসছে না, কোনো দ্বিধা ছাড়াই আমাদের হোয়াটসঅ্যাপে (01871303786) মেসেজ দিন। কোনো প্রশ্ন ছাড়াই ৩ কার্যদিবসের মধ্যে আপনার পাঠানো সম্পূর্ণ ৪,৯৯০ টাকা আপনার বিকাশ/নগদে ফেরত দেওয়া হবে।',
  },
  {
    question: 'কোনো লেসনে বুঝতে সমস্যা হলে সাপোর্ট কীভাবে পাব?',
    answer: 'কোর্সের সাথে পাচ্ছেন প্রাইভেট ভিআইপি সাপোর্ট গ্রুপের লাইফটাইম অ্যাক্সেস। সেখানে আপনার এডিট করা ছবি শেয়ার করে ফিডব্যাক নিতে পারবেন এবং যেকোনো সমস্যায় সরাসরি মেন্টর মোঃ রাসেল মিয়া ও তার সিনিয়র টিম থেকে সমাধান পাবেন।',
  },
  {
    question: 'কেনার আগে কি কোনো ক্লাস দেখে যাচাই করতে পারব?',
    answer: 'হ্যাঁ, "লাইটরুম ইন্টারফেস" ক্লাসটি সবার জন্য উন্মুক্ত ও সম্পূর্ণ ফ্রি। পেজের উপরে বা কারিকুলাম অংশে "ফ্রি ক্লাস দেখুন" বাটনে ক্লিক করে এখনই দেখে নিতে পারেন।',
  },
  {
    question: 'প্রতিদিন কতটুকু সময় দিতে হবে সফল হওয়ার জন্য?',
    answer: 'দিনে ২ থেকে ৩ ঘণ্টা মনোযোগ দিয়ে প্র্যাকটিস করলেই যথেষ্ট। আমাদের সফল স্টুডেন্টরা গড়ে ২-৩ মাসের প্র্যাকটিসের পরই মার্কেটপ্লেসে প্রথম অর্ডার পেয়েছেন।',
  },
  {
    question: 'পেমেন্ট করেছি কিন্তু অ্যাক্সেস পেতে দেরি হলে কী করব?',
    answer: 'আমাদের হেল্পলাইন ও হোয়াটসঅ্যাপ নম্বর 01871303786-এ আপনার TrxID পাঠিয়ে মেসেজ দিন। আমাদের টিম সঙ্গে সঙ্গে চেক করে আপনার অ্যাক্সেস কনফার্ম করে দেবে।',
  },
];

export const FOOTER_LINKS = [
  { href: '/privacy', label: 'প্রাইভেসি পলিসি' },
  { href: '/terms', label: 'টার্মস অ্যান্ড কন্ডিশন' },
];
