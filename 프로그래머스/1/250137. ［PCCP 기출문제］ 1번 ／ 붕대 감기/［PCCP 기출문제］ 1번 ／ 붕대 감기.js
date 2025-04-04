function solution(bandage, health, attacks) {
    let answer = 0;
    let limit = health;
    let lastAttackTime = 0;
    
    for (let i = 0; i < attacks.length; i++){
        let healthTime = attacks[i][0] - lastAttackTime - 1;
        health += healthTime * bandage[1];
        let combo = healthTime;
        
        if (combo >= bandage[0]) health += Math.floor(combo / bandage[0]) * bandage[2];
        health = Math.min(health, limit);
        
        health -= attacks[i][1];
        
        if (health <= 0) return -1;
        lastAttackTime = attacks[i][0];
    }
    return health;
}