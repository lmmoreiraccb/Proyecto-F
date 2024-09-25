import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div>
          <span>
            Bienvenidos a Tienda Douglass           
          </span>         
        </div>
      </header>
      <section className={styles.infoSection}>
      </section>

    </main>
  );
}
