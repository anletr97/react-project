import { NavItems, Path, TOKEN } from 'common';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'styles/header.css';
import { clearToken, getToken } from 'utils';

const Navbar = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const isAuth = getToken() ? true : false;
    setAuth(isAuth);
  }, []);

  const logOut = () => {
    clearToken();
    setAuth(false);
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to={Path.HOME} className="navbar-brand logo-website">
              <img src="images/logo.jpg" alt="" className="img-fluid" />{' '}
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav">
                {NavItems.map((nav) => (
                  <Link to={nav.path} className="nav-item nav-link active">
                    {nav.name}
                  </Link>
                ))}
              </div>
              <div className="navbar-nav">
                {!auth && (
                  <Link to={Path.LOGIN} className="btn btn-primary btn-pink">
                    Đăng nhập
                  </Link>
                )}
                {auth && (
                  <button
                    className="btn btn-primary btn-pink"
                    onClick={() => logOut()}
                  >
                    Đăng xuất
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="container-fluid">
        <div className="row">
          <div className="banner-home">
            <img src="images/banner.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
