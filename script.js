const listForm = document.getElementsByClassName("list-form")[0];
const mainList = document.getElementsByClassName("main-list")[0];
const listInput = document.getElementsByClassName("list-input")[0];

listForm.addEventListener("submit", addList)
mainList.addEventListener("submit", addItem)
mainList.addEventListener("click", handleListClick)


function addList(e) {
  e.preventDefault()

  const li = document.createElement("li")
  const details = document.createElement("details")
  const summary = document.createElement("summary")
  const input = document.createElement("input")
  const button = document.createElement("button")
  const ul = document.createElement("ul")
  const form = document.createElement("form")

  mainList.appendChild(li).appendChild(details).appendChild(summary).append(listInput.value)
  details.appendChild(form).append(input, button)
  details.append(ul)
  button.append("add item")
}

function addItem(e) {
  e.preventDefault()

  const ul = e.target.nextElementSibling
  const input = e.target.firstElementChild
  const li = document.createElement("li")
  const div = document.createElement("div")
  const editButton = document.createElement("button")
  const deleteButton = document.createElement("button")
  const form = document.createElement("form")
  const formInput = document.createElement("input")
  const saveButton = document.createElement("button")
  const cancelButon = document.createElement('button')

  editButton.className = "edit"
  formInput.className = "item-input"
  cancelButon.className = "cancel"
  ul.appendChild(li).appendChild(div).append(input.value, editButton, deleteButton)
  li.appendChild(form).append(formInput, saveButton, cancelButon)
  editButton.append("edit")
  deleteButton.append("delete")
  saveButton.append("save")
  cancelButon.append("cancel")
  cancelButon.setAttribute("type", "button")
  form.hidden = true
}

function edit(e) {
  const div = e.target.parentElement
  const form = div.nextElementSibling
  const itemInput = form.getElementsByClassName("item-input")[0];
  const text = div.firstChild.textContent

  itemInput.value = text
  form.hidden = false
  div.hidden = true
}


function cancel(e) {
  const form = e.target.parentElement
  const div = form.previousElementSibling

  form.hiden = true
  div.hiden = false
  
}


setTimeout(() => {
  listInput.value = "alex" 
  listForm.requestSubmit()
  
},1000);

function handleListClick(e) {
  if (e.target.className === "edit"){
    edit(e)
  }
  if (e.target.className === "cancel"){
    cancel(e)
  }

}
