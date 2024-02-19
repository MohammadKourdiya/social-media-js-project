
function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    const modal = document.getElementById("modal-content");
      const modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    showSuccessAlert("LOGGED OUT SUCCESSFULLY", "success") 
}