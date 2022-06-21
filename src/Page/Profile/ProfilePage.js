import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const {
    authState: { customer },
  } = useAuth();
  return (
    <main className="main-body flex center">
      <div className="profile-container" >
        <div className="flex flex-column profile-sidebar">
        <h3 className="headline3">Profile:</h3>
         <Link to="/address" >
          <h3 className="headline3">Address</h3>
         </Link>
         <Link to="/post">
          <h3 className="headline3">Orders</h3>
         </Link>
        </div>
        <div className="account-info" >
          <div className="avatar avatar-round flex center mx-auto headline3 bold mb-0">{customer?.name[0]}</div>
          <div className="flex gap-1">
            <h4 className="headlin4 regular text-black-01">Name</h4>
            <h4 className="headlin4">:</h4>
            <h4 className="headlin4 regular text-black-00">{customer.name}</h4>
          </div>
          <div className="flex gap-1">
            <h4 className="headlin4 regular text-black-01">Email</h4>
            <h4 className="headlin4">:</h4>
            <h4 className="headlin4 regular text-black-00">{customer.email}</h4>
          </div>
        </div>
      </div>
    </main>
  );
};
