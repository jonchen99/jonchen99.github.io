import React, {Component} from 'react';

import {HashLink as Link} from 'react-router-hash-link';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const dropdownList = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const myButton = collapsed ? 'navbar-toggler collapsed navbar-toggler-right' : 'navbar-toggler navbar-toggler-right';
  
  return (
    <header>
      <section className="header_area pad_30">

        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container box_1620">
            
            <Link className="navbar-brand" to=""> Jonathan Chen </Link>

            <button onClick={this.toggleNavbar} className={`${myButton}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"> </span>
            </button>

            <div className={`${dropdownList}`} id="navbarResponsive">

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
}

export default Header;