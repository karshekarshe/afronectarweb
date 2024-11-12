import React, {useEffect, useState} from "react";
import "../App.css";

export default function ProductsGrid({product}) {
  const [variants, setVariants] = useState([])
  useEffect(() => {
    setVariants(product.variants)
  }, [product]);

  return (
    <section className="container mx-auto  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 py-10">
      {variants && variants.map((variant, index) => {
        return (
          <a href={`products/${variant.slug}`} class="product_item relative grid gap-4 py-4 justify-center text-center transition-[0.5s] hover:bg-amber-100 bg-amber-50">
            <p class="md:text-[8.453px] text-[4.943px] md:px-[7px] px-[8.5px] md:py-[2.1px] py-[2.3px] absolute left-[7.5px] top-[7.2px] bg-[#006838] w-fit text-[#fff] leading-[normal] font-medium">
              Nouveau
            </p>
            <img
              src={variant.img}
              class="transition-[0.5s] max-w-[200px] h-auto"
              alt="product_img"
            />
            <div className="space-y-2">
              <p className="md:pb-[10px] pb-[4px] md:text-[8.453px] text-[5.782px] text-[#8C8F97] md:leading-[15.498px] leading-[9.058px] font-medium">
                Éthiopie
              </p>
              <h3 className="md:pb-[10px] pb-[4px] capitalize text-[#13131A]  text-base md:leading-[15.498px] leading-[9.062px] font-semibold">
                {variant.title}
              </h3>
              <h4 className="md:text-base text-sm text-green-700 leading-[normal] font-bold">
                CHF {variant.price}
              </h4>
              <button className="capitalize w-full bg-green-700 hover:bg-green-900 text-white text-base md:text-xl px-6 py-2 rounded-md ">acheter</button>
            </div>
          </a>
        );
      })}
    </section>
  );
}
