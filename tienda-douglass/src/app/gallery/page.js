import styles from "./page.module.css";
import Navbar from "../components/navbar";

export default function Home() {
    return (
      <main>
        <Navbar></Navbar>
        <header id="header" className={styles.header}>
        </header>
        <section id="Imagenes" className={styles.imagenes}>
          <img
            src=".jpg"
            alt="Imagen"
            className={styles.image}
          />
          <img
            src=".jpeg"
            alt="Imagen"
            className={styles.image}
          />
          <img
            src=".jpg"
            alt="Imagen"
            className={styles.image}
          />
        </section>
      </main>
    );
  }