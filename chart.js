var xhttp = new XMLHttpRequest();

function dropdata()
{
        xhttp.open("GET", "http://192.168.1.151/getx16", false);
        xhttp.send();
        line1.append(new Date().getTime(), xhttp.responseText);

        xhttp.open("GET", "http://192.168.1.160/getx16", false);
        xhttp.send();
        line2.append(new Date().getTime(), xhttp.responseText);
}

function dropdata3()
{
        xhttp.open("GET", "http://192.168.1.151/getrun", false);
        xhttp.send();
        var aravaone = JSON.parse(xhttp.responseText);
        for (i = 0; i < 100; i++)
        {
                line1.append(new Date().getTime()-(i*1000), aravaone[i]);
        }

        xhttp.open("GET", "http://192.168.1.160/getrun", false);
        xhttp.send();
        var aravatwo = JSON.parse(xhttp.responseText);
        for (i = 0; i < 100; i++)
        {
                line2.append(new Date().getTime()-(i*1000), aravatwo[i]);
        }
}

function createTimeline()
{
        var smoothie = new SmoothieChart({millisPerPixel:100,maxValue:7000,minValue:6000,grid:{millisPerLine:5000,verticalSections:10,strokeStyle:'#202020',sharpLines:true},interpolation:'linear'});
        smoothie.addTimeSeries(line2,{strokeStyle:'rgb(200,0,0)'});
        smoothie.addTimeSeries(line1,{strokeStyle:'rgb(0,200,0)'});
        smoothie.streamTo(document.getElementById("mycanvas"),1000);
        dropdata3();
        setInterval(dropdata, 501);
}
