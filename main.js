const Express = require("express");
const app = Express();
const path = require("path");
const multer = require("multer");
const cors = require("cors");
app.use(cors());
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });
app.post("/upload", upload.single("image"), (req, res) => {
    res.send("ssss");
    res.end();
});
app.get("/", (req, res) => {
    res.send("ssss");
});
// app.get("/as", (req, res) => {
//     res.json({
//         id: "ssssdasflnsfosdfniok",
//     });
// });
app.listen(3000);