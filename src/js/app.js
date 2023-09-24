const listIcon = document.querySelector(".cmp-header__container-icon");
const headerMenu = document.querySelector(".cmp-header__container-menu");
listIcon.addEventListener("click", () => {
    headerMenu.classList.toggle("cmp-header__container-menu--active");    
})
