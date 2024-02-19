
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("postId")



function getPost() {

  toggleLoader(true)
      axios.get(`${baseURL}/posts/${id}`)

        .then((response) => {
          toggleLoader(false)
        const post = response.data.data;
        const comments = post.comments
        const author = post.author

        let postTitle = ""
        
        if(post.title != null){
         post.title = postTitle
        }
         
        let commentsContent = ``
         for (comment of comments) {
          commentsContent += `
         
                
         <!--Comment-->
         <div class="p-3" style="background-color: antiquewhite;">
           <!--Profile Picture + Username-->
           <div>
           
             <img src="${comment.author.profile_image}" alt="" class="rounded-circle" style="width: 30px;">
             <b>@${comment.author.username}</b>
          
             </div>
           <!--//Profile Picture + Username//-->

           <!--Comment's body-->
             <div>
               ${comment.body}
             </div>

           <!--//Comment's body//-->

          
          

         </div>
      <!--//Comment//-->

            `
         }
         
         
         
         let postContent = `
         <div  class="card shadow my-3">
         <div class="card-header">
           <img
             class="rounded-circle border border-2"
             src="${author.profile_image}"
             style="height: 40px"
           />
           <b>${author.username}</b>
           <div class="card-body">
             <img
               class="w-100"
               src="${post.image}"
               alt=""
             />
             <h6 class="mt-1" style="color: rgba(87, 102, 90, 0.626)">
               ${post.created_at}
             </h6>
             <h5>${postTitle}</h5>
             <span
               >${post.body}</span
             >
             <hr />
             <div>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="16"
                 height="16"
                 fill="currentColor"
                 class="bi bi-pen"
                 viewBox="0 0 16 16"
               >
                 <path
                   d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
                 />
               </svg>
               <span>${post.comments_count} comments</span>
             </div>
           </div>
         </div>

         <div class="comments">


            ${commentsContent}

            <!--Add Comment-->
            
            <div class="input-group mb-3">
              <input id="add-comment-input" type="text" class="form-control" placeholder="add your comment here..."
                aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary" onclick="addComment()" type="button" id="button-addon2">Send</button>
            </div>
 
        
 
          <!--//Add Comment//-->
         </div>
         </div>
         `


    document.getElementById("username-span").innerHTML= `${author.username}'s`
    document.getElementById("post").innerHTML=postContent



     });
    
    
  
  
 }


getPost()