// Export functionality
export function exportTable() {
    const table = document.getElementById("productList");

    if (!table) {
        alert("No hay una tabla para exportar.");
        return;
    }

    const newWindow = window.open("", "", "width=800,height=600");

    newWindow.document.write(`
        <html>
            <head>
                <title>Lista de Productos</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid black; padding: 8px; text-align: center; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <h2>Lista de Productos</h2>
                ${table.outerHTML}
                <script>
                    window.onload = function() {
                        window.print();
                        window.onafterprint = function() { window.close(); }
                    };
                </script>
            </body>
        </html>
    `);

    newWindow.document.close();
}
