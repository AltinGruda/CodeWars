function getParticipants(handshakes){
    if(handshakes === 0) return 0;
    if(handshakes === 1) return 2;
    for(let i = 1; i <= handshakes; i++){
        let totalHandshakes = (i * (i-1))/2;
  
        if(totalHandshakes >= handshakes) {
          return i;
        }
    }
    return 0;
}

// getParticipants(6); //4
getParticipants(0); //0
getParticipants(1); //2
getParticipants(2); //2