import "../App.css";
import React, { useEffect, useState } from "react";
import instance from "../utils/Axios";

export default function ProductFilter({ product, setProduct }) {
  const [activeIndex, setActiveIndex] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await instance.get("api/categories/");
      return response.data;
    };
    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    <section className="py-5">
      <div className="container mx-auto">
        <h2 className="text-center   pb-4 md:text-[32px] text-[22px] text-[#13131A] font-semibold leading-[normal]">
          Filtrer par utilisation
        </h2>

        <div className="flex flex-wrap md:gap-[20px] gap-[10px] justify-center md:pb-[40px] pb-[20px]">
          {categories.map((category, index) => {
            return (
              <FilterButton
                index={index}
                name={category.name}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FilterButton({ index, activeIndex, setActiveIndex, name }) {
  return (
    <button
      onClick={() => setActiveIndex(index)}
      type="button"
      className={`hover:bg-[#006838] ${index === activeIndex ? "bg-[#006838] text-[#fff]" : "bg-white"} capitalize  hover:text-[#fff] transition-[0.5s] md:text-[16px] text-[12.956px] leading-[normal] font-medium text-[#49321B] md:h-[50px] h-[36px] px-[20px] rounded-[70px] border border-[#D1D2D5] border-solid active`}
    >
      {name}
    </button>
  );
}
