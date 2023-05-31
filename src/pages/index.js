import Image from 'next/image'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from '../../components/Service';
import Facts from "../../components/Facts"
import AboutUs from '../../components/AboutUs';
import Reviews from '../../components/Reviews'
import OurClients from '../../components/OurClients'
import Contact from '../../components/Contact'
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Facts></Facts>
      <AboutUs></AboutUs>
      <Reviews></Reviews>
      <OurClients></OurClients>
      <Contact></Contact>
      <Footer></Footer>

      <Head>
      <script>
      {`
        window.replainSettings = { id: '448de59d-58c4-4f39-8bbf-e68b917f899d' };
        (function(u){var s=document.createElement('script');s.async=true;s.src=u;
        var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
        })('https://widget.replain.cc/dist/client.js');
          `}
</script>
      </Head>
    </>
  )
}
