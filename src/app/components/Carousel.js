import MediumCard from "./MediumCard";

const places = [
  {
    "img": "https://links.papareact.com/2io",
    "title": "Outdoor getaways"
  },
  {
    "img": "https://links.papareact.com/q7j",
    "title": "Unique stays"
  },
  {
    "img": "https://links.papareact.com/s03",
    "title": "Entire homes"
  },
  {
    "img": "https://links.papareact.com/8ix",
    "title": "Pet allowed"
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
