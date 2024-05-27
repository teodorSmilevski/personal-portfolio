import ProjectCard from "./ProjectCard";
import project1Img from "../assets/project-bookwave.png";
import project2Img from "../assets/project-stanche.png";

export default function Projects() {
  const descriptions = [
    "Bookwave is a dynamic online bookstore built with React. It features a user-friendly interface where book enthusiasts can explore a wide range of books and comics. Users can filter books by genre, price, and language, and view comics detailed information by searching a marvel character, fetched from a public API. The application leverages React Hooks, ContextAPI, and clean CSS for a seamless and responsive browsing experience.",
    "Stanche is a web application built with the MERN stack (MongoDB, Express.js, React, Node.js) designed for students to find roommates, student flats, or dormitories. Students can register to search for housing and compatible roommates, while property owners (sellers) can list and manage their flats. Key features include user registration and listing management. Stanche provides a seamless experience for students to find suitable living arrangements and for property owners to connect with potential renters.",
  ];

  return (
    <section id="projects">
      <ProjectCard
        image={project1Img}
        title="Bookwave"
        description={descriptions[0]}
        githubLink="https://github.com/teodorSmilevski/bookwave"
        liveLink="https://bookwave.netlify.app/"
      />
      <ProjectCard
        image={project2Img}
        title="Stanche"
        description={descriptions[1]}
        githubLink="https://github.com/teodorSmilevski/stanche"
        liveLink=""
      />
    </section>
  );
}
