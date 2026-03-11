function calculatorResult(){
    let total = 0;
    let n = parseInt(prompt("Enter number of subjects"));

    for(let i = 1; i <= n; i++)
    {
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        total = total + marks;
    }

    let average = total / n;
    let grade;
    let result;

    if(average >= 75)
    {
        grade = "A";
        result = "Pass";
    }
    else if(average >= 50)
    {
        grade = "B";
        result = "Pass";
    }
    else
    {
        grade = "C";
        result = "Fail";
    }

    document.getElementById("result").innerHTML="total marks"+total +"<br>" +"average"+average + "grade" + grade + "result" + result

//    console.log("Total Marks: " + total);
//    console.log("Average: " + average);
//    console.log("Grade: " + grade);
//    console.log("Result: " + result);
}
//
//calculatorresult();