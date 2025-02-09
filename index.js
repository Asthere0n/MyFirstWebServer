import http from "http";
import { findAvailablePort } from "./findAvailablePort.js";
import { processRequest } from "./processRequest.js";



findAvailablePort(3000)
    .then((port) => {
        const server = http.createServer(processRequest)

        server.listen(port, () => {
            console.log(`Server listening on port http://localhost:${port}`);
        })

    })
    .catch((err) => {
        console.error(err);
    })
