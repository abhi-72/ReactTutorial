import http from "../http-common";

class PortalDataService {
    getAll() {
      return http.get("/portals");
    }
  
    get(id) {
      return http.get(`/portals/${id}`);
    }
  
    create(data) {
      return http.post("/portals", data);
    }
  
    update(id, data) {
      return http.put(`/portals/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/portals/${id}`);
    }
  
    deleteAll() {
      return http.delete(`/portals`);
    }
  }
  
  export default new PortalDataService();