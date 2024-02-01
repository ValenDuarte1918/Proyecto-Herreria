import type { NextPage } from "next";
import { memo } from "react";

const NavBar: NextPage = memo(() => {
  return (
    <header className="self-stretch h-[114px] bg-white shadow-[0px_3px_11px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-between pt-[3px] pb-0 pr-0 pl-[75px] box-border gap-[20px] top-[0] z-[99] sticky max-w-full text-left text-5xl text-darkslategray-200 font-segoe-ui mq825:pl-[37px] mq825:box-border">
      <img
        className="h-[105px] w-[283px] relative"
        loading="eager"
        alt=""
        src="/div-logo.svg"
      />
      <div className="self-stretch w-[764px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25)_inset)] flex flex-row items-center justify-start py-[27px] px-[23px] box-border max-w-full">
        <div className="h-[29px] flex flex-col items-start justify-start pt-1.5 pb-0 pr-[11px] pl-0 box-border text-midnightblue">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
            <div className="flex-1 relative tracking-[0.45px] leading-[22.5px] flex items-center">
              INICIO
            </div>
            <div className="h-0 flex flex-row items-start justify-start py-0 px-[3px] box-border">
              <img
                className="h-0 w-[54px] relative object-contain"
                loading="eager"
                alt=""
                src="/navigation--menubar--menuitem--link.svg"
              />
            </div>
          </div>
        </div>
        <div className="h-[22px] w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border font-roboto">
          <b className="flex-1 relative leading-[22.5px] flex items-center [transform:_rotate(180deg)]">
            |
          </b>
        </div>
        <div className="w-[198px] flex flex-col items-start justify-start py-0 px-0 box-border text-darkslategray-100">
          <div className="self-stretch h-9 relative tracking-[0.45px] leading-[22.5px] flex items-center shrink-0 whitespace-nowrap">
            QUIÉNES SOMOS
          </div>
        </div>
        <div className="h-5 w-[207px] relative font-roboto">
          <div className="absolute top-[0px] left-[13px] tracking-[0.45px] leading-[22.5px] font-segoe-ui text-darkslategray-100 flex items-center w-[173px] h-[18px] whitespace-nowrap">
            QUÉ HACEMOS
          </div>
          <b className="absolute top-[1px] left-[194px] leading-[22.5px] flex items-center w-[5px] h-[18px]">
            |
          </b>
          <b className="absolute top-[2px] left-[0px] leading-[22.5px] flex items-center w-[5px] h-[18px]">
            |
          </b>
        </div>
        <div className="h-[22px] w-[134px] flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border text-darkslategray-100">
          <div className="self-stretch flex-1 relative tracking-[0.45px] leading-[22.5px] flex items-center">
            CONTACTO
          </div>
        </div>
      </div>
    </header>
  );
});

export default NavBar;
