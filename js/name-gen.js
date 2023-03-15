// nameGen test thing
const nableA = [
    "a","ad","af","ah","ak","al","am","an","anda","ander","ar","arac","arn","at","ate","aur","axis","az","bad","baff","bail","bak","bar","barth","becc","bel","berd","bes","bia","bill","blade","bo","borg","borr","both","bra","bran","cand","cath","chad","chan","chess","chor","cig","cly","co","cook","cor","cruth","dak","dar","de","dee","dell","der","di","dius","do","doh","dom","don","dor","dos","dou","dra","drebb","dros","du","durn","ed","eg","eikos","el","ella","en","ena","endi","er","ers","es","eson","eth","ev","ex","fa","fal","fan","farn","fegg","fen","fer","force","fred","ga","gai","gain","gal","gan","gar","gate"
];

const nableB = [
    "gax","gent","ghin","glen","glom","go","gor","gram","gray","gy","ha","hag","ham","han","harg","held","ho","holmes","i","ia","ick","id","ieg","ien","ier","ig","ik","in","ing","ion","iron","is","ise","it","ius","j’","je","jeff","jo","ka","kall","kar","kee","khan","kim","kir","kit","ko","kra","kras","ku","la","lagg","lam","lap","lat","leaf","lef","les","lis","lo","lu","ly","mad","mal","man","mant","mar","marsh","mas","mel","met","mez","mi","mil","min","mir","mis","mo","mold","mor","mul","mund","mus","na","nar","ned","nel","nic","no","nor","nu","o","o","ob","oc","ol","ol","old","on"
];

const nableC = [
    "ond","ora","os","osa","ot","pal","pan","pen","phan","phil","po","pos","poy","pres","pus","quas","que","quill","ra","rag","ralt","ram","ray","re","rem","ren","rick","rin","ris","rius","ro","rod","ron","ros","roth","row","ru","rua","ry","sa","sail","sal","san","sar","say","seef","seph","sho","sia","silver","sirk","sit","spar","spor","ste","ste","sto","stone","storm","sur","tan","tar","tars","tas","ter","tha","thad","tham","than","theo","ther","thon","thor","thy","ties","to","ton","tra","trav","tre","tredd","tue","ul","um","umm","undo","us","vay","ven","ver","vill","wa","will","wolf","yon","zegy","zin","zo","zoa","zom"
];

const nableX = ["","","","",""," "," ","-"]

function randomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function diceRoll(num) {
    return Math.floor(Math.random() * num) + 1;
}

function properCase(str) {
    return str = str[0].toUpperCase() + str.substring(1);
}

function titleCase(str) {
    return str.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function nameGen() {
    var rollOne = diceRoll(100);
    let syllCount = 0;
    if (rollOne <= 10) {
        syllCount = 1;
    } else if (rollOne <= 70) {
        syllCount = 2;
    } else if (rollOne <= 90) {
        syllCount = 3;
    } else if (rollOne <= 100) {
        syllCount = 4;
    }

    let nambleName = "";
    let namble = "";    
    for (i = 0; i < syllCount; i++) {
        var rollTwo = diceRoll(6);
        var nableJoin = randomString(nableX);
        
        if (rollTwo <= 2) {
            nambleName = randomString(nableA);
        } else if (rollTwo <= 4) {
            nambleName = randomString(nableB);
        } else if (rollTwo <= 6) {
            nambleName = randomString(nableC);
        }

        if (i == syllCount - 1) {
            namble += nambleName;
        } else {
            namble += nambleName + nableJoin;
        }
        console.log(nambleName);
    }

    // namby = namble.replace(/[^\w\s]|(.)(?=\1\1)/i, "");
    // console.log(namby);

    namble = titleCase(namble.replace(/[^\w\s]|(.)(?=\1\1)/i, ""));
    document.querySelector(".output").innerHTML = "<p><b>" + namble + "</b></p>"
}