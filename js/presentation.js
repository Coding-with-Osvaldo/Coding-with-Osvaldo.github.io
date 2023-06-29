fetch("https://ads-grades-api.onrender.com/grade/13", {
    method: "GET"
})
    .then(res => res.json())
    .then(res => {
        document.querySelector("#teacher_name").innerText = res.Teacher.name
        document.querySelector("div#teacher_information img").src = res.description.img
        document.querySelector("#grade_title").innerText = res.description.name
        timedWriting(res.description.description, document.querySelector("p#description_content"), 1)
    })