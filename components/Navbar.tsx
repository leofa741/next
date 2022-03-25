import React from 'react'
import styles from './Navbar.module.css';
import Link from 'next/link';
import { Activelink } from './Activelink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/Contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
export const Navbar = () => {
  return (
    <nav className={ styles['menu'] }>
        {
          menuItems.map( ({ text, href }) => (
            <Activelink key={ href } text={ text } href={ href } />    
          ))

        }

        {/* 
        <ActiveLink text="Home" href="/" />
        <ActiveLink text="About" href="/about" />
        <ActiveLink text="Contact" href="/contact" /> 
        <ActiveLink text="Pricing" href="/pricing" />  
        */}
    </nav>

  );
}
