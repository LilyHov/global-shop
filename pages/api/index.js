import getConfig from 'next/config';
import axios from 'axios';

class Api {
  constructor(resource = '') {
    const {
      publicRuntimeConfig: { apiUrl },
    } = getConfig();
    this.url = `${apiUrl}${resource}`;
  }

  list = (params) => {
    return this.buildQuery('get', params);
  };

  get = (id, params = {}) => {
    return this.buildQuery('get', params, id);
  };

  create = (params) => {
    return this.buildQuery('post', params);
  };

  put = (id, params) => {
    return this.buildQuery('put', params, id);
  };

  destroy = (id) => {
    return this.buildQuery('delete', {}, id);
  };

  buildQuery = (method, params = {}, prefix) => {
    return axios({
      url: this.getFullUrl(prefix),
      method,
      data: params.data,
      params: params.params,
      ...(params || {}),
      headers: {
        'Content-Type': 'application/json',
        ...(params?.headers || {}),
      },
    });
  };

  getFullUrl = (prefix) => {
    return `${this.url}${!this.noUseSlash ? '/' : '' }${prefix ? `${prefix}` : ''}`;
  };
}

export default Api;
