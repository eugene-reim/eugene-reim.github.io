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
        JSON.parse(r).map(x => {
            $('.second-slide .container').append(`<div class='card'><img src='${x.img}' alt='placeholder' /><h3>${x.title}</h3> <a href="${x.link}" title="See Repo"><img class="btn mx-auto my-auto" alt="See Repo" src="img/ic-eye.svg"></a><p>${x.desc}</p></div>`)
        })
    })
    /*
     <div class="card">
        <img src="img/placeholder.svg" alt="placeholder" />
        <h3>No title</h3>
        <a href="https://github.com" title="See Repo"><img class="btn mx-auto my-auto" href="github.com" alt="See Repo" src="img/ic-eye.svg"></a>
        <p>In development</p>
    </div>
    */