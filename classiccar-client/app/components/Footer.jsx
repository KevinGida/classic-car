import Link from "next/link";
import Image from "next/image";
import footer from "../style/footer.module.css";
import Logo from "../asset/Logo.svg";
import Instagram from "../asset/icons8-instagram-old-50.png";
import Facebook from "../asset/icons8-facebook-50.png";

const Footer = () => {
  return (
    <footer className={footer.container}>
      <div className={footer.content}>
        <div className={footer.upper}>
          <div className={footer.detail}>
            <Link href="/">
              <Image
                src={Logo}
                alt="Classic car logo"
                className={footer.logo}
              />
            </Link>
            <div>Scoutvägen 25 26193 Saxtorp Sverige</div>
            <div>
              <div>marketing@Classiccarsdealer.com</div>
              <div>+44 1344 620072</div>
            </div>
          </div>
          <div className={footer.navigation}>
            <div className={footer.inner}>
              <h3>navigate</h3>
              <ul>
                <Link href="/cars/for-sale"> For Sale </Link>
                <Link href="/services"> Services </Link>
                <Link href="/cars/sold"> Sold Car </Link>
              </ul>
            </div>
            <div className={footer.inner}>
              <h3>company</h3>
              <ul>
                <Link href="/about"> About </Link>
                <Link href="/contact"> Contact </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr className={footer.line} />
        <div className={footer.bottom}>
          <p>
            © 2023 Classic Car Dealer. Registered Company Number: 01234567. Site
            by Kevin Gida
          </p>
          <div className={footer.social}>
            <Link href="https://www.instagram.com/">
              <Image src={Instagram} alt="Classic car logo" />
            </Link>
            <Link href="https://www.facebook.com/">
              <Image src={Facebook} alt="Classic car logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
