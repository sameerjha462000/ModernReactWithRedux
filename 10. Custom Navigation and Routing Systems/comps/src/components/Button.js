import achaar from "classnames"; // https://www.npmjs.com/package/classnames

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  const finalClassName = achaar(
    " flex item-center px-3 py-1.5 border text-white",
    {
      "border-blue-500 bg-blue-500": primary,
      "border-gray-500 bg-gray-500": secondary,
      "border-green-500 bg-green-500": success,
      "border-yellow-500 bg-yellow-500": warning,
      "border-red-500 bg-red-500": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  // console.log(finalClassName);

  return <button className={finalClassName}>{children}</button>;
};

Button.propTypes = {
  checkCustomValidation: ({ primary, secondary, success, warning, danger }) => {
    // we want that only one of them should be true at a time.
    // !!true = true and !!undefined = !true = false
    // Number(true) = 1 and Number(false) = 0

    // so we will count how many of them are true , if that is greater than 1 then we will throw an error
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
