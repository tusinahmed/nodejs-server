const fs = require('fs');
const http = require('http'); 
const port = process.env.PORT || 5000;



const server = http.createServer((req, res) => {
    const handlefile = (filename, statuscode) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.writeHead(statuscode, { "content-type": "text/html" });
                res.end(data)
            }
        })
    }

    if (req.url === './') {

        handlefile("index.html", 200, req, res);
        
    }

    else if (req.url === './about', req, res) {
        handlefile("about.html", 200);
        
    }

    else if (req.url === './contact' ,req, res) {
        handlefile("contact.html", 200);
        
    }

    else {
        handlefile("error.html", 404, req, res);
        
    }
    

});

server.listen(port, () => {
    console.log("start server");
    
});

