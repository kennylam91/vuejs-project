import { HTTP } from '../commons/http-common'
export default new class CommentService {
  getCommentsByPostId (postId) {
    return HTTP.get(`posts/${postId}/comments`)
  }
}()
