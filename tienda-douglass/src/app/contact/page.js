import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.imagenes}>
       <img
          src="bosquesito.jpg"
          alt="Imagen"
          className={styles.imagenes}
        />
    </main>
  );
}