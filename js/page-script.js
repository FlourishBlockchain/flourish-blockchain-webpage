$(document).ready(() => {
    $("#nav-toggle").click(()=>{
        $("#nav-mobile-links").toggle(300)
    });
    $(".faq > p").click((e)=>{
        let elem =  e.target.id
        $(`.${elem}`).toggle(300)
        // console.log(elem)
        $(`#faqs .faq-hide:not(.${elem})`).hide(300)

    });
});
