import "isomorphic-fetch";

export function fetchDiscs(callback) {
  return fetch(`http://localhost:4400/`).then(response => response.json());
}