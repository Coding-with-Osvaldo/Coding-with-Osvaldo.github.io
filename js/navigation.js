function reloadGrades(id) {
    const grade = document.querySelector('.disciplinas-box');
    grade.innerHTML = '';
    fetch(`https://ads-grades-api.onrender.com/period/${id}`, {
        method: "GET"
    })
        .then(res => res.json())
        .then(res => {
            res.forEach((item) => {
                const disciplina_container = document.createElement('div');
                const balls_container = document.createElement('div');
                const green_ball = document.createElement('div');
                const red_ball = document.createElement('div');
                const yellow_ball = document.createElement('div');
                const name_disciplina = document.createElement('div');
                const titulos = document.createElement('h1');

                disciplina_container.classList.add('disciplina-container');
                balls_container.classList.add('balls-container');
                name_disciplina.classList.add('name-disciplina');

                green_ball.id = 'green';
                red_ball.id = 'red';
                yellow_ball.id = 'yellow';
                titulos.id = 'titulos';
                titulos.innerText = item.description.name;

                console.log(res)

                disciplina_container.addEventListener("click", () => {
                    window.location.replace(`../html/presentation.html?id=${item.id}`);
                })

                balls_container.appendChild(green_ball);
                balls_container.appendChild(yellow_ball);
                balls_container.appendChild(red_ball);

                name_disciplina.appendChild(titulos);

                disciplina_container.appendChild(balls_container);
                disciplina_container.appendChild(name_disciplina);

                grade.appendChild(disciplina_container);
            })
        })
}

function addLinks() {
    const periodsBox = document.querySelector(".all-period")
    periodsBox.innerHTML = ""
    const periods = [1, 2, 3, 4, 5, 6]
    periods.forEach(item => {
        const period = document.createElement("h1")
        period.classList.add("period")
        period.innerText = `${item}º Periodo`
        period.addEventListener("click", () => {
            reloadGrades(item)
        })

        periodsBox.appendChild(period)
    })
}

addLinks()
