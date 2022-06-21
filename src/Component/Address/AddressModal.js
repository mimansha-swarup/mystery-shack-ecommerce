import { useAddress } from "../../Context";
import Modal from "../Modal/Modal";

const inititalValue = {
  name: "",
  street: "",
  state: "",
  country: "",
  zipCode: "",
  mobile: "",
  type: "",
};

export const AddressModal = ({
  isOpen,
  toggleIsOpen,
  isEdit = false,
  addressData = inititalValue,
}) => {
  const { addNewAddress, editAddress } = useAddress();

  const handleAddNewAddress = (address) =>
    isEdit ? editAddress(addressData?._id, address) : addNewAddress(address);

  const handleAddressForm = (event) => {
    event.preventDefault();
    const getValue = (key) => event.target[key].value;
    const getChekedValue = (key, index) => event.target[key][index];

    const type = getChekedValue("address-type", 0).checked
      ? getChekedValue("address-type", 0).id
      : getChekedValue("address-type", 1).checked
      ? getChekedValue("address-type", 1).id
      : null;

    const address = {
      name: getValue("name"),
      street: getValue("street"),
      state: getValue("state"),
      zipCode: getValue("zipCode"),
      country: getValue("country"),
      mobile: getValue("mobile"),
      type,
    };

    handleAddNewAddress(address);
    toggleIsOpen();
  };

  return (
    <Modal className="address-modal" open={isOpen} onClose={toggleIsOpen}>
      <form
        onSubmit={handleAddressForm}
        className=" address-form flex flex-column gap-1 mt-1"
      >
        <div className="flex gap-1">
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={addressData?.name}
          />
          <input
            type="text"
            name="zipCode"
            placeholder="zipcode"
            defaultValue={addressData?.zipCode}
          />
        </div>
        <textarea
          name="street"
          id=""
          cols="10"
          rows="5"
          placeholder="Street"
          defaultValue={addressData?.street}
        ></textarea>

        <div className="flex gap-1">
          <input
            type="text"
            name="state"
            placeholder="State"
            defaultValue={addressData?.state}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            defaultValue={addressData?.country}
          />
        </div>
        <div className="flex gap-1">
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            defaultValue={addressData?.mobile}
          />
        </div>
        <div>
          <span className="caption text-black-01">Address Type</span>
          <div className="flex gap-1">
            <div className="flex">
              <input
                type="radio"
                name="address-type"
                id="home"
                required
                defaultChecked={"home" === addressData?.type}
              />
              <label htmlFor="home">Home</label>
            </div>
            <div className="flex">
              <input
                type="radio"
                name="address-type"
                id="work"
                required
                defaultChecked={"work" === addressData?.type}
              />
              <label htmlFor="work">Work</label>
            </div>
          </div>
        </div>
        <div className="flex">
          <button type="submit" className="btn btn-contained teal flex center">
            {isEdit ? "Update" : "Save"}
          </button>
          <button
            onClick={toggleIsOpen}
            type="reset"
            className="btn btn-text teal flex center"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};
