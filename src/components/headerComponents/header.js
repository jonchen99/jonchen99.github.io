import React from 'react';

import {HashLink as Link} from 'react-router-hash-link';

function Header() {
  return (
  	<header>
      <section className="header_area pad_30">

    		<nav className="navbar navbar-expand-lg navbar-light">
          <div className="container box_1620">
            <div className="headerName">
              <Link className="navbar-brand" to=""> Jonathan Chen </Link>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
            </button>

            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">

        			<ul className="nav navbar-nav menu_nav ml-auto">

        				<li className="nav-item active">
                  <Link to="">Home</Link>
        				</li>

        				 <li className="nav-item">
                  <Link to="/homepage#about">About</Link>
        				</li>

        				<li className="nav-item">
                  <a href="/jonathanchen.pdf" target="_blank"> Resume </a>
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
