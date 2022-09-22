import React from "react";
import Imgbackground from "../../components/bg";
import Breadcrumb from "../../components/Breadcrumb";
import ProductList from "../../components/ProductList";

function Home(props) {
  return (
    <>
      <Breadcrumb />
      <Imgbackground />
      <ProductList />
      <ProductList />
      <ProductList />
    </>
  );
}

export default Home;
