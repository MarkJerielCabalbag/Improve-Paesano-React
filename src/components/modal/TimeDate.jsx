import React from "react";
import Input from "../input/Input";
import {
  faCalendarDay,
  faClock,
  faTimeline,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Select from "../input/Select";
import { useDispatch, useSelector } from "react-redux";
import { selectedTime } from "../../state/state";
import time from "../objects/time";

const TimeDate = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.book.value.timeValue);
  console.log(time);
  const handleChangeTime = (e) => {
    dispatch(selectedTime(e.target.value));
  };
  return (
    <div className="d-flex justify-content-between mt-3">
      <div className="d-flex flex-column" style={{ width: "50%" }}>
        <Input
          type={"date"}
          label={"Check-in Date"}
          icon={faCalendarDay}
          className={"form-control"}
        />
      </div>
      <div className="d-flex flex-column" style={{ width: "49%" }}>
        <Select
          icon={faClock}
          label={"Check-in Time"}
          onChange={handleChangeTime}
        />
      </div>
    </div>
  );
};

export default TimeDate;
