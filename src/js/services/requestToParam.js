export default function requestToParam(request) {
  return request.replace(/ /g, '+');
}
