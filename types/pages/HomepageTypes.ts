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
export interface HistoryCardProps {
  
}