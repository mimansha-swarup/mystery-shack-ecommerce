import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
const Toast = ({ type, message }) => {

  const [dispay, setDisplay] = useState("flex");
  const toastType = {
    success: {
      color: "#39D98A",
      borderLeft: " 8px solid #39D98A",
    },
    error: {
      color: "#FF5C5C",
      borderLeft: " 8px solid #FF5C5C",
    },
  };
  useEffect(()=>{
    setTimeout(()=>deleteToast(),5000)
  })

  const deleteToast = () => {
    setDisplay("none");
  };

  return (
    <div
      style={{ ...toastType[type], display: dispay }}
      className="toast"
    >
      <p className="subtitle2">
        {message}
      </p>
      <div className="toast-action">
        <MdCancel onClick={deleteToast} className="react-icons" />
      </div>
    </div>
  );
};

export default Toast;
