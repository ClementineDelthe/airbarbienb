"use client"
import Header from '../src/app/components/Header';
import Footer from '../src/app/components/Footer';
import { format } from "date-fns";
// import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ResultCard from '../src/app/components/ResultCard';
import MapResults from '../src/app/components/MapResults';
// import { useSearchParams } from 'next/navigation';

const searchResults = [
  {
    "img": "https://links.papareact.com/xqj",
    "location": "Private room in center of London",
    "title": "Stay at this spacious Edwardian House",
    "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    "star": 4.73,
    "price": "£30 / night",
    "total": "£117 total",
    "long": -0.0022275,
    "lat": 51.5421655
  },
  {
    "img": "https://links.papareact.com/hz2",
    "location": "Private room in center of London",
    "title": "Independant luxury studio apartment",
    "description": "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
    "star": 4.3,
    "price": "£40 / night",
    "total": "£157 total",
    "long": -0.095091,
    "lat": 51.48695
  },
  {
    "img": "https://links.papareact.com/uz7",
    "location": "Private room in center of London",
    "title": "London Studio Apartments",
    "description": "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
    "star": 3.8,
    "price": "£35 / night",
    "total": "£207 total",
    "long": -0.135638,
    "lat": 51.521916
  },
  {
    "img": "https://links.papareact.com/6as",
    "location": "Private room in center of London",
    "title": "30 mins to Oxford Street, Excel London",
    "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    "star": 4.1,
    "price": "£55 / night",
    "total": "£320 total",
    "long": -0.069961,
    "lat": 51.472618
  },
  {
    "img": "https://links.papareact.com/xhc",
    "location": "Private room in center of London",
    "title": "Spacious Peaceful Modern Bedroom",
    "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
    "star": 5,
    "price": "£60 / night",
    "total": "£450 total",
    "long": -0.08472,
    "lat": 51.510794
  },
  {
    "img": "https://links.papareact.com/pro",
    "location": "Private room in center of London",
    "title": "The Blue Room In London",
    "description": "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
    "star": 4.23,
    "price": "£65 / night",
    "total": "£480 total",
    "long": -0.094116,
    "lat": 51.51401
  },
  {
    "img": "https://links.papareact.com/8w2",
    "location": "Private room in center of London",
    "title": "5 Star Luxury Apartment",
    "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    "star": 3.85,
    "price": "£90 / night",
    "total": "£650 total",
    "long": -0.109889,
    "lat": 51.521245
  }
];

const Search = () => {
  const router = useRouter();
  const { location, startDate, endDate, nbGuests } = router.query

  //  console.log(searchResults)
  // const searchParams = useSearchParams()
  // const startDate = searchParams.get('startDate')
  // const endDate = searchParams.get('endDate')
  // const location = searchParams.get('location')
  // const nbGuests = searchParams.get('nbGuests')

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatedStartDate} - ${formatedEndDate}`

  //   const [searchResults, setSearchResults] = useState([]);

  //  useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch('https://links.papareact.com/isz');
  //       const data = await response.json();
  //       setSearchResults(data);
  //     };

  //     fetchData();
  //  }, []);

  return (
    <div className="">
      <Header
        placeholder={`${location} | ${range} | ${nbGuests}`}
      />

      <main className="flex ">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300 + stays - {range} - for {nbGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Barbie</p>
            <p className="button">Price</p>
            <p className="button">Year</p>
            <p className="button">More Filters</p>

          </div>

          <div className="flex flex-col">
            {searchResults.map(item => (
              <ResultCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section
          // className="hidden xl:inline-flex xl:min-x-[600px]"
        >
          <MapResults
            searchResults={searchResults}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

// export async function getServerSideProps() {
//  const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());
//   return {
//      props: {
//        searchResults,
//     }
//   }
// }
// export async function getServerSideProps() {
//   try {
//      const response = await fetch('https://links.papareact.com/isz');
//      console.log('Response status:', response.status);
//      console.log('Response headers:', response.headers);
//      const text = await response.text();
//      console.log('Response text:', text);
//      if (!response.ok) {
//        throw new Error(`HTTP error! status: ${response.status}`);
//      }
//      const searchResults = await response.json();
//      return {
//        props: {
//          searchResults,
//        },
//      };
//   } catch (error) {
//      console.error('Fetch failed:', error);
//      return {
//        props: {
//          searchResults: ['errorclem'],
//        },
//      };
//   }
//  }
