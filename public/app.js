var createStatusList = function (title, description, status, resolved) {
  var newStatus = document.createElement('ul');
  newStatus.classList.add('status');

  var resolvedText = "false";
  if(resolved) {
    resolvedText = "true"
  }

  var listTitle = document.createElement('li');
  var listDescription = document.createElement('li');
  var listStatus = document.createElement('li');
  var listResolved = document.createElement('li');
  listTitle.innerText = title;
  listDescription.innerText = description;
  listStatus.innerText = status;
  listResolved.innerText = resolvedText;
  newStatus.appendChild(listTitle);
  newStatus.appendChild(listDescription);
  newStatus.appendChild(listStatus);
  newStatus.appendChild(listResolved);

  return newStatus;
}

var appendElements = function (statuses, list) {
  statuses.appendChild(list);
}

var addStatus = function(title, description, status, resolved) {
  var list = createStatusList(title, description, status, resolved);

  var statuses = document.getElementById('statuses');
  appendElements(statuses, list);
}


var app = function() {
  
  addStatus("test", "test", "test", true);
}

window.onload = app;