const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
        app.use("/v3",proxy({
            target:"https://mallcdn.api.epet.com",
            changeOrigin:true,
        }
    ))
        app.use("/users",proxy({
            target:"http://39.105.204.151:3000",
            changeOrigin:true,
        }
    ))
}




