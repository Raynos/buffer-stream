var BufferStream = require("../index")
    , through = require("through")

var buffer = BufferStream().buffer()

setInterval(function () {
    buffer.write("echo " + new Date().toString())
}, 1000)

buffer.on("data", function (echo) {
    console.log("[ECHO]", echo)
})

setTimeout(setUpShakyStream, 3000)

function setUpShakyStream() {
    var shaky = through()

    buffer.empty(shaky, {
        end: false
    })

    setTimeout(killShakyStream, 3000)

    function killShakyStream() {
        buffer.buffer()

        shaky.end()

        setTimeout(setUpShakyStream, 3000)
    }
}