const spawn = require("child_process").spawn;
const path = require("path")

const logger = require('../utils/logger')



module.exports.index = (req, res) => {
    let result = {
        "status": true,
        "message":"PowerShell Active Directory Service"
    }
    logger.info(result)
    res.json(result)
}
module.exports.generateADPhotos = (req, res) => {
    child = spawn("powershell.exe",[path.join(__dirname, '..','psScripts','getADPhotos.ps1 ' + path.join(__dirname, '..','public','avatars','.\\'))])
    child.stdout.on("data",function(data){
        let result = {
            "status": true,
            "message": "Users avatars generated",
            "data": data.toString().replace(new RegExp("\r\n", "g"), ", ")
        }
        logger.info(result)
        res.json(result)
    });
    child.stderr.on("data",function(data){
        let result = {
            "status": false,
            "message": data
        }
        logger.error(result)
        res.json(result)
    });
    child.on("exit",function(){
        console.log("Powershell Script finished");
    });
    child.stdin.end(); //end input


}