
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// async function mostrarPagDescripcionProducto(params) {
const mostrarPagDescripcionProducto = async () => {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const productInfo = await res.json();
        console.log(productInfo);
        // document.write(`El producto seleccionado es ${productInfo.title}`)
        const container = document.getElementById("description");



    } catch (error) {
        console.log("Error: ", error);

    }
}

document.addEventListener("DOMContentLoaded", mostrarPagDescripcionProducto);

