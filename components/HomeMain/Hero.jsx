import Image from "next/image";


import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";


const MainHero = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className="gap-y   mt-12 flex flex-wrap items-center justify-between gap-x-12 lg:-mt-1">
      <div className=" flex-1">
        <h1 className=" relative text-2xl md:text-4xl  font-bold  font-kufi  mb-4 mt-3  md:max-w-[30ch] ">
    {t("me")}
          <div className="absolute bottom-1/2 right-0 -z-10 h-28 w-28 translate-y-1/2 rounded-full bg-primary blur-[150px] md:blur-[110px]"></div>
        </h1>

        
      </div>
      <div className=" img-container  flex justify-end md:w-[60%] lg:w-[50%]">
        <div className=" relative  justify-self-end">
          
          <div className="  absolute -z-10 -translate-x-1/2 -translate-y-1/2	">
            <Image
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27143%27%20height=%27105%27/%3e"
              alt=""
              width="143"
              height={"105"}
            />
          </div>
          <Image
          className="mt-12"
            src="https://dr-nahas.vercel.app/_next/image?url=%2Fimg%2Fhero.webp&w=640&q=75"
            alt="Doctor Nahas doctor near me"
            width="481"
            height={"502"}
          />
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
