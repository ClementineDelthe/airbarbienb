import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/img/BBandeau3.jpeg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2  right-32">
        <p className="text-sm sm:text-lg text-white">Not sure which to choose ?</p>
        <button className="text-pink-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Discover</button>
      </div>
    </div>
  )
}

export default Banner
