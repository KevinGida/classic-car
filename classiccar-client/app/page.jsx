import Category from "./components/Category";
import Hero from "./components/Hero";
import History from "./components/History";

const homePage = () => {
  return (
    <div>
      <Hero
        heading="CLASSIC CAR DEALER"
        message="Quality never goes out of style"
      />
      <Category />
      <History
        heading1="SUPPLYING THE"
        heading2="FINEST CLASSIC CAR"
        message="Classic Car Dealer is the longest standing and are specialists in the international sale of rare classiccars."
      />
    </div>
  );
};

export default homePage;
