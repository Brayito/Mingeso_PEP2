import axios from "axios";

class RepairService {

    obtenerReparaciones() {
        return axios.get("http://localhost:8080/reparation/repairs/");
    }

    ingresarReparacion(type, fecha, hora, patente) {
        return axios.post("http://localhost:8080/reparation/repairs/", type, fecha, hora, patente)
            .catch(error => {
                console.error("Error al enviar la reparación:", error.response ? error.response.data : error.message);
                throw error;
            });
    }
};

export default new RepairService;
