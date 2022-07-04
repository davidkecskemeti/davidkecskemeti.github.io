import styles from "@styles/About.module.scss";
import Image from "next/image";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const getNumberOfYearsOfExperience = () => new Date().getFullYear() - 2015;

  console.log(getNumberOfYearsOfExperience());

  return (
    <div className={styles.container}>
      <div className={styles.section} id="about">
        <div className={styles.content}>
          <h1>
            David
            <span className="text-primary">Kecskemeti</span>
          </h1>
          <div className={styles.address}>
            <p>
              26 Campsie Crescent
              <br />
              Omagh Co. Tyrone
              <br />
              BT79 0AD
              <br />
            </p>
            <p>
              <a href="tel:+447934164016">+44 (0) 79 3416 4016</a>
            </p>
            <p>
              <a href="mailto:dxdy421@gmail.com">dxdy421@gmail.com</a>
            </p>
          </div>

          <div className={styles.socialIcons}>
            <a
              className={styles.socialIcon}
              href="https://www.linkedin.com/in/david-kecskemeti-5592ba137"
            >
              <Image
                src="/icons/social/linkedin-brands.svg"
                alt="linkedin"
                width="45"
                height="50"
              />
            </a>
            <a
              className={styles.socialIcon}
              href="https://github.com/davidkecskemeti"
            >
              <Image
                src="/icons/social/github-brands.svg"
                alt="github"
                width="40"
                height="40"
              />
            </a>
          </div>

          <p className={styles.introduction}>
            I am a <strong>Full Stack Developer</strong> with{" "}
            <strong>{getNumberOfYearsOfExperience()} years</strong> of
            experience. Primary working with{" "}
            <strong>
              Java 8-11 (Spring Boot Framework), Node, JavaScript (React
              library), AWS.
            </strong>
            Experienced with all stages of the development cycle, both SQL and
            NoSQL databases, designing features. Skilled in numerous another
            programming languages, frameworks and databases... Im a great team
            player and always ready to learn new technologies.
          </p>

          <ul className={styles.devIconList}>
            <li className={styles.item + " active"}>
              <Image
                src="/icons/dev/java-brands.svg"
                alt="java"
                width="50"
                height="50"
              />
            </li>
            <li className={styles.item}>
              <Image
                src="/icons/dev/spring-boot-brands.ico"
                alt="spring-boot"
                width="50"
                height="50"
              />
            </li>
            <li className={styles.item}>
              <Image
                src="/icons/dev/js-brands.svg"
                alt="js"
                width="50"
                height="50"
              />
            </li>
            <li className={styles.item}>
              <Image
                src="/icons/dev/react-brands.ico"
                alt="react"
                width="50"
                height="50"
              />
            </li>
            <li className={styles.item}>
              <Image
                src="/icons/dev/aws-brands.svg"
                alt="aws"
                width="50"
                height="50"
              />
            </li>
            <li className={styles.item}>
              <Image
                src="/icons/dev/node-brands.svg"
                alt="node"
                width="50"
                height="50"
              />
            </li>
            <li className={styles.item}>
              <Image
                src="/icons/dev/nestjs-brands.ico"
                alt="nestjs"
                width="50"
                height="50"
              />
            </li>
            <li className={styles.item}>
              <Image
                src="/icons/dev/nextjs-brands.ico"
                alt="nextjs"
                width="50"
                height="50"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
