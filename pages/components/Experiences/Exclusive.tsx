import styles from "@styles/Experience.module.scss";

interface ExclusiveProps {}

const Exclusive: React.FC<ExclusiveProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h3 className={styles.header}>Full Stack Developer</h3>
        <div className={styles.subHeader}>
          Exclusive Change ltd. And Express Zalog ltd. / Hungary / Budapest
        </div>
        <p>
          Exclusive Change is the biggest currency exchange in Hungary. It also
          has shops in the neighbouring countries. Express Zalog is a pawnshop
          company also a child company of Exclusive Change. I was working with
          two principal developers in a team to design and manage large, complex
          projects for the corporation from scratch. Manage and extend existing
          large and complex systems.
          <br />
          <br />
          <strong>The primary stack I was using:</strong>
          <ul>
            <li>Java 8 Spring Boot</li>
            <li>React</li>
            <li>Java EE</li>
            <li>Java FX with Spring Boot</li>
            <li>Object Pascal</li>
            <li>C++</li>
            <li>Assembly</li>
          </ul>
        </p>
        <p>
          <strong>Systems I have experience with</strong>
          <br />
          <ul>
            <li>Currency Exchange System</li>
            <li>Camera System</li>
            <li>Stock Control System</li>
            <li>Stock Monitoring system</li>
            <li>Enterprise Resource Planning System</li>
            <li>Phone bill upload system</li>
            <li>Freeway ticket system</li>
            <li>Corporation messaging and notification system</li>
            <li>Android applications</li>
            <li>Providing data to the Hungarian National Tax and Customs</li>
            <li>
              Communication with devices such as POS terminal, led display,
              receipt printer, cash register
            </li>
            <li>Participation in the preparation of an IT security policy</li>
          </ul>
        </p>
      </div>
      <div className={styles.dateInterval}>
        <span className={styles.text}>March 2015 - February 2021</span>
      </div>
    </div>
  );
};

export default Exclusive;
