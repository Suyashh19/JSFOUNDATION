//example 1

let hold = document.getElementById("changeTextButton");
console.log(hold);
addEventListener("click",function(){
    let paragraph = document.getElementById
    ("myParagraph");
    
    paragraph.textContent = "the paragraph is changed"
    
    
});
//Example 2

document
.getElementById("highlightFirstCity")
.addEventListener("click",function ()
{
    let citiesList = document.getElementById
    ("citiesList");
   console.log(citiesList.firstElementChild.classList.add("highlight"))
    
})
//example 3

document.getElementById("changeOrder").addEventListener("click",function () {
   let coffeeType = document.getElementById("coffeeType");
   coffeeType.textContent = "Espresso"
   coffeeType.style.backgroundColor = "brown";
   coffeeType.style.padding= "5px";
})
//Example 4
document.getElementById("addNewItem").addEventListener("click",function () {
    let newItem = document.createElement('li')
    newItem.textContent="Eggs"

 let NewItem = document.getElementById("shoppingList").appendChild(newItem);
     console.log(NewItem);
        
});
 //example 5
 document
   .getElementById("removeLastTask")
   .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
   });

//Example 6
document.getElementById("clickMeButton").addEventListener("click",function () {
    alert("chaicode")
});

//Example 7
document.getElementById("teaList").addEventListener("click", function(event) {
    if (event.target && event.target.matches('.teaItem')) {
        alert("you selected:" + event.target.textContent)
    }
    
});

// Example 8
document.getElementById("feedbackForm").addEventListener("submit",function(event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `feedback is : ${feedback}`
    
})

//Example 9
document.addEventListener('DOMContentLoaded',function () {
    document.getElementById("domStatus").textContent = "DOM fully loaded"
})


//Example 10
document.getElementById("toggleHighlight")
.addEventListener("click",function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight")
})
