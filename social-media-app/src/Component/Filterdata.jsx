import React from "react";

const FilterData = ({ data }) => {
  return (
    <div className="mx-auto max-w-lg bg-opacity-70 bg-gray-300 p-8 rounded-lg shadow-lg">
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterData;
