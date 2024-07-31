import axios from "axios";

const API_URL = "http://localhost:8080/reparation/calcular";

class PagoService {
    getHistorial() {
        return axios.get(API_URL);
    }
}

export default new PagoService();