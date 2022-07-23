async function loadIntoTable(url, table) {
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    const response = await fetch(url);
    const { headers, rows } = await response.json();

    //clear the table to refresh the data

    tableHead.innerHTML = "<tr></tr>"
    tableBody.innerHTML = "<td></td>"

    //populate the headers
    for (const headerText of headers) {
        const headerElement = documenet.createElement("th");

        headerElement.textContent = headerText;
        tableHead.querySelector("tr").appendChild(headerElement);

    }

    //populate the rows
    for (const row of rows) {
        const rowElement = documenet.createElement("tr");
        for (const cellText of row) {
            const cellElement = documenet.createElement("td");
            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
        }
        tableBody.appendChild(rowElement);
        console.log(rowElement)
    }
}

loadIntoTable("./data.json", document.querySelector("table"));
