import React from "react";
import bg from "../../assests/img/error-2.png";
const Error = () => {
  return (
    <div>
      <img
        src={bg}
        alt="error"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "130vh",
        }}
      ></img>
    </div>
  );
};

export default Error;
