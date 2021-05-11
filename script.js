
// open pop up 
$("#go-to-login").click(() => {
    $("#login-form").toggleClass("invisible");
    if( ! ($("#signup-form").hasClass("invisible")) ) {
        $("#signup-form").toggleClass("invisible");
    }
    $("#login-cover").css("filter", "brightness(50%)");
});
$("#go-to-signup").click(() => {
    $("#signup-form").toggleClass("invisible");
    if( ! ($("#login-form").hasClass("invisible")) ) {
        $("#login-form").toggleClass("invisible");
    }
    $("#login-cover").css("filter", "brightness(50%)");
})

// close pop up
$("#close-login").click(() => {
    $("#login-form").toggleClass("invisible");
    $("#login-cover").css("filter", "brightness(100%)");
});
$("#close-signup").click(() => {
    $("#signup-form").toggleClass("invisible");
    $("#login-cover").css("filter", "brightness(100%)");
});




// view page

$("#add-content").on('click', () => {
    // debugger;
    var count = $("#content-count").val();
    $("#content-container").append(`<div class="form-group" id="content-box${count}">
    <label for="content${count}">Content</label>
    <span class="float-right close-content" id="close-content-btn${count}">&times</span>
    <textarea class="form-control" rows="3" name="content1" id="content${count}"></textarea>
</div>`);
    $("#content-count").val(count + 1);
});

// <div class="form-group" id="content-box${count}">
//     <label for="content${count}">Content</label>
//     <span class="float-right close-content" id="close-content-btn${count}">&times</span>
//     <textarea class="form-control" rows="3" id="content${count}"></textarea>
// </div>


/**
 Remove content-box if 'x' is clicked
 */
var closebtns = $(".close-content");

for(var i =0; i< closebtns.length; i++) {
    // console.log(closebtns[i]);
    $(closebtns[i]).click((e) => {
        $(e.target).parent().remove();
        $("#content-count").val($("#content-count").val() - 1);
    });
}