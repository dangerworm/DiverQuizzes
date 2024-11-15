module.exports = {
  getQuestions: () => {
    return [
  "Going with the flow of the current is generally known as _______ diving.",
  "When do Spring tides occur? Check all boxes that are correct.",
  "Which diagram corresponds to a neap tide?",
  "What abbreviation is used for the point of maximum depth during the tide cycle?",
  "In most places around the UK, if there is a high tide at 09:00 hours, at what time approximately will the next one occur?",
  "If the depth at LW is 10 metres and the tidal range is 5 metres, what is the depth at HW?",
  "When the tide is rising it is said to be on the _______.",
  "The period when a tidal current slows down and reverses is known as _______.",
  "Which of the following are reasons why static sites are best dived at slack water?",
  "Ground swell is a backwards and forwards or side-to-side motion felt on the seabed caused by _______?",
  "Which of the following can lead to reduced underwater visibility? Check all that apply.",
  "Which of the following significantly affects water temperature? Check all that apply.",
  "What causes the water temperature to be higher on the west coast of the UK than on the east?",
  "If you are weighted for neutral buoyancy in fresh water, what will you need to do when diving in the sea with the same equipment?",
  "Which of the following can make it difficult to see divers or their surface markers?",
  "Which of the following lines up with the advice given about boat diving? Check all that apply.",
  "How should you surface at a dive site where there is a lot of boat traffic?",
  "Where can you obtain knowledge of the conditions at a dive site?",
  "As a final precaution before a dive you should make a _______.",
  "Know your _______."
];
  },

  getAnswers: () => {
    let I = [];
    I[0]=[];I[0][0]=100;
    I[0][1]='';
    I[0][2]='0';
    I[0][3]=[];
    I[0][3][0]=['Sport','',0,0,1];
    I[0][3][1]=['Technical','',0,0,1];
    I[0][3][2]=['Ocean','',0,0,1];
    I[0][3][3]=['Drift','',1,100,1];
    I[0][3][4]=['Reef','',0,0,1];
    I[1]=[];I[1][0]=100;
    I[1][1]='';
    I[1][2]='3';
    I[1][3]=[];
    I[1][3][0]=['at full moon','You have missed something',1,100,1];
    I[1][3][1]=['at first quarter moon','Neaps occur at quarter moon',0,0,1];
    I[1][3][2]=['at third quarter moon','Neaps occur at quarter moon',0,0,1];
    I[1][3][3]=['roughly every 14 days','You have missed something',1,100,1];
    I[1][3][4]=['at new moon','You have missed something',1,100,1];
    I[1][3][5]=['roughly a week after a Neap tide','You have missed something',1,100,1];
    I[2]=[];I[2][0]=100;
    I[2][1]='';
    I[2][2]='0';
    I[2][3]=[];
    I[2][3][0]=['<img src="ST1_moon.jpg" alt="ST1_moon.jpg" title="ST1_moon" width="224" height="210" style="display: block; margin-left: auto; margin-right: auto; text-align: center;"></img>','No. This diagram doesn\'t include the sun.',0,0,1];
    I[2][3][1]=['<img src="ST1_neaps.jpg" alt="ST1_neaps.jpg" title="ST1_neaps" width="446" height="244" style="display: block; margin-left: auto; margin-right: auto; text-align: center;"></img>','Correct. The sun and moon are at right angles.',1,100,1];
    I[2][3][2]=['<img src="ST1_springs.jpg" alt="ST1_springs.jpg" title="ST1_springs" width="443" height="232" style="display: block; margin-left: auto; margin-right: auto; text-align: center;"></img>','No. This is a spring tide, when the  sun and moon are in line.',0,0,1];
    I[3]=[];I[3][0]=100;
    I[3][1]='';
    I[3][2]='0';
    I[3][3]=[];
    I[3][3][0]=['CD','No. This is Chart Datum, which you will learn about in the Dive Leader course.',0,0,1];
    I[3][3][1]=['HW','Correct. This is High Water.',1,100,1];
    I[3][3][2]=['LW','No. This is Low Water.',0,0,1];
    I[3][3][3]=['Np','No. This stands for Neaps.',0,0,1];
    I[3][3][4]=['Sp','No. This stands for Springs.',0,0,1];
    I[4]=[];I[4][0]=100;
    I[4][1]='';
    I[4][2]='0';
    I[4][3]=[];
    I[4][3][0]=['12:00','No',0,0,1];
    I[4][3][1]=['15:00','No. This will be LW',0,0,1];
    I[4][3][2]=['18:00','No',0,0,1];
    I[4][3][3]=['21:00','Correct. In roughly 12 hours.',1,100,1];
    I[4][3][4]=['09:00 next day','No This would be the next HW but one, approximately.',0,0,1];
    I[5]=[];I[5][0]=100;
    I[5][1]='';
    I[5][2]='0';
    I[5][3]=[];
    I[5][3][0]=['5 metres','No',0,0,1];
    I[5][3][1]=['10 metres','No',0,0,1];
    I[5][3][2]=['15 metres','Correct. HW = LW + tidal range',1,100,1];
    I[5][3][3]=['It depends whether it is springs or neaps','No. The tidal range varies between springs and neaps, but on any given tide it is fixed.',0,0,1];
    I[5][3][4]=['Impossible to say','Wrong.',0,0,1];
    I[6]=[];I[6][0]=100;
    I[6][1]='';
    I[6][2]='0';
    I[6][3]=[];
    I[6][3][0]=['ebb','No. The ebb is a falling tide.',0,0,1];
    I[6][3][1]=['flood','',1,100,1];
    I[6][3][2]=['turn','',0,0,1];
    I[6][3][3]=['wane','',0,0,1];
    I[6][3][4]=['wax','',0,0,1];
    I[7]=[];I[7][0]=100;
    I[7][1]='';
    I[7][2]='0';
    I[7][3]=[];
    I[7][3][0]=['Low water','No. Tidal currents do not always reverse around LW',0,0,1];
    I[7][3][1]=['High water','No. Tidal currents do not always reverse around HW',0,0,1];
    I[7][3][2]=['Neap tide','No. Tidal currents are weaker at neaps, but they still go through the same 12 hourly tide cycle as at springs.',0,0,1];
    I[7][3][3]=['Slack water','Correct.',1,100,1];
    I[7][3][4]=['Slow water','No.',0,0,1];
    I[8]=[];I[8][0]=100;
    I[8][1]='';
    I[8][2]='0';
    I[8][3]=[];
    I[8][3][0]=['no need to fight the current','Not just this',0,25,1];
    I[8][3][1]=['lower gas consumption','Not just this',0,25,1];
    I[8][3][2]=['no risk of being swept away','Not just this',0,25,1];
    I[8][3][3]=['easier for surface cover to pick up divers','Not just this',0,25,1];
    I[8][3][4]=['all of the above','correct',1,100,1];
    I[9]=[];I[9][0]=100;
    I[9][1]='';
    I[9][2]='0';
    I[9][3]=[];
    I[9][3][0]=['Tidal currents','No. Tidal currents change direction every few hours. Motion due to ground swell changes direction every few seconds.',0,0,1];
    I[9][3][1]=['Seaweed or kelp','No, but swaying kelp can be a sign that ground swell is present.',0,0,1];
    I[9][3][2]=['Ocean currents','No.',0,0,1];
    I[9][3][3]=['Wave action','Correct',1,100,1];
    I[9][3][4]=['Boat wake','No',0,0,1];
    I[10]=[];I[10][0]=100;
    I[10][1]='';
    I[10][2]='3';
    I[10][3]=[];
    I[10][3][0]=['Windy weather','Waves formed in bad weather can disturb the seabed',1,100,1];
    I[10][3][1]=['Plankton blooms','Microscopic sea creatures can multiply very rapidly at certain times of year',1,100,1];
    I[10][3][2]=['Run-off from rivers and land','Currents can transport sediments out to sea',1,100,1];
    I[10][3][3]=['Soft sediments on the seabed','Fine particles are easily stirred up from the seabed',1,100,1];
    I[10][3][4]=['Careless use of fins','Clumsy finning can ruin the visibility for other divers',1,100,1];
    I[10][3][5]=['Depth','It gets darker as you go deeper',1,100,1];
    I[10][3][6]=['Currents','Currents can move murky water from one place to another',1,100,1];
    I[11]=[];I[11][0]=100;
    I[11][1]='';
    I[11][2]='3';
    I[11][3]=[];
    I[11][3][0]=['Climate','Water temperature usually varies with the seasons',1,100,1];
    I[11][3][1]=['Depth','It gets colder as you go deeper',1,100,1];
    I[11][3][2]=['Ocean currents','Ocean currents carry warm or cold water, depending on where they originate',1,100,1];
    I[11][3][3]=['Salinity','Salinity does not directly affect water temperature, though it can affect the density of water masses and cause them to sink or rise in the water column',0,0,1];
    I[11][3][4]=['Thunderstorms','Individual weather systems pass in a few hours or days , not long enough to affect water temperature',0,0,1];
    I[11][3][5]=['Thermoclines','A thermocline is the boundary between two masses of water with different temperatures',1,100,1];
    I[12]=[];I[12][0]=100;
    I[12][1]='';
    I[12][2]='0';
    I[12][3]=[];
    I[12][3][0]=['The Gulf Stream','Correct',1,100,1];
    I[12][3][1]=['The North Sea is shallower than the seas on the west coast','No',0,0,1];
    I[12][3][2]=['Global warming','No',0,0,1];
    I[12][3][3]=['Ireland and the Outer Hebrides insulate the west coast','No',0,0,1];
    I[13]=[];I[13][0]=100;
    I[13][1]='';
    I[13][2]='0';
    I[13][3]=[];
    I[13][3][0]=['Remove weight','No',0,0,1];
    I[13][3][1]=['Add weight','Correct',1,100,1];
    I[13][3][2]=['Leave your weights the same','No.',0,0,1];
    I[14]=[];I[14][0]=100;
    I[14][1]='';
    I[14][2]='0';
    I[14][3]=[];
    I[14][3][0]=['Rain','Not just this',0,33,1];
    I[14][3][1]=['Fog','Not just this',0,33,1];
    I[14][3][2]=['Waves','Not just this',0,33,1];
    I[14][3][3]=['Glare','Not just this',0,33,1];
    I[14][3][4]=['All of the above','Correct',1,100,1];
    I[15]=[];I[15][0]=100;
    I[15][1]='';
    I[15][2]='3';
    I[15][3]=[];
    I[15][3][0]=['Sometimes you can get in the water but you can\'t get out','Getting out is almost always harder than getting in',1,100,1];
    I[15][3][1]=['Sometimes you can get out of the water but you can\'t get in','It can be unsafe to pick up divers in a rough sea',0,0,1];
    I[15][3][2]=['If it\'s calm at the dive site it will be a smooth journey to reach it','It can be rough outside a sheltered dive site',0,0,1];
    I[15][3][3]=['Blue skies and sunshine mean calm seas','The sea can remain rough for some time after bad weather has passed',0,0,1];
    I[15][3][4]=['Use more than one lookout if the waves are big','Extra pairs of eyes are needed to spot divers in rough seas',1,100,1];
    I[16]=[];I[16][0]=100;
    I[16][1]='';
    I[16][2]='0';
    I[16][3]=[];
    I[16][3][0]=['Quickly','Definitely not',0,0,1];
    I[16][3][1]=['Slowly','Fast ascents are bad and you should never ascend faster than your tables or computer require, but this is not the answer.',0,10,1];
    I[16][3][2]=['Assertively','No. Divers will always come off worst against a boat.',0,0,1];
    I[16][3][3]=['With caution','Correct',1,100,1];
    I[16][3][4]=['Recklessly','No',0,0,1];
    I[17]=[];I[17][0]=100;
    I[17][1]='';
    I[17][2]='0';
    I[17][3]=[];
    I[17][3][0]=['The Dive Manager\'s brief','Not just this',0,25,1];
    I[17][3][1]=['The Lead Instructor\'s brief','Not just this',0,25,1];
    I[17][3][2]=['A dive centre','Not just this',0,25,1];
    I[17][3][3]=['Dive books and magazines','Not just this',0,25,1];
    I[17][3][4]=['All of the above','Correct',1,100,1];
    I[18]=[];I[18][0]=100;
    I[18][1]='';
    I[18][2]='0';
    I[18][3]=[];
    I[18][3][0]=['Prayer','No',0,0,1];
    I[18][3][1]=['Offering','No',0,0,1];
    I[18][3][2]=['Donation','No',0,0,1];
    I[18][3][3]=['Sanity check','Correct',1,100,1];
    I[18][3][4]=['Buddy check','Yes but that\'s not the answer',0,10,1];
    I[19]=[];I[19][0]=100;
    I[19][1]='';
    I[19][2]='0';
    I[19][3]=[];
    I[19][3][0]=['Buddy','Not the answer, though not a bad thing to do.',0,10,1];
    I[19][3][1]=['Rights','No',0,0,1];
    I[19][3][2]=['Enemy','No',0,0,1];
    I[19][3][3]=['Limits','Correct. This is an important rule for staying safe as a diver.',1,100,1];
    I[19][3][4]=['Dive manager','No',0,0,1];
    return I;
  }
};