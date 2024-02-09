import React from "react";
import next from "next";

const Contacto = (): JSX.Element => {
    return (
        <div className="relative w-[1205px] h-[414px]">
            <div className="w-[575px] top-[25px] left-[15px] absolute h-[24px]">
                <p className="absolute w-[61px] h-[19px] top-px left-0 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                    <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px]">
                        Nombre
                    </span>
                    <span className="[font-family:'Roboto-Light',Helvetica] font-light">:</span>
                </p>
            </div>
            <div className="absolute w-[358px] h-[40px] top-[52px] left-[15px] bg-white border border-solid border-[#65727a]" />
            <div className="w-[575px] top-[25px] left-[615px] absolute h-[24px]">
                <div className="absolute w-[65px] h-[19px] top-px left-0 [font-family:'Segoe_UI-Semilight',Helvetica] font-normal text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                    Teléfono:
                </div>
            </div>
            <div className="absolute w-[358px] h-[40px] top-[52px] left-[615px] bg-white border border-solid border-[#65727a]" />
            <div className="w-[1175px] top-[105px] left-[15px] absolute h-[24px]">
                <p className="absolute w-[51px] h-[19px] top-px left-0 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                    <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px]">
                        Correo
                    </span>
                    <span className="[font-family:'Roboto-Light',Helvetica] font-light">:</span>
                </p>
            </div>
            <div className="absolute w-[358px] h-[40px] top-[132px] left-[15px] bg-white border border-solid border-[#65727a]" />
            <div className="w-[1175px] top-[185px] left-[15px] absolute h-[24px]">
                <p className="absolute w-[63px] h-[19px] top-px left-0 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                    <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px]">
                        Mensaje
                    </span>
                    <span className="[font-family:'Roboto-Light',Helvetica] font-light">:</span>
                </p>
            </div>
            <div className="absolute w-[958px] h-[80px] top-[212px] left-[15px] bg-white border border-solid border-[#65727a]" />
            <div className="absolute w-[280px] h-[40px] top-[349px] left-[354px] bg-[#65727a] rounded-[50px] border border-solid border-white shadow-[0px_3px_11px_#00000040]">
                <div className="absolute w-[41px] h-[18px] top-[10px] left-[122px] [font-family:'Segoe_UI-Semilight',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Enviar
                </div>
            </div>
            <div className="flex flex-col items-start gap-[10px] absolute w-[702px] h-[71px] top-[-169px] left-[158px]">
                <p className="relative self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#3b3b3b] text-[32px] text-center tracking-[0] leading-[24px]">
                    <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#3b3b3b] text-[32px] tracking-[0] leading-[24px]">
                        ¿Tiene una pregunta? Envíenos un mensaje y nos
                        <br />
                    </span>
                </p>
                <p className="relative self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#3b3b3b] text-[32px] text-center tracking-[0] leading-[24px]">
                    <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#3b3b3b] text-[32px] tracking-[0] leading-[24px]">
                        pondremos en contacto con usted!!
                    </span>
                </p>
            </div>
        </div>
    );
};
export default Contacto;