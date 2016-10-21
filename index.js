const app = "I don't do much.";

var digitalClock = {
  time: Math.round( Date.now() / 1000 ),
  startTicking() {
    this.time += 1
    window.setInterval(this.startTicking, 1000)
  }
}

const censor = (badWord, sentence) => {
  return sentence.split(badWord).join('BLEEP')
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');