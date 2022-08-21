import Reducer from "./../components/CurrencyConversion/reducer";

describe("Currency coverter reducer", () => {
  test("Intialvalue of reducers", () => {
    expect(Reducer(undefined, { type: "INIT", payload: undefined })).toEqual({
      value: "",
      currencies: [],
    });
  });
});
