import styles from "@styles/Skills.module.scss";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <div id="skills">
      <div>
        <h2 className={styles.title}>Skills</h2>

        <div className={styles.container}>
          <div>
            <div className={styles.section}>Primary stack</div>
            <ul>
              <li>Java 8-11 Spring Boot Framework</li>
              <li>Javascript React (using typescript)</li>
              <li>NodeJS (using typescript)</li>
              <li>Microservice architecture</li>
              <li>AWS</li>
              <li>SQL DB</li>
              <li>Docker</li>
              <li>Docker compose</li>
            </ul>
          </div>

          <div>
            <div className={styles.section}>Secondary</div>
            <ul>
              <li>Python</li>
              <li>.NET 5-6</li>
              <li>Java FX</li>
              <li>Flutter</li>
              <li>Android</li>
            </ul>
          </div>

          <div>
            <div className={styles.section}>Got some experience</div>
            <ul>
              <li>Java EE</li>
              <li>C++</li>
              <li>Object Pascal</li>
              <li>Assembly</li>
              <li>.NET Framework legacy</li>
              <li>Dart</li>
              <li>GCP</li>
              <li>Kubernetes</li>
              <li>JQuery</li>
              <li>Wordpress</li>
            </ul>
          </div>

          <div>
            <div className={styles.section}>Communication with devices</div>
            <ul>
              <li>Scanner</li>
              <li>Camera</li>
              <li>POS terminal</li>
              <li>Receipt printer</li>
              <li>Led display</li>
              <li>Cash Register</li>
              <li>Bar code reader</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
