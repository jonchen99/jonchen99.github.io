import React from 'react';

import {HashLink as Link} from 'react-router-hash-link';

function Header() {
  return (
    <header>
      <section className="header_area pad_30">

        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container box_1620">
            
            <Link className="navbar-brand" to=""> Jonathan Chen </Link>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"> </span>
            </button>

            <div className="navbar-collapse offset collapse" id="navbarSupportedContent">

              <ul className="nav navbar-nav menu_nav ml-auto">

                <li className="nav-item active">
                  <Link className="nav-link" to="">Home</Link>
                </li>

                 <li className="nav-item">
                  <Link className="nav-link" to="/homepage#about">About</Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/jonathanchen.pdf" target="_blank"> Resume </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </section>

    </header>
  );
}

export default Header;