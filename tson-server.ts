import Fastify from 'fastify'

import { Comment } from './tson/Comment'
import { Post } from './tson/Post'
import { User } from './tson/User'

const fastify = Fastify({
    logger: true
})

// Not registering User and Comment does not solve the problem. Stills fails with duplicate User.json.
fastify.addSchema(User);
fastify.addSchema(Comment);
fastify.addSchema(Post);

fastify.get('/user/:userId', {
    handler (req, reply) { 
        req.log.info({ params: req.params }, 'GET user/{userId}')
        reply.send( { userId: 'userId', userNm: 'fred', random: 123} )
    },
    schema: {
        params: {
            type: 'object',
            properties: {
                userId: { type: 'string' }
            },
            required: [ 'userId' ]
        },
        response: {
            200: { $ref: 'User.json#' }
        }
    }
})

fastify.get('/comment/:commentId', {
    handler (req, reply) { 
        req.log.info({ params: req.params }, 'GET comment/{commentId}')
        reply.send({ commentId: "commentId", commentTx: 'blah blah blah', commenter: { userId: 'userId', userNm: 'username'} })
    },
    schema: {
        params: {
            type: 'object',
            properties: {
                commentId: { type: 'string' }
            },
            required: [ 'commentId' ]
        },
        response: {
            200: { $ref: 'Comment.json#' }
        }
    }
})

fastify.get('/post/:postId', {
    handler (req, reply) { 
        req.log.info({ params: req.params }, 'GET post/{postId}')
        reply.send({ postId: "postId", titleTx: 'blah blah blah', author: { userId: 'userId', userNm: 'username'}, comments: [] })
    },
    schema: {
        params: {
            type: 'object',
            properties: {
                postId: { type: 'string' }
            },
            required: [ 'postId' ]
        },
        response: {
            200: { $ref: 'Post.json#' }
        }
    }
})

fastify.listen({ port: 3000 }, function(err, addr) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})