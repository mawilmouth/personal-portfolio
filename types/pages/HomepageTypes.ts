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
  projects: ProjectType[];
  dispatch: Dispatch;
}

export interface ProjectProps {
  project: ProjectType;
  index: number;
}

export interface ProjectType {
  name: string;
  img: string;
  description: string;
  tech: string[];
  location?: ProjectLocationType;
  embed?: ProjectEmbedType;
}

export interface ProjectLocationType {
  url: string;
  external?: boolean;
}

export interface ProjectEmbedType {
  url: string;
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