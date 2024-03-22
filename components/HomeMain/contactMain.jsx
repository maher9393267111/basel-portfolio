"use client";
import React, { useRef, useState } from "react";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineMobile,
} from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import HoverButton from "./reusableComponent/hoverButton";

// import { socialMediaRedirect } from "@/constants";

import { useTranslation } from "next-i18next";
import { Zoom ,Fade } from "react-awesome-reveal";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation("common");

  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const mobileRef = useRef(null);
  const descriptionRef = useRef(null);

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const name = nameRef?.current?.value;
    const phone = mobileRef?.current?.value;
    const email = mailRef?.current?.value;
    const desc = descriptionRef?.current?.value;

    console.log(name, phone, email, desc);

    // pushing data to google sheet

    // const formDatab = new FormData(formEle);
    const formDatab = formEle;
    console.log(formDatab, "body");

    const data = {
      name: name,
      phone: phone,
      email: email,
      desc: desc,
    };

    setLoading(true);

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        name: name,
        email: email,
        desc: desc,

        phone: phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        alert("Thank you for contacting us. We will get back to you soon.");
        // clear the form
        try {
          nameRef.current.value = "";
          mailRef.current.value = "";
          if (mobileRef.current) mobileRef.current.value = "";
          descriptionRef.current.value = "";
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  return (
    <div
  
      className="w-full h-fit arabic md:h-[650px] my-24 text-black px-10 !bg-white"
      id="contactUs"
    >
      
      <div className="m-auto w-[90%] !bg-white h-full flex flex-col md:flex-row items-center justify-center rounded-2xl">
      
        <div
          className="relative h-[300px] md:h-full w-full md:w-[30%] z-20 rounded-l-2xl"
          style={{
            backgroundImage: `url("/me4.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "1rem",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-primary2 rounded-2xl bg-opacity-50 z-10 "></div>
          <div className="absolute h-full md:h-full flex flex-row items-end z-20">
            {/* <div className="flex flex-col pl-6 text-white pb-4">
              <Fade>
                <div className="text-2xl md:text-3xl gil-med text">
                  Spotmies
                </div>
                <p className="gil-light text-xs opacity-70 w-[70%]">
                  AU incubation centre, Andhra university, Visakhapatnam -
                  530003,
                  <br />
                  +91 8341980196
                  <br />
                  info@spotmies.com
                </p>
              </Fade>
              <div className="flex flex-row w-[50%] pt-4 justify-between">
                <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer ">
                  <Fade left>
                    {" "}
                    <AiOutlineTwitter
                      size="1.6rem"
                      onClick={() => socialMediaRedirect("twitter")}
                    />
                  </Fade>
                </div>

                <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer">
                  <Fade left>
                    {" "}
                    <FaLinkedinIn
                      size="1.4rem"
                      onClick={() => socialMediaRedirect("linkedin")}
                    />
                  </Fade>
                </div>

                <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer">
                  <Fade left>
                    <AiFillInstagram
                      size="1.6rem"
                      onClick={() => socialMediaRedirect("instagram")}
                    />
                  </Fade>
                </div>

                <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer">
                  <Fade left>
                    <FaYoutube
                      size="1.4rem"
                      onClick={() => socialMediaRedirect("youtube")}
                    />
                  </Fade>
                </div>
              </div>
            </div> */}



          </div>
        </div>
       
        <div className="h-fit md:h-full w-full md:w-[70%] gil-reg">
          <div className="h-full w-full m-auto p-4 md:p-8">
          {/* <Fade direction="right"> */}
            <form
              className="flex flex-col items-center justify-between form"
              onSubmit={(e) => Submit(e)}
            >
              <div className="flex flex-co items-star  w-[90%] md:w-[90%]">
                
              <h1 className="arabic w-full text-3xl md:text-4xl font-semibold shimmer  text-center ">
          {t("contactTitle")}
        </h1>
                
              </div>
              <div className="w-[90%] flex flex-row items-center justify-between pt-6">
           
                  <div className="relative mb-6 w-[100%]">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <AiOutlineUser />
                    </div>
                    <input
                      name="name"
                      ref={nameRef}
                      required={true}
                      type="text"
                      id="input-group-1"
                      className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                      placeholder={t("name")}
                    />
                  </div>
                
                {/* <div className="relative mb-6 w-[45%]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiOutlineUser />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                    placeholder="Last name"
                  />
                </div> */}
              </div>
              {/* <Fade bottom> */}
                <div className="relative mb-6 w-[90%]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiOutlineMail />
                  </div>
                  <input
                    name="Email"
                    ref={mailRef}
                    required={true}
                    type="email"
                    id="input-group-1"
                    className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                    placeholder={t("email")}
                  />
                </div>
              {/* </Fade> */}
              {/* <Fade bottom> */}
                <div className="relative mb-6 w-[90%]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiOutlineMobile />
                  </div>
                  <input
                    name="Phone"
                    ref={mobileRef}
                    type="text"
                    id="input-group-1"
                    className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                    placeholder={t("phone")}
                  />
                </div>
              {/* </Fade> */}
              {/* <Fade bottom> */}
                <div className="relative mb-6 w-[90%]">
                  <textarea
                    name="Message"
                    ref={descriptionRef}
                    required={true}
                    rows={5}
                    type="text"
                    id="input-group-1"
                    className="outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 "
                    placeholder={t("message")}
                  />
                  <input
                    hidden
                    type="date"
                    name="Date"
                    defaultValue={new Date().toISOString().substring(0, 10)}
                  />
                </div>
              {/* </Fade> */}

              {/* <Fade bottom> */}
                <div className="flex flex-row justify-end w-[90%]">
                  <button className="gil-reg  lg:text-lg flex flex-row items-center justify-center hover:bg-primary hover:text-white  min-w-[120px] lg:min-w-[140px] lg:min-h-[50px] min-h-[40px] mt-4   border shimme !bg-primary border-primary w-full h-12 !rounded-xl text-xl text-white">
                    {t("send")}
                  </button>
                  {/* <HoverButton
                    text="Submit"
                    type="submit"
                    className="w-full h-12 rounded-xl text-2xl"
                    loading={loading}
                  /> */}
                </div>
              {/* </Fade> */}
            </form>
{/* </Fade> */}


          </div>
        </div>




      </div>
      
    </div>
  );
}
