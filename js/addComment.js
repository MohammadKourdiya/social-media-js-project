
function addComment() {

    const commentBody = document.getElementById("add-comment-input").value
    const params = {
        "body": commentBody
    }    
    let token = localStorage.getItem("token")
    let url = `${baseURL}/posts/${id}/comments`
    axios.post(url, params, {
        headers: {
            "authorization":`Bearer ${token}`
        }
    })
        .then((response) => {
            console.log(response.data);
            
            getPost()
        })
        .catch((error) => {
            showSuccessAlert(error.response.data.message , "danger");
        })

}
