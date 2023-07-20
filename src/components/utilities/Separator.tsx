import React from "react";
import SeparatorProps from "../../interfaces/SeparatorProps";

const Separator = (props: SeparatorProps) => <div className="separator mg:items-center md:justify-center px-8 mx-auto flex flex-wrap mt-10 mb-5 relative">
    <div className="absolute md:-top-5 h-32">
        <h2 className="text-4xl sm:text-6xl md:text-7xl text-center font-bold dark:text-cyan-500/20 text-cyan-700/20">{props.title}</h2>
    </div>
    <div className="w-full lg:w-1/2  p-5 relative md:pl-9 pl-0 ">
        <h2 className="text-3xl text-slate-300 font md:text-5xl font-bold md:text-center">{props.title}</h2>
        <p className="text-xl dark:text-slate-500 text-slate-500 md:text-center">{props.description}</p>
    </div>
</div>

export default Separator;
