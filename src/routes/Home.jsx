import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/Shared/IconText";
import RightNavBttn from "../components/Shared/RightNavBttn";
import { Link } from "react-router-dom";

const focusData = [
  {
    title:"Peaceful Piano", 
    description:"Relax and indulge with beautiful piano pieces",
    imgUrl : "https://i.scdn.co/image/ab67706c0000da84411d41833f74a305492867ee",
  },
  {
    title:"Deep Focus", 
    description:"Keep calm and focus with this music",
    imgUrl : "https://i.scdn.co/image/ab67706f00000002d6d48b11fd3b11da654c3519",
  },
  {
    title:"Chill Hits", 
    description:"Kick back to the best new and recent chill hits",
    imgUrl : "https://i.scdn.co/image/ab67706f00000002fb216d1ce13d5a4952a6180e",
  },
  {
    title:"Focus Flow", 
    description:"Uptempo instrumental hip hop beats",
    imgUrl : "https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc",
  },
  {
    title:"Workday Lounge", 
    description:"Lounge and chill out music for your workday",
    imgUrl : "https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618",
  },
]

const songsOfIndia = [
  {
    title:"The Sound of Mumbai", 
    description:"The songs that define, unite and distinguish Mumbai IN, according to listening patterns and math.",
    imgUrl : "https://i.scdn.co/image/ab67706c0000da8436ea3a15c04a4b0821958ceb",
  },
  {
    title:"The Sound of Kolkata", 
    description:"The songs that define, unite and distinguish Kolkata IN, according to listening patterns and math.",
    imgUrl : "https://i.scdn.co/image/ab67706c0000da84ca51e0b1b2526295415ea0f7",
  },
  {
    title:"The Sound of Delhi", 
    description:"The songs that define, unite and distinguish Delhi IN, according to listening patterns and math.",
    imgUrl : "https://i.scdn.co/image/ab67706c0000da84fdad3548d41af616a7e8d64c",
  },
  {
    title:"The Sound of Bengaluru", 
    description:"The songs that define, unite and distinguish Bengaluru IN, according to listening patterns and math.",
    imgUrl : "https://i.scdn.co/image/ab67706c0000da84d8f01d1da427744c3c74172d",
  },
  {
    title:"The Sound of Chennai", 
    description:"The songs that define, unite and distinguish Chennai IN, according to listening patterns and math. ",
    imgUrl : "https://i.scdn.co/image/ab67706c0000da84735ff3d91fd7bcc7e854364d",
  },
]

const spotifyPlaylist = [
  {
    title:"Today's Top Hits", 
    description:"Jung Kook is on top of the Hottest 50!",
    imgUrl : "https://i.scdn.co/image/ab67706c0000da84b3e93a0ed97e00eb05ff5eb5",
  },
  {
    title:"RapCaviar", 
    description:"New music from Drake, Rod Wave and Doja Cat.",
    imgUrl : "https://i.scdn.co/image/ab67706c0000da843edc54301248b254cd66e43f",
  },
  {
    title:"All Out 2010s", 
    description:"The biggest songs of the 2010s.",
    imgUrl : "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
  },
  {
    title:"Rock Classics", 
    description:"Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters",
    imgUrl : "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
  },
  {
    title:"This Is Hans Zimmer", 
    description:"The best of the legendary composer",
    imgUrl : "https://i.scdn.co/image/ab67706f00000002c5737f55b7195addae20994f",
  },
]

const HomeComponent = () => {
  return (
    <div className="h-full w-full flex">
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
              active={true}
            />
            <IconText
              iconName={"iconamoon:search"}
              displayText={"Search"}
            />
            <IconText
              iconName={"lucide:library"}
              displayText={"Library"}
            />
          </div>
          <div className="pt-5">
            <IconText
              iconName={"icon-park-solid:add"}
              displayText={"Create Playlist"}
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
              <RightNavBttn displayText={"Sign Up"} />
              {/* Login Buttin */}
              <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                Login
              </div>

            </div>

          </div>
        </div>

        <div className="content p-8 pt-0">
          <PlaylistView titleText={"Focus"} cardsData={focusData}/>
          <PlaylistView titleText={"Sound Of India"} cardsData={songsOfIndia}/>
          <PlaylistView titleText={"Spotify Playlist"} cardsData={spotifyPlaylist}/>
          
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({titleText,cardsData}) => {
  return(
    <div className=" text-white my-10">
      <div className=" text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-ful flex justify-between space-x-5">
        {
          cardsData.map((item,index) => {
            return(
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

const Card = ({title,description,imgUrl}) => {
  return(
    <div className="bg-black bg-opacity-40 w-1/5 p-5 rounded-lg">
      <div>
        <img className="w-full" src={imgUrl}/>
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className=" text-gray-400">{description}</div>
    </div>
  )
}

export default HomeComponent;
