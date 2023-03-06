const ProxyServer = require('./proxy').ProxyServer

function createProxyServer(options){
    return new ProxyServer
}


module.exports.createProxyServer = createProxyServer