import config from '../config'

const TokenService = {
    saveCredentials(token, userId) {
        console.log("save auth is running")
        console.log("save auth is running", token)


        window.localStorage.setItem(config.TOKEN_KEY, token)
        window.localStorage.setItem("userId", userId)
    },
    // getAuthToken() {
    //     return window.localStorage.getItem(config.TOKEN_KEY, )
    // },
    getCredentials() {
        return {
            tokenKey: window.localStorage.getItem(config.TOKEN_KEY),
            userId: window.localStorage.getItem("userId")
        }

    },
    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY)
    },
    hasAuthToken() {
        return !!TokenService.getCredentials().tokenKey
    },
    makeBasicAuthToken(user_name, password) {
        return window.btoa(`${user_name}:${password}`)
    },
}

export default TokenService