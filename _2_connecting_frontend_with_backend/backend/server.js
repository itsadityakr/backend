import express from "express";
/*
import express from "express";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (node:internal/modules/cjs/loader:1691:18)
    at Module._compile (node:internal/modules/cjs/loader:1734:20)
    at Object..js (node:internal/modules/cjs/loader:1893:10)
    at Module.load (node:internal/modules/cjs/loader:1480:32)
    at Module._load (node:internal/modules/cjs/loader:1299:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.8.0
*/

// Change type to module in package.json or use require

const app = express();

app.get("/api/v1/users", (req, res) => {
    const users = [
        {
            id: 1,
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
        },
        {
            id: 2,
            name: "Bob Smith",
            email: "bob.smith@example.com",
        },
        {
            id: 3,
            name: "Charlie Davis",
            email: "charlie.davis@example.com",
        },
        {
            id: 4,
            name: "Diana Prince",
            email: "diana.prince@example.com",
        },
        {
            id: 5,
            name: "Ethan Brown",
            email: "ethan.brown@example.com",
        },
    ];
    // res.json(users);

    /*
    [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob.smith@example.com"
  },
  {
    "id": 3,
    "name": "Charlie Davis",
    "email": "charlie.davis@example.com"
  },
  {
    "id": 4,
    "name": "Diana Prince",
    "email": "diana.prince@example.com"
  },
  {
    "id": 5,
    "name": "Ethan Brown",
    "email": "ethan.brown@example.com"
  }
]
    */

    res.send(users);

    /*
    [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob.smith@example.com"
  },
  {
    "id": 3,
    "name": "Charlie Davis",
    "email": "charlie.davis@example.com"
  },
  {
    "id": 4,
    "name": "Diana Prince",
    "email": "diana.prince@example.com"
  },
  {
    "id": 5,
    "name": "Ethan Brown",
    "email": "ethan.brown@example.com"
  }
]
    */
});
// `/slash` is important for endpoint

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
