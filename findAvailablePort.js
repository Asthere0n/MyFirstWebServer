import net from 'net'

export function findAvailablePort(desiredPort){
    return new Promise ((resolve, reject) => {
        const server = net.createServer();

        server.listen(desiredPort, () => {
            const { port } = server.address()
            server.close(() => {
                resolve(port)
            })
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                resolve(findAvailablePort(desiredPort + 1))
            } else {
                reject(err)
            }
        })
    })
}