import styles from "./page.module.css";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header className={styles.header}>
        <div flexDirection="column">
        <span className={styles.text}>
              Galería
            </span>
          <section className={styles.imagenes}>
            <img
              src="amarillo.jpg"
              alt="Imagen"
              className={styles.image}
            />

            <img
              src="brie.jpeg"
              alt="Imagen"
              className={styles.image}
            />

            <img
              src="cheddar.jpg"
              alt="Imagen"
              className={styles.image}
            />
          </section>
          <section id="Imagenes" className={styles.imagenes}>

            <img
              src="gouda.jpg"
              alt="Imagen"
              className={styles.image}
            />


            <img
              src="mozzarella.jpg"
              alt="Imagen"
              className={styles.image}
            />

            <img
              src="suizo.jpg"
              alt="Imagen"
              className={styles.image}
            />
          </section>

          <section className={styles.imagenes}>

            <img
              src="yogurt.jpg"
              alt="Imagen"
              className={styles.image}
            />


            <img
              src="leche.jpg"
              alt="Imagen"
              className={styles.image}
            />

            <img
              src="crema.jpg"
              alt="Imagen"
              className={styles.image}
            />

          </section>
          <section id="Imagenes" className={styles.imagenes}>

            <img
              src="azul.jpg"
              alt="Imagen"
              className={styles.image}
            />


            <img
              src="pita.jpg"
              alt="Imagen"
              className={styles.image}
            />

            <img
              src="quesocrema.jpg"
              alt="Imagen"
              className={styles.image}
            />

          </section>

        </div>
      </header>
    </main>
  );
}