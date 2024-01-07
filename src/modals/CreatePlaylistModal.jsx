import TextInput from "../components/Shared/TextInput";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";

const CreatePlaylistModal = ({ closeModal }) => {

    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    console.log({ playlistName, playlistThumbnail });

    const createPlaylist = async () => {

        const requestBody = {
            name: playlistName,
            thumbnail: playlistThumbnail,
            songs: []
        };

        const response = await makeAuthenticatedPOSTRequest("/playlist/create", requestBody);
        console.log(response);
        closeModal()
    }


    return (
        <div
            className="absolute w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}>
            <div className="bg-app-black w-1/3 rounded-md p-5">
                <div className="text-white mb-5 font-semibold text-lg">
                    Create Playlist
                </div>

                <div
                    className=" space-y-3 flex flex-col justify-center items-center"
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <TextInput
                        label="Name"
                        labelClass={"text-white"}
                        placeholder="Playlist Name"
                        value={playlistName}
                        setValue={setPlaylistName}
                    />
                    <TextInput
                        label="Thumbnail"
                        labelClass={"text-white"}
                        placeholder="Thumbnail"
                        value={playlistThumbnail}
                        setValue={setPlaylistThumbnail}
                    />
                    <div
                        className="bg-white w-1/3 rounded-sm flex font-semibold justify-center items-center py- cursor-pointer"
                        onClick={() => createPlaylist()}
                    >
                        Create
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CreatePlaylistModal;