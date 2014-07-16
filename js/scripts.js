

$(document).ready(function() {
  var newList;
  var currentList;

  $("form#createList").submit(function() {
    event.preventDefault();

    var inputtedListName = $("input#new-list-name").val();

    newList = { listName: inputtedListName, tasksArray: [] };


    $("ul#lists").append("<li><span class='list'>" + newList.listName + "</span></li>");
    $("input#new-list-name").val("");

    $(".list").last().click(function() {

      $("#list-title h2").text(newList.listName);
      console.log(newList.listName);
      currentList = newList.listName;
      // console.log(currentList);
    });

  });

  $("form#addTask").submit(function() {
    event.preventDefault();

    var inputtedTaskName = $("input#new-task-name").val();
    var newTask = { taskName :inputtedTaskName };
    newList.tasksArray.push(newTask);


    console.log(tasksArray);
    $("input#new-task-name").val("");
    newList.tasksArray.forEach(function(task){
      $("#list-title ul").append("<li><span class='task'>" + task.taskName + "</span></li>");
       tasks.length = 0;
       console.log(tasksArray);
    });


  });
});
