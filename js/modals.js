//  <<<<Modals>>>>
const exampleModal = document.getElementById("loginModal");
if (exampleModal) {
  exampleModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute("data-bs-whatever");
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector(".modal-title");
    const modalBodyInput = exampleModal.querySelector(".modal-body input");

    modalTitle.textContent = `New message to ${recipient}`;
    modalBodyInput.value = recipient;
  });
}

const registerModal = document.getElementById("registerModal");
if (registerModal) {
  registerModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute("data-bs-whatever");
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = registerModal.querySelector(".modal-title");
    const modalBodyInput = registerModal.querySelector(".modal-body input");

    modalTitle.textContent = `New message to ${recipient}`;
    modalBodyInput.value = recipient;
  });
}

//  ///<<<<Modals>>>>///
