import styles from "@styles/Experience.module.scss";

interface HighroadsProps {}

const Highroads: React.FC<HighroadsProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h3 className={styles.header}>Full Stack Developer</h3>
        <div className={styles.subHeader}>
          Highroads Inc / US/NI / Boston/Belfast
        </div>
        <p>
          Highroads is the biggest IT company for providing system as a service
          for US health insurance companies. I have been working with the best
          team I have ever worked. I am designing and implementing new features.
          Working close with the Product owners and managers to maximize the
          satisfaction. Introducing the system and the services for the new
          joining members. Participating and converting modules of a large
          conversion project. Tracking/fixing bugs new and long term bugs.
          <br />
          <br />
          <strong>The primary stack Im using:</strong>
          <ul>
            <li>Java 8-11 Spring Boot</li>
            <li>React (typescript)</li>
            <li>NodeJS</li>
            <li>AWS</li>
            <li>Kafka</li>
            <li>PostgreSQL</li>
            <li>.NET 6</li>
          </ul>
        </p>
        <p>
          <strong>Systems I have experience with</strong>
          <br />
          <ul>
            <li>US Health Insurance</li>
            <li>Document management</li>
            <li>Document generation</li>
            <li>Backend core functionalities</li>
            <li>Frontend core functionalities</li>
          </ul>
        </p>
      </div>
      <div className={styles.dateInterval}>
        <span className={styles.text}>March 2015 - Present</span>
      </div>
    </div>
  );
};

export default Highroads;
