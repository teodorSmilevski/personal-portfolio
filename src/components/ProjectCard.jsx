import PropTypes from "prop-types";
import githubLogo from "../assets/github-logo.png";
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
            <a href={githubLink}>
              <img
                src={githubLogo}
                alt="github repo logo"
                style={{
                  width: "30px",
                  height: "30px",
                  pointerEvents: "none",
                }}
              />
            </a>
            <a href={liveLink}>
              <button>Live Demo</button>
            </a>
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
