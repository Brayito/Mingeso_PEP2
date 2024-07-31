import axios from "axios";

class VehicleService {

    obtenerVehiculos(){
        return axios.get(`http://localhost:8080/vehicles/`);
    }
    ingresarVehiculo(marca, modelo, tipo_vehiculo, ano_fabricacion, tipo_motor, num_asientos, kilometraje){
        return axios.post(`http://localhost:8080/vehicles/`, marca, modelo, tipo_vehiculo, ano_fabricacion, tipo_motor, num_asientos, kilometraje);
    }
}

export default new VehicleService();