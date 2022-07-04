import styles from "@styles/Experience.module.scss";

interface SelfEmployedProps {}

const SelfEmployed: React.FC<SelfEmployedProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h3 className={styles.header}>Full Stack Developer</h3>
        <div className={styles.subHeader}>Other - Self Employed jobs</div>
        <p>
          <li>Flutter application for a healthy recipies app</li>
          <li>
            Bitcoin/Ethereum miner monitoring and maintenance system including
            Android/Web application and backend services
          </li>
          <li>WordPress websites for civil organizations</li>
          <li>WordPress website for appointment scheduling</li>
          <li>
            Adding new features to an existing websites organizations such as to
            fit the European union regulations
          </li>
        </p>
      </div>
      <div className={styles.dateInterval}>
        <span className={styles.text}>March 2014 - Present</span>
      </div>
    </div>
  );
};

export default SelfEmployed;
