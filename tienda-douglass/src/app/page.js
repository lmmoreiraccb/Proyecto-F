import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id ="header" className={styles.header}>
        <div>
          <span>
            Bienvenidos a Tienda Douglass           
          </span>         
        </div>
      </header>
      <section id="info" className={styles.infoSection}>
      </section>

    </main>
  );
}
