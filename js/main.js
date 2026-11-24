// Shared navigation interaction using jQuery.
$(function () {
  $(".menu-toggle").on("click", function () {
    const isOpen = $(".nav-links").toggleClass("open").hasClass("open");
    $(this).attr("aria-expanded", isOpen);
  });
});
