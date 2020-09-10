function main()
{
    console.log("Hello !");
    fetch("https://artnavsegda.herokuapp.com/q?ask=cat")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json());
    }
    .then(variants => {
        console.log(variants.toString());
    })
}