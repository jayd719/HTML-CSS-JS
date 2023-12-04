window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 10) {
    var header = $(".header");
    var appLogo = $(".app-logo");
    header.removeClass("header").addClass("header-alt");
    appLogo.removeClass("app-logo").addClass("app-logo-alt");
  } else {
    var header = $(".header-alt");
    var appLogo = $(".app-logo-alt");
    header.removeClass("header-alt").addClass("header");
    // header.addClass("header_zeroOpc");
    appLogo.removeClass("app-logo-alt").addClass("app-logo");
  }
}
