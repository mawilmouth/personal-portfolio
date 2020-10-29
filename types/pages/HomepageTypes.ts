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