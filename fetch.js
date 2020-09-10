function main()
{
    console.log("Hello !");
    fetch("https://artnavsegda.herokuapp.com/q?ask=cat")
    .then(response => {
        response.json());
    }
    .then(variants => {
        console.log(variants.toString());
    })
}