import React, {useEffect, useState} from "react";
import "../App.css";

export default function ProductsGrid({product}) {
  const [variants, setVariants] = useState([])
  useEffect(() => {
    setVariants(product.variants)
  }, [product]);

  return (
      <section className="py-5">
        <h2 className="text-center md:text-[32px] text-[22px] text-[#13131A] font-semibold leading-[normal] px-4">
          Nos cafés populaires à votre portée
        </h2>
        <div className="container mx-auto px-2 md:px-6  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2  md:gap-6 py-10">
          {variants && variants.map((variant, index) => {
            return (
                <a href={`products/${variant.slug}`}
                   class="product_item relative grid gap-4 py-4 justify-center text-center transition-[0.5s] hover:bg-amber-100 bg-amber-50">
                    <div className="flex flex-row items-center justify-between py-2 px-2 w-full gap-6">
                                <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-500 font-semibold px-2 py-2 rounded-2xl text-xs md:text-sm lg:text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                    </svg>
                                        4.8
                                </span>
                                <button className="inline-flex px-2 py-2 text-xs md:text-sm lg:text-base bg-white rounded-full gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>
                                    </svg>
                                    in stock {variant.quantity}
                                </button>
                    </div>
                    <img
                        src={variant.img}
                        class="mx-auto max-w-[150px] md:max-w-[200px] h-auto"
                        alt="product_img"
                    />
                    <div className="space-y-2">
                        <p className="md:pb-[10px] pb-[4px] md:text-[16px] text-[10px] text-[#8C8F97] md:leading-[15.498px] leading-[9.058px] font-medium">
                            Éthiopie
                        </p>
                        <h3 className="md:pb-[10px] text-left px-2 pb-[4px] capitalize text-[#13131A] text-sm  md:text-base lg:text-lg md:leading-relaxed leading-normal font-semibold">
                            {variant.title}
                        </h3>
                        <h4 className="md:text-base text-left px-2 text-sm text-green-700 leading-[normal] font-bold">
                            CHF {variant.price}
                        </h4>
                        <button
                            className="capitalize md:w-full bg-green-700 hover:bg-green-900 text-white text-base md:text-xl px-6 py-2 rounded-md ">acheter
                        </button>
                    </div>
                </a>
            );
          })}
        </div>
      </section>
  );
}
