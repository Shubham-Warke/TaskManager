$(document).ready(function () {
  $('#addBtn').click(function () {
    const taskText = $('#taskInput').val().trim();
    if (taskText === '') return;

    const $li = $('<li></li>');
    const $span = $('<span></span>').text(taskText);
    const $actions = $('<div class="actions"></div>');

    const $doneBtn = $('<button class="complete-btn">Done</button>').click(function () {
      $li.toggleClass('completed');
    });

    const $editBtn = $('<button class="edit-btn">Edit</button>').click(function () {
      const newText = prompt('Edit your task:', $span.text());
      if (newText !== null && newText.trim() !== '') {
        $span.text(newText.trim());
      }
    });

    const $deleteBtn = $('<button>Delete</button>').click(function () {
      $li.remove();
    });

    $actions.append($doneBtn, $editBtn, $deleteBtn);
    $li.append($span, $actions);
    $('#taskList').append($li);

    $('#taskInput').val('');
  });
});
