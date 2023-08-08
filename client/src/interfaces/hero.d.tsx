interface Video {
  imgsrc: string;
  clip: string;
}

interface SocialLink {
  icon: string;
}

export interface HeroAPI {
  title: string;
  subtitle: string;
  img: string;
  btntext: string;
  videos: Video[];
  sociallinks: SocialLink[];
}


