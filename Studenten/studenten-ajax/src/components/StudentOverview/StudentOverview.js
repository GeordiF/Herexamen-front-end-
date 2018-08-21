import * as React from 'react';
import Student from './Student';
import * as studentService from '../../services/students.service';

export default class StudentOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
    }

    // React lifecycle event
    // https://reactjs.org/docs/react-component.html#the-component-lifecycle
    componentWillMount() {
        studentService.getAll().then(response => this.setState({ students: response.message }));
    }

    renderStudents() {
        return this.state.students.map((student, i) => (<li key={i}><Student avatar={student.avatar} name={student.name} id={student.id} /></li>));
    }

    render() {
        return (
            <section>
                <div className="wrapper">
                    <h2>Alle studenten</h2>

                    <ul className="people">
                        {this.state.students.length ? this.renderStudents() : (<p>Geen studenten gevonden</p>)}
                    </ul>
                </div>
            </section>);
    }
};
        