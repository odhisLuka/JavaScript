const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK'; // MODE_ ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE|_STRONG_ATTACK = 1

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

function getMaxLifeValue () {
  const enteredValue = prompt('Please, enter Player and Monster health of your choice', '100');
  let parseValue = parseInt(enteredValue);
  if (isNaN(parseValue) || parsedValue <= 0) {
    throw {message: 'Not a valid user input. Try a number' }        
  }
  return parsedValue;
}

let chosenMaxLife;
try {
  chosenMaxLife = getMaxLifeValue();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
  alert('You entered something wrong, so the default value of 100 was used!');
}

let battleLog = [];

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry =  {
    event: ev,
    value: val,
    finalMosterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  };
// using switch-case, in cases where there's multiple comparison cases as below
switch (ev) {
  case LOG_EVENT_PLAYER_ATTACK:
    logEntry.target = 'MONSTER';
    break;
  case LOG_EVENT_PLAYER_STRONG_ATTACK:
    logEntry = {
      event: ev,
      value: val,
      target: 'MONSTER',
      finalMosterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
    break;
  case LOG_EVENT_MONSTER_ATTACK:
    logEntry = {
      event: ev,
      value: val,
      target: 'PLAYER',
      finalMosterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
    break;
  case LOG_EVENT_PLAYER_HEAL:
  logEntry = {
    event: ev,
    value: val,
    target: 'PLAYER',
    finalMosterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  };
  break;

  case LOG_EVENT_GAME_OVER:
  logEntry = {
    event: ev,
    value: val,
    finalMosterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  };
  break;
  default: // if no case above is met
    logEntry = {};

} 

  
  // if (ev === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry.target = 'MONSTER';
  // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'MONSTER',
  //     finalMosterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth
  //   };
  // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'PLAYER',
  //     finalMosterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth
  //   };
  // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'PLAYER',
  //     finalMosterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth
  //   };
  // } else if (ev === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     finalMosterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth
  //   };
  // }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You would be dead but bonus life saved you!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'YOU WON!',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'MONSTER WON!',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'A DRAW!',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
      
  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }
  
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(
    logEvent,
    damage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  endRound();
}


function onAttack() {
  attackMonster(MODE_ATTACK);
}

function onStrongAttack () {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayer() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal yourself more than your max life!");
    healValue = chosenMaxlife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler() {
  // for (let i = 0; i<battleLog.length; i++) {
  //   console.log(battleLog[i]);
  // }
  
  // the "for-of" loop
  for (const logEntry of battleLog) {
    console.log(`#${i}`);
    for (const key in logEntry) {
      console.log(`${key}` - `${logEntry[key]}`); // the first logs, the key, and the second the value
    }
    break;
  }
  i++;  


}

attackBtn.addEventListener('click', onAttack);
strongAttackBtn.addEventListener('click', onStrongAttack);
healBtn.addEventListener('click', healPlayer);
logBtn.addEventListener('click', printLogHandler);
