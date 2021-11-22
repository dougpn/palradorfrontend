export default function PostActions(method){
function requestOptions (method) {
  return {method: method,
   headers: { 'Content-Type': 'application/json' }}
 }
  switch (method){
    case ('DELETE'): {
  return fetch('http://192.168.0.165:3300/deletepost', {
    ...requestOptions(method),
    body: JSON.stringify({ _id: id })
  })
  .then((response) => response.json())
    }
    case('POST'): {
  return fetch('http://192.168.0.165:3300/findpost', requestOptions(method))
  .then((response) => response.json())
}}}