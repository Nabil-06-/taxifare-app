import http from '../common/http-common';

const getAll = () => {
    return http.get('/rides');
};

const get = id => {
    return http.get(`/rides/${id}`);
};

const getPrice = id => {
    return http.get(`/rides/${id}/price`);
};

const create = data => {
    return http.post('/rides', data);
};

const update = (id, data) => {
    return http.put(`/rides/${id}`, data);
};

const remove = id => {
    return http.delete(`/rides/${id}`);
};

export default {
    getAll,
    get,
    getPrice,
    create,
    update,
    remove
};
