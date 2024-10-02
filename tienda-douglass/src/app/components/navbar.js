"use client"
import React, { useState } from "react";
import styles from "./navbar.module.css";

function navbar() {
    const [selectedItem, setSelectedItem] = useState('Inicio');

    const handleItemClick = (item, id) => {
        setSelectedItem(item);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.navbar}>
            <div
                className={styles.navbarItem + ` ${selectedItem === 'Inicio' ? styles.selected : ''}`}
                onClick={() => handleItemClick('Inicio', 'header')}
            >
                <a href="/">Inicio</a>
            </div>
            <div className={styles.navbarItem + ` ${selectedItem === 'contact' ? styles.selected : ''}`}
                onClick={() => handleItemClick('contact', 'info')}
            >
                <a href="contact">contact</a>
            </div>
            <div className={styles.navbarItem + ` ${selectedItem === 'gallery' ? styles.selected : ''}`}
                onClick={() => handleItemClick('gallery', 'info')}
            >
                <a href="gallery">gallery</a>
            </div>
        </nav>
    );
}

export default navbar;

