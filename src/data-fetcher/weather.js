 
export default async function clima(lid) {
  const url = `https://api.tutiempo.net/json/?lan=es&apid=${'XwDXqq4qzqz5kyS'}&lid=${lid}`
  return await fetch(url)
  .then(response => response.json())
  .then(data => {
    return data});
}