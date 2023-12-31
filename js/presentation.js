const params = getParameters()

fetch(`https://ads-grades-api.onrender.com/grade/${params.id}`, {
    method: "GET"
})
    .then(res => res.json())
    .then(res => {
        document.querySelector("#teacher_name").innerText = res.Teacher.name
        document.querySelector("div#teacher_information img").src = res.description.img
        document.querySelector("#grade_title").innerText = res.description.name
        document.querySelector("div#curriculum a").href = res.description.curriculum
        timedWriting(res.description.description, document.querySelector("p#description_content"), 1)
    })