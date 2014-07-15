

$(document).ready(function() {
  var newList;
  var currentList;
  $("form#createList").submit(function() {
    event.preventDefault();

    var inputtedListName = $("input#new-list-name").val();

    newList = { listName: inputtedListName, tasks: [] };


    $("ul#lists").append("<li><span class='list'>" + newList.listName + "</span></li>");
    $("input#new-list-name").val("");
    $(".list").last().click(function() {

      $("#list-title h2").text(newList.listName);
      currentList = newList.listName;
      console.log(currentList);
    });

  });
  $("form#addTask").submit(function() {
    event.preventDefault();

    var inputtedTaskName = $("input#new-task-name").val();
    var newTask = { taskName:inputtedTaskName };
    currentList.tasks.push(newTask);

    newList.tasks.forEach(function(task){
      $("#list-title ul").append("<li><span class='task'>" + task.taskName + "</span></li>");
    });

  $("input#new-task-name").val("");
  });



});
