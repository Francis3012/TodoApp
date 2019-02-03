// Check off Specific Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

$(".fa-book-open").on("click", function () {
  $("input[type='text']").fadeToggle();
});

//Click on X to Delete Todo
$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

//Add New Todo to li
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //grrabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='as fa-book-open'></i></span> " + todoText + "</li>");
  }
});