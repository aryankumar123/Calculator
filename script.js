
function display(val)
{
 document.getElementById("scr").value += val;
}

function clean()
{
document.getElementById("scr").value = "";
}

function solve()
{
    var inpt = document.getElementById("scr").value;
    var result = eval(inpt);
    document.getElementById("scr").value = result;
}
function back() {
    var value = document.getElementById("scr").value;
    document.getElementById("scr").value = value.substr(0, value.length - 1);
}