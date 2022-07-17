import { Request, Response } from 'express'

import CommentService from '../services/comment.service'

export default class CommentController {
  static async create(req: Request, res: Response) {
    const { id: authorId } = res.locals.user
    const { text } = req.body
    const { postId } = req.params

    const comment = await CommentService.create(text, authorId, postId)

    res.json(comment)
  }
}
