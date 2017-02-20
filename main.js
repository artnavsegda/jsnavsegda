var xhttp = new XMLHttpRequest();

console.log("hello javascript");

function dropdata()
{
        xhttp.open("GET", "http://192.168.1.111:1100/getdata", false);
        xhttp.send("hello");
        document.getElementById("demo").innerHTML = xhttp.responseText;
}
