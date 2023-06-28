fetch("https://ads-grades-api.onrender.com/grade/13", {
    method: "GET"
})
    .then(res => res.json())
    .then(res => {
        timedWriting(res.description.description, document.querySelector("p#description_content"), 1)
    })