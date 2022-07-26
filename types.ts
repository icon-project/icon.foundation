export interface IProject {
  title: string;
  description: string;
  url: string;
  image: string;
  logo: string;
  logo_width: number;
}

export interface IFooter {
  copyright_text: string;
  social: [
    {
      icon: string;
      url: string;
    }
  ];
  navigations: [
    {
      heading: string;
      links: [
        {
          text: string;
          url: string;
        }
      ];
    }
  ];
}

export interface IHeader {
  nav: [
    {
      text: string;
      url: string;
    }
  ];
  social: [
    {
      url: string;
      icon: string;
    }
  ];
  inner_navs: [
    {
      heading: string;
      links: [
        {
          text: string;
          url: string;
        }
      ];
    }
  ];
}

export interface IColorBlock {
  icon: string;
  heading: string;
  description: string;
  url: string;
  color: "primary" | "secondary" | "gray";
}

export interface IPerson {
  name: string;
  image: string;
  role: string;
}
