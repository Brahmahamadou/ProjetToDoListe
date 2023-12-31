
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
const inputCategorie = document.getElementById("categorie");
const inputTitre = document.getElementById("titre");
const inputDate = document.getElementById("date");
const inputStatu = document.getElementById("statu");
const inputDescription = document.getElementById("description")
const inputTable = document.getElementById("table");
const btnAjouter = document.getElementById("ajouter");
const trtab = document.getElementById("valeur");
const btnBouton1 = document.getElementById("bouton1");
const btnBouton2 = document.getElementById("bouton2");
const btnBouton3 = document.getElementById("bouton3");
const tbody = document.getElementById("tbody");
const notification = document.getElementById("notification")
const notification2 = document.getElementById("notification2")
const tableaudescripton = document.getElementById("tableaudescripton")
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
    alert("veuillez mettre une valeur")
  }
  else {
    const tableau = {
      inputCategorie: inputCategorie.value,
      inputTitre: inputTitre.value,
      inputDate: inputDate.value,
      inputStatu: inputDate.value,
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
//function pour modifier
function modifier(index) {
  // Pré-remplir les champs avec les détails de la tâche sélectionnée
  inputCategorie.value = tabLocalStorage[index].inputCategorie;
  inputTitre.value = tabLocalStorage[index].inputTitre;
  inputDate.value = tabLocalStorage[index].inputDate;
  inputDescription.value = tabLocalStorage[index].inputDescription;
  inputStatu.value = tabLocalStorage[index].inputStatu;
  
  tabLocalStorage = tabLocalStorage.filter((element) => element.index === index);
  // Mettre à jour l'affichage
  todolist(index);
}
//function pour afficher
function afficher(index) {
  
  tableaudescripton.classList.remove("hidden")
  setTimeout(() => {
    tableaudescripton.classList.add("hidden")
  }, 3000);

  todolist();
}
function todolist(event) {
  event?.preventDefault();
  tbody.innerHTML = "";
  tabLocalStorage.forEach((element, index) => {
    tbody.innerHTML += `
     <tr id="valeur" class="">
     <td>${index + 1}</td>
     <td>${element.inputDate}</td>
     <td>${element.inputTitre}</td>
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
