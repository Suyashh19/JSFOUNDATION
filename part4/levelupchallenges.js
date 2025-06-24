let teas =["green tea","black tea","chai","oolong tea"];
let selectedTeas =[];
for(let i =0;i<teas.length;i++){
    if(teas[i] == 'chai'){
        break;
    }
    selectedTeas.push(teas[i])
    
}
//console.log(selectedTeas);
/*let cities=["london","newyork","Paris","Berlin"];
let visitedcities = [];
for (let i = 0; i < cities.length; i++) {
     if (cities[i] == "Paris" || cities[i]=="Paris") {
        continue; 
     }
     visitedcities.push(cities[i]);   
} 
     */ 
// console.log(visitedcities);

let numbers = [1,2,3,4,5]
let smallnumbers =[]

for (const num of numbers) {
    if(num == 4){
        break;
    }
    smallnumbers.push(num)
}
// console.log(smallnumbers);

let Teatypes = ["chai","green tea","herbal tea","black tea"]
let preferredTeas = []
for (const teaa of Teatypes) {
    if( teaa == "herbal tea"){
        continue;
    }
    preferredTeas.push(teaa)
}
// console.log(preferredTeas);

let citiespopulation ={
    london : 1000,
    "new york" :1100,
    paris : 1110,
    berlin : 2110
};
let citypopulation ={};
for (const city in citiespopulation) {
    if( city == "berlin"){
        break;
    }
    citypopulation[city] = citiespopulation[city];
    
}
// console.log(citypopulation);




