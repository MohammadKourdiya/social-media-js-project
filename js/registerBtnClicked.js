


function registerBtnClicked() {
    const name = document.getElementById("register-name-input").value;
    const username = document.getElementById("register-username-input").value;
    const password = document.getElementById("register-pass-input").value;
    const image = document.getElementById("register-image-input").files[0]
    

  
    let frmData = new FormData()
    
    frmData.append("name", name)
    frmData.append("username", username)
    frmData.append("password", password)
    frmData.append("image", image)

  
  
   
    const headers = {
        "Content-Type":"multipart/form-data",
    }
    
  const url = `${baseURL}/register`;
  toggleLoader(true)
    axios.post(url, frmData, {headers:headers})
    
      .then((response) => {
        toggleLoader(false)
       
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
  
      const modal = document.getElementById("registerModal");
      const modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
      


      

      showSuccessAlert("New User Registered Successfully")
      setupUI()
       
     
    }).catch((err) => {
      const errMessage =err.response.data.message
      showSuccessAlert(errMessage, "danger")
      console.log(errMessage);
    })
  }
