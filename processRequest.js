export const processRequest = (req, res) => {
    console.log("Request received");
    res.setHeader('Content-Type', 'text/html; charset:utf-8')

    if (req.url === '/'){
        res.statusCode = 200 // OK
        res.end("Hello World");

    } else if (req.url === '/contact'){
        res.statusCode = 200 // OK
        res.end("Welcome to the contact page")

    } else {
        console.log(req.url)
        res.statusCode = 404 // Not found
        res.end("404: Not Found")
    }

}