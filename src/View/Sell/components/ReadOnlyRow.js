import React, { useContext, useState } from "react";
import UsersContext from "../store/users-context";
import { loadCoordinates } from "../coordinatesCheck";
import Button from "./UI/Button";
import axios from "axios";

const ReadOnlyRow = (props) => {
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const usersCtx = useContext(UsersContext);

  const onLoadCoordinates = async (event, user) => {
    event.preventDefault();
    setIsLoading(true);
    setLocation(await loadCoordinates(user));
    setIsLoading(false);
  };
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>{props.user.linename}</td>
      <td>{props.user.Pic}</td>
      <td>{props.user.exp}</td>
      <td>{props.user.ProNumber}</td>
      <td>{props.user.price}</td>
      <td>
        {isLoading && <span>Loading...</span>}
        {location && (
          <a
            href={location.linkToMap}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{location.coordinates.lat}</div>
            <div>{location.coordinates.lng}</div>
          </a>
        )}
      </td>
      <td>

        <Button onClick={(event) => usersCtx.onEdit(event, props.user)}>
          Edit
        </Button>
        <Button onClick={(event) => usersCtx.onDelete(event, props.user.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
