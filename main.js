#!/usr/bin/env node

const fs = require('fs');
const deb = require('@fade-project/deb-build');
const list = require('./build-list.json');

list.forEach((item, index) => { 
    fs.mkdirSync(deb.set_data_tar_gz_datadir().name+"/usr", 0755);
    deb.build(item, "0.0.0-just-dummy", `Just dummy package (simulating ${item})`, "about:blank", "all", "bash", "optional", "", "Unknown", "unknown@email.invalid", "normal", "", "").then((data) => {
        fs.writeFileSync("DUMMY."+item+"_0.0.0-just-dummy_all.deb", data);
    });
});