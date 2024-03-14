import Header from "../src/app/components/Header";
import Banner from "../src/app/components/Banner";
import Suggestion from "../src/app/components/Suggestion";
import Carousel from "../src/app/components/Carousel";
import LargeCard from "../src/app/components/LargeCard";
import Footer from "../src/app/components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Themes & Categories</h2>
          <Suggestion exploreData={exploreData} />

        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Highlits</h2>
          <Carousel />
        </section>

        <LargeCard
          title="The Greatest Dream"
          description="Whishlists curated by AirBarbieNb"
          buttonText="Get the Reveal"
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
