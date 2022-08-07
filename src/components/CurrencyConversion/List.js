import React from "react";
import Item from "./Item";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import actions from "./actions";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const res = await fetch(
      "https://webmaster-fake-api.herokuapp.com/currencies",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
    );

    const result = await res.json();

    this.props.storeCurrencies(result);
  }

  render() {
    return (
      <>
        {this.props.currencies.map((currency) => {
          return <Item currency={currency} value={this.props.value} />;
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencies: state.currency.currencies,
    value: state.currency.value,
  };
};

const mapDispatchToProps = {
  storeCurrencies: actions.storeCurrencies,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
