import ARI from "../assets/ARI.jpg";
import Holman from "../assets/Holman.jpg";
import BlueCrystal from "../assets/blueCrystal.png";

export default [
  {
    img: Holman,
    position: "Software Developer Intern",
    company: "Holman",
    location: "Toronto, Canada",
    dates: "May 2022 - August 2022",
    description: [
      "Engineered an internal API microservice that automates the migration of large datasets from one storage system environment to another using C#, .NET core, MVC, LINQ, Redis, Oracle database. Increased efficiency of data integration by 93%.",
      "Built a web-application for data visualization and analytics on fleet management metrics by developing a responsive user-interface and custom rest APIs that filter metric data. Leveraged ReactJs, TypeScript, RTKQuery, D3.Js, Node.Js, Express. Averaging 5000+ users per day.",
      "Revamped task scheduling service to synchronize with PostgreSQL database by implementing an efficient listen/notify architecture pattern written in Go. Reduced database load by 70%.",
    ],
  },
  {
    img: ARI,
    position: "Software Developer Intern",
    company: "ARI",
    location: "Missisauga, Canada",
    dates: "September. 2021 - December. 2021",
    description: [
      "Designed, implemented, and tested APIs for multiple web services that handle parallel http requests by constructing a multithreading algorithm using C# .NET core, reducing CPU usage by 15%.",
      "Developed an interactive user-interface for a service catalog tool by using ReactJS, TypeScript, Redux, and Formik. Utilized by 7000+ daily users in production environment.",
      "Implemented RESTFUL API endpoints for CRUD operations on vehicle metadata and improved the data access layer to interface with Oracle database by using ASP.NET MVC and dependency injection. ",
    ],
  },
  {
    img: BlueCrystal,
    position: "Full-Stack Developer Intern",
    company: "Blue Crystal",
    location: "Toronto, Canada (remote)",
    dates: "May.2021 – Aug.2021",
    description: [
      "Developed a microservice that leverages DocuSign API to process client terms and agreement forms by using Java, Spring, MySQL. Reducing client support time by 40%.",
      "Built multiple main features for Ignite Feedback portal used by 500+ employees using Angular, Express, Node.js & MongoDB",
      "Integrated a new GraphQL query that supports pagination with infinite scrolling. Decreased Component’s load time by 9x.",
    ],
  },
];
