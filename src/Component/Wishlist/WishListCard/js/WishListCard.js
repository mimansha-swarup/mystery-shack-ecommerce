
import { MdCancel } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
const WishListCard = () => {
  return ( 
    <div className="card">
          <div className="media-cont">
            <img className="card-media" src={"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14362694/2021/12/9/12ccca29-8879-4842-b44f-c496a0ea54a41639029761308-Mast--Harbour-Men-Sweatshirts-3331639029760888-1.jpg"} alt="Product" />

            <MdCancel className="card-dismiss" />

            <div className="badge text-badge yellow bottom-left ">
              4.5
              <AiFillStar />
            </div>
          </div>
          <div className="card-body">
            <div className="card-header">
              <p className="card-title subtitle1 semi-bold mb-1 text-center">Men Black Solid Sweatshirt</p>
            </div>
            <span className="mr-1">₹{400}</span>
            <span
              className="text-black-01 mr-1"
              style={{ textDecoration: "line-through" }}
            >
              ₹1000
            </span>
            <span className="text-red-00 small-text">(60%Off)</span>
          </div>
          <div className="card-action ">
            <button className="btn btn-outline bold purple">MOVE TO BAG</button>
          </div>
        </div>
   );
}
 
export default WishListCard;