import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Forgotpassword = () => {
  const navigate = useNavigate()
  const handleReset = async (e) => {
    e.preventDefault();
    console.log(e)
    const emailVar = e.target.email.value;
    console.log(emailVar)
    sendPasswordResetEmail(auth, emailVar)
      .then((data) => {
        alert("Check your gmail")
        navigate("/mysignin")
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={(e) => handleReset(e)}>
        <input placeholder="email" type="email" name="email" />
        <button>Reset</button>
      </form>
    </div>
  );
};

export default Forgotpassword;
