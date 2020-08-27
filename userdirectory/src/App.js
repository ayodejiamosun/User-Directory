import React, { Component } from "react";
import FriendCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./Employee.json";

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

  }

  render() {
    return (
      <Wrapper
      >
        <Title>Friends List</Title>
        {this.state.employees.map(employee => (
          <FriendCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            role={employee.role}
            email={employee.email}
            phone={employee.phone}
          />
        ))}
          <button className="inline-block" onClick={this.handleSortingByname}>SortingByName</button>
      </Wrapper>
    );
  }
}

export default App;

export default App;
