# buffer-stream

A duplex stream that buffers writes

## Example

``` js
var BufferStream = require("buffer-streams")

var buffer = BufferStream().buffer()

buffer.write("stuff")

buffer.on("data", doStuff)

someTimeLater(function (stream) {
    // Oh we have a stream
    // Empty the buffer onto the stream
    // Further writes to the buffer go directly to the stream
    // Any data the stream emits get's re-emitted on the buffer
    buffer.empty(stream)
})
```

## Installation

`npm install buffer-stream`

## Contributors

 - Raynos

## MIT Licenced