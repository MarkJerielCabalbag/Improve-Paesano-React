import {
  faCheck,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const Sessions = () => {
  const service = useSelector((state) => state.book.value.serviceValue);
  return (
    <div>
      {service.map((service) => (
        <div key={service.id}>
          <p className="mt-4">
            <FontAwesomeIcon icon={faCheck} /> Session time
          </p>

          <p>
            <FontAwesomeIcon icon={faUser} /> Your estimated session time is:{" "}
            {service.session}
          </p>
        </div>
      ))}
      <AddedSession />
    </div>
  );
};

export default Sessions;

const AddedSession = () => {
  const addedService = useSelector(
    (state) => state.book.value.addedServiceValue
  );
  const show = useSelector((state) => state.book.value.showInput);
  return (
    <>
      {show && (
        <>
          {addedService.map((service) => (
            <p key={service.id}>
              <FontAwesomeIcon icon={faUserFriends} /> Your companion estimated
              session is: {service.session}
            </p>
          ))}
        </>
      )}
    </>
  );
};
