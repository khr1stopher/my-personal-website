import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";

interface Props {
    children?: JSX.Element;
}

export const RevealSection = ({ children }: Props) => {

    const sectionVariant = {
        hidden: { opacity: 0, y: -75, transition: {
                when: "afterChildren",
            }
        },
        visible: { opacity: 1, y: 0, transition: {
                when: "beforeChildren",
                delay: 0.5,
                staggerChildren: 0.3,
            }
        },
    }

    const mainControls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div className="pb-16" ref={ref} >
            <motion.section 
            animate={mainControls}
            initial="hidden" variants={sectionVariant}>
                {children}
            </motion.section>
        </div>
    )

}