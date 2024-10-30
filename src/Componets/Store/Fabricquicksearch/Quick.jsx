import React from "react";

const Quick = () => {
  let quick = [
    {
      length: "under bust",
      a: "1 - 1.5",
      b: "1.5 - 2",
      c: "1m",
      d: "2 - 2.5",
    },
    {
      length: "under bust",
      a: "1 - 1.5",
      b: "1.5 - 2",
      c: "1m",
      d: "2 - 2.5",
    },
    {
      length: "under bust",
      a: "1 - 1.5",
      b: "1.5 - 2",
      c: "1m",
      d: "2 - 2.5",
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col p-10 gap-5 w-full mb-10 capitalize">
      <div className="lg:w-1/5 w-full">
        <img src="/Images/User/top2.png" alt="top2" className="h-full w-full" />
      </div>
      <div className="lg:w-4/5 w-full border border-E8E8E8 rounded-xl overflow-x-auto">
        <table className="w-full">
          <thead className="w-full">
            <tr className="bg-A8C2C3">
              <th colSpan={5} className="px-2 py-5 text-lg">
                Estimated fabric [in meters]
              </th>
            </tr>
            <tr className="text-lg">
              <th rowSpan={2} className="w-1/5 bg-E1E1E1">
                outfits length
              </th>
              <th
                colSpan={4}
                className="px-2 py-5 bg-B8AEAD border-b-2 border-978684"
              >
                body size
              </th>
            </tr>
            <tr className="bg-B8AEAD">
              <th className="px-2 py-5">a</th>
              <th className="px-2 py-5">b</th>
              <th className="px-2 py-5">c</th>
              <th className="px-2 py-5">d</th>
            </tr>
          </thead>
          <tbody>
            {quick.map(({ length, a, b, c, d }, i) => (
              <tr className="font-semibold" key={i}>
                <td className="px-2 py-8 text-center bg-EDEDED">{length}</td>
                <td className="px-2 py-8 text-center bg-fill">{a}</td>
                <td className="px-2 py-8 text-center bg-fill">{b}</td>
                <td className="px-2 py-8 text-center bg-fill">{c}</td>
                <td className="px-2 py-8 text-center bg-fill">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Quick;
