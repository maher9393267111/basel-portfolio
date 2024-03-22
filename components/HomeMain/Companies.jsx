"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay ,Pagination } from "swiper/modules";
// import { Pagination, Autoplay } from 'swiper'
// import { cpBrandsData } from "./Data";
import { useTranslation } from "next-i18next";
import { Zoom ,Fade } from "react-awesome-reveal";


import "swiper/css";

const BrandsSlider = ({}) => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    850: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },

    1270: {
        slidesPerView: 3,
      },
  };

 
  const {t} = useTranslation("common") 

  const brandsData = t('companies', { returnObjects: true }) 


  //const brandsData =  cpBrandsData 

  return (
    <div
    
 
    
    
    className="brands_slide w-full mt-24 mb-4 ">
      <div className="mb-6 text-3xl md:text-4xl font-extrabold capitalize">

        <h1 className=" arabic shimmer  text-center">
          {t("mecompanies")}
        </h1>
      </div>


<div className="w-full gap-12 sm:px-20 mdPlus:px-0 max-w-[1400px] mx-auto grid 
       grid-cols-[repeat(auto-fill,minmax(100%,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">



      { brandsData.map((brand ,index) => {
          return (
            <SwiperSlide
              key={index}
              className="min-w-[140px] p-4 !min-h-[230px] mb-12 bg-white rounded-lg shadow-xl"
            >
              <div
                className=" arabic  w-full h-full p-2 py-4 filter grayscale brightness-1/2 hover:filter-none transition duration-300"
                
              >


<a href={brand?.link}  target="_blank">

<p className="  !font-ib text-xl font-semibold text-primary text-center">{brand.title}</p>
<p className=" !font-kuf my-2 text-center font-semibold text-primary">{brand.desc}</p>

<div className="mt-12">
<img
                  src={brand?.imgUrl}
                  alt={brand.title}
                  fill
                  className=" h-[100px] mx-auto w-[100px]  rounded-full "
                />

                

</div>

       

</a>



              </div>
            </SwiperSlide>
          );
        })}

</div>





      {/* <Fade direction="right"> */}

{/*      
      <Swiper
         breakpoints={breakpoints}
         spaceBetween={50}
         speed={5000}
     
        pagination={{ clickable: true }}
    
        modules={[Pagination]}

        className="w-full h-fit"
      >
        { brandsData.map((brand ,index) => {
          return (
            <SwiperSlide
              key={index}
              className="min-w-[140px] p-4 !min-h-[230px] mb-12 bg-white rounded-lg shadow-xl"
            >
              <div
                className=" arabic  w-full h-full p-2 py-4 filter grayscale brightness-1/2 hover:filter-none transition duration-300"
                
              >


<a href={brand?.link}  target="_blank">

<p className="  !font-ib text-xl font-semibold text-primary text-center">{brand.title}</p>
<p className=" !font-kuf my-2 text-center font-semibold text-primary">{brand.desc}</p>

<div className="mt-12">
<img
                  src={brand?.imgUrl}
                  alt={brand.title}
                  fill
                  className=" h-[100px] mx-auto w-[100px]  rounded-full "
                />

                

</div>

       

</a>



              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
      {/* </Fade> */}
    </div>
  );
};

export default BrandsSlider;
