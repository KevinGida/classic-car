import Upper from "../components/Upper";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

const contactPage = () => {
  return (
    <div>
      <Upper url="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
      <Banner header="Contact" />
      <Header
        head="Get In Touch"
        p1="
      Our showroom is in Sunningdale, near Ascot, a populous village with a retail area of boutique specialist shops, wine bars, cafe’s and restaurants in the Royal Borough of Windsor and Maidenhead."
        p2="It takes up the extreme south-east corner of Berkshire, England. Surrounded by leafy pastures, Sunningdale is also well-known within the golfing world for its own outstanding Golf Club and neighbouring Wentworth Golf Club. SuperVettura is conveniently located on the A30 London Road opposite London Road Car Park."
      />
      <ContactForm />
    </div>
  );
};

export default contactPage;
