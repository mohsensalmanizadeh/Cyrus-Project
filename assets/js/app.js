let listNav = document.querySelector(".menu");
let listNavBtn = document.querySelector(".nav__icon");
let listNavBtnIcon = document.querySelector(".nav__icon i");

if (listNavBtn && listNavBtnIcon) {
  listNavBtn.addEventListener("click", function () {

    listNav.classList.toggle("menu__open");

    const isOpen = listNav.classList.contains("menu__open");

    listNavBtnIcon.classList.toggle("fa-bars", !isOpen);
    listNavBtnIcon.classList.toggle("fa-times", isOpen);

  });
}



