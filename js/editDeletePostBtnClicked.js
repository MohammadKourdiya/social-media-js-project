

function editPostBtnClicked(postObject) {
    
    let post = JSON.parse(decodeURIComponent(postObject))
    document.getElementById("post-modal-submit-btn").innerHTML = "update"
    document.getElementById("post-id-input").value = post.id
    document.getElementById("post-modal-title").innerHTML = `Edit Post`
    document.getElementById("post-title-input").value= post.title
    document.getElementById("post-body-input").value = post.body
    let postModal = new bootstrap.Modal(document.getElementById("createPostModal"), {})
    postModal.toggle()
}

function deletePostBtnClicked(postObject) {
    

    let post = JSON.parse(decodeURIComponent(postObject))
     document.getElementById("delete-post-id").value = post.id
    let postModal = new bootstrap.Modal(document.getElementById("deletePostModal"), {})
    postModal.toggle()
}

function confirmDeletePost() {
    let token = localStorage.getItem("token")
    let postId= document.getElementById("delete-post-id").value
    const url = `${baseURL}/posts/${postId}`;

    const headers = {

        "Content-Type":"multipart/form-data",
        "authorization":`Bearer ${token}`
    }

    toggleLoader(true)
    axios.delete(url, {
        headers:headers
    })
        .then((response) => {

            toggleLoader(false)
            const modal = document.getElementById("deletePostModal")
            const modalInstance = bootstrap.Modal.getInstance(modal)
            modalInstance.hide()
            showSuccessAlert("The post has been deleted", "primary")
           
        }).catch((error) => {
            const err =error.response.data.message
            showSuccessAlert(err, "danger")
           
        })
      
}
    

