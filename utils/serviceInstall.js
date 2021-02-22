const Service = require('node-windows').Service;
const config = require('../config')
const path = require('path')
// Create a new service object
const svc = new Service({
    name: config.APP_Name,
    description: config.APP_Description,
    script: path.join(__dirname, '..', 'index.js')
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();