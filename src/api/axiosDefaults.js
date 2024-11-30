import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-vretinger-341794286bbb.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;