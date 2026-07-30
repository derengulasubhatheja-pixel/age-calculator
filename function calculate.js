function calculateAge(){

    let dob=document.getElementById("dob").value;

    if(dob==""){
        alert("Please select your Date of Birth");
        return;
    }

    let birthDate=new Date(dob);
    let today=new Date();

    let years=today.getFullYear()-birthDate.getFullYear();
    let months=today.getMonth()-birthDate.getMonth();
    let days=today.getDate()-birthDate.getDate();

    if(days<0){
        months--;
        let previousMonth=new Date(today.getFullYear(),today.getMonth(),0);
        days+=previousMonth.getDate();
    }

    if(months<0){
        years--;
        months+=12;
    }

    document.getElementById("result").innerHTML=
    "🎉 Your Age is <br><br>" +
    years + " Years " +
    months + " Months " +
    days + " Days";
}