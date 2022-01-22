export const state = () => ({
    openLog: false,
})

export const mutations = {
    openLog(state, payload) {
        state.openLog = payload;
        console.log(payload)
    }
}

export const getters = ({
    getOpenLog: state => state.openLog
})