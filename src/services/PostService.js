import {HTTP} from '../commons/http-common'
export class PostService {
  getPostsByUserId (userId) {
    return HTTP.get(`users/${userId}/posts`)
  }
}
