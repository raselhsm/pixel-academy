export const COMPARISON_PRESETS = [
  {
    id: 'portrait',
    name: 'Cinematic Moody Portrait',
    category: 'Portraits & Skin Retouching',
    location: 'Reykjavik, Iceland',
    camera: 'Sony A7R V • 85mm f/1.4 GM',
    exif: '1/320s • f/1.6 • ISO 100',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80',
    beforeDesc: 'Flat Unprocessed RAW • Low Dynamic Contrast • Muddy Shadows',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80',
    afterDesc: 'Color Graded • Teal-Bronze Split Toning • AI Face Relighting',
    sliderStyle: 'portrait',
    adjustments: [
      { label: 'Exposure', value: '+0.45' },
      { label: 'Contrast', value: '+28' },
      { label: 'Highlights', value: '-35' },
      { label: 'Shadows', value: '+42' },
      { label: 'Color Grading', value: 'Teal & Bronze' },
      { label: 'Subject Mask', value: 'Radial Glow +0.3 EV' },
      { label: 'Grain', value: '15% Fine' }
    ]
  },
  {
    id: 'landscape',
    name: 'Dolomites Alpine Mist',
    category: 'Cinematic Landscapes',
    location: 'Tre Cime, Italian Alps',
    camera: 'Fujifilm GFX 100 II • 32-64mm f/4',
    exif: '1/160s • f/8.0 • ISO 64',
    beforeImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    beforeDesc: 'Hazy Horizon • Washed Out Sky • Crushed Foreground',
    afterImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    afterDesc: 'HDR Recovery • Golden Sunbeam Accent • Deep Pine Emeralds',
    sliderStyle: 'landscape',
    adjustments: [
      { label: 'Highlights', value: '-65' },
      { label: 'Whites', value: '+18' },
      { label: 'Dehaze', value: '+22' },
      { label: 'Sky Mask', value: 'Luminance Range -0.5 EV' },
      { label: 'Luminance Green', value: '-15 Sat / +20 Lum' },
      { label: 'Warmth', value: '5600K (+450K)' }
    ]
  },
  {
    id: 'street',
    name: 'Tokyo Cyberpunk Rain',
    category: 'Night & Urban Drama',
    location: 'Shinjuku, Tokyo',
    camera: 'Leica M11 • Summilux 35mm f/1.4',
    exif: '1/125s • f/1.4 • ISO 1600',
    beforeImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
    beforeDesc: 'Yellow Streetlight Cast • Bleached Neon Signs • Noise',
    afterImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
    afterDesc: 'Neon Separation • Deep Inky Asphalt • Film Halation',
    sliderStyle: 'street',
    adjustments: [
      { label: 'Blacks', value: '-28' },
      { label: 'Vibrance', value: '+34' },
      { label: 'Cyan / Magenta', value: 'Split-Toned' },
      { label: 'Curves', value: 'High-Key S-Curve' },
      { label: 'Texture', value: '+18' },
      { label: 'Color Noise', value: 'Reduced 45%' }
    ]
  },
  {
    id: 'editorial',
    name: '35mm Film Editorial',
    category: 'Film Emulation & Vintage',
    location: 'Paris Studio 4, France',
    camera: 'Canon EOS R5 • 50mm f/1.2 L',
    exif: '1/250s • f/2.0 • ISO 200',
    beforeImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
    beforeDesc: 'Sterile Studio Light • Harsh Contrast • Cold Tones',
    afterImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
    afterDesc: 'Kodak Portra 400 Tone • Creamy Highlights • Soft Roll-off',
    sliderStyle: 'editorial',
    adjustments: [
      { label: 'Shadow Tint', value: '+8 Green-Warmth' },
      { label: 'Point Curve', value: 'Lifted Matte Blacks' },
      { label: 'Clarity', value: '-8 (Soft Glow)' },
      { label: 'HSL Orange', value: 'Hue -4 / Sat +6' },
      { label: 'Grain Size', value: '45 (Rough 35mm)' }
    ]
  }
];

export const COURSES = [
  {
    id: 'lightroom-flagship',
    title: 'Lightroom Pro: The Complete Color & Raw Mastery',
    tagline: 'From flat RAW captures to cinematic gallery prints. The definitive 2026 editing system.',
    category: 'Masterclass',
    badge: 'FLAGSHIP 2026',
    rating: 4.98,
    reviewsCount: 3840,
    studentsCount: '12,450+',
    hours: '14.5 Hours',
    lessonsCount: 52,
    difficulty: 'All Levels (Beginner to Advanced)',
    instructor: {
      name: 'Julian Sterling',
      role: 'Sony Artisan & Commercial Colorist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
    price: 119,
    originalPrice: 249,
    includes: [
      '52 Ultra HD 4K Video Lessons',
      '45 Signature Lightroom Presets (.xmp & DNG)',
      '85 Uncompressed RAW Practice Files',
      'Certificate of Completion',
      'Lifetime Access + Future Lightroom Updates',
      'Private Discord Critique Community'
    ],
    highlightQuote: 'Learn the exact color science that separates amateur snapshots from $5,000 commercial client deliverables.'
  },
  {
    id: 'cinematic-color-grading',
    title: 'The Art of Cinematic Color Grading in Lightroom',
    tagline: 'Master tone curves, split-toning color wheels, and mood design for narrative depth.',
    category: 'Color Grading & Tones',
    badge: 'BESTSELLER',
    rating: 4.96,
    reviewsCount: 1920,
    studentsCount: '7,890+',
    hours: '8.5 Hours',
    lessonsCount: 32,
    difficulty: 'Intermediate',
    instructor: {
      name: 'Elena Rostova',
      role: 'Film Stills Photographer & Colorist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    price: 89,
    originalPrice: 179,
    includes: [
      '32 Deep-Dive Color Lessons',
      '20 Cinema Mood Presets (Kodak, Fuji, Teal)',
      '40 Practice RAW Files',
      'Custom Tone Curve Presets'
    ],
    highlightQuote: 'Stop guessing slider values. Understand how complementary color harmonics trigger emotion.'
  },
  {
    id: 'portrait-skin-retouching',
    title: 'Editorial Portrait & Flawless Skin Sculpting',
    tagline: 'Natural texture retention, micro-dodge & burn, and AI masking without plastic skin.',
    category: 'Portraits & Retouching',
    badge: 'POPULAR',
    rating: 4.95,
    reviewsCount: 1410,
    studentsCount: '5,630+',
    hours: '7.0 Hours',
    lessonsCount: 28,
    difficulty: 'Beginner to Intermediate',
    instructor: {
      name: 'Marcus Vance',
      role: 'Vogue & Harper\'s Bazaar Contributor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    price: 79,
    originalPrice: 159,
    includes: [
      '28 Step-by-Step Portrait Lessons',
      '15 Skin Tone & Glow Presets',
      '35 Studio & Natural Light RAW Files',
      'Lightroom AI Masking Cheat Sheet'
    ],
    highlightQuote: 'Achieve high-end beauty magazine textures directly in Lightroom without Photoshop round-tripping.'
  },
  {
    id: 'landscape-fine-art',
    title: 'Atmospheric Landscape & Fine Art Mastery',
    tagline: 'Dramatize alpine horizons, morning mist, and long exposures with luminous tonal depth.',
    category: 'Landscapes & Nature',
    badge: 'AWARD WINNER',
    rating: 4.97,
    reviewsCount: 1680,
    studentsCount: '6,210+',
    hours: '9.0 Hours',
    lessonsCount: 36,
    difficulty: 'All Levels',
    instructor: {
      name: 'Julian Sterling',
      role: 'Sony Artisan & Commercial Colorist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    price: 89,
    originalPrice: 169,
    includes: [
      '36 Landscape Modules',
      '18 Atmospheric Landscape Presets',
      '50 Multi-Exposure & Bracketed RAWs',
      'Luminance Range Masking Master Guide'
    ],
    highlightQuote: 'Transform washed-out skies and muddy foregrounds into museum-grade landscape prints.'
  },
  {
    id: 'film-emulation-35mm',
    title: 'Vintage 35mm & Medium Format Film Emulation',
    tagline: 'Recreate Kodak Portra, CineStill 800T, Tri-X 400, and Fuji 400H authentic film vibes.',
    category: 'Color Grading & Tones',
    badge: 'COMMUNITY FAVORITE',
    rating: 4.94,
    reviewsCount: 940,
    studentsCount: '4,100+',
    hours: '6.5 Hours',
    lessonsCount: 24,
    difficulty: 'Intermediate',
    instructor: {
      name: 'Sofia Chen',
      role: 'Analog Archivist & Leica Ambassador',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    price: 69,
    originalPrice: 139,
    includes: [
      '24 Analog Emulation Lessons',
      '14 Authentic Film Presets + Halation Tools',
      '30 Vintage Editorial RAW Files',
      'Grain Matrix Profile'
    ],
    highlightQuote: 'Genuine analog texture, highlight halation, and organic grain formulas without third-party plugins.'
  },
  {
    id: 'speed-batch-workflow',
    title: 'High-Volume Wedding & Event Batch Workflow',
    tagline: 'Cull 3,000 photos in 45 minutes and color-grade entire events with consistent light matching.',
    category: 'Speed & Batch Workflow',
    badge: 'EFFICIENCY BOOST',
    rating: 4.93,
    reviewsCount: 820,
    studentsCount: '3,450+',
    hours: '5.5 Hours',
    lessonsCount: 20,
    difficulty: 'Advanced',
    instructor: {
      name: 'Marcus Vance',
      role: 'Vogue & Commercial Photographer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    price: 69,
    originalPrice: 129,
    includes: [
      '20 High-Speed Workflow Lessons',
      'Batch Match Sync Action Profiles',
      'Smart Previews & Catalog Architecture Guide',
      'Export Optimization Presets'
    ],
    highlightQuote: 'Cut your post-production time by 70% so you can spend more time shooting and enjoying life.'
  }
];

export const CURRICULUM_MODULES = [
  {
    number: '01',
    title: 'The RAW Sensor Science & Exposure Philosophy',
    duration: '2h 15m',
    lessons: [
      'Understanding Bit Depth, Dynamic Range & Sensor Clipping',
      'The Truth Behind Histograms: Expose to the Right (ETTR)',
      'Camera Profiles vs. Adobe Color: Setting Your Base Canvas',
      'Color Temperature (Kelvin) & Tint Secrets for Neutral Fidelity',
      'Hands-on RAW Exercise: Rescuing a Severely Blown Sunset'
    ]
  },
  {
    number: '02',
    title: 'The Master Tone Curve & Contrast Architecture',
    duration: '2h 45m',
    lessons: [
      'Parametric vs. Point Curve: How Top Colorists Shape Contrast',
      'Targeting Shadows, Midtones & Highlights with Precision',
      'Creating the Coveted "Film Matte" Fade Without Mud',
      'Individual RGB Channel Curves (Red, Green, Blue Calibration)',
      'Hands-on RAW Exercise: Crafting a High-End Matte Fashion Look'
    ]
  },
  {
    number: '03',
    title: 'Advanced AI Masking, Radial Relighting & Separation',
    duration: '3h 10m',
    lessons: [
      'Lightroom AI 2026 Masking: People, Clothing, Eyes & Backgrounds',
      'Luminance & Color Range Masks: Surgical Color Isolation',
      'Painting with Light: Radial Gradients for Volumetric Direction',
      'Intersecting Masks: How to Grade Only Highlights on Subject Hair',
      'Hands-on RAW Exercise: Turning a Flat Studio Shot into Moody Editorial'
    ]
  },
  {
    number: '04',
    title: 'Color Grading Wheels, HSL & Emotional Palette Harmonies',
    duration: '2h 50m',
    lessons: [
      'Color Theory for Photographers: Analogous vs. Complementary Palettes',
      'The Color Grading Wheels: Shadows, Midtones, Highlights & Global',
      'The HSL Secret: Isolating Greens in Landscapes & Reds in Skin',
      'Color Calibration Panel: The Hidden Slider for Golden Skin & Cyan Skies',
      'Hands-on RAW Exercise: Recreating the Iconic Fincher Teal & Tungsten Mood'
    ]
  },
  {
    number: '05',
    title: 'Authentic Film Stock Emulation & Micro-Textures',
    duration: '2h 00m',
    lessons: [
      'Deconstructing Kodak Portra 400 & CineStill 800T Characteristics',
      'Organic Grain vs. Digital Noise: Amount, Size & Roughness Ratios',
      'Highlight Roll-off & Simulated Lens Halation Techniques',
      'Vignetting That Directs the Eye Naturally Without Looking Clunky',
      'Hands-on RAW Exercise: Transforming Clean Digital RAW into 35mm Analog'
    ]
  },
  {
    number: '06',
    title: 'High-Volume Delivery, Presets & Commercial Portfolios',
    duration: '1h 40m',
    lessons: [
      'Developing Your Signature Style: How to Build Custom Preset Packs',
      'Smart Previews & Speed Culling Architecture for 5,000+ Photo Shoots',
      'Web vs. Instagram vs. Gallery Fine Art Print Color Spaces (sRGB vs ProPhoto)',
      'Sharpening & Noise Reduction Formulas for High-Res Displays',
      'Final Capstone Project: Edit 5 Multi-Genre RAW Files for Your Portfolio'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'David Lindqvist',
    location: 'Stockholm, Sweden',
    role: 'Editorial & Commercial Photographer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Before Pixel Academy, I spent hours aimlessly tweaking sliders and wondering why my skin tones looked orange and muddy. Julian’s tone curve architecture completely rewired how I see color. I just booked my first $6,500 fashion campaign because of my updated portfolio!',
    rating: 5,
    courseTaken: 'Lightroom Pro: The Complete Color & Raw Mastery',
    verified: true
  },
  {
    id: 2,
    name: 'Sarah Montgomery',
    location: 'Denver, Colorado',
    role: 'Adventure & Landscape Photographer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    content: 'The Before/After difference in my landscape shots is night and day. The luminance masking techniques helped me rescue highlights I thought were permanently lost. Plus, having the uncompressed Sony RAW files to edit alongside Julian was invaluable.',
    rating: 5,
    courseTaken: 'Atmospheric Landscape & Fine Art Mastery',
    verified: true
  },
  {
    id: 3,
    name: 'Mateo Morales',
    location: 'Barcelona, Spain',
    role: 'Wedding & Portrait Specialist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content: 'The batch workflow module alone saved me over 20 hours per wedding season! I can color-grade 800 ceremony photos with seamless continuity in one afternoon. The 45 included presets are so tastefully balanced—not overblown like most internet presets.',
    rating: 5,
    courseTaken: 'High-Volume Wedding & Event Batch Workflow',
    verified: true
  }
];

export const FAQS = [
  {
    q: 'Do I need the latest version of Adobe Lightroom?',
    a: 'Our courses cover both Adobe Lightroom Classic (desktop catalog-based) and Adobe Lightroom CC / Mobile. All fundamental color theory, Tone Curves, HSL, Color Grading wheels, and Preset installation apply universally across all versions from 2021 through the latest 2026 updates.'
  },
  {
    q: 'Are the RAW exercise files included for me to download?',
    a: 'Yes! Every course includes full uncompressed RAW files shot on Sony A7R V, Leica M11, Canon R5, and Fujifilm GFX cameras. You get commercial-use rights for practice and portfolio showcase so you can follow along click-for-click with the instructors.'
  },
  {
    q: 'I am a beginner. Will this be too advanced for me?',
    a: 'Not at all. We start with the core anatomy of light and sensor capture in Module 1, explaining every concept simply with visual diagrams before progressing into sophisticated color harmonics and AI masking. Photographers of all experience levels thrive here.'
  },
  {
    q: 'What is the 30-Day Guarantee?',
    a: 'We offer an unconditional 100% money-back guarantee for 30 days. If you complete the lessons and don’t feel your photo editing has elevated dramatically, simply email our team for an immediate full refund—no awkward questions asked.'
  },
  {
    q: 'How do the 45 included Lightroom Presets work?',
    a: 'You receive both .XMP desktop presets and mobile .DNG presets, accompanied by a step-by-step 3-minute video guide showing you how to install them into Lightroom Classic, Lightroom Desktop, and Lightroom Mobile with one click.'
  },
  {
    q: 'Is this a monthly subscription or a one-time payment?',
    a: 'Every course and our All-Access Pass is a 100% one-time payment. You gain lifetime access, including any future course updates, new RAW exercise file additions, and ongoing Discord community membership forever.'
  }
];
