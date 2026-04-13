fetch("http://localhost:5000/report")
.then(res => res.json())
.then(data => {

    const list = document.getElementById("list");

    for (let site in data) {

        const li = document.createElement("li");

        li.textContent = site + " : " + data[site] + " seconds";

        list.appendChild(li);
    }

});