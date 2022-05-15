import React from "react";
import CardProps from "../interfaces/CardProps";

const Card = (props: CardProps) => {
    return <>
        <div className="card mb-4 col-span-6">
            <div className="flex items-center justify-center">
                <img src={props.img} alt=""
                    className="
                rounded-lg
                h-[225px]
                w-[225px]
                object-contain" />
                <div className="relative px-4 -ml-16">
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
                            {/* `${
                                    element == 'vue' ? 'bg-emerald-200 text-emerald-800' :
                                    element == 'typescript' ? 'bg-sky-200 text-sky-800' :
                                    element == 'c#' || element == '.net' || element == '.net core' ? 'bg-fuchsia-200 text-fuchsia-800' :
                                    element == 'codeigneiter' || element == 'php' ? 'bg-rose-200 text-rose-800' :
                                    element == 'java' ? 'bg-gray-200 text-gray-800' :
                                    element == 'javascript' ? 'bg-yellow-200 text-yellow-800' : ''
                            }` */}
                            {props.technologys?.map((element, index) => {
                                return <span key={index} className={`text-slate-500 text-xs pl-1 inline-block rounded-full uppercase font-semibold tracking-wide`}>
                                    {element} •
                                </span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Card;