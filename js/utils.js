async function timedWriting(sentence, element, time) {
    let i = 0;
    sentence = sentence.split("")
    while (i < sentence.length) {
        await wait(time);
        if (sentence[i] == "\n") {
            i++
            element.innerHTML += "<br/><br/>"
        }
        else {
            element.innerHTML += sentence[i];
            i++
        }
    }
    return;
}


function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

function getParameters() {
    let params = window.location.search.substring(1).split("&")
    let obj = {}
    let param
    let i

    for (i in params) {
        if (params[i] === "") continue;

        param = params[i].split("=");
        obj[decodeURIComponent(param[0])] = decodeURIComponent(param[1]);
    }

    return obj;
}
