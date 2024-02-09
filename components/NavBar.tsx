import type { NextPage } from "next";
import React from "react";
  
interface NavBarProps {
    className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
    return (
        <nav className={` flex flex-col w-full h-full items-end justify-center gap px-12 py-[3px] relative bg-white `}>
            <div className={`flex flex-col w-full h-[120px] items-end justify-center gap px-12 py-[3px] relative bg-white ` }>
                <div className="md:block hidden relative w-[847px] h-[1120px] mt-[-1.50px] mb-[-1.50px] z-[1]">
                    <div className="flex w-[607px] h-[45px] items-baseline gap-[3px] px-0 py-[31px] relative top-[6px] left-[156px]  ">
                        <img
                            className="absolute w-[45px] h-[25px] mt 10px top-[50px] left-[25px]"
                            alt="Navigation menubar"
                            src="navigation--menubar--menuitem--link.svg"
                        />
                        <div className=" relative w-[73px] h-[19px] z-[6] [font-family:'Segoe_UI-Semilight',Helvetica] font-normal text-[#0c2075] text-[16px] tracking-[0.45px] leading-[22px] relative text-center whitespace-nowrap">
                            INICIO
                        </div>
                        <div className="relative w-[5px] h-[18px] z-[3] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#203b1b] text-[24px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                            |
                        </div>
                        <div className="relative w-[162px] h-[36px] mt-[-1.00px] z-[4] [font-family:'Segoe_UI-Semilight',Helvetica] font-normal text-[#3b3b3b] text-[16px] text-center tracking-[0.45px] leading-[22.5px]">
                            QUIÉNES SOMOS
                        </div>
                        <div className="relative w-[5px] h-[18px] z-[3] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#203b1b] text-[24px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                            |
                        </div>
                        <div className="relative w-[162px] h-[18px] z-[2] [font-family:'Segoe_UI-Semilight',Helvetica] font-normal text-[#3b3b3b] text-[16px] text-center tracking-[0.45px] leading-[22.5px] whitespace-nowrap">
                            &nbsp;&nbsp; QUÉ HACEMOS
                        </div>
                        <div className="relative w-[5px] h-[18px] z-[1] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#203b1b] text-[24px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                            |
                        </div>
                        <div className="relative w-[93px] z-0 [font-family:'Segoe_UI-Semilight',Helvetica] font-normal text-[#3b3b3b] text-[16px] text-center tracking-[0.45px] leading-[22.5px]">
                            &nbsp;&nbsp;CONTACTO
                        </div>
                    </div>
                </div>
                <div className=" xxl:block inline-flex flex-col h-[105px] items-center justify-around gap-[10px] absolute top-[3px] left-[82px] z-0">
                    <img className="relative w-[268.28px] h-[98.96px]" alt="Group" src="div-logo.svg" />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;