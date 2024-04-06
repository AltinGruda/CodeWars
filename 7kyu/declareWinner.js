function declareWinner(fighter1, fighter2, firstAttacker) {
    let winner = "";
    let currentAttacker = firstAttacker;
    while(fighter1.health > 0 && fighter2.health > 0) {
      if(currentAttacker === fighter1.name) {
        fighter2.health -= fighter1.damagePerAttack;
        
        if(fighter2.health <= 0) {
          winner = fighter1.name;
          break;
        }
        currentAttacker = fighter2.name;
      } else {
        fighter1.health -= fighter2.damagePerAttack;
        
        if(fighter1.health <= 0) {
          winner = fighter2.name;
          break;
        }
        currentAttacker = fighter1.name;
      }
    }
    
    return winner;
}