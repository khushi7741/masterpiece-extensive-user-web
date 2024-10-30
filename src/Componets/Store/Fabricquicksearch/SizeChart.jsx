import React from "react";

const SizeChart = () => {
  let chart = [
    {
      sizecode: "a",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "b",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "c",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "d",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "e",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "f",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "g",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "h",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "i",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "j",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "k",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "l",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "m",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
    {
      sizecode: "n",
      size: "xxs",
      inches1: 31,
      cm1: 78,
      inches2: 24,
      cm2: 60,
      inches3: 33,
      cm3: 83.5,
    },
  ];
  return (
    <div className="p-10 w-full mb-10">
      <div className="border border-collapse border-dotted border-black overflow-x-auto capitalize font-semibold">
        <table className="w-full">
          <thead>
            <tr className="border border-collapse border-black bg-A8C2C3">
              <th className="border border-collapse border-black w-52 p-2"></th>
              <th className="border border-collapse border-black w-52 p-2"></th>
              <th
                colSpan={2}
                className="border border-collapse border-black w-10 p-2"
              >
                upper body
              </th>
              <th
                colSpan={4}
                className="border border-collapse border-black p-2"
              >
                lower body
              </th>
            </tr>
            <tr className="border border-collapse border-black">
              <th
                rowSpan={2}
                className="border border-collapse border-black bg-A8C2C3"
              >
                size code
              </th>
              <th
                rowSpan={2}
                className="border border-collapse border-black bg-B8AEAD"
              >
                size
              </th>
              <th
                colSpan={2}
                className="border border-collapse border-black bg-B8AEAD"
              >
                bust
              </th>
              <th
                colSpan={2}
                className="border border-collapse border-black bg-B8AEAD"
              >
                waist
              </th>
              <th
                colSpan={2}
                className="border border-collapse border-black bg-B8AEAD"
              >
                hip
              </th>
            </tr>
            <tr className="border border-collapse border-black bg-B8AEAD">
              <th className="border border-collapse border-black w-52">
                inches
              </th>
              <th className="border border-collapse border-black w-52 ">cM</th>
              <th className="border border-collapse border-black w-52">
                inches
              </th>
              <th className="border border-collapse border-black w-52">CM</th>
              <th className="border border-collapse border-black w-52">
                inches
              </th>
              <th className="border border-collapse border-black w-52">CM</th>
            </tr>
          </thead>
          <tbody>
            {chart.map(
              (
                { sizecode, size, inches1, cm1, inches2, cm2, inches3, cm3 },
                i
              ) => (
                <tr
                  className="text-center border border-collapse border-black bg-fill"
                  key={i}
                >
                  <td className="border border-collapse border-black bg-A8C2C3">
                    {sizecode}
                  </td>
                  <td className="border border-collapse border-black">
                    {size}
                  </td>
                  <td className="border border-collapse border-black">
                    {inches1}
                  </td>
                  <td className="border border-collapse border-black">{cm1}</td>
                  <td className="border border-collapse border-black">
                    {inches1}
                  </td>
                  <td className="border border-collapse border-black">{cm2}</td>
                  <td className="border border-collapse border-black">
                    {inches3}
                  </td>
                  <td className="border border-collapse border-black">{cm3}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizeChart;
