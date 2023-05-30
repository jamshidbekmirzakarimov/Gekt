import Image from 'next/image'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from '../../components/Service';
import Facts from "../../components/Facts"
import AboutUs from '../../components/AboutUs';
export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Facts></Facts>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  )
}
