import ProjectCard from "./ProjectCard";
import project1Img from "../assets/project-image-example.jpg";
import project2Img from "../assets/project-image-example-2.png";
import project3Img from "../assets/project-image-example-3.png";
export default function Projects() {
  const descriptions = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, natus? Laboriosam a eius sequi sint praesentium fugiat quo, soluta reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, natus? Laboriosam a eius sequi sint praesentium fugiat quo, soluta reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, natus?",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsa quae dolorem fugit incidunt aut maiores distinctio cum reiciendis consequuntur esse eos nisi repellendus veritatis, quos ducimus aliquam. Ipsum, officiis velit quasi excepturi cum obcaecati aliquid id qui. ",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsa quae dolorem fugit incidunt aut maiores distinctio cum reiciendis consequuntur esse eos nisi repellendus veritatis, quos ducimus aliquam. Ipsum, officiis velit quasi excepturi cum obcaecati aliquid id qui. quos ducimus aliquam. Ipsum, officiis velit quasi excepturi cum obcaecati aliquid id qui ",
  ];

  return (
    <section id="projects">
      <ProjectCard
        image={project1Img}
        title="Project1"
        description={descriptions[0]}
        githubLink="link"
        liveLink="link"
      />
      <ProjectCard
        image={project2Img}
        title="Project2"
        description={descriptions[1]}
        githubLink="link"
        liveLink="link"
      />
      <ProjectCard
        image={project3Img}
        title="Project3"
        description={descriptions[2]}
        githubLink="link"
        liveLink="link"
      />
    </section>
  );
}
