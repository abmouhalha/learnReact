 import classes from "./Post.module.css";
 
 
 
 
 export function Post(props) {
    return <div className = {classes.post}>
        <h2>{props.author}</h2>
        <p>{props.body}</p>
    </div>
 }



 export default Post;