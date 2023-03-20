let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput;

//Function using conditional statements to determine grade

const getGrade = function(inputGrade){
    if(inputGrade>79){
        return "A";
    }else if(inputGrade<=79 && inputGrade>=60){
        return "B";
    }else if(inputGrade<=59 && inputGrade>=49){
        return "C";
    }else if(inputGrade<49 && inputGrade>=40){
        return "D";
    }else if(inputGrade<40){
        return "E";
    }else {
        //Declining of any data that is not a number
        return "Invalid input";
    }
};

finalOutput= getGrade(inputGrade);
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput;
    //value of the speed limit
    const speedLimit = 70;
    //function containing if else statements to determine output depending on speed
    const getPoints = function(inputSpeed){
        if(inputSpeed>70){
            //Determines whether license is to be suspended
            const pointsEqn =  (inputSpeed - speedLimit)/5;
            if(pointsEqn>12){
                return "License suspended";
            }else {
                return "Points =" +pointsEqn;
            }
            //For speed below the speed limit
            } else if(inputSpeed<=70) {
                return "Ok";
            }else {
                //Declining of any data that is not a number
                return "Input is invalid";
            };
    }
    
finalOutput=getPoints(inputSpeed);
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        let benefitsAmount=parseInt(document.getElementById("benefits-amount").value)
        console.log(inputSalary, benefitsAmount);

let finalOutput;

//Equation to obtain gross salary
let gross = inputSalary + benefitsAmount;

function grossAmount(){
    return "Gross salary =" +gross;
}

//console.log(grossAmount());

//Calculation for tax deductions
function taxCalculate(gross){
    let taxDeduction;
    if(gross>32,333){
         taxDeduction = gross * .30;
    }else if(gross>24000){
         taxDeduction = gross * .25;
    }else if(gross<=24000){
         taxDeduction = gross * .10;
    }else {
        //Declining of any data that is not a number
        return "Invalid input";
    }
    return taxDeduction;
}

let tax = taxCalculate(gross);
    

function taxAmount(){
    return "payee =" +tax;
}

//console.log(taxAmount());

//Calculation for nhif deductions
function nhifDeductionFn(gross){
    let nhifDeduction;
    if(gross>100000){
        nhifDeduction = 1700;
    }else if (gross<100000 && gross>50000){
        nhifDeduction = 1500;
    }else if (gross<50000 && gross>25000){
        nhifDeduction = 1250;
    }else if (gross<25000 && gross>12000){
        nhifDeduction = 650;
    }else if (gross<12000 && gross>6000){
        nhifDeduction = 350;
    }else {
        nhifDeduction = 150;
    }
    return nhifDeduction;
}

let nhif = nhifDeductionFn(gross);

function nhifAmount(){
    return "NHIF deduction =" +nhif;
}
//console.log(nhifAmount());

//Calculation for nssf deduction
function nssfDeductionFN(gross){
    let nssfDeduction = gross * 0.06
    return nssfDeduction;
} 

let nssf = nssfDeductionFN(gross);

function nssfAmount(){
    return "NSSF deduction =" +nssf;
}
//console.log(nssfAmount());

//Calculation for net salary
function netCalculate (){
    let netEqn = gross - (tax + nhif + nssf);
    return netEqn;
}

let net = netCalculate();

function netAmount(){
    return "Net salary =" +net;
}

//console.log(netAmount());

function displayOutput(){
    return grossAmount(), taxAmount(), nhifAmount(), nssfAmount(), netAmount();
};

finalOutput= displayOutput();
document.getElementById('salary-id').append(finalOutput)
        
})