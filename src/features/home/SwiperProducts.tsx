"use client"
import ProductCard from "@/components/ProductCard"
import SectionHeading from "@/components/SectionHeading"
import SwiperNavButtons from "@/components/SwiperNavButtons"
import { IProduct } from "@/models"
import { Box } from "@chakra-ui/react"
import { CSSProperties } from "react"
import { SwiperOptions, Navigation, Autoplay } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

interface Props {
  title: string
  products: IProduct[]
}

const slidesStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px", // Adjust this value for smaller screens if needed
  width: "100%", // Make slides take full width of the Swiper on smaller screens
}

function SwiperProducts({ title, products }: Props) {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto", // Let Swiper determine the number of slides
    breakpoints: {
      // when window width is >= 0px
      0: {
        slidesPerView: 1, // Show 1 slide on small screens
      },
      // when window width is >= 640px
      640: {
        slidesPerView: "auto", // Revert to auto behavior on larger screens
      },
    },
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  }

  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" px={{ base: "1rem", md: "2rem" }} mt={{ base: "2rem", lg: "6rem" }}
    >
      <SectionHeading title={title} />
      <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
        {products.map(product => (
          <SwiperSlide key={product.id} style={slidesStyles}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>
    </Box>
  )
}

export default SwiperProducts

