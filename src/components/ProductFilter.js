import "../App.css";
import React, { useEffect, useState } from "react";
import instance from "../utils/Axios";
import IconCoffeeExpresso from "../assets/images/expresso.png"
import IconCoffeeTurkPot from "../assets/images/turk-pot.png"
import IconCoffeeFrenchPress from "../assets/images/french-press.png"
import IconCoffeeMokaPot from "../assets/images/moka-pot.png"
import IconCoffeeBeans from "../assets/images/coffee-beans.png"


export default function ProductFilter({setProduct}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await instance.get("api/categories/");
      return response.data;
    };
    fetchCategories().then((data) => setCategories(_ => [{name:'tout'} , ...data]));
  }, []);

   const coffeeMakers = {
       "tout" : {
           icon: IconCoffeeBeans
       },
    "cafetière à piston": {
        icon: IconCoffeeFrenchPress
    },
    "cafetière turque": {
        icon: IconCoffeeTurkPot
    },
    "cafetière italienne": {
        icon: IconCoffeeMokaPot
    },
    "expresso": {
        icon: IconCoffeeExpresso
    }
};

   const fetchProductByCategory = async (categoryName) => {
        const response = await instance.get(`api/variants/?category__name=${categoryName}`);
        return response.data;
   }


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
                imageUrl={coffeeMakers[category.name.toLowerCase()]?.icon}
                setProduct={setProduct}
                fetchProductByCategory={fetchProductByCategory}

              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FilterButton({ index, activeIndex, setActiveIndex, name, imageUrl, setProduct, fetchProductByCategory  }) {

  return (
    <button
        id={index}
        value={name}
        onClick={
            async (event) => {
                const categoryName = event.currentTarget.value.toLowerCase();
                const index = event.currentTarget.id;
                setActiveIndex(index)
                if(categoryName !== 'tout') {
                    const products = await fetchProductByCategory(categoryName);
                    console.log(products)
                    setProduct(products)
                }
            }
        }
        type="button"
        className={`hover:bg-[#006838] ${index === activeIndex ? "bg-[#006838] text-[#fff]" : "bg-white"} flex flex-row items-center justify-center gap-2 capitalize  hover:text-[#fff] transition-[0.5s] md:text-[18px] text-[12.956px] leading-[normal] font-medium text-[#49321B] md:h-[50px] h-[36px] px-[20px] rounded-[70px]`}
    >
      <img className="h6 w-6 object-fill" src={imageUrl} alt="coffee type icons"/>
      {name}
    </button>
  );
}
