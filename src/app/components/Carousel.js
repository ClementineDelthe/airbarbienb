import MediumCard from "./MediumCard";
// import BSport from "../../../public/BSport.jpeg";

const places = [
  {
    "img": "/img/BSport.jpeg",
    "title": "Sport Vocations"
  },
  {
    "img": "/img/BMovie.jpeg",
    "title": "Barbie The Movie"
  },
  {
    "img": "/img/BHouse.jpeg",
    "title": "Dream Big"
  },
  {
    "img": "/img/BDHAdventure.jpeg",
    "title": "Barbie Dream House"
  }
];

const Carousel = () => {
  return (
    <div className="flex space-x-3 overflow-scroll p-3 -ml-3">
      {places.map((place) => (

        <MediumCard key={place.img} img={place.img} title={place.title}/>
      ))}
    </div>
  )
}

export default Carousel
