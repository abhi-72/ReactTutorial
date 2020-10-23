import http from "../http-common";

class JobDataService {
    getAll() {
      return http.get("/jobs");
    }
  }
  
  export default new JobDataService();