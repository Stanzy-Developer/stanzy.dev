import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

export const Clients = () => {
  return (
    <div className="py-28" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className=""
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-16">
          {companies.map(({ id, img, name, nameImg }) => (
            <div className="flex max-w-32 gap-2 md:max-w-60" key={id}>
              <Image src={img} alt={name} width={20} height={20} quality={90} />
              <Image
                src={nameImg}
                alt={name}
                width={80}
                height={24}
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
