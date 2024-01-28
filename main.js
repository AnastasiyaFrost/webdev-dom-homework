import { getComments } from './api.js'
import { initAuthButtonListener } from './loginPage.js'

export let comments = []
export const setComments = (newComments) => {
    comments = newComments
}

getComments()
initAuthButtonListener()
