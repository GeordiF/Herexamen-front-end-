import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <header>
      <div className="headerlogo">

          <a href="/"><img id='logo' src={"/images/swinder.png"} /></a>

      </div>
      <div className="navigation">
        <div className="nav">
          <ul>

              <Link to="/" className="pages"><li>Home</li></Link>
              <Link to="/people" className="pages"><li>Speeddate!</li></Link>
              <Link to="/add" className="pages"><li>Voeg een nieuw personage toe</li></Link>

          </ul>
        </div>
      </div>
    </header>
);

export default Header;
