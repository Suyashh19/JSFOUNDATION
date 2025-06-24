function fetchPostData() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post Data fetches")
        }, 4000);
    })
    
}
function fetchCommentData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Comment Data fetches");
      }, 4000);
    });
}
async function getBlogData(){
    try {
        console.log("fetched blog data ");
         const blogData = await fetchPostData();
         const CommentData = await fetchCommentData();
        // console.log(blogData);
         //onsole.log(CommentData);
         
         
         
         console.log("fetch complete");
           
    } catch (error) {
        console.log("error fetching blog data",error);
        
    }
}
getBlogData();