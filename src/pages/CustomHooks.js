import React from "react";
import Layout from "../layout";
import First from "./../components/hooks/First";
import Second from "./../components/hooks/Second";

const CustomHooks = () => {
  return (
    <Layout>
      <h1>CustomHooks</h1>
      <First />
      <Second />
    </Layout>
  );
};

export default CustomHooks;
