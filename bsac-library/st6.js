module.exports = {
  getQuestions: () => {
    return [
  "During the club meeting you overhear Jane and Dave discussing dive leading. Jane says if you are a Sports Diver diving with an Advanced Diver who doesn't know the site but you know it well, you can lead. Dave says that passing on good diving practice is an instructor's job, not a dive leader's. Who is correct?",
  "During the overheard conversation from the previous question, Jane also says that the Dive Manager decides the maximum depth of each buddy pair's dive. Dave says that only Dive Leaders and above can lead Ocean Divers. Who is correct?",
  "Jane's and Dave's overheard conversation from the previous questions continues. Jane reckons that if you always dive with the same buddy, and you both always use the same kit, you don't need to do a buddy check. Dave insists that the dive leader should check that their buddy has an adequate breathing gas supply, no matter how highly qualified and experienced the buddy is: even a National Instructor! Who is correct?",
  "Well_______trained Sports Divers should not suffer from poor buoyancy control, dangling pieces of equipment, incompetence in using new equipment, or kicking up silt due to bad finning or trim. But if a dive leader did exhibit ANY of these faults on a normal dive, what effect would it have on their buddy?",
  "What must you do if you recover wreckage?",
  "You overhear Dave and Jane again. Jane reckons that many experienced divers are overcautious: you should push them to do dives that they think are a bit too challenging for them, otherwise they never improve. Dave thinks that it is best to extend your own experience gradually. Who is right?",
  "Closed circuit rebreathers _______.",
  "What are the advantages of closed circuit rebreathers compared with open circuit equipment?",
  "Which of the following are acceptable when an open circuit (OC) diver is diving with a rebreather (RB) diver? See Student Notes pp106_______107",
  "The next grade after Sports Diver in the Diver Training Programme is _______.",
  "As a Sports Diver, and if you are interested in instructing, you can begin training as a BSAC Instructor by attending the _______."
];
  },

  getAnswers: () => {
    let I = [];
    I[0]=[];I[0][0]=100;
    I[0][1]='';
    I[0][2]='0';
    I[0][3]=[];
    I[0][3][0]=['Jane','Correct. It often makes sense for someone who knows the site to lead, and it doesn\'t have to be the most senior diver who is the leader. Ultimately it\'s a matter for agreement between the buddy pair.',1,100,1];
    I[0][3][1]=['Dave','No. As dive leader, you are a role model. You should demonstrate good practice.',0,0,1];
    I[0][3][2]=['Both of them','No. Dave is wrong. As dive leader, you are a role model. You should demonstrate good practice.',0,0,1];
    I[0][3][3]=['Neither of them','No. Jane is right. It makes sense for someone who knows the site to lead.',0,0,1];
    I[1]=[];I[1][0]=100;
    I[1][1]='';
    I[1][2]='0';
    I[1][3]=[];
    I[1][3][0]=['Jane','No. The DM might set an overall maximum, but you don\'t have to go there. If the dive leader feels it is inappropriate for themselves or their buddy they can plan a shallower maximum.',0,0,1];
    I[1][3][1]=['Dave','No. Sports Divers and above can dive with Ocean Divers.',0,0,1];
    I[1][3][2]=['Both of them','No. The DM might set an overall maximum, but you don\'t have to go there. If the dive leader feels it is innappropriate for themselves or their buddy they can plan a shallower maximum.  Sports Divers and above can dive with Ocean Divers.',0,0,1];
    I[1][3][3]=['Neither of them','Correct',1,100,1];
    I[2]=[];I[2][0]=100;
    I[2][1]='';
    I[2][2]='0';
    I[2][3]=[];
    I[2][3][0]=['Jane','No. The buddy check isn\'t just to familiarise you with each other\'s kit; it\'s to ensure it is working and connected up properly.',0,0,1];
    I[2][3][1]=['Dave','Correct. Most highly qualified buddies would be distinctly unimpressed if you didn\'t establish (respectfully) that they have enough gas.',1,100,1];
    I[2][3][2]=['Both of them','No. Jane is wrong. The buddy check isn\'t just to familiarise you with each other\'s kit; it\'s to ensure it is working and connected up properly.',0,0,1];
    I[2][3][3]=['Neither of them','No. Dave is correct. Most highly qualified buddies would be distinctly unimpressed if you didn\'t establish (respectfully) that they have enough gas.',0,0,1];
    I[3]=[];I[3][0]=100;
    I[3][1]='';
    I[3][2]='0';
    I[3][3]=[];
    I[3][3][0]=['Elevated risk of buoyant ascent','Only entanglement in equipment incompetently deployed by the dive leader is likely to cause the buddy to make a buoyant ascent.',0,0,1];
    I[3][3][1]=['Elevated risk of entanglement','Poor buoyancy control or kicking up silt are not likely to entangle the buddy.',0,0,1];
    I[3][3][2]=['Risk of damage to the environment','No. This is not an effect on the buddy.',0,0,1];
    I[3][3][3]=['Loss of confidence in the their dive leader','Correct. As a dive leader you are a role model, and your buddy will expect you to be competent (unless you are under training and your buddy is the instructor/more experienced diver).',1,100,1];
    I[3][3][4]=['All of the above','No. Most consequences above only apply to one or two faults, and not all apply to the buddy either.',0,0,1];
    I[4]=[];I[4][0]=100;
    I[4][1]='';
    I[4][2]='0';
    I[4][3]=[];
    I[4][3][0]=['Report it to the Diving Officer','No. You must report it, but not to the DO . However it may be a courtesy to tell the DO.',0,0,1];
    I[4][3][1]=['Report it to the Police','No. You must report it, but not to the Police',0,0,1];
    I[4][3][2]=['Report it to the Receiver of Wreck','Correct',1,100,1];
    I[4][3][3]=['Nothing, unless it is less than 100 years old','No. You must report what you recover (unless you own it) regardless of its age.',0,0,1];
    I[4][3][4]=['Throw it back, all wreck belongs to someone and to removing it will result in prosecution if you are caught','No. Usually it is legal to remove stuff as long as you report it (but there are exceptions eg certain designated military, dangerous and historic wrecks)',0,0,1];
    I[5]=[];I[5][0]=100;
    I[5][1]='';
    I[5][2]='0';
    I[5][3]=[];
    I[5][3][0]=['Dave','Correct. Jane is wrong: divers outside their comfort zone underwater are in dangerous territory. Remember the Incident Pit. It is important to extend experience a bit at a time.',1,100,1];
    I[5][3][1]=['Jane','No. Jane is wrong: divers outside their comfort zone underwater are in dangerous territory. Remember the Incident Pit. In any case, it is arrogant to assume that because you want challenge all divers do - people dive for all sorts of different reasons.',0,0,1];
    I[5][3][2]=['Both of them','No. Dave is right but Jane is wrong: divers outside their comfort zone underwater are in dangerous territory. Remember the Incident Pit. In any case, it is arrogant to assume that because you want challenge all divers do - people dive for all sorts of different reasons.',0,0,1];
    I[5][3][3]=['Neither of them','No. Jane is wrong but Dave is right: it is important to extend experience a bit at a time. Underwater on the most challenging dive you have done is not a good place to find out you lack the skills needed to do it safely.',0,0,1];
    I[6]=[];I[6][0]=100;
    I[6][1]='';
    I[6][2]='0';
    I[6][3]=[];
    I[6][3][0]=['Never emit bubbles','No. Ascent will cause the gas in the breathing loop to expand, causing an increase in buoyancy unless the excess gas is vented. Vented gas = bubbles.',0,0,1];
    I[6][3][1]=['Emit bubbles during the ascent','Correct. Ascent causes the gas in the breathing loop to expand. It must be vented to maintain neutral buoyancy.',1,100,1];
    I[6][3][2]=['Require excess gas to be vented off periodically, at all stages of the dive','No. The replenishment of oxygen consumed by respiration is electronically controlled and does not normally lead to excess gas in the CCR breathing loop. SCRs are less automated, and do require periodic venting.',0,0,1];
    I[6][3][3]=['Provide a constant nitrox mix throughout the dive','No. The electronics adjust the mix to maintain an optimum PO2 throughout the dive, which means that the actual nitrox mix varies with depth.',0,0,1];
    I[6][3][4]=['Look after themselves','No. Quite the opposite. CCRs require meticulous preparation, monitoring, and maintenance.',0,0,1];
    I[7]=[];I[7][0]=100;
    I[7][1]='';
    I[7][2]='3';
    I[7][3]=[];
    I[7][3][0]=['Lower running costs','Rebreathers are high maintenance',0,0,1];
    I[7][3][1]=['Ease of use','Rebreathers need extra training, lots of practice, and rigorous dive discipline',0,0,1];
    I[7][3][2]=['Extended dive times','CCRs deliver optimum mixes, maximising dive times and minimising deco times',1,100,1];
    I[7][3][3]=['Efficient gas utilisation','Rebreathers do not waste the unused O2 in exhaled gas',1,100,1];
    I[7][3][4]=['No bailout required','Rebreathers should have an adequate bailout for the type of diving being undertaken.',0,0,1];
    I[7][3][5]=['No bubbles to frighten marine life','CCRs produce no bubbles, most of the time',1,100,1];
    I[7][3][6]=['Lower purchase cost','',0,0,1];
    I[8]=[];I[8][0]=100;
    I[8][1]='';
    I[8][2]='0';
    I[8][3]=[];
    I[8][3][0]=['A Dive Leader using a rebreather takes a Sports Diver on a depth progression dive to 35 metres','No. Both divers must be experienced in the type of diving conditions for the planned dive.',0,0,1];
    I[8][3][1]=['The dive plan must be based on the decompression schedule and MOD of the OC diver','No, not necessarily. For example if the OC diver was using air, and the RB diver was using Nitrox 36, the dive plan should follow the RB diver\'s MOD. Use the most conservative MOD and deco schedule, whichever diver it arises from.',0,0,1];
    I[8][3][2]=['If this is the first time the OC diver has dived with an RB buddy, the RB diver must explain how to perform a rescue','No. Explanation alone is not enough. Rescue skills must be practiced.',0,0,1];
    I[8][3][3]=['The OC diver must be able to recognise underwater problems pertinent to RB divers','Correct.',1,100,1];
    I[8][3][4]=['All of the above','No. Check the other answers above for advice on why some of them are wrong.',0,0,1];
    I[9]=[];I[9][0]=100;
    I[9][1]='';
    I[9][2]='0';
    I[9][3]=[];
    I[9][3][0]=['Advanced Nitrox Diver','No. The DTP excludes technical grades such as Advanced Nitrox Diver. AND is a specialised qualification dealing with one aspect of personal diving skill. The next DTP grades Dive Leader and Advanced Diver are much broader and include a wide range of planning, management, and rescue skills.',0,0,1];
    I[9][3][1]=['Sports Mixed Gas Diver','No. The DTP excludes technical grades. In any case, Extended Range Diver (or equivalent) is a pre-requisite for the Sports Mixed Gas Diver courses.',0,0,1];
    I[9][3][2]=['Dive Leader','Correct.',1,100,1];
    I[9][3][3]=['CCR Diver','No. The DTP excludes technical grades. In any case, Advanced Nitrox Diver (or equivalent) is a pre-requisite for the CCR Diver course.',0,0,1];
    I[9][3][4]=['Open Water Instructor','No. The DTP excludes instructor grades. In any case, you must be a Dive Leader to become an OWI.',0,0,1];
    I[10]=[];I[10][0]=100;
    I[10][1]='';
    I[10][2]='0';
    I[10][3]=[];
    I[10][3][0]=['Instructor Foundation Course','Correct',1,100,1];
    I[10][3][1]=['Instructor Induction Programme','No. The IIP is for people who already hold instructor qualifications with other agencies.',0,0,1];
    I[10][3][2]=['Open Water Instructor Course','No. You have to have done an IFC and be a Dive Leader to join an OWIC.',0,0,1];
    I[10][3][3]=['Theory Instructor Examination','No. You have to have done the IFC and be a Dive Leader first.',0,0,1];
    I[10][3][4]=['Practical Instructor Examination','No. You have to do the OWIC first.',0,0,1];
    return I;
  }
};