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

  $(".contact-us").click(()=>{
      let elem = document.getElementById("email-input")
      setTimeout(()=>{elem.focus()},0)
  })

  $("#subscribe").click(()=>{
    let elem = document.getElementById("email-input");
    // logic to subscribe to newsletter goes here
  })
});
