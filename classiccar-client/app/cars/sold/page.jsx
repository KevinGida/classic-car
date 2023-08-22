import Upper from "../../components/Upper";
import Banner from "../../components/Banner";
import Catalogue from "@/app/components/Catalogue";

const SoldPage = () => {
  return (
    <div>
      <Upper url="https://images.unsplash.com/photo-1498946168008-9b2e06e76ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
      <Banner header="Previously sold cars" />
      <Catalogue isSold="true" />
    </div>
  );
};

export default SoldPage;
