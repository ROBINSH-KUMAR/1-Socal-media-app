import React, { useContext, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/post-list-store";

const Forms = () => {
  const initialDummy = {
    userId: "Anne-Hathaway",
    location: "Santorini, Greece",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiwD_e3DI_tidqZfljPNPDUarVItxBNJYxA&s",
    id: "190",
    title: "Sunset Over the Aegean",
    body: "Arrived in Santorini just in time for the golden hour. I found a quiet cliffside café where the sea met the horizon in a blaze of orange and pink. The air smelled of fresh olives and sea salt, and for a moment, the world felt perfectly still.",
    reaction: 385,

    tags: ["travel", "sunset", "island", "wanderlust"],
    image:
      "https://c4.wallpaperflare.com/wallpaper/252/90/365/anne-hathaway-actress-wallpaper-preview.jpg",
  };
  const [Dummy, setDummy] = useState(initialDummy);
  const { postList, addPost } = useContext(PostList);
  const userIdElement = useRef();
  const locationdElement = useRef();
  const profilePicdElement = useRef();
  const titledElement = useRef();
  const bodydElement = useRef();
  const reactiondElement = useRef();
  const tagsdElement = useRef();
  const imagedElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newDummy = {
      userId: userIdElement.current.value,
      location: locationdElement.current.value,
      profilePic: profilePicdElement.current.value,
      title: titledElement.current.value,
      body: bodydElement.current.value,
      reaction: reactiondElement.current.value,
      tags: tagsdElement.current.value.split(" ").map((tag) => tag.trim()),
      image: imagedElement.current.value,
      id: Date.now().toString(),
    };

    // Update dummy state for live preview
    setDummy(newDummy);

    // Send data to context
    addPost(
      newDummy.userId,
      newDummy.location,
      newDummy.profilePic,
      newDummy.title,
      newDummy.body,
      newDummy.reaction,
      newDummy.tags,
      newDummy.image
    );
  };
  return (
    <div className="Formelement " >
      <div className="forms   " style={{ maxWidth: "600px" }}>
        <form onSubmit={handleSubmit}action="/submit-details" method="post">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              User_Id
            </label>
            <input
              type="text"
              id="nameInput"
              name="User_Id"
              className="formcontrol  "
              ref={userIdElement}
              placeholder="emma.lou"
              required
            />
          </div>
          <div style={{display:"flex",gap:"5%"}}>
          <div className="mb-3"style={{width:"80%"}}>
            <label htmlFor="locationInput" className="form-label">
              Location
            </label>
            <input
              type="text"
              id="locationInput"
              name="location"
              className="form-control"
              ref={locationdElement}
              placeholder="Paris, France"
              required
            />
          </div>
          <div className="mb-3"style={{width:"20%"}}>
            <label htmlFor="reactionInput" className="form-label">
              Reaction
            </label>
            <input
              type="number"
              id="reactionInput"
              name="reaction"
              className="form-control"
              ref={reactiondElement}
              min={0}
              max={10000}
            />
          </div>
          </div>
          <div className="" style={{display:"flex",gap:"5%"}}>
          <div className="mb-3" style={{width:"50%"}}>
            <label htmlFor="titleInput" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="titleInput"
              name="title"
              className="form-control"
              ref={titledElement}
              placeholder="First Day at College"
              required
            />
          </div>
          <div className="mb-3" style={{width:"50%"}}>
            <label htmlFor="tagsInput" className="form-label">
              Tags 
            </label>
            <input
              type="text"
              id="tagsInput"
              name="tags"
              className="form-control"
              ref={tagsdElement}
              placeholder="college, newBeginnings"
            />
          </div>
          </div>

          <div className="mb-3">
            <label htmlFor="bodyInput" className="form-label">
              Body
            </label>
            <textarea
              id="bodyInput"
              name="body"
              className="form-control"
              ref={bodydElement}
              placeholder="Met so many new people today..."
              rows={4}
              required
            />
          </div>

         

          

          <div className="mb-3">
            <label htmlFor="imageInput" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              id="imageInput"
              name="image"
              className="form-control"
              ref={imagedElement}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="profilePicInput" className="form-label">
              Profile Picture URL
            </label>
            <input
              type="text"
              id="profilePicInput"
              name="profilePic"
              className="form-control"
              ref={profilePicdElement}
              placeholder="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </div>
          <div style={{ height: "15px" }}>
            </div>

          <button type="submit" className="btn btn-dark" style={{float:"right",marginRight:"10px"}}>
            Submit
          </button>
        </form>
        {/* --------------------------------------------------------------------post--------------------------------------------------------- */}
      </div>
      <div className="appcontainer">
      
      <div className="card post-card  " style={{ width: "100%",margin:"0px",padding:"0px",zIndex:"2",backgroundColor: "rgba(32, 32, 32, 1)",
        color: "white" }}>
        <div className="card-header">
        

          <div className="profile">
            <img className="avatar" src={Dummy.profilePic} alt="avatar" />
            <div className="meta">
              <div className="name">{Dummy.userId}</div>
              <div className="location">{Dummy.location}</div>
            </div>
          </div>

          <button className="more" aria-label="more">
            ⋯
          </button>
        </div>

        <img src={Dummy.image} className="card-img-top img" alt="..." />

        <div className="card-body" >
          <h5 className="card-title"style={{paddingLeft:"10px",fontWeight:"500", fontFamily:" -apple-system, BlinkMacSystemFont" }}>{Dummy.title}</h5>

          <div className="caption">
            <span className="caption-author">{Dummy.userId}</span>
            <span className="caption-text" style={{amily:" -apple-system, BlinkMacSystemFont"}}>  {Dummy.body} ✨</span>
            <br />
            {Dummy.tags.map((tag, index) => (
              <span className="btn btn-dark" key={`${Dummy.id}-${index}`}>
                {tag}
              </span>
            ))}
          </div>

          <div className="view-comments">
            View all {Math.floor(Math.random() * 100) + 1} comments{" "}
            <a href="#" className="btn btn-outline-danger reaction">
              {Number(Dummy.reaction) * (Math.floor(Math.random() * 10) + 1)}{" "}
              likes
            </a>{" "}
          </div>

          <div className="add-comment">
            <input
              type="text"
              placeholder="Add a comment…"
              aria-label="Add a comment"
            />
            <button className="post-btn">Post</button>
          </div>

          <div className="time">
            {Math.floor(Math.random() * 10) + 1} HOURS AGO
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Forms;
