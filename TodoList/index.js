
 const ctx = document.getElementById('canvas')

 new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [],
      datasets: [{
        label: '',
        data: [12, 19, 10 ],
        borderWidth: 1
      }]
    },
    options: {

    }
  });
  const inputCategorie = document.getElementById("categorie");
  const inputTitre = document.getElementById("titre");
  const inputdate = document.getElementById("date");
  const inputsTatu = document.getElementById("statu");
  const inputTable = document.getElementById("table");
  const btnAtjouter = document.getElementById("ajouter");
   