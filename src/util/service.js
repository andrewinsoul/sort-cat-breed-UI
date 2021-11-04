import Axios from 'axios';

/**
 * @description - This class contains the Axios implementation of http methods
 */
class Services {
  /**
   * @description - custom GET function
   * @param {String} url - the url
   * @returns {Promise} - Axios GET
   */
  get = (url) => Axios.get(url);
}

export default new Services();
