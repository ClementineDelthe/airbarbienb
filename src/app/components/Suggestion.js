import SmallCard from "./SmallCard";

const suggestions = [
  {
    "img": "/img/BPets.jpeg",
    "cat": "Pets",
    "stock": "18"
  },
  {
    "img": "/img/BExtra.jpeg",
    "cat": "Extra",
    "stock": "25"
  },
  {
    "img": "/img/BSports.jpeg",
    "cat": "Sports",
    "stock": "12"
  },
  {
    "img": "/img/BWellness.jpeg",
    "cat": "Wellness",
    "stock": "7"
  },
  {
    "img": "/img/BJobs.jpeg",
    "cat": "Jobs",
    "stock": "11"
  },
  {
    "img": "/img/BHair.jpeg",
    "cat": "Hair",
    "stock": "6"
  },
  {
    "img": "/img/BFashion.jpeg",
    "cat": "Fashion",
    "stock": "5"
  },
  {
    "img": "/img/BFitness.jpeg",
    "cat": "Fitness",
    "stock": "13"
  }
];

const Suggestion = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {suggestions.map(item => (
          <SmallCard key={item.img} img={item.img} cat={item.cat} stock={item.stock}/>
        ))}
    </div>
  )
}

export default Suggestion
