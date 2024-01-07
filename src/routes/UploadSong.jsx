import TextInput from "../components/Shared/TextInput";
import CloudinaryUpload from "../components/Shared/CloudinaryUpload";
import { useState } from "react";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelper"
import { useNavigate } from "react-router";
import LoggedInContainer from "../containers/LoggedInContainer";


const UploadSongs = () => {
    // console.log(window.cloudinary);

    const navigate = useNavigate();
    const [songName, setSongName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [songUrl, setSongUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState();

    const submitSong = async () => {
        const songUploadData = {
            name: songName,
            thumbnail: thumbnail,
            track: songUrl
        };

        const response = await makeAuthenticatedPOSTRequest("/songs/create", songUploadData);

        if (response.error) {
            alert("Cloud Not Create Song!");
            return;
        }
        alert("Success");
        navigate("/home");

        console.log(response);
    }

    return (
        <LoggedInContainer currActiveScreen={"uploadsong"}>
            <>
                <div className=" text-2xl font-semibold mb-5 text-white mt-8">
                    Upload A Song
                </div>
                <div className=" w-full flex space-x-3 ">
                    <div className="w-1/2 ">
                        <TextInput
                            label={"Song Name"}
                            placeholder={"Name"}
                            labelClass={"text-white"}
                            value={songName}
                            setValue={setSongName}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput
                            label={"Thumbnail"}
                            placeholder={"Enter Thumbnail URL"}
                            labelClass={"text-white"}
                            value={thumbnail}
                            setValue={setThumbnail}
                        />
                    </div>
                </div>
                {/* Choosing File To Upload */}
                <div className="py-5">

                    {/* Displayes the File Name Uploaded To Sound Cloud */}
                    {
                        uploadedSongFileName ?
                            <div className=" bg-white px-3 py-2 w-1/3 rounded-full font-semibold">
                                {uploadedSongFileName?.substring(0, 20)}...
                            </div>
                            : <CloudinaryUpload
                                setUrl={setSongUrl}
                                setName={setUploadedSongFileName}
                            />
                    }
                </div>

                {/* Submiiting Song Button */}
                <div className=" bg-white w-40 flex items-center justify-center p-3 rounded-full cursor-pointer font-semibold" onClick={submitSong}>
                    Submit Song
                </div>
            </>
        </LoggedInContainer>
    );
};

export default UploadSongs;
