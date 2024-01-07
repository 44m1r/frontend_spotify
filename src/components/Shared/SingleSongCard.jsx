import { useContext } from "react";
import songContext from "../../context/songContext";

const SingleSongCard = ({info, playSound}) => {

    const {currentSong,setCurrentSong} = useContext(songContext);

    return(
        <div className=" text-white flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-md"
            onClick={() => {
                playSound(info?.track)
                setCurrentSong(info);
            }}
        >
            <div
                className="w-12 h-12 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${info?.thumbnail}")`,

                }}
            >
            </div>
            
            <div className="flex w-full">
                <div className="flex flex-col justify-center pl-4 w-5/6">
                    <div className=" font-semibold hover:cursor-pointer hover:underline">{info?.name}</div>
                    <div className=" text-xs text-gray-400 font-semibold hover:cursor-pointer hover:underline">{info?.artist?.firstName + " " + info?.artist?.lastName}</div>
                </div>

                <div className="w-1/6 flex justify-center items-center text-sm">
                    <div className=" text-gray-400 ">3.44</div>
                </div>

            </div>

        </div>
    )
}

export default SingleSongCard;