/*
 * @Description: Description
 * @Author: 陆城锫
 * @Date: 2021-04-25 13:27:52
 */
const category = {
    state: {
        categoryList: [],
        logList: []
    },
    mutations: {
        SET_CATEGORY: (state, data) => {
            state.categoryList.push(data)
        },
        SET_LOG_LIST: (state, data) => {
            state.logList.push(data)
        }
    },
    actions: {
        SET_CATEGORY: ({ commit }, data) => {
            commit('SET_CATEGORY', data)
        },
        SET_LOG_LIST: ({ commit }, data) => {
            commit('SET_LOG_LIST', data)
        }
    }
}
export default category