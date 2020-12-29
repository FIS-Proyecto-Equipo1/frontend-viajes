
class ViajesApi{
    static API_BASE_URL = "/api/v1";

    static requestHeaders(){
        return{}
    }

    static id_cliente = "234";

    static getAllTravels() {
        const headers = this.requestHeaders();
        const request = new Request
            (ViajesApi.API_BASE_URL 
            + "/travels/find?id_cliente=" 
            +this.id_cliente+"&estado=Finalizado",
            {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static getOnGoingTravels() {
        const headers = this.requestHeaders();
        const request = new Request(ViajesApi.API_BASE_URL + "/travels/find?id_cliente=234&estado=EN%20CURSO", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });

    }   
}

export default ViajesApi;