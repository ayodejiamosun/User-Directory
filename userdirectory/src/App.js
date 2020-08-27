import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employee.json";

class App extends Component {
  state = {
    employees,
    search:""
  };

  removeEmployee = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };

  searchByName = e => {
    e.preventDefault();
    console.log(this.state.search);
    const search = this.state.employees.filter(employee => employee.name === this.state.search);
    this.setState({ 
      employees: search });
    console.log(search);
  }
  handleInputChange = event => {
    console.log(this.state.search);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleSortingByName= () => {
    const prevEmployees = this.state.employees
    prevEmployees.sort((a, b) => (a.name > b.name) ? 1 : -1);
    console.log(prevEmployees);
    this.setState({
      employees: prevEmployees
    })
  }

  render() {
    return (
      <Wrapper searchByName={this.searchByName}
      handleInputChange={this.handleInputChange}
      search={this.state.search}
      >
        <Title>Employee List</Title>
        {this.state.employees.sort((a,b) => {return a.name - b.name}).map(employee => (
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
          <button className="inline-block" onClick={this.handleSortingByName}>Sorting By Name</button>
      </Wrapper>
    );
  }
}

export default App;