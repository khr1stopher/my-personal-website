import React from "react";
import { TimeLineRowProp } from "../../interfaces/UtilitiesInterfaces";

const TimeLineRow = (prop: TimeLineRowProp) => {
    return <li className="mb-8 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:text-cyan-700/20"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{prop.fecha}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{prop.companyName}</h3>
        <h4 className="text-sm text-gray-900 dark:text-white">{prop.position}</h4>
        { 
            prop.description.map(e => {
                return <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">{e}</p>
            })
        }
        <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
            prop.skills,
        )}</p>
    </li>
}

export default TimeLineRow;