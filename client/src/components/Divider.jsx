import imgDivider from "../content/svgs/divider.svg";

export default function Divider() {
  return (
    <>
      <img
        src={imgDivider}
        alt="section divider"
        className="divider
    animate__animated animate__fadeIn animate__slower
    "
      />
    </>
  );
}
