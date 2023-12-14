export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
  description?: string;
  clients?: string[];
};

const projects: Project[] = [
  {
    title: "Supersonic | Fast Food - Digital Ordering Platform ",
    techs: ["ReactJS", "NodeJS", "TailwindCSS", "Google Cloud Plataform", "Typescript", "Golang", "Recoil", "VueJS", "xState", "Cypress", "Jest"],
    link: "https://fingermark.ai/supersonic/",
    description: "",
    clients: ["KFC", "Burger King", "Pizza Hut", "Taco Bell"]
  },
  {
    title: "Guia | Shopping Malls - Store Managment System",
    techs: ["ReactJS", "GraphQL", "NodeJS", "TypeScript","MySQL", "TailwindCSS", "Knex","ObjectionJS"],
    link: "https://www.ibasi.com.br/ibasi-guia",
    clients: ["Master","Aravest","Litoral Sul","Vest Sul", "Vitória Régia", "Prime", "Paraná Fashion Park"]
  },
  {
    title: "Hokusai | Automated Blog Post Generator",
    techs: ["Astro", "NodeJS", "Vercel", "Planetscale", "TailwindCSS"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
