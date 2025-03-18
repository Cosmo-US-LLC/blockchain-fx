import clsx from "clsx";
import cross from "../../../assets/navbar/wallet/x.svg";

/**
 * @typedef {object} ModalProps
 * @property {boolean} props.open
 * @property {() => void} props.onClose
 * @property {string} props.title
 * @property {string} [props.className]
 * @property {string} [props.innerClassName]
 * @property {import("react").JSX.Element[] | import("react").JSX.Element} [props.children]
 * @returns {import("react").JSX.Element}
 */

/**
 * @param {ModalProps} props
 */
export const Modal = (props) => {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity z-[1000]",
        { "opacity-0 pointer-events-none": !props.open },
      )}
    >
      <div
        onClick={() => props.onClose()}
        className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]"
      />
      <div
        className={clsx(
          "bg-white rounded-lg relative w-[calc(100%-2rem)] max-w-[400px]",
          props.className,
        )}
      >
        {props.title && (
          <div className="border-[#B0B0B0] bg-[#F5F5F5] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-[5.725px] py-[0px] mx-auto min-w-[190px] px-2 whitespace-nowrap">
            <p className="text-[16px] font-[700] text-center">{props.title}</p>
          </div>
        )}
        <button className="absolute top-[-1.5%] right-[-13px]">
          <img
            src={cross}
            alt="Close modal"
            onClick={props.onClose}
            className="cursor-pointer"
          />
        </button>
        <div
          className={clsx(
            "overflow-y-auto p-[20px] flex flex-col max-h-[calc(100vh-60px)]",
            props.innerClassName,
          )}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
