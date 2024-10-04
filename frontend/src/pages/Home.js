import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <BannerProduct />
      <CategoryList />
      <div className="divide-y divide-slate-200">
        <VerticalCardProduct category={"iphone"} heading={"Iphone"} />
        <VerticalCardProduct category={"airpods"} heading={" Airpods"} />
        <VerticalCardProduct category={"ipad"} heading={"Ipad"} />
        <VerticalCardProduct category={"mac"} heading={"Mac"} />
        <VerticalCardProduct category={"watch"} heading={"Apple Watch"} />
        <VerticalCardProduct category={"phukien"} heading={"Phụ Kiện"} />
      </div>
    </div>
  );
};

export default Home;
