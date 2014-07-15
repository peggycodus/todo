$(document).ready(function() {
  $("form#createList").submit(function() {
    event.preventDefault();

    var inputtedListName = $("input#new-list-name").val();

    var newList = { listName: inputtedListName };

    $("ul#lists").append("<li><span class='list'>" + newList.listName + "</span></li>");

    $("input#new-list-name").val("");

    $(".list").click(function() {
      $("#list-title h2").append(newList.listName)




                            // "<div class='task-create'>" +
                            // "<div class='form-group'>" +
                            // "<label for='new-task-name'>New Task:</label>" +
                            // "<input type='text' class='form-control' id='new-task-name'>" +
                            // "</div>");
    });
  });
});
