require('express')()
.get("/", (req, res) => {
    return res.send("NLW2")
})
.listen(5500)