const Service = require('node-windows').Service;
const config = require('../config')
const path = require('path')

// Create a new service object
const svc = new Service({
    name: config.APP_NAME,
    script: path.join(__dirname,'..','index.js')
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('uninstall',function(){
  svc.start();
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

svc.uninstall();