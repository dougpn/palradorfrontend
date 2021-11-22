export default async function PostActions(method, id){
function requestOptions (method) {
  return {method: method,
   headers: { 'Content-Type': 'application/json' }}
 }
  switch (method){
    case ('DELETE'): {
  const response = await fetch('http://192.168.0.165:3300/deletepost', {
        ...requestOptions(method),
        body: JSON.stringify({ _id: id })
      })
       return await response.json()
    }
    case('POST'): {
  const response_1 = await fetch('http://192.168.0.165:3300/findpost', requestOptions(method))
     return await response_1.json()
}}}