
function ProxyServer(options) {
  console.log('reached proxyserver fn...')
  this.web = () => { console.log('web proxy called...')}

  return this;
}
// exports.ProxyServer = ProxyServer
module.exports.ProxyServer = ProxyServer

