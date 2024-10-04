import React from "react";

const jobs = [
  {
    title: "iPhone 13 128GB giá từ 17.790.000 đồng, trả góp 0%",
    description:
      "iPhone 13 128GB giá từ 17.790.000 đồng, giảm đến 3.2 triệu, trả góp 0% chỉ từ 60K/ngày tại PT Shop.",

    location: "Bình Dương, VN",
  },
  {
    title: " iPhone 15 Pro Max 256GB đang có mức giá cực sốc tại PT Shop",
    description:
      "iPhone 15 Pro Max 256GB giá từ 34.990.000 đồng, giảm đến 5.4 triệu, trả góp 0% chỉ từ 80K/ngày.",

    location: "Bình Dương, VN",
  },
  {
    title:
      "Phụ kiện Apple, Apple Watch, iPad, MacBook giảm đến 3 triệu khi mua kèm iPhone 16 Series mới",
    description:
      "iPhone 16 Series mới đã chính thức ra mắt, mang đến những công nghệ đỉnh cao. Và còn gì tuyệt vời hơn khi sở hữu siêu phẩm này cùng loạt phụ kiện Apple, Apple Watch, iPad, MacBook giảm giá đến 3 triệu.",

    location: "Bình Dương, VN",
  },
];

const Blog = () => {
  return (
    <div className=" flex p-8 flex-col md:flex-row justify-between items-start md:p-20">
      <div className="md:w-1/2 space-y-4 pr-10">
        <a href="https://www.topzone.vn/tekzone/giam-gia-goi-bao-hanh-roi-vo-khi-mua-iphone-16-series-tai-topzone-1570402">
          <h1 className="text-3xl font-bold">
            Giảm đến 30% gói bảo hành rơi vỡ khi mua iPhone 16 Series tại PT
            Shop, nhanh tay sở hữu ngay!
          </h1>
        </a>
        <p className="text-gray-600">
          Sở hữu iPhone 16 Series, an tâm tận hưởng mọi khoảnh khắc! PT Shop
          mang đến ưu đãi đặc biệt.
        </p>
        <img
          src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1727967531/product_pat/he9wmokcrsduiiax4ihp.jpg"
          alt="Office"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      <div className="md:w-1/2 space-y-8 mt-8 md:mt-0 ">
        {jobs.map((job) => (
          <div className="border-b py-4">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
            <div className="mt-2 flex items-center space-x-4">
              <a
                href="https://www.topzone.vn/tekzone"
                className="text-indigo-600 font-medium"
              >
                Read more →
              </a>
              <span className="text-gray-500">{job.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
