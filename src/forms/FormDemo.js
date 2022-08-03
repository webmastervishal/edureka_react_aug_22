import React from "react";

class FormDemo extends React.Component {
  constructor() {
    super();

    this.state = { name: "", rollNo: 0, error: "" };
  }
  //   handleName = (e) => {
  //     // console.log("you are typing...", e.target.value);
  //     this.setState({ name: e.target.value });
  //   };

  handleRollNo = (e) => {
    // console.log("you are typing...", e.target.value);
    if (!Number(e.target.value)) {
      this.setState({ error: "please input number" });
    } else {
      this.setState({ rollNo: e.target.value });
    }
  };

  //   handleForm = (e) => {
  //     e.preventDefault();
  //     console.log("form data", e.target["name"].value);
  //     this.setState({
  //       name: e.target["name"].value,
  //       rollNo: e.target["rollNo"].value,
  //     });
  //   };

  render() {
    return (
      <>
        <h1>Register Yourself</h1>
        <p>User name is : {this.state.name}</p>
        <p>Roll no is : {this.state.rollNo}</p>
        <form onSubmit={this.handleForm}>
          <input type="text" name="name" placeholder="please input your name" />
          <input
            type="text"
            name="rollNo"
            placeholder="please input roll no"
            onChange={this.handleRollNo}
          />
          {this.state.error}
          <input type="submit" name="login" />
        </form>
      </>
    );
  }
}

export default FormDemo;
