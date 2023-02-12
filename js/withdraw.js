const withdrawButton = document.getElementById('withdrawBtn');
const withdraw = document.getElementById('withdraw');
const withdrawAmount = document.getElementById('withdrawAmount');

withdrawButton.addEventListener('click',function(){
    if(withdrawAmount.value > 0 && parseFloat(balance.innerText) >= withdrawAmount.value){
        // Add to withdrawn
        let oldwithdrawn = parseFloat(withdraw.innerText);
        let newWithdraw = parseFloat(withdrawAmount.value);

        let totalWithdrawn = oldwithdrawn + newWithdraw;
        withdraw.innerText = totalWithdrawn;
        withdrawAmount.value = '';
        // substract from balance 
        
            let oldbal = parseFloat(balance.innerText);
            let newbal = oldbal - newWithdraw;
            balance.innerText = newbal;
        

    }else{
        withdrawAmount.value = '';
        alert('Unable to process your request :)');
    }
})