var budgetArray=[]

function btn(){
    // totalAmount.value=Number(totalAmount.value)
    totalAmount.value=totalAmount.value-amount_spent.value
display.innerHTML=""
    budgetArray.push(amount_spent.value)
    for (var i = 0; i < budgetArray.length; i++) {
    //  display.innerHTML+='<div class="p-2 bg-primary my-2">Amount Spent:'+ budgetArray[i] +'</div>' 
// var changeColor=budgetArray[i]<=45?"p-2 bg-primary my-2":"p-2 bg-danger my-2"

var changeColor=budgetArray[i]<=45?`

<div class="p-2 bg-primary my-2">Amount spent: ${budgetArray[i]} <div/>`
:

`<div class="p-2 bg-info my-2">Amount spent: ${budgetArray[i]} <div/>`

    display.innerHTML+=changeColor
    }
}