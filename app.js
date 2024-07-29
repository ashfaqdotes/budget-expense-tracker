// Input:
let budgetData = document.getElementById("budget");
let amountData = document.getElementById("amount");
let tittleData = document.getElementById("tittle");

// Table
let tableData = document.getElementById("expense-table-body");

// Display:
let displayBudget = document.getElementById("displaybudget");
let displayExpense = document.getElementById("displayexpense");
let displayBalance = document.getElementById("displaybalance");

// Expenses Calculate:


function setBudget() {
  if (budgetData.value >= 1 && budgetData.value != '') {
    displayBudget.innerText = '';
    displayBudget.innerText += budgetData.value;

  } else {
    alert("Please Enter Valid Budget Amount");
  }
}

function setExpense() {
  counter = 0;
    if (amountData.value >= 1 && amountData.value != '') {
      tableData.innerHTML += `
      <tr id="(${counter})">
        <td>${tittleData.value}</td>
        <td>${amountData.value}</td>
        <td id="(${counter})"><button class="btn btn-danger" onclick="removeExpense(this)"><i class="bi bi-trash3-fill"></i></button></td>
      </tr>`;
      counter += 1;
      amountData.value = '';
      tittleData.value = '';
  }
  else {
    alert("Please Enter Valid Tittle and Amount");
    }
  }

function removeExpense(item) {
  console.log('Remove ');
  item.parentElement.parentElement.remove();
}