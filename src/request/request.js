import axios from "axios";

const sendData = (fields) => {
  axios.post("http://localhost:3000/api/v1/PropertyListing/", fields);
};

export default sendData;
