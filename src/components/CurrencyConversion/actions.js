const actions = {
  STORE_VALUE: "STORE_VALUE",
  storeValue: (payload) => {
    return {
      type: actions.STORE_VALUE,
      payload,
    };
  },
  STORE_CURRENCIES: "STORE_CURRENCIES",
  storeCurrencies: (payload) => {
    return {
      type: actions.STORE_CURRENCIES,
      payload,
    };
  },
};

export default actions;
