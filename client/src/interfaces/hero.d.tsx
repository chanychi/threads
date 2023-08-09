export interface Video {
  imgsrc: string;
  clip: string;
}

export interface Social {
  icon: string;
  url: string;
}

export interface HeroAPI {
  title: string;
  subtitle: string;
  img: string;
  btntext: string;
  videos: Video[];
  sociallinks: Social[];
}


