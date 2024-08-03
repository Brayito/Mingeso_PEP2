import axios from "axios";

class VehicleService {

    obtenerVehiculos(){
        return axios.get(`http://localhost:8080/reparation/vehicles/`);
    }
    ingresarVehiculo(patente, marca, modelo, tipo_vehiculo, ano_fabricacion, tipo_motor, num_asientos, kilometraje){
        return axios.post("http://localhost:8080/reparation/vehicles/", patente, marca, modelo, tipo_vehiculo, ano_fabricacion, tipo_motor, num_asientos, kilometraje);
    }
}

export default new VehicleService();