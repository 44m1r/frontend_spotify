import LoggedInContainer from "../containers/LoggedInContainer";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import {useNavigate} from "react-router-dom" 
const Library = () => {

    const [myPlaylist, setMyPlaylist] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/playlist/get/me");
            console.log(response?.data);
            setMyPlaylist(response?.data);
        };
        getData();
    }, [])

    return (
        <LoggedInContainer currActiveScreen={"library"}>
            <div className="text-white text-lg pt-8">My Playlists</div>
            <div className=" py-5 grid gap-4 grid-cols-5">

                {
                    myPlaylist?.map(item => {
                        return (
                            <Card
                                id={item?._id}
                                title={item?.name}
                                description={""}
                                imgUrl={item?.thumbnail}
                                key={JSON.stringify(item)}
                            />
                        )
                    })
                }

            </div>

        </LoggedInContainer>
    )
}

const Card = ({id, title, description, imgUrl }) => {

    const navigate = useNavigate();
    return (
        <div className="bg-black bg-opacity-40 w-full p-5 rounded-lg" onClick={() => navigate(`/playlist/${id}`)}>
            <div>
                <img className="w-full" src={imgUrl} />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className=" text-gray-400">{description}</div>
        </div>
    )
}

export default Library;