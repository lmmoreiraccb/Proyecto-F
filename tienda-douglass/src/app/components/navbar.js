"use client"
import React, { useState } from "react";
import styles from "./navbar.module.css";

function navbar() {
    const [selectedItem, setSelectedItem] = useState('Inicio');

    const handleItemClick = (item, id) => {
        setSelectedItem(item);
        setSelectedItem(id);
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
            <a href="#header">Inicio</a>    
        </div>
        <div className={styles.navbarItem + ` ${selectedItem === 'Contact' ? styles.selected : ''}`}
        onClick={() => handleItemClick('contact', 'info')}
        >
            <a href="contact">contact</a>    
        </div>         
    </nav> 
    );
}

export default navbar;

