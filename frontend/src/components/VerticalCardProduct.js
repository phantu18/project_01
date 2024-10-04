import React, { useContext, useEffect, useRef, useState } from "react";
import fetchCategoryWiseProduct from "../helpers/fetchCategoryWiseProduct";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const VerticalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);
  const scrollElement = useRef();

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setLoading(false);

    console.log("horizontal data", categoryProduct.data);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };
  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 4; //

  const handleScrollRight = () => {
    if (startIndex + productsPerPage < data.length) {
      setStartIndex(startIndex + productsPerPage);
    }
  };

  const handleScrollLeft = () => {
    if (startIndex - productsPerPage >= 0) {
      setStartIndex(startIndex - productsPerPage);
    }
  };
  return (
    <div className="relative mx-auto max-w-2xl px-4 py-7 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 ">
      <h2 className="text-5xl text-center font-semibold py-11">{heading}</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 transition-transform duration-700 ease-in-out">
        {loading
          ? loadingList.map((product, index) => (
              <div
                key={index}
                className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow"
              >
                <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
                <div className="p-4 grid gap-3">
                  <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200"></h2>
                  <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-2"></p>
                  <div className="flex gap-3">
                    <p className="text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
                    <p className="text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
                  </div>
                  <button className="text-sm text-white px-3 rounded-full bg-slate-200 py-2 animate-pulse"></button>
                </div>
              </div>
            ))
          : data
              .slice(startIndex, startIndex + productsPerPage)
              .map((product, index) => (
                <Link
                  key={index}
                  to={"product/" + product._id}
                  className="p-5 transition-transform duration-500 ease-in-out hover:scale-105"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.productImage[0]}
                      className="object-scale-down w-full h-full mix-blend-multiply"
                      alt={product.productName}
                    />
                  </div>
                  <div className="mt-5 text-center justify-between">
                    <h3 className="font-medium mt-4 leading-8 text-black text-2xl">
                      {product.productName}
                    </h3>
                    <p className="mt-4 text-lg text-black">${product.price}</p>
                  </div>
                </Link>
              ))}
      </div>

      <div className="flex justify-end space-x-2 mt-8">
        <button
          onClick={handleScrollLeft}
          disabled={startIndex === 0}
          className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition-colors duration-300"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleScrollRight}
          disabled={startIndex + productsPerPage >= data.length}
          className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition-colors duration-300"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default VerticalCardProduct;
