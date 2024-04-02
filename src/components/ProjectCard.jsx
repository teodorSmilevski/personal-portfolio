import PropTypes from "prop-types";
export default function ProjectCard({
  image,
  title,
  description,
  githubLink,
  liveLink,
}) {
  return (
    <button id="project-card-btn">
      <div id="project-card">
        <img src={image} key={title} alt={title} />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <div id="project-card-links">
            <a href={githubLink}>a</a>
            <a href={liveLink}>a</a>
          </div>
        </div>
      </div>
    </button>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
