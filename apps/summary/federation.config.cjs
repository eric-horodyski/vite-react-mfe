const { withNativeFederation, shareAll } = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "summary",
  exposes: {
    "./TotalCustomers": "./src/TotalCustomers.tsx"
  },
  shared: shareAll(),
  skip: [
    'react-dom/server',
    'react-dom/server.node',
  ]
});