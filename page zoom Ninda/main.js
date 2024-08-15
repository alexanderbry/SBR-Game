let clients = [];
let Index;
function addClient() {

  let newClient = {
    name: document.getElementById("client-name").value,
    desc: document.getElementById("desc").value
  }
  clients.push(newClient)
  displayClients()
}

function displayClients() {
  document.getElementById("form-list-client-body").innerHTML = ""
  for (i = 0; i < clients.length; i++) {
    let myTr = document.createElement("tr")
    for (a in clients[i]) {
      let mytd = document.createElement("td")
      mytd.innerHTML = clients[i][a]
      myTr.appendChild(mytd)
    }
    let forTd = document.createElement("td") 
    let editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit"
    editBtn.setAttribute("class", "btn btn-sm btn-primary")
    editBtn.setAttribute("onclick", "editClient(" + i + ")")

    let deletebtn = document.createElement("button")
    deletebtn.innerHTML = "Delete"
    deletebtn.setAttribute("class", "btn btn-sm btn-danger")
    deletebtn.setAttribute("onclick", "deleteClient(" + i + ")")

    forTd.appendChild(editBtn)
    forTd.appendChild(deletebtn)
    myTr.appendChild(forTd)
    document.getElementById("form-list-client-body").appendChild(myTr)

  }
  document.getElementById("client-name").value = "";
  document.getElementById("desc").value = ""
}

//Editing Client
function editClient(i) {
  console.log(clients[i])
  Index = i;
  let updatebtn = document.createElement("button")
  updatebtn.innerHTML = "Update";
  updatebtn.setAttribute("class", "btn btn-sm btn-success")
  updatebtn.setAttribute("onclick", "updClient()")
  document.getElementById("saveupdate").innerHTML = ""
  document.getElementById("saveupdate").appendChild(updatebtn);
  document.getElementById("client-name").value = clients[i].name
  document.getElementById("desc").value = clients[i].desc
}

//Updating Client
function updClient() {
  let updatedClient = {
    name: document.getElementById("client-name").value,
    desc: document.getElementById("desc").value
  }
  clients[Index] = updatedClient;
  let crbtn = document.createElement("button")
  crbtn.innerHTML = "Save";
  crbtn.setAttribute("onclick", "addClient()")
  crbtn.setAttribute("class", "btn btn-sm btn-success")
  document.getElementById("saveupdate").innerHTML = ""

  document.getElementById("saveupdate").appendChild(crbtn);

  displayClients()
}

//deleting client
function deleteClient(i) {
  clients.splice(i, 1)
  displayClients()
}