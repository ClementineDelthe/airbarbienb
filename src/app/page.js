import Image from "next/image";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Suggestion from "./components/Suggestion";
import Carousel from "./components/Carousel";
import LargeCard from "./components/LargeCard";
import Footer from "./components/Footer";


export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <Suggestion exploreData={exploreData} />

        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <Carousel />
        </section>

        <LargeCard
          img="https://links.papareact.com/3cj"
          title="The Greatest Outdoors"
          description="Whishlists curated by AirBarbieNb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

// export async function getStaticProps() {
//   const exploreData = await fetch('https://links.papareact.com/pyp').then(
//     (res) => res.json(),

//   );
//   console.log('exploreData:', exploreData);
// const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
// res.json()
// );
//return {
//     props: {
//       exploreData,
//       cardsData
//     }
//   }
// }
