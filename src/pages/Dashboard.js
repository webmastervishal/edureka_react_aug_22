import React from "react";
import Container from "../components/CurrencyConversion/Container";
import Layout from "./../layout";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Container />
      </Layout>
    );
  }
}

export default Dashboard;
