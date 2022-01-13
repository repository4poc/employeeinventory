import React, { Component } from "react";
import { getTodos } from "../../../src/data";

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getTodos(),
    };
  }

  render() {
    return (
      <div>
        <h1>Employee </h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Emp.Id</th>
                <th>Full Name</th>
                <th>Status</th>
                <th>Creation Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr>
                  <td>{todo.empid}</td>
                  <td>{todo.Name}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
