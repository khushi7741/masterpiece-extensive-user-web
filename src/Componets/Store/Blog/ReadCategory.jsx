import React from 'react'

const ReadCategory = () => {
    const ReadCategoryData = [
        "/Images/User/blog/blog1.png",
        "/Images/User/blog/blog2.png",
        "/Images/User/blog/blog3.png",
        "/Images/User/blog/blog4.png",
        "/Images/User/blog/blog1.png",
      ];
  return (
    <div>
        <div className="p-8">
        <div className=" container mx-auto flex flex-col gap-5">
          <h1 className="text-3xl font-Mazaeni">Read by category</h1>
          <div className="flex flex-wrap gap-5">
            {ReadCategoryData.map((v, i) => (
              <div key={i}>
                <img src={v} alt="real1" />
              </div>
            ))}
          </div>
        </div>
        </div>
    </div>
  )
}

export default ReadCategory