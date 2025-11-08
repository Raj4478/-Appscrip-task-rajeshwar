"use client";
import { useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div className="mobile-hamburger">
          <button 
            className="hamburger-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <a href="/" aria-label="Homepage" className="logo-link">
            <Image src="/file.svg" alt="Site logo" width={36} height={36} />
          </a>
        </div>

        <div className="logo">LOGO</div>

        <div className="header-icons" aria-hidden="false">
          <button className="icon" aria-label="Search">
            <Image src="/search-normal.png" alt="Search" width={20} height={20} />
          </button>
          <button className="icon" aria-label="Wishlist"> 
            <Image src="/heart.svg" alt="Wishlist" width={20} height={20} />
          </button>
          <button className="icon" aria-label="Shopping bag">
            <Image src="/shopping-bag.svg" alt="Shopping bag" width={20} height={20} />
          </button>
          <button className="icon mobile-hide" aria-label="Account">
            <Image src="/profile.svg" alt="Account" width={20} height={20} />
          </button>
          <button className="icon mobile-hide" aria-label="Language" style={{display: 'flex', alignItems: 'center', gap: 4}}>
            <span style={{fontWeight: 'normal'}}>ENG</span>
            <Image src="/arrow-left.png" alt="Language" width={16} height={16} />
          </button>
        </div>
      </div>

  
      <nav className="main-nav-container desktop-nav">
        <div className="container">
          <div className="main-nav" role="navigation" aria-label="Main navigation">
            <a href="#">SHOP</a>
            <a href="#">SKILLS</a>
            <a href="#">STORIES</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT US</a>
          </div>
        </div>
      </nav>

   
      {isMobileMenuOpen && (
        <nav className="mobile-nav-menu">
          <div className="container">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>SHOP</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>SKILLS</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>STORIES</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</a>
          </div>
        </nav>
      )}
    </header>
  );
}
