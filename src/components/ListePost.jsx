import Post from "./Post";
import classes from "./ListePost.module.css"

function ListePost() {
    return (<ul className={classes.posts}>
         <Post  author = "Log in" body = " "/> 
         <Post  author = "signe up"  body ="if you don't have an account"/>
            </ul>
            );

}

export default ListePost;