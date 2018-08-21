import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
    <body className='homeBody'>
      <div className="home-content">

        <h1>Star Wars Speed Dater</h1>
        <h2>Gebruik Swinder om te speeddaten met je favoriete personages!</h2>
        <p>
            Heb jij altijd al gedroomd om op date te gaan met je favoriete personage uit Star Wars? Tuurlijk, wie niet! Kom meer over ze te weten dankzij Swinder, de meest revolutionaire datingapp van 2018!
            Wil je niet zelf op date maar gewoon de perfecte match maken voor de personages die je tegenkomt? Voeg dan gewoon een nieuw personage toe aan je date met een druk op de knop!
        </p>
        <Link to="/people"><button className=" remove pulseBtn">Vind je match!</button></Link>

      </div>
    </body>
);

export default Home;
