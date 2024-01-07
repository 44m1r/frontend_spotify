import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/Shared/IconText";
import RightNavBttn from "../components/Shared/RightNavBttn";
import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import songContext from "../context/songContext";
import { Link } from "react-router-dom";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
import AddToPlaylistModal from "../modals/AddToPlaylistModal";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";

const LoggedInContainer = ({ children, currActiveScreen }) => {

    const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false)
    const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false)


    const {
        currentSong,
        setCurrentSong,
        soundPlayed,
        setSoundPlayed,
        isPaused,
        setIsPaused } = useContext(songContext);

    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (!currentSong) {
            return;
        }
        changeSong(currentSong?.track)
    }, [currentSong && currentSong?.track]);

    const playSound = () => {
        if (!currentSong) {
            return;
        }
        soundPlayed.play();
    }

    const changeSong = (src) => {
        console.log("Sound Begin!")
        if (soundPlayed) {
            soundPlayed.stop();
        }

        let sound = new Howl({
            src: [src],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    }

    const pauseSound = () => {
        soundPlayed.pause();
    }

    const toggelPlayPause = () => {
        if (isPaused) {
            playSound(currentSong?.track);

        }
        else {
            pauseSound();
        }
        setIsPaused(!isPaused);
    }

    const addSongToPlaylist = async (playlistId) => {

        const songId = currentSong._id;
        const payload = {playlistId,songId};

        const response = await makeAuthenticatedPOSTRequest("/playlist/add/song",payload);

        if(response._id){
            setAddToPlaylistModalOpen(false);
        }
        console.log(response);
            
    }

    return (
        <div className="h-full w-full bg-app-black">
            {createPlaylistModalOpen && <CreatePlaylistModal closeModal={() => setCreatePlaylistModalOpen(false)} />}

            {addToPlaylistModalOpen && <AddToPlaylistModal closeModal={() => setAddToPlaylistModalOpen(false)} addSongToPlaylist = {addSongToPlaylist}/>}


            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`} >

                {/* First div will left panel */}
                <div className=" h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                    <div>
                        <div className="logoDiv p-6">
                            <Link to={"/home"}>
                                <img src={spotify_logo} alt="spotify logo" width={125} />
                            </Link>
                        </div>
                        <div className="py-5">
                            <IconText
                                iconName={"material-symbols:home"}
                                displayText={"Home"}
                                active={currActiveScreen == "home"}
                                targetLink={"/home"}
                            />
                            <IconText
                                iconName={"iconamoon:search"}
                                displayText={"Search"}
                                active={currActiveScreen == "search"}
                                targetLink={"/search"}
                            />
                            <IconText
                                iconName={"lucide:library"}
                                displayText={"Library"}
                                targetLink={"/library"}
                                active={currActiveScreen == "library"}
                            />
                            <IconText
                                iconName={"majesticons:music"}
                                displayText={"My Music"}
                                targetLink={"/mymusic"}
                                active={currActiveScreen == "mymusic"}
                            />
                        </div>
                        <div className="pt-5">
                            <IconText
                                iconName={"icon-park-solid:add"}
                                displayText={"Create Playlist"}
                                onClick={() => setCreatePlaylistModalOpen(true)}
                            />
                            <IconText
                                iconName={"mdi:heart"}
                                displayText={"Liked Songs"}
                            />
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="border border-gray-100 text-white w-2/5 flex items-center justify-center px-2 py-1 rounded-full text-sm font-semibold cursor-pointer">
                            <Icon icon={"octicon:globe-24"} />
                            <div className="ml-2">English</div>
                        </div>
                    </div>

                </div>

                {/* Second div will be right panel */}
                <div className=" h-full w-4/5 bg-app-black overflow-auto">

                    <div className="navbar w-full h-1/10 bg-black bg-opacity-50 flex items-center justify-end">

                        <div className="w-1/2 h-full flex">

                            <div className="w-3/5 flex justify-around items-center">
                                <RightNavBttn displayText={"Premium"} />
                                <RightNavBttn displayText={"Support"} />
                                <RightNavBttn displayText={"Download"} />
                                {/* for border */}
                                <div className="h-1/2 border-r border-white"></div>
                            </div>

                            <div className=" w-2/5 flex justify-around items-center">
                                <RightNavBttn displayText={"Upload Song"} active={currActiveScreen == "uploadsong"} targetLink={"/uploadsong"} />
                                {/* Login Buttin */}
                                <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                    AS
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Dynamic Content Area */}
                    <div id="main-dynamic-content" className="content p-8 pt-0 overflow-auto">
                        {children}
                    </div>
                </div>
            </div>

            {/* Bottoim Music Player */}
            {
                currentSong &&
                <div className=" w-full h-1/10 bg-black bg-opacity-50 flex text-white items-center px-4">
                    <div className="w-1/4 flex items-center">

                        <img
                            src={currentSong?.thumbnail}
                            alt="currentSongThumbnail"
                            className=" h-14 w-14 rounded"
                        />
                        <div className="pl-3 space-y-1">
                            <div className=" text-sm hover:underline hover:cursor-pointer">{currentSong?.name}</div>
                            <div className="text-xs text-gray-500 hover:underline hover:cursor-pointer">{currentSong?.artist?.firstName} {currentSong?.artist?.lastName}</div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex flex-col items-center justify-center">
                        {/* Controls for playing songs */}
                        <div className="flex w-1/3 justify-between items-center text-gray-400" style={{ fontSize: "1.65rem" }}>
                            <Icon
                                icon="ph:shuffle"
                                className="cursor-pointer hover:text-white"
                            />
                            <Icon
                                icon="material-symbols:skip-previous-outline"
                                className="cursor-pointer hover:text-white"
                            />

                            {
                                isPaused ?
                                    <Icon
                                        fontSize={30}
                                        icon="carbon:play-filled"
                                        className="cursor-pointer hover:text-white"
                                        onClick={() => toggelPlayPause()}
                                    />
                                    :
                                    <Icon
                                        fontSize={30}
                                        icon="carbon:pause-outline-filled"
                                        className="cursor-pointer hover:text-white"
                                        onClick={() => toggelPlayPause()}
                                    />
                            }

                            <Icon
                                icon="material-symbols:skip-next-outline"
                                className="cursor-pointer hover:text-white"
                            />
                            <Icon
                                icon="ion:repeat-outline"
                                className="cursor-pointer hover:text-white"
                            />
                        </div>

                    </div>
                    <div className="w-1/4 flex justify-end px-4 space-x-4 text-gray-400">
                            <Icon
                                icon="ic:round-playlist-add"
                                fontSize={30}
                                className="cursor-pointer hover:text-white"
                                onClick={() => setAddToPlaylistModalOpen(true)}
                            />
                        <Icon icon="ph:heart-bold" fontSize={30} className="cursor-pointer hover:text-white"/>
                    </div>
                </div>
            }
        </div>
    );
};


export default LoggedInContainer;
