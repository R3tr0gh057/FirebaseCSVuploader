export function processCSV(file, callback) {
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const rows = text.split('\n').slice(1); // Skip the header row

        rows.forEach(row => {
            const columns = row.split(',');

            if (columns.length === 3) {
                const rollNumber = columns[0].trim();
                const name = columns[1].trim();
                const faction = columns[2].trim();

                if (rollNumber && name && faction) {
                    callback(faction, rollNumber, name);
                }
            }
        });
    };

    reader.readAsText(file);
}
