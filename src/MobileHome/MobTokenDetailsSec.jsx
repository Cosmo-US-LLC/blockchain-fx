import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "../assets/TokenAllocationSec/fa-solid_copy.svg";
import chart from "../assets/TokenAllocationSec/chart_w.png";

function MobTokenDetailsSec() {
  const { t } = useTranslation(); // Get the translation function

  const address = "0xd0d801eea2c2422df3e626b82ebbb618f4cc445e";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    toast.success("Address Copied!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="py-[30px] bg-[#000]" id="allocation">
      <div className="relative space-y-[15px] w-[90%] mx-auto">
        <div className="space-y-[20px]">
          <h3 className="text-[30px] font-[700] text-center leading-[120%] text-[#fff] tracking-[-1.5px]">
            {t("token_allocation_section.title")} {/* Use translation */}
          </h3>
          <p className="text-[15px] font-[400] max-w-[832px] mx-auto w-[80%] text-center leading-[130%] text-[#fff] tracking-[-0.32px]">
            {t("token_allocation_section.description")} {/* Use translation */}
          </p>
        </div>

        <div className="bg-[#030F16] w-[100%] border p-5 rounded-[6px] border-white border-opacity-10">
          <img
            src={chart}
            alt="Chart"
            className="h-[210px] w-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-2 gap-[15px]">
          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">
              {t("token_allocation_section.token_name.label")}{" "}
              {/* Use translation */}
            </h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              {t("token_allocation_section.token_name.value")}{" "}
              {/* Use translation */}
            </h3>
          </div>

          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">
              {t("token_allocation_section.launch_on.label")}{" "}
              {/* Use translation */}
            </h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              {t("token_allocation_section.launch_on.value")}{" "}
              {/* Use translation */}
            </h3>
          </div>

          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">
              {t("token_allocation_section.token_symbol.label")}{" "}
              {/* Use translation */}
            </h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              {t("token_allocation_section.token_symbol.value")}{" "}
              {/* Use translation */}
            </h3>
          </div>

          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">
              {t("token_allocation_section.token_type.label")}{" "}
              {/* Use translation */}
            </h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              {t("token_allocation_section.token_type.value")}{" "}
              {/* Use translation */}
            </h3>
          </div>

          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">
              {t("token_allocation_section.decimal.label")}{" "}
              {/* Use translation */}
            </h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              {t("token_allocation_section.decimal.value")}{" "}
              {/* Use translation */}
            </h3>
          </div>

          <div className="bg-[#030F16] w-[100%] border px-[12px] rounded-[6px] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-white opacity-70 text-[12px] font-[400] pb-3">
              {t("token_allocation_section.total_supply.label")}{" "}
              {/* Use translation */}
            </h4>
            <h3 className="text-[#fff] text-[15px] font-[400]">
              {t("token_allocation_section.total_supply.value")}{" "}
              {/* Use translation */}
            </h3>
          </div>
        </div>

        <div className="w-[100%] mx-auto space-x-[2rem] flex justify-between items-center">
          <div className="bg-[#030F16] border px-[12px] rounded-[6px] w-[100%] pt-[12px] pb-[12px] border-white border-opacity-10">
            <h4 className="text-[#fff] text-[12px] font-[400]">
              {t("token_allocation_section.contract_address.label")}{" "}
              {/* Use translation */}
            </h4>
            <h3 className="text-white opacity-70 flex break-all items-center text-[12px] font-[700]">
              {address}{" "}
              <img
                src={copy}
                className="h-[18px] ml-2 cursor-pointer"
                alt="Copy Icon"
                onClick={copyToClipboard}
              />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobTokenDetailsSec;
