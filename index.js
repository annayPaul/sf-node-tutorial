const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const fileName = path.resolve("./data", "Contact_data.csv");
const readFile = promisify(fs.readFile);

async function csv2json() {
    try {
        const data = await readFile(fileName, "utf8");
        const lines = data.split("\r\n");
        let headers = [];
        const results = [];

        lines.forEach((line, index) => {
            let result = {};
            if (index === 0) {
                headers = line.split(",");
            } else {
                items = line.split(",");
                items.forEach((item, index) => {
                    result[headers[index]] = item;
                });
            }
            results.push(result);
        });
        return results;
    } catch (error) {
        return [];
    }
}

module.exports = csv2json;
