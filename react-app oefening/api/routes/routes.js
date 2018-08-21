const config = require('../config');
let people = require('../people');



const appRouter = (app) => {
    // get all characters 
    app.get('/people', (req, res) => {
        console.log('Get all people');

        if(people) {
            res.send({
                status: config.STATUS.OK,
                message: people,
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not find any person',

            });
        }
    });

    // get character details
    app.get('/people/detail/:name', (req, res) => {
        let person = null;
        console.log('Get Person', req.params.name);

        if(people && people.length) {
            person = people.filter((person) => ('' + person.name) === req.params.name);
        }
        if(person) {
            res.send({
                status: config.STATUS.OK,
                message: person[0],
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not find any person',
            });
        }
    });

    // add character
    app.post('/add', (req, res) => {

        let person = req.body;

        people.push(person);

        if(people[people.length - 1] === person) {
            res.send({
                status: config.STATUS.OK,
                message: person,
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not add person',
            });
        }
    });

    // update character
    app.put('/people/detail/:name', (req, res) => {
        let person = null;
        console.log('update person', req.body);

        if(people && people.length) {
            person = people.filter((person) => ('' + person.name) === req.params.name);
        }

        if(person[0]) {
            // characters[req.params.id] = req.body;
            people = people.map((s) => {
                return ('' + s.name) === req.params.name ? req.body : s;
            })

            res.send({
                status: config.STATUS.OK,
                message: req.body,
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not find person for update',
            });
        }


    });

    // remove character
    app.delete('/people/detail/:name', (req, res) => {
        console.log('Remove person', req.params.name);
        people = people.filter((person) => ('' + person.name) !== req.params.name);

        res.send({
            status: config.STATUS.OK,
            message: 'person removed',
        });
    });

    app.delete('/people', (req, res) => {

        people = [];
        res.send({

            status: config.STATUS.OK,
            message: 'person removed',
        });
    });



}

module.exports = appRouter;
