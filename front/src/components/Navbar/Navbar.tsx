import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [page, setPage] = useState<string>('home');

  useEffect(() => {
    const { pathname } = location;

    if (pathname === '/' || pathname === '/home') {
      setPage('home');
    } else if (pathname === '/cadastro-itens') {
      setPage('cadastro-itens');
    } else if (pathname === '/meus-dados') {
      setPage('meus-dados');
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to={'/home'} className="navbar-brand">RJ Nutrition</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/home'} className={`nav-link ${page === 'home'? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/cadastro-itens'} className={`nav-link ${page === 'cadastro-itens'? 'active' : ''}`}>
                  Itens
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/meus-dados'} className={`nav-link ${page === 'meus-dados'? 'active' : ''}`}>
                  Meus dados
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
