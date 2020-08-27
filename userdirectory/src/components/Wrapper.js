import React from "react";
import "./wrapper.css";


function Wrapper(props) {
  return (
  <div className="wrapper">
        <form className="search">
      <div className="form-group">
        <label>SearchByName:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Name"
          id="term"
        />
      </div>
    
    </form>
    {props.children}</div>

  )
}

export default Wrapper;