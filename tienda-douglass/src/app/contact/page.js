import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div >
          <span >
            Bienvenidos a
            <span className={styles.yellowText}></span>
          </span>
          <br />
          <span>Tienda Douglass</span>
        </div>
      </header>
    </main>
  );
}