import React from 'react'

const InstagramCard = () => {
  return (<div className="post-list  ">
  
    
    



{/* <!-- Post 5 --> */}
<div className="card post-card insta" style={{ width: "24rem", marginLeft:"30px", marginTop:"20px" }}>
  <article className="ig-card">
    <div className="card-header">
      <div className="profile">
        <img className="avatar" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200" alt="avatar"/>
        <div className="meta">
          <div className="name">david.r</div>
          <div className="location">Tokyo</div>
        </div>
      </div>
      <button className="more" aria-label="more">⋯</button>
    </div>
    <div className="card-image">
      <img src="https://plus.unsplash.com/premium_photo-1684979564941-dbf8664a68fc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtfGVufDB8fDB8fHww" alt="post image"/>
    </div>
    <div className="actions">
      <div className="left">
        <button className="action-btn btn btn-outline-danger" aria-label="like"><svg viewBox="0 0 24 24" className="icon heart"><path d="M12 21s-7-4.4-9.2-7.1C.9 10.8 3 6 6.8 6c1.8 0 3.3 1 4.2 2.2C12 7 13.7 6 15.3 6 19 6 21.1 10.8 21.2 13.9 19 16.6 12 21 12 21z"/></svg></button>
        <button className="action-btn" aria-label="comment"><svg viewBox="0 0 24 24" className="icon"><path d="M21 6h-2v9H6v2c0 .6.4 1 1 1h9l5 4V7c0-.6-.4-1-1-1zM3 3h14v10H3z"/></svg></button>
        <button className="action-btn" aria-label="share"><svg viewBox="0 0 24 24" className="icon"><path d="M4 12v7h7l9-10L13 2v7H4z"/></svg></button>
      </div>
      <div className="right">
        <button className="action-btn btn btn-outline-danger" aria-label="save"><svg viewBox="0 0 24 24" className="icon"><path d="M6 2h12v20l-6-3-6 3z"/></svg></button>
      </div>
    </div>
    <div className="likes">9,874 likes</div>
    <div className="caption"><span className="caption-author">david.r</span> <span className="caption-text">Shibuya nights never disappoint ✨🌆</span></div>
    <div className="view-comments">View all 198 comments</div>
    <div className="add-comment">
      <input type="text" placeholder="Add a comment…" />
      <button className="post-btn">Post</button>
    </div>
    <div className="time">1 WEEK AGO</div>
  </article>
</div>

    </div>
  )
}

export default InstagramCard