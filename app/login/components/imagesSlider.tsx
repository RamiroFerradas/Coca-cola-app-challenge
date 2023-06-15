import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

import products1 from "@/public/assets/carrousel/815ed0d2d10a098a199f9364951c1323.jpeg";
import products2 from "@/public/assets/carrousel/compania-total-bebidas.jpg";
import products3 from "@/public/assets/carrousel/productos-cocacola.jpg";

export default function ImagesSlider() {
  return (
    <Carousel
      transition={{ duration: 2 }}
      className="rounded-xl flex justify-center items-center h-72"
      autoplay
      loop
    >
      <Image
        src={products1}
        alt="image 1"
        className="h-full w-full object-cover"
        width={500}
        height={500}
      />
      <Image
        src={products2}
        alt="image 2"
        className="h-full w-full object-cover"
        width={500}
        height={500}
      />
      <Image
        src={products3}
        alt="image 3"
        className="h-full w-full object-cover"
        width={1000}
        height={1000}
      />
    </Carousel>
  );
}
