const listOfEmps = [];
function addEmps() {
  const empName = document.getElementById("e").value;
  listOfEmps.push(empName);
  alert("Employee Name Added Successfuly.");
}
function displayEmps() {
  //   const l = document.querySelector("label");
  //   l.textContent = "List Of Employees is the Company are as follows: ";
  document.getElementById("label").innerHTML =
    "List OF Employees is the Company are as follows: ";

  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  for (const Name of listOfEmps) {
    const li = document.createElement("li");
    li.innerHTML = Name;
    ul.append(li);
  }
//   for (let i = 0; i < listOfEmps.length; i++) {
//     const li = document.createElement("li");
//     li.textContent = listOfEmps[i];
//     ul.append(li);
//   }
//   listOfEmps.forEach((element) => {
//     const li = document.createElement("li");
//     li.textContent = element;
//     ul.append(li);
//   });
}
