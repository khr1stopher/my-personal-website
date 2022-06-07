import React from "react";
import CardProps from "../../interfaces/CardProps";
import {CardContainer} from '../indexComponents'
import companys from "../../images/companys";
const Card = (props: CardProps) => {

    const { base64 } = companys.find((Element) => Element.name === props.img) ?? { base64: '' };

    return <>
        <div className="card mb-4 col-span-6 md:col-span-1">
            <CardContainer className="flex lg:flex-row flex-col items-center justify-center">
                <img src={base64 == '' ? props.img : base64} alt=""
                    className="
                rounded-lg
                lg:w-[170px]
                md:h-[225px]
                w-[225px]
                object-contain" />
                <div className="tarjeta relative px-4
                lg:-ml-16 lg:w-[300px] 
                xl:w-[400px]
                 ml-auto w-full">
                    <div style={{ backgroundColor: 'var(--c5)' }} className="p-6 rounded-lg shadow-lg">
                        <div className="flex items-baseline">
                            <span className={`${props.tipe == 'contract' ? 'bg-orange-800 text-orange-200' : 'bg-teal-800 text-teal-200'} text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide`}>
                                {props.tipe == 'contract' ? 'freelancer' : props.tipe?.replace(':', ' ')} 
                            </span>
                        </div>
                        <a href="">
                            <h4 className="text-slate-300 mt-1 text-xl font-semibold uppercase leading-tight truncate">{props.title}</h4>
                        </a>
                        <span className="text-slate-400 text-sm">{props.description}</span>
                        <hr className="my-1" />
                        <span className="text-sm text-slate-400">{props.cargo}</span>
                        <div className="mt-2">
                            {props.technologys?.map((element, index) => {
                                return <span key={index} className={`text-slate-500 text-xs pl-1 inline-block rounded-full uppercase font-semibold tracking-wide`}>
                                    {element} •
                                </span>
                            })}
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    </>
}

export default Card;