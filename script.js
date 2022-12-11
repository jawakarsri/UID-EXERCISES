let loanAmount = document.getElementById("amount");
let interestRate=document.getElementById("interest");
let loanDuration = document.getElementById("loanTenure");
let submit = document.getElementById("calculate");

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    calculateEMI();
})

function calculateEMI(){

    let isYear = document.getElementById("year").checked;
    let isMonth = document.getElementById("month").checked;
    let noOfMonths=0;
    if(isYear=="" && isMonth==""){
        alert("Please select loan tenure type-> Month or year");
    }else{
        if(isYear==true){
            noOfMonths=loanDuration.value * 12 ;
        }else{
            noOfMonths=loanDuration.value;
        }
        let r = parseFloat(interestRate.value)/12/100;
        let P = loanAmount.value;
        let n = noOfMonths;
        
        let EMI = (P*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
        let totalInterest =(EMI * n) - P;
        let totalPayment  = totalInterest + parseFloat(P);
        document.getElementById("emi").innerText = "₹" + Math.round(EMI);
        document.getElementById("totalIntrest").innerText="₹" + Math.round(totalInterest);
        document.getElementById("totalPayment").innerText="₹" + Math.round(totalPayment) ;
    }
}