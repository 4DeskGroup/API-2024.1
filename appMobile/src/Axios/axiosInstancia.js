import  Axios  from "axios";

export default Axios.create({baseURL:"http://192.168.15.24:3001", withCredentials: false, timeout:20000})