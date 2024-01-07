import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";



const AddToPlaylistModal = ({ closeModal, addSongToPlaylist }) => {

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
        <div
            className="absolute w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}>
            <div className="bg-app-black w-1/3 rounded-md p-5">
                <div className="text-white mb-5 font-semibold text-lg">
                    Select Playlist
                </div>

                <div
                    className=" space-y-3 flex flex-col justify-center items-center"
                    onClick={(e) => { e.stopPropagation() }}
                >
                    {
                        myPlaylist?.map(item => {
                            return (
                                <PlaylistListComponenet info={item} addSongToPlaylist={addSongToPlaylist} />
                            )
                        })
                    }

                </div>


            </div>
        </div>
    );
}

const PlaylistListComponenet = ({ info, addSongToPlaylist }) => {
    return (
        <div
            className="hover:bg-gray-400 hover:bg-opacity-20 cursor-pointer w-full flex items-center space-x-4 p-3 rounded-md"
            onClick={() => addSongToPlaylist(info?._id)}
        >
            <div>
                <img src={info.thumbnail} alt={`${info?.name} thumbnail`} className="w-10 h-10 rounded" />
            </div>
            <div className="text-white font-semibold text-sm">
                {info?.name}
            </div>
        </div>
    )
}

export default AddToPlaylistModal;