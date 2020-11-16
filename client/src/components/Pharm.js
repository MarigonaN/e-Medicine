import React, { useState, useContext, useEffect } from "react";
import PharmItem from "./PharmItem";
import PharmService from "../services/PharmServices";
import { AuthContext } from "../context/AuthContext";
import Pharmacy from "./pharmacy/Pharmacy";
import SecondNavbar from "./SecondNavbar";
import Footer from "./Footer";
import Message from "./Message";
const Pharm = (props) => {
  const [pharm, setPharm] = useState({ name: "" });
  const [pharms, setPharms] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    PharmService.getPharms().then((data) => {
      setPharm(data.pharms);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    PharmService.postPharm(pharm).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        PharmService.getPharms().then((getData) => {
          setPharms(getData.pharms);
          setMessage(message);
        });
      } else if (message.msgBody === "UnAuthorised") {
        setMessage(message);
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  const onChange = (e) => {
    setPharm({ name: e.target.value });
  };
  const resetForm = () => {
    setPharm({ name: "" });
  };
  return (
    <div>
      <SecondNavbar />

      <Pharmacy />
      <div className="list-group">
        <div style={{ color: "black", marginLeft: "20px", marginTop: "20px" }}>
          {pharms.map((pharm) => {
            return <PharmItem key={pharm._id} pharm={pharm} />;
          })}
        </div>
        <br></br>
        <form onSubmit={onSubmit} className="submitForm">
          <input
            type="text"
            name="pharm"
            value={pharm.name}
            onChange={onChange}
            className="form-control"
            placeholder="Any suggestion"
          />
          <button
            className="btn btn-lg btn-block"
            type="submit"
            style={{ backgroundColor: "rgba(128, 128, 128, 0.226)" }}
          >
            Submit
          </button>
        </form>
        {message ? <Message message={message} /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default Pharm;
