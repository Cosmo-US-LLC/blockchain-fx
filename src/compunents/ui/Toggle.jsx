import clsx from "clsx"

/**
 * @param {object} props
 * @param {boolean} props.checked
 * @param {(newChecked: boolean) => void} props.onChange
 */
const Toggle = (props) => {
	return (
		<button
      className={clsx(
        "relative flex w-11 h-5 bg-[#aaa] rounded-full mx-1 my-1 transition-colors",
        props.className,
        {
          "!bg-[#d19f02]": props.checked
        }
      )}
      onClick={() => props.onChange(!props.checked)}
    >
      <div
        className={clsx("w-6 h-6 rounded-full bg-[#888] absolute top-1/2 left-0 -translate-y-1/2 transition-all", {
          "!bg-[#e5ae00] left-full translate-x-[calc(-100%+0.125rem)]": props.checked
        })} />
		</button>
	)
}

export default Toggle