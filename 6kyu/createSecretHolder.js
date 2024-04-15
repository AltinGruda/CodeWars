function createSecretHolder(secret) {
    return {
      getSecret: function() {
        return secret;
      },
      setSecret: function(secretWord) {
        secret = secretWord;
      }
    }
}

obj = createSecretHolder(5)
console.log(obj.getSecret()) // returns 5
obj.setSecret(2)
console.log(obj.getSecret()) // returns 2