function calLoan(){
    loanAmountValue = document.getElementById("loan-amt").value 
       
    interestRateValue = document.getElementById("loan-int").value

    monthlyPayValue = document.getElementById("loan-months").value

    interest = (loanAmountValue *(interestRateValue * 0.01)) / monthlyPayValue
    
    monthlyPayment = (loanAmountValue / monthlyPayValue + interest).toFixed(2)

    document.getElementById("payment").innerHTML = `Monthly Payment:${monthlyPayment}`

}