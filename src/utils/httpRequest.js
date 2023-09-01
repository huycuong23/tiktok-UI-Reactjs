import axios from "axios";
import PropTypes from 'prop-types';
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

export const get = async (path, option= {}) => {
    const response = await httpRequest.get(path, option);
    return response.data;
}
get.propTypes = {
    path: PropTypes.string,
    option: PropTypes.object
}
export default httpRequest