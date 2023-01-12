function calculator(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    //document.getElementById("result").innerHTML=" + : " +sum;
    alert("+ = "+sum);
};
function calculator2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    //document.getElementById("result2").innerHTML=" - : " +sum;
    alert("- = "+sum);
};
function calculator3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    //document.getElementById("result3").innerHTML=" * : " +sum;
    alert("* = "+sum);
};
function calculator4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    //document.getElementById("result4").innerHTML=" / : " +sum;
    alert("/ = "+sum);
};
function myalert(){
    alert("Hello Prayut")
}

const img = document.createElement("img");
img.src = "1.jpg"
img.style.width="500px"
document.getElementById("myDiv").appendChild(img);

function bmi(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var h = parseInt(num2)/100.00;
    var sum = parseInt(num1)/ (h*h);
    //document.getElementById("result4").innerHTML=" / : " +sum;
    alert("bmi = "+sum);
};