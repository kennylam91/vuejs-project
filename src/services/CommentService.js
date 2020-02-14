import { HTTP } from '../commons/http-common'
export default new class CommentService {
  getCommentsByPostId (postId) {
    return HTTP.get(`posts/${postId}/comments`)
  }
  createComment (postId, comment) {
    return HTTP.post(`posts/${postId}/comments`, comment)
  }
}()
