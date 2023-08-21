// Refresh the page
function refreshPage() {
    location.reload();
}

// Declare a global variable to store the input value
var globalInputValue = "";

// Function to update the global variable with the input value
function updateGlobalValue() {
    var inputField = document.getElementById("inputField");
    globalInputValue = inputField.value;
    // document.getElementById("globalValue").textContent = globalInputValue;
}

// Function to check if the input field is empty and enable/disable the submit button accordingly
function checkInputField() {
    var inputField = document.getElementById("inputField");
    var submitButton = document.getElementById("submitButton");
    
    if (inputField.value === "") {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

// Add event listeners to the input field for input and to the submit button for click
var inputField = document.getElementById("inputField");
var submitButton = document.getElementById("submitButton");

inputField.addEventListener("input", checkInputField);
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    updateGlobalValue();
    getPrice('none', '0', 0);
});

// console.log("HI--> ",globalInputValue);

const arrayPrice = [];
function getPrice(itemName, price, flag) {
    const itemPrice = parseFloat(price);
    arrayPrice.push(itemPrice);
    console.log(arrayPrice);

    var purchaseButton = document.getElementById("purchaseButton");
    // purchaseButton.disabled = false;

    if (arrayPrice[0] > 0.0) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }

    var sum = 0;
    for (var i = 0; i < arrayPrice.length; i++) {
        sum += arrayPrice[i]
    }

    if(sum >= 200) {
        var submitButton = document.getElementById("submitButton");
        submitButton.disabled = false;
        var inputField1 = document.getElementById("inputField");
        inputField1.disabled = false;
    }

    var inputField1 = document.getElementById("inputField");
    globalInputValue1 = inputField1.value;
    inputField1.innerText = "";
    // console.log("HI--> ",globalInputValue1);

    let flag1 = 0;
    if(globalInputValue1 == 'SELL200' && sum >= 200 && flag1 == 0) {
        var discount = (sum * 0.2).toFixed(2);
        console.log(discount);
        var ultimatePrice = sum - discount; 
        flag1 = 1;
    }
    else {
        discount = 0.00
        ultimatePrice = sum;
    }
    createElement(itemName, sum, discount, ultimatePrice, flag);

}

function createElement(itemName, itemPrice, discount, ultimatePrice, flag) {
    if(flag != 0) {
        const calculationEntry = document.getElementById('selectedElements');
        const h1 = document.createElement('h1');
        const count = calculationEntry.childElementCount;
        h1.classList.add('text-xl');
        h1.classList.add('font-semibold');
        h1.classList.add('mb-1');
        h1.innerHTML = `${count + 1}. ${itemName}`;
        calculationEntry.appendChild(h1);

        const line = document.getElementById('line');
        line.classList.replace('hidden', 'block');
    }

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = itemPrice; 
    const discountPrice = document.getElementById('discount-price');
    discountPrice.innerText = discount; 
    const finalPrice = document.getElementById('final-price');
    finalPrice.innerText = ultimatePrice; 
}