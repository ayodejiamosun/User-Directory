import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employee.json";

class App extends Component {
  state = {
    employees,
    search:"",
    name:"term"
  };

  removeEmployee = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };

  searchByName = name => {
    const search = this.state.employees.filter(employee => employee.name !== name);
    this.setState({ search });
    console.log(search);
  }
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleSortingByname= () => {
    console.log("hey")
  }

  render() {
    return (
      <Wrapper
      >
        <Title>Employee List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            role={employee.role}
            email={employee.email}
          />
        ))}
          <button className="inline-block" onClick={this.handleSortingByname}>SortingByName</button>
      </Wrapper>
    );
  }
}

export default App;