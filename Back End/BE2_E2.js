const fs = require('fs');
const path = require('path');
const sourceDir = process.argv[2];
const targetDir = process.argv[3];
const fileExt = process.argv[4];

fs.readdir(sourceDir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (path.extname(file) === fileExt) {
            fs.copyFile(`${sourceDir}/${file}`, `${targetDir}/${file}`, (err) => {
                if (err) throw err;
                console.log(`${file} was copied to ${targetDir}`);
            });
        }
    });
}
);

