import upper from "../style/upper.module.css";

const Hero = ({ url }) => {
  return (
    <div
      className={upper.container}
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
};

export default Hero;
