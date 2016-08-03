
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    scrollBehavior: scrollBehavior,
    routes: [
        { path: '/', component: require('./home.vue') },
        { path: '/about', component: require('./about.vue') },
        { path: '/contact', component: require('./contact.vue') },
    ]
})


// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
// @link https://github.com/vuejs/vue-router/blob/43183911dedfbb30ebacccf2d76ced74d998448a/examples/scroll-behavior/app.js#L18-L38
function scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position
    }
}