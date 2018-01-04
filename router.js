const route = (handle, pathname) => {
    console.log('about to route a request for' + pathname)
    if (typeof handle[pathname] === 'function') {
        handle[pathname]()
    } else {
        console.log('No request handles for' + pathname)
    }
}

exports.route = route