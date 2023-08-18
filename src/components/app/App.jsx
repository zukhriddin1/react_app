import React from "react";
import useInputValidation from "../hook/usevalidate";

const MyButton = ({ children }) => {
  return <button className="mt-3 btn btn-success">{children}</button>;
};
const User = () => {
  const firstname = useInputValidation("");
  const lastName = useInputValidation("");

  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <h1>Register</h1>
        <div className="d-flex gap-3">
          <input
            type="text"
            className={`form-control ${firstname.validateColor}`}
            placeholder="First name"
            value={firstname.value}
            onChange={firstname.onChange}
          />
          <input
            type="text"
            className={`form-control ${lastName.validateColor}`}
            placeholder="Last name"
            value={lastName.value}
            onChange={lastName.onChange}
          />
        </div>
        <MyButton>Send</MyButton>
      </div>
    </div>
  );
};

export const App = () => {
  return <User />;
};

export default App;
