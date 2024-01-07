import LoggedInContainer from "../containers/LoggedInContainer";

const focusData = [
    {
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://i.scdn.co/image/ab67706c0000da84411d41833f74a305492867ee",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002d6d48b11fd3b11da654c3519",
    },
    {
        title: "Chill Hits",
        description: "Kick back to the best new and recent chill hits",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002fb216d1ce13d5a4952a6180e",
    },
    {
        title: "Focus Flow",
        description: "Uptempo instrumental hip hop beats",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc",
    },
    {
        title: "Workday Lounge",
        description: "Lounge and chill out music for your workday",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618",
    },
]

const songsOfIndia = [
    {
        title: "The Sound of Mumbai",
        description: "The songs that define, unite and distinguish Mumbai IN, according to listening patterns and math.",
        imgUrl: "https://i.scdn.co/image/ab67706c0000da8436ea3a15c04a4b0821958ceb",
    },
    {
        title: "The Sound of Kolkata",
        description: "The songs that define, unite and distinguish Kolkata IN, according to listening patterns and math.",
        imgUrl: "https://i.scdn.co/image/ab67706c0000da84ca51e0b1b2526295415ea0f7",
    },
    {
        title: "The Sound of Delhi",
        description: "The songs that define, unite and distinguish Delhi IN, according to listening patterns and math.",
        imgUrl: "https://i.scdn.co/image/ab67706c0000da84fdad3548d41af616a7e8d64c",
    },
    {
        title: "The Sound of Bengaluru",
        description: "The songs that define, unite and distinguish Bengaluru IN, according to listening patterns and math.",
        imgUrl: "https://i.scdn.co/image/ab67706c0000da84d8f01d1da427744c3c74172d",
    },
    {
        title: "The Sound of Chennai",
        description: "The songs that define, unite and distinguish Chennai IN, according to listening patterns and math. ",
        imgUrl: "https://i.scdn.co/image/ab67706c0000da84735ff3d91fd7bcc7e854364d",
    },
]

const spotifyPlaylist = [
    {
        title: "Today's Top Hits",
        description: "Jung Kook is on top of the Hottest 50!",
        imgUrl: "https://i.scdn.co/image/ab67706c0000da84b3e93a0ed97e00eb05ff5eb5",
    },
    {
        title: "RapCaviar",
        description: "New music from Drake, Rod Wave and Doja Cat.",
        imgUrl: "https://i.scdn.co/image/ab67706c0000da843edc54301248b254cd66e43f",
    },
    {
        title: "All Out 2010s",
        description: "The biggest songs of the 2010s.",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
    },
    {
        title: "Rock Classics",
        description: "Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters",
        imgUrl: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
    },
    {
        title: "This Is Hans Zimmer",
        description: "The best of the legendary composer",
        imgUrl: "https://i.scdn.co/image/ab67706f00000002c5737f55b7195addae20994f",
    },
]

const Home = () => {
    return (
        <LoggedInContainer currActiveScreen={"home"}>
            <PlaylistView titleText="Focus" cardsData={focusData} />
            <PlaylistView titleText="Spotify Playlists" cardsData={spotifyPlaylist} />
            <PlaylistView titleText="Sound of India" cardsData={songsOfIndia} />
        </LoggedInContainer>
    )
}


const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className=" text-white my-10">
            <div className=" text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-ful flex justify-between space-x-5">
                {
                    cardsData.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="bg-black bg-opacity-40 w-1/5 p-5 rounded-lg">
            <div>
                <img className="w-full" src={imgUrl} />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className=" text-gray-400">
                {description?.length > 40 ? `${description?.substring(0,37)} . . .` : description }
            </div>
        </div>
    )
}

export default Home;
