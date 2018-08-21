import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import * as peopleService from '../../services/people.service';
import Person from './Person';


class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      people: [],   // Init Empty People Array
      chars: {
        name: '',
        height: '',
        mass: '',        // Init Chars Params
        hair_color: '',
        skin_color: '',
        eye_color: '',
        birth_year:'',
        gender: '',

      },
    };
  }

  componentWillMount(){
      peopleService.getAll().then(response => this.setState({ people: response.message })); // Get all People from Local API

  }

  onSubmit(e){
      e.preventDefault();
      peopleService.delAll().then(() => this.props.history.push('/people'));

      const min = 1;                                                      //
      const max = 89;                                                      //  Random Page Number
      const rand = Math.round(min + Math.random() * (max - min));         //

          axios.get('https://swapi.co/api/people/'+ rand).then( (response) => {          // Get SWAPI Random Page

            for (var i = 0; i < 1; i++) {
                this.setState({ chars: {

                                  name: response.data['name'],
                                  height: response.data['height'],
                                  mass: response.data['mass'],
                                  hair_color: response.data['hair_color'],
                                  skin_color: response.data['skin_color'],
                                  eye_color: response.data['eye_color'],
                                  birth_year: response.data['birth_year'],
                                  gender: response.data['gender'],

                              }
                            });

                                peopleService.add(this.state.chars).then(() => this.props.history.push('/people'));
            }

                return window.location.reload()

        });
  }

renderPeople(){

      return this.state.people.map( (person) => (
        <li>
        <Person name={person.name}
        height={person.height}
        mass={person.mass}
        hair_color={person.hair_color}
        skin_color={person.skin_color}
        eye_color={person.eye_color}
        birth_year={person.birth_year}
        gender={person.gender} />
        </li> ) ) ; //
}

changeCSS(e){
  e.preventDefault();
  this.setState({isDelete:true});
}


  render(){

    if (this.state.people == 0) {
      return(
        <body className='homeBody'>
            <div className="home-content">
              <h2>Gebruik de Force om je soulmate uit het Star Wars universum te vinden!</h2>
              <div class="lds-circle"></div>
               <p id="loadingP">Klaar om te gaan...</p>
              <form action="" onSubmit={(e) => this.onSubmit(e)}>

                <button id="loadingBtn" type="submit">Gebruik de Force!</button>

              </form>
            </div>
        </body>
      )
    }

    else{
      return(
        <body>
            <div className="home-content">
              <h2>Niet tevreden met je match ? Klik op de knop om je volgende date te bekijken!</h2>
              <h4>Ben jij een echte koppelaar? klik dan rechtsboven op 'voeg een nieuw personage toe' om de perfecte match voor dit personage te maken!</h4>

                {this.renderPeople()}

              <form action="" onSubmit={(e) => this.onSubmit(e)}>

                <button id='arrow-btn'type="submit"><span>Volgende match alstublieft!</span></button>

              </form>
            </div>
        </body>
      )
    }
  }
}

export default People;
