import styles from "@styles/Education.module.scss";

interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
  return (
    <div id="education">
      <div>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.subTitle}>
          <h3 className={styles.title}>University of Pecs , Hungary</h3>
          <div className={styles.header}>Bachelor of Computer Science</div>
        </div>
        <p className={styles.section}>
          <strong>University placement</strong>
          <br />I was at Hungarian State Railways during my university
          placement. I was working with multiple programming languages including
          Java, C# and Python and frameworks such as Spring Boot MVC, .NET MVC,
          Python Django. My final task was to create a Human Resources system in
          every listed frameworks and compare them with each other.
        </p>
        <p className={styles.section}>
          <strong>Thesis</strong>
          <br />
          My thesis topic was a Route planning and analyst prototype system (for
          transfer vehicles) where you could create a plan for a route by
          interact on map, input by coordinates or selecting existing points on
          a map. Afterwards u were able to analyse the planned route with the
          actual data. The actual data was requested from an API. I was using
          Spring boot on backend, KnockoutJS on frontend with additional Leaflet
          js library and PostgreSQL database with PostGIS. I deployed the system
          on Google cloud. It was that success that it has been used by the
          company since. The logic and the route planning were developed thought
          using OpenStreetMap API even got an instant job offer afterwards.
        </p>
      </div>
    </div>
  );
};

export default Education;
