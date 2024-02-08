import { useState } from "react";
import Input from "../input/Input";

const Services = () => {
  const [selectedService, setSelectedService] = useState(false);
  const [services, setServices] = useState([
    {
      id: 1,
      service: "Shave",
    },
    {
      id: 2,
      service: "Haircut",
    },
    {
      id: 3,
      service: "Hair Styling",
    },
    {
      id: 4,
      service: "Beard Trim ",
    },
  ]);
  const handleChangeCheckBox = (id) => {
    setSelectedService(true);
  };
  return (
    <div>
      {services.map((service) => (
        <Input
          key={service.id}
          type={"checkbox"}
          label={service.service}
          className={"form-check-input"}
          checked={service.id === services.id}
          value={service.id}
        />
      ))}
    </div>
  );
};

export default Services;
