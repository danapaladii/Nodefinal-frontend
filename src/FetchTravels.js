import axios from 'axios';

const getAllTravels = (setTravel) => {
    axios.get("http://localhost:8000")
    .then(({data}) => {console.log(data)
        setTravel(data);
    })
}

const addTravel = (title, setTitle, setTravel) => {
    axios.post(`http://localhost:8000/saveTravels`, {title})
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllTravels(setTravel)
    })
}

const editTravel = (travelId, title, setTitle, setTravel, setEditing) => {
    axios.put(`http://localhost:8000/editTravel`, {_id: travelId, title})
    .then((data)=> {
        console.log(data);
        setTitle("");
        setEditing(false);
        getAllTravels(setTravel)
    })
}

const deleteTravel = (_id, setTravel) => {
    axios.delete(`http://localhost:8000/deleteTravel`, { data: {_id}, })
    .then((data) => {
        console.log(data)
        getAllTravels(setTravel)
    })
}

export {getAllTravels, addTravel, editTravel, deleteTravel};
