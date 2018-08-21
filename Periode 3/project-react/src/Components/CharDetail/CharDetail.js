import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import * as peopleService from '../../services/people.service';

class Detail extends React.Component{

  constructor(props) {
    super(props);
    this.state = {

        person: {
          name: '',
          height: '',
          mass: '',
          hair_color: '',
          skin_color: '',
          eye_color: '',
          birth_year: '',
          gender: '',

        },
        chars: [],
        isDelete: false
    };
  }

  componentWillMount() {
    peopleService.get(this.props.match.params.name).then(response => this.setState({ person: response.message }));
  }

  getPeople(){
    var str = this.props.location.pathname;
    var split = str.split("/").pop();
    var search = split.split(' ').join('%20');
    var path = 'https://swapi.co/api/people/?search=';

    return axios.get(path + search)
    .then( (response) => {
      this.setState({ chars: response.data.results });
    });
  }

  componentDidMount(){
    this.getPeople();
  }

  renderChars(){
    //
  }

  updateName(name) {
      this.setState({
          ...this.state,
          person: {
              ...this.state.person,
              name,
          }
      });
  }

  updateHeight(height) {
      this.setState({
          ...this.state,
          person: {

              ...this.state.person,
              height,
          }
      });
  }

  updateMass(mass) {
      this.setState({
          ...this.state,
          person: {

              ...this.state.person,
              mass,
          }
      });
  }

  updateHair(hair_color) {
      this.setState({
          ...this.state,
          person: {

              ...this.state.person,
              hair_color,
          }
      });
  }

  updateSkin(skin_color) {
      this.setState({
          ...this.state,
          person: {

              ...this.state.person,
              skin_color,
          }
      });
  }

  updateEye(eye_color) {
      this.setState({
          ...this.state,
          person: {

              ...this.state.person,
              eye_color,
          }
      });

  }

  updateBirth(birth_year) {
      this.setState({
          ...this.state,
          person: {

              ...this.state.person,
              birth_year,
          }
      });

  }

  updateGender(gender) {
      this.setState({
          ...this.state,
          person: {

              ...this.state.person,
              gender,
          }
      });

  }

  onSubmit(e) {
      e.preventDefault(); // stop default form submit
      if (this.state.person.name != 0
        && this.state.person.height != 0
        && this.state.person.mass != 0
        && this.state.person.hair_color != 0
        && this.state.person.skin_color != 0
        && this.state.person.eye_color != 0
        && this.state.person.birth_year != 0
        && this.state.person.gender != 0 ) {
          peopleService.update(this.props.match.params.name, this.state.person).then(() => this.props.history.push('/people'));
      }

  }

  removePerson() {
      peopleService.del(this.props.match.params.name).then(() => this.props.history.push('/people'));
  }

  changeCSS(e){
    e.preventDefault();
    this.setState({isDelete:true});
  }

  changeHTML(){
    return(
      <div className="activepopup">
        <h2>Ben je zeker dat je dit personage wilt verwijderen uit je matches?</h2>
        <p><button className="remove" type="button" onClick={(e) => this.removePerson(e)}><b>Verwijder</b></button></p>
        <p><button className="back" onClick={(e) => this.setState({isDelete: false})}><b>Terug</b></button></p>
      </div>
    )
  }



  render(){
    let backgroundLayer = '';
    let checkName = "red";
    let checkHeight = "red";
    let checkMass = "red";
    let checkHair = "red";
    let checkSkin = "red";
    let checkEye = "red";
    let checkBirth = "red";
    let checkGender = "red";
    let backgroundLayerContent = '' ;

    if (this.state.person.name) {
        checkName = "green";
    }

    if (this.state.person.height) {
        checkHeight = "green";
    }

    if (this.state.person.mass) {
        checkMass = "green";
    }

    if (this.state.person.hair_color) {
        checkHair = "green";
    }

    if (this.state.person.skin_color) {
        checkSkin = "green";
    }

    if (this.state.person.eye_color) {
        checkEye = "green";
    }

    if (this.state.person.birth_year) {
        checkBirth = "green";
    }

    if (this.state.person.gender) {
        checkGender = "green";
    }

    if (this.state.isDelete) {
        backgroundLayer = 'backgroundLayer';
        backgroundLayerContent = this.changeHTML();
    }

        return(
          <div>
          <div className={backgroundLayer}>{backgroundLayerContent}</div>
              <div className="home-content add">

                  <form action="" onSubmit={(e) => this.onSubmit(e)} >
                  <table>
                    <tr>
                      <td>
                      <label>Naam:</label>
                      <input  placeholder= "e.g. Horgei Fastbender" className={checkName} value={this.state.person.name} required onChange={(e) => this.updateName(e.target.value)}></input>
                      </td>
                      <td>
                      <label >Geboortejaar:</label>
                      <input placeholder= "e.g. 32 BBY" required className={checkBirth} value={this.state.person.birth_year} onChange={(e) => this.updateBirth(e.target.value)}></input >
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label>Hoogte:</label>
                      <input placeholder= "e.g. 128" required className={checkHeight} value={this.state.person.height} onChange={(e) => this.updateHeight(e.target.value)}></input>
                      </td>
                      <td>
                      <label >Massa:</label>
                      <input placeholder= "e.g. 99" required className={checkMass} value={this.state.person.mass} onChange={(e) => this.updateMass(e.target.value)}></input >
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label >Haarkleur:</label>
                      <input required placeholder= "e.g. black" className={checkHair} value={this.state.person.hair_color} onChange={(e) => this.updateHair(e.target.value)}></input >
                      </td>
                      <td>
                      <label >Huidskleur:</label>
                      <input placeholder= "e.g. green" required className={checkSkin} value={this.state.person.skin_color} onChange={(e) => this.updateSkin(e.target.value)}></input >
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label >Oogkleur:</label>
                      <input placeholder= "e.g. blue" required className={checkEye} value={this.state.person.eye_color} onChange={(e) => this.updateEye(e.target.value)}></input >
                      </td>
                      <td>
                      <label >Geslacht:</label>
                      <input placeholder= "e.g. male" required className={checkGender} value={this.state.person.gender} onChange={(e) => this.updateGender(e.target.value)}></input >
                      </td>
                    </tr>
                  </table>
                  <div className="btnCenter">
                    <button className ="editBtns" type="submit">Werk bij!</button>
                    <button className="delete editBtns" onClick={(e) => this.changeCSS(e)}>Verwijder personage</button>
                  </div>
                  </form>
              </div>
          </div>
        )



  }
}

export default Detail;
