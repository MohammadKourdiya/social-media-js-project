
setupUI()
getUser()
getProfilePosts()


function getCurrentUserId() {
  
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get("userid")
  
    return id
  
  }

function getUser() {
    const id = getCurrentUserId()
    axios.get(`${baseURL}/users/${id}`)

     .then((response) => {
         const user = response.data.data
         document.getElementById("main-info-email").innerHTML = user.email
         document.getElementById("main-info-name").innerHTML = user.name
         document.getElementById("main-info-username").innerHTML = user.username
         document.getElementById("num-info-posts-counts").innerHTML=user.posts_count
         document.getElementById("num-info-comments-counts").innerHTML = user.comments_count
         document.getElementById("posts-owner").innerHTML=user.username
         document.getElementById("main-info-image").src = user.profile_image
         
    })
}


function getProfilePosts() {
  
      const id = getCurrentUserId()
     
      axios.get(`${baseURL}/users/${id}/posts`)

        .then((response) => {
          
        const posts = response.data.data;
        
        document.getElementById("profile-posts").innerHTML =``
       
       for(post of posts) {
         
     
         const author= post.author
         let postTitle = ""
         

         //Show or Hide (edit) button
         
         user = getCurrentUser()
         isMyPost = user != null && post.author.id == user.id
         let editBtn = ``
        
         if (isMyPost)
         {
           
          
           editBtn =`
          
           
           <button calss='btn btn-secondary' style='margin-left:5px; border-radius:5px; float:right; background-color:#2e2e2ea3;'
          onclick="editPostBtnClicked('${encodeURIComponent(JSON.stringify(post))}')">edit</button>
          
          
          <button calss='btn btn-danger' style='border-radius:5px; float:right; background-color:#e03636d4;'
                  onclick="deletePostBtnClicked('${encodeURIComponent(JSON.stringify(post))}')">delete</button>
        
          ` 
        
         }
         

         if(post.title != null){
           postTitle = post.title
         }
         
         
         let content=`

         <div class="card shadow my-3">
           <div class="card-header">
             <img
               class="rounded-circle border border-2"
               src=${author.profile_image}
               style="height: 40px"
             />
             <b>${author.username}</b>

             ${editBtn}
          

             <div class="card-body" onclick="postClicked(${post.id})" style="cursor:pointer;">
               <img
                 class="w-100"
                 src=${post.image}
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
                 <span>${post.comments_count}(comment)
                 
                 <span id="post-tags">
                
                 </span>
                 
                 </span>
                 
                 
                 
               </div>
             </div>
           </div>
         </div>
         
         `
         document.getElementById("profile-posts").innerHTML += `${content}`
         document.getElementById("post-tags").innerHTML = ""
       
         
         for (tag of post.tags) {
         
          
          let tagsContent = 
           `
           <button id="${author.id}" class="btn btn-sm rounded-5" style="background-color:gray; color:white;">
           ${tag.name}
          </button>
          </span>
           `
           
             document.getElementById("post-tags").innerHTML += tagsContent
             
         }
       }
     });
  
  
 }


 
 function userClicked(userId) {
  
  window.location = `profile.html?userid=${userId}`;
}


function profileClicked() {
  const user = getCurrentUser()
  window.location = `profile.html?userid=${user.id}`;
}