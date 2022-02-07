const skills_standard = [{"pet":"ant","level":1,"when":"faint","what":"buff","who":"friend_random","value":[2,1]},{"pet":"ant","level":2,"when":"faint","what":"buff","who":"friend_random","value":[4,2]},{"pet":"ant","level":3,"when":"faint","what":"buff","who":"friend_random","value":[6,3]},{"pet":"beaver","level":1,"when":"sell","what":"buff","who":"friend_random2","value":[0,1]},{"pet":"beaver","level":2,"when":"sell","what":"buff","who":"friend_random2","value":[0,2]},{"pet":"beaver","level":3,"when":"sell","what":"buff","who":"friend_random2","value":[0,3]},{"pet":"cricket","level":1,"when":"faint","what":"summon","who":"cricket","value":[1,1]},{"pet":"cricket","level":2,"when":"faint","what":"summon","who":"cricket","value":[2,2]},{"pet":"cricket","level":3,"when":"faint","what":"summon","who":"cricket","value":[3,3]},{"pet":"duck","level":1,"when":"sell","what":"buff","who":"shop","value":[0,1]},{"pet":"duck","level":2,"when":"sell","what":"buff","who":"shop","value":[0,2]},{"pet":"duck","level":3,"when":"sell","what":"buff","who":"shop","value":[0,3]},{"pet":"fish","level":1,"when":"level","what":"buff","who":"friend_all","value":[1,1]},{"pet":"fish","level":2,"when":"level","what":"buff","who":"friend_all","value":[2,2]},{"pet":"fish","level":3,"when":"level","what":"buff","who":"friend_all","value":[3,3]},{"pet":"horse","level":1,"when":"summon","what":"buff","who":"summon","value":[1,0]},{"pet":"horse","level":2,"when":"summon","what":"buff","who":"summon","value":[2,0]},{"pet":"horse","level":3,"when":"summon","what":"buff","who":"summon","value":[3,0]},{"pet":"mosquito","level":1,"when":"start_battle","what":"attack","who":"enemy_random","value":1},{"pet":"mosquito","level":2,"when":"start_battle","what":"attack","who":"enemy_random2","value":1},{"pet":"mosquito","level":3,"when":"start_battle","what":"attack","who":"enemy_random3","value":1},{"pet":"otter","level":1,"when":"buy","what":"buff","who":"friend_random","value":[1,1]},{"pet":"pig","level":1,"when":"sell","what":"gain","who":"gold","value":1},{"pet":"pig","level":2,"when":"sell","what":"gain","who":"gold","value":2},{"pet":"pig","level":3,"when":"sell","what":"gain","who":"gold","value":3},{"pet":"crab","level":1,"when":"buy","what":"copy_health","who":"friend_healthiest","value":1},{"pet":"crab","level":2,"when":"buy","what":"copy_health","who":"friend_healthiest","value":1},{"pet":"crab","level":3,"when":"buy","what":"copy_health","who":"friend_healthiest","value":1},{"pet":"dodo","level":1,"when":"battle_start","what":"dodobuff","who":"friend_ahead","value":0.5},{"pet":"dodo","level":2,"when":"battle_start","what":"dodobuff","who":"friend_ahead","value":1},{"pet":"dodo","level":3,"when":"battle_start","what":"dodobuff","who":"friend_ahead","value":1.5},{"pet":"elephant","level":1,"when":"before_attack","what":"damage","who":"friend_behind","value":1},{"pet":"elephant","level":2,"when":"before_attack","what":"damage","who":"friend_behind2","value":1},{"pet":"elephant","level":3,"when":"before_attack","what":"damage","who":"friend_behind3","value":1},{"pet":"flamingo","level":1,"when":"faint","what":"buff","who":"friend_behind2","value":[1,1]},{"pet":"flamingo","level":2,"when":"faint","what":"buff","who":"friend_behind2","value":[2,2]},{"pet":"flamingo","level":3,"when":"faint","what":"buff","who":"friend_behind2","value":[3,3]},{"pet":"hedgehog","level":1,"when":"faint","what":"attack","who":"all","value":2},{"pet":"hedgehog","level":2,"when":"faint","what":"attack","who":"all","value":4},{"pet":"hedgehog","level":3,"when":"faint","what":"attack","who":"all","value":6},{"pet":"peacock","level":1,"when":"hurt","what":"buff","who":"self","value":[2,0]},{"pet":"peacock","level":2,"when":"hurt","what":"buff","who":"self","value":[4,0]},{"pet":"peacock","level":3,"when":"hurt","what":"buff","who":"self","value":[6,0]},{"pet":"rat","level":1,"when":"faint","what":"summon_enemy","who":"rat","value":[1,1]},{"pet":"rat","level":2,"when":"faint","what":"summon_enemy","who":"rat","value":[1,1]},{"pet":"rat","level":3,"when":"faint","what":"summon_enemy","who":"rat","value":[1,1]},{"pet":"shrimp","level":1,"when":"sell_friend","what":"buff","who":"friend_random","value":[0,1]},{"pet":"shrimp","level":2,"when":"sell_friend","what":"buff","who":"friend_random","value":[0,2]},{"pet":"shrimp","level":3,"when":"sell_friend","what":"buff","who":"friend_random","value":[0,3]},{"pet":"spider","level":1,"when":"faint","what":"summon","who":"tier_3_1","value":[2,2]},{"pet":"spider","level":2,"when":"faint","what":"summon","who":"tier_3_2","value":[2,2]},{"pet":"spider","level":3,"when":"faint","what":"summon","who":"tier_3_3","value":[2,2]},{"pet":"swan","level":1,"when":"turn_start","what":"gain","who":"gold","value":1},{"pet":"swan","level":2,"when":"turn_start","what":"gain","who":"gold","value":2},{"pet":"swan","level":3,"when":"turn_start","what":"gain","who":"gold","value":3},{"pet":"badger","level":1,"when":"faint","what":"attack","who":"adjacent","value":"1atk"},{"pet":"badger","level":2,"when":"faint","what":"attack","who":"adjacent","value":"2atk"},{"pet":"badger","level":3,"when":"faint","what":"attack","who":"adjacent","value":"3atk"},{"pet":"blowfish","level":1,"when":"hurt","what":"attack","who":"enemy_random","value":2},{"pet":"blowfish","level":2,"when":"hurt","what":"attack","who":"enemy_random","value":4},{"pet":"blowfish","level":3,"when":"hurt","what":"attack","who":"enemy_random","value":6},{"pet":"camel","level":1,"when":"hurt","what":"buff","who":"friend_behind","value":[1,2]},{"pet":"camel","level":2,"when":"hurt","what":"buff","who":"friend_behind","value":[2,4]},{"pet":"camel","level":3,"when":"hurt","what":"buff","who":"friend_behind","value":[3,6]},{"pet":"dog","level":1,"when":"buy_friend","what":"buff","who":"self","value":[1,1]},{"pet":"dog","level":2,"when":"buy_friend","what":"buff","who":"self","value":[2,2]},{"pet":"dog","level":3,"when":"buy_friend","what":"buff","who":"self","value":[3,3]},{"pet":"giraffe","level":1,"when":"turn_end","what":"buff","who":"friend_ahead","value":[1,1]},{"pet":"giraffe","level":2,"when":"turn_end","what":"buff","who":"friend_ahead2","value":[1,1]},{"pet":"giraffe","level":3,"when":"turn_end","what":"buff","who":"friend_ahead3","value":[1,1]},{"pet":"kangaroo","level":1,"when":"friend_attacks","what":"buff","who":"self","value":[2,2]},{"pet":"kangaroo","level":2,"when":"friend_attacks","what":"buff","who":"self","value":[4,4]},{"pet":"kangaroo","level":3,"when":"friend_attacks","what":"buff","who":"self","value":[6,6]},{"pet":"ox","level":1,"when":"friend_faints","what":"status","who":"self","value":"melon"},{"pet":"ox","level":1,"when":"friend_faints","what":"buff","who":"self","value":[2,0]},{"pet":"ox","level":2,"when":"friend_faints","what":"status","who":"self","value":"melon"},{"pet":"ox","level":2,"when":"friend_faints","what":"buff","who":"self","value":[4,0]},{"pet":"ox","level":3,"when":"friend_faints","what":"status","who":"self","value":"melon"},{"pet":"ox","level":3,"when":"friend_faints","what":"buff","who":"self","value":[6,0]},{"pet":"rabbit","level":1,"when":"friend_eats","what":"buff","who":"eater","value":[0,1]},{"pet":"rabbit","level":2,"when":"friend_eats","what":"buff","who":"eater","value":[0,2]},{"pet":"rabbit","level":3,"when":"friend_eats","what":"buff","who":"eater","value":[0,3]},{"pet":"sheep","level":1,"when":"faint","what":"summon","who":"2ram","value":[2,2]},{"pet":"sheep","level":2,"when":"faint","what":"summon","who":"2ram","value":[4,4]},{"pet":"sheep","level":3,"when":"faint","what":"summon","who":"2ram","value":[6,6]},{"pet":"snail","level":1,"when":"buy_after_lose","what":"buff","who":"all","value":[2,1]},{"pet":"snail","level":2,"when":"buy_after_lose","what":"buff","who":"all","value":[4,2]},{"pet":"snail","level":3,"when":"buy_after_lose","what":"buff","who":"all","value":[6,3]},{"pet":"turtle","level":1,"when":"faint","what":"status","who":"friend_behind","value":"melon"},{"pet":"turtle","level":2,"when":"faint","what":"status","who":"friend_behind2","value":"melon"},{"pet":"turtle","level":3,"when":"faint","what":"status","who":"friend_behind3","value":"melon"},{"pet":"bison","level":1,"when":"turn_end","what":"buff","who":"self_haslevel3","value":[2,2]},{"pet":"bison","level":2,"when":"turn_end","what":"buff","who":"self_haslevel3","value":[4,4]},{"pet":"bison","level":3,"when":"turn_end","what":"buff","who":"self_haslevel3","value":[6,6]},{"pet":"deer","level":1,"when":"faint","what":"summon","who":"bus","value":[5,5]},{"pet":"deer","level":2,"when":"faint","what":"summon","who":"bus","value":[10,10]},{"pet":"deer","level":3,"when":"faint","what":"summon","who":"bus","value":[15,15]},{"pet":"dolphin","level":1,"when":"battle_start","what":"attack","who":"enemy_unhealthiest","value":5},{"pet":"dolphin","level":2,"when":"battle_start","what":"attack","who":"enemy_unhealthiest","value":10},{"pet":"dolphin","level":3,"when":"battle_start","what":"attack","who":"enemy_unhealthiest","value":15},{"pet":"hippo","level":1,"when":"knock_out","what":"buff","who":"self","value":[2,2]},{"pet":"hippo","level":2,"when":"knock_out","what":"buff","who":"self","value":[4,4]},{"pet":"hippo","level":3,"when":"knock_out","what":"buff","who":"self","value":[6,6]},{"pet":"parrot","level":1,"when":"end_turn","what":"copy_ability","who":"friend_ahead","value":1},{"pet":"parrot","level":2,"when":"end_turn","what":"copy_ability","who":"friend_ahead","value":2},{"pet":"parrot","level":3,"when":"end_turn","what":"copy_ability","who":"friend_ahead","value":3},{"pet":"penguin","level":1,"when":"turn_end","what":"buff","who":"friend_level23","value":[1,1]},{"pet":"penguin","level":2,"when":"turn_end","what":"buff","who":"friend_level23","value":[2,2]},{"pet":"penguin","level":3,"when":"turn_end","what":"buff","who":"friend_level23","value":[3,3]},{"pet":"rooster","level":1,"when":"faint","what":"summon","who":"chick","value":"[0.5atk,1]"},{"pet":"rooster","level":2,"when":"faint","what":"summon","who":"2chick","value":"[0.5atk,2]"},{"pet":"rooster","level":3,"when":"faint","what":"summon","who":"3chick","value":"[0.5atk,3]"},{"pet":"skunk","level":1,"when":"battle_start","what":"damage","who":"enemy_healthiest","value":"0.33hp"},{"pet":"skunk","level":2,"when":"battle_start","what":"damage","who":"enemy_healthiest","value":"0.66hp"},{"pet":"skunk","level":3,"when":"battle_start","what":"damage","who":"enemy_healthiest","value":"0.99hp"},{"pet":"squirrel","level":1,"when":"turn_start","what":"discount","who":"food","value":1},{"pet":"squirrel","level":2,"when":"turn_start","what":"discount","who":"food","value":2},{"pet":"squirrel","level":3,"when":"turn_start","what":"discount","who":"food","value":3},{"pet":"whale","level":1,"when":"battle_start","what":"swallow","who":"friend_ahead","value":1},{"pet":"whale","level":2,"when":"battle_start","what":"swallow","who":"friend_ahead","value":2},{"pet":"whale","level":3,"when":"battle_start","what":"swallow","who":"friend_ahead","value":3},{"pet":"worm","level":1,"when":"eats","what":"buff","who":"self","value":[1,1]},{"pet":"worm","level":2,"when":"eats","what":"buff","who":"self","value":[2,2]},{"pet":"worm","level":3,"when":"eats","what":"buff","who":"self","value":[3,3]},{"pet":"cow","level":1,"when":"buy","what":"replace_food","who":"milk","value":[1,2]},{"pet":"cow","level":2,"when":"buy","what":"replace_food","who":"milk","value":[2,4]},{"pet":"cow","level":3,"when":"buy","what":"replace_food","who":"milk","value":[3,6]},{"pet":"crocodile","level":1,"when":"battle_start","what":"attack","who":"enemy_last","value":8},{"pet":"crocodile","level":2,"when":"battle_start","what":"attack","who":"enemy_last","value":16},{"pet":"crocodile","level":3,"when":"battle_start","what":"attack","who":"enemy_last","value":24},{"pet":"monkey","level":1,"when":"turn_end","what":"buff","who":"friend_first","value":[3,3]},{"pet":"monkey","level":2,"when":"turn_end","what":"buff","who":"friend_first","value":[6,6]},{"pet":"monkey","level":3,"when":"turn_end","what":"buff","who":"friend_first","value":[9,9]},{"pet":"rhino","level":1,"when":"knock_out","what":"attack","who":"enemy_first","value":4},{"pet":"rhino","level":2,"when":"knock_out","what":"attack","who":"enemy_first","value":8},{"pet":"rhino","level":3,"when":"knock_out","what":"attack","who":"enemy_first","value":12},{"pet":"scorpion","level":1,"when":"","what":"","who":"","value":""},{"pet":"scorpion","level":2,"when":"","what":"","who":"","value":""},{"pet":"scorpion","level":3,"when":"","what":"","who":"","value":""},{"pet":"seal","level":1,"when":"eats","what":"buff","who":"friend_random2","value":[1,1]},{"pet":"seal","level":2,"when":"eats","what":"buff","who":"friend_random2","value":[2,2]},{"pet":"seal","level":3,"when":"eats","what":"buff","who":"friend_random2","value":[3,3]},{"pet":"shark","level":1,"when":"friend_faints","what":"buff","who":"self","value":[2,1]},{"pet":"shark","level":2,"when":"friend_faints","what":"buff","who":"self","value":[4,2]},{"pet":"shark","level":3,"when":"friend_faints","what":"buff","who":"self","value":[6,3]},{"pet":"turkey","level":1,"when":"summon","what":"buff","who":"summon","value":[3,3]},{"pet":"turkey","level":2,"when":"summon","what":"buff","who":"summon","value":[6,6]},{"pet":"turkey","level":3,"when":"summon","what":"buff","who":"summon","value":[9,9]},{"pet":"boar","level":1,"when":"before_attack","what":"buff","who":"self","value":[2,2]},{"pet":"boar","level":2,"when":"before_attack","what":"buff","who":"self","value":[4,4]},{"pet":"boar","level":3,"when":"before_attack","what":"buff","who":"self","value":[6,6]},{"pet":"cat","level":1,"when":"friend_eats","what":"multiply","who":"stats","value":2},{"pet":"cat","level":2,"when":"friend_eats","what":"multiply","who":"stats","value":3},{"pet":"cat","level":3,"when":"friend_eats","what":"multiply","who":"stats","value":4},{"pet":"dragon","level":1,"when":"summon","what":"buff","who":"friend_all","value":[1,1]},{"pet":"dragon","level":2,"when":"summon","what":"buff","who":"friend_all","value":[2,2]},{"pet":"dragon","level":3,"when":"summon","what":"buff","who":"friend_all","value":[3,3]},{"pet":"fly","level":1,"when":"friend_faints","what":"summon","who":"fly","value":[5,5]},{"pet":"fly","level":2,"when":"friend_faints","what":"summon","who":"fly","value":[10,10]},{"pet":"fly","level":3,"when":"friend_faints","what":"summon","who":"fly","value":[15,15]},{"pet":"gorilla","level":1,"when":"hurt","what":"status","who":"self","value":"coconut"},{"pet":"gorilla","level":2,"when":"hurt","what":"status","who":"self","value":"coconut"},{"pet":"gorilla","level":3,"when":"hurt","what":"status","who":"self","value":"coconut"},{"pet":"leopard","level":1,"when":"battle_start","what":"attack","who":"enemy_random","value":"0.5atk"},{"pet":"leopard","level":2,"when":"battle_start","what":"attack","who":"enemy_random2","value":"0.5atk"},{"pet":"leopard","level":3,"when":"battle_start","what":"attack","who":"enemy_random3","value":"0.5atk"},{"pet":"mammoth","level":1,"when":"faint","what":"buff","who":"friend_all","value":[2,2]},{"pet":"mammoth","level":2,"when":"faint","what":"buff","who":"friend_all","value":[4,4]},{"pet":"mammoth","level":3,"when":"faint","what":"buff","who":"friend_all","value":[6,6]},{"pet":"snake","level":1,"when":"friend_attacks","what":"attack","who":"enemy_random","value":5},{"pet":"snake","level":2,"when":"friend_attacks","what":"attack","who":"enemy_random","value":10},{"pet":"snake","level":3,"when":"friend_attacks","what":"attack","who":"enemy_random","value":15},{"pet":"tigercub","level":1,"when":"friend_ability","what":"repeat","who":"friend_ahead","value":1},{"pet":"tigercub","level":2,"when":"friend_ability","what":"repeat","who":"friend_ahead","value":2},{"pet":"tigercub","level":3,"when":"friend_ability","what":"repeat","who":"friend_ahead","value":3}]