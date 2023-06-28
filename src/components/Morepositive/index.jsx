import React from "react";
import { Foto } from "../../assets/images";

const Morepositive = () => {
  return (
    <section className="px-4">
      <div className="justify-center flex">
        <h1 className="my-4 text-[14vw] 2xl:text-[215px]">MOREPOSITIVE</h1>
      </div>
      <div className=" relative bg-red-400 w-full flex justify-center items-center overflow-hidden sm:h-[70vw] md:h-[47vw] 2xl:h-[720px]">
        <img className="w-full h-full object-cover object-top" src={Foto} loading="lazy" />
        <h1 className="absolute px-3 inset-x-0 text-white bottom-5 text-center xl:text-right xl:right-28 font-Montserrat font-bold text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit ut quisquam?</h1>
      </div>
      <div>
        <h1 className="font-Montserrat font-bold my-4 text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime nemo explicabo soluta id fugiat. Cum, culpa nostrum facilis atque rem architecto facere pariatur consequuntur fugiat minus, ex fuga? Vitae inventore fugiat id
          doloribus nisi iusto molestiae iste repudiandae eligendi totam ducimus excepturi expedita exercitationem quidem tempore perspiciatis quibusdam, aspernatur temporibus quod cumque vero!
        </h1>
        <hr className="bg-black h-[2px] h- my-4" />
      </div>
    </section>
  );
};

export default Morepositive;
