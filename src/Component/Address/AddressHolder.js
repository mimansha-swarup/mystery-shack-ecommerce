
import { useState } from "react";
import { useAddress } from "../../Context";
import { AddressModal } from "./AddressModal";

export const AddressHolder = ({ address }) => {
  const { deleteAddress } = useAddress();
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <address className="address-holder mt-1">
      <div className="address-badge caption">{address?.type}</div>
      <span className="subtitle1 semibold">{address?.name}</span>

      <p className="body2 mb-0 text-black-01 ">{address?.street}</p>
      <p className="body2 mt-0 text-black-01">
        {`${address?.state}, ${address?.country}`} -{" "}
        <span className="text-black-00">{address?.zipCode}</span>{" "}
      </p>
      <div className="flex text-black-01 action">
        <button onClick={toggleIsOpen} className="btn text-on-button bg-purple-04 flex center ">
          edit
        </button>
        <AddressModal isOpen={isOpen} toggleIsOpen={toggleIsOpen} isEdit={true} addressData={address} />
        <button
          onClick={() => deleteAddress(address)}
          className="btn text-on-button bg-purple-04 flex center"
        >
          delete
        </button>
      </div>
    </address>
  );
};
