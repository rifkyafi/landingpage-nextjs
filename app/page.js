import Navbar from "@/components/navbar";
import Homepage from "@/components/homepage";
import Menu from "@/components/menu";
import Footer from "@/components/footer";


export default function Home() {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Homepage />
      <Menu />
      <Footer />
    </div>
  );
}
