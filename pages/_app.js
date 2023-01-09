import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
