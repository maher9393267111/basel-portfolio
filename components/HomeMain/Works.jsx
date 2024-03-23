import Image from "next/image";
import {LaptopsDesktops} from './Data'
import { useTranslation } from "next-i18next";
import { Zoom ,Fade } from "react-awesome-reveal";

const ItemCategories = ({ category}) => {

    const items =LaptopsDesktops


    
  const {t} = useTranslation("common") 

  const worksdata = t('myworks', { returnObjects: true }) 


  return (
    <div
 
    
    className=" mb-6 md:mb-12 mt-6 md:mt-12 px-10 arabic">
      <div className="relative py-8 mb-4">
      <div className="mb-2 md:mb-6 text-3xl md:text-4xl font-extrabold capitalize">
        {/* <Fade direction="bottom"> */}

        
        <h1 className="arabic shimmer  text-center ">
          {t("works")}
        </h1>
        {/* </Fade> */}
      </div>


        <div className="absolute bottom-4 sm:bottom-6  sm:top-1/2 transform sm:-transform-y-1/2 h-1 w-[65%] sm:w-28 bg-secondary transform skew-x-[40deg]"></div>
      </div>
      {/* <Fade direction="right"> */}

     
      <div className="w-full sm:px-20 mdPlus:px-0 max-w-[1400px] mx-auto grid 
       grid-cols-[repeat(auto-fill,minmax(100%,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]
      
      
      items-stretch gap-12">
        {worksdata.map((item) => {
          return (
            <div key={item.id} className="pt-[62.5%]  h-[200px]  md:min-h-[275px] pb-12 relative arabic">
              <div className="absolute inset-0 w-full h-full group rounded-md overflow-hidde">
                <Image
                  src={item.imgUrl}
                  width={352}
                  height={740}
                  alt={item.title}
                  quality={100}
                  className="object-cover w-full h-full group-hover:transition"
                />
                <div className="absolute bottom-0 left-0 w-full h-[54px] sm:h-[90px] group-hover:h-full bg-gradient-to-r from-secondary group-hover:bg-gradient-to-b group-hover:from-primary group-hover:via-primary group-hover:rounded-md rounded-b-md transition-background duration-500 ease-in-out  bg-primary text-center transition-height duration-500 ease-in-out overflow-hidde">
                  <p
                    className={`absolute w-fit min-w-[18ch] top-1/2 left- px-3 transform -translate-y-1/2 group-hover:top-10 sm:group-hover:top-14 text-whit  shimmer font-semibold group-hover:font-bold text-md md:text-xl group-hover:text-[1.3rem] sm:group-hover:text-2xl transition-all duration-[500ms] ease-in-out`}
                  >
                    {item.title}
                  </p>
                  <p className="absolute !h-[200px] transform invisible opacity-0 scale-0 group-hover:visible group-hover:opacity-100 group-hover:scale-100 top-[4.5rem] sm:top-24 text-center text-sm md:text-md text-wrap px-4 md:px-8 text-bas text-white  arabic lin-clamp-3 transition-all duration-500 delay-300 ease-in-out">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* </Fade> */}
    </div>
  );
};

export default ItemCategories;
