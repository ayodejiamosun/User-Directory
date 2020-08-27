import React from "react";
import "./wrapper.css";


function Wrapper(props) {
  return (
  <div className="wrapper">
        <form className="search">
      <div className="form-group">
        <label>Search By Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="term"
          type="text"
          className="form-control"
          placeholder="Name"
          id="term"
        />
        <button onClick={(e) => props.searchByName(e)}>Enter</button>
      </div>
    
    </form>
    {props.children}</div>

  )
}

export default Wrapper;