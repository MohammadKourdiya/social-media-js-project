function loginBtnClicked() {
    const username = document.getElementById("username-input").value;
    const password = document.getElementById("password-input").value;
  
    const params = {
      username: username,
      password: password
    };
  
    const url = `${baseURL}/login`;
    toggleLoader(true)
    axios.post(url, params).then((response) => {
    toggleLoader(false)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
  
      const modal = document.getElementById("loginModal");
      const modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
  
      showSuccessAlert("LOGGED IN SUCCESSFULLY" ,"success") 
      setupUI()
    });
  }
  