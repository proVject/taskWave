import {ref} from "vue";

const searchInput = ref('')

export const useSearch = () => {
    return {searchInput}
}