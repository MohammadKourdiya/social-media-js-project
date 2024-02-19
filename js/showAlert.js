
function showSuccessAlert(customMessage ,type) {
  const alertPlaceholder = document.getElementById("success-alert");
  const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>"
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  
  appendAlert(customMessage, type);
  //TODO :: TO HIDE ALERT 

  //setTimeout(() => {
    //const alertToHide = bootstrap.Alert.getOrCreateInstance("#success-alert")
    //alertToHide.Hide() 
  //},2000)

}
