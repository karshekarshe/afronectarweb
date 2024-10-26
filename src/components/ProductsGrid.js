import React, { useEffect } from "react";
import "../App.css";

export default function ProductsGrid({ product }) {
  useEffect(() => {
    console.log("hello");
    console.log(product);
  });

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[21px] gap-[15px]">
      {product.variants.forEach((variant, index) => {
        return (
          <a class="product_item relative grid justify-center text-center transition-[0.5s] hover:bg-[#efeff3] bg-[#F5F5F5] md:px-[32px] px-0 md:pt-[28px] pt-[18px] md:pb-[20px] pb-[11px]">
            <p class="md:text-[8.453px] text-[4.943px] md:px-[7px] px-[8.5px] md:py-[2.1px] py-[2.3px] absolute left-[7.5px] top-[7.2px] bg-[#006838] w-fit text-[#fff] leading-[normal] font-medium">
              Nouveau
            </p>
            <img
              src="./img/product_1.png"
              class="md:mb-[60px] mb-0 transition-[0.5s]"
              alt="product_img"
            />
            <p class="md:pb-[10px] pb-[4px] md:text-[8.453px] text-[5.782px] text-[#8C8F97] md:leading-[15.498px] leading-[9.058px] font-medium">
              {variant.product.origin}
            </p>
            <h3 class="md:pb-[10px] pb-[4px] text-[#13131A] md:text-[11.271px] text-[8.676px] md:leading-[15.498px] leading-[9.062px] font-semibold">
              {variant.title}
            </h3>
            <h4 class="md:text-[11.271px] text-[6.748px] text-[#13131A] leading-[normal] font-bold">
              CHF {variant.price}
            </h4>
          </a>
        );
      })}
    </section>
  );
}
