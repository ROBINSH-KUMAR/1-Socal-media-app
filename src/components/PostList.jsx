import { useContext } from "react"

import Post from "./Post"
import {PostList as PostListData} from "../Store/post-list-store"

const PostList = () => {
const{postList,addPost}=  useContext(PostListData);

console.log(postList)
  return (
    <div className="postlist">
      {postList.map((post)=>(<Post key={post.id}post={post}/>))}
      
      
    </div>
  )
}

export default PostList
