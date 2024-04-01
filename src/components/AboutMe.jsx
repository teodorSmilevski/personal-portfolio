import aboutMeImage from "../assets/about-me.gif";

export default function AboutMe() {
  return (
    <section id="about-me">
      <div>
        <img src={aboutMeImage} alt="about me gif image" />
        <div>
          <h1>About me</h1>
          <p>
            I am a Computer Science student at the Faculty of Information and
            Communication Technologies in Bitola, passionate about leveraging my
            skills to create responsive and visually appealing web applications.
            Proficient in modern frontend frameworks like React, I have a keen
            interest in learning new technologies. As a dedicated team player
            with excellent problem-solving skills, I am driven by continuous
            improvement. I am enthusiastic about learning and thrive on tackling
            new challenges to expand my knowledge and skills.
          </p>
        </div>
      </div>
    </section>
  );
}
