import { shallow, mount } from "enzyme";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard";
import renderer from "react-test-renderer";
import Container from "../components/CurrencyConversion/Container";
import Counter from "../pages/Counter";

describe("Login component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Login />);
  });
  test("Number of input boxes to be 2", () => {
    expect(wrapper.find("input").length).toBe(2);
  });

  test("Input should be empty", () => {
    expect(wrapper.find("input[name='email']").props().value).toBe("");
  });

  test("Login button", () => {
    expect(wrapper.find("button").text()).toBe("Login");
  });

  test("snapshot matching", () => {
    const tree = renderer.create(<Login />);
    expect(tree).toMatchSnapshot();
  });

  // test("Dashboard", () => {
  //   const dashboardWrapper = mount(<Counter />);
  //   console.log(dashboardWrapper.debug());
  // });
});
