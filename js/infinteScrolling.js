let currentPage = 1


window.addEventListener("scroll", () => {
    
    const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if (endOfPage && (currentPage < lastPage)) {
        currentPage = currentPage + 1
        getPosts(false ,currentPage)
    }
})