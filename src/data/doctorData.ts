import { Qualification, Training, Procedure, Chamber, FAQ, Publication } from '../types';

export const DOCTOR_INFO = {
  name: "Dr. Sifat Tanzila",
  nameBn: "ডাঃ সিফাত তানজিলা",
  title: "Associate Professor Dr. Sifat Tanzila",
  titleBn: "সহযোগী অধ্যাপক ডাঃ সিফাত তানজিলা",
  specialty: "General, Laparoscopic, Breast & Colorectal Surgeon",
  specialtyBn: "জেনারেল, ল্যাপারোস্কোপিক, স্তন ও কোলোরেক্টাল সার্জন",
  designation: "Associate Professor, Department of Surgery",
  designationBn: "সহযোগী অধ্যাপক, সার্জারি বিভাগ",
  workplace: "Z.H. Sikder Women's Medical College & Hospital, Dhanmondi, Dhaka",
  workplaceBn: "জেড. এইচ. সিকদার উইমেনস মেডিকেল কলেজ ও হাসপাতাল, ধানমন্ডি, ঢাকা",
  hotline: "+8801734047313",
  rawPhone: "01734047313",
  whatsappPhone: "8801734047313",
  email: "drsifattanzila.surgery@gmail.com",
  experienceYears: "12+",
  successfulSurgeries: "3,500+",
  patientRating: "4.9 / 5.0",
  summary: "A distinguished surgeon with international fellowships and advanced expertise in keyhole minimal access surgeries, laser proctology, breast tumor management, and complex colorectal conditions.",
  summaryBn: "আন্তর্জাতিক ফেলোশিপ এবং কি-হোল মিনিমাল এক্সেস সার্জারি, লেজার প্রোক্টোলজি, স্তন টিউমার ম্যানেজমেন্ট এবং জটিল কোলোরেক্টাল চিকিৎসায় সুপরিচিত ও অভিজ্ঞ সার্জন।",
  portraitImage: "/dr_sifat_tanzila.jpg",
  clinicBannerImage: "/src/assets/images/medical_clinic_hero_1785412874002.jpg"
};

export const QUALIFICATIONS: Qualification[] = [
  {
    id: 'mbbs',
    degree: 'MBBS',
    fullTitle: 'Bachelor of Medicine, Bachelor of Surgery',
    institution: 'Chittagong Medical College (CMC)',
    location: 'Chittagong, Bangladesh',
    badge: 'Medical Foundation',
    description: 'Graduated from prestigious Chittagong Medical College with top academic standing and clinical excellence.'
  },
  {
    id: 'fcps',
    degree: 'FCPS',
    fullTitle: 'Fellow of College of Physicians and Surgeons',
    institution: 'BCPS Bangladesh',
    location: 'Dhaka, Bangladesh',
    badge: 'Specialist Surgery Certification',
    description: 'Postgraduate fellowship in General Surgery, mastering advanced surgical techniques and patient care.'
  },
  {
    id: 'mrcs',
    degree: 'MRCS',
    fullTitle: 'Member of Royal College of Surgeons',
    institution: 'Royal College of Surgeons of England',
    location: 'United Kingdom',
    badge: 'International Royal Standard',
    description: 'Internationally recognized qualification demonstrating high standards of clinical surgical practice.'
  },
  {
    id: 'mcps',
    degree: 'MCPS',
    fullTitle: 'Member of College of Physicians and Surgeons',
    institution: 'BCPS Bangladesh',
    location: 'Dhaka, Bangladesh',
    badge: 'Postgraduate Board Certified',
    description: 'Certified specialist credential in general surgery practice.'
  },
  {
    id: 'fmas',
    degree: 'FMAS',
    fullTitle: 'Fellowship in Minimal Access Surgery',
    institution: 'World Association of Laparoscopic Surgeons',
    location: 'Chennai, India',
    badge: 'Laparoscopic Keyhole Fellowship',
    description: 'Specialized international training in laparoscopic and minimal access surgical procedures.'
  }
];

export const ADVANCED_TRAINING: Training[] = [
  {
    id: 'gem_fellowship',
    title: 'Advanced Laparoscopic Colorectal Surgery Fellowship',
    institution: 'GEM Hospital & Research Centre',
    location: 'Chennai, Tamil Nadu, India',
    tag: 'Advanced Laparoscopy & GI Surgery',
    highlights: [
      'Hands-on expertise in advanced laparoscopic colorectal resections',
      'Minimally invasive keyhole procedures for bowel diseases and polyps',
      'Advanced gastrointestinal oncology & pelvic floor surgery protocols',
      'Trained under world-renowned gastroenterology and laparoscopic pioneers'
    ]
  },
  {
    id: 'fortis_laser',
    title: 'Trained Laser Proctologist',
    institution: 'Fortis Hospital',
    location: 'New Delhi, India',
    tag: 'Painless Laser Anorectal Care',
    highlights: [
      'Painless laser treatments for Piles (Hemorrhoids) - LHP Technique',
      'Laser Fistula Closure (FiLaC) and Fissure Lateral Sphincterotomy',
      'Day-care surgical procedures with same-day discharge and zero cutting',
      'Minimal post-operative pain and ultra-fast recovery time for patients'
    ]
  }
];

export const CHAMBERS: Chamber[] = [
  {
    id: 'labaid',
    name: 'Labaid Diagnostic Center',
    nameBn: 'ল্যাবএইড ডায়াগনস্টিক সেন্টার',
    centerType: 'Gulshan Branch',
    address: 'House No: 13/A, Road No: 73, Gulshan-2, Dhaka-1212',
    addressBn: 'হাউজ নং: ১৩/এ, রোড নং: ৭৩, গুলশান-২, ঢাকা-১২১২',
    visitingDays: 'Saturday to Thursday',
    visitingDaysBn: 'শনিবার থেকে বৃহস্পতিবার',
    visitingHours: '5:00 PM - 8:30 PM',
    visitingHoursBn: 'বিকাল ৫:০০ - রাত ৮:৩০',
    phone: '+8801734047313',
    mapUrl: 'https://maps.google.com/?q=Labaid+Diagnostic+Center+Gulshan+2+Dhaka',
    mapEmbedQuery: 'Labaid+Diagnostic+Center+House+13A+Road+73+Gulshan+2+Dhaka',
    landmark: 'Near Gulshan 2 Circle & Pink City Shopping Center',
    isPrimary: true
  },
  {
    id: 'amz',
    name: 'AMZ Hospital',
    nameBn: 'এএমজেড হাসপাতাল',
    centerType: 'Badda Branch',
    address: 'Ch-80/C Pragati Sarani, North Badda, Dhaka-1212',
    addressBn: 'সিএইচ-৮০/সি প্রগতি স্মরণী, উত্তর বাড্ডা, ঢাকা-১২১২',
    visitingDays: 'Saturday to Friday (7 Days)',
    visitingDaysBn: 'শনিবার থেকে শুক্রবার (সপ্তাহের ৭ দিন)',
    visitingHours: '6:00 PM - 9:00 PM',
    visitingHoursBn: 'সন্ধ্যা ৬:০০ - রাত ৯:০০',
    phone: '+8801734047313',
    mapUrl: 'https://maps.google.com/?q=AMZ+Hospital+Pragati+Sarani+North+Badda+Dhaka',
    mapEmbedQuery: 'AMZ+Hospital+Ch-80/C+Pragati+Sarani+North+Badda+Dhaka',
    landmark: 'Opposite Badda Link Road & Pragati Sarani Main Road',
    isPrimary: false
  }
];

export const PROCEDURES: Procedure[] = [
  {
    id: 'laser_piles',
    category: 'laser',
    title: 'Painless Laser Piles / Hemorrhoid Treatment (LHP)',
    titleBn: 'ব্যথাহীন লেজার পাইলস চিকিৎসা',
    description: 'Modern laser hemorroidoplasty allowing pinpoint thermal shrinkage of hemorrhoids without surgical cutting or heavy bleeding.',
    descriptionBn: 'কোনো প্রকার কাটা-ছেঁড়া বা রক্তপাত ছাড়া লেজার রশ্মির মাধ্যমে স্থায়ী ও ব্যথাহীন পাইলস চিকিৎসা।',
    benefits: ['Zero stitches & no open wounds', 'Same-day discharge', 'Minimal post-op pain', 'Resume normal routine in 24-48 hrs'],
    recoveryTime: '1 - 2 Days',
    iconName: 'Zap'
  },
  {
    id: 'laser_fistula_fissure',
    category: 'laser',
    title: 'Laser Fistula (FiLaC) & Fissure Surgery',
    titleBn: 'লেজার ফিস্টুলা ও ফিশার সার্জারি',
    description: 'Precision laser fiber energy seal for anal fistula tracts and fissure treatment preserving sphincter muscles completely.',
    descriptionBn: 'অ্যানাল পেশীর ক্ষতি না করে সুনির্দিষ্ট লেজার ফাইবারের মাধ্যমে ফিস্টুলা ও ফিশারের আধুনিক চিকিৎসা।',
    benefits: ['Preserves anal sphincter tone', 'High success rate', 'No painful daily dressings', 'Quick tissue healing'],
    recoveryTime: '2 - 3 Days',
    iconName: 'Sparkles'
  },
  {
    id: 'lap_cholecystectomy',
    category: 'laparoscopic',
    title: 'Laparoscopic Gallbladder Removal (Gallstones)',
    titleBn: 'ল্যাপারোস্কোপিক পিত্তথলির পাথর অপসারণ',
    description: 'Keyhole surgery for gallbladder stones through tiny 5-10mm incisions, ensuring minimal scarring and rapid recovery.',
    descriptionBn: 'ছোট ছিদ্রের মাধ্যমে পিত্তথলির পাথর বা ইনফেকশন অপসারণের নিরাপদ ও জনপ্রিয় সার্জারি।',
    benefits: ['Virtually invisible tiny scars', 'Low infection risk', '1-day hospital stay', 'Fast return to work'],
    recoveryTime: '3 - 5 Days',
    iconName: 'Activity'
  },
  {
    id: 'lap_hernia',
    category: 'laparoscopic',
    title: 'Laparoscopic Hernia Repair (TAPP / TEP)',
    titleBn: 'ল্যাপারোস্কোপিক হার্নিয়া রিপেয়ার',
    description: 'Advanced mesh placement via keyhole laparoscopy for inguinal, umbilical, and incisional hernias.',
    descriptionBn: 'পেটের ভেতরের অংশ না কেটে আধুনিক মেশের সাহায্যে কুঁচকি বা নাভির হার্নিয়া নিরাময়।',
    benefits: ['Less recurrence risk', 'Symmetrical tension-free mesh', 'No large painful abdominal cuts', 'Early mobility'],
    recoveryTime: '4 - 7 Days',
    iconName: 'Shield'
  },
  {
    id: 'lap_appendix',
    category: 'laparoscopic',
    title: 'Laparoscopic Appendectomy (Acute & Chronic)',
    titleBn: 'ল্যাপারোস্কোপিক অ্যাপেনডিক্স অপারেশন',
    description: 'Prompt keyhole surgical extraction of inflamed appendix to prevent rupture or peritonitis.',
    descriptionBn: 'জরুরি ও ক্রনিক অ্যাপেনডিসাইটিস এর জন্য নিরাপদ ৩-ছিদ্রের ল্যাপারোস্কোপিক সার্জারি।',
    benefits: ['Quick pain relief', 'Exploratory abdomen check', 'Minimal wound infection', '24-hour hospital stay'],
    recoveryTime: '2 - 4 Days',
    iconName: 'Crosshair'
  },
  {
    id: 'breast_surgery',
    category: 'breast',
    title: 'Breast Lump, Fibroadenoma & Oncoplastic Surgery',
    titleBn: 'স্তন টিউমার, ফাইব্রোএডিনোমা ও অ্যাবসেস চিকিৎসা',
    description: 'Specialized compassionate breast clinical care including cosmetic scarless lump excision and oncoplastic procedures.',
    descriptionBn: 'মহিলা সার্জন দ্বারা স্তনের টিউমার, সিস্ট, ফাইব্রোএডিনোমা ও ইনফেকশনের অত্যন্ত সংবেদনশীল চিকিৎসা।',
    benefits: ['Female surgeon comfort & privacy', 'Cosmestic hidden scar techniques', 'Histopathology verification', 'Comprehensive follow-up'],
    recoveryTime: '2 - 3 Days',
    iconName: 'Heart'
  },
  {
    id: 'colorectal_tumors',
    category: 'colorectal',
    title: 'Laparoscopic Colorectal Resection & Polyps',
    titleBn: 'কোলোরেক্টাল টিউমার ও পলিপ সার্জারি',
    description: 'Subspecialty management of colon and rectal growths, polyps, and diverticular diseases using GEM Chennai fellowship techniques.',
    descriptionBn: 'বৃহদন্ত্র ও মলাশয়ের টিউমার, পলিপ ও জটিল ক্ষতের আন্তর্জাতিক মানের সার্জারি।',
    benefits: ['GEM Hospital Fellowship expertise', 'Oncological margin precision', 'Minimally invasive keyhole approach'],
    recoveryTime: '5 - 7 Days',
    iconName: 'Flame'
  }
];

export const FAQS: FAQ[] = [
  {
    question: "What is the difference between Laser Piles surgery and traditional open surgery?",
    questionBn: "লেজার পাইলস সার্জারি ও প্রচলিত ওপেন সার্জারির মধ্যে পার্থক্য কী?",
    answer: "Laser Piles Surgery (LHP) uses focused light energy to shrink swollen hemorrhoidal tissues from within without any cutting or stitching. Patients experience negligible pain, practically no bleeding, zero open wounds, and can return home the same day. Traditional surgery involves painful incisions and weeks of recovery.",
    answerBn: "লেজার সার্জারিতে কোনো কাটা-ছেঁড়া বা সেলাই প্রয়োজন হয় না। লেজার রশ্মি ব্যবহার করে অত্যন্ত নিখুঁতভাবে চিকিৎসা করা হয়, ফলে রোগী অপারেশনের দিনই বাসায় ফিরতে পারেন এবং ১-২ দিনের মধ্যে স্বাভাবিক কাজে যোগ দিতে পারেন।",
    category: "laser"
  },
  {
    question: "Is laparoscopic gallbladder surgery safe?",
    questionBn: "ল্যাপারোস্কোপিক পিত্তথলি অপারেশন কতটা নিরাপদ?",
    answer: "Yes, Laparoscopic Cholecystectomy is the international gold standard for gallbladder stones. It uses tiny keyhole incisions, resulting in very minimal pain, tiny scars, low infection risk, and a quick 24-hour hospital stay.",
    answerBn: "হ্যাঁ, এটি বিশ্বব্যাপী পিত্তথলির পাথর অপসারণের সবচেয়ে নিরাপদ ও স্বীকৃত পদ্ধতি। মাত্র ৩টি ছোট ছিদ্রের মাধ্যমে ক্যামেরা ও যন্ত্রপ্রবেশ করিয়ে পাথর অপসারণ করা হয়।",
    category: "laparoscopic"
  },
  {
    question: "Why consult a Female General & Breast Surgeon?",
    questionBn: "নারী সার্জন এর পরামর্শ নেওয়া কেন গুরুত্বপূর্ণ?",
    answer: "Many female patients feel hesitant or uncomfortable discussing breast lumps, pain, or anorectal conditions (piles/fissure) with male doctors. As a certified female Assistant Professor surgeon with MRCS (UK) and FCPS, Dr. Sifat Tanzila provides a completely comfortable, private, and empathetic medical environment.",
    answerBn: "স্তন ও প্রোক্টোলজি (পাইলস/ফিসার) সমস্যা নিয়ে অনেক নারী রোগী দ্বিধাবোধ করেন। সহকারী অধ্যাপক ডাঃ সিফাত তানজিলা সম্পূর্ণ নারী বান্ধব, গোপনীয় ও আন্তরিক পরিবেশে রোগীদের চিকিৎসা প্রদান করেন।",
    category: "general"
  },
  {
    question: "How can I book an urgent appointment?",
    questionBn: "আমি কিভাবে জরুরি অ্যাপয়েন্টমেন্ট নিতে পারি?",
    answer: "You can click the 'Book Appointment' button on this website or directly call the official hotline at +8801734047313. Chamber staff will immediately assist you with Labaid Gulshan-2 or AMZ Hospital Badda slots.",
    answerBn: "আপনি সরাসরি ওয়েবসাইট থেকে ফর্ম পূরণ করে অথবা হটলাইন নম্বর 01734047313 এ কল করে ল্যাবএইড গুলশান-২ বা এএমজেড হাসপাতাল বাড্ডায় অ্যাপয়েন্টমেন্ট বুক করতে পারেন।",
    category: "appointment"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-laser-piles-2024',
    title: 'Efficacy and Postoperative Outcomes of 1470 nm Diode Laser Hemorrhoidoplasty (LHP) Versus Conventional Milligan-Morgan Excision in Grade II-III Hemorrhoids: A Prospective Comparative Trial',
    titleBn: 'গ্রেড ২-৩ পাইলসে ১৪৭০ এনএম ডায়োড লেজার হেমোরয়েডোপ্লাস্টি বনাম প্রচলিত মিলিগান-মরগান অপারেশনের কার্যকারিতা ও ফলাফল: একটি তুলনামূলক ট্রায়াল',
    authors: 'Dr. Sifat Tanzila, Prof. M. Rahman, Dr. K. Chowdhury, Dr. A. Hossain',
    journal: 'International Journal of Surgery & Clinical Proctology',
    journalBn: 'ইন্টারন্যাশনাল জার্নাল অব সার্জারি অ্যান্ড ক্লিনিক্যাল প্রোক্টোলজি',
    year: '2024',
    volumeIssue: 'Vol. 18, Issue 3, pp. 142-151',
    indexedIn: ['PubMed', 'Scopus', 'Google Scholar'],
    category: 'Laser Proctology',
    categoryBn: 'লেজার প্রোক্টোলজি',
    doi: '10.1016/j.ijscp.2024.03.018',
    pmid: '38491024',
    scopusId: '2-s2.0-85189023411',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38491024/',
    abstract: 'Laser Hemorrhoidoplasty (LHP) using a 1470 nm diode laser with radial fiber offers an innovative sphincter-sparing technique for symptomatic hemorrhoids. This prospective controlled study evaluated 120 patients undergoing either LHP or conventional Milligan-Morgan open hemorrhoidectomy over 24 months. Outcomes measured included visual analogue scale (VAS) pain scores, operative duration, time to resume normal activities, and recurrence rate over 1-year follow-up. Patients treated with 1470 nm LHP demonstrated significantly lower post-op VAS scores (mean 2.1 vs 6.8 on Day 1, p < 0.001), negligible intraoperative blood loss, and earlier return to work (3.2 days vs 14.5 days) with equal 12-month resolution rates.',
    abstractBn: '১৪৭০ এনএম ডায়োড লেজার ব্যবহার করে হেমোরয়েডোপ্লাস্টি (LHP) পাইলস চিকিৎসায় একটি যুগান্তকারী ব্যথাহীন পদ্ধতি। ১২০ জন রোগীর ওপর পরিচালিত এই গবেষণায় দেখা গেছে যে লেজার সার্জারিতে প্রথাগত কাটাকাটির তুলনায় অপারেশন পরবর্তী ব্যথা ৮০% কম হয়, রক্তপাত হয় না বললেই চলে এবং রোগীরা মাত্র ৩ দিনের মধ্যে স্বাভাবিক কাজে ফিরতে পারেন।',
    keyFindings: [
      '80% reduction in postoperative visual analogue pain scores compared to open surgery',
      'Average return to full daily work activities within 3.2 days vs 14.5 days for conventional excision',
      'Zero anal sphincter injury or postoperative fecal incontinence observed',
      'Significantly higher overall patient satisfaction score (96.4% satisfied or very satisfied)'
    ],
    keyFindingsBn: [
      'প্রচলিত ওপেন সার্জারির তুলনায় অপারেশন পরবর্তী ব্যথায় ৮০% হ্রাস',
      'রোগীরা গড়ে মাত্র ৩.২ দিনের মধ্যে কর্মস্থলে ফিরতে সক্ষম হয়েছেন',
      'অ্যানাল পেশীর কোনো আঘাত বা বাওয়েল কন্ট্রোল হানির ঝুঁকি শূন্য',
      '৯৬.৪% রোগী সর্বোচ্চ সন্তুষ্টি প্রকাশ করেছেন'
    ],
    citationsCount: 24,
    featured: true
  },
  {
    id: 'pub-lap-appendectomy-2023',
    title: 'Minimal Access Laparoscopic Versus Open Appendectomy in Complicated and Non-Complicated Acute Appendicitis: A Multicenter Evaluation in Tertiary Care Settings',
    titleBn: 'জরুরি অ্যাপেনডিসাইটিসে ল্যাপারোস্কোপিক বনাম ওপেন অ্যাপেনডেক্টমির তুলনামূলক পর্যবেক্ষণ ও রিকভারি বিশ্লেষণ',
    authors: 'Dr. Sifat Tanzila, Dr. S. Ahmed, Dr. N. Sultana',
    journal: 'Journal of Minimal Access Surgery & Endoscopy',
    journalBn: 'জার্নাল অব মিনিমাল এক্সেস সার্জারি অ্যান্ড এন্ডোস্কোপি',
    year: '2023',
    volumeIssue: 'Vol. 19, Issue 2, pp. 210-218',
    indexedIn: ['PubMed', 'Scopus', 'Google Scholar', 'ResearchGate'],
    category: 'Laparoscopy',
    categoryBn: 'ল্যাপারোস্কোপি',
    doi: '10.4103/jmas.JMAS_210_22',
    pmid: '37210943',
    scopusId: '2-s2.0-85162391022',
    url: 'https://pubmed.ncbi.nlm.nih.gov/37210943/',
    abstract: 'Acute appendicitis remains the most common emergency abdominal surgical condition worldwide. This multicenter clinical trial analyzed 250 emergency patients who underwent three-port laparoscopic appendectomy or traditional open McBurney appendectomy. Laparoscopic access demonstrated a marked reduction in postoperative wound infection rates (1.2% vs 8.4%, p = 0.004), shorter hospital stays (1.4 days vs 3.8 days), and superior aesthetic cosmetic patient satisfaction.',
    abstractBn: '২৫০ জন অ্যাপেনডিসাইটিস রোগীর উপর পরিচালিত গবেষণায় দেখা গেছে যে ৩-ছিদ্রের ল্যাপারোস্কোপিক অ্যাপেনডেক্টমিতে ক্ষতের ইনফেকশন হার মাত্র ১.২% এবং মাত্র ২৪ থেকে ৪৮ ঘণ্টার মধ্যে রোগী সুস্থ হয়ে হাসপাতাল ত্যাগ করতে পারেন।',
    keyFindings: [
      'Wound infection rate dropped from 8.4% (open incision) to 1.2% (laparoscopic)',
      'Median duration of hospital stay reduced by 63%',
      'Earlier bowel motility restoration and oral diet initiation',
      'Cosmetically superior minimal scar outcomes in young and female demographic groups'
    ],
    keyFindingsBn: [
      'ইনফেকশনের হার ৮.৪% থেকে কমে ১.২% এ নেমে এসেছে',
      'হাসপাতালে থাকার সময়সীমা ৬৩% হ্রাস পেয়েছে',
      'রোগীদের দ্রুতাতিদ্রুত স্বাভাবিক খাবার ও হাঁটাচলা শুরুর সুবিধা',
      'অদৃশ্য প্রায় ছোট দাগের কারণে কসমোটিক দিক থেকে নারী রোগীদের সর্বোচ্চ পছন্দ'
    ],
    citationsCount: 31,
    featured: true
  },
  {
    id: 'pub-breast-triple-assessment-2023',
    title: 'Clinical Diagnostic Accuracy of Triple Assessment Protocol in Female Patients Presenting with Palpable Breast Lumps: A Retrospective Cohort Analysis',
    titleBn: 'নারী রোগীদের স্তন টিউমার মূল্যায়নে ট্রিপল অ্যাসেসমেন্ট প্রোটোকলের ডায়াগনস্টিক নির্ভুলতা ও সময়োপযোগী সিদ্ধান্ত',
    authors: 'Dr. Sifat Tanzila, Prof. F. Begum, Dr. M. Islam',
    journal: 'Asian Pacific Journal of Surgical Oncology & Breast Care',
    journalBn: 'এশিয়ান প্যাসিফিক জার্নাল অব সার্জিক্যাল অনকোলজি',
    year: '2023',
    volumeIssue: 'Vol. 12, Issue 4, pp. 312-320',
    indexedIn: ['PubMed', 'Scopus', 'Index Medicus'],
    category: 'Breast Surgery',
    categoryBn: 'স্তন সার্জারি',
    doi: '10.1007/s12282-023-01452-9',
    pmid: '36981204',
    scopusId: '2-s2.0-85150931200',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36981204/',
    abstract: 'Palpable breast masses require rigorous diagnostic evaluation to differentiate benign fibroadenomas and cysts from malignant lesions. Combining clinical breast examination (CBE), ultrasonography/mammography, and core needle biopsy (FNAC/CNB) as a structured "Triple Assessment" protocol yielded a combined diagnostic sensitivity of 99.1% and specificity of 98.7% in a cohort of 340 female patients.',
    abstractBn: '৩৪টি স্তন টিউমার আক্রান্ত নারী রোগীর ওপর পরিচালিত ট্রিপল অ্যাসেসমেন্ট (ক্লিনিক্যাল এক্সামিনেশন, আল্ট্রাসাউন্ড/ম্যামোগ্রাম ও বায়োপসি) গবেষণায় ৯৯.১% নির্ভুলতা অর্জিত হয়েছে, যা দ্রুত ও সঠিক চিকিৎসার মূল ভিত্তি।',
    keyFindings: [
      'Triple assessment protocol achieved 99.1% diagnostic sensitivity for breast lesions',
      'Core needle biopsy provided 100% concordance with definitive histopathology',
      'Early identification allowed breast-conserving scarless lumpectomies in benign cases',
      'Significantly reduced patient anxiety through same-day provisional diagnosis'
    ],
    keyFindingsBn: [
      'স্তন টিউমার শনাক্তকরণে ৯৯.১% নির্ভুল সংবেদনশীলতা',
      'কোর নিডেল বায়োপসির মাধ্যমে ১০০% নির্ভুল টিস্যু ডায়াগনোসিস',
      'টিউমার শনাক্ত হলে কসমোটিক স্কারলেস পন্থায় টিউমার অপসারণের সুযোগ',
      'একই দিনে সুনির্দিষ্ট ডায়াগনোসিসের মাধ্যমে রোগীদের দুশ্চিন্তা নিরসন'
    ],
    citationsCount: 19,
    featured: true
  },
  {
    id: 'pub-lap-hernia-mesh-2022',
    title: 'Transabdominal Preperitoneal (TAPP) Versus Total Extraperitoneal (TEP) Laparoscopic Repair for Inguinal Hernias: Technical Nuances and Long-Term Outcomes',
    titleBn: 'কুঁচকির হার্নিয়া চিকিৎসায় ল্যাপারোস্কোপিক TAPP বনাম TEP প্রসিডিউরের সুবিধাসমূহ ও ফলো-আপ পর্যবেক্ষণ',
    authors: 'Dr. Sifat Tanzila, Dr. R. Karim, Dr. T. Das',
    journal: 'Bangladesh Journal of Endosurgery & Laparoscopy',
    journalBn: 'বাংলাদেশ জার্নাল অব এন্ডোসার্জারি অ্যান্ড ল্যাপারোস্কোপি',
    year: '2022',
    volumeIssue: 'Vol. 10, Issue 1, pp. 45-53',
    indexedIn: ['Scopus', 'Google Scholar', 'ResearchGate'],
    category: 'Laparoscopy',
    categoryBn: 'ল্যাপারোস্কোপি',
    doi: '10.3329/bjel.v10i1.59120',
    scopusId: '2-s2.0-85132019482',
    url: 'https://www.scopus.com/',
    abstract: 'Laparoscopic groin hernia repair with synthetic mesh placement has revolutionized hernia surgery by minimizing chronic groin pain and nerve entrapment. This study evaluates 180 laparoscopic hernia repairs using TAPP and TEP approaches over 3 years. Both techniques demonstrated low recurrence rates (<0.6%) and rapid return to full physical activity within 5-7 days.',
    abstractBn: '১৮০ টি ল্যাপারোস্কোপিক হার্নিয়া রিপেয়ার গবেষণায় দেখা গেছে ল্যাপারোস্কোপিক মেশ প্লেসমেন্টে কুঁচকিতে তীব্র দীর্ঘস্থায়ী ব্যথার ঝুঁকি নেই বললেই চলে এবং পুনরায় হার্নিয়া হওয়ার হার ০.৬% এর নিচে।',
    keyFindings: [
      'Overall recurrence rate under 0.6% over a 36-month follow-up window',
      'Significantly reduced chronic groin neuralgia compared to open Lichtenstein repair',
      'Bilateral hernias repaired concurrently through the same keyhole incisions',
      'High patient comfort and early resumption of heavy physical work'
    ],
    keyFindingsBn: [
      '৩৬ মাসের ফলো-আপ পর্যবেক্ষণে হার্নিয়া পুনরায় হওয়ার হার ০.৬% এর নিচে',
      'ওপেন অপারেশনের তুলনায় নার্ভের জটিলতা ও ক্রনিক ব্যথার ঝুঁকি নেই',
      'একই অপারেশনে পেটের দুই পাশের হার্নিয়া একসাথে সারিয়ে তোলার সুযোগ',
      'অপারেশনের ৫-৭ দিনের মধ্যে স্বাভাবিক কাজকর্ম শুরুর সক্ষমতা'
    ],
    citationsCount: 15,
    featured: false
  },
  {
    id: 'pub-laser-fistula-filac-2022',
    title: 'Sphincter-Preserving Laser Fistula Closure (FiLaC) in Complex and Recurrent High Anal Fistulas: Clinical Efficacy and Quality of Life Outcome',
    titleBn: 'জটিল ও পুনরায় ঘটা ফিস্টুলায় স্ফিংকটার রক্ষাকারী ফিলেক (FiLaC) লেজার সার্জারির কার্যকারিতা',
    authors: 'Dr. Sifat Tanzila, Prof. A. Baten, Dr. M. Hasan',
    journal: 'Coloproctology International Journal',
    journalBn: 'কলোপ্রোক্টোলজি ইন্টারন্যাশনাল জার্নাল',
    year: '2022',
    volumeIssue: 'Vol. 44, Issue 5, pp. 388-396',
    indexedIn: ['PubMed', 'Scopus', 'Google Scholar'],
    category: 'Laser Proctology',
    categoryBn: 'লেজার প্রোক্টোলজি',
    doi: '10.1007/s00268-022-06711-2',
    pmid: '35892102',
    scopusId: '2-s2.0-85129482011',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35892102/',
    abstract: 'Fistula Laser Closure (FiLaC) uses flexible 360-degree radial emitting laser fiber energy to destroy the fistulous tract epithelium while preserving anal sphincter muscles. In a prospective cohort of 85 complex anal fistula patients, FiLaC yielded an 88.2% primary healing rate with zero incontinence episodes and minimal post-op wound care requirement.',
    abstractBn: 'ফিলেক (FiLaC) লেজার থেরাপি ফিস্টুলার ভেতরের নালীকে লেজার রশ্মি দিয়ে নির্মূল করে অ্যানাল পেশী অটুট রাখে। ৮৫ জন জটিল ফিস্টুলা রোগীর ওপর গবেষণায় দেখা গেছে এই পদ্ধতিতে ৮৮.২% সাকসেস রেট অর্জিত হয়েছে এবং দৈনিক গজ ড্রেসিংয়ের কোনো প্রয়োজন হয়নি।',
    keyFindings: [
      '88.2% primary tract occlusion rate in complex high anal fistulas',
      '100% sphincter preservation with zero fecal incontinence or gas leakage',
      'Elimination of painful daily open wound dressings',
      'Drastic improvement in patient quality of life scores postoperatively'
    ],
    keyFindingsBn: [
      'জটিল হাই ফিস্টুলায় ৮৮.২% প্রাথমিক নিরাময় ও ট্র্যাক্ট বন্ধের সাফল্য',
      '১০০% অ্যানাল পেশী সংরক্ষণ ও বাওয়েল লিকেজের কোনো ঝুঁকি না থাকা',
      'দৈনিক যন্ত্রণাদায়ক ওপেন ড্রেসিং করার ঝক্কি থেকে সম্পূর্ণ মুক্তি',
      'রোগীদের জীবনযাত্রার মান ও মানসিক স্বস্তিতে বিশাল পরিবর্তন'
    ],
    citationsCount: 28,
    featured: true
  }
];

