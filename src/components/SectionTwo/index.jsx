import React from "react";
import { FotoTiga } from "../../assets/images";

const SectionTwo = () => {
  return (
    <div className="bg-[#c7c4b0] px-4 py-2">
      <hr className="bg-black h-[2px] my-4" />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="font-Montserrat font-bold mt-12 flex-1 ">
          <h1 className="text-3xl mb-12">
            POST EXT. 2023 CREATED BY <span className="underline">MORESO</span>
          </h1>
          <p className="mb-8  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis distinctio similique harum, explicabo aliquid facilis cumque perspiciatis cum voluptas! Mollitia, enim delectus iusto magni culpa veniam perferendis ex
            corrupti illum soluta quidem est fugit, accusamus eligendi nam.doloribus autem.
          </p>
          <div className="gap-x-4 flex">
            <button className="bg-black text-white rounded-full px-4 py-1 text-sm hover:bg-[#292929] active:bg-[#141414] transition duration-150 ease-in-out">EDITORIAL</button>
            <button className="rounded-full px-4 py-1 border-2 border-black text-sm active:bg-[#cccc] hover:bg-white transition duration-200 ease-in-out">STUDIO EDITOR</button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center overflow-hidden flex-1">
          <img className="w-full h-full object-cover object-center" src={FotoTiga} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
