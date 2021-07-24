'use strict';

let containerForm = document.getElementById('container-form');
let containerTable = document.getElementById('container-Table');
let myForm = document.getElementById('myform');
let tableEl = document.createElement('table');


let cars =[];

function car (cName,cModel,mYear) {

    this.cName = cName;
    this.cModel = cModel;
    this.mYear = mYear;
    

cars.push(this);
this.cmImage = "img/"+cModel+".png";
saveTolocalStorage ();
}



car.prototype.render = function (){

    

  let trEl1 = document.createElement('tr');
  

  let tdName = document.createElement('td');
  tdName.textContent = `Car name: ${this.cName}`;
  trEl1.appendChild(tdName);

  let displayImage = document.createElement('img');
  displayImage.setAttribute ('src', this.cmImage);
  displayImage.setAttribute ('width', '100px');
  displayImage.setAttribute ('height', '100px');
  
  
  let tdImage = document.createElement('td');
  tdImage.appendChild(displayImage);
  trEl1.appendChild(tdImage);
  
  let trEl2 = document.createElement('tr');

  let tdYear = document.createElement('td');
  tdYear.textContent = `Model Car : ${this.mYear}`;
trEl2.appendChild(tdYear);

tableEl.appendChild(trEl1);
tableEl.appendChild(trEl2);
containerTable.appendChild(tableEl);
}


myForm.addEventListener('submit', showCar);

function showCar (event) {

    event.preventDefault();

    let cName = event.target.cName.value;
    let cModel = event.target.cModel.value;
    let mYear = event.target.mYear.value;

    let newCar = new car (cName,cModel,mYear);
    newCar.render();


}




function saveTolocalStorage (){

    let saveLocal =JSON.stringify(cars);
    localStorage.setItem('Car',saveLocal)

}

function readFromLocalStorage (){

    let stringObj = localStorage.getItem('Car');
    let normalObj = JSON.parse(stringObj);
    if (normalObj !== null) {
        for ( let i=0 ; i < normalObj.length ; i++){

            new car (normalObj[i].cName, normalObj[i].cModel,normalObj[i].mYear);
            
            cars[i].render();
        }

        
    }
    
}
readFromLocalStorage ();

let clearButton = document.getElementById('clear');

clearButton.addEventListener('submit',clearr);

function clearr (event) {

    // event.preventDefault();
    localStorage.clear();
}

