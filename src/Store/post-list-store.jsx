import { createContext, useReducer } from "react";

export const PostList = createContext({
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
});
const PostListProvider = ({ children }) => {
  const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "deletePost") {
      newPostList = currPostList.filter((post) => post.id !== action.payload); // we can also write in this way return currPostList.filter((post)=>{return post.id !== action.payload})
      return newPostList;
    } else if (action.type === "ADD POST") {
      return  [
         {
          userId: action.payload.userId,
          location: action.payload.location,
          profilePic: action.payload.profilePic,
          title: action.payload.title,
          body: action.payload.body,
          reaction: action.payload.reaction,
          tags: action.payload.tags,
          image: action.payload.image
        }, ...currPostList
      ];

    }else {return currPostList;}
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId,location,profilePic,title,body,reaction,tags,image) => {
    
    console.log(`${userId} ${location} ${profilePic} ${title} ${body} ${reaction} ${tags} ${image}`);
    dispatchPostList({ type: "ADD POST", payload: {userId,location,profilePic,title,body,reaction,tags,image} });
  };
  const deletePost = (postId) => {
    dispatchPostList({ type: "deletePost", payload: postId });
  };

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    userId: "Anne-Hathaway",
    location: "Santorini, Greece",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiwD_e3DI_tidqZfljPNPDUarVItxBNJYxA&s",
    id: "190",
    title: "Sunset Over the Aegean",
    body: "Arrived in Santorini just in time for the golden hour. I found a quiet cliffside café where the sea met the horizon in a blaze of orange and pink. The air smelled of fresh olives and sea salt, and for a moment, the world felt perfectly still.",
    reaction: 696,

    tags: ["travel", "sunset", "island"],
    image:
      "https://c4.wallpaperflare.com/wallpaper/252/90/365/anne-hathaway-actress-wallpaper-preview.jpg",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    userId: "emma.lou",
    location: "Paris, France",
    id: 1,
    title: "First Day at College",
    body: "Met so many new people today and already feeling like this is going to be an amazing journey.",
    reaction: 835,

    tags: ["college", "friends", "newBeginnings"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMszGS3K3sXoWq6b9xl4tYXxWUYaTZR8Ddg&s",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/36.jpg",
    userId: "marco_travels",
    location: "Rome, Italy",
    id: 88,

    title: "Cooking Disaster",
    body: "Tried making pasta... ended up with something even my dog refused to eat.",
    reaction: 25,

    tags: ["cooking", "funny", "oops"],
    image:
      "https://c.ndtvimg.com/2022-08/hl2jfd6o_cooking-disaster_625x300_11_August_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    userId: "sofia.k",
    location: "New York, USA",
    id: 3,
    title: "Up in the Air",
    body: "Currently flying at 30,000 ft. The view is absolutely breathtaking.",
    reaction: 42,

    tags: ["travel", "flight", "sky"],
    image:
      "https://media.istockphoto.com/id/2191543676/photo/relaxed-air-traveler-with-feet-elevated-in-flight.jpg?s=612x612&w=0&k=20&c=F3VDOltDeiI1_icYkwJ5s8NcNwi8LBG_dwhIOPTuCcc=",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/29.jpg",
    userId: "li_wei",
    location: "Shanghai, China",
    id: 4,
    title: "Late-Night Coding",
    body: "Debugged the same issue for 3 hours… turned out to be a missing semicolon.",
    reaction: 18,

    tags: ["coding", "developerLife", "oops"],
    image:
      "https://m.economictimes.com/thumb/height-450,width-600,imgsize-78948,msid-120092214/coding-frustration-late-at-night.jpg",
  },

  {
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
    userId: "lucas_m",
    location: "Sydney, Australia",
    id: 63,
    title: "Lost Luggage",
    body: "My bag decided to take a separate vacation without telling me.",
    reaction: 5,

    tags: ["travel", "airport", "oops"],
    image:
      "https://imageio.forbes.com/specials-images/imageserve/676c45a1a513a2b8c536994b/suitcases-near-baggage-carousel/0x0.jpg?format=jpg&crop=3613,2033,x0,y66,safe&width=960",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/women/33.jpg",
    userId: "isabella_rose",
    location: "Cape Town, South Africa",
    id: 7,
    title: "Rainy Day in the City",
    body: "Danced in the rain and ruined my new shoes. No regrets.",
    reaction: 188,

    tags: ["rain", "fun", "citylife"],
    image: "https://live.staticflickr.com/4048/4431751079_1319c70a25_b.jpg",
  },
  {
    profilePic: "https://randomuser.me/api/portraits/men/54.jpg",
    userId: "kenji.h",
    location: "Tokyo, Japan",
    id: 8,
    title: "Unexpected Flight Upgrade",
    body: "From economy to business class — the free champagne was the real MVP.",
    reaction: 25,

    tags: ["flight", "travel", "lucky"],
    image:
      "https://www.hindustantimes.com/ht-img/img/2025/04/20/550x309/omar_1745150195849_1745150203221.jpg",
  },
  {
    userId: "claire_w",

    location: "London, UK",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
    id: 9,
    title: "Street Food Heaven",
    body: "Tried 10 different dishes in one night. My stomach hates me, my soul is happy.",
    reaction: 14,

    tags: ["food", "street", "adventure"],
    image: "https://blog.thomascook.in/wp-content/uploads/2016/03/bloga.jpg",
  },
  {
    id: 5,
    profilePic:"https://thafd.bing.com/th/id/OIP.eckCjb8I9UdCq7WRwyEsPQHaE8?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    image:
      "https://thafd.bing.com/th/id/OIP.hkeuR2MujWK7q-l8o-FAJAHaFQ?w=227&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    location: "Amsterdam, Netherlands",
    title: "Work From Home",
    body: "Tried 10 different dishes in one night. My stomach hates me, my soul is happy.",
    reaction: 14,
    userId: "user-23",
    tags: ["Job", "stres", "adventure"],
  },
  {
    userId: "emma.lou",
    location: "Paris, France",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    id: 10,
    title: "Cafe Moments",
    body: "Enjoyed the perfect latte art while people watching on a rainy day.",
    reaction: 23,

    tags: ["coffee", "relax", "citylife"],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
  },
  {
    userId: "marco_travels",
    location: "Rome, Italy",
    profilePic: "https://randomuser.me/api/portraits/men/36.jpg",
    id: 11,
    title: "Ancient Ruins Adventure",
    body: "Walking through the Colosseum felt like stepping back in time.",
    reaction: 45,

    tags: ["travel", "history", "adventure"],
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
  },
  {
    userId: "sofia.k",
    location: "New York, USA",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    id: 12,
    title: "Sunset Views",
    body: "Caught the most beautiful sunset over the city skyline tonight.",
    reaction: 67,

    tags: ["sunset", "photography", "city"],
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200",
  },
  {
    userId: "li_wei",
    location: "Shanghai, China",
    profilePic: "https://randomuser.me/api/portraits/men/29.jpg",
    id: 13,
    title: "Street Market Delights",
    body: "Explored local night markets and discovered some amazing street food.",
    reaction: 89,

    tags: ["food", "market", "culture"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
  },
  {
    userId: "lucas_m",
    location: "Sydney, Australia",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
    id: 14,
    title: "Beach Vibes",
    body: "Sunny day at Bondi Beach with good friends and great waves.",
    reaction: 55,

    tags: ["beach", "friends", "summer"],
    image:
      "https://d19lgisewk9l6l.cloudfront.net/assetbank/Northern_Lights_Troms_Norway_2729.jpg",
  },
  {
    userId: "isabella_rose",
    location: "Cape Town, South Africa",
    profilePic: "https://randomuser.me/api/portraits/women/33.jpg",
    id: "15",
    title: "Mountain Hikes",
    body: "Breathtaking views after a challenging hike up Table Mountain.",
    reaction: 38,

    tags: ["hiking", "nature", "adventure"],
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200",
  },
  {
    userId: "kenji.h",
    location: "Tokyo, Japan",
    profilePic: "https://randomuser.me/api/portraits/men/54.jpg",
    id: "16",
    title: "Night Lights",
    body: "The neon glow of Shibuya crossing never gets old.",
    reaction: 102,

    tags: ["city", "nightlife", "culture"],
    image:
      "https://publichealth.jhu.edu/sites/default/files/images/jhu-systems/black-mens-health-820x440.jpg",
  },
  {
    userId: "claire_w",
    location: "London, UK",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
    id: "17",
    title: "Street Food Heaven",
    body: "Tried 10 different dishes in one night. My stomach hates me, my soul is happy.",
    reaction: 14,

    tags: ["food", "street", "adventure"],
    image: "https://blog.thomascook.in/wp-content/uploads/2016/03/bloga.jpg",
  },
  {
    userId: "daniel_f",
    location: "Berlin, Germany",
    profilePic: "https://randomuser.me/api/portraits/men/47.jpg",
    id: "18",
    title: "Urban Exploration",
    body: "Wandering the graffiti-filled streets of Berlin’s art district.",
    reaction: 29,

    tags: ["art", "urban", "exploration"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5r19xZlH4Qb5le8LD6kvrhEx9fORjTi2XQ&s",
  },
  {
    userId: "nina_r",
    location: "Amsterdam, Netherlands",
    profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
    id: "19",
    title: "Canal Walks",
    body: "Nothing beats a peaceful walk along Amsterdam’s canals on a sunny day.",
    reaction: 46,

    tags: ["travel", "nature", "relax"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
  },
];

export default PostListProvider;
