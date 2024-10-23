import React from 'react'
import { Link } from 'react-router-dom'

const More = () => {
  const more = [
    {
      link: "lehenga"
    },
    {
      link: "blouse"
    },
    {
      link: "fall"
    },
    {
      link: "party wear"
    },
    {
      link: "skirt"
    },
    {
      link: "sharara"
    },
    {
      link: "gown"
    },
    {
      link: "dress"
    },
    {
      link: "formal wear"
    },
    {
      link: "pants"
    },
    {
      link: "formal paint"
    },
    {
      link: "indian suit"
    },
    {
      link: "jump suit"
    },
    {
      link: "islamic clothing"
    },
    {
      link: "saree"
    },
    {
      link: "gharara"
    },
    {
      link: "shirt"
    },
    {
      link: "top"
    },
    {
      link: "kaftan"
    },
  ];
  return (
    <div className='capitalize mb-10'>
        <h1 className='mb-8 text-2xl font-semibold'>there's so much more for you to discover</h1>
        <div className='flex flex-wrap gap-4 text-BA570B text-lg'>
          {more.map(({
            link,
          },i
          ) => (
            <Link to="" className="bg-BA570B/10 py-1 px-3 rounded-md" key={i}>{link}</Link>
          ))}
        </div>
    </div>
  )
}

export default More