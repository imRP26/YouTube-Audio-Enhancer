var videoElement = document.querySelector("video") 
var audioCtx = new AudioContext() 
var source = audioCtx.createMediaElementSource(videoElement) 
var gainNode = audioCtx.createGain() 
gainNode.gain.value = n // enhance the volume by 'n' times 
source.connect(gainNode) 
gainNode.connect(audioCtx.destination) 
