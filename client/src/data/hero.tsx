import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";
import heroimg from "../assets/hero.png";
import clip from "../assets/video/clip.mp4";
import facebook from "@/assets/social/facebook.svg";
import instagram from "@/assets/social/instagram.svg";
import twitter from "@/assets/social/twitter.svg";
import youtube from "@/assets/social/youtube.svg";
import { HeroAPI } from "@/interfaces/hero.d";

export const heroapi: HeroAPI = {
  title: "Play With Electric Nike",
  subtitle: "Adapt 2.0 Sneakers",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook, url: 'https://www.facebook.com/nike/'},
    { icon: instagram, url: 'https://www.instagram.com/nike/?hl=en' },
    { icon: twitter, url: 'https://twitter.com/Nike' },
    { icon: youtube, url: 'https://www.youtube.com/@nike/featured' },
  ],
};
