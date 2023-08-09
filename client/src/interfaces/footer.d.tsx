interface FooterLink {
  link: string;
}

export interface FooterTitle {
  title: string;
}

export interface FooterAPI {
  category: FooterTitle[];
  links: FooterLink[][];
}
