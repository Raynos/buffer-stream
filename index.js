var PauseStream = require("pause-stream")
    , duplexer = require("duplexer")

module.exports = BufferStream

function BufferStream() {
    var writable = PauseStream()
        , readable = PauseStream()
        , buffered = duplexer(writable, readable)

    buffered.buffer = buffer
    buffered.empty = empty

    return buffered

    function buffer() {
        writable.pause()
        return buffered
    }

    function empty(stream, options) {
        if (stream) {
            options = options || {}
            writable.pipe(stream).pipe(readable, options)
        }

        writable.resume()
        return buffered
    }
}