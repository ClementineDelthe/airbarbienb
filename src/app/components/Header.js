"use client"
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/navigation";


function Header(placeholder) {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [nbGuests, setNbGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => {
    setSearchInput('');
  }

  const search = () => {
    // router.push({
    //   pathname: "/search",
    //   query: { location: searchInput },
    //   startDate: startDate.toISOString(),
    //   endDate: endDate.toISOString(),
    //   nbGuests,
    // });
    //  router.push(`/search?location=${searchInput}`);
    const formattedStartDate = startDate.toISOString();
    const formattedEndDate = endDate.toISOString();
    const queryString = `location=${encodeURIComponent(searchInput)}&startDate=${encodeURIComponent(formattedStartDate)}&endDate=${encodeURIComponent(formattedEndDate)}&nbGuests=${encodeURIComponent(nbGuests)}`;

    router.push(`/search?${queryString}`);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }


  // console.log(placeholder.placeholder);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="/img/BLogo2.jpeg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className=""
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder={ placeholder.placeholder || "Start your search" }/>
        <MagnifyingGlassIcon
          className="hidden md:inline-flex h-8 bg-[#ff3eb4] text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Your Barbies</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (

        <div className="flex flex-col col-span-3 mx-auto mt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#ff3eb4"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <UserIcon className="h-5" />
            <input
              value={nbGuests}
              onChange={(e) => setNbGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-[#ff3eb4]"
            />
          </div>
          <div className="flex ">
            <button
              onClick={resetInput}
              className="flex-grow text-gray-400">Cancel</button>
            <button
              onClick={search}
              className="flex-grow text-pink-300">Search</button>
          </div>

        </div>

      )}
    </header>
  )
}

export default Header
