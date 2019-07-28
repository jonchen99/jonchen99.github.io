import React from 'react';

import {HashLink as Link} from 'react-router-hash-link';

function Header() {
  return (
  	<header>
  		<div className="headerName">
  			<Link to=""> Jonathan Chen </Link>
  		</div>

  		<nav>
  			<ul>

  				<li className="first">
            <Link to="">Home</Link>
  				</li>

  				 <li>
            <Link to="/homepage#about">About</Link>
  				</li>

  				<li className="last">
            <a href="/jonathanchen.pdf" target="_blank"> Resume </a>
  			  </li>

  			</ul>
  		</nav>

  	</header>
  );
}

export default Header;
