import React from "react";
import { connect } from "react-redux";
import actions from "./actions";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  handleValue = (e) => {
    this.props.storeValue(e.target.value);
  };

  render() {
    return (
      <>
        <input
          id="currency-value"
          type="text"
          name="value"
          value={this.props.value}
          onChange={this.handleValue}
        />
      </>
    );
  }
}

//mapstatetoprops -> this will fetch state from reduxx store and inject that into component props
const mapStateToProps = (state) => {
  return { value: state.currency.value };
};

//mapDispatchToProps -> it will inject actions from actions.js into the props
const mapDispatchToProps = {
  storeValue: actions.storeValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
