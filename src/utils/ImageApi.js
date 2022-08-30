class ImageApi {
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getPictures = (page = 1, limit = 10) => {
    return fetch(`https://picsum.photos/v2/list?page=${page};limit=${limit}`, {
      headers: new Headers({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'application/json',
        'Content-Type': 'text/html',
      }),
    }).then((response) => {
      return this._checkResponse(response);
    });
  };

  getPictureInfo = (id = 0) => {
    return fetch(`https://picsum.photos/id/${id}/info`).then((response) => {
      return this._checkResponse(response);
    });
  };
}

export const imageApi = new ImageApi();
