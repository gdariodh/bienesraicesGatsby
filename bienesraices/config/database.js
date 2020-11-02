module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "mongoose",
      "settings": {
        "uri": "mongodb+srv://admin:admin@cluster0.jcbwr.mongodb.net/bienesraices?retryWrites=true&w=majority"
      },
      "options": {
        "ssl": true
      }
    }
  }
});
