/**
 * @typedef {import("../../presale-gg/util/data.util").PaymentTokenList} PaymentTokenList
 */

import { useMemo, useRef, useState } from "react";
import { tokenImageMap } from "../../presale-gg/assets/img/tokens";
import clsx from "clsx";
import { useClickAway } from "../../presale-gg/web3/hooks";

/**
 * @param {object} props
 * @param {PaymentTokenList} props.tokenList
 * @param {number | null} props.selectedTokenId
 * @param {(item: import("../../presale-gg/api/api.types").API.PaymentToken) => void} props.onChange
 * @returns {import("react").JSX.Element}
 */
const TokenSelectDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isDefault = useMemo(() => {
    return !props.tokenList.currencies.find(
      (token) => token.id === props.selectedTokenId,
    );
  }, [props.tokenList, props.selectedTokenId])
  const token = useMemo(() => {
    const token = props.tokenList.currencies.find(
      (token) => token.id === props.selectedTokenId,
    );
    return token ?? props.tokenList.defaultToken;
  }, [props.tokenList, props.selectedTokenId]);
  const active = token && token?.id === props.selectedTokenId;

  const containerRef = useRef(null);
  useClickAway(containerRef, () => setDropdownOpen(false));

  return (
    <div className="relative flex flex-col" ref={containerRef}>
      <button
        onClick={() => {
          if (props.tokenList.currencies.length === 1) {
            props.onChange(props.tokenList.currencies[0]);
          } else {
            setDropdownOpen((open) => !open);
          }
        }}
        style={{
          background: props.active
            ? "rgba(176, 176, 176, 0.7)"
            : "rgba(176, 176, 176, 0.17)",
        }}
        className={clsx(
          "flex items-center justify-start rounded-[8px] px-[8px] py-[5px] gap-[6px] cursor-pointer transition-all h-8 bg-[#ededed]",
          { "!bg-[linear-gradient(90deg,_#E5AE00_0%,_#FFD551_100%)]": active },
        )}
      >
        {token && (
          <img
            className="w-[18px] h-[18px]"
            src={tokenImageMap[token.symbol.toLowerCase()]}
            alt=""
          />
        )}
        <div className="flex flex-col text-start">
          <span
            className={clsx(
              "text-[11.688px] text-[#fff] font-[700] leading-[1] transition-colors",
              {
                "!text-[#000]": active,
              },
            )}
          >
            {token?.symbol.toUpperCase() ?? props.tokenList.placeholder}
          </span>
          {(token && (!isDefault || token.symbol.toUpperCase() !== "USDT")) && (
            <span
              className={clsx(
                "text-[#777] text-[8.688px] font-[700] leading-[1] whitespace-nowrap transition-colors",
                { "!text-[#000]": active },
              )}
            >
              {token.chain.toUpperCase()}
            </span>
          )}
        </div>
        {props.tokenList.currencies.length > 1 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={active ? "#000" : "#fff"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={clsx(
              "w-3 h-3 flex-shrink-0 ml-auto transition-transform",
              {
                "rotate-180": dropdownOpen,
              },
            )}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        )}
      </button>
      {props.tokenList.currencies.length > 1 && (
        <div
          className={clsx(
            "transition-opacity flex flex-col absolute top-full left-0 w-full bg-[#f9f9f9] border border-[#D3D3D3] z-10 max-h-48 overflow-y-auto",
            {
              "opacity-0 pointer-events-none": !dropdownOpen,
            },
          )}
        >
          {props.tokenList.currencies.map((token) => (
            <button
              key={token.id}
              className="flex items-center gap-x-[6px] py-2 px-2"
              onClick={() => {
                props.onChange(token);
                setDropdownOpen(false);
              }}
            >
              <img
                className="w-[18px] h-[18px] object-cover"
                src={tokenImageMap[token.symbol.toLowerCase()]}
                alt=""
              />
              <div className="flex flex-col text-start">
                <span className="text-[#545454] text-[11.688px] font-[700] leading-[1]">
                  {token.symbol.toUpperCase()}
                </span>
                <span className="text-[#777] text-[8.688px] font-[700] leading-[1] whitespace-nowrap">
                  {token.chain.toUpperCase()}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenSelectDropdown;
