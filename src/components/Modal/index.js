import "./style.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Modal = ({ closeModal }) => {
  return (
    <div className="modal-nav drop-shadow-lg" style={{}}>
      <div className="modal-container bg-white px-4 pt-10 pb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to={"/"}
              className="font-bold text-2xl pt-1"
              style={{
                color: "",
              }}
            >
              BioChemical
            </Link>
          </div>
          <div className="cursor-pointer" onClick={() => closeModal(false)}>
            <IoMdClose size={28} color={""} />
          </div>
        </div>
        <div className="">
          <Link to="/" className="pr-5 block py-2 my-3">
            Home
          </Link>
          <Link to="/solutions" className="pr-5 block py-2 my-3">
            Solutions
          </Link>
          <Link to="/about" className="pr-5 block py-2 my-3">
            About
          </Link>
          <Link to="/" className="pr-5 hidden block py-2 my-3">
            Support
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Modal;
