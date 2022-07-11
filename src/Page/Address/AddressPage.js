import React from "react";
import { useState } from "react";
import "./AddressPage.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AddressHolder, AddressModal } from "../../Component";
import { useAddress } from "../../Context";

export const AddressPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  const { addressState} = useAddress()

  return (
    <main className="main-body">
      <div className="address-container mt-1 mb-2">
        <h3 className="headline3">Manage Address</h3>
        <div className="flex">
          <button
            onClick={toggleIsOpen}
            className="btn btn-outline purple text-on-button"
          >
            <AiOutlinePlus />
            Add a new Address
          </button>
        </div>
        <AddressModal isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
     
        <div className="address-layout">
          {addressState?.address.map((eachAddress) => (
            <AddressHolder address={eachAddress} key={eachAddress._id} />
          ))}
        </div>
      </div>
    </main>
  );
};
