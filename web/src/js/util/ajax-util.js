//import apiStatusActions from '../actions/api-status-actions';

class AjaxUtil {

  constructor() {
    this.host = null;
  }

  setUrl(host) {
    this.host = host;
  }

  getUrl(url) {
    return `http://${this.host}/${url}`;
  }

  get(options) {
    return this.makeRequest(options.url, 'GET', null, null, options.onSuccess);
  }

  post(options) {
    return this.makeRequest(options.url, 'POST', 'application/json', JSON.stringify(options.body), options.onSuccess);
  }

  upload(options) {
    let formData = new FormData();
    formData.append('data_file', options.file);

    return this.makeRequest(options.url, 'POST', null, formData, options.onSuccess);
  }

  put(options) {
    return this.makeRequest(options.url, 'PUT', 'application/json', JSON.stringify(options.body), options.onSuccess);
  }

  delete(options) {
    return this.makeRequest(options.url, 'DELETE', null, null, options.onSuccess);
  }

  makeRequest(url, method, contentType, body, onSuccessCallback) {
    let that = this;
    return this.send(url, method, contentType, body).then(response => {
      if (onSuccessCallback) {
        onSuccessCallback(response);
      }
    }).catch(function(e) {
      //apiStatusActions.storeApiError(e.message);
      console.log(`Api Error: ${method} ${that.getUrl(url)}, $e.message`);
    });
  }

  send(url, method, contentType, body) {
    let that = this;
    return new Promise(function(resolve, reject) {
      console.log(`AjaxUtil ${method}: ${that.getUrl(url)}`);
      var request = new XMLHttpRequest();

      request.open(method, that.getUrl(url));
      if (contentType) {
        request.setRequestHeader('Content-type', contentType);
      }

      request.onload = function() {
        if (request.status === 200 || request.status === 201 || request.status === 204) {
          let response;
          if (request.response) {
            response = JSON.parse(request.response);
          }
          resolve(response);
        }
        else if (request.status === 422) {
          reject(Error(JSON.parse(request.response).message));
        } else {
          reject(Error("Unknown Error"));
        }
      };

      request.onerror = function() {
        reject(Error("Network Error"));
      };

      request.send(body);
    });
  }
}

export default new AjaxUtil();
