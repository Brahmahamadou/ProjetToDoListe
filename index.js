
const ctx = document.getElementById('canvas')

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [],
    datasets: [{
      label: '',
      data: [12, 19, 10],
      borderWidth: 1
    }]
  },
  options: {
  }
});
const body = document.body
const inputCategorie = document.getElementById("categorie");
const inputTitre = document.getElementById("titre");
const inputDate = document.getElementById("date");
const inputStatu = document.getElementById("statu");
const inputDescription = document.getElementById("description");
const inputTable = document.getElementById("table");
const btnAjouter = document.getElementById("ajouter");
const btnAjouter2 = document.getElementById("ajouter2");
const trtab = document.getElementById("valeur");
const btnBouton1 = document.getElementById("bouton1");
const btnBouton2 = document.getElementById("bouton2");
const btnBouton3 = document.getElementById("bouton3");
const tbody = document.getElementById("tbody1");
const tbodyDeux = document.getElementById("bod");
const notification = document.getElementById("notification");
const notification2 = document.getElementById("notification2");
const notification3 = document.getElementById("notification3");
const floatingTextarea2 = document.getElementById("floatingTextarea2");
const tableaudescripton = document.getElementById("tableaudescripton");
const btnti = document.getElementById("ti");
const titre = document.getElementById("titre1");
const pe = document.getElementById("pe");
const pe1 = document.getElementById("pe1");


// console.log(notification);
let tabLocalStorage = [];
if (!JSON.parse(localStorage.getItem("tabLocalStorage"))) {
  tabLocalStorage = localStorage.setItem("tabLocalStorage", JSON.stringify(tabLocalStorage))
}

tabLocalStorage = JSON.parse(localStorage.getItem("tabLocalStorage"))
// console.log(tabLocalStorage);

btnAjouter.addEventListener("click", function (event) {
  event?.preventDefault()
  if (inputCategorie.value === "" || inputTitre.value === "" || inputDate === "" || inputDescription === "" || inputStatu === "") {
    alert("veuillez mettre les valeurs")
  }
  else {
    const tableau = {
      inputCategorie: inputCategorie.value,
      inputTitre: inputTitre.value,
      inputDate: inputDate.value,
      inputStatu: inputStatu.value,
      inputDescription: inputDescription.value
    }
    tabLocalStorage.push(tableau);
    localStorage.setItem("tabLocalStorage", JSON.stringify(tabLocalStorage))
    inputCategorie.value = ""
    inputTitre.value = ""
    inputDate.value = ""
    inputDescription.value = ""
    inputStatu.value = ""
    notification.classList.remove("hidden")
    setTimeout(() => {
      notification.classList.add("hidden")
    }, 3000);

    todolist();

  }
})
//function pour supprimer
function supprimer(index) {
  // Supprimer la tâche correspondant à l'index du tableau
  tabLocalStorage.splice(index, 1);
  // Mettre à jour le localStorage
  localStorage.setItem("tabLocalStorage", JSON.stringify(tabLocalStorage));
  notification2.classList.remove("hidden")
  setTimeout(() => {
    notification2.classList.add("hidden")
  }, 3000);
  // Mettre à jour l'affichage
  todolist();
}
//function Pour Modifier
function modifier(index) {
  // Récupérer la tâche correspondant à l'index du tableau
  btnAjouter.classList.add("bu2")
  btnAjouter2.classList.remove("bu2");
  titre.style.backgroundColor = '#06ffcb';
  pe1.classList.add("hidden")
  pe.classList.remove("hidden");
  // Remplir les champs d'entrée avec les valeurs de la tâche à modifier
  inputCategorie.value = tabLocalStorage[index].inputCategorie;
  inputTitre.value = tabLocalStorage[index].inputTitre;
  inputDate.value = tabLocalStorage[index].inputDate;
  inputDescription.value = tabLocalStorage[index].inputDescription;
  inputStatu.value = tabLocalStorage[index].inputStatu;

  btnAjouter2.addEventListener("click", function (event) {
    event.preventDefault();
    titre.style.backgroundColor = '';
    btnAjouter.classList.remove("bu2");
    btnAjouter2.classList.add("bu2");
    pe1.classList.remove("hidden");
    pe.classList.add("hidden");

    tabLocalStorage[index].inputCategorie = inputCategorie.value /* nouvelle valeur */
    tabLocalStorage[index].inputTitre = inputTitre.value /* nouvelle valeur */
    tabLocalStorage[index].inputDate = inputDate.value /* nouvelle valeur */
    tabLocalStorage[index].inputDescription = inputDescription.value /* nouvelle valeur */
    tabLocalStorage[index].inputStatu = inputStatu.value;/* nouvelle valeur */

    inputCategorie.value = ""
    inputTitre.value = ""
    inputDate.value = ""
    inputDescription.value = ""
    inputStatu.value = "";
    notification3.classList.remove("hidden")
    setTimeout(() => {
      notification3.classList.add("hidden")
    }, 3000);
    // Mettre à jour le tableau localStorage
    localStorage.setItem("tabLocalStorage", JSON.stringify(tabLocalStorage));
    // Mettre à jour l'affichage
    todolist();
  })

  localStorage.setItem("tabLocalStorage", JSON.stringify(tabLocalStorage));
  todolist();
};

//function pour afficher
function afficher(index) {

  tbodyDeux.innerHTML = `
  <tr class="border-white">
  <th scope="row">Date:</th>
  <td>${tabLocalStorage[index].inputDate}</td>
</tr>
<tr class="border-white">
  <th scope="row">Titre:</th>
  <td>${tabLocalStorage[index].inputTitre}</td>
</tr>
<tr class="border-white">
  <th scope="row">Categorie:</th>
  <td>${tabLocalStorage[index].inputCategorie}</td>
</tr>
<tr class="border-white">
  <th scope="row">Description:</th>
  <td colspan="2">${tabLocalStorage[index].inputDescription}</td>
</tr>
<tr class="border-white">
  <th scope="row">Statut:</th>
  <td>${tabLocalStorage[index].inputStatu}</td>
</tr>
  `
  tableaudescripton.style.backgroundColor = '#ffffff'
  floatingTextarea2.style.backgroundColor = '#e3e9e9'
  body.style.backgroundColor = '#e3e9e9'
  tableaudescripton.classList.remove("hidden")
  setTimeout(() => {
    tableaudescripton.classList.add("hidden");
    body.style.backgroundColor = '';
    floatingTextarea2.style.backgroundColor = '';
    tableaudescripton.style.backgroundColor = ''
  }, 3000);
  todolist();
}
function todolist() {
  tbody.innerHTML = "";
  tabLocalStorage.forEach((element, index) => {
    tbody.innerHTML += `
     <tr id="valeur" class="">
     <td>${index + 1}</td>
     <td>${element.inputDate}</td>
     <td id="ti">${element.inputTitre}</td>
     <td>${element.inputCategorie} </td>
     <td class=" w-100 gap-2 d-flex justify-content-center align-items-center">
       <button id="bouton1" onclick="afficher(${index})"  class="border-0 oil d-flex justify-content-center align-items-center">
         <i class="bi bi-eye-fill"></i>
       </button>
       <button id="bouton2" onclick="modifier(${index})" class="border-0 modifier d-flex justify-content-center align-items-center">
         <i class="bi bi-pencil-fill"></i>
       </button>
       <button id="bouton3" onclick="supprimer(${index})" class="border-0 supprimer d-flex justify-content-center align-items-center">
         <i class="bi bi-trash-fill"></i>
       </button>
     </td>
   </tr>`
  });
}
todolist();
// Afficher Contenu Description
btnti.addEventListener("click", function (e) {
  e.preventDefault();
  floatingTextarea2.textContent = inputTitre.value
})