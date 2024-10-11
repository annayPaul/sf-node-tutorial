const tap = require("tap");
const csv2json = require("./index");
const parsed = require("./test/fixtures/Contact_Data.json");
const path = require("path");

tap.test("it should parse", async (t) => {
    const result = await csv2json(path.join("./data", "Contact_data.csv"));
    t.same(parsed, result);
});
