import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <BannerProduct />
      <CategoryList />

      <HorizontalCardProduct category={"airpods"} heading={"Airpods"} />
      <HorizontalCardProduct category={"ipad"} heading={"Ipad"} />

      <VerticalCardProduct category={"iphone"} heading={"Iphone"} />
      <VerticalCardProduct category={"mac"} heading={"Mac"} />
      <VerticalCardProduct category={"watch"} heading={"Apple Watch"} />
      <VerticalCardProduct category={"tv"} heading={"TV"} />
      <VerticalCardProduct category={"phukien"} heading={"Phụ Kiện"} />
    </div>
  );
};

export default Home;
