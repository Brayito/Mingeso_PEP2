import axios from "axios";

class VehicleService {

    obtenerVehiculos(){
        return axios.get(`http://localhost:8080/reparation/vehicles/`);
    }

    actualizarVehiculos(patente, marca, modelo, tipo_vehiculo, ano_fabricacion, tipo_motor, num_asientos, kilometraje, estado){
        return axios.put(`http://localhost:8080/reparation/vehicles/actualizarEstado/` + patente, patente, marca, modelo, tipo_vehiculo, ano_fabricacion, tipo_motor, num_asientos, kilometraje, estado);
    }
    ingresarVehiculo(patente, marca, modelo, tipo_vehiculo, ano_fabricacion, tipo_motor, num_asientos, kilometraje, estado){
        return axios.post("http://localhost:8080/reparation/vehicles/", patente, marca, modelo, tipo_vehiculo, ano_fabricacion, tipo_motor, num_asientos, kilometraje, estado);
    }
}

export default new VehicleService();