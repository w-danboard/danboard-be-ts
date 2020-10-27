import HTTPStatusCode from 'http-status-code'

export default (code) => {
  return HTTPStatusCode.getMessage(code)
}