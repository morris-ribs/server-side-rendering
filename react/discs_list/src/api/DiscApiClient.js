import "isomorphic-fetch";

export function fetchDiscs(callback) {
  return fetch(`http://localhost:4800/`).then(response => response.json());
}