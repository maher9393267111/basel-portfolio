import React from 'react'
import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import parse from "html-react-parser";
import Loader from '@/components/common/Loader';
import dayjs from 'dayjs';


import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ChevronIcon } from '@/functions/icons';

import {
  getDocuments,
  getDocument,
} from "@/functions/firebase/getData";
import MainLayout from "@/components/layout";

export default function Article() {

    const [product, setProduct] = useState({});
    console.log("🎭🎭🎭>", product.title);
    const [loacding, setLoading] = useState(false);
  
    const router = useRouter();
    const locale =router.locale
    const id = router.query.id;
  
    useEffect(() => {
      const getProduct = async () => {
        setLoading(true);
        //setProduct({});
        const data = await getDocument("articles", id);
        console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
        setProduct(data);
        setLoading(false);
      };
  
      if (id) getProduct();
    }, [id]);

    console.log("proooooo" , product)


    function parseTimestamp(timestamp, format ="YYYY-MM-DD") {
        const date = new Date(
          timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
        );
        const formattedDate = dayjs(date).format(format);
        return formattedDate;
      }



  return (
    <MainLayout>
{product?.title &&
<div className="mt-12 w-full md:mt-16 px-4 md:px-20 font-Jost text-[#121212]">
            <span className=" flex flex-row items- space-x-3 items-center">
                <Link href='/'><p className=" text-[#121212] font-normal text-base">Home</p></Link>
                <img className='w-4 h-4' src='/vector.svg' alt="" />
                <Link href='/blog'><p className=" text-[#121212] font-normal text-base">Our Blog</p></Link>
            </span>
            <div className=" w-full flex flex-col items-center justify-center mt-8">
                <p className=" font-medium text-3xl md:text-5xl text-center md:px-[10%]">{product?.title}</p>
                <p className=" font-normal text-lg md:text-xl text-center mt-3">{parseTimestamp(product?.timeStamp)}</p>
                {product?.images?.length > 0 && product?.images?.map((img,index)=>{
                    return (
                        <div style={{backgroundImage:`url(${product?.images[index]})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[412px] mt-8 rounded-[20px] bg-[#D7C77B]"></div>
               
                    )
                })}
                {/* <div style={{backgroundImage:`url(${product?.images[0]})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[412px] mt-8 rounded-[20px] bg-[#D7C77B]"></div> */}
               




               




               
                <p className=" text-base text-[#676767] font-normal py-8 border-b border-[#EAEBF0]">
                    {parse(product?.desc)}
                    </p>
            </div>
        </div>
}


    </MainLayout>
  )
}



export const getStaticProps = async (ctx) => {
    return {
      revalidate: 1,
      props: {
        ...(await serverSideTranslations(ctx.locale, ["common"])),
      },
    };
  };