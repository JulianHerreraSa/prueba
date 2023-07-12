console.log("ejecucion de script");
const imgReaction = document.querySelector("#Reaction");
const imgMemory = document.querySelector("#Memory");
const imgVerbal = document.querySelector("#Verbal");
const imgVisual = document.querySelector("#Visual");

const spanReaction = document.querySelector("#valReaction");
const spanMemory = document.querySelector("#valMemory");
const spanVerbal = document.querySelector("#valVerbal");
const spanVisual = document.querySelector("#valVisual");
cargarDatos();
function cargarDatos(){
  fetch("./data.json")
  .then(respuesta => respuesta.json())
  .then(respuesta => {
    respuesta.forEach(element => {
        //console.log(element);
        if(element.category == imgReaction.id){
            imgReaction.src =element.icon;
            spanReaction.textContent = element.score;
        }
        if(element.category == imgMemory.id){
            imgMemory.src =element.icon;
            spanMemory.textContent = element.score;
        }
        if(element.category == imgVerbal.id){
            imgVerbal.src =element.icon;
            spanVerbal.textContent = element.score;
        }
        if(element.category == imgVisual.id){
            imgVisual.src =element.icon;
            spanVisual.textContent = element.score;
        }

    });
  })
}
