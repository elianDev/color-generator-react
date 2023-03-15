import React from "react";

interface Props extends Value {
  index: number;
}

const SingleColor = ({ rgb, weight, index, hex }: Props) => {
  const [alert, setAlert] = React.useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hex}`;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index >= 10 && "color-light"}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
