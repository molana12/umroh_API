const express = require ('express');
const app = express();

// app.use ("/" , (req, res) => {
//     res.send ('hello world');
// })

app.get ("/", (req, res) => {
    res.json ({
        nama : "prawito",
        email : "molana.secret12@gmail.com",
        address : "langsa"
    });
});

app.post ("/", (req, res) => {
    res.send ('hello post method')
});

app.patch ("/", (req, res) => {
    res.send ('hello patch method')
});

app.delete ("/", (req, res) => {
    res.send ('hello delete method')
});


app.listen(3000, () => {
    console.log('server ini berhasil dijalankan di port 3000')
})