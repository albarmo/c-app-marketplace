"use client";

import React, {
    type FC,
    type PropsWithChildren,
} from "react";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="w-screen min-h-screen space-y-2.5 pb-16">
            {children}
        </main>
    );
};

export default HomeLayout;