
import './App.css';
import { MyTravels } from './MyTravels';
import { useEffect, useState } from 'react';
import { getAllTravels, addTravel, editTravel, deleteTravel } from './FetchTravels';


function App() {

  const [myTravel, setTravel] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [travelId, setTravelId] = useState("");


  useEffect(() => {
    getAllTravels(setTravel)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setTravelId(_id)
  }

  return (
    <div className="App">
      <h1>Travel Plans</h1>
      <input
      type ="text"
      placeholder = "My next destination.."
      value = { title }
      onChange = {(e) => setTitle(e.target.value)}
      />
      <button 
      disabled = {!title}
      onClick=
      {editing ?() =>editTravel(travelId, title, setTravel, setTitle, setEditing) : () =>addTravel(title, setTitle, setTravel)}>{editing ? "edit" : "Add"}
      </button>


    {/*<MyTravels text="We got here!"/>*/}

    {myTravel.map((travel) =><MyTravels text = {travel.title} key={travel._id}
      updatingInInput={() => updatingInInput(travel._id, travel.title)}
      deleteTravel={() => deleteTravel(travel._id, setTravel)}
      />
    )}
      
    </div>
  );
  
}

export default App;
