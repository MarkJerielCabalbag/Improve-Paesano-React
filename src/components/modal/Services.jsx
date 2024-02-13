import { useState } from "react";
import Input from "../input/Input";
import {
  faBusinessTime,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import services from "../objects/services";
import AddedRadio from "../input/AddedRadio";
import addedServices from "../objects/addedServices";
import {
  serviceSelected,
  selectedRadio,
  addedService,
  selectedAddedRadio,
  showInput,
  selectedService,
} from "../../state/state";
const Services = () => {
  const show = useSelector((state) => state.book.value.showInput);
  const radio = useSelector((state) => state.book.value.selectedRadio);
  const addedRadio = useSelector(
    (state) => state.book.value.selectedAddedRadio
  );

  const disptach = useDispatch();

  const handleChangeRadio = (id) => {
    disptach(serviceSelected(id));
    disptach(selectedRadio(id));
  };

  const handleAddedChangeRadio = (id) => {
    disptach(addedService(id));
    disptach(selectedAddedRadio(id));
  };
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
            checked={service.id === radio}
            value={service.id}
            onChange={() => {
              handleChangeRadio(service.id);
              disptach(selectedService(service.service));
            }}
            icon={service.icon}
          />
        ))}
      </div>
      {show && (
        <>
          <p>
            <FontAwesomeIcon icon={faUserFriends} /> Service for your companion
          </p>
          <div className="d-flex justify-content-between">
            {addedServices.map((service) => (
              <AddedRadio
                label={service.service}
                key={service.id}
                type={"radio"}
                className={"form-check-input"}
                checked={service.id === addedRadio}
                value={service.id}
                onChange={() => {
                  handleAddedChangeRadio(service.id);
                }}
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
