let uri="../db.json"
fetch(uri)
    .then( response => response.json())
    .then( data => showData(data))
    .catch( error => console.log(error))

const showData = (data) => {
    let container = document.getElementById("container_card")
    for (let i = 0; i < data.actividades_destacadas.length; i++) {
        let actividad = data.actividades_destacadas[i];
        container.innerHTML += `
            <li key=${data.actividades_destacadas[0]}>
                <div class="card">
                    <img src="${actividad.fs_path}" alt=${actividad.title}>
                    <h4>${actividad.title}</h4>
                </div>
            </li>
        `;
    }
}
