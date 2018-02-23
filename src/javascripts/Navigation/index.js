import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ navList }) => (
  <nav className="c-nav">
    <div className="u-inner">
      <ul className="c-nav__list">
        {navList.map((nav, i) =>
          <li key={i}>
            <NavLink to={nav.href} className="c-nav__list__link">
              {nav.name}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  </nav>
);

export default Navigation;

