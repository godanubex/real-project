import React, { Fragment, useContext } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import UsersContext from "../store/users-context";

import styles from "./UsersList.module.css";

const UsersList = () => {
  const usersCtx = useContext(UsersContext);
  <div className="Store">
    <button className="btn btn-primary">แสดงรายการสินค้า</button>
  </div>
};

export default UsersList;
