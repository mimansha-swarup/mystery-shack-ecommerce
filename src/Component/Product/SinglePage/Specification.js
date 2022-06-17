import { BiTransferAlt, BiCheckShield, BiMoney } from "react-icons/bi";


export const Specification = ({ currProduct }) => {
  return (
    <>
    <div className="flex flex-column gap-1">
          <p className="body1 text-black-00">
            <BiTransferAlt className="react-icons product-icons" />
            Easy 30 days returns and exchanges
          </p>
          <p className="body1 text-black-00">
            <BiCheckShield className="react-icons product-icons" />
            100% Original Products
          </p>
          <p className="body1 text-black-00">
            <BiMoney className="react-icons product-icons" />
            Pay on delivery might be available
          </p>
        </div>
    <div className="flex flex-column gap-1 mt-3">
      <div>
        <h5 className="headline5 semibold mb-0">PRODUCT DETAILS</h5>
        <p className="body1 text-black-01">{currProduct?.details?.product}</p>
      </div>
      <div>
        <h6 className="headline6 semibold mb-0">Material & Care</h6>
        <p className="body1 text-black-01">{currProduct?.details?.material}</p>
      </div>
      <div>
        <h6 className="headline6 semibold mb-1">Specifications</h6>
        <div className="specs-box">
          {currProduct?.details?.specification &&
            Object.keys(currProduct?.details?.specification).map((specKeys) => (
              <div key={specKeys}>
                <p className="caption semibold text-black-00 mb-0">
                  {specKeys}
                </p>
                <p className="subtitle1 regulat text-black-01 mb-0 mt-0">
                  {currProduct?.details?.specification[specKeys]}
                </p>
                <hr className="line-horz" />
              </div>
            ))}
        </div>
      </div>
      {currProduct?.details?.look && (
        <div>
          <h6 className="headline6 semibold mb-0">Complete The Look</h6>
          <p className="body1 text-black-01">{currProduct?.details?.look}</p>
        </div>
      )}
    </div>
      </>
  );
};
