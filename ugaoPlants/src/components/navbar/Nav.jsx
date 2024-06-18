// Nav.js
import React, { useContext, useState } from "react";
import logo from "../../assets/greenlogo.png";
import "./nav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../../common/Index";
import { toast } from "react-toastify";
import { setUserDetails } from "../../store/userSlice";
import ROLE from "../../common/Role";
import Context from "../../context";
import Cart from "../screens/homeComponent02/Cart"; // Import the Cart component

function Nav() {
  // for backend
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const [showCart, setShowCart] = useState(false); // State for cart offcanvas
  const navigate = useNavigate()
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search,setSearch] = useState(searchQuery)


  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/")

    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  const toggleCartOffcanvas = () => {
    setShowCart(!showCart);
  };
  const handleSearch = (e)=>{
    const { value } = e.target
    setSearch(value)

    if(value){
      navigate(`/search?q=${value}`)
    }else{
      navigate("/search")
    }
  }
  return (
    <div>
      <section>
        <nav className="navbar bgNav navbar-expand-lg fixed-top" tabIndex="3">
          <div className="container-fluid container-xl">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <img src={logo} alt="" />
            <div className="d-block d-lg-none">
              <i className="fa-solid fa-indian-rupee-sign px-2 py-1 ms-4 border border-success rounded-circle text-success"></i>
              <span>
                {user?._id ? (
                  <button
                    className="border-0 bg-transparent"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-circle-left fa-lg pt-3 px-2 text-success border-0"></i>
                  </button>
                ) : (
                  <Link to="/signin">
                    <i className="fa-solid fa-right-to-bracket pt-3 px-2 text-success"></i>
                  </Link>
                )}
              </span>
              <Link to="#" onClick={toggleCartOffcanvas}>
                      <i className="fa-solid fa-cart-shopping pt-3 px-2 text-success">
                        <sup className="text-white rounded-circle fw-bold bg-success px-2 py-1">
                          {context?.cartProductCount}
                        </sup>
                      </i>
                    </Link>
              <Link>
                <i className="fa-regular fa-user text-success pt-3 px-2"></i>
              </Link>
            </div>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <img src={logo} alt="" />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav  navbar-nav01 justify-content-center flex-grow-1 text-uppercase point12px fwbold mt-2">
                  <li className="nav-item dropdown-hover">
                    <Link
                      className="nav-link hover-line nav-font"
                      aria-current="page"
                      to="/"
                    >
                      plants
                    </Link>
                    <ul className="dropdown-menu dropdown-menu01 dropdown-item01">
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Plant Action</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Plants Action</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  dropdown-hover">
                    <Link className="nav-link hover-line nav-font" to="/seeds">
                      seeds
                    </Link>
                    <ul className="dropdown-menu dropdown-menu01 dropdown-item01">
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Plant Action</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Plant Action</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  dropdown-hover">
                    <a className="nav-link hover-line nav-font" href="#">
                      pots & planters
                    </a>
                    <ul className="dropdown-menu dropdown-menu01 dropdown-item01">
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Plant Action</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Plant Action</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  dropdown-hover">
                    <a className="nav-link hover-line nav-font" href="#">
                      Plant care
                    </a>
                    <ul className="dropdown-menu dropdown-menu01 dropdown-item01">
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Plant Action</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Plant Action</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  dropdown-hover">
                    <a className="nav-link hover-line nav-font" href="#">
                      gifting
                    </a>
                    <ul className="dropdown-menu dropdown-menu01 dropdown-item01">
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Plant Action</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Plant Action</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link nav-font hover-line" href="#">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link nav-font hover-line activegreen"
                      href="#"
                    >
                      Offer
                    </a>
                  </li>
                </ul>
                <form className="  w-25 d-none d-md-block" role="search">
                  <div className="search-box w-100 mt-2  d-flex flex-nowrap border border-dark rounded-5">
                    <input
                     onChange={handleSearch}
                     value={search}
                      className="form-control  border-0  p-2 px-3 rounded-5 input-text  "
                      type="search"
                      placeholder="Search for plants, seeds and planters..."
                      aria-label="Search"
                    />
                    <i className="fa-solid fa-magnifying-glass text-success"></i>
                  </div>
                </form>
                <div className="flex-nowrap d-none d-md-block">
                  <i className="fa-solid fa-indian-rupee-sign px-2 py-1 ms-4 border border-success rounded-circle text-success"></i>
                  <span>
                    {user?._id ? (
                      <button
                        className="border-0 bg-transparent"
                        onClick={handleLogout}
                      >
                        <i className="fa-solid fa-circle-left fa-lg pt-3 px-2 text-success border-0"></i>
                      </button>
                    ) : (
                      <Link to="/signin">
                        <i className="fa-solid fa-right-to-bracket pt-3 px-2 text-success"></i>
                      </Link>
                    )}
                  </span>
                  {user?._id && (
                    <Link to="#" onClick={toggleCartOffcanvas}>
                      <i className="fa-solid fa-cart-shopping pt-3 px-2 text-success">
                        <sup className="text-white rounded-circle fw-bold bg-success px-2 py-1">
                          {context?.cartProductCount}
                        </sup>
                      </i>
                    </Link>
                  )}
                  <span className="position-relative group">
                    {user?._id && (
                      <span
                        onClick={() => {
                          setMenuDisplay((preve) => !preve);
                        }}
                      >
                        <Link>
                          <i className="fa-regular fa-user text-success pt-3 px-2"></i>
                        </Link>
                      </span>
                    )}
                    {menuDisplay && (
                      <span className="popUPtext">
                        {user?.role === ROLE.ADMIN && (
                          <Link
                            to="/admin-panel/products"
                            className="text-decoration-none text-dark "
                            onClick={() => {
                              setMenuDisplay((preve) => !preve);
                            }}
                          >
                            Admin Panel
                          </Link>
                        )}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <form action="" className="d-block d-lg-none w-100 mx-4">
            <div className="search-box w-100 mt-2  d-flex flex-nowrap border border-dark rounded-5">
              <input
                className="form-control  border-0  p-2 px-3 rounded-5 input-text"
                type="search"
                placeholder="Search for plants, seeds and planters..."
                aria-label="Search"
              />
              <i className="fa-solid fa-magnifying-glass text-success"></i>
            </div>
          </form>
        </nav>
      </section>
      <Cart show={showCart} toggleOffcanvas={toggleCartOffcanvas} context={context} />
    </div>
  );
}

export default Nav;
