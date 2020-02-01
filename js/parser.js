function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4 && rawFile.status == "200") callback(rawFile.responseText);
    }
    rawFile.send(null);
}
readTextFile("projects/list.json", r => {
    $('.second-slide .container').append(`<div class='card'><img src='img/placeholder.svg' alt='placeholder' /><h3>${r[0].title}</h3><p>${r[0].desc}</p></div>`)
    console.log(r)
})