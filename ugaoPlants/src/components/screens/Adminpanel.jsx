import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
const Adminpanel = () => {
  const user = useSelector((state) => state?.user?.user);
  return (
    <div className="container-fluid">
      <div className="row">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 col-2 bgNav"
        style={{ height: "50rem",  }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <span className="fs-4">Admin Panel</span>
        </Link>
        <hr />
        <div className="ps-3 mt-5">
          <i className="fa-regular fa-user text-success py-2 px-3 h3  border border-success rounded-circle"></i>
          <p className="text-uppercase h4">{user?.name}</p>
          <p>{user?.role}</p>
        </div>
        <ul className="nav nav-pills flex-column mb-auto fs-5">
          <li className="nav-item">
            <Link to={"alluser"} className="nav-link link-dark">
              All Users
            </Link>
          </li>
          <li>
            <Link to={"products"} className="nav-link link-dark">
              Product
            </Link>
          </li>
          <li>
            <Link to={"settings"} className="nav-link link-dark">
              Settings
            </Link>
          </li>
          <li>
            <Link to={"activitylog"} className="nav-link link-dark">
              Activity Log
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-8">
        <Outlet/>
      </div>
      </div>
    </div>
  );
};

export default Adminpanel;
