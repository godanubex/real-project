import { createContext, useState, useEffect } from "react";
import axios from 'axios';

let isInitial = true;

const UsersContext = createContext({
  users: [],
  editUserId: null,
  editUserData: {
    name: "",
    linename: "",
    Pic: "",
    exp: "",
    ProNumber: "",
    price: "",
  },
  onAddUserHandler: (user) => {},
  onDeleteHandler: (event, userId) => {},
  onEditInputChangeHandler: (event) => {},
  onEditHandler: (event, user) => {},
  onEditSaveHandler: (event) => {},
});

export function UsersContextProvider(props) {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({
    name: "",
    linename: "",
    Pic: "",
    exp: "",
    ProNumber: "",
    price: "",
  });

  useEffect(() => {
    if (isInitial) {
      const localData = JSON.parse(localStorage.getItem("users"));
      localData && setUsers(localData);
      isInitial = false;
    } else {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  const onAddUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const onDeleteHandler = (event, userId) => {
   
    event.preventDefault();
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);

    let str1 = 'ssss' + 1; //ssss1
    let str = `ssss${1}` //ssss1
    console.log('Im here ====> : http://localhost:3001/delete/'+ userId)
    axios.post('http://localhost:3001/delete/'+ userId, (res)=>{

    })
  };
  

  const onEditInputChangeHandler = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
 console.log("123")
    const newUserData = { ...editUserData };
    newUserData[fieldName] = fieldValue;
console.log(newUserData)

    setEditUserData(newUserData);
    console.log(newUserData,"Userdata")
  };

  const onEditHandler = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      name: user.name,
      linename: user.linename,
      Pic: user.Pic,
      exp: user.exp,
      ProNumber: user.ProNumber,
      price: user.price,
    };
    setEditUserData(formValues);
  };

  const onEditSaveHandler = (event) => {
    event.preventDefault();
   console.log(editUserData.map)
    const editedUser = {
      id: editUserId,
      name: editUserData.name,
      linename: editUserData.linename,
      Pic: editUserData.Pic,
      exp: editUserData.exp,
      ProNumber: editUserData.ProNumber,
      price: editUserData.price,
    };

    const updatedUsers = [...users];
    const index = users.findIndex((user) => user.id === editUserId);
    updatedUsers[index] = editedUser;

   
   const updateEmployee = (id) => {
      axios.post('http://localhost:3001/update', {formValues:editUserData, id:id}).then((response)=>{
        setEditUserData(
          editUserData.map((val)=>{
            return val.id == id ?{
              id: val.id,
              name: editUserData.name,
              linename: editUserData.linename,
              Pic: editUserData.Pic,
              exp: editUserData.exp,
              ProNumber: editUserData.ProNumber,
              price: editUserData.price
            }:val;
           } )
        )
      })
    }
    
    setUsers(updatedUsers);
    setEditUserId(null);
    
  };
  
 
  const context = {
    users: users,
    editUserId: editUserId,
    editUserData: editUserData,
    onAddUser: onAddUserHandler,
    onDelete: onDeleteHandler,
    onEditInputChange: onEditInputChangeHandler,
    onEditSave: onEditSaveHandler,
    onEdit: onEditHandler,
  };

  return (
    <UsersContext.Provider value={context}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersContext;
