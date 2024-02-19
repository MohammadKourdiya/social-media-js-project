function getCurrentUser() {
  let user = null;
  const storageUser = localStorage.getItem("user");

  if (user == null) {
    user = JSON.parse(`${storageUser}`);
  }
  return user;
}

