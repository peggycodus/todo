

$(document).ready(function() {
  var currentList;

  $("form#createList").submit(function() {
    event.preventDefault();

    var inputtedListName = $("input#new-list-name").val();

    var newList = { listName: inputtedListName, tasksArray: [] };


    $("ul#lists").append("<li><span class='list'>" + newList.listName + "</span></li>");



    $(".list").last().click(function() {
      $("#list-title h2").text(newList.listName);
      currentList = newList;
      console.log(currentList);
      $("#list-title ul").empty();

    });
      $("input#new-list-name").val("");
  });

  $("form#addTask").submit(function() {
    event.preventDefault();

      var inputtedTaskName = $("input#new-task-name").val();
      var newTask = { taskName :inputtedTaskName };
      currentList.tasksArray.push(newTask);

      $("#list-title ul").empty();//empty all tasks
      currentList.tasksArray.forEach(function(task) {

        $("#list-title ul").append("<li>" + task.taskName  + "</li>");

        console.log(currentList.tasksArray);
        $("input#new-task-name").val("");
      });



  });
});
