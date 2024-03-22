import Image from "next/image";
import ReactPlayer from 'react-player';
import { TikTokEmbed } from "react-social-media-embed";
const ServiceCard = ({ image, title, desc, isSelected ,video  , key}) => {
  return (
    <div
    key={key}
      className={`${
        isSelected ? "selected" : ""
      } card h-[500px]  cursor-pointer overflow-hidde rounded-xl bg-white transition-all duration-300  shadow-xl `}
    >

<TikTokEmbed url={video} width={"100%"} muted={false} />


        {/* <ReactPlayer
        
        
        url={video}/> */}


      {/* <Image src={image} alt={title} width={"259"} height={"156"} /> */}


      {/* <div className="   p-6">
        <h3 className="arabic">{title}</h3>
        <p>{desc}</p>
      </div> */}

      <style jsx>
        {`
          h3 {
            @apply mb-2 font-bold;
            font-size: clamp(0.9rem, 0.9rem + 2vw, 1rem);
          }
          p {
            @apply text-light;
            font-size: clamp(0.9rem, 0.9rem + 2vw, 1rem);
          }
          .selected,
          .card:hover {
            @apply -translate-y-[2.5rem] shadow-xl;
          }
        `}
      </style>
    </div>
  );
};

export default ServiceCard;
