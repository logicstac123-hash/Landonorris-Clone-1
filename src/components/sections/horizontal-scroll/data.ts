export interface HorizontalItem {
  image: string;
  title: string;
  subtitle?: string;
  text?: string;
  position?: { top?: string; left?: string; right?: string; bottom?: string; width?: string; height?: string; rotation?: number };
}

export const horizontalItems: HorizontalItem[] = [
  {
    image: '/images/horizontal/qatar-2024.webp',
    title: 'Global Fintech UI',
    subtitle: 'SaaS Platform',
    text: 'Next-gen banking interface',
    position: { top: '10%', left: '5%', width: '280px', height: '350px', rotation: -3 }
  },
  {
    image: '/images/horizontal/fia-prize-2024.webp',
    title: 'Design System',
    subtitle: 'Branding',
    text: 'Unified brand language',
    position: { top: '45%', left: '8%', width: '250px', height: '250px', rotation: 2 }
  },
  {
    image: '/images/horizontal/miami-gp-2024.webp',
    title: 'E-Commerce App',
    subtitle: 'Mobile UX',
    text: 'Immersive shopping experience',
    position: { top: '20%', left: '50%', width: '400px', height: '500px', rotation: -2 }
  },
  {
    image: '/images/horizontal/battersea-2024.webp',
    title: 'Interactive Portal',
    subtitle: '3D WebGL',
    text: 'WebGL portfolio showroom',
    position: { bottom: '10%', left: '0%', width: '400px', height: '300px', rotation: 2 }
  },
  {
    image: '/images/horizontal/on-track.webp',
    title: 'Sleek Dashboard',
    subtitle: 'Web App',
    text: 'High-performance analytics',
    position: { top: '15%', right: '10%', width: '200px', height: '250px', rotation: 3 }
  },
  {
    image: '/images/horizontal/championship.webp',
    title: 'Studio Launch',
    subtitle: 'Milestone',
    text: 'LogicStac v2.0 Release',
    position: { top: '50%', right: '15%', width: '220px', height: '280px', rotation: -4 }
  },
  {
    image: '/images/horizontal/victory-lane.webp',
    title: 'Product Release',
    subtitle: 'Case Study',
    text: 'Redefining digital excellence',
    position: { bottom: '15%', right: '8%', width: '300px', height: '350px', rotation: 1 }
  },
  {
    image: '/images/horizontal/the-fight.webp',
    title: 'Creative Strategy',
    subtitle: 'Workshop',
    text: 'Ideating the next frontier',
    position: { top: '60%', left: '35%', width: '280px', height: '320px', rotation: -2 }
  },
  {
    image: '/images/horizontal/podium.webp',
    title: 'Client Showcase',
    subtitle: 'UI/UX Concept',
    text: 'High-fidelity prototypes',
    position: { top: '5%', left: '30%', width: '200px', height: '240px', rotation: 4 }
  },
  {
    image: '/images/horizontal/the-track.webp',
    title: 'Marketing Hub',
    subtitle: 'Growth Campaign',
    text: 'Amplifying digital footprint',
    position: { bottom: '5%', right: '25%', width: '250px', height: '300px', rotation: -3 }
  },
  {
    image: '/images/horizontal/the-journey.webp',
    title: 'Continuous Scale',
    subtitle: 'Engineering',
    text: 'Blazing fast cloud infrastructure',
    position: { top: '35%', left: '25%', width: '300px', height: '380px', rotation: 1 }
  },
];

export const quoteItem = {
  text: "It doesn't matter where you start, it's how you progress from there.",
  position: { top: '8%', left: '50%', transform: 'translateX(-50%)', width: '600px' }
};
