
function createNewPostClicked() {
    
    const postId = document.getElementById("post-id-input").value
    let isCreate = postId == null || postId == ""
   
    

    const title = document.getElementById("post-title-input").value;
    const body = document.getElementById("post-body-input").value;
    const image = document.getElementById("post-image-input").files[0]


    let frmData = new FormData()
    frmData.append("body", body)
    frmData.append("title", title)
    frmData.append("image", image)

  


    let url = ``
    const token = localStorage.getItem("token")
    const headers = {

        "Content-Type":"multipart/form-data",
        "authorization":`Bearer ${token}`
    }
    

    
    if (isCreate)
    {
        url = `${baseURL}/posts`
        showSuccessAlert("New Post Created Successfully", "success")
    }
    
    else
    {
        url =`${baseURL}/posts/${postId}`
        frmData.append("_method" , "put")
    }
    toggleLoader(true)
    axios.post(url, frmData, {headers:headers})
    .then((response) => {
        toggleLoader(false)
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("user", JSON.stringify(response.data.user))
    const modal = document.getElementById("createPostModal")  
    const modalInstance = bootstrap.Modal.getInstance(modal)
    modalInstance.hide()  
   
    })
    .catch((err) => {
        const message = err.response.data.message
        showSuccessAlert(message,"danger")
    })


   
    
}


function addBtnClicked() {
    document.getElementById("post-modal-submit-btn").innerHTML = "create"
    document.getElementById("post-modal-title").innerHTML = `Create Post`
    document.getElementById("post-title-input").value= ""
    document.getElementById("post-body-input").value = ""
    let postModal = new bootstrap.Modal(document.getElementById("createPostModal"), {})
    postModal.toggle()
}