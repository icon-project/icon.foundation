export interface IProject {
  title: string;
  description: string;
  url: string;
  image: string;
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
