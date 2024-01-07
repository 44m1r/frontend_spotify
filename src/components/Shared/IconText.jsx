import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const IconText = ({ iconName, displayText, active, targetLink,onClick }) => {
    return (
        <Link to={targetLink}>
            <div
                className={`flex ${active ? "text-white" : "text-gray-400"} items-center justify-start cursor-pointer hover:text-white`}
                onClick={onClick}
            >

                <div className="px-5 py-2">
                    <Icon icon={iconName} fontSize={25} />
                </div>
                <div className=" text-lg font-semibold">
                    {displayText}
                </div>
            </div>
        </Link>
    )
}

export default IconText;