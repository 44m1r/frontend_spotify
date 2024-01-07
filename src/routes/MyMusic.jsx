import SingleSongCard from "../components/Shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import { useState } from "react";
import { useEffect } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";

const MyMusic = () => {
    const [songData,setSongData] = useState();
    const [soundPlayed,setSoundPlayed] = useState();

    const playSound = (src) => {
    }

    useEffect(() => {
        
        // fetch Data
        const getData = async() => {
            const response = await makeAuthenticatedGETRequest("/songs/get/mysongs");
            // console.log(response?.data);
            setSongData(response?.data)
        }
        getData();

    },[])

    return(
        <LoggedInContainer currActiveScreen={"mymusic"}>
            <div className="text-white text-xl pb-5 font-semibold pl-2 my-8">My Songs</div>
            <div className=" space-y-3 overflow-auto">
                {
                    songData?.map((e, idx) => {
                        return <SingleSongCard key={`songData ${idx}`} info={e} playSound={playSound} />
                    })
                }
            </div>
        </LoggedInContainer>
    )
}

export default MyMusic;
