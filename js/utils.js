async function timedWriting(sentence, element, time) {
    let i = 0;
    sentence = sentence.split("")
    while (i < sentence.length) {
        await waitForMs(time);
        element.innerHTML += sentence[i];
        console.log(sentence[i])
        i++
    }
    return;
}


function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}