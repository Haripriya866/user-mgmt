import { Component } from "react";

import axios from "axios";

import "./index.css";

class AddUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  };

  onChangeFirstname = (event) => {
    this.setState({
      firstName: event.target.value,
      errorMessage: "",
    });
  };
  onChangeLastname = (event) => {
    this.setState({
      lastName: event.target.value,
      errorMessage: "",
    });
  };
  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
      errorMessage: "",
    });
  };

  onChangeDepartment = (event) => {
    this.setState({
      department: event.target.value,
      errorMessage: "",
    });
  };

  renderFirstName = () => {
    const { firstName } = this.state;
    return (
      <div className="input-container">
        <input
          type="text"
          placeholder="First Name"
          className="input-field"
          value={firstName}
          onChange={this.onChangeFirstname}
        />
      </div>
    );
  };

  renderlastName = () => {
    const { lastName } = this.state;
    return (
      <div className="input-container">
        <input
          type="text"
          placeholder="Last Name"
          className="input-field"
          value={lastName}
          onChange={this.onChangeLastname}
        />
      </div>
    );
  };
  renderEmail = () => {
    const { email } = this.state;
    return (
      <div className="input-container">
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={this.onChangeEmail}
        />
      </div>
    );
  };

  renderDepartment = () => {
    const { department } = this.state;
    return (
      <div className="input-container">
        <input
          type="text"
          placeholder="Department"
          className="input-field"
          value={department}
          onChange={this.onChangeDepartment}
        />
      </div>
    );
  };

  validateFields = () => {
    const { firstName, lastName, email, department } = this.state;

    if (!firstName) return "First Name is required.";
    if (!lastName) return "Last Name is required.";
    if (!email) return "Email is required.";
    if (!department) return "Department is required.";

    return "";
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errorMessage = this.validateFields();
    if (errorMessage) {
      this.setState({ errorMessage });
      return; // Stop submission if validation fails
    }

    const { id, firstName, lastName, email, department } = this.state;
    const user = {
      id,
      firstName,
      lastName,
      email,
      department,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ errorMessage: "Failed to Add user." });
        console.error(error);
      });
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="userform-container">
        <form onSubmit={this.handleSubmit} className="form">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {this.renderFirstName()}
          {this.renderlastName()}
          {this.renderEmail()}
          {this.renderDepartment()}
          <button type="submit" className="userform-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default AddUser;
