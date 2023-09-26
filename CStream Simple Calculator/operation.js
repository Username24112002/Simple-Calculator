function add()
{
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    var res = Number(num1)+Number(num2);
    document.getElementById("result").innerText=res;
}
function sub()
{
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    var res = Number(num1)-Number(num2);
    document.getElementById("result").innerText=res;
}
function mul()
{
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    var res = Number(num1)*Number(num2);
    document.getElementById("result").innerText=res;
}
function div()
{
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    if(Number(num2)==0)
    {
        alert("Division can't done by a null value");
    }
    else
    {
        var res = Number(num1)/Number(num2);
        document.getElementById("result").innerText=res;
    }
}
function clr()
{
    document.getElementById("result").innerText=" ";
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}