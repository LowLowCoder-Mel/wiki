---
sidebar_label: 'PING-PONG'
sidebar_position: 2
---

# PING-PONG

Gear is very easy to write code for!

Here is a minimal program for a classic ping-pong contract:

```rust
    #![no_std]

    use gstd::{debug, msg, prelude::*};

    static mut MESSAGE_LOG: Vec<String> = vec![];

    #[no_mangle]
    pub unsafe extern "C" fn handle() {
        let new_msg = String::from_utf8(msg::load_bytes()).expect("Invalid message");

        if new_msg == "PING" {
            msg::reply_bytes("PONG", 12_000_000, 0);
        }

        MESSAGE_LOG.push(new_msg);

        debug!("{:?} total message(s) stored: ", MESSAGE_LOG.len());

        for log in MESSAGE_LOG.iter() {
            debug!(log);
        }
    }

    #[no_mangle]
    pub unsafe extern "C" fn init() {}
```

It will just send `PONG` back to the original sender (this can be you!).

GitHub link: https://github.com/gear-tech/apps/tree/master/ping