window.onload = () => {
  setTimeout(() => {
    $("body").addClass("display");
  }, 4000);
};

$(".hamburger-menu").on("click", () => {
  console.log("clicked");
  $(".container").toggleClass("change");
});

$(".scroll-btn").on("click", () => {
  $("html").css("scrollBehavior", "smooth");
  setTimeout(() => {
    $("html").css("scrollBehavior", "unset");
  }, 1000);
});
