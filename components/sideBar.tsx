import React from "react";
import next from "next";

const SideBar = (): JSX.Element => {
    return (
        <div className="flex flex-wrap w-[1728px] h-[644px] items-start gap-[10px_10px] relative bg-[url(/side-bar.png)] bg-cover bg-[50%_50%]">
            <div className="relative w-[1728px] h-[644px] bg-black opacity-50" />
            <div className="absolute w-[458px] h-[130px] top-[111px] left-[202px] [font-family:'Segoe_UI-SemilightItalic',Helvetica] font-normal italic text-white text-[56px] tracking-[0] leading-[normal]">
                BIENVENIDO A ARTE METAL
            </div>
            <p className="absolute w-[446px] h-[104px] top-[254px] left-[202px] [font-family:'Segoe_UI-Semilight',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[24px]">
                Somos una empresa dedica al rubro metalúrgico con una trayectoria con mas de 10 años de experiencia.
            </p>
        </div>
    );
};
export default SideBar;
