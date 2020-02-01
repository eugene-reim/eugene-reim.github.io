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
    console.log(r)
})