let tipAmountPerPerson = document.getElementById('amount-placeholder1');
let totalPerPerson = document.getElementById('amount-placeholder2');
let errorMessage = document.getElementById('num-custom-error')

let billInput = document.getElementById('bill-input');
let billAmount;

billInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    billAmount = parseFloat(billInput.value) || 0;
    console.log(billAmount);
  }
});

const buttons = document.querySelectorAll('.tip-perc-choice');
let tipAmount = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const tipText = button.textContent;
    tipAmount = parseFloat(tipText);
  });
});

let numberOfCustomersInput = document.getElementById('num-custom-input');
let numberOfCustomers;

numberOfCustomersInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    numberOfCustomers = parseFloat(numberOfCustomersInput.value) || 0;

    if (billAmount && tipAmount && numberOfCustomers) {
      const billPerPerson = billAmount / numberOfCustomers;
      const tipPerPerson = billPerPerson * (tipAmount / 100);
      const total = billPerPerson + tipPerPerson;

      tipAmountPerPerson.textContent = `$${tipPerPerson.toFixed(2)}`;
      totalPerPerson.textContent = `$${total.toFixed(2)}`;
    } else {
    }
  }
});
