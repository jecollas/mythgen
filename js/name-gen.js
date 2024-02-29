// nameGen test thing
const nable = {
  a: [
    "a","ab","able","ac","ace","ad","ada","add","ade","adi","ae","aeg","aen","aer","af","ag","age","ah","ai","aige","ain","air","aish","aj","ak","aker","al","alf","ali","alis","all","alls","als","alt","am","ama","amb","ambro","ami","amo","amor","amour","an","and","anda","ande","ander","andri","ane","ang","ani","ann","ano","anos","anza","ao","ap","app","apple","aq","aqu","aqua","ar","ara","arac","ard","ari","ark","arl","arn","arp","arr","art","as","ash","ass","at","ata","ate","ath","ati","ato","att","atu","atz","au","aul","aur","aura","aux","av","aw","ax","axis","ay","aya","ayl","ayn","az","ba"
  ],
  b: [
    "bad","baff","bail","bak","bal","ban","bann","bar","barr","bars","barth","be","bec","becc","beck","beh","bel","bell","berd","bes","bi","bia","bil","bill","bin","bjo","bjor","blade","blo","bloo","blood","bo","bois","boo","borg","borr","both","bra","bran","brea","break","breaker","bri","briar","bridge","brig","bright","brik","bro","brook","bu","bus","by","ca","cal","cali","call","cand","cap","car","carr","cat","cath","catt","cay","cayn","ce","cer","cerr","cet","cett","ch","cha","chad","chan","chant","che","cher","chero","cherr","ches","chess","chop","chopp","chor","chu","ci","cig","cit","cius","cla","clay","clid","cliff","clo","cloud","cly","co","cook","coop"
  ],
  c: [
    "cooper","cor","corn","cot","cott","cov","cove","cra","crane","crit","critt","cro","cruth","cu","cy","da","dak","dal","dall","dan","dar","darr","de","ded","dee","del","dela","dell","den","dene","denn","deo","der","derr","des","dess","dev","dew","dex","di","dic","did","didd","din","dinn","dius","do","doh","dom","domm","don","donn","dor","dorr","dos","doss","dou","dra","dre","dreb","drebb","dri","dric","drin","drinn","dros","dross","du","dul","dull","durn","dus","dusk","dwo","dy","e","ea","ear","eau","eb","ec","ed","ee","ef","eff","eg","egg","eh","ei","eikos","ej","ek","el","ell","ella","elle","els","em","emm","en"
  ],
  d: [
    "ena","end","endi","enn","ent","eo","ep","eq","equ","equa","equi","er","erch","eri","ero","err","ers","es","eson","ess","est","esth","esthe","et","eth","ett","ettle","eu","ev","ew","ex","ey","ez","fa","fab","fable","fal","fall","falls","fan","fang","far","farm","farn","fe","fegg","fel","fell","fen","fenn","fer","ferr","fi","fin","finch","fo","for","force","fred","fro","frog","fu","fy","ga","gai","gain","gal","gale","gall","galt","gam","gamm","gan","gann","gar","gard","garr","gate","gax","ge","gei","geil","geill","gent","ger","get","geto","ghin","gi","gid","gil","giz","gizz","gla","glad","glade","glen","glenn","gli","glom"
  ],
  e: [
    "gnot","go","gon","gonn","gor","gorr","gour","gourke","gr","gra","gram","gray","gre","greg","grell","grey","gri","grim","gro","grom","gry","gryl","gu","gue","gur","gy","ha","hag","hak","ham","hamm","hammer","han","hann","hao","har","harg","harr","hart","has","hass","hassel","haw","he","hea","heart","hed","held","hes","hess","hi","hil","hill","ho","hole","holmes","hoo","hook","hop","hops","hor","houn","hu","hy","i","ia","iam","ian","iar","iat","ib","ic","ica","ick","id","iddle","ide","ider","ides","idge","idle","ie","ieg","ien","ienn","ier","if","ig","ight","ih","ij","ik","ika","il","ili","ilio","ill","illi","illio","illion"
  ],
  f: [
    "illo","illon","ilo","ilon","im","in","inch","ind","ine","ing","inn","io","ion","ip","iq","iqu","ir","ire","iron","irr","is","ise","iss","it","ith","itt","ity","iu","ius","iv","iw","ix","iy","iz","j'","ja","jaw","jax","je","jeff","ji","jo","jon","jor","ju","jy","ka","kal","kall","kan","kand","kar","kat","ke","kee","ken","kent","ker","ket","key","khan","ki","kil","kill","kim","kir","kit","kno","knos","knox","ko","koa","koth","kra","krane","kras","kri","ku","kur","ky","kyo","la","lach","lack","lag","lagg","lain","lainn","lam","lamm","lan","land","lann","lap","lar","larr","lat","latt","le","lee"
  ],
  g: [
    "lea","leaf","leb","lef","leff","leg","legg","lei","len","lenn","les","less","li","lia","liam","lias","lie","lin","ling","linn","lion","lis","lisa","lissa","lith","lli","llia","llo","llon","llow","llows","lo","lom","lon","long","lonn","lor","lorr","loud","low","lows","loz","lu","luck","luff","lund","lus","lux","ly","lys","ma","mab","mad","mag","mage","mal","mall","mam","man","mann","mant","mar","mari","marr","mars","marsh","mas","mason","mass","mau","maur","may","me","mee","meh","mehr","mel","meli","mell","mer","merch","mesh","met","mett","meu","mez","mi","mil","mill","min","mir","mire","mis","miss","mist","mo","mol","mold","moll","mon"
  ],
  h: [
    "moo","moon","mor","moran","more","morr","mott","mour","mu","muck","muk","mul","mull","mum","mun","mund","munn","munt","mus","muss","my","myr","mys","myst","na","nae","naeg","naen","nah","nak","nal","nall","nam","nar","nay","ne","ned","nek","nel","nell","net","nett","ni","nic","nil","nill","nis","nit","nitt","no","noa","nob","nobb","noon","nor","nore","norr","nos","noss","not","nott","nox","nu","nus","ny","nya","nym","o","oa","oak","oar","ob","oc","od","odd","oe","of","off","og","ogma","oh","oi","ois","oj","ok","ol","old","oll","om","on","ond","one","ong","oni","onn","oo","ood","ook","oon","op"
  ],
  i: [
    "opp","oq","oqu","or","ora","oran","ore","orm","orn","orne","oro","orr","orra","orran","orre","orro","os","osa","oss","ot","oth","other","ott","ou","oud","oun","our","ourke","ous","ouse","ouss","ov","ove","ow","owl","ows","ox","oy","oz","pa","pach","pal","pall","pam","pan","pann","par","para","parr","pe","pei","pel","pell","pen","penn","per","pera","perra","phan","phil","phill","phin","phina","phyr","pi","po","por","porr","pos","poy","ppi","pres","press","pu","pul","pull","pus","puss","put","putt","py","qi","qu","qua","quas","que","qui","quill","quo","quy","ra","rad","radd","rag","rain","ral","rall","ralt","ram","ramm"
  ],
  j: [
    "ran","rann","ranno","rano","rat","rate","ratt","ratz","ray","re","rea","reg","rel","rell","rem","ren","renn","reth","rey","rhi","rhin","rhine","rhinn","ri","ria","rial","riall","riar","rias","ric","rick","rid","ridd","ride","rider","ridge","rie","riel","riell","rielle","right","rik","ril","rill","rim","rin","rinn","rios","rious","ris","riss","risse","rit","ritt","rius","rix","ro","roa","roar","roark","rob","rod","rodd","rol","roll","rom","ron","rook","rop","rope","ropp","rora","ros","ross","rot","roth","rott","row","rrin","rrow","ru","rua","rul","rull","rust","rut","ruth","rutt","ry","ryd","ryde","ryder","ryk","s","sa","sag","sage","sagg","sai","saige"
  ],
  k: [
    "sail","sal","sall","sam","san","sann","sar","sarr","saul","say","sca","scan","se","seef","sef","sel","sell","seph","ser","sera","serr","sh","sha","shal","shall","shar","sharp","shin","sho","si","sia","sic","sig","sih","sil","sill","silver","sin","sirk","sit","sitt","sius","ska","sla","slat","slate","so","sol","soll","son","song","sopp","sou","sour","spar","sper","spor","ssaul","sta","stair","stal","star","ste","stee","sti","stil","still","sto","stone","stor","storm","storr","str","stra","strev","stry","su","sun","sur","surr","sy","ta","tac","tae","tal","tall","tan","tar","tars","tas","tass","tav","te","tek","tel","tell","tem","ter","th","tha"
  ],
  l: [
    "thad","tham","than","thann","thar","thari","tharr","thear","theo","ther","therr","they","thi","thia","thio","thion","tho","thon","thor","thorn","thorne","thr","thru","thrust","thur","thy","ti","tie","ties","tle","to","ton","tongue","tonn","tor","torr","tr","tra","trav","trax","tre","tred","tredd","tri","trig","tril","trill","tris","tru","ttle","tu","tue","tus","ty","u","ua","ub","uc","uck","ud","ue","uf","ug","uh","ui","uj","uk","ul","ulf","ull","um","umm","un","undo","unn","uo","up","uq","uqu","ur","urt","us","usk","uss","ust","ut","utt","uv","uw","ux","uy","uz","va","vad","val","vall","vam","van","vann","var"
  ],
  m: [
    "vas","vay","ve","veaux","ven","ver","vi","vic","vik","vil","vill","vit","vo","von","vri","vu","vy","wa","wahl","wal","walk","walker","wall","water","way","we","wen","wenn","when","whis","whisp","wi","wil","will","win","winn","wo","wolf","woo","wood","wor","worr","worth","wre","wren","wu","wul","wulf","wull","wy","wyll","wym","wyn","xa","xan","xe","xes","xi","xo","xu","y","ya","yal","yall","yam","yan","yax","ye","yi","yin","yo","yon","yr","yu","za","zah","zam","zar","zat","zav","zax","ze","zee","zeg","zegy","zep","zeph","zet","zett","zha","zhao","zi","zin","zo","zoa","zom","zu","zum","zy","zyr"
  ]
}

const nableX = ["","","","",""," "," "," "]

function randomString(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

function diceRoll(num) {
  return Math.floor(Math.random() * num) + 1;
}

function capitalLetter(str) {
  return str = str[0].toUpperCase() + str.substring(1);
}

function titleCase(str) {
  return str.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function nambleRoll() {
  let nambleName = "";
  let namble = "";

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

  for (i = 0; i < syllCount; i++) {
    var obj = Object.keys(nable);
    var key = randomString(obj);
    var value = nable[key];

    var nableJoin = randomString(nableX);
    nambleName = randomString(value);
    console.log(nableJoin);

    if (i == syllCount - 1) {
      namble += nambleName;
    } else {
      namble += nambleName + nableJoin;
    }
  }
  namble = titleCase(namble.replace(/[^\w\s]|(.)(?=\1{2})/gi, ""));
  return namble;
}

function varValue(val) {    
  let nambleArr = [];
  let i = 0;
  let text = "";

  while (i < val) {    
    nambleArr[i] = nambleRoll();
    i++;
  }

  for (let j = 0; j < nambleArr.length; j++) {
    text += nambleArr[j] + "<br>";
  }

  // console.log(nambleArr);
  document.querySelector(".output").innerHTML = "<p><b>" + text + "</b></p>";
}

function nameGen() {
  // let nameVal = Array.from(document.getElementsByClassName("radio-option"));
  let nameVal = Array.from(document.getElementsByClassName("rad-radio"));
  let val = "";
  nameVal.forEach(elem => {
    const option = elem.querySelector("input[type=radio]");
    if (option.checked) {
      val = option.value;
    }
  });
  varValue(val);
}