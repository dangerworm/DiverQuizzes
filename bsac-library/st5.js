module.exports = {
  getQuestions: () => {
    return [
  "If you begin your dive with 210 bar of gas in your cylinder, what is the minimum amount of gas (in bar) should you plan to have left on reaching the surface at the end of your dive? Type only figures in the box. The question will revert to multiple choice after 3 attempts.",
  "Which surface breathing rate should you use when calculating the amount of gas required for a dive?",
  "Which of the following can increase breathing rates?",
  "Your surface breathing rate is 20 litres per minute. How much breathing gas (in litres) is required for a dive to 30 metres for 20 minutes? Type only figures in the box. You will be shown the worked answer after 3 attempts.",
  "You plan to dive to 28 metres for 22 minutes with a surface breathing rate of 25 litres per minute. You have a choice of 10L, 12L, 12.5L, and 15L cylinders each filled to 220 bar. Which is the smallest cylinder that contains enough gas for the dive?",
  "What breathing rate (expressed as litres per minute at the surface) are you advised to expect during the initial phases of an emergency?",
  "How long (in minutes) would the gas in a 3L cylinder filled to 200 bar last in an emergency at 30 metres if the user's breathing rate (surface) was 50 litres per minute? Type only figures in the box. You will be shown the worked answer after 3 attempts.",
  "Which of the following AS configurations protects the wearer completely against 1st stage failure?",
  "Which of the following AS configurations leaves both divers breathing from the same cylinder when it's in use?",
  "What sort of regulator second stage is suitable for use as an octopus?",
  "What sort of first stage is required for use with an octopus system?"
];
  },

  getAnswers: () => {
    let I = [];
    I[0]=[];I[0][0]=100;
    I[0][1]='';
    I[0][2]='2';
    I[0][3]=[];
    I[0][3][0]=['50','',0,0,1];
    I[0][3][1]=['52.5','',0,0,1];
    I[0][3][2]=['70','',1,100,1];
    I[0][3][3]=['140','',0,0,1];
    I[1]=[];I[1][0]=100;
    I[1][1]='';
    I[1][2]='0';
    I[1][3]=[];
    I[1][3][0]=['25 litres per minute','Not the answer. 25 l/min is a good guide if you don\'t know your personal rate - but as an aspiring SD you should know your personal rate.',0,0,1];
    I[1][3][1]=['your actual surface breathing rate','Correct',1,100,1];
    I[1][3][2]=['your actual surface breathing rate or 25 litres per minute, whichever is the higher','No. If you know your personal rate use it.',0,0,1];
    I[1][3][3]=['your actual surface breathing rate or 25 litres per minute, whichever is the lower','No. If you know your personal rate use it.',0,0,1];
    I[2]=[];I[2][0]=100;
    I[2][1]='';
    I[2][2]='0';
    I[2][3]=[];
    I[2][3][0]=['Physical size','Not just this',0,0,1];
    I[2][3][1]=['Fitness level','Not just this',0,0,1];
    I[2][3][2]=['Energy output','Not just this',0,0,1];
    I[2][3][3]=['Body temperature','Not just this',0,0,1];
    I[2][3][4]=['Nervousness','Not just this',0,0,1];
    I[2][3][5]=['All of the above','',1,100,1];
    I[3]=[];I[3][0]=100;
    I[3][1]='';
    I[3][2]='2';
    I[3][3]=[];
    I[3][3][0]=['2400','Correct',1,100,0];
    I[3][3][1]=['20 (breathing rate) x 4 (pressure) x 20 (time) = 1600 add 50% reserve = 2400 litres','It\'s the right answer but you don\'t get a mark!',0,0,1];
    I[3][3][2]=['1600','Have you forgotten the reserve?',0,0,0];
    I[3][3][3]=['1200','Have you set the pressure as 3 bar, and forgotten the reserve?',0,0,0];
    I[3][3][4]=['1800','Have you taken the pressure as 3 bar? It should be 4.',0,0,0];
    I[4]=[];I[4][0]=100;
    I[4][1]='';
    I[4][2]='0';
    I[4][3]=[];
    I[4][3][0]=['10L','No. You will breathe 25x3.8x22=2090 litres and require a further 50% for reserve making 3135 litres in total. A 10L cylinder filled to 220 bar only holds 2200 litres, which is barely enough for normal breathing, let alone the reserve.',0,0,1];
    I[4][3][1]=['12L','No. You will breathe 25x3.8x22=2090 litres and require a further 50% for reserve making 3135 litres in total. A 12L cylinder filled to 220 bar only holds 2640 litres.',0,0,1];
    I[4][3][2]=['12.5L','No. You will breathe 25x3.8x22=2090 litres and require a further 50% for reserve making 3135 litres in total. A 12.5L cylinder filled to 220 bar only holds 2750 litres.',1,100,1];
    I[4][3][3]=['15L','Correct. You will breathe 25x3.8x22=2090 litres and require a further 50% for reserve making 3135 litres in total. A 15L cylinder filled to 220 bar holds 3300 litres, which is enough.',1,100,1];
    I[5]=[];I[5][0]=100;
    I[5][1]='';
    I[5][2]='0';
    I[5][3]=[];
    I[5][3][0]=['Your normal breathing rate','No, higher. And don\'t forget it might be your buddy who has the emergency.',0,0,1];
    I[5][3][1]=['double your normal breathing rate','No',0,0,1];
    I[5][3][2]=['25 litres per minute','No',0,0,1];
    I[5][3][3]=['50 litres per minute','Correct. This rate frequently occurs during emergencies. Even higher rates have been reported.',1,100,1];
    I[5][3][4]=['100 litres per minute','Ok. You can have the mark. The Student Workbook suggests 50 l/min, but even higher rates have been reported.',1,100,1];
    I[6]=[];I[6][0]=100;
    I[6][1]='';
    I[6][2]='2';
    I[6][3]=[];
    I[6][3][0]=['3 minutes','Correct. It isn\'t long is it?',1,100,0];
    I[6][3][1]=['Cylinder contains 3x200=600 litres Breathing rate at 30m = 50x4 = 200 litres per minute Gas will last 600/200=3 minutes','It\'s the right answer but you don\'t get a mark!',0,0,1];
    I[7]=[];I[7][0]=100;
    I[7][1]='';
    I[7][2]='3';
    I[7][3]=[];
    I[7][3][0]=['Octopus','If there\'s only one first stage in the system, there\'s no protection if it fails',0,0,1];
    I[7][3][1]=['BC demand valve','If there\'s only one first stage in the system, there\'s no protection if it fails',0,0,1];
    I[7][3][2]=['2 independent regulators/single cylinder','If there\'s more than one first stage in the system, there\'s protection if one fails shut, but not if there\'s a massive gas leak',0,0,1];
    I[7][3][3]=['manifolded twin cylinders','If there\'s more than one first stage in the system, there\'s protection if one fails shut, but not if there\'s a massive gas leak',0,0,1];
    I[7][3][4]=['manifolded twin cylinders with isolation valve','If there\'s more than one first stage in the system, there\'s protection if it fails',1,100,1];
    I[7][3][5]=['independent twin cylinders','If there\'s more than one first stage in the system, there\'s protection if it fails',1,100,1];
    I[8]=[];I[8][0]=100;
    I[8][1]='';
    I[8][2]='3';
    I[8][3]=[];
    I[8][3][0]=['Octopus','Octopus and primary DV are connected to the same cylinder',1,100,1];
    I[8][3][1]=['BC demand valve','BCDV and  primary DV are connected to the same cylinder',1,100,1];
    I[8][3][2]=['2 independent regulators/single cylinder','Unless regulators are connected to different cylinders, both divers share the same gas source',1,100,1];
    I[8][3][3]=['single cylinder plus pony','single + pony = 2 cylinders',0,0,1];
    I[8][3][4]=['independent twin cylinders','single + single = 2  independent cylinders',0,0,1];
    I[9]=[];I[9][0]=100;
    I[9][1]='';
    I[9][2]='0';
    I[9][3]=[];
    I[9][3][0]=['An old but still functioning one','No. It may not be used often, if at all, but in an emergency flawless performance is required',0,0,1];
    I[9][3][1]=['A new budget model','Only if it matches the primary DV',0,0,1];
    I[9][3][2]=['A high performance model','Only if it matches the primary DV',0,0,1];
    I[9][3][3]=['One of similar performance to the primary second stage','Correct',1,100,1];
    I[10]=[];I[10][0]=100;
    I[10][1]='';
    I[10][2]='0';
    I[10][3]=[];
    I[10][3][0]=['Any regulator provided it is in good condition','No. When 2 divers are under stress there will be a very high ventilatory demand. Only high performance regulators are suitable.',0,0,1];
    I[10][3][1]=['A new one','No. When 2 divers are under stress there will be a very high ventilatory demand. Only high performance regulators are suitable. New doesn\'t necessarily mean high performance: it depends on the design.',0,0,1];
    I[10][3][2]=['A high performance one','Correct',1,100,1];
    I[10][3][3]=['An environmentally sealed one','No, not necessarily. Environmentally sealed regulators are useful in cold conditions, but the key requirement is that only a high performance regulator can meet the very high ventilatory demand when 2 divers are under stress.',0,0,1];
    return I;
  }
};