// original list of candidates
let candidates = [
  { name: 'Peter Parker', likes: 9000 },
  { name: 'Mr. Incredible', likes: 135 },
  { name: 'Superman', likes: 0 },
]

// list to initially display list and likes of candidates
let list = ""
for (i in candidates) {
  list = list + candidates[i].name + " " + candidates[i].likes + " " + "<button id =" + i + "; onClick = " + 'testLike(this.id)' + ">Like</button>" + "<button id =" + i + "; onClick = " + 'deleteMe(this.id)' + ">Delete</button>" + "<br>"
}
document.getElementById('menu').innerHTML = list

// function to increment likes
function testLike(click_id) {
  click_id = click_id.split(";")
  //alert(click_id[0])
  newID = click_id[0]
  candidates[newID].likes += 1

  document.getElementById('menu').innerHTML = "" // hide initial display

  // create new list with incremented values
  test = ""
  for (i in candidates) {
    test = test + candidates[i].name + " " + candidates[i].likes + " " + "<button id =" + i + "; onClick = " + 'testLike(this.id)' + ">Like</button>" + "<button id =" + i + "; onClick = " + 'deleteMe(this.id)' + ">Delete</button>" + "<br>"
  }
  document.getElementById('test').innerHTML = test
}

// function to delete candidate record
function deleteMe(click_id) {
  click_id = click_id.split(";")
  //alert(click_id)
  newID = click_id[0]
  //alert(newID)

  document.getElementById('menu').innerHTML = "" // hide initial display
  
  // remove object from delete button id
  candidates.splice(newID,1)
  // create new list without object to be deleted
  list = ""
  for (i in candidates) {
    list = list + candidates[i].name + " " + candidates[i].likes + " " + "<button id =" + i + "; onClick = " + 'testLike(this.id)' + ">Like</button>" + "<button id =" + i + "; onClick = " + 'deleteMe(this.id)' + ">Delete</button>" + "<br>"
  }
  // display new list
  document.getElementById('test').innerHTML = list
}

//function to retrieve value from user input
function inputFunction() {
  input = document.getElementById("inputCandidate").value
  //add to candidate list
  let newPerson = {name: input, likes: 0}
  candidates.push(newPerson)
  
  document.getElementById('menu').innerHTML = "" // hide initial display

  list1 = ""
  for (i in candidates) {
    list1 = list1 + candidates[i].name + " " + candidates[i].likes + " " + "<button id =" + i + "; onClick = " + 'testLike(this.id)' + ">Like</button>" + "<button id =" + i + "; onClick = " + 'deleteMe(this.id)' + ">Delete</button>" + "<br>"
  }
  // display new list
  document.getElementById('test').innerHTML = list1
}
