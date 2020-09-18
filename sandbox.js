'use script'

let protoRabbit = {
    speak(line) {
        console.log(`the ${this.type} rabbit says ${line}`);
    }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak("skreee");

let silentRabbit = Object.create(protoRabbit);
silentRabbit.speak('heheh');