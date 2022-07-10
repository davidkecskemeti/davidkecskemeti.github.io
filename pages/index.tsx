import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import styles from "@styles/Home.module.scss";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Kecskemeti CV</title>
        <meta
          name="description"
          content="David Kecskemeti CV Full Stack Developer"
        />
        <link rel="icon" href={`${process.env.BACKEND_URL}/favicon.ico`} />
      </Head>

      <main>
        <NavBar />
        <About />
        <hr className={styles.sectionDivider} />
        <Experience />
        <hr className={styles.sectionDivider} />
        <Skills />
        <hr className={styles.sectionDivider} />
        <Education />
        <hr className={styles.sectionDivider} />
      </main>

      <footer className={styles.footer}>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/profile.svg" alt="Profile" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
