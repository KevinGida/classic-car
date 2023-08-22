import Link from "next/link";
import hero from "../style/hero.module.css";

const Hero = ({ heading, message }) => {
  return (
    <div className={hero.container}>
      <div className={hero.content}>
        <h2>{heading} </h2>
        <p>{message}</p>
        <Link className={hero.button} href="/cars/for-sale">
          Our Collection
        </Link>
      </div>
    </div>
  );
};

export default Hero;
