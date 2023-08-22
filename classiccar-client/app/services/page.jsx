import Upper from "../components/Upper";
import Banner from "../components/Banner";
import Header from "../components/Header";
import AboutPart1 from "../components/AboutPart1";
import AboutPart2 from "../components/AboutPart2";

const servicePage = () => {
  return (
    <div>
      <Upper url="https://images.unsplash.com/photo-1534258885201-dede7bddf3cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNsYXNzaWMlMjBjYXIlMjBlbmdpbmV8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60" />
      <Banner header="Our services" />
      <Header
        head="Consign your car"
        p1="
        Consign your classic car and/or sportscar. Classix is located all the way south in Sweden. Just north of Malmö and Copenhagen. If you are looking for somebody to help you sell your car, you have come to the right place."
        p2="We can help you determine the correct value of your car. The Classix platform is well-known and frequently visited by classic car collectors worldwide. We make your car stand out in a crowded market with our sophisticated photo/video presentation."
      />
      <AboutPart1
        image="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        h2="Inspection & Consulting"
        p1="You have found your dream classic car! But, you need somebody to inspect the car and probably the seller to, go through paperwork as well as authenticating the car, and perhaps finally bringing it home to your door."
        p2="You need some advice on how to go about restoration and where to find help. You need advice on which car in your collection that is time to replace. Moreover, you need hints of what to buy. Classic car consulting is free for customers who bought cars from us. Otherwise 300€/hour."
        btn="CONTACT US"
        link="/contact"
      />

      <AboutPart2
        image="https://images.unsplash.com/photo-1643700973089-baa86a1ab9ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjaGFuaWN8ZW58MHwxfDB8fHwy&auto=format&fit=crop&w=500&q=60"
        h2="Vehicle condition rating"
        p1="CONDITION ONE

        Immaculate condition. No flaws, damage or signs of wear either technically or visually. Complete and perfectly restored top-class vehicle. As good as new (if not better). Very rare. A vehicle that one approaches with pleasure and that reveals not a single flaw, even upon closer inspection. The basis for the evaluation with condition score 1 is the assumed condition upon delivery to first customer i.e. the new vehicle condition for the relevant manufacturer at that time.
        "
        p2="CONDITION TWO

        Good condition. No flaws, but slight (!) traces of wear. Either rare, good unrestored original condition or expert restoration. Technically and visually perfect with minimal signs of wear. A vehicle that one approaches with pleasure but which, upon closer inspection, reveals slight signs of wear. These slight traces of wear should reflect the documented low level of overall mileage or of mileage since restoration. The level of technical wear and tear should be correspondingly low."
        btn="STOCK FOR SALE"
        link="/cars/for-sale"
      />
    </div>
  );
};

export default servicePage;
