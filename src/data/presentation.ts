type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "enzotriches20@gmail.com",
  title: "Hi, I’m Enzo Trichês 👋",
  profile: "/profile3.png",
  description:
    `
      Bom dia! I'm a *Senior Software Engineer* with over *7+ years* of web experience. 
      I am currently working with *ReactJS, NodeJS, TailwindCSS*. 
      I've *led global teams* and *built projects with millions+ of daily users*. And
      outside work, I like to run 👟.`,
  socials: [
    {
      label: "X",
      link: "https://twitter.com/trichesenzo",
    },
    {
      label: "Bento",
      link: "https://bento.me/enzo-triches",
    },
    {
      label: "Github",
      link: "https://github.com/enzotriches",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/enzo-trich%C3%AAs-88923014b/",
    },
  ],
};

export default presentation;
