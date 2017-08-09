const Alexa = require('alexa-sdk')
const {appId, helpMessage, aboutMessage, phrases} = require('./config.json')

const getRandomPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];

const handlers = {
  "GetRandomPhraseIntent"() {
    this.emit(':tell', getRandomPhrase());
  },
  "AboutIntent"() {
    this.emit(':tell', aboutMessage)
  },
  "AMAZON.HelpIntent"() {
    this.emit(':ask', helpMessage, helpMessage);
  },
  "AMAZON.StopIntent"() {
    this.emit(':tell', 'Goodbye.')
  },
  "AMAZON.CancelIntent"() {
    this.emit(':tell', 'Goodbye.')
  },
  "AMAZON.LaunchRequest"() {
    this.emit(':ask', helpMessage, helpMessage)
  },
  "Unhandled"() {
    this.emit(':ask', helpMessage, helpMessage);
  },
}

exports.handler = (event, context) => {
  let alexa = Alexa.handler(event, context)
  alexa.APP_ID = appId
  alexa.registerHandlers(handlers)
  alexa.execute()
}
