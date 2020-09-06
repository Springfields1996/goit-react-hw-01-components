import React, { useState } from "react";

const initialState = {
  message: "",
  owner: "",
};

export function DropMenu({ getMessage }) {
  const [state, setState] = useState({ ...initialState });
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    getMessage(state);
  };
  const handleChange = ({ target: { value, name } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <h2> Menu </h2>
      <button onClick={() => getMessage("create new")}>Agree</button>
      <form onSubmit={handleSubmitForm}>
        <input onChange={handleChange} name="message" />
        <input onChange={handleChange} name="owner" />
        <input onChange={handleChange} name="comment" />

        <button type="submit">SEND</button>
      </form>
    </div>
  );
}
