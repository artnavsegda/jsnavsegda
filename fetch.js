function main()
{
    console.log("Hello !")
    fetch("https://artnavsegda.herokuapp.com/q?ask=cat")
    .then(response => {
        if (!response.ok)
            throw new Error("connect failure")
        return response.json()
    })
    .then(variants => {
        console.log(variants.toString())
    })
    .catch(error => {
        console.error('error:', error);
    })
}