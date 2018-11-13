# Getting Started

To start server:
`nodemon server.js`

To post more active_visitors:
`curl -d '{"value":4}' -H "Content-Type: application/json" -X POST http://localhost:3000/metrics/active_visitors`

To get latest number of active_visitors this hour:
`curl -X GET http://localhost:3000/metrics/active_visitors/sum`