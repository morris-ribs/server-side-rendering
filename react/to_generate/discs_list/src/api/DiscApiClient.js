class DiscApiClient {
  static getDiscs() {    
    // here we do a simple call to the dummy server and retrieve the response as JSON 
    return fetch(`http://localhost:4000/`).then(response => response.json());
  }
}

export default DiscApiClient;