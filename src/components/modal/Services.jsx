import { useState } from "react";
import Input from "../input/Input";
import {
  fa0,
  faBusinessTime,
  faCheck,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import services from "../objects/services";
import AddedRadio from "../input/AddedRadio";
import addedServices from "../objects/addedServices";
const Services = () => {
  // const [selectedService, setSelectedService] = useState(false);
  // const [selectedAddedService, setSelectedAddedService] = useState(false);
  // const handleChangeCheckBox = (id) => {
  //   setSelectedService(id);
  // };
  // const handleAddedRadio = (id) => {
  //   setSelectedAddedService(id);
  // };

  const service = useSelector((state) => state.book.value.service);
  const show = useSelector((state) => state.book.value.showInput);

  return (
    <div>
      <p className="display-9">
        <FontAwesomeIcon icon={faBusinessTime} /> Services
      </p>
      <p>
        <FontAwesomeIcon icon={faUser} /> Service for you
      </p>
      <div className="d-flex justify-content-between">
        {services.map((service) => (
          <Input
            label={service.service}
            key={service.id}
            type={"radio"}
            className={"form-check-input"}
            //checked={service.id === selectedService}
            value={service.id}
            //onChange={() => handleChangeCheckBox(service.id)}
            icon={service.icon}
          />
        ))}
      </div>
      {show && (
        <>
          <p>
            <FontAwesomeIcon icon={faUserFriends} /> Service for added client
          </p>
          <div className="d-flex justify-content-between">
            {addedServices.map((service) => (
              <AddedRadio
                label={service.service}
                key={service.id}
                type={"radio"}
                className={"form-check-input"}
                // checked={service.id === selectedAddedService}
                value={service.id}
                //onChange={() => handleAddedRadio(service.id)}
                icon={service.icon}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
