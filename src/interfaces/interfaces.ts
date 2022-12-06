export interface AppStateInterface {
    posts: PostInterface[]
    loading: boolean
    userId: number
}

export interface PostInterface {
    userId: number
    id: number
    title: string
    body: string
}

export interface CommentInterface {
    body: string
    email: string
    id: number
    name: string
    postId: number
}