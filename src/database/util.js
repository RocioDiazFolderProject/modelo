const fs = requiere("fs");
//requiere(async);

const saveToDatabase = (DB) => {
    fs.writeFileSync(".src/database/db.json", JSON.stringify(DB, null, 2),{
        encoding: "utf8"
    });
};

module.exports = { saveToDatabase};