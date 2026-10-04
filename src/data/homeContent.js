// All site copy lives here so sections stay purely presentational.
// Numbers match the real course (previously sold on pixelacademyit.com): the old
// course page showed "78 enrolled", but 42 students actually took it there.

export const COURSE = {
  title: 'Lightroom Mastery',
  fullTitle: 'প্রফেশনাল লাইটরুম ফটো এডিটিং ও ফ্রিল্যান্সিং মাস্টারক্লাস',
  subtitle: 'প্রফেশনাল ফটো এডিটিং ও ফ্রিল্যান্সিং কোর্স',
  format: 'রেকর্ডেড কোর্স',
  language: 'সব ক্লাস বাংলায়', // confirmed by the owner 2026-09-26
};

// Price set by the owner on 2026-10-05. 6,500 → 4,110 is 37% off.
export const PRICE = {
  amount: 4110, // Taka actually charged; checkout and the admin panel use this.
  regular: '৳ ৬,৫০০',
  offer: '৳ ৪,১১০',
  discountLabel: '৩৭%',
};

// Owner-confirmed rating shown in the navbar and hero (2026-10-05).
export const RATING = '৪.৯/৫';

// End of a limited-time offer, e.g. '2026-10-31T23:59:59+06:00'. Countdowns
// only show while a real deadline is set and hide themselves after it passes.
export const OFFER_ENDS_AT = '2026-10-31T23:59:59+06:00';

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
  'সব ক্লাস বাংলায় — সহজ ভাষায় ধাপে ধাপে',
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
//   testimonials: { name, detail, result, text, photo? }  (written feedback)
export const REVIEWS = {
  testimonials: [],
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

export const HERO = {
  trustBadge: `২০২৬ সালের আপডেটেড লাইটরুম কারিকুলাম • ${RATING} স্টার রেটিং`,
  prerequisite: 'ল্যাপটপ বা ডেস্কটপ ব্যবহারকারীদের জন্য',
  headline: 'সাধারণ RAW ছবিকে বানান আন্তর্জাতিক মানের প্রফেশনাল ফটো',
  headlineAccent: 'লাইটরুম শিখে শুরু করুন নিশ্চিত ফ্রিল্যান্সিং ক্যারিয়ার',
  subheadline:
    'কোনো পূর্ব গ্রাফিক্স ডিজাইনের অভিজ্ঞতা ছাড়াই জিরো থেকে অ্যাডভান্সড কালার গ্রেডিং, স্কিন রিটাচিং এবং লোকাল ও ফাইভারে ক্লায়েন্ট পাওয়ার কমপ্লিট গাইডলাইন।',
  checklist: [
    '৫০+ প্রিমিয়াম ওয়েডিং ও সিনেমাটিক প্রিসেট ফ্রি (মূল্য ৳ ৩,০০০)',
    '১০০+ 4K RAW প্র্যাকটিস প্রজেক্ট ফাইলস',
    'মার্কেটপ্লেস ও লোকাল ক্লায়েন্ট হান্টিং স্ট্র্যাটেজি',
    'ডেডিকেটেড ভিআইপি সাপোর্ট ও লাইভ Q&A',
  ],
  videoStats: [
    { value: '১০০%', label: 'প্র্যাকটিক্যাল' },
    { value: '৪টি', label: 'ডেডিকেটেড মডিউল' },
    { value: 'লাইফটাইম', label: 'অ্যাক্সেস' },
  ],
};

// Before/after tabs. Photos are illustrative stock with a flat "RAW-like"
// filter on the before side; swap in your own pairs (beforeImage) when ready.
export const BEFORE_AFTER = [
  {
    key: 'wedding',
    label: 'ওয়েডিং ও ইভেন্ট',
    title: 'ওয়েডিং ও ইভেন্ট গ্রেডিং',
    text: 'ইভেন্টের শত শত ছবিতে এক রকম উষ্ণ, ক্লিন আর রোমান্টিক টোন।',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
    beforeImage: null,
  },
  {
    key: 'portrait',
    label: 'সিনেমাটিক পোর্ট্রেট',
    title: 'সিনেমাটিক পোর্ট্রেট ও স্কিন টোন',
    text: 'HSL আর কালার গ্রেডিং দিয়ে ন্যাচারাল স্কিন টোন আর সিনেমাটিক মুড।',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=80',
    beforeImage: null,
  },
  {
    key: 'landscape',
    label: 'গোল্ডেন আওয়ার',
    title: 'আউটডোর ল্যান্ডস্কেপ / গোল্ডেন আওয়ার',
    text: 'আকাশ, আলো আর রঙ ঠিক করে ছবিতে গোল্ডেন আওয়ারের গভীরতা।',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
    beforeImage: null,
  },
];

// Lucide icon names are mapped in the section.
export const AUDIENCE = [
  { icon: 'camera', title: 'ফটোগ্রাফার ও স্টুডিও ওনার', text: 'যারা ডেলিভারি কোয়ালিটি বাড়িয়ে বেশি চার্জ করতে চান।' },
  { icon: 'laptop', title: 'ফ্রিল্যান্সার ও বিগিনার', text: 'যারা ফটো এডিটিংকে মূল স্কিল বানিয়ে ডলার আয় করতে চান।' },
  { icon: 'sparkles', title: 'কন্টেন্ট ক্রিয়েটর', text: 'যাদের সোশ্যাল মিডিয়া প্রেজেন্সের জন্য প্রিমিয়াম ছবি প্রয়োজন।' },
  { icon: 'home', title: 'ঘরে বসে ইনকাম করতে ইচ্ছুক যে কেউ', text: 'যাদের একটি কম্পিউটার ও শেখার আগ্রহ আছে।' },
];

// Bonuses confirmed by the owner on 2026-10-05.
export const BONUSES = [
  { title: '৫০+ প্রো সিনেমাটিক ও ওয়েডিং প্রিসেট বান্ডেল', value: '৳ ৩,০০০' },
  { title: '১০০+ হাই-রেজোলিউশন RAW প্র্যাকটিস ফাইলস', value: '৳ ২,০০০' },
  { title: 'লোকাল ওয়েডিং ফটোগ্রাফারদের ক্লায়েন্ট আউটরিচ ইমেইল টেমপ্লেট', value: '৳ ১,৫০০' },
  { title: 'লাইফটাইম প্রাইভেট সাপোর্ট গ্রুপ ও উইকলি লাইভ সাপোর্ট', value: 'অমূল্য' },
];
export const BONUS_TOTAL = '৳ ৬,৫০০+';

// What each module leads to, written from its real lessons. Matched by position;
// modules added later in /admin/content simply show without one.
export const MODULES = [
  { title: 'লাইটরুম ইন্টারফেস ও এসেনশিয়াল বেসিক্স', topics: 'টুলস, ইমপোর্ট, ক্যাটালগ ম্যানেজমেন্ট' },
  { title: 'প্রো এডিটিং ও কালার গ্রেডিং সাইকোলজি', topics: 'HSL, কার্ভস, স্কিন টোন ব্যালেন্স' },
  { title: 'রিয়েল-লাইফ প্রজেক্ট এডিটিং', topics: 'ওয়েডিং, আউটডোর, ফ্যাশন মডেল ও প্রোডাক্ট' },
  { title: 'ফ্রিল্যান্সিং, ফাইভার মার্কেটপ্লেস ও লোকাল ক্লায়েন্ট হান্টিং', topics: 'প্রাইসিং, গিগ, ক্লায়েন্ট আউটরিচ' },
];

export const MODULE_OUTCOMES = [
  'লাইটরুম ক্লাসিক ইনস্টল থেকে শুরু করে ইন্টারফেস, বেসিক আর বাকি সব টুল আত্মবিশ্বাসের সাথে ব্যবহার।',
  'শত শত ছবি থেকে দ্রুত বাছাই (Culling), ক্রপিং, প্রফেশনাল কালার কারেকশন, নিজের প্রিসেট তৈরি আর ক্লায়েন্টের জন্য সঠিক এক্সপোর্ট।',
  'একটা আসল ওয়েডিং প্রজেক্ট শুরু থেকে ডেলিভারি পর্যন্ত এডিট করা দেখে নিজে প্র্যাকটিস।',
  'কাজের দাম, ডেলিভারি আর পেমেন্ট ঠিক করা, ফাইভার অ্যাকাউন্ট খোলা আর গিগ পাবলিশ করা।',
];

export const PROMO_VIDEO_URL = 'https://youtu.be/MA0IYwbQCIs';

// Course thumbnail on the checkout box and order summary.
export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80';

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

export const FAQS = [
  {
    question: 'কোর্সটি করতে কী ধরনের কম্পিউটার প্রয়োজন?',
    answer: 'লাইটরুম ক্লাসিক চলে এমন যেকোনো ল্যাপটপ বা ডেস্কটপ (Windows বা Mac) হলেই চলবে। ৮ জিবি র‍্যাম হলে ভালো, তবে কম কনফিগারেশনেও শুরু করা যায়। প্র্যাকটিসের RAW ছবি আমরাই দেব, ক্যামেরা লাগবে না।',
  },
  {
    question: 'এটি কি লাইভ নাকি রেকর্ডেড?',
    answer: 'মূল ক্লাসগুলো রেকর্ডেড, তাই নিজের সময়ে যতবার খুশি দেখতে পারবেন। সাথে প্রাইভেট গ্রুপে সাপোর্ট আর সাপ্তাহিক লাইভ Q&A থাকছে, যেখানে সরাসরি প্রশ্ন করতে পারবেন।',
  },
  {
    question: 'আমি একদম নতুন, আমি কি পারবো?',
    answer: 'হ্যাঁ। কোর্সটি একদম জিরো থেকে সাজানো — লাইটরুম ইনস্টল করা থেকে শুরু। সব ক্লাস সহজ বাংলায়; কম্পিউটার চালাতে জানলেই শিখতে পারবেন।',
  },
  {
    question: 'কাজ আটকে গেলে সাপোর্ট পাবো কীভাবে?',
    answer: 'প্রাইভেট সাপোর্ট গ্রুপে প্রশ্ন বা ছবি পোস্ট করলেই মেন্টর ফিডব্যাক দেবেন। সাপ্তাহিক লাইভ Q&A আর হোয়াটসঅ্যাপ (01871303786) সাপোর্টও আছে।',
  },
  {
    question: 'কোর্স অ্যাক্সেসের মেয়াদ কতদিন থাকবে?',
    answer: 'লাইফটাইম। একবার ভর্তি হলে কোর্স, পরবর্তী আপডেট আর সাপোর্ট গ্রুপে আজীবন অ্যাক্সেস থাকবে — কোনো মাসিক চার্জ নেই।',
  },
  {
    question: 'মোবাইল দিয়ে কি এই কোর্সটি করা যাবে?',
    answer: 'না। কোর্সটি লাইটরুম ডেস্কটপ (পিসি) ভিত্তিক, আর ক্লায়েন্টের কাজও কম্পিউটারেই করতে হয়। তাই একটি ল্যাপটপ বা ডেস্কটপ প্রয়োজন। ভিডিও অবশ্য মোবাইলেও দেখতে পারবেন।',
  },
  {
    question: 'পেমেন্ট করার পর কোর্সটি কীভাবে দেখব?',
    answer: 'পেমেন্ট যাচাই হলেই (সাধারণত কয়েক ঘণ্টার মধ্যে) আপনার ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করে "আমার কোর্স" পেজ থেকে সব ভিডিও দেখতে পারবেন।',
  },
  {
    question: 'কোর্স ভালো না লাগলে কি টাকা ফেরত পাব?',
    answer: 'হ্যাঁ। অ্যাক্সেস চালু হওয়ার ৭ দিনের মধ্যে হোয়াটসঅ্যাপে জানালে কোনো প্রশ্ন ছাড়াই ৩ কর্মদিবসের মধ্যে পুরো টাকা ফেরত দেওয়া হবে।',
  },
];

export const FOOTER_LINKS = [
  { href: '/privacy', label: 'প্রাইভেসি পলিসি' },
  { href: '/terms', label: 'টার্মস অ্যান্ড কন্ডিশন' },
];
