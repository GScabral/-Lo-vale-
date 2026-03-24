async function obtenerDolar() {

    try {
        let res = await fetch("https://dolarapi.com/v1/dolares/blue");
        let data = await res.json();

        document.getElementById("dolarBox").innerHTML = `
<h3>💵 Dólar Blue</h3>
<p>Compra: $${data.compra}</p>
<p>Venta: $${data.venta}</p>
<p style="font-size:12px;">Actualizado: ${new Date(data.fechaActualizacion).toLocaleString()}</p>
`;
    } catch (e) {
        document.getElementById("dolarBox").innerHTML = "Error cargando dólar";
    }

}

obtenerDolar();

/* refresca cada 60s */
setInterval(obtenerDolar, 60000);