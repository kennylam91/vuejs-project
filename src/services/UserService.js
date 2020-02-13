import {HTTP} from '../commons/http-common'
export class UserService {
  getUserById (id) {
    return HTTP.get(`/users/${id}`)
  }
  getUsers () {
    return HTTP.get(`/users`)
  }
}
