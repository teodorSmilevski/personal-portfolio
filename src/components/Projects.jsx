import ProjectCard from "./ProjectCard";
import project1Img from "../assets/personal-picture.jpg";
export default function Projects() {
  const descriptions = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, natus? Laboriosam a eius sequi sint praesentium fugiat quo, soluta reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, natus? Laboriosam a eius sequi sint praesentium fugiat quo, soluta reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, natus?",
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
        image={project1Img}
        title="Project2"
        description={descriptions[0]}
        githubLink="link"
        liveLink="link"
      />
      <ProjectCard
        image={project1Img}
        title="Project3"
        description={descriptions[0]}
        githubLink="link"
        liveLink="link"
      />
    </section>
  );
}
