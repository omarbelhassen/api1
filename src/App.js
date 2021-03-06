import React , {useState , useEffect} from"react";
import axios from "axios" ;
import "./App.css";

import UserList from "./Components/UserList.js";

function App () {
  const [users , setUsers] = useState ([]) ;
  const [error , setError] = useState (null) ;
  const getUsers = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/users") 
  .then(function(reponse) {
setUsers(reponse.data);
  })
  .catch(function(error){
    setError(error);
  });
  };
  useEffect (() => {
    getUsers();

  },[]);
  console.log(error);
  return (
    <div className="App">
      <div className="header"> User's List</div>
      <div className="user-container">
        <UserList data ={users}/>
      </div>
    </div>
  );
}
export default App ;