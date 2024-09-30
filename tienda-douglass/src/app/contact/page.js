import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div>
          <span>
            Contacto
            <section className={styles.body}>
            <div className={styles.infoContainer}>
          <span className={styles.title + "" + styles.yellowText}></span>
          <br />
          <span className={styles.title}></span>
          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>Teléfono: </span> 1609-1122
              </li>
              <li>
                <span className={styles.grayText}>Correo: </span> tienda_douglass@gmail.com
              </li>
              <li>
                <span className={styles.grayText}>Dirección: </span> 5ta avenida, 16 calle, Zona 2
              </li>
              <li>
                <span className={styles.grayText}>Instagram: </span> @tienda_douglass_OFICIAL
              </li>
              <li>
                <span className={styles.grayText}>X: </span> @tienda_douglass_OFICIAL
              </li>
            </ul>
          </div>
          </div>
            </section>
          </span>
        </div>
      </header>
    </main>
  );
}