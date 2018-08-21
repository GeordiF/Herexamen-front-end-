let url = "http://localhost:3001";

export const getAll = () => {
    return fetch(url + '/people').then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const get = (name) => {
    return fetch(url + `/people/detail/${name}`).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}


export const add = (person) => {
    return fetch(url + '/add', {
        method: 'POST',
        body: JSON.stringify(person),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}


export const update = (name, person) => {
    return fetch(url +`/people/detail/${name}`, {
        method: 'PUT',
        body: JSON.stringify(person),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const del = (name) => {
    return fetch(url + `/people/detail/${name}`, {
        method: 'DELETE',
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const delAll = () => {
    return fetch(url +`/people`, {
        method: 'DELETE',
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}
