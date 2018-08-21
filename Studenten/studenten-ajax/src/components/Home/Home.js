import * as React from 'react';

const Home = () => (
    <main>
        <div className="wrapper">
            
            <div className="flex col-3">
                
                <section className="flex-col">
                    <h2>Nieuw hier?</h2>
                    <p>Is dit jouw eerste bezoek aan onze namen website? Dan is het hoog tijd om jouw studenten toe te voegen!</p>
                    <p><a href="beheer-student-toevoegen.html">Student toevoegen</a></p>
                </section>
                
                <section className="flex-col">
                    <h2>Oefentijd</h2>
                    <p>Reeds studenten toegevoegd? Een beetje moeite met sommige namen? Dan is het hoog tijd voor: train jouw brein!</p>
                    <p><a href="oefenen.html">Oefenen</a></p>
                </section>
                
                <section className="flex-col">
                    <h2>Beheer</h2>
                    <p>Is er informatie veranderd? Via het beheer kan je alles naar jouw hand zetten.</p>
                    <p><a href="beheer.html">Overzicht</a></p>
                </section>
                
            </div>
        
        </div>
    </main>
);

export default Home;