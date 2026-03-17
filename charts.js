let servicesChart;

/**
 * Desenha o gráfico circular de serviços detetados
 */
function drawServicesChart(services) {
    const canvas = document.getElementById("servicesChart");
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const labels = Object.keys(services);
    const values = Object.values(services);

    if (servicesChart) {
        servicesChart.destroy();
    }

    servicesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    '#2ecc71', // Verde NetScan
                    '#3498db', // Azul
                    '#e74c3c', // Vermelho
                    '#f1c40f', // Amarelo
                    '#9b59b6', // Roxo
                    '#1abc9c'  // Turquesa
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#ffffff',
                        font: { family: "'Montserrat', sans-serif", size: 11, weight: '600' }
                    }
                }
            },
            cutout: '75%'
        }
    });
}

/**
 * Exporta os dados atuais da tabela para CSV
 */
function exportCSV() {
    const table = document.getElementById("scanTable");
    if (!table) return;

    let csv = [];
    const rows = table.querySelectorAll("tr");
    
    for (let i = 0; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll("td, th");
        for (let j = 0; j < cols.length; j++) {
            let text = cols[j].innerText.replace(/"/g, '""');
            row.push('"' + text + '"');
        }
        csv.push(row.join(","));
    }

    const csvFile = new Blob(["\uFEFF" + csv.join("\n")], { type: "text/csv;charset=utf-8;" });
    const downloadLink = document.createElement("a");
    downloadLink.download = `netscan_report_${new Date().getTime()}.csv`;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}