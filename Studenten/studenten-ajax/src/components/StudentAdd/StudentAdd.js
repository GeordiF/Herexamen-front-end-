import * as React from 'react';
import * as studentService from '../../services/students.service';

export default class StudentAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: {
                firstName: '',
                lastName: '',
                name: '',
                courses: [],
                group: '',
                avatar: '/images/studenten/anoniem.jpg',
            }
        };
    }

    deleteAvatar() {
        this.setState({
            ...this.state,
            student: {
                ...this.state.student,
                avatar: '/images/studenten/anoniem.jpg'
            }
        });
    }

    updateFirstName(firstName) {
        this.setState({
            ...this.state,
            student: {
                ...this.state.student,
                firstName,
                name: `${firstName} ${this.state.student.lastName}`,
            }
        });
    }

    updateLastName(lastName) {
        this.setState({
            ...this.state,
            student: {
                ...this.state.student,
                lastName,
                name: `${this.state.student.firstName} ${lastName}`,
            }
        });
    }

    updateGender(gender) {
        this.setState({
            ...this.state,
            student: {
                ...this.state.student,
                gender,
            }
        });
    }

    updateGroup(group) {
        this.setState({
            ...this.state,
            student: {
                ...this.state.student,
                group,
            }
        });
    }

    updateCourse(course) {
        let courses = [...this.state.student.courses]; // copy
            
        if(courses.includes(course)) {
            courses = courses.filter(c => c !== course); // remove course
        } else {
            courses.push(course); // add course
        }

        this.setState({
            ...this.state,
            student: {
                ...this.state.student,
                courses,
            }
        });
    }

    onSubmit(e) {
        e.preventDefault(); // stop default form submit

        studentService.add(this.state.student).then(() => this.props.history.push('/students'));
    }

    render() { 
        return (
            <section className="main">
                <div className="wrapper">
                    <aside>
                        <div className="statistics">
                            <p>Gelieve alle velden in te vullen.<br />Van zodra je klaar bent klik je op "Toevoegen".</p>
                        </div>
                    </aside>
                    
                    <main>
                        <div className="wrapper">
                            <h2>Student toevoegen</h2>

                            <form action="" onSubmit={(e) => this.onSubmit(e)}>
                            
                                <div className="flex">
                                    <figure className="avatar big">
                                        <img src={this.state.student.avatar} alt="My avatar" />
                                    </figure>
                                    <div>
                                        <a className="btn">Foto uploaden</a><br />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="student-firstname">Voornaam</label>
                                    <input type="text" name="student-firstname" id="student-firstname" value={this.state.student.firstName} onChange={(e) => this.updateFirstName(e.target.value)} />
                                </div>

                                <div>
                                    <label htmlFor="student-lastname">Naam</label>
                                    <input type="text" name="student-lastname" id="student-lastname" value={this.state.student.lastName} onChange={(e) => this.updateLastName(e.target.value)} />
                                </div>
                                
                                <fieldset>
                                    <legend>Geslacht</legend>
                                    <label><input type="radio" name="gender" value="m" checked={this.state.student.gender === 'm'} onChange={(e) => this.updateGender(e.target.value)} /> Man</label>
                                    <label><input type="radio" name="gender" value="f" checked={this.state.student.gender === 'f'} onChange={(e) => this.updateGender(e.target.value)}  /> Vrouw</label>
                                </fieldset>
                                
                                <fieldset>
                                    <legend>Klasgroep(en)</legend>
                                    <label><input type="radio" name="group" value="a" checked={this.state.student.group === 'a'} onChange={(e) => this.updateGroup(e.target.value)} /> MT1 - groep a</label>
                                    <label><input type="radio" name="group" value="b" checked={this.state.student.group === 'b'} onChange={(e) => this.updateGroup(e.target.value)} /> MT1 - groep b</label>
                                    <label><input type="radio" name="group" value="c" checked={this.state.student.group === 'c'} onChange={(e) => this.updateGroup(e.target.value)} /> MT1 - groep c</label>
                                </fieldset>
                                
                                <fieldset>
                                    <legend>Vak(ken)</legend>
                                    <label><input type="checkbox" name="course" value="web-standards-1" checked={this.state.student.courses.includes('web-standards-1')} onChange={(e) => this.updateCourse(e.target.value)}  /> Web Standards 1</label>
                                    <label><input type="checkbox" name="course" value="web-graphics-1" checked={this.state.student.courses.includes('web-graphics-1')} onChange={(e) => this.updateCourse(e.target.value)} /> Web Graphics 1</label>
                                    <label><input type="checkbox" name="course" value="animation-1" checked={this.state.student.courses.includes('animation-1')} onChange={(e) => this.updateCourse(e.target.value)} /> Animation 1</label>
                                </fieldset>    
                                
                                <button type="submit">Aanpassingen bewaren</button>
                            </form>
                            
                        </div>
                    </main>
                </div>
            </section>);    
    };
}