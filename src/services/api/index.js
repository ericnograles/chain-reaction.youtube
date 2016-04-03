export function findMemes() {
  return new Promise(
    (resolve, reject) => {
      var url = 'http://localhost:3000/memes';
      var options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw({error: 'Server error encountered'});
          }
          return response.text();
        })
        .then(responseText => {
          var payload = JSON.parse(responseText);
          resolve(payload);
        })
        .catch(error => {
          reject(error);
        });
    }
  );
}