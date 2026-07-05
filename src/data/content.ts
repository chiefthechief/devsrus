export const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
] as const

export const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'React Native',
  'AWS',
  'PostgreSQL',
  'GraphQL',
  'Python',
  'Swift',
  'Kotlin',
  'Vercel',
] as const

export const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Fast, accessible websites and web apps built with modern frameworks. From marketing sites to complex dashboards, we ship polished experiences that convert.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  },
  {
    number: '02',
    title: 'Mobile Apps',
    description:
      'Native-feel mobile experiences for iOS and Android. We build cross-platform apps that users love — performant, intuitive, and ready for the App Store.',
    tags: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    number: '03',
    title: 'Custom Software',
    description:
      'Bespoke systems tailored to your workflows. APIs, integrations, internal tools, and platforms engineered to solve problems off-the-shelf software cannot.',
    tags: ['Python', 'AWS', 'PostgreSQL', 'GraphQL'],
  },
] as const

export const projects = [
  {
    category: 'Sales CRM',
    name: 'Meridian CRM',
    description:
      'A full-featured sales CRM with pipeline management, automated follow-ups, and real-time analytics. Built for a B2B team scaling from 10 to 200 reps.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    category: 'Sustainability',
    name: 'Verdant',
    description:
      'A mobile app helping users track their carbon footprint and discover local eco-friendly businesses. Gamified challenges drive daily engagement.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    tags: ['React Native', 'Firebase', 'GraphQL'],
  },
  {
    category: 'Fleet Management',
    name: 'Bridgeway Logistics',
    description:
      'Real-time fleet tracking and route optimization for a regional logistics company. Reduced delivery times by 18% in the first quarter.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    tags: ['Vue.js', 'Python', 'Redis'],
  },
  {
    category: 'FinTech',
    name: 'Folio',
    description:
      'An investment dashboard with live portfolio tracking, D3-powered visualizations, and Stripe-powered subscription billing for premium tiers.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'Stripe'],
  },
  {
    category: 'E-Commerce',
    name: 'Arco E-Commerce',
    description:
      'A headless storefront with immersive 3D product previews and a blazing-fast checkout flow. Shopify backend with a custom Next.js frontend.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    tags: ['Next.js', 'Shopify', 'Three.js'],
  },
  {
    category: 'Healthcare',
    name: 'PulseHealth',
    description:
      'A HIPAA-compliant patient app for appointment scheduling, secure messaging, and health record access. Deployed on AWS Amplify with end-to-end encryption.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['React Native', 'AWS Amplify'],
  },
] as const

export const stats = [
  { value: '48+', label: 'Projects shipped' },
  { value: '6', label: 'Years in operation' },
  { value: '94%', label: 'Client return rate' },
  { value: '12', label: 'Industries served' },
] as const
