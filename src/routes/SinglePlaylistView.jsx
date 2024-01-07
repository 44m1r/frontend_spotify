import { useParams } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import SingleSongCard from "../components/Shared/SingleSongCard";

const SinglePlaylistView = () => {

    const { playlistId } = useParams();
    const [playlistDetails,setPlaylistDetails] = useState({});

    console.log(playlistId);

    useEffect(() => {

        const getData = async () => {
            const response  = await makeAuthenticatedGETRequest ( ("/playlist/get/playlist/"+playlistId) );
            console.log(response);
            setPlaylistDetails(response);
        }
        getData()

    }, [])

    return (
        <LoggedInContainer currActiveScreen={"library"}>

            
            {
                playlistDetails  &&

                <div className=" pt-8 space-y-3">
                    <div className="text-white text-lg pt-8">{playlistDetails?.name}</div>
                    {playlistDetails?.songs?.map(item => {
                        return <SingleSongCard
                            info={item}
                            key={JSON.stringify(item)}
                            playSound={() => { }}
                        />
                    })}
                </div>
            }

        </LoggedInContainer>
    )
}

export default SinglePlaylistView;