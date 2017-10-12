var createStatusList = function (title, body, resolved) {
  var statusList = document.createElement('ul');
  statusList.classList.add('status');

  var listTitle = document.createElement('li');
  var listBody = document.createElement('li');
  var listResolved = document.createElement('li');
  listTitle.innerText = title;
  listBody.innerText = body;
  listResolved.innerText = resolved;
  statusList.appendChild(listTitle);
  statusList.appendChild(listBody);
  statusList.appendChild(listResolved);

  return statusList;
}

var addStatus = function(title, body, resolved) {
  var list = createStatusList(title, body, resolved);

  var statuses = document.getElementById('statuses');
  statuses.appendChild(list);
}


var app = function() {
  
  addStatus("test", "test", "test");
}

window.onload = app;