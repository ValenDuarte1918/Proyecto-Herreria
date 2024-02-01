import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const MacBookPro16: NextPage = () => {
  return (
    <div className="w-full relative bg-gainsboro overflow-hidden flex flex-col items-start justify-start pt-1 px-0 pb-[359px] box-border tracking-[normal]">
      <NavBar />
      <section className="self-stretch flex flex-row items-center justify-center bg-[url('/sidebar@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] mt-[-4px] text-left text-[56px] text-white font-segoe-ui">
        <div className="flex-1 bg-gray flex flex-col items-start justify-start pt-28 px-[202px] pb-[285px] box-border gap-[13px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq675:pt-6 mq675:pb-[185px] mq675:box-border mq825:pl-[101px] mq825:pr-[101px] mq825:box-border">
          <h1 className="m-0 w-[458px] h-[130px] relative text-inherit flex italic font-normal font-inherit items-center shrink-0 max-w-full z-[1] mq450:text-[34px] mq825:text-[45px]">
            BIENVENIDO A ARTE METAL
          </h1>
          <div className="w-[446px] h-[104px] relative text-5xl leading-[24px] flex items-center shrink-0 max-w-full z-[1] mq450:text-[19px] mq450:leading-[19px]">{`Somos una empresa dedica al rubro metalurgio con una trayectoria que cuenta con mas de 10 años de experiencia. `}</div>
        </div>
      </section>
    </div>
  );
};

export default MacBookPro16;

