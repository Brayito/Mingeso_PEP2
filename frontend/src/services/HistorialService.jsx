import axios from "axios";

class HistorialService {

    obtenerHistorial(){
        return axios.get(`http://localhost:8080/reparation/`);
    }

    obtenerHistorialByPatente(patente) {
        console.log("Solicitando historial por patente:", patente);
        return axios.get(`http://localhost:8080/reparation/vehiclerepairsByVehicle/${patente}`)
            .then(response => {
                console.log("Historial por patente recibido:", response.data);
                return response;
            })
            .catch(error => {
                console.error("Error al obtener historial por patente:", error);
                throw error;
            });
    }

    actualizarHistorial() {
        console.log("Actualizando historial...");
        return axios.put("http://localhost:8080/reparation/historial")
            .then(response => {
                console.log("Historial actualizado:", response.data);
                return response;
            })
            .catch(error => {
                console.error("Error al actualizar historial:", error);
                throw error;
            });
    }

    ingresarVehicleRepair(p){
        return axios.post("http://localhost:8080/reparation/",);
    }
}

export default new HistorialService();