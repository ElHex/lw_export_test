const tmp = require('tmp');
const fs = require('fs');
const path = require('path');
var filename = path.basename('/Users/Refsnes/demo_path.js');
const util = require('util');
const exec = require('child_process').exec;
const execa = util.promisify(exec);

const vivlioGeneratePDF = function (htmlurl){
    return execa("vivliostyle build "+htmlurl+"");
  }

module.exports = {
    generatePDF: async function (req, res, next){
        x
        let html = `<p class=""><em><span style="line-height: 1.0">THIS IS H1</span></em></p><p class="">AAAAAAAAAAAAAAAAAAAAAAAAAA1</p><h2><span style="line-height: 1.0">THIS IS H2</span></h2><p class="">BBBBBBBBBBBBBBBBBBBBBBBBBBB</p><p class=""></p><p class="">Prueba pablo</p>`;

        tmp.file({ mode: 0o644, prefix: 'prefix-', postfix: '.html' }, function _tempFileCreated(err, filedir, fd) {
          if (err) throw err;
         
          fs.appendFile(filedir, html, function (err) {
            if (err) {
              // append failed
            } else {
              // done
            }
          })
        
          cleanupCallback();
        
          console.log('File: ', filedir);
          console.log('Filedescriptor: ', fd);
        });
        
          res.json({ username: 'Flavio' })
    }
}