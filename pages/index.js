import Header from "../components/home/Header";
import NewCollections from "../components/home/NewCollections";
import BestSeller from "../components/home/BestSeller";
import OurProducts from "../components/home/OurProducts";
import Reviews from "../components/home/Reviews";
import Policies from "../components/home/Policies";
import Newsletter from "../components/home/Newsletter";
import Tabs from "../components/our_products/Tabs";

export default function Home() {
  return (
    <div>
      <Header />
      <NewCollections />
      <Tabs />
      <BestSeller />
      {/* <OurProducts /> */}
      <Reviews />
      <Policies />
      <Newsletter />
      <script src="/node_modules/TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
    </div>
  );
}
