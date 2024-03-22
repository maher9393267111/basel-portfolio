import Image from "next/image";


import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Slide,Fade  } from "react-awesome-reveal";


const MainHero = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className="gap-y  flex-col  lg:flex-row  mt-12 flex flex-wrap items-center justify-between gap-x-12 lg:-mt-1">
 

     
      <div
      
    
      
      
      className=" flex-1">
      {/* <Fade direction="right"> */}
        <h1 className="arabic text-primary relative text-2xl md:text-3xl  font-bold  font-kuf font-normal  mb-4 mt-3  md:max-w-[30ch] ">
    {t("me")}
      
        </h1>

{/* </Fade> */}
        
      </div>
    






      <div
         
      
      className=" img-container  flex justify-end md:w-[60%] lg:w-[50%]">
        <div className=" relative  justify-self-end">
        
          <div className="   absolute -z-10 -translate-x-1/2 -translate-y-1/2	">

            <Image
            className=" !rounded-lg"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27143%27%20height=%27105%27/%3e"
              alt=""
              width="143"
              height={"105"}
            />
          </div>
          {/* <Fade direction="left"> */}
          <Image
          className="mt-12 rounded-[16px]"
            src="/me2.jpg"
            alt="Doctor Nahas doctor near me"
            width="481"
            height={"502"}
          />

          {/* </Fade> */}




          {/* <div className="  absolute right-0 -z-10 translate-x-1/2 -translate-y-1/2	">
            <Image
              src="/widgets/points.svg"
              alt=""
              width="143"
              height={"105"}
            />
          </div> */}
        </div>
      </div>
    
    
   
    </div>
  );
};

export default MainHero;
