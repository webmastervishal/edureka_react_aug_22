import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import actions from "./actions";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchCurrencies();
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
  fetchCurrencies: actions.fetchCurrencies,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
