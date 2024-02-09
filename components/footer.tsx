import next from "next";
import React from "react";

const Footer = (): JSX.Element => {
    return (
        <div className="absolute w-[1728px] h-[543px] bg-[#e6e8e3]">
            <div className="w-[120px] top-[31px] left-[264px] absolute h-[212px]">
                <div className="w-[400px] top-0 left-0 absolute h-[212px]">
                    <div className="absolute w-[294px] h-[48px] top-[9px] left-0 [font-family:'Segoe_UI-Semilight',Helvetica] font-normal text-[#65727a] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Arte metal
                    </div>
                    <div className="absolute w-[382px] h-[124px] top-[68px] left-0">
                        <div className="absolute w-[370px] h-[67px] top-[3px] left-0 [font-family:'Roboto-Light',Helvetica] font-light text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px]">
                            Descripcion breve...
                        </div>
                    </div>
                </div>
                <div className="w-[400px] top-0 left-[400px] absolute h-[212px]">
                    <div className="relative w-[382px] h-[196px] top-[8px] left-[9px]">
                        <p className="absolute w-[287px] h-[43px] top-[3px] left-0 [font-family:'Segoe_UI-Black',Helvetica] font-normal text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px]">
                            <span className="font-black">Dirección</span>
                            <span className="[font-family:'Segoe_UI-Regular',Helvetica]">
                                :<br />
                                Salta 241, San Miguel, Buenos Aires
                            </span>
                        </p>
                        <p className="absolute w-[89px] h-[43px] top-[75px] left-0 [font-family:'Segoe_UI-Black',Helvetica] font-normal text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px]">
                            <span className="font-black">Celular</span>
                            <span className="[font-family:'Roboto-Bold',Helvetica] font-bold">
                                :<br />
                            </span>
                            <span className="[font-family:'Segoe_UI-Regular',Helvetica]">1157491731</span>
                        </p>
                        <p className="absolute w-[215px] h-[43px] top-[147px] left-0 [font-family:'Segoe_UI-Bold',Helvetica] font-normal text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px]">
                            <span className="font-bold">Email</span>
                            <span className="[font-family:'Roboto-Bold',Helvetica] font-bold">
                                : 
                                <br />
                            </span>
                            <span className="[font-family:'Segoe_UI-Regular',Helvetica]">Procesosmet@hotmail.com</span>
                        </p>
                    </div>
                </div>
                <div className="w-[400px] top-0 left-[800px] absolute h-[212px]">
                    <div className="relative w-[382px] h-[148px] top-[8px] left-[18px]">
                        <div className="absolute w-[362px] h-[67px] top-[3px] left-0 [font-family:'Segoe_UI-Black',Helvetica] font-black text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px]">
                            Horario de atención:
                        </div>
                        <div className="absolute w-[112px] h-[43px] top-[99px] left-0 [font-family:'Segoe_UI-Black',Helvetica] font-black text-[#3b3b3b] text-[16px] tracking-[0] leading-[24px]">
                            Forma de pago:
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[510px] h-[83px] items-start gap-[10px] px-[506px] py-0 absolute top-[460px] left-0 bg-[#1f1f1f] overflow-hidden">
                <div className="relative w-[767px] h-[83.38px] mr-[-51.00px] bg-[#1f1f1f]">
                    <div className="absolute w-[138px] h-[18px] top-[31px] left-[315px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
                        Copyright © 2024  |
                    </div>
                    <div className="absolute w-[82px] h-[18px] top-[31px] left-[147px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
                        {"  "}Aviso legal
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;