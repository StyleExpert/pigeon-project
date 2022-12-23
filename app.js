(function () {
  let menu = document.getElementsByClassName("hamburger_menu")[0];

  document.getElementsByClassName("hamburger_button")[0].onclick = function () {
      menu.style.display = !menu.style.display || menu.style.display == "none" ? "block" : "none";
  };
})();
