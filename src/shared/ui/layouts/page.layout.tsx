"use client";

import React, {
    type FC,
    type PropsWithChildren,
} from "react";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="min-h-lvh pt-14 bg-gray-50">
            {children}
        </div>
    );
};

export default PageLayout;