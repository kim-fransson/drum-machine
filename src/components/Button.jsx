import { classNames } from "../utils/class-names";

function Button({ className }) {
  return (
    <div
      className={classNames(
        "cursor-pointer border border-black rounded-md shadow-2xl",
        className
      )}
    ></div>
  );
}

export default Button;
