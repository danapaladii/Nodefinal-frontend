import axios from 'axios';

const BASE_URL ='http://localhost:8000';

const getAllTravels = (setTravel) => {
    axios.get(BASE_URL)
    .then(({data}) => {console.log(data)
        setTravel(data);
    })
}

const addTravel = (title, setTitle, setTravel) => {
    axios.post(`${BASE_URL}/saveTravels`, {title})
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllTravels(setTravel)
    })
}

const editTravel = (travelId, title, setTitle, setTravel, setEditing) => {
    axios.put(`${BASE_URL}/editTravel`, {_id: travelId, title})
    .then((data)=> {
        console.log(data);
        setTitle("");
        setEditing(false);
        getAllTravels(setTravel)
    })
}

const deleteTravel = (_id, setTravel) => {
    axios.delete(`${BASE_URL}/deleteTravel`, { data: {_id}, })
    .then((data) => {
        console.log(data)
        getAllTravels(setTravel)
    })
}

export {getAllTravels, addTravel, editTravel, deleteTravel};
