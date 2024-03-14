import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";


function ResultCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 pr-4border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
      <Image
      alt={title}
      src={img}
      layout="fill"
      objectfit="cover"
      className="rounded-2xl"
      />
      </div>
      <div className="flex flex-col flew-grow pl-5">
        <div className="flex justify-between">
          <p>{Location}</p>
          <HeartIcon className="h-7 cursor-pointer text-[#ff3eb4] absolute top-46 right-96"/>
        </div>
        <h4 className="text-xl ">{title}</h4>
        <div className="border-bottom w-10 pt-2"/>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-pink-600"/>
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2 ">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultCard;
