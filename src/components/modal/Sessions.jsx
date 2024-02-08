import {
  faCheck,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const Sessions = () => {
  const show = useSelector((state) => state.book.value.showInput);
  return (
    <div>
      <p className="mt-4">
        <FontAwesomeIcon icon={faCheck} /> Session time
      </p>
      <p>
        <FontAwesomeIcon icon={faUser} /> Your session time is: {}
      </p>

      {show && (
        <p>
          <FontAwesomeIcon icon={faUserFriends} /> Your added client session is:{" "}
        </p>
      )}
    </div>
  );
};

export default Sessions;
