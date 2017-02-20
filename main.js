var xhttp = new XMLHttpRequest();

console.log("hello javascript");

function dropdata()
{
        xhttp.open("GET", "http://localhost:1100/getdata", false);
        xhttp.send("hello");
        document.getElementById("demo").innerHTML = xhttp.responseText;
}
