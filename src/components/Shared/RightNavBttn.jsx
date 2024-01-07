import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const RightNavBttn = ({ displayText, active,targetLink }) => {
    return (
        <Link to={targetLink}>
            <div className={`flex ${active ? "text-white" : "text-gray-400"} items-center justify-start cursor-pointer hover:text-white`}>
                <div
                    className=" text-lg font-semibold"
                >
                    {displayText}
                </div>
            </div>
        </Link>
    )
}

export default RightNavBttn;