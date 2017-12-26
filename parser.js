
module.exports = function  (req){

  return {
      ipaddress:getIp(req.ip),
      language:getLang(req.get('accept-language')),
      software:getOs(req.get('user-agent'))
    }
  }


function getIp(ip){
  let cut = ip.split(':');
  return cut[cut.length-1];
}
function getLang(lang){
  let cut = lang.split(',');
  return cut[0];
}
function getOs(osname){
 let cut = osname.split(/[\(\)]/);
 return cut[1];
}