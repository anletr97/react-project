import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="copyright">©Copyright Mam Xanh 2021</div>
          </div>
          <div className="col-6">
            <ul className="list-inline footer-social-list justify-content-end align-items-center m-0 d-flex">
              <li className="list-inline-item ">
                <a href="#" target="_blank" rel="nofollow">
                  <img
                    src="https://static.mservice.io/styles/desktop/images/social/facebook.svg"
                    alt=""
                    width="26"
                  />
                </a>
              </li>
              <li className="list-inline-item ">
                <a href="#" target="_blank" rel="nofollow">
                  <img
                    src="https://static.mservice.io/styles/desktop/images/social/linkedin.svg"
                    alt=""
                    width="26"
                  />
                </a>
              </li>
              <li className="list-inline-item ">
                <a href="#" target="_blank" rel="nofollow">
                  <img
                    src="https://static.mservice.io/styles/desktop/images/social/youtube.svg"
                    alt=""
                    width="26"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
