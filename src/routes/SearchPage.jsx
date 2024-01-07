import LoggedInContainer from "../containers/LoggedInContainer";
import { useState } from "react";
import { Icon } from '@iconify/react';
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import SingleSongCard from "../components/Shared/SingleSongCard";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
const SearchPage = () => {

    const [isInputFocused, setIsInputFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [songsData, setSongsData] = useState([]);

    console.log(songsData);

    // Calls api that get song by song name
    const searchSong = async () => {
        const response = await makeAuthenticatedGETRequest(`/songs/get/songname/${searchText}`);
        setSongsData(response?.data);
    }

    return (
        <LoggedInContainer currActiveScreen={"search"}>
            
            <div className="text-white w-full py-6">

                <div className={`w-1/3 flex bg-black bg-opacity-50 p-3 px-3 rounded-full justify-center items-center ${isInputFocused ? "border border-white" : ""}`}>
                    <div>
                        <Icon icon="ic:outline-search" className=" text-2xl mx-1" />
                    </div>
                    <input type="text"
                        className="w-full bg-black bg-opacity-50 outline-none mx-1"
                        placeholder="What do you want to listen to ?"
                        onFocus={() => {
                            setIsInputFocused(true);
                        }}
                        onBlur={() => {
                            setIsInputFocused(false);
                        }}
                        onChange={(e) => setSearchText(e.target.value)}

                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchSong();
                            }
                        }}

                    />
                </div>

                {
                    (songsData.length) > 0 ?
                        <div className=" pt-8 space-y-3">
                            <div>
                                Showing search results for <b><em>{searchText}</em></b> are : 
                            </div>
                            {songsData?.map(item => {
                                return <SingleSongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => { }}
                                />
                            })}
                        </div>

                        :
                        <div className="flex justify-center mt-10">
                            <h1 className=" text-4xl">Does it even exist 🤔</h1>
                        </div>
                }


            </div>
        </LoggedInContainer>
    )
}

export default SearchPage;