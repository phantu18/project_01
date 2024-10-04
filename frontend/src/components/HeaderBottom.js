import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import ROLE from "../common/role";
import Context from "../context";

const HeaderBottom = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };
  return (
    <header className="h-16 shadow-md bg-[#F5F5F3] w-full z-10">
      <div className=" h-full container mx-auto flex items-center justify-between">
        <div className="relative flex justify-center z-30">
          <div
            className="text-3xl cursor-pointer relative flex justify-center items-center"
            onClick={() => setMenuDisplay((prev) => !prev)}
          >
            {user?.profilePic ? (
              <>
                <img
                  src={user?.profilePic}
                  className="w-10 h-10 rounded-full"
                  alt={user?.name}
                />
                <span className="ml-2 text-lg font-medium">{user?.name}</span>
              </>
            ) : (
              <FaRegUser />
            )}
          </div>

          {menuDisplay && (
            <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
              <nav>
                {user?.role === ROLE.ADMIN && (
                  <Link
                    to={"/admin-panel/all-products"}
                    className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                    onClick={() => setMenuDisplay((preve) => !preve)}
                  >
                    Admin Panel
                  </Link>
                )}
              </nav>
            </div>
          )}
        </div>

        <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
          <input
            type="text"
            placeholder="Search product here..."
            className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
            onChange={handleSearch}
            value={search}
          />
          <GrSearch className="w-5 h-5" />
        </div>

        <div className="flex items-center gap-7">
          {user?._id && (
            <Link to={"/cart"} className="text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>

              <div className="bg-black text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">{context?.cartProductCount}</p>
              </div>
            </Link>
          )}

          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-3 py-2  text-white rounded-md bg-black hover:bg-red-600 hover:text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="px-3 py-2  text-white bg-black rounded-md"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBottom;
