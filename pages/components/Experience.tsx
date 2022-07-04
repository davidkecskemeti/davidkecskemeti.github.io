import Exclusive from "./Experiences/Exclusive";
import Highroads from "./Experiences/Highroads";
import SelfEmployed from "./Experiences/SelfEmployed";
import styles from "@styles/Experience.module.scss";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div id="experience">
      <div>
        <h2 className={styles.header}>Experience</h2>
        <Highroads />
        <Exclusive />
        <SelfEmployed />
      </div>
    </div>
  );
};

export default Experience;
