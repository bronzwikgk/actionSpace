
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Editor },
        { path: "/signup", view: SignUp },
        { path: "/login", view: Login }
    ];


    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    console.warn(view.getHtml())
    let formHTML=view.getHtml()

    clearDom()
    document.getElementsByTagName("body")[0].appendChild(formHTML);
    view.registerListeners()
};

const clearDom=()=>{
    const body = document.getElementsByTagName('body')[0];
    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }
}

window.addEventListener('popstate',router)
