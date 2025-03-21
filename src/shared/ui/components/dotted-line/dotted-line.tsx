import React from "react";

interface DL_Props {
    propClass?: string
}

const DottedLine: React.FC<DL_Props> = ({ propClass }) => {
    return <div className={`border-t-2 border-dotted border-gray-400 w-full py-2 ${propClass}`}></div>
};

export default DottedLine;
