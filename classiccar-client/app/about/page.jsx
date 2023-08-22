import Upper from "../components/Upper";
import Banner from "../components/Banner";
import Header from "../components/Header";
import AboutDetail from "../components/AboutDetail";

const aboutPage = () => {
  return (
    <div>
      <Upper url="https://images.unsplash.com/photo-1508950331646-9c182111fbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
      <Banner header="About Us" />
      <Header
        head="CLASSIC CAR DEALER"
        p1="
        CCD is the official Sweden dealer for classiccars and are specialists in the international sale of rare and exclusive classiccars. "
        p2="We have unmatched records of sales both here in the UK and internationally and also boast the largest collection of pre-owned Koenigsegg examples in the world!

        Our showroom has been a prominent car dealership for over 100 Years in Sunningdale, near Ascot, a populous village with a retail area of boutique specialist shops, wine bars, cafe’s and restaurants in the Royal Borough of Windsor and Maidenhead. It takes up the extreme south-east corner of Berkshire, UK."
      />
      <AboutDetail />
    </div>
  );
};

export default aboutPage;
