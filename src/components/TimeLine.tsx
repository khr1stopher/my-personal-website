import React from "react";
import { SectionPage } from "./indexComponents";
import TimeLineRow from "./utilities/TimeLineRow";
import { data } from "../services/companies-timeline";

const TimeLine = () => {
    return <SectionPage>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {
                data.map(e => {
                    return <TimeLineRow fecha={e.fecha} companyName={e["company-name"]} description={e.description} skills={e.skills} position={e.position} />
                })
            }
        </ol>
        <div className="flex justify-center items-center">
                
        </div>

    </SectionPage>
}

export default TimeLine;