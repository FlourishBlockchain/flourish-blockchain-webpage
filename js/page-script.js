$(document).ready(() => {
  $("#nav-toggle").click(() => {
    $("#nav-mobile-links").toggle(300);
  });

  $(".faq > p").click(e => {
    let elem = e.target.id;
    $(`.${elem}`).toggle(300);
    // console.log(elem)
    $(`#faqs .faq-hide:not(.${elem})`).hide();
  });

  $(".faq-sub > p").click(e => {
    let elem = e.target.id;
    $(`.${elem}`).toggle(300);
    // console.log(elem)
    $(`#faq-subs .faq-hide:not(.${elem})`).hide();
  });

  $("#nav-mobile-links a").click(() => {
    $("#nav-mobile-links").hide(100);
  });
});
