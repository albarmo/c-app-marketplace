"use client";

import React, { type FC, type PropsWithChildren } from "react";
import * as motion from "motion/react-client"
import { usePathname } from "next/navigation";

const Transition: FC<PropsWithChildren> = ({ children }) => {
    const pathname = usePathname()
    return (
        <motion.div
            key={pathname}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.25 }}
        >
            {children}
        </motion.div>
    );
}

export default Transition