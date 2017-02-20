var xhttp = new XMLHttpRequest();
var line1 = new TimeSeries();
var line2 = new TimeSeries();
var line3 = new TimeSeries();
var line4 = new TimeSeries();

function dropdata()
{
        xhttp.open("GET", "http://192.168.1.151/getx16", false);
        xhttp.send();
        line1.append(new Date().getTime(), xhttp.responseText);

        xhttp.open("GET", "http://192.168.1.160/getx16", false);
        xhttp.send();
        line2.append(new Date().getTime(), xhttp.responseText);
}

function dropdata2()
{
        xhttp.open("GET", "http://192.168.1.151/getrawrun", false);
        xhttp.send();
        var aravatres = JSON.parse(xhttp.responseText);
        for (i = 0; i < 10; i++)
        {
                line3.append(new Date().getTime()-(i*100), aravatres[i]);
        }

        xhttp.open("GET", "http://192.168.1.160/getrawrun", false);
        xhttp.send();
        var aravafour = JSON.parse(xhttp.responseText);
        for (i = 0; i < 10; i++)
        {
                line4.append(new Date().getTime()-(i*100), aravafour[i]);
        }
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
        var smoothie = new SmoothieChart({millisPerPixel:100,maxValue:6500,minValue:6000,grid:{millisPerLine:5000,verticalSections:10,strokeStyle:'#202020',sharpLines:true},interpolation:'linear'});
        smoothie.addTimeSeries(line4,{strokeStyle:'rgb(150,0,150)'});
        smoothie.addTimeSeries(line3,{strokeStyle:'rgb(150,0,0)'});
        smoothie.addTimeSeries(line2,{strokeStyle:'rgb(255,255,0)',lineWidth:2});
        smoothie.addTimeSeries(line1,{strokeStyle:'rgb(0,255,0)',lineWidth:2});
        smoothie.streamTo(document.getElementById("mycanvas"),1000);
        dropdata3();
        setInterval(dropdata, 501);
        setInterval(dropdata2, 1000);
}
