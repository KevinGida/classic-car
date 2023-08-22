import React from "react";
import aboutDetail from "../style/aboutDetail.module.css";
import AboutPart1 from "./AboutPart1";
import AboutPart2 from "./AboutPart2";

const AboutDetail = () => {
  return (
    <div className={aboutDetail.container}>
      <div className={aboutDetail.content}>
        <div className={aboutDetail.detail}>
          <AboutPart1
            image="https://images.unsplash.com/photo-1608231037259-3c3c7150bcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            h2="Our Approach"
            p1="We only deal in the best, most pristine, well specified stock, as
          experience has taught us that these calibres of cars sell themselves.
          For this reason, we do not employ sales staff in the traditional sense
          of the word, although we do ensure all our staff have extensive
          product knowledge of the cars and realise that at this level, the
          customer service experience needs to be absolutely first class. We are
          a predominantly family run business with a high level of lengthy staff
          retention and this has enabled us to build long term relationships
          with clients, ensuring we develop a strong understanding of how to
          meet or exceed their expectations."
            p2="The rarity and exclusivity of the type of cars we deal in, obviously
          attracts a global audience and although we always hope to meet our
          clients in person, we have routinely sent cars to customers sight
          unseen all over the world. The trust our clients place in us, has led
          to a significant proportion of our business deriving from customer
          referrals and we continually strive to make a Supercar buying
          experience from Amari Supercars something special, befitting the
          quality of cars we have on offer. Our most established customer has
          been with us for 29 years and we have sold him 86 cars to date -
          hopefully an endorsement of our approach!"
            btn="SOLD CAR"
            link="/cars/sold"
          />
        </div>
        <div className={aboutDetail.detail}>
          <AboutPart2
            image="https://images.unsplash.com/photo-1595785371554-eb445d0df6a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            h2="Our stock"
            p1="The cars we offer for sale have been selected as the finest examples of their type and are prepared to the very highest standards. With a few exceptions to accommodate long term customers, the vast majority of our stock is owned by us which should reassure prospective clients that we back with our own money, our judgement on the quality of the cars that we sell. We are one of the few independent dealers at this level to buy stock, which in turn explains how we can acquire the very best examples on offer."
            p2="Due to our focus on the latest specialist cars, the majority of our vehicles come with the balance of a factory warranty and with a factory service history. Older classic models can come with a bespoke warranty and condition evaluation by marque specialists to suit your requirements.

            We buy the best, sell the best and decades of experience of this modus operandi of trading, leads us to the conclusion, this is the only way for us to do business."
            btn="STOCK FOR SALE"
            link="/cars/for-sale"
          />
        </div>
        <div className={aboutDetail.detail}>
          <AboutPart1
            image="https://images.unsplash.com/photo-1553032674-e1cd6fb0fe18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            h2="Our showroom"
            p1="We operate from a 15000 square foot purpose-built showroom, which together with other local buildings in which we house our cars, means that we can present a strong platform to showcase 70 cars ready for your inspection. Our centrally located UK facility, a few minutes from the M6, close to major airports and only 3 hours from London, results in an environment where you can thoroughly physically inspect our cars at your leisure."
            p2="We have observed over the last 40 years, the emergence of many new ways for consumers to buy cars and with the advent of web based auctions, bedroom brokers with SOR based models, we would assert that many of these opportunities do not always present the best option for the buyer. This should not be confused with our aversion to technology! We were one of the first dealers in the UK to have a web site and actively sell stock through Crypto payment methodologies. Showcasing our inventory through our online marketing platforms, frequently presents a sufficiently compelling reason for visitors to buy sight unseen. However we would hope that our traditional approach of owning and displaying cars physically in stock, from our own bricks and mortar showroom, should reassure you that we present the most transparent and secure methodology for you to undertake a Supercar transaction."
            btn="GET IN TOUCH"
            link="/contact"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
