import React, { useState, useEffect, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Git from '../icons/Git.svg';
import Link from '../icons/Link.svg';
import Gmail from '../icons/Gmail.svg';
import Ghost from '../icons/Ghost.svg';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle page scroll detection to toggle styles
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Function to update the active link
  const onUpdateActiveLink = useCallback((value) => {
    setActiveLink(value);
  }, []);

  // Scroll smoothly to the target section
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className={`bg-body-tertiary ${scrolled ? 'navbar-scrolled' : ''}`} fixed="top">
      <Container className="flex items-center justify-between">
        <Navbar.Brand href="#home" className="flex items-center">
          <img src={Ghost} alt="Ghost Logo" className="h-14 m-2" />
          <p className="font-bold text-xl h-14 mt-5">Prayash Sinha</p>
        </Navbar.Brand>
        <Nav className="mx-auto flex justify-center space-x-5 text-lg">
          <Nav.Link
            href="#home"
            className={activeLink === 'home' ? 'text-purple-500 hover:text-xl' : 'text-black-300 hover:text-xl'}
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              onUpdateActiveLink('home');
              handleScrollToSection('home');
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className={activeLink === 'skills' ? 'text-purple-500 hover:text-xl' : 'text-black-300 hover:text-xl'}
            onClick={(e) => {
              e.preventDefault();
              onUpdateActiveLink('skills');
              handleScrollToSection('skills');
            }}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className={activeLink === 'projects' ? 'text-purple-500 hover:text-xl' : 'text-black-300 hover:text-xl'}
            onClick={(e) => {
              e.preventDefault();
              onUpdateActiveLink('projects');
              handleScrollToSection('projects');
            }}
          >
            Projects
          </Nav.Link>
        </Nav>
        <div className="flex items-center space-x-4 m-2">
          <a href="#">
            <img
              src={Git}
              className="h-10 p-2 border-2 rounded-full border-black hover:border-purple-400 transition-all"
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/prayash-sinha-836454280/">
            <img
              src={Link}
              className="h-10 p-2 border-2 rounded-full border-black hover:border-purple-400 transition-all"
              alt="LinkedIn"
            />
          </a>
          <a href="#">
            <img
              src={Gmail}
              className="h-10 p-2 border-2 rounded-full border-black hover:border-purple-400 transition-all"
              alt="Gmail"
            />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
