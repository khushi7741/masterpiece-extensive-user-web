import { IconArrowZigZag, IconSearch } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className="relative mb-2 w-full">
        <img
          src="/Images/User/home/backimg.jpg"
          alt="backimg"
          className="w-full md:h-full h-96"
        />
        <div className="absolute text-white h-full top-0 flex flex-col justify-center items-center w-full">
          <div className="flex flex-col gap-3 w-full justify-center items-center">
            <h1 className="md:mb-6 xl:text-7xl lg:text-5xl md:text-2xl text-xl font-bold font-Mazaeni w-1/2 text-center">
              promoting custom fashion,for your perfect fits!
            </h1>
            <div className="relative md:mb-6 lg:w-2/5 w-4/5">
              <input
                type="search"
                className="w-full px-12 lg:py-4 py-2 rounded-lg md:placeholder:text-base placeholder:text-sm"
                placeholder="search for designs,patterns"
              />
              <IconSearch className="absolute w-6 h-6 text-BA570B lg:top-4 top-2 left-3" />
              <button className="absolute md:px-6 px-2 lg:py-2 rounded-md bg-BA570B right-3 top-2">
                search
              </button>
            </div>
            <div className="flex md:flex-row flex-col md:gap-5 gap-2 text-sm items-center">
              <div className="flex gap-1">
                <p className="text-lg font-semibold">Popular searches</p>
                <IconArrowZigZag className="h-6 w-6" />
              </div>
              <Link
                to=""
                className="px-4 py-2 border bg-BA570B/20 rounded-3xl border-F6F2EC/30"
              >
                lehenga
              </Link>
              <Link
                to=""
                className="px-4 py-2 border bg-BA570B/20 rounded-3xl border-F6F2EC/30"
              >
                formal wear
              </Link>
              <Link
                to=""
                className="px-4 py-2 border bg-BA570B/20 rounded-3xl border-F6F2EC/30"
              >
                party wear
              </Link>
              <Link
                to=""
                className="px-4 py-2 border bg-BA570B/20 rounded-3xl border-F6F2EC/30"
              >
                saree
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Main