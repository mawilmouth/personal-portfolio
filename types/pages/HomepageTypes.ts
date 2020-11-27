import { Dispatch } from "redux";

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
  dispatch: Dispatch;
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
  dispatch: Dispatch;
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
  dispatch: Dispatch;
}


// Contact
export interface ContactProps {
  dispatch: Dispatch;
}

export interface ContactState {
  loading: boolean;
  messageSent: boolean;
  errors: string[];
  messages: string[];
}