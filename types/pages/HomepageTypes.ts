// Header
export interface HeroHeaderProps { 
  heading: string;
  subheading: string;
  jumpTo: string;
}


// About
export interface AboutProps {
  portrateImg: string;
  bio: string;
}

export interface BioProps {
  bio: string;
  inViewport: boolean;
  forwardedRef: React.Ref<HTMLDivElement>;
}


// What I do
export interface PassionsProps {
  passions: {
    icon: string;
    title: string;
    description: string;
  }[];
}


// History Card
export interface HistoryCardProps {}


// Projects
export interface ProjectsProps {
  projects: {
    name: string;
    img: string;
    location: {
      url: string;
      external?: boolean;
    };
    description: string;
    tech: string[];
  }[];
}


// Contact
export interface ContactState {
  loading: boolean;
  messageSent: boolean;
  errors: string[];
  messages: string[];
}