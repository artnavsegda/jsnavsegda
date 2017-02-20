var xhttp = new XMLHttpRequest();

console.log("hello javascript");

function dropdata()
{
        xhttp.open("GET", "getdata", false);
        xhttp.send("hello");
        document.getElementById("demo").innerHTML = xhttp.responseText;
}
