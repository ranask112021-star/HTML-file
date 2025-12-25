const container = document.getElementById('tables');

for (let i = 1; i <= 10; i++) {
    // Create table element
    const table = document.createElement('table');

    // Table header
    const header = document.createElement('tr');
    const th = document.createElement('th');
    th.colSpan = 2;
    th.textContent = `Table of ${i}`;
    header.appendChild(th);
    table.appendChild(header);

    // Table rows
    for (let j = 1; j <= 10; j++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = `${i} x ${j}`;
        cell2.textContent = i * j;

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }

    // Append table to container
    container.appendChild(table);
}
