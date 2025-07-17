import {useStorage} from '@vueuse/core'

export const useTasks = () => {
    return useStorage('tasks', {todo: [], inProgress: [], done: []})
}

