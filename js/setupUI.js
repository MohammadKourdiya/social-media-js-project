
    
function setupUI() {
   
    const token=localStorage.getItem("token")
  
    const addBtn= document.getElementById("add-post-btn")
    const logoutDiv = document.getElementById("logout-div")
    const loginDiv =document.getElementById("login-div")

    if (token==null) //user is guest(not logged in)
    {
      if (addBtn != null)
      {
        addBtn.style.setProperty("display","none","important")  
      }
      loginDiv.style.setProperty("display","flex","important")
      logoutDiv.style.setProperty("display", "none", "important")
     
    } else {
      if (addBtn!=null) {
        addBtn.style.setProperty("display","block","important")
        
      }
      loginDiv.style.setProperty("display","none","important")
      logoutDiv.style.setProperty("display", "flex", "important")
     
      const user = getCurrentUser()
      document.getElementById("nav-username").innerHTML = `@${user.username}`
      document.getElementById("nav-user-image").src = user.profile_image
       
    }
   
}
  