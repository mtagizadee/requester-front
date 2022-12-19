export default {
    dashboardRoute: '/dashboard',
    notFoundRoute: '/error',
    authRoute: '/auth',
    loginRout() {
        return `${this.authRoute}/login`
    },
    registerRoute() {
        return `${this.authRoute}/register`
    },

}