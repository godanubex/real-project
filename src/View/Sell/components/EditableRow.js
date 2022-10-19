import React, { useContext } from "react";
import UsersContext from "../store/users-context";
import Button from "./UI/Button";
import axios from "axios";
import RegistrationForm from "./RegistrationForm";
import ReactDOM  from "react-dom";

const EditableRow = () => {
  const usersCtx = useContext(UsersContext);
  

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={usersCtx.editUserData.name}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter linename"
          name="linename"
          value={usersCtx.editUserData.linename}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="file"
          placeholder="Enter Pic"
          name="Pic"
          value={usersCtx.editUserData.Pic}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter exp"
          name="exp"
          value={usersCtx.editUserData.exp}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter ProNumber"
          name="ProNumber"
          value={usersCtx.editUserData.ProNumber}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td>
        <input
          type="number"
          placeholder="Enter price"
          name="price"
          value={usersCtx.editUserData.price}
          onChange={usersCtx.onEditInputChange}
          required
        ></input>
      </td>
      <td></td>
      <td>
        <Button type="submit" onClick={usersCtx.onEditSave}>
         
          Save
        </Button>
      </td>
    </tr>
  );
};


export default EditableRow;
