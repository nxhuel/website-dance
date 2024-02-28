import React, { useEffect, useState } from 'react';
import instagramLogo from '../assets/instagram.svg';
import menuIcon from '../assets/list.svg';
import '../styles/Navbar.css';

const navigation = [
    { name: 'Sobre mi', href: '#sobre-mi' },
    { name: 'Coreógrafa', href: '#coreografa' },
    { name: 'Bailarina', href: '#bailarina' },
    { name: 'Clases', href: '#clases' },
];

const MobileMenu = ({ navigation, scrolling, open, onClose }) => (
    <div className={`mobile-menu ${scrolling ? 'dark' : ''} ${open ? 'open' : ''}`}>
        {navigation.map((item) => (
            <a
                key={item.name}
                href={item.href}
                onClick={onClose}
            >
                {item.name}
            </a>
        ))}
    </div>
);


export default function Navbar() {
    const [scrolling, setScrolling] = useState(true);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        console.log('Handle Click Called');
        setOpen(!open);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = scrolling ? 'navbar-scrolling' : 'navbar';

    return (
        <>
            <nav className={navbarClasses}>
                <div className="container">
                    <div className="container-items">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={scrolling
                                    ? 'nav-link-light custom-font'
                                    : 'nav-link-dark custom-font'}>
                                {item.name}
                            </a>
                        ))}
                        <a href="#">
                            <img src={instagramLogo} alt="Instagram Logo" className="instagram-logo" />
                        </a>
                    </div>
                    <div className="mobile-menu-toggle nav_toggle" onClick={handleClick}>
                        <img src={menuIcon} alt="Menu Icon" />
                    </div>
                </div>
            </nav >
            {open && <MobileMenu navigation={navigation} scrolling={scrolling} onClose={() => setOpen(false)} />}
        </>
    );
}
