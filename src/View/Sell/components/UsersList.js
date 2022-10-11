import React, { Fragment, useContext } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import UsersContext from "../store/users-context";

import styles from "./UsersList.module.css";

const UsersList = () => {
  const usersCtx = useContext(UsersContext);

  return (
    <div className={styles.userList}>
      <h1>คลังสินค้า</h1>
      <div className={styles.tableFlow}>
        <form>
          <table>
            <thead>
              <tr>
                <th>ชื่อสินค้า</th>
                <th>ชื่อไลน์</th>
                <th>รูปภาพ</th>
                <th>คำอธิบายสินค้า</th>
                <th>จำนวนสินค้า</th>
                <th>ราคาสินค้า</th>
                <th></th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersCtx.users.map((user) => (
                <Fragment key={user.id}>
                  {usersCtx.editUserId === user.id ? (
                    <EditableRow />
                  ) : (
                    <ReadOnlyRow user={user} />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default UsersList;
