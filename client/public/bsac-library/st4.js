module.exports = {
  getQuestions: () => {
    return [
  "The partial pressure of nitrogen in a breath taken during a dive on air is 2.37 bar. What is the depth?",
  "What is the upper limit of partial pressure of oxygen for BSAC divers (without additional technical qualifications)?",
  "Use the BSAC Nitrox Tables to determine the partial pressure of oxygen at a depth of 25 metres for nitrox 25%.",
  "Calculate the partial pressure of oxygen at a depth of 25 metres for nitrox 25%. Do not use tables.",
  "You are going to dive an intact upright wreck which lies in 32 metres, with its highest point at 18m. What mix will allow you the longest safe dive time while visiting the whole of the wreck including the propellers and rudder?",
  "Which of the following are effects of nitrogen narcosis?",
  "Which of the following factors might contribute to nitrogen narcosis, or make it worse. Tick all that are relevant.",
  "Which one of the following factors MUST be present for the effects of nitrogen narcosis to be noticed?",
  "Which of the following are recommended ways to deal with the effects of nitrogen narcosis?",
  "What depth does BSAC recommend as the absolute limit for air diving?",
  "CNS toxicity can be caused by _______.",
  "If your CNS% after your first dive was 22.44% what should you consider it to be at the start of your next dive 3 hours later?",
  "You are on a liveaboard dive trip for a week and intend to miss the next dive. Your friend, who you have done some but not all the dives on the trip with, has a computer whose battery has failed. There is no spare, and he asks if he can borrow your computer. How should you answer (responsibly)?",
  "A few years ago a major UK travel company ran a TV advertisement showing a diver arriving at the airport for his flight home in full diving gear. They had to withdraw the advert because _______"
];
  },

  getAnswers: () => {
    let I = [];
    I[0]=[];I[0][0]=100;
    I[0][1]='';
    I[0][2]='0';
    I[0][3]=[];
    I[0][3][0]=['10.0 m','',0,0,1];
    I[0][3][1]=['12.37 m','',0,0,1];
    I[0][3][2]=['20.0 m','',1,100,1];
    I[0][3][3]=['23.7 m','',0,0,1];
    I[0][3][4]=['It is not possible to determine the depth from the information given','Oh yes it is!',0,0,1];
    I[1]=[];I[1][0]=100;
    I[1][1]='';
    I[1][2]='0';
    I[1][3]=[];
    I[1][3][0]=['No limit: oxygen is beneficial to divers','Wrong. Oxygen is harmful to divers if breathed at unsuitable partial pressures.',0,0,1];
    I[1][3][1]=['21%','No. The limit is an absolute pressure, not a percentage.',0,0,1];
    I[1][3][2]=['40%','No. The limit is an absolute pressure, not a percentage.',0,0,1];
    I[1][3][3]=['1.0 bar','No',0,0,1];
    I[1][3][4]=['1.4 bar','Correct. But divers holding recognised technical diving qualifications may exceed this: their pO2 for a depth less than or equal to 6m during the decompression phase must not exceed 1.6 bar.',1,100,1];
    I[1][3][5]=['1.6 bar','No. Divers who do not hold a suitable technical diving qualification should not exceed a pO2 of 1.4 bar for any chosen gas mix.',0,0,1];
    I[2]=[];I[2][0]=100;
    I[2][1]='';
    I[2][2]='0';
    I[2][3]=[];
    I[2][3][0]=['0.85','No. Round up not down.',0,0,1];
    I[2][3][1]=['0.875','No. This is the correct answer by calculation. The BSAC Nitrox Tables are in 3m increments, which forces you to round the depth to 27m giving a higher (more conservative) answer.',0,0,1];
    I[2][3][2]=['0.93','Correct. If you made a calculation you would get answer B, but the 3m increments in the tables force you to round the depth up.',1,100,1];
    I[2][3][3]=['1.00','No',0,0,1];
    I[2][3][4]=['1.40','No',0,0,1];
    I[3]=[];I[3][0]=100;
    I[3][1]='';
    I[3][2]='0';
    I[3][3]=[];
    I[3][3][0]=['0.85','No.',0,0,1];
    I[3][3][1]=['0.875','Correct. You will usually get a higher (more conservative) answer if you use tables, because rounding to the next higher depth or %age is required if the table doesn\'t show the exact values you want.',1,100,1];
    I[3][3][2]=['0.93','No. This is the answer if you use BSAC Nitrox Tables, which are in 3m increments, forcing you to round the depth to 27m giving this higher (more conservative) answer.',0,0,1];
    I[3][3][3]=['1.00','No',0,0,1];
    I[3][3][4]=['1.40','No',0,0,1];
    I[4]=[];I[4][0]=100;
    I[4][1]='';
    I[4][2]='0';
    I[4][3]=[];
    I[4][3][0]=['air','No. This is a safe mix, but you could breath a stronger one at the seabed without exceeding a PO2 of 1.4 bar.',0,0,1];
    I[4][3][1]=['nitrox 30%','No. This is a safe mix, but you could breath a stronger one at the seabed without exceeding a PO2 of 1.4 bar.',0,0,1];
    I[4][3][2]=['nitrox 31%','No. This is a safe mix, but you could breath a stronger one at the seabed without exceeding a PO2 of 1.4 bar.',0,0,1];
    I[4][3][3]=['nitrox 32%','No. This is a safe mix, but you could breath a stronger one at the seabed without exceeding a PO2 of 1.4 bar.',0,0,1];
    I[4][3][4]=['nitrox 33%','Correct. PO2 at the seabed = 0.33x4.2 = 1.386',1,100,1];
    I[4][3][5]=['nitrox 34%','No. You will exceed your maximum PO2',0,0,1];
    I[4][3][6]=['nitrox 35%','No. You will exceed your maximum PO2',0,0,1];
    I[4][3][7]=['nitrox 36%','No. You will exceed your maximum PO2',0,0,1];
    I[5]=[];I[5][0]=100;
    I[5][1]='';
    I[5][2]='0';
    I[5][3]=[];
    I[5][3][0]=['Jane','No: the heart and brain are fast tissues',0,0,1];
    I[5][3][1]=['Dave','No: off gassing continues on surfacing because the partial pressure of nitrogen in the tissues is higher than atmospheric pressure',0,0,1];
    I[5][3][2]=['Both Dave and Jane','No',0,0,1];
    I[5][3][3]=['Neither of them','Correct',1,100,1];
    I[6]=[];I[6][0]=100;
    I[6][1]='';
    I[6][2]='3';
    I[6][3]=[];
    I[6][3][0]=['Quick response to buddy signals','Usually narced divers are not alert (but may think they are) : slow to respond to signals, and prone to make errors',0,0,1];
    I[6][3][1]=['Making errors when reading gauges and making choices','Usually narced divers are not alert (but may think they are) : slow to respond to signals, and prone to make errors',1,100,1];
    I[6][3][2]=['Being very alert','Usually narced divers are not alert (but may think they are) : slow to respond to signals, and prone to make errors',0,0,1];
    I[6][3][3]=['Sticking to the agreed dive plan','Narced divers often abandon their dive plan, through over confidence or poor judgement',0,0,1];
    I[6][3][4]=['Feeling confident','Narced divers often abandon their dive plan, through over confidence or poor judgement',1,100,1];
    I[6][3][5]=['Continually monitoring your buddy for narcosis signs','Continual buddy monitoring is usually a sign of being in control, though it could be driven by narcosis induced anxiety',0,0,1];
    I[6][3][6]=['Feeling dizzy, seeing stars, hallucinations','Dizziness and visual disturbances can be a sign of narcosis',1,100,1];
    I[6][3][7]=['Task fixation','Concentrating on one task to the exclusion of all others is a common and dangerous effect of narcosis',1,100,1];
    I[7]=[];I[7][0]=100;
    I[7][1]='';
    I[7][2]='3';
    I[7][3]=[];
    I[7][3][0]=['Depths less than 20m','Deep dives contribute to narcosis, but not shallow ones',0,0,1];
    I[7][3][1]=['Depths over 30m','Deep dives contribute to narcosis, but not shallow ones',1,100,1];
    I[7][3][2]=['Using nitrox 32% instead of air','Nitrox does not contribute to narcosis more than air, or weaker mixes',0,0,1];
    I[7][3][3]=['Hard work underwater','Cold, scarey and strenuous conditions can make narcosis worse',1,100,1];
    I[7][3][4]=['Darkness','Cold, scarey and strenuous conditions can make narcosis worse',1,100,1];
    I[7][3][5]=['Cold','Cold, scarey and strenuous conditions can make narcosis worse',1,100,1];
    I[7][3][6]=['Prior consumption of alcohol','Don\'t drink and dive',1,100,1];
    I[7][3][7]=['Wearing a comfortable new drysuit','Feeling comfortable in your new suit is unlikely to make narcosis worse',0,0,1];
    I[7][3][8]=['Using nitrox 36% instead of nitrox 32%','Nitrox does not contribute to narcosis more than air, or weaker mixes',0,0,1];
    I[8]=[];I[8][0]=100;
    I[8][1]='';
    I[8][2]='0';
    I[8][3]=[];
    I[8][3][0]=['Depths less than 10m','No. Narcosis occurs on deeper dives, but not shallow ones',0,0,1];
    I[8][3][1]=['Depths of about 30m or more','Correct. Narcosis occurs on deeper dives, but not shallow ones',1,100,1];
    I[8][3][2]=['Using nitrox 32% instead of air','No. This will not cause narcosis',0,0,1];
    I[8][3][3]=['Hard work underwater','No. This will not cause narcosis on a shallow dive',0,0,1];
    I[8][3][4]=['Darkness','No. This will not cause narcosis on a shallow dive',0,0,1];
    I[8][3][5]=['Cold','No. This will not cause narcosis on a shallow dive',0,0,1];
    I[8][3][6]=['Prior consumption of alcohol','No. This will not cause narcosis on a shallow dive. But it is a bad idea: don\'t drink and dive',0,0,1];
    I[8][3][7]=['Wearing a comfortable new drysuit','No. This will not cause narcosis',0,0,1];
    I[8][3][8]=['Using nitrox 36% instead of nitrox 32%','No. This will not cause narcosis',0,0,1];
    I[9]=[];I[9][0]=100;
    I[9][1]='';
    I[9][2]='3';
    I[9][3]=[];
    I[9][3][0]=['Rapid descent','Rapid descents often make narcosis worse',0,0,1];
    I[9][3][1]=['Physical fitness','Fit divers cope better',1,100,1];
    I[9][3][2]=['Mental fitness','Fit divers cope better',1,100,1];
    I[9][3][3]=['Ascend to a shallower depth','Ascent is normally the safest and most effective option',1,100,1];
    I[9][3][4]=['Avoid task fixation','Task fixation is dangerous',1,100,1];
    I[9][3][5]=['Progressive build-up of depth experience','Progressive acclimatisation to depth lets you learn your own response and coping strategies relatively safely',1,100,1];
    I[9][3][6]=['Monitor your buddy closely','If you are narced your buddy probably is as well',1,100,1];
    I[10]=[];I[10][0]=100;
    I[10][1]='';
    I[10][2]='0';
    I[10][3]=[];
    I[10][3][0]=['20 metres','No. This is the recommended limit for Sports Divers under training.',0,0,1];
    I[10][3][1]=['35 metres','No. This is the recommended limit for Sports DIvers after depth progression.',0,0,1];
    I[10][3][2]=['40 metres','No, though some other agencies have this as their limit.',0,0,1];
    I[10][3][3]=['50 metres','Correct. Beyond this depth narcosis is severe. In the UK 50m is also the legal limit for commercial air diving operations.',1,100,1];
    I[10][3][4]=['60 metres','',0,0,1];
    I[11]=[];I[11][0]=100;
    I[11][1]='';
    I[11][2]='0';
    I[11][3]=[];
    I[11][3][0]=['Using air as a breathing gas in preference to nitrox','No',0,0,1];
    I[11][3][1]=['Breathing high partial pressures of nitrogen','No',0,0,1];
    I[11][3][2]=['Breathing high partial pressures of oxygen','Correct',1,100,1];
    I[11][3][3]=['Missed decompression stops','No',0,0,1];
    I[11][3][4]=['A neck seal that is too tight','No',0,0,1];
    I[12]=[];I[12][0]=100;
    I[12][1]='';
    I[12][2]='0';
    I[12][3]=[];
    I[12][3][0]=['44.88%','No. CNS% halves after each 2 hour interval. No credit is given for intervals of less than 2 hours.',0,0,1];
    I[12][3][1]=['22.44%','No. CNS% halves after each 2 hour interval. No credit is given for intervals of less than 2 hours.',0,0,1];
    I[12][3][2]=['11.22%','Correct.',1,100,1];
    I[12][3][3]=['5.61%','No. CNS% halves after each 2 hour interval. No credit is given for intervals of less than 2 hours.',0,0,1];
    I[13]=[];I[13][0]=100;
    I[13][1]='';
    I[13][2]='0';
    I[13][3]=[];
    I[13][3][0]=['22 minutes','No that\'s the bottom time',0,0,1];
    I[13][3][1]=['25 minutes','Correct',1,100,1];
    I[13][3][2]=['28 minutes','No that includes the stop time at 6 metres',0,0,1];
    I[13][3][3]=['29 minutes','No that\'s the elapsed time for the entire dive',0,0,1];
    I[14]=[];I[14][0]=100;
    I[14][1]='';
    I[14][2]='0';
    I[14][3]=[];
    I[14][3][0]=['A decompression stop at 9 metres','No. No decompression is required, and the depth during this period is 6m not 9m',0,0,1];
    I[14][3][1]=['A safety stop at 9 metres','No. The depth during this period is 6m not 9m',0,0,1];
    I[14][3][2]=['A decompression stop at 6 metres','No. No decompression is required',0,0,1];
    I[14][3][3]=['A safety stop at 6 metres','Correct. A safety stop is almost always a good idea, but not mandatory',1,100,1];
    I[15]=[];I[15][0]=100;
    I[15][1]='';
    I[15][2]='0';
    I[15][3]=[];
    I[15][3][0]=['Yes: you don\'t need it so it\'s not a problem for your buddy to use it','No. It\'s unsafe for him to use it',0,0,1];
    I[15][3][1]=['Yes: because he has done broadly similar dives to you, though his were for a longer duration, it will be OK to use it','No. He will have absorbed more nitrogen than your computer knows about',0,0,1];
    I[15][3][2]=['Yes: because all the diving has been in 15m or less','No. You can still get DCI on shallow dives',0,0,1];
    I[15][3][3]=['No: he might not understand the display','No. Right answer, wrong reason: he already uses a computer so it would be easy to explain any differences in the display. Dive computers are designed to be user friendly.',0,0,1];
    I[15][3][4]=['No: your computer has not got his previous dives logged and might underestimate his decompression requirements','Correct',1,100,1];
    I[16]=[];I[16][0]=100;
    I[16][1]='';
    I[16][2]='0';
    I[16][3]=[];
    I[16][3][0]=['They were not a specialist firm organising diving holidays','No. They weren\'t advertising diving holidays, they were implying that their holidays were so good that people would not want to come home.',0,0,1];
    I[16][3][1]=['Divers\' knives (shown in the advert) are a security risk and are not allowed','No',0,0,1];
    I[16][3][2]=['Diving before flying means that it would not be possible to drink alcohol on the return flight','No. Happily, it is OK to enjoy a beer after a dive (provided you are not diving again that day)',0,0,1];
    I[16][3][3]=['Any period spent at reduced pressure or altitude immediately after a dive will put the diver at greater risk of DCI','Correct. They were tempting ill-informed divers to fly too soon after diving',1,100,1];
    return I;
  }
};