import React from "react";
import Image from "next/image";
import contactForm from "../style/contactForm.module.css";
import Form from "../components/Form";
import { Cardo } from "next/font/google";

const cardo = Cardo({
  weight: ["400"],
  subsets: ["latin"],
});

const ContactForm = () => {
  return (
    <div className={contactForm.container}>
      <div className={contactForm.content}>
        <div className={contactForm.detail}>
          <Form />
        </div>
        <div className={contactForm.detail}>
          <div className={contactForm.find_us}>
            <h2 className={`${contactForm.title} ${cardo.className}`}>
              Find Us
            </h2>
            <hr />
            <p>
              We operate from a 15000 square foot purpose-built showroom, which
              together with other local buildings in which we house our cars,
              means that we can present a strong platform to showcase 70 cars
              ready for your inspection. Our centrally located UK facility, a
              few minutes from the M6, close to major airports and only 3 hours
              from London, results in an environment where you can thoroughly
              physically inspect our cars at your leisure. We have observed over
              the last 40 years, the emergence of many new ways for consumers to
              buy cars and with the advent of web based auctions, bedroom
              brokers with SOR based models, we would assert that many of these
              opportunities do not always present the best option for the buyer.
            </p>
            <p>
              This should not be confused with our aversion to technology! We
              were one of the first dealers in the UK to have a web site and
              actively sell stock through Crypto payment methodologies.
              Showcasing our inventory through our online marketing platforms,
              frequently presents a sufficiently compelling reason for visitors
              to buy sight unseen.
            </p>
          </div>
        </div>
        <div className={contactForm.detail}>
          <Image
            src="https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Picture of the author"
            className={contactForm.image}
            width={2000}
            height={1000}
          />
        </div>
        <div className={contactForm.detail}>
          <iframe
            className={contactForm.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.7563863545054!2d18.00920777711289!3d59.33702097461799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d1ad188b8f3%3A0xf92c2f046e1956f2!2sSchool%20of%20Applied%20Technology%20-%20SALT%20-%20Stockholm!5e0!3m2!1sen!2sse!4v1692271881909!5m2!1sen!2sse"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
