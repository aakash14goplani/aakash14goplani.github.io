function calculateDate(jobStartDate){
    var today = new Date(); 
    var totalMonths = today.getMonth() - jobStartDate.getMonth() + (12 * (today.getFullYear() - jobStartDate.getFullYear()));
    var totalYears = today.getFullYear() - jobStartDate.getFullYear();
    var partialMonths = today.getMonth() - jobStartDate.getMonth();
    if (partialMonths < 0) {
        totalYears--;
        partialMonths = partialMonths + 12;
    }
    return totalYears+"&"+partialMonths;
}
var result = calculateDate(new Date(2015,09,07));
var year = result.split("&")[0];
var month = result.split("&")[1];
var totalYearsMonthhs = " <span></span> (" + year + " years, " + month + " months)";
var totalMonths = "(" + month + " months)";
/*display exp-years on accenture*/
document.getElementById("insert-workexp-date").innerHTML = totalYearsMonthhs;
/*display exp-years on summary*/
document.getElementById("years-of-exp").innerHTML = year + "." + month;
/*display current year on footer*/
document.getElementById("display-current-year").innerHTML = new Date().getFullYear();  