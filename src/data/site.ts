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
  { title: 'Gurmat Classes', description: 'Learning and reflection for children, youth, and families.', image: templePlaceholder, alt: 'Placeholder image for Gurmat Classes' },
  { title: 'Anand Karaj', description: 'Reach us to ask about Anand Karaj arrangements and availability.', image: templePlaceholder, alt: 'Placeholder image for Anand Karaj' },
  { title: 'Akhand Path', description: 'Inquire about planning and booking an Akhand Path.', image: templePlaceholder, alt: 'Placeholder image for Akhand Path' },
  { title: 'Dr. B. R. Ambedkar Library', description: 'A reference and education space beneath the Gurdwara.', image: templePlaceholder, alt: 'Placeholder image for the Dr. B. R. Ambedkar Library' },
];
const staff: StaffMember[] = [
  { role: 'Pres.', name: 'Sansar Chand Suad', phoneDisplay: '(438) 871-7777', phoneHref: 'tel:+14388717777' },
  { role: 'VP', name: 'Binder Chand', phoneDisplay: '(514) 571-9548', phoneHref: 'tel:+15145719548' },
  { role: 'GSec.', name: 'Shami Banga', phoneDisplay: '(514) 296-7251', phoneHref: 'tel:+15142967251' },
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
  { id: 'sggs', title: 'Sri Guru Granth Sahib Ji', body: 'Our site provides access to Sri Guru Granth Sahib Ji, the eternal Guru of the Sikhs. It is the central scripture and spiritual authority of Sikh tradition.', details: [
    ['About Sri Guru Granth Sahib Ji', 'Sri Guru Granth Sahib Ji developed from the Adi Granth compiled by Guru Arjan Dev Ji. It contains bani of six Sikh Gurus: Guru Nanak Dev Ji, Guru Angad Dev Ji, Guru Amar Das Ji, Guru Ram Das Ji, Guru Arjan Dev Ji, and Guru Tegh Bahadur Ji, as well as compositions of 15 Bhagats and other contributors.'],
    ['Guru Nanak Dev Ji', 'Guru Nanak Dev Ji taught the oneness of the Creator, honest living, remembrance, and equality. His bani forms the foundation of the Sikh scriptural tradition.'],
    ['Prakash & Guru Arjan Dev Ji', 'Guru Arjan Dev Ji compiled the Adi Granth and oversaw its first Prakash at Harmandir Sahib in 1604. Prakash refers to the ceremonial opening and presence of Sri Guru Granth Sahib Ji.'],
    ['Guru Gobind Singh Ji', 'Guru Gobind Singh Ji affirmed Sri Guru Granth Sahib Ji as the eternal Guru of the Sikhs. His bani is not part of Sri Guru Granth Sahib Ji.'],
  ] },
  { id: 'ravidas', title: 'Guru Ravidas Ji', body: 'Guru Ravidas Ji was a beloved poet-saint whose teachings emphasize equality, devotion, inner freedom, and the dignity of all people. His bani appears in Sri Guru Granth Sahib Ji.', details: [] },
  { id: 'bhagats', title: 'Bhagats', body: 'The principal Bhagats whose bani appears in Sri Guru Granth Sahib Ji include Sheikh Farid, Bhagat Kabir, Bhagat Namdev, Bhagat Trilochan, Bhagat Beni, Bhagat Dhanna, Bhagat Pipa, Bhagat Sadhna, Bhagat Sain, Bhagat Bhikhan, Bhagat Jaidev, Bhagat Ramanand, Bhagat Surdas, and Bhagat Parmanand. Guru Ravidas Ji has his own section above.', details: [] },
  { id: 'saints', title: 'Saints', body: 'This section distinguishes people whose bani is in Sri Guru Granth Sahib Ji, people discussed in Sikh history and tradition, and later saints or referenced figures. Not every figure discussed here appears in Sri Guru Granth Sahib Ji.', details: [] },
];

const form = { address: '8205 Durocher, Montreal, QC H3N 2A8', hoursTitle: 'Opening Hours', hours: ['Saturday & Sunday', '10:00 AM – 5:00 PM'], conductTitle: 'Etiquette & Guidelines', conduct: ['Please dress appropriately; Pants need to be under knee-length.', 'Please leave your shoes in the cloakroom and wash your feet before entering any other room.', 'You will be asked to cover your head with a cloth; Handkerchiefs are available on-site.'], formTitle: 'Inquiries & Booking', formIntro: 'Use this form for a general inquiry, service inquiry, or event/service booking.', name: 'Name', email: 'Email', type: 'Inquiry type', typeOptions: ['General inquiry', 'Service inquiry', 'Event/service booking'], service: 'Service', serviceOptions: services.map(({ title }) => title), message: 'Message', submit: 'Send inquiry' };


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
    labels: { learnMore: 'Learn more', inquire: 'Inquiries & Booking', details: 'Event details', books: '“Browse the library books”'},
    event, services, staff,
    home: { eyebrow: 'Montreal Sangat', title: 'A place for sangat, seva, and shared prayer.', intro: 'Shri Guru Ravidass Temple brings the community together in the spirit of devotion, learning, and service.', aboutTitle: 'About Us', about: ['Shri Guru Ravidass Temple is a Gurdwara and community Sabha serving sangat in Montreal and surrounding communities.', 'It provides a place for prayer, education, cultural connection, and support through the Sikh tradition and the teachings of Guru Ravidas Ji.', 'Our Gurdwara continues a living tradition of sangat and seva: welcoming families, preserving memory, and making space for the next generation.'], helpTitle: 'How To Help', help: 'Seva is voluntary service offered with humility and care. New volunteers should first defer to existing sevadars and follow the direction and procedures they provide. Donation is another way to help. For anything else, please reach us.' },
    eventsPage: { title: 'Events', intro: 'Gatherings, celebrations, and community updates from the Gurdwara.', nextTitle: 'Next Event', scheduleTitle: 'Google Schedule', scheduleBody: 'The schedule will appear here once the calendar is connected.', pastTitle: 'Past & Upcoming', pastBody: 'Nagar Kirtan is currently the featured event. This section can grow as more dates are confirmed.' },
      nagarKirtan2026Page: englishNagarKirtan2026,
    libraryPage: { title: 'Library', intro: 'An educational and reference section for learning about Gurbani, Sikh history, and the spiritual figures connected to this tradition.', sections: englishLibrary, libraryBanner: 'The Dr. B. R. Ambedkar Library is located under the Gurdwara premises and supports education, reflection, and community learning.' },
    reachPage: { title: 'Reach Us', intro: 'Contact the Gurdwara, find us, and send an inquiry or service booking request.', staffTitle: 'Call Us', staffPill: 'Staff Contacts', ...form },
  },
  pa: {
    meta: { title: 'ਸ਼੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਟੈਂਪਲ | ਮੋਂਟਰੀਅਲ', description: 'ਸ਼੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਟੈਂਪਲ ਮੋਂਟਰੀਅਲ ਦੀ ਵੈੱਬਸਾਈਟ।' },
    nav: { home: 'ਮੁੱਖ ਪੰਨਾ', events: 'ਸਮਾਗਮ', library: 'ਲਾਇਬ੍ਰੇਰੀ', reach: 'ਸੰਪਰਕ' },
    labels: { learnMore: 'ਹੋਰ ਜਾਣੋ', inquire: 'ਪੁੱਛਗਿੱਛ ਅਤੇ ਬੁਕਿੰਗ', details: 'ਸਮਾਗਮ ਦੀ ਜਾਣਕਾਰੀ', books: '“ਲਾਇਬ੍ਰੇਰੀ ਦੀਆਂ ਕਿਤਾਬਾਂ ਵੇਖੋ”'},
    event: { title: 'ਹਰਿ ਮਹਾਨ ਨਗਰ ਕੀਰਤਨ', date: '06 ਸਤੰਬਰ 2026 ਦਿਨ ਐਤਵਾਰ', description: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ 422 ਵੇਂ ਪ੍ਰਕਾਸ਼ ਦਿਹਾੜੇ ਅਤੇ ਧੰਨ ਧੰਨ ਸ੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਜੀ ਮਹਾਰਾਜ ਦੇ 649 ਵੇਂ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ ਨੂੰ ਸਮਰਪਿਤ।', button: 'ਸਮਾਗਮ ਦੀ ਜਾਣਕਾਰੀ', href: routes.pa.nagarkirtan }, services, staff,
    home: { eyebrow: 'ਮੋਂਟਰੀਅਲ ਸੰਗਤ', title: 'ਸੰਗਤ, ਸੇਵਾ ਅਤੇ ਸਾਂਝੀ ਅਰਦਾਸ ਲਈ ਥਾਂ।', intro: 'ਸ਼੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਟੈਂਪਲ ਸੰਗਤ ਨੂੰ ਭਗਤੀ, ਸਿੱਖਿਆ ਅਤੇ ਸੇਵਾ ਦੀ ਭਾਵਨਾ ਨਾਲ ਜੋੜਦਾ ਹੈ।', aboutTitle: 'ਸਾਡੇ ਬਾਰੇ', about: ['ਸ਼੍ਰੀ ਗੁਰੂ ਰਵਿਦਾਸ ਟੈਂਪਲ ਮੋਂਟਰੀਅਲ ਅਤੇ ਆਲੇ-ਦੁਆਲੇ ਦੀ ਸੰਗਤ ਦੀ ਸੇਵਾ ਕਰਨ ਵਾਲਾ ਗੁਰਦੁਆਰਾ ਅਤੇ ਸਭਾ ਹੈ।', 'ਇਹ ਸਿੱਖ ਪਰੰਪਰਾ ਅਤੇ ਗੁਰੂ ਰਵਿਦਾਸ ਜੀ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਰਾਹੀਂ ਅਰਦਾਸ, ਸਿੱਖਿਆ, ਸੱਭਿਆਚਾਰਕ ਸਾਂਝ ਅਤੇ ਸਹਾਇਤਾ ਲਈ ਥਾਂ ਦਿੰਦਾ ਹੈ।', 'ਸਾਡਾ ਗੁਰਦੁਆਰਾ ਸੰਗਤ ਅਤੇ ਸੇਵਾ ਦੀ ਜੀਵੰਤ ਪਰੰਪਰਾ ਨੂੰ ਅੱਗੇ ਲੈ ਜਾਂਦਾ ਹੈ।'], helpTitle: 'ਮਦਦ ਕਿਵੇਂ ਕਰੀਏ', help: 'ਸੇਵਾ ਨਿਮਰਤਾ ਅਤੇ ਪਿਆਰ ਨਾਲ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਸਵੈ-ਇੱਛਕ ਸੇਵਾ ਹੈ। ਨਵੇਂ ਸੇਵਾਦਾਰ ਪਹਿਲਾਂ ਮੌਜੂਦਾ ਸੇਵਾਦਾਰਾਂ ਦੀ ਰਹਿਨੁਮਾਈ ਅਤੇ ਪ੍ਰਕਿਰਿਆ ਦੀ ਪਾਲਣਾ ਕਰਨ। ਦਾਨ ਵੀ ਮਦਦ ਦਾ ਇੱਕ ਰਸਤਾ ਹੈ। ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ ਸੰਪਰਕ ਕਰੋ।' },
    eventsPage: { title: 'ਸਮਾਗਮ', intro: 'ਗੁਰਦੁਆਰੇ ਦੇ ਸਮਾਗਮ ਅਤੇ ਸੰਗਤ ਨਾਲ ਜੁੜੀਆਂ ਜਾਣਕਾਰੀਆਂ।', nextTitle: 'ਅਗਲਾ ਸਮਾਗਮ', scheduleTitle: 'ਗੂਗਲ ਸਮਾਂ-ਸੂਚੀ', scheduleBody: 'ਕੈਲੰਡਰ ਜੋੜਨ ਤੋਂ ਬਾਅਦ ਸਮਾਂ-ਸੂਚੀ ਇੱਥੇ ਦਿਖਾਈ ਜਾਵੇਗੀ।', pastTitle: 'ਪੁਰਾਣੇ ਅਤੇ ਆਉਣ ਵਾਲੇ ਸਮਾਗਮ', pastBody: 'ਨਗਰ ਕੀਰਤਨ ਇਸ ਸਮੇਂ ਮੁੱਖ ਸਮਾਗਮ ਹੈ।' },
      nagarKirtan2026Page: punjabiNagarKirtan2026,
    libraryPage: { title: 'ਲਾਇਬ੍ਰੇਰੀ', intro: 'ਗੁਰਬਾਣੀ, ਸਿੱਖ ਇਤਿਹਾਸ ਅਤੇ ਇਸ ਪਰੰਪਰਾ ਨਾਲ ਜੁੜੇ ਆਤਮਿਕ ਵਿਅਕਤੀਆਂ ਬਾਰੇ ਸਿੱਖਿਆ ਅਤੇ ਹਵਾਲਾ ਸਮੱਗਰੀ।', sections: englishLibrary.map((section) => ({ ...section, title: section.title })), libraryBanner: 'ਗੁਰਦੁਆਰੇ ਦੇ ਹੇਠਾਂ ਸਥਿਤ ਡਾ. ਬੀ. ਆਰ. ਅੰਬੇਡਕਰ ਲਾਇਬ੍ਰੇਰੀ ਸਿੱਖਿਆ ਅਤੇ ਭਾਈਚਾਰਕ ਸਿੱਖਣ ਲਈ ਹੈ।' },
    reachPage: { title: 'ਸੰਪਰਕ', intro: 'ਗੁਰਦੁਆਰੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ, ਸਥਾਨ ਲੱਭੋ ਅਤੇ ਪੁੱਛਗਿੱਛ ਜਾਂ ਬੁਕਿੰਗ ਭੇਜੋ।', staffTitle: 'ਸਾਡੇ ਸੇਵਾਦਾਰ', staffPill: 'ਗੁਰ ਘਰ ਸੰਪਰਕ', ...form, hoursTitle: 'ਖੁੱਲ੍ਹਣ ਦਾ ਸਮਾਂ', conductTitle: 'ਮਰਿਆਦਾ', formTitle: 'ਪੁੱਛਗਿੱਛ ਅਤੇ ਬੁਕਿੰਗ', formIntro: 'ਆਮ ਪੁੱਛਗਿੱਛ, ਸੇਵਾ ਜਾਂ ਸਮਾਗਮ/ਸੇਵਾ ਬੁਕਿੰਗ ਲਈ ਫਾਰਮ ਵਰਤੋ।', name: 'ਨਾਮ', email: 'ਈਮੇਲ', type: 'ਪੁੱਛਗਿੱਛ ਦੀ ਕਿਸਮ', message: 'ਸੁਨੇਹਾ', submit: 'ਪੁੱਛਗਿੱਛ ਭੇਜੋ' },
  },
} as const;

export function getRoute(locale: Locale, page: PageKey): string { return routes[locale][page]; }
export function getNavLinks(locale: Locale) { const labels = siteContent[locale].nav; return (Object.keys(labels) as NavKey[]).map((page) => ({ page, href: getRoute(locale, page), label: labels[page] })); }
export function getFooterLinks(locale: Locale): FooterLinkGroup[] { return footerLinks[locale]; }
export function getLanguageLinks(locale: Locale, page: PageKey) { return [{ href: getRoute('en', page), label: 'ᴇɴ', active: locale === 'en', ariaLabel: 'Switch to English' }, { href: getRoute('pa', page), label: 'ਪੰ', active: locale === 'pa', ariaLabel: 'ਪੰਜਾਬੀ ਵਿੱਚ ਵੇਖੋ' }]; }
