import Upper from "../../components/Upper";
import Banner from "../../components/Banner";
import Catalogue from "@/app/components/Catalogue";

const forSalePage = () => {
  return (
    <div>
      <Upper url="https://images.unsplash.com/photo-1567725925717-c97179625db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" />
      <Banner header="Cars for sale" />
      <Catalogue title="Our Inventory" isSold="false" />
    </div>
  );
};

export default forSalePage;
