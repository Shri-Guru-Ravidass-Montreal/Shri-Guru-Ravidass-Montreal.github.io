import templePlaceholder from '../assets/temple-placeholder.svg';

export type Locale = 'en' | 'pa';
export type PageKey = 
  'home' | 
  'events' |
    'nagarkirtan' |
  'library' |
  'reach';

export type NavKey = 
  'home' | 
  'events' |
  'library' |
  'reach';

export interface EventData { title: string; date: string; description: string; button: string; href: string }
export interface ServiceData { title: string; description: string; image: typeof templePlaceholder; alt: string; }
export interface StaffMember { role: string; name: string; phoneDisplay: string; phoneHref: string; }
export interface FooterLink { label: string; href: string; }
export interface FooterLinkGroup { label: string; href: string; links: FooterLink[]; }

const routes: Record<Locale, Record<PageKey, string>> = {
  en: { 
    home: '/', 
    events: '/events', 
      nagarkirtan: '/events/nagar-kirtan',
    library: '/library', 
    reach: '/reach-us', 
  },
  pa: { 
    home: '/pa/', 
    events: '/pa/events', 
      nagarkirtan: '/pa/events/nagar-kirtan',
    library: '/pa/library', 
    reach: '/pa/reach-us' 
  },
};

const event: EventData = { title: 'Religious Harmony Parade', date: 'September 6th', description: 'Public community event.', button: 'Details (Schedule, Route and Guidelines)', href: routes.en.nagarkirtan };
const services: ServiceData[] = [
  { title: 'Gurmat Camp', description: 'Summer camp for children and youth.', image: templePlaceholder, alt: 'Placeholder image for Gurmat Camp' },
  { title: 'Anand Karaj', description: 'Reach out for Anand Karaj arrangements.', image: templePlaceholder, alt: 'Placeholder image for Anand Karaj' },
  { title: 'Akhand Path', description: 'Inquire about planning and booking an Akhand Path.', image: templePlaceholder, alt: 'Placeholder image for Akhand Path' },
  { title: 'Dr. B. R. Ambedkar Library', description: 'A reference and education space beneath the Gurdwara.', image: templePlaceholder, alt: 'Placeholder image for the Dr. B. R. Ambedkar Library' },
];
const punjabiServices: ServiceData[] = [
  { title: 'ਗੁਰਮਤ ਕੈਂਪ', description: 'ਬੱਚਿਆਂ ਅਤੇ ਨੌਜਵਾਨਾਂ ਲਈ ਗਰਮੀਆਂ ਦਾ ਕੈਂਪ।', image: templePlaceholder, alt: 'ਗੁਰਮਤ ਕੈਂਪ ਲਈ ਪਲੇਸਹੋਲਡਰ ਤਸਵੀਰ' },
  { title: 'ਅਨੰਦ ਕਾਰਜ', description: 'ਅਨੰਦ ਕਾਰਜ ਦੇ ਪ੍ਰਬੰਧਾਂ ਲਈ ਸੰਪਰਕ ਕਰੋ।', image: templePlaceholder, alt: 'ਅਨੰਦ ਕਾਰਜ ਲਈ ਪਲੇਸਹੋਲਡਰ ਤਸਵੀਰ' },
  { title: 'ਅਖੰਡ ਪਾਠ', description: 'ਅਖੰਡ ਪਾਠ ਦੀ ਯੋਜਨਾ ਅਤੇ ਬੁਕਿੰਗ ਲਈ ਪੁੱਛਗਿੱਛ ਕਰੋ।', image: templePlaceholder, alt: 'ਅਖੰਡ ਪਾਠ ਲਈ ਪਲੇਸਹੋਲਡਰ ਤਸਵੀਰ' },
  { title: 'ਡਾ. ਬੀ. ਆਰ. ਅੰਬੇਡਕਰ ਲਾਇਬ੍ਰੇਰੀ', description: 'ਗੁਰਦੁਆਰੇ ਦੇ ਹੇਠਾਂ ਸਥਿਤ ਹਵਾਲਾ ਅਤੇ ਸਿੱਖਿਆ ਕੇਂਦਰ।', image: templePlaceholder, alt: 'ਡਾ. ਬੀ. ਆਰ. ਅੰਬੇਡਕਰ ਲਾਇਬ੍ਰੇਰੀ ਲਈ ਪਲੇਸਹੋਲਡਰ ਤਸਵੀਰ' },
];
const staff: StaffMember[] = [
  { role: 'Pres.', name: 'Sansar Chand Suad', phoneDisplay: '(438) 871-7777', phoneHref: 'tel:+14388717777' },
  { role: 'VP', name: 'Binder Chand', phoneDisplay: '(514) 571-9548', phoneHref: 'tel:+15145719548' },
  { role: 'GSec.', name: 'Shami Banga', phoneDisplay: '(514) 296-7251', phoneHref: 'tel:+15142967251' },
];
const punjabiStaff: StaffMember[] = [
  { role: 'ਪ੍ਰਧਾਨ', name: 'ਸੰਸਾਰ ਚੰਦ ਸੁਆਦ', phoneDisplay: '438-871-7777', phoneHref: 'tel:+14388717777' },
  { role: 'ਵਾਈਸ ਪ੍ਰਧਾਨ', name: 'ਬਿੰਦਰ ਚੰਦ', phoneDisplay: '514-571-9548', phoneHref: 'tel:+15145719548' },
  { role: 'ਜਨਰਲ ਸਕੱਤਰ', name: 'ਸਾਮੀ ਬੰਗਾ', phoneDisplay: '514-296-7251', phoneHref: 'tel:+15142967251' },
];

const footerLinks: Record<Locale, FooterLinkGroup[]> = {
  en: [
    { label: 'Home', href: routes.en.home, links: [
      { label: 'Gurmat Classes', href: `${routes.en.reach}#inquiries` },
      { label: 'Anand Karaj', href: `${routes.en.reach}#inquiries` },
      { label: 'Akhand Path', href: `${routes.en.reach}#inquiries` },
    ] },
    { label: 'Events', href: routes.en.events, links: [{ label: 'Nagar Kirtan', href: routes.en.nagarkirtan }] },
    { label: 'Library', href: routes.en.library, links: [{ label: 'Ambedkar Library', href: `${routes.en.library}#ambedkar-library` }] },
    { label: 'Reach Us', href: routes.en.reach, links: [{ label: 'Inquiries & Booking', href: `${routes.en.reach}#inquiries` }] },
  ],
  pa: [
    { label: 'ਮੁੱਖ ਪੰਨਾ', href: routes.pa.home, links: [
      { label: 'ਗੁਰਮਤ ਕਲਾਸਾਂ', href: `${routes.pa.reach}#inquiries` },
      { label: 'ਅਨੰਦ ਕਾਰਜ', href: `${routes.pa.reach}#inquiries` },
      { label: 'ਅਖੰਡ ਪਾਠ', href: `${routes.pa.reach}#inquiries` },
      { label: 'ਡਾ. ਬੀ. ਆਰ. ਅੰਬੇਡਕਰ ਲਾਇਬ੍ਰੇਰੀ', href: `${routes.pa.reach}#inquiries` },
    ] },
    { label: 'ਸਮਾਗਮ', href: routes.pa.events, links: [{ label: 'ਨਗਰ ਕੀਰਤਨ', href: routes.pa.nagarkirtan }] },
    { label: 'ਲਾਇਬ੍ਰੇਰੀ', href: routes.pa.library, links: [{ label: 'ਅੰਬੇਡਕਰ ਲਾਇਬ੍ਰੇਰੀ', href: `${routes.pa.library}#ambedkar-library` }] },
    { label: 'ਸੰਪਰਕ', href: routes.pa.reach, links: [{ label: 'ਪੁੱਛਗਿੱਛ ਅਤੇ ਬੁਕਿੰਗ', href: `${routes.pa.reach}#inquiries` }] },
  ],
};

const englishLibrary = [
  {
    id: 'ravidas',
    title: 'Satguru Ravidass Ji',
    body: 'Satguru Ravidass Ji was a mystic poet-saint of the Bhakti movement. He is venerated as a “Guru” (spiritual teacher).',

    details: [
      ['Life', 'Satguru Ravidass Ji was born in the village Seer Govardhanpur, near a religious center Kashi Banaras in the state of UP, in 1377 AD in the house of father Santokh Das and mother Kalsi Devi Ji. Guru Ji was married to Lona Devi, popularly called Mother Lona. A son was born to them. Guru Ji left for the heavenly abode at the age of 151 years in 1527 AD.'],

      ['Teachings', 'Guru Ji taught and promoted personal spiritual freedom. Guru Ji also raised his voice against social divisions and casteism. Guru Ji spread a message of Begampura, a land without sorrows.'],

      ['Bani in Sri Guru Granth Sahib Ji', 'His 40 sacred/heavenly verses in 16 Ragas and a Shaloka are included in Sri Guru Granth Sahib Ji.'],
    ]
  },

  {
    id: 'sggs',
    title: 'Sri Guru Granth Sahib Ji',
    body: 'Sri Guru Granth Sahib Ji is the eternal Guru of the Sikhs. It is the central scripture and spiritual authority of Sikh tradition.',

    details: [
      ['About Sri Guru Granth Sahib Ji', 'Sri Guru Granth Sahib Ji developed from the Adi Granth compiled by Guru Arjan Dev Ji. It contains the bani of six Sikh Gurus: Guru Nanak Dev Ji, Guru Angad Dev Ji, Guru Amar Das Ji, Guru Ram Das Ji, Guru Arjan Dev Ji, and Guru Tegh Bahadur Ji, as well as the writings of prominent Bhagats, Bhatts, and other contributors.'],

      ['Guru Nanak Dev Ji', 'The founder of Sikhism, Sri Guru Nanak Dev Ji was born in 1469 AD in Rai Bhoye\'s Talwandi, Sri Nankana Sahib, to Kalyan Das Mehta Ji and Mata Tripta Devi Ji. Guru Ji was married to Bibi Sulakhani, and they had two sons, Baba Sri Chand Ji and Lakhmi Das Ji. Guru Ji made four Udasi journeys during his lifetime for the welfare of humanity. Guru Ji left for the heavenly abode in 1539 AD at Kartarpur, Pakistan. His bani includes 977 shabads recorded in 20 different Ragas in Sri Guru Granth Sahib Ji.'],

      ['Sri Guru Arjan Dev Ji, Adi Granth & Prakash', 'The fifth Sikh Guru, Sri Guru Arjan Dev Ji, was born in 1563 AD at Goindwal Sahib to Sri Guru Ram Das Ji and Mata Bhani Ji. Guru Ji was married to Mata Ganga Ji. \n\nGuru Ji compiled the Adi Granth, which included the bani of the previous Sikh Gurus and Bhagats. In 1604 AD, Guru Ji arranged the first Prakash of Sri Guru Granth Sahib Ji at Sachkhand Sri Harmandir Sahib and appointed Giani Baba Buddha Sahib Ji as the first Head Granthi. \n\nGuru Ji gave martyrdom for the sake of religion and left for his heavenly abode in Lahore in 1606 AD.'],

      ['Sri Guru Gobind Singh Ji', 'Sri Guru Gobind Singh Ji was born in 1666 AD at Patna Sahib to Sri Guru Tegh Bahadur Ji and Mata Gujri Ji. Guru Ji established the Khalsa Panth at Anandpur Sahib on the day of Baisakhi in 1699 AD. \n\nGuru Ji was the tenth light of Sri Guru Nanak Dev Ji and he is the last human Guru of Sikhs. He taught the Sikh Panth to oppose tyranny. Fighting for truth and against oppression, Guru Ji sacrificed his entire family and is popularly remembered as Sarbansdani. Guru Ji established Sri Guru Granth Sahib Ji as the eternal Guru of the Sikhs. Guru Ji left for his heavenly abode in 1708 AD at Nanded Sahib, Maharashtra.'],
    ]
  },

  {
    id: 'bhagats',
    title: 'Bhagats',
    body: 'Preserved in Sri Guru Granth Sahib Ji are the bani of saints and mystics from diverse backgrounds whose teachings explored devotion, humility, divine love, and the search for spiritual truth beyond worldly divisions.',

    details: [
      ['The Bhagats', 'Sheikh Farid Ji, Satguru Kabir Ji, Satguru Namdev Ji, Satguru Trilochan Ji, Satguru Beni Ji, Satguru Dhanna Ji, Satguru Pipa Ji, Satguru Sadhna Ji, Satguru Sain Ji, Satguru Bhikhan Ji, Satguru Jaidev Ji, Satguru Ramanand Ji, Satguru Surdas Ji, and Satguru Parmanand Ji.'],
    ]
  },

  {
    id: 'bhatt-bani',
    title: 'Bhatts',
    body: 'The bani of 11 Bhatts is included in Sri Guru Granth Sahib Ji. Their compositions are principally found in the form of Savaiye.',

    details: [
      ['The 11 Bhatts', 'Kalshar Ji, Gyand Ji, Kirat Ji, Mathura Ji, Balh Ji, Nalh Ji, Bhika Ji, Salh Ji, Bhalh Ji, Jalap Ji, and Das Ji.'],
      ['Bani', 'The Bhatts contributed Savaiye in praise of the Sikh Gurus, which are recorded in Sri Guru Granth Sahib Ji.'],
    ]
  },

  {
    id: 'other-contributors',
    title: 'Other Contributors',

    details: [
      ['Bhai Mardana Ji', 'Bhai Mardana Ji was a lifelong companion of Guru Nanak Dev Ji. Two shabads attributed to Bhai Mardana Ji are included in Sri Guru Granth Sahib Ji.'],

      ['Baba Sundar Ji', 'Baba Sundar Ji composed Ramkali Sadu, a bani included in Sri Guru Granth Sahib Ji.'],

      ['Bhai Satta Ji and Bhai Balwand Ji', 'Bhai Satta Ji and Bhai Balwand Ji composed Ramkali Ki Vaar, which is included in Sri Guru Granth Sahib Ji.'],
    ]
  },

];

const punjabiLibrary = [

  {
    id: 'ravidas',
    title: 'ਸਤਿਗੁਰੂ ਰਵਿਦਾਸ ਜੀ',
    body: 'ਸਤਿਗੁਰੂ ਰਵਿਦਾਸ ਜੀ ਭਗਤੀ ਲਹਿਰ ਦੇ ਇੱਕ ਮਹਾਨ ਰਹੱਸਵਾਦੀ ਕਵੀ-ਸੰਤ ਸਨ। ਆਪ ਜੀ ਨੂੰ ਗੁਰੂ, ਅਰਥਾਤ ਆਤਮਿਕ ਅਧਿਆਪਕ, ਵਜੋਂ ਸਤਿਕਾਰਿਆ ਜਾਂਦਾ ਹੈ।',

    details: [

      ['ਜੀਵਨ', 'ਆਪ ਜੀ ਦਾ ਜਨਮ 1433 ਸੰਮਤ ਨੂੰ ਉੱਤਰ ਪ੍ਰਦੇਸ਼ ਦੇ ਧਾਰਮਿਕ ਕੇਂਦਰ ਬਨਾਰਸ ਦੇ ਲਾਗੇ ਪਿੰਡ ਸੀਰ ਗੋਵਰਧਨਪੁਰ ਵਿੱਚ ਪਿਤਾ ਸੰਤੋਖ ਦਾਸ ਅਤੇ ਮਾਤਾ ਕਲਸੀ ਦੇਵੀ ਜੀ ਦੇ ਘਰ ਹੋਇਆ। ਆਪ ਜੀ ਦੀ ਸ਼ਾਦੀ ਮਾਤਾ ਲੋਨਾ ਦੇ ਨਾਲ ਹੋਈ ਅਤੇ ਆਪ ਜੀ ਦੇ ਘਰ ਇੱਕ ਪੁੱਤਰ ਨੇ ਜਨਮ ਲਿਆ। ਆਪ ਜੀ 151 ਸਾਲ ਦੀ ਉਮਰ ਭੋਗ ਕੇ 1584 ਸੰਮਤ ਨੂੰ ਬਨਾਰਸ ਵਿਖੇ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।'],

      ['ਸਿੱਖਿਆਵਾਂ', 'ਗੁਰੂ ਜੀ ਨੇ ਨਿੱਜੀ ਅਧਿਆਤਮਿਕ ਸੁਤੰਤਰਤਾ ਲਈ ਸਿੱਖਿਆ ਅਤੇ ਪ੍ਰਚਾਰ ਕੀਤਾ। ਗੁਰੂ ਜੀ ਨੇ ਸਮਾਜਿਕ ਵੰਡ ਅਤੇ ਜਾਤੀਵਾਦ ਦੇ ਵਿਰੁੱਧ ਆਪਣੀ ਆਵਾਜ਼ ਬੁਲੰਦ ਕੀਤੀ। ਗੁਰੂ ਜੀ ਨੇ ਪੂਰੀ ਮਾਨਵਤਾ ਲਈ ਬੇਗਮਪੁਰਾ, ਗਮਾਂ ਤੋਂ ਰਹਿਤ ਸੰਸਾਰ ਸਿਰਜਣ ਦਾ ਉਪਦੇਸ਼ ਆਪਣੀ ਬਾਣੀ ਵਿੱਚ ਦਰਸਾਇਆ।'],

      ['ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਬਾਣੀ', 'ਆਪ ਜੀ ਦੀ ਰਚੀ ਬਾਣੀ ਦੇ 40 ਸ਼ਬਦ 16 ਰਾਗਾਂ ਵਿੱਚ ਅਤੇ ਇੱਕ ਸਲੋਕ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਦਰਜ ਹਨ।'],

    ]
  },

  {
    id: 'sggs',
    title: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ',
    body: 'ਸਾਡੀ ਵੈੱਬਸਾਈਟ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਤੱਕ ਪਹੁੰਚ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ, ਜੋ ਸਿੱਖਾਂ ਦੇ ਸਦੀਵੀ ਗੁਰੂ ਹਨ। ਇਹ ਸਿੱਖ ਧਰਮ ਦਾ ਕੇਂਦਰੀ ਧਾਰਮਿਕ ਗ੍ਰੰਥ ਅਤੇ ਅਧਿਆਤਮਿਕ ਅਧਿਕਾਰ ਹਨ.',

    details: [

      ['ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਬਾਰੇ', 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਵਿਕਾਸ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਵੱਲੋਂ ਸੰਪਾਦਿਤ ਆਦਿ ਗ੍ਰੰਥ ਤੋਂ ਹੋਇਆ। ਇਸ ਵਿੱਚ ਛੇ ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨ — ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ, ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ, ਸ੍ਰੀ ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ, ਸ੍ਰੀ ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ, ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ — ਦੀ ਬਾਣੀ ਦੇ ਨਾਲ 15 ਭਗਤਾਂ, 11 ਭੱਟਾਂ ਅਤੇ 4 ਹੋਰ ਯੋਗਦਾਨੀਆਂ ਦੀ ਬਾਣੀ ਦਰਜ ਹੈ।'],

      ['ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ', 'ਸਿੱਖ ਧਰਮ ਦੇ ਬਾਨੀ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ 1469 ਈ: ਨੂੰ ਰਾਏ ਭੋਏ ਦੀ ਤਲਵੰਡੀ ਸ੍ਰੀ ਨਨਕਾਣਾ ਸਾਹਿਬ ਵਿਖੇ ਪਿਤਾ ਕਲਿਆਣ ਦਾਸ ਮਹਿਤਾ ਜੀ ਅਤੇ ਮਾਤਾ ਤ੍ਰਿਪਤਾ ਜੀ ਦੇ ਘਰ ਹੋਇਆ। ਆਪ ਜੀ ਦੀ ਛੋਟੀ ਬੀਬੀ ਸੁਲੱਖਣੀ ਨਾਲ ਸ਼ਾਦੀ ਹੋਈ ਅਤੇ ਆਪ ਜੀ ਦੇ ਦੋ ਸੁਪੁੱਤਰ ਬਾਬਾ ਸ੍ਰੀ ਚੰਦ ਜੀ ਤੇ ਲਖਮੀ ਦਾਸ ਜੀ ਹੋਏ। ਆਪ ਜੀ ਨੇ ਆਪਣੇ ਜੀਵਨ ਕਾਲ ਦੌਰਾਨ ਮਾਨਵਤਾ ਦੀ ਖਾਤਰ ਚਾਰ ਉਦਾਸੀਆਂ ਕੀਤੀਆਂ। ਆਪ ਜੀ 70 ਸਾਲ ਦੀ ਆਯੂ ਭੋਗ ਕੇ 1539 ਈ: ਨੂੰ ਕਰਤਾਰਪੁਰ, ਪਾਕਿਸਤਾਨ ਵਿਖੇ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ। ਆਪ ਜੀ ਦੀ ਬਾਣੀ ਦੇ 977 ਸ਼ਬਦ 20 ਵੱਖ-ਵੱਖ ਰਾਗਾਂ ਵਿੱਚ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਅੰਕਿਤ ਹਨ।'],

      ['ਪ੍ਰਕਾਸ਼ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ', 'ਧੰਨ ਧੰਨ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਮਹਾਰਾਜ ਨੇ 1604 ਈ: ਨੂੰ ਸੱਚਖੰਡ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਵਿੱਚ ਧੰਨ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਪਹਿਲਾ ਪ੍ਰਕਾਸ਼ ਕਰਵਾ ਕੇ ਧੰਨ ਧੰਨ ਗਿਆਨੀ ਬਾਬਾ ਬੁੱਢਾ ਸਾਹਿਬ ਜੀ ਨੂੰ ਪਹਿਲਾ ਹੈੱਡ ਗ੍ਰੰਥੀ ਬਣਾਇਆ। ਪ੍ਰਕਾਸ਼ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਪਾਵਨ ਸਰੂਪ ਦੇ ਰਸਮੀ ਉਦਘਾਟਨ ਅਤੇ ਹਜ਼ੂਰੀ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।'],

      ['ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ', 'ਧੰਨ ਧੰਨ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਅਤੇ ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਦੇ ਘਰ ਪਟਨਾ ਸਾਹਿਬ ਵਿਖੇ 1666 ਈ: ਨੂੰ ਹੋਇਆ। ਆਪ ਜੀ ਨੇ 1699 ਈ: ਨੂੰ ਵਿਸਾਖੀ ਵਾਲੇ ਦਿਨ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ‘ਖਾਲਸਾ’ ਪੰਥ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।\n\nਗੁਰੂ ਜੀ ਨੇ ਸੱਚ ਲਈ ਲੜਨਾਂ ਤੇ ਜ਼ੁਲਮ ਦੀ ਰੋਕਥਾਮ ਕਰਨ ਦਾ ਉਪਦੇਸ਼ ਸਿੱਖ ਪੰਥ ਨੂੰ ਦਿੱਤਾ। ਜ਼ਬਰ ਜ਼ੁਲਮ ਖਿਲਾਫ ਅਤੇ ਸੱਚ ਲਈ ਲੜਦੇ ਹੋਏ ਆਪਣਾ ਸਾਰਾ ਪਰਿਵਾਰ ਸਰਬੰਸ ਵਾਰ ਦਿੱਤਾ। ਗੁਰੂ ਰੂਪ ਕੇ 42 ਸਾਲ ਦੀ ਉਮਰ ਭੋਗਦੇ ਹੋਏ ਆਪ ਜੀ 1708 ਈ: ਨੂੰ ਨੰਦੇੜ ਸਾਹਿਬ ਮਹਾਰਾਸ਼ਟਰ ਵਿਖੇ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।'],

    ]
  },

  {
    id: 'bhagats',
    title: 'ਭਗਤ',
    body: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਪਿਛੋਕੜਾਂ ਨਾਲ ਸੰਬੰਧਿਤ ਸੰਤਾਂ ਅਤੇ ਰਹੱਸਵਾਦੀਆਂ ਦੀ ਬਾਣੀ ਦਰਜ ਹੈ, ਜਿਨ੍ਹਾਂ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਭਗਤੀ, ਨਿਮਰਤਾ, ਰੱਬੀ ਪ੍ਰੇਮ ਅਤੇ ਸੰਸਾਰਕ ਵੰਡਾਂ ਤੋਂ ਉੱਪਰ ਆਤਮਿਕ ਸੱਚ ਦੀ ਖੋਜ ਨੂੰ ਦਰਸਾਉਂਦੀਆਂ ਹਨ।',
    
    details: [
      ['ਭਗਤ ਸਾਹਿਬਾਨ', 'ਸ਼ੇਖ ਫਰੀਦ ਜੀ, ਸਤਿਗੁਰੂ ਕਬੀਰ ਜੀ, ਸਤਿਗੁਰੂ ਨਾਮਦੇਵ ਜੀ, ਸਤਿਗੁਰੂ ਤ੍ਰਿਲੋਚਨ ਜੀ, ਸਤਿਗੁਰੂ ਬੇਣੀ ਜੀ, ਸਤਿਗੁਰੂ ਧੰਨਾ ਜੀ, ਸਤਿਗੁਰੂ ਪੀਪਾ ਜੀ, ਸਤਿਗੁਰੂ ਸਧਨਾ ਜੀ, ਸਤਿਗੁਰੂ ਸੈਣ ਜੀ, ਸਤਿਗੁਰੂ ਭੀਖਨ ਜੀ, ਸਤਿਗੁਰੂ ਜੈਦੇਵ ਜੀ, ਸਤਿਗੁਰੂ ਰਾਮਾਨੰਦ ਜੀ, ਸਤਿਗੁਰੂ ਸੂਰਦਾਸ ਜੀ ਅਤੇ ਸਤਿਗੁਰੂ ਪਰਮਾਨੰਦ ਜੀ।'],
    ]
  },

  {
    id: 'bhatt-bani',
    title: 'ਭੱਟ',
    body: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ 11 ਭੱਟਾਂ ਦੀ ਬਾਣੀ ਦਰਜ ਹੈ। ਭੱਟਾਂ ਦੀ ਬਾਣੀ ਮੁੱਖ ਤੌਰ ਤੇ ਸਵੱਈਆਂ ਦੇ ਰੂਪ ਵਿੱਚ ਦਰਜ ਹੈ।',

    details: [
      ['11 ਭੱਟ', 'ਕਲਸ਼ਹਾਰ ਜੀ, ਗਯੰਦ ਜੀ, ਕੀਰਤ ਜੀ, ਮਥੁਰਾ ਜੀ, ਬਲ੍ਹ ਜੀ, ਨਲ੍ਹ ਜੀ, ਭੀਖਾ ਜੀ, ਸਲ੍ਹ ਜੀ, ਭਲ੍ਹ ਜੀ, ਜਲਪ ਜੀ ਅਤੇ ਦਾਸ ਜੀ।'],
      ['ਬਾਣੀ', 'ਭੱਟਾਂ ਨੇ ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੀ ਉਸਤਤ ਵਿੱਚ ਸਵੱਈਏ ਰਚੇ, ਜੋ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਦਰਜ ਹਨ।'],
    ]
  },

  {
    id: 'other-contributors',
    title: 'ਹੋਰ ਯੋਗਦਾਨੀ',

    details: [
      ['ਭਾਈ ਮਰਦਾਨਾ ਜੀ', 'ਭਾਈ ਮਰਦਾਨਾ ਜੀ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਜੀਵਨ ਭਰ ਦੇ ਸਾਥੀ ਸਨ। ਭਾਈ ਮਰਦਾਨਾ ਜੀ ਨਾਲ ਸੰਬੰਧਿਤ ਦੋ ਸ਼ਬਦ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਦਰਜ ਹਨ।'],

      ['ਬਾਬਾ ਸੁੰਦਰ ਜੀ', 'ਬਾਬਾ ਸੁੰਦਰ ਜੀ ਦੀ ਰਚਨਾ ਰਾਮਕਲੀ ਸਦੁ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਦਰਜ ਹੈ।'],

      ['ਭਾਈ ਸੱਤਾ ਜੀ ਅਤੇ ਭਾਈ ਬਲਵੰਡ ਜੀ', 'ਭਾਈ ਸੱਤਾ ਜੀ ਅਤੇ ਭਾਈ ਬਲਵੰਡ ਜੀ ਦੀ ਰਚਨਾ ਰਾਮਕਲੀ ਕੀ ਵਾਰ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਦਰਜ ਹੈ।'],
    ]
  },

];

const form = { address: '8205 Durocher, Montreal, QC H3N 2A8', hoursTitle: 'Opening Hours', hours: ['Weekdays 4:00 AM - 9:00 PM', 'Friday & Saturday Night 24h '], langarTitle: 'Langar Hours', langarHours: ['1:00 PM - 8:30 PM', 'Friday & Saturday From 10:00 AM'], conductTitle: 'Etiquette & Guidelines', conduct: ['Please dress appropriately; Pants need to be under knee-length.', 'Please leave your shoes in the cloakroom and wash your feet before entering any other room.', 'You will be asked to cover your head with a cloth; Handkerchiefs are available on-site.'], formTitle: 'Inquiries & Booking', formIntro: 'Use this form for a general inquiry, service inquiry, or event/service booking.', name: 'Name', email: 'Email', type: 'Inquiry type', typeOptions: ['General inquiry', 'Service inquiry', 'Event/service booking'], service: 'Service', serviceOptions: services.map(({ title }) => title), message: 'Message', submit: 'Send inquiry' };
const punjabiForm = { address: '8205 ਡੂਰੋਸ਼ਰ, ਮੋਂਟਰੀਅਲ, ਕਿਊਬੈਕ H3N 2A8', hoursTitle: 'ਖੁੱਲ੍ਹਣ ਦਾ ਸਮਾਂ', hours: ['ਹਫ਼ਤੇ ਦੇ ਦਿਨ ਸਵੇਰੇ 4:00 ਵਜੇ ਤੋਂ ਰਾਤ 9:00 ਵਜੇ ਤੱਕ', 'ਸ਼ੁੱਕਰਵਾਰ ਅਤੇ ਸ਼ਨੀਵਾਰ ਰਾਤ 24 ਘੰਟੇ'], langarTitle: 'ਲੰਗਰ ਦਾ ਸਮਾਂ', langarHours: ['ਦੁਪਹਿਰ 1:00 ਵਜੇ ਤੋਂ ਰਾਤ 8:30 ਵਜੇ ਤੱਕ', 'ਸ਼ੁੱਕਰਵਾਰ ਅਤੇ ਸ਼ਨੀਵਾਰ ਸਵੇਰੇ 10:00 ਵਜੇ ਤੋਂ'], conductTitle: 'ਮਰਿਆਦਾ ਅਤੇ ਹਦਾਇਤਾਂ', conduct: ['ਕਿਰਪਾ ਕਰਕੇ ਢੁਕਵੇਂ ਕੱਪੜੇ ਪਹਿਨੋ। ਪੈਂਟ ਗੋਡਿਆਂ ਤੋਂ ਹੇਠਾਂ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।', 'ਜੁੱਤੀਆਂ ਬਾਹਰ ਰੱਖੋ ਅਤੇ ਪ੍ਰਾਰਥਨਾ ਵਾਲੇ ਸਥਾਨ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਪੈਰ ਧੋਵੋ।', 'ਸਿਰ ਢੱਕਣਾ ਜ਼ਰੂਰੀ ਹੈ। ਰੁਮਾਲ ਅਤੇ ਸਿਰ ਢੱਕਣ ਲਈ ਕੱਪੜੇ ਇੱਥੇ ਉਪਲਬਧ ਹਨ।'], formTitle: 'ਪੁੱਛਗਿੱਛ ਅਤੇ ਬੁਕਿੰਗ', formIntro: 'ਆਮ ਪੁੱਛਗਿੱਛ, ਸੇਵਾ ਜਾਂ ਸਮਾਗਮ/ਸੇਵਾ ਬੁਕਿੰਗ ਲਈ ਇਹ ਫਾਰਮ ਵਰਤੋ।', name: 'ਨਾਮ', email: 'ਈਮੇਲ', type: 'ਪੁੱਛਗਿੱਛ ਦੀ ਕਿਸਮ', typeOptions: ['ਆਮ ਪੁੱਛਗਿੱਛ', 'ਸੇਵਾ ਸੰਬੰਧੀ ਪੁੱਛਗਿੱਛ', 'ਸਮਾਗਮ/ਸੇਵਾ ਬੁਕਿੰਗ'], service: 'ਸੇਵਾ', serviceOptions: punjabiServices.map(({ title }) => title), message: 'ਸੁਨੇਹਾ', submit: 'ਪੁੱਛਗਿੱਛ ਭੇਜੋ' };


const englishNagarKirtan2026 = {
    introTitle: 'Nagar Kirtan 2026',
    intro: "Guru Arjan Dev Ji Maharaj, in 1604 CE, arranged the first Prakash of Sri Guru Granth Sahib Ji at Sachkhand Sri Harmandir Sahib and appointed Baba Buddha Sahib Ji as the first Head Granthi. \n\n" +
"The 422nd Prakash Dihara of Sri Guru Granth Sahib Ji and the 649th Prakash Purab of Sri Guru Ravidas Ji Maharaj will be celebrated with great devotion and care, through the cooperation of the entire Sikh Sangat, in the form of a Nagar Kirtan.",
    introLinks: [
      { text: 'first Prakash of Sri Guru Granth Sahib Ji', href: '/library#sggs' },
      { text: 'Prakash Purab of Sri Guru Ravidas Ji', href: '/library#ravidas' },
    ],

    programmeTitle: 'Program',
    programme: [
      {
          date: '04 September 2026',
          items: [
              {
                  title: 'Akhand Path Sahib',
                  time: '10:00 AM',
              },
          ],
      },
      {
          date: '06 September 2026',
          items: [
              {
                  title: 'Bhog of Akhand Path Sahib',
                  time: '10:00 AM',
              },
              {
                  title: 'Conclusion of Diwan',
                  time: '01:00 PM',
              },
              {
                  title: 'Departure of Nagar Kirtan',
                  time: '01:00 PM',
              },
              {
                  title: 'Conclusion of Nagar Kirtan',
                  time: '05:00 PM',
              },
          ],
      },
  ],

    mapTitle: 'Trajectory',

    gatheringTitle: 'Involvement',
    gathering: "At this great gathering, renowned Kirtaniye, Ragis, Dhadi performers and preachers of the Sikh community will bless the congregation through the singing and proclamation of Guru\'s praises. \n\n" + 
    "A request is made to all gurdwaras, temples, mosques, churches, organizations and the Sadh Sangat to participate in this great Nagar Kirtan and come in large numbers. Serve with hands, mind and means, may you obtain the blessings of Guru Maharaj.",

    contactTitle: 'For Further Information',
    contact: [
        'Chief Sevadar',
        'Sansar Chand Suad',
        '438-871-7777',
        'Management Committee, Sri Guru Ravidas Sabha and all Sevadars',
        '8205 Rue Durocher, Park-Ex, Montreal, QC, H3N 2A8',
    ],
}

const punjabiNagarKirtan2026 = {
    introTitle: 'ਹਰਿ ਮਹਾਨ ਨਗਰ ਕੀਰਤਨ 2026',
    intro: 'ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਹਿ॥\n\nਧੰਨ ਧੰਨ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਮਹਾਰਾਜ ਨੇ 1604 ਈ: ਨੂੰ ਸੱਚਖੰਡ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਵਿੱਚ ਧੰਨ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਪਹਿਲਾ ਪ੍ਰਕਾਸ਼ ਕਰਵਾ ਕੇ ਧੰਨ ਧੰਨ ਗਿਆਨੀ ਬਾਬਾ ਬੁੱਢਾ ਸਾਹਿਬ ਜੀ ਨੂੰ ਪਹਿਲਾ ਹੈੱਡ ਗ੍ਰੰਥੀ ਬਣਾਇਆ। \n\nਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ 422 ਵੇਂ ਪ੍ਰਕਾਸ਼ ਦਿਹਾੜੇ ਅਤੇ ਧੰਨ ਧੰਨ ਸ੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਜੀ ਮਹਾਰਾਜ ਦੇ 649 ਵੇਂ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ ਨੂੰ ਸਮੂਹ ਸਿੱਖ ਸੰਗਤਾਂ ਦੇ ਸਹਿਯੋਗ ਨਾਲ ਨਗਰ ਕੀਰਤਨ ਦੇ ਰੂਪ ਵਿੱਚ ਬੜੀ ਸ਼ਰਧਾ ਅਤੇ ਪ੍ਰੇਮ ਭਾਵਨਾ ਨਾਲ ਮਨਾਇਆ ਜਾਵੇਗਾ।',
    introLinks: [
      { text: 'ਪਹਿਲਾ ਪ੍ਰਕਾਸ਼', href: '/pa/library#sggs' },
      { text: 'ਪ੍ਰਕਾਸ਼ ਪੁਰਬ', href: '/pa/library#ravidas' },
    ],

    programmeTitle: 'ਪ੍ਰੋਗਰਾਮ',
    programme: [
      {
          date: '04 ਸਤੰਬਰ 2026',
          items: [
              {
                  title: 'ਅਖੰਡ ਸ੍ਰੀ ਅਖੰਡ-ਪਾਠ ਸਾਹਿਬ',
                  time: 'ਸਵੇਰੇ 10:00 ਵਜੇ',
              },
          ],
      },
      {
          date: '06 ਸਤੰਬਰ 2026',
          items: [
              {
                  title: 'ਭੋਗ ਸ੍ਰੀ ਅਖੰਡ-ਪਾਠ ਸਾਹਿਬ',
                  time: 'ਸਵੇਰੇ 10:00 ਵਜੇ',
              },
              {
                  title: 'ਦੀਵਾਨ ਦੀ ਸਮਾਪਤੀ',
                  time: '01:00 ਵਜੇ',
              },
              {
                  title: 'ਨਗਰ ਕੀਰਤਨ ਦੀ ਰਵਾਨਗੀ',
                  time: '01:00 ਵਜੇ',
              },
              {
                  title: 'ਨਗਰ ਕੀਰਤਨ ਦੀ ਸਮਾਪਤੀ',
                  time: '05:00 ਵਜੇ',
              },
          ],
      },
    ],

    mapTitle: 'ਨਕਸ਼ਾ',

    gatheringTitle: 'ਇਸ ਮਹਾਨ ਸਮਾਗਮ ਵਿੱਚ',
    gathering: 'ਇਸ ਮਹਾਨ ਸਮਾਗਮ ਵਿੱਚ ਸਿੱਖ ਕੌਮ ਦੇ ਮਹਾਨ ਕੀਰਤਨੀਏ, ਰਾਗੀ, ਢਾਡੀ ਅਤੇ ਪ੍ਰਚਾਰਕ ਗੁਰੂ ਜੱਸ ਰਾਹੀਂ ਸੰਗਤਾਂ ਨੂੰ ਨਿਹਾਲ ਕਰਨਗੇ।\n\nਸਮੂਹ ਗੁਰਦੁਆਰਿਆਂ, ਮੰਦਰਾਂ, ਮਸਜਿਦਾਂ, ਚਰਚਾਂ, ਸੰਸਥਾਵਾਂ ਅਤੇ ਸਾਧ-ਸੰਗਤ ਦੀ ਸੇਵਾ ਵਿੱਚ ਬੇਨਤੀ ਹੈ ਕਿ ਇਸ ਮਹਾਨ ਨਗਰ ਕੀਰਤਨ ਵਿੱਚ ਸ਼ਾਮਿਲ ਹੋਣ ਲਈ ਹੁੰਮ ਹੁਮਾ ਕੇ ਪਹੁੰਚੋ ਅਤੇ ਤਨ, ਮਨ, ਧਨ ਨਾਲ ਸੇਵਾ ਕਰਕੇ ਗੁਰੂ ਮਹਾਰਾਜ ਦੀਆਂ ਖੁਸ਼ੀਆਂ ਪ੍ਰਾਪਤ ਕਰੋ ਜੀ।\n\nਹੋਰ ਜਾਣਕਾਰੀ ਲਈ ਸੰਪਰਕ ਕਰੋ ਜੀ।',

    contactTitle: 'ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ ਸੰਪਰਕ',
    contact: [
        'ਮੁੱਖ ਸੇਵਾਦਾਰ',
        'ਸੰਸਾਰ ਚੰਦ ਸੁਆਦ',
        '438-871-7777',
        'ਬੇਨਤੀ ਕਰਤਾ: ਪ੍ਰਬੰਧਕ ਕਮੇਟੀ ਸ੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਸਭਾ ਅਤੇ ਸਮੂਹ ਸੇਵਾਦਾਰ',
        '8205, Rue Durocher, Park-ex. Montreal, QC, H3N 2A8',
    ],
}


export const siteContent = {
  en: {
    meta: { title: 'Shri Guru Ravidass Temple | Montreal', description: 'The website of Shri Guru Ravidass Temple in Montreal.' },
    nav: { home: 'Home', events: 'Events', library: 'Library', reach: 'Reach Us' },
    labels: { learnMore: 'Learn more', inquire: 'Inquiries & Booking', details: 'Event details', books: '“Browse the library books”', servicesTitle: 'Services', servicesIntro: 'Connect with the Gurdwara for information, arrangements, and bookings.', calendarLabel: 'Calendar', calendarPlaceholder: 'Google Calendar embed placeholder', locationTitle: 'Location & Opening Hours', map: 'Map', parking: 'Parking Information', selectService: 'Select a service'},
    event, services, staff,
    home: { eyebrow: 'Montreal Sangat', title: 'A place for sangat, seva, and shared prayer.', intro: 'Shri Guru Ravidass Temple brings the community together in the spirit of devotion, learning, and service.', aboutTitle: 'About Us', about: ['Shri Guru Ravidass Temple is a Gurdwara and community Sabha serving sangat in Montreal and surrounding communities.', 'It provides a place for prayer, education, cultural connection, and support through the Sikh tradition and the teachings of Guru Ravidas Ji.', 'Our Gurdwara continues a living tradition of sangat and seva: welcoming families, preserving memory, and making space for the next generation.'], helpTitle: 'How To Help', help: 'Our temple can only keep going thanks to our volunteers and donors. To start volunteering, please ask our sevadars for training. For nonphysical donations, please contact us.' },
    eventsPage: { title: 'Events', intro: 'Gatherings, celebrations, and community updates from the Gurdwara.', nextTitle: 'Next Event', scheduleTitle: 'Google Schedule', scheduleBody: 'The schedule will appear here once the calendar is connected.', pastTitle: 'Past & Upcoming', pastBody: 'Nagar Kirtan is currently the featured event. This section can grow as more dates are confirmed.' },
      nagarKirtan2026Page: englishNagarKirtan2026,
    libraryPage: { title: 'Library', intro: 'An educational and reference section for learning about Gurbani, Sikh history, and the spiritual figures connected to this tradition.', sections: englishLibrary, libraryBanner: 'The Dr. B. R. Ambedkar Library is located under the Gurdwara premises and supports education, reflection, and community learning.' },
    reachPage: { title: 'Reach Us', intro: 'Contact the Gurdwara, find us, and send an inquiry or service booking request.', staffTitle: 'Call Us', staffPill: 'Staff Contacts', ...form },
  },
  pa: {
    meta: { title: 'ਸ਼੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਟੈਂਪਲ | ਮੋਂਟਰੀਅਲ', description: 'ਸ਼੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਟੈਂਪਲ ਮੋਂਟਰੀਅਲ ਦੀ ਵੈੱਬਸਾਈਟ।' },
    nav: { home: 'ਮੁੱਖ ਪੰਨਾ', events: 'ਸਮਾਗਮ', library: 'ਲਾਇਬ੍ਰੇਰੀ', reach: 'ਸੰਪਰਕ' },
    labels: { learnMore: 'ਹੋਰ ਜਾਣੋ', inquire: 'ਪੁੱਛਗਿੱਛ ਅਤੇ ਬੁਕਿੰਗ', details: 'ਸਮਾਗਮ ਦੀ ਜਾਣਕਾਰੀ', books: '“ਲਾਇਬ੍ਰੇਰੀ ਦੀਆਂ ਕਿਤਾਬਾਂ ਵੇਖੋ”', servicesTitle: 'ਸੇਵਾਵਾਂ', servicesIntro: 'ਜਾਣਕਾਰੀ, ਪ੍ਰਬੰਧਾਂ ਅਤੇ ਬੁਕਿੰਗ ਲਈ ਗੁਰਦੁਆਰੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।', calendarLabel: 'ਕੈਲੰਡਰ', calendarPlaceholder: 'ਗੂਗਲ ਕੈਲੰਡਰ ਜੋੜਨ ਤੋਂ ਬਾਅਦ ਇੱਥੇ ਦਿਖਾਈ ਦੇਵੇਗਾ।', locationTitle: 'ਸਥਾਨ ਅਤੇ ਖੁੱਲ੍ਹਣ ਦਾ ਸਮਾਂ', map: 'ਨਕਸ਼ਾ', parking: 'ਪਾਰਕਿੰਗ ਦੀ ਜਾਣਕਾਰੀ', selectService: 'ਸੇਵਾ ਚੁਣੋ'},
    event: { title: 'ਹਰਿ ਮਹਾਨ ਨਗਰ ਕੀਰਤਨ', date: '06 ਸਤੰਬਰ 2026 ਦਿਨ ਐਤਵਾਰ', description: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ 422 ਵੇਂ ਪ੍ਰਕਾਸ਼ ਦਿਹਾੜੇ ਅਤੇ ਧੰਨ ਧੰਨ ਸ੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਜੀ ਮਹਾਰਾਜ ਦੇ 649 ਵੇਂ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ ਨੂੰ ਸਮਰਪਿਤ।', button: 'ਸਮਾਗਮ ਦੀ ਜਾਣਕਾਰੀ', href: routes.pa.nagarkirtan }, services: punjabiServices, staff: punjabiStaff,
    home: { eyebrow: 'ਮੋਂਟਰੀਅਲ ਸੰਗਤ', title: 'ਸੰਗਤ, ਸੇਵਾ ਅਤੇ ਸਾਂਝੀ ਅਰਦਾਸ ਲਈ ਥਾਂ।', intro: 'ਸ਼੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਟੈਂਪਲ ਸੰਗਤ ਨੂੰ ਭਗਤੀ, ਸਿੱਖਿਆ ਅਤੇ ਸੇਵਾ ਦੀ ਭਾਵਨਾ ਨਾਲ ਜੋੜਦਾ ਹੈ।', aboutTitle: 'ਸਾਡੇ ਬਾਰੇ', about: ['ਸ਼੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਟੈਂਪਲ ਮੋਂਟਰੀਅਲ ਅਤੇ ਆਲੇ-ਦੁਆਲੇ ਦੀ ਸੰਗਤ ਦੀ ਸੇਵਾ ਕਰਨ ਵਾਲਾ ਗੁਰਦੁਆਰਾ ਅਤੇ ਸਭਾ ਹੈ।', 'ਇਹ ਸਿੱਖ ਪਰੰਪਰਾ ਅਤੇ ਗੁਰੂ ਰਵਿਦਾਸ ਜੀ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਰਾਹੀਂ ਅਰਦਾਸ, ਸਿੱਖਿਆ, ਸੱਭਿਆਚਾਰਕ ਸਾਂਝ ਅਤੇ ਸਹਾਇਤਾ ਲਈ ਥਾਂ ਦਿੰਦਾ ਹੈ।', 'ਸਾਡਾ ਗੁਰਦੁਆਰਾ ਸੰਗਤ ਅਤੇ ਸੇਵਾ ਦੀ ਜੀਵੰਤ ਪਰੰਪਰਾ ਨੂੰ ਅੱਗੇ ਲੈ ਜਾਂਦਾ ਹੈ।'], helpTitle: 'ਮਦਦ ਕਿਵੇਂ ਕਰੀਏ', help: 'ਸੇਵਾ ਨਿਮਰਤਾ ਅਤੇ ਪਿਆਰ ਨਾਲ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਸਵੈ-ਇੱਛਕ ਸੇਵਾ ਹੈ। ਨਵੇਂ ਸੇਵਾਦਾਰ ਪਹਿਲਾਂ ਮੌਜੂਦਾ ਸੇਵਾਦਾਰਾਂ ਦੀ ਰਹਿਨੁਮਾਈ ਅਤੇ ਪ੍ਰਕਿਰਿਆ ਦੀ ਪਾਲਣਾ ਕਰਨ। ਦਾਨ ਵੀ ਮਦਦ ਦਾ ਇੱਕ ਰਸਤਾ ਹੈ। ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ ਸੰਪਰਕ ਕਰੋ।' },
    eventsPage: { title: 'ਸਮਾਗਮ', intro: 'ਗੁਰਦੁਆਰੇ ਦੇ ਸਮਾਗਮ ਅਤੇ ਸੰਗਤ ਨਾਲ ਜੁੜੀਆਂ ਜਾਣਕਾਰੀਆਂ।', nextTitle: 'ਅਗਲਾ ਸਮਾਗਮ', scheduleTitle: 'ਗੂਗਲ ਸਮਾਂ-ਸੂਚੀ', scheduleBody: 'ਕੈਲੰਡਰ ਜੋੜਨ ਤੋਂ ਬਾਅਦ ਸਮਾਂ-ਸੂਚੀ ਇੱਥੇ ਦਿਖਾਈ ਜਾਵੇਗੀ।', pastTitle: 'ਪੁਰਾਣੇ ਅਤੇ ਆਉਣ ਵਾਲੇ ਸਮਾਗਮ', pastBody: 'ਨਗਰ ਕੀਰਤਨ ਇਸ ਸਮੇਂ ਮੁੱਖ ਸਮਾਗਮ ਹੈ।' },
      nagarKirtan2026Page: punjabiNagarKirtan2026,
    libraryPage: { title: 'ਲਾਇਬ੍ਰੇਰੀ', intro: 'ਗੁਰਬਾਣੀ, ਸਿੱਖ ਇਤਿਹਾਸ ਅਤੇ ਇਸ ਪਰੰਪਰਾ ਨਾਲ ਜੁੜੇ ਆਤਮਿਕ ਵਿਅਕਤੀਆਂ ਬਾਰੇ ਸਿੱਖਿਆ ਅਤੇ ਹਵਾਲਾ ਸਮੱਗਰੀ।', sections: punjabiLibrary, libraryBanner: 'ਗੁਰਦੁਆਰੇ ਦੇ ਹੇਠਾਂ ਸਥਿਤ ਡਾ. ਬੀ. ਆਰ. ਅੰਬੇਡਕਰ ਲਾਇਬ੍ਰੇਰੀ ਸਿੱਖਿਆ ਅਤੇ ਭਾਈਚਾਰਕ ਸਿੱਖਣ ਲਈ ਹੈ।' },
    reachPage: { title: 'ਸੰਪਰਕ', intro: 'ਗੁਰਦੁਆਰੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ, ਸਥਾਨ ਲੱਭੋ ਅਤੇ ਪੁੱਛਗਿੱਛ ਜਾਂ ਬੁਕਿੰਗ ਭੇਜੋ।', staffTitle: 'ਸਾਡੇ ਸੇਵਾਦਾਰ', staffPill: 'ਗੁਰ ਘਰ ਸੰਪਰਕ', ...punjabiForm },
  },
} as const;

export function getRoute(locale: Locale, page: PageKey): string { return routes[locale][page]; }
export function getNavLinks(locale: Locale) { const labels = siteContent[locale].nav; return (Object.keys(labels) as NavKey[]).map((page) => ({ page, href: getRoute(locale, page), label: labels[page] })); }
export function getFooterLinks(locale: Locale): FooterLinkGroup[] { return footerLinks[locale]; }
export function getLanguageLinks(locale: Locale, page: PageKey) { return [{ href: getRoute('en', page), label: 'ᴇɴ', active: locale === 'en', ariaLabel: 'Switch to English' }, { href: getRoute('pa', page), label: 'ਪੰ', active: locale === 'pa', ariaLabel: 'ਪੰਜਾਬੀ ਵਿੱਚ ਵੇਖੋ' }]; }
