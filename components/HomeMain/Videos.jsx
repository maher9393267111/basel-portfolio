
import Image from "next/image";

import { useTranslation } from "next-i18next";
import { Zoom ,Fade } from "react-awesome-reveal";
import ServiceCard from "./VideoCard";
import ReactPlayer from 'react-player';


const Videos = ({ }) => {

    

const video ='https://www.tiktok.com/@basel.alkasab/video/7334373145417141510?is_from_webapp=1&web_id=7314638160011740677'
    
  const {t} = useTranslation("common") 

  const brandsData = t('myworks', { returnObjects: true }) 


  return (
    <div className="mb-12 mt-24 px-10">
      <div className="relative py-8 mb-4">
      <div className="mb-2 md:mb-6 text-3xl md:text-4xl font-extrabold capitalize">
        <Fade direction="bottom">

        
        <h1 className="arabic shimmer  text-center ">
          {t("works")}
        </h1>
        </Fade>
      </div>


        <div className="absolute bottom-4 sm:bottom-6  sm:top-1/2 transform sm:-transform-y-1/2 h-1 w-[65%] sm:w-28 bg-secondary transform skew-x-[40deg]"></div>
      </div>
      {/* <Fade direction="right"> */}

     
      {/* <div className="w-full sm:px-20 mdPlus:px-0 max-w-[1400px] mx-auto grid 
       grid-cols-[repeat(auto-fill,minmax(100%,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]
      
      
      items-stretch gap-12">
        {[1,2,3,4,5,6,7,8,9].map((item ,index) => {
          return (
            <ServiceCard
            key={index}
                        isSelected={true}
                        video={video}
                        image="/me2.jpg"
                        title={t("service1")}
                        desc={t("service1Desc")}
                      />
          );
        })}
      </div> */}
      {/* </Fade> */}
    </div>
  );
};

export default Videos;

















// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// // import required modules
// import ServiceCard from "./VideoCard";

// import Link from "next/link";
// import { Pagination, Navigation ,Autoplay } from "swiper/modules";

// import { useRouter } from "next/router";
// import { useState } from "react";

// import { AnimatePresence, motion } from "framer-motion";
// import { useTranslation } from "next-i18next";

// const ServicesCards = ({ isServicePage = false, id = "" }) => {
//   const { t } = useTranslation("index");

//   const breakpoints = {
//     0: {
//       slidesPerView: 1,
//     },
//     320: {
//       slidesPerView: 1,
//     },
//     850: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 2,
//     },

//     1270: {
//         slidesPerView: 2,
//       },
//   };





//   const router = useRouter();
//   const [dropNumber, setDropNumber] = useState(Number(router?.query?.service) || 1);
//   return (
//     <section className="f-ai-c  relative flex-col justify-center" id={id}>
//       <div
//         className={`absolute inset-0 left-0 -z-10 w-[200vw] ${
//           router.locale == "ar" ? "translate-x-1/2" : "-translate-x-1/2"
//         } bg-grey-100`}
//       ></div>
//       <div
//         className={`f-ai-c my-4 w-full justify-between px-6 md:my-8 md:mx-8 ${
//           isServicePage ? "md:justify-center" : ""
//         } md:px-16  lg:mb-16 lg:px-24`}
//       >
//         <h2 className="text-center">
//           {t("servicesHeader").split(" ").slice(0, -1).join(" ")}
//           <span> Videos </span>
//         </h2>
       
//       </div>
//       <Swiper
//          breakpoints={breakpoints}
//          spaceBetween={50}
//          speed={5000}
//          loop={true}
//         // autoplay={{
//         //   delay: 0,
//         //   disableOnInteraction: false,
//         // }}
//         // modules={[Autoplay]}
//         pagination={{ clickable: true }}
      
//         modules={[Pagination]}
//         className="servicesSwiper text-start  "
//       >
//         <SwiperSlide
//           onClick={() => {
//             !isServicePage && router.push("/services?service=1#services");
//             isServicePage && document.getElementById("services-dropdown").scrollIntoView();

//             setDropNumber(1);
//           }}
//         >
//           <ServiceCard
//             isSelected={dropNumber === 1 && isServicePage}
//             image="/me2.jpg"
//             title={t("service1")}
//             desc={t("service1Desc")}
//           />
//         </SwiperSlide>
//         <SwiperSlide
//           onClick={() => {
//             !isServicePage && router.push("/services?service=2#services");

//             isServicePage && document.getElementById("services-dropdown").scrollIntoView();

//             setDropNumber(2);
//           }}
//         >
//           <ServiceCard
//             isSelected={dropNumber === 2 && isServicePage}
//             image="/me2.jpg"
//             title={t("service2")}
//             desc={t("service2Desc")}
//           />
//         </SwiperSlide>
//         <SwiperSlide
//           onClick={() => {
//             !isServicePage && router.push("/services?service=3#services");

//             isServicePage && document.getElementById("services-dropdown").scrollIntoView();

//             setDropNumber(3);
//           }}
//         >
//           <ServiceCard
//             isSelected={dropNumber === 3 && isServicePage}
//             image="/me2.jpg"
//             title={t("service3")}
//             desc={t("service3Desc")}
//           />
//         </SwiperSlide>{" "}
//         <SwiperSlide
//           onClick={() => {
//             !isServicePage && router.push("/services?service=5#services");

//             isServicePage && document.getElementById("services-dropdown").scrollIntoView();

//             setDropNumber(5);
//           }}
//         >
//           <ServiceCard
//             isSelected={dropNumber === 5 && isServicePage}
//             image="/me2.jpg"
//             title={t("service4")}
//             desc={t("service4Desc")}
//           />
//         </SwiperSlide>
//         <SwiperSlide
//           onClick={() => {
//             !isServicePage && router.push("/services?service=4#services");

//             isServicePage && document.getElementById("services-dropdown").scrollIntoView();

//             setDropNumber(4);
//           }}
//         >
//           <ServiceCard
//             isSelected={dropNumber === 4 && isServicePage}
//             image="/me2.jpg"
//             title={t("service5")}
//             desc={t("service5Desc")}
//           />
//         </SwiperSlide>
//       </Swiper>

     
//     </section>
//   );
// };

// export default ServicesCards;
