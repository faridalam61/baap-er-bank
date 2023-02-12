const depositButton = document.getElementById('depositBtn');
const deposit = document.getElementById('deposit');
const balance = document.getElementById('balance');
const amountInput = document.getElementById('amountInput');

depositButton.addEventListener('click',function(){
    if(amountInput.value > 0){
        // Add to deposit
        let oldDeposit = parseFloat(deposit.innerText);
        let newAmount = parseFloat(amountInput.value);
        let totalDeposit = oldDeposit + newAmount;
        deposit.innerText = totalDeposit;
        amountInput.value = '';

        // Add to balance
        let oldBalance = parseFloat(balance.innerText);
        let newBalance = oldBalance + newAmount;
        balance.innerText = newBalance;


    }else{
        alert('Enter a valid amount');
    }
})