import React from "react";
import iphoneimg from "../../src/assest/products/Phụ Kiện/iphone-12-5755365_1920.jpg";
const AboutUs = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-semibold mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">Chào mừng đến với PT SHOP!.</p>
            <p className="text-gray-600 mb-4">
              Chúng tôi tự hào là điểm đến hàng đầu cho những tín đồ công nghệ
              đam mê các sản phẩm điện thoại thông minh hiện đại nhất.
            </p>
            <p className="text-gray-600 mb-4">
              Tại PT SHOP, chúng tôi mang đến cho bạn một bộ sưu tập đa dạng các
              dòng điện thoại từ những thương hiệu Apple.
            </p>
            <p className="text-gray-600 mb-4">
              Hãy đến với PT Shop để khám phá thế giới điện thoại với mức giá
              cạnh tranh và nhiều ưu đãi hấp dẫn. Chúng tôi tin rằng, mỗi chiếc
              điện thoại không chỉ là công cụ liên lạc mà còn là người bạn đồng
              hành cùng bạn trong công việc, học tập và cuộc sống hàng ngày.
            </p>
          </div>
          <div className="lg:w-1/3 flex flex-col items-start lg:items-end space-y-4 mt-10 lg:mt-0">
            <div className="text-right">
              <h3 className="text-4xl font-bold text-center">10</h3>
              <p className="text-gray-500">Cửa hàng trên toàn quốc</p>
            </div>
            <div className="text-right">
              <h3 className="text-4xl font-bold text-center">100</h3>
              <p className="text-gray-500">Nhân viên đang làm việc</p>
            </div>
            <div className="text-right">
              <h3 className="text-4xl font-bold text-center">10 000</h3>
              <p className="text-gray-500">Khách hàng mới mỗi năm </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto">
          <img
            src={iphoneimg}
            alt="Group of People"
            className="w-full rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
