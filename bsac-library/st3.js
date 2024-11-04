module.exports = {
  getQuestions: () => {
    return [
  "If a decompression trapeze is to be disconnected from the main shot at the end of the dive a _______ system is required to ensure that no divers are left behind.",
  "An SMB float should be able to support a weight of at least _______.",
  "What is the minimum length of line required for a dive using an SMB?",
  "However you choose to carry your reel while using an SMB you must ensure that it has a _______.",
  "Immediately before inflating a DSMB you must make sure that _______.",
  "What is the recommended colour DSMB to denote an emergency, where a diver to surface signalling system is being used.",
  "Which of the following surface detection aids should only be used in distress?",
  "When laying a distance line you should keep the line _______.",
  "What should you do when you make a change of direction whilst laying a distance line?",
  "You should not shine a torch directly into your buddy's _______."
];
  },

  getAnswers: () => {
    let I = [];
    I[0]=[];I[0][0]=100;
    I[0][1]='';
    I[0][2]='0';
    I[0][3]=[];
    I[0][3][0]=['Drift diving','No. A lazy shot is only useful if divers can return to it at the end of their dive.',0,0,1];
    I[0][3][1]=['Reef diving','No. A lazy shot can be useful whatever the object of interest underwater.',0,0,1];
    I[0][3][2]=['Bounce diving','No.',0,0,1];
    I[0][3][3]=['Decompression diving','Correct. A lazy shot is particularly useful when performing staged decompression in tidal waters',1,100,1];
    I[0][3][4]=['Wreck diving','No. A lazy shot can be useful whatever the object of interest underwater.',0,0,1];
    I[1]=[];I[1][0]=100;
    I[1][1]='';
    I[1][2]='0';
    I[1][3]=[];
    I[1][3][0]=['Diver recall','No.',0,0,1];
    I[1][3][1]=['Diver to surface signalling','No. This won\'t prevent disconnecting the trapeze before all the divers have returned',0,0,1];
    I[1][3][2]=['Emergency','No. This won\'t prevent disconnecting the trapeze before all the divers have returned',0,0,1];
    I[1][3][3]=['Logging','Correct',1,100,1];
    I[1][3][4]=['Buddy','No. This won\'t prevent disconnecting the trapeze before all the divers have returned',0,0,1];
    I[2]=[];I[2][0]=100;
    I[2][1]='';
    I[2][2]='0';
    I[2][3]=[];
    I[2][3][0]=['1-5 kg','No. Too small',0,0,1];
    I[2][3][1]=['5-10 kg','No. Bigger',0,0,1];
    I[2][3][2]=['10-20kg','Correct',1,100,1];
    I[2][3][3]=['25-50kg','No. A float with this buoyancy would be larger than necessary.',0,0,1];
    I[2][3][4]=['100 kg','No. A float with this buoyancy would be much too large to handle.',0,0,1];
    I[3]=[];I[3][0]=100;
    I[3][1]='';
    I[3][2]='0';
    I[3][3]=[];
    I[3][3][0]=['the depth of the dive','No. You need extra to allow for the effects of wind and current.',0,0,1];
    I[3][3][1]=['1.25 times the depth of the dive','Correct',1,100,1];
    I[3][3][2]=['30 metres','No. This is a fixed amount not a minimum. In any event it would not be enough for dives over about 24m. After depth progression as a Sports Diver you could make dives deeper than this.',0,0,1];
    I[3][3][3]=['50 metres','No. This is a fixed amount not a minimum. You should always consider whether you have enough line for the actual dive. However, 50m should be enough for most dives up to the recommended Sports Diver maximum of 35m.',0,0,1];
    I[4]=[];I[4][0]=100;
    I[4][1]='';
    I[4][2]='0';
    I[4][3]=[];
    I[4][3][0]=['Ratchet','No, although some kind of locking device is necessary.',0,0,1];
    I[4][3][1]=['Lanyard','No.',0,0,1];
    I[4][3][2]=['Quick release mechanism','Correct. You must be able to release yourself quickly if any part of the SMB system becomes snagged',1,100,1];
    I[4][3][3]=['Karabiner','No.',0,0,1];
    I[4][3][4]=['Enclosed spool','No.',0,0,1];
    I[5]=[];I[5][0]=100;
    I[5][1]='';
    I[5][2]='0';
    I[5][3]=[];
    I[5][3][0]=['It is disconnected from you','Correct.',1,100,1];
    I[5][3][1]=['The reel contains sufficient line to reach the surface','No. You should do that before the dive. If you do not have sufficient line for the deepest part of the dive you must ascend before preparing to deploy',0,0,1];
    I[5][3][2]=['There are no holes in the buoy','No. It\'s too late for that.',0,0,1];
    I[5][3][3]=['You have sufficient breathing gas','No. You should monitor your breathing gas throughout the dive, and if following the Rule of Thirds you should have plenty. If you are very low on gas, through accident or mis-management you should ascend immediately. Deploying a DSMB at depth would further deplete your supplies.',0,0,1];
    I[5][3][4]=['All of the above','No. Only one answer is correct',0,0,1];
    I[6]=[];I[6][0]=100;
    I[6][1]='';
    I[6][2]='0';
    I[6][3]=[];
    I[6][3][0]=['Red','No',0,0,1];
    I[6][3][1]=['Red and yellow','No',0,0,1];
    I[6][3][2]=['Yellow','Correct.',1,100,1];
    I[6][3][3]=['Black','No',0,0,1];
    I[7]=[];I[7][0]=100;
    I[7][1]='';
    I[7][2]='3';
    I[7][3]=[];
    I[7][3][0]=['Dive flag','A dive flag can be used at any time',0,0,1];
    I[7][3][1]=['Strobe','You have missed something',1,100,1];
    I[7][3][2]=['EPIRB','You have missed something',1,100,1];
    I[7][3][3]=['Flare','You have missed something',1,100,1];
    I[7][3][4]=['Whistle','A whistle can be used at any time',0,0,1];
    I[7][3][5]=['Mirror','A mirror can be used at any time',0,0,1];
    I[8]=[];I[8][0]=100;
    I[8][1]='';
    I[8][2]='0';
    I[8][3]=[];
    I[8][3][0]=['Slack','No. Loose line is an entanglement hazard.',0,0,1];
    I[8][3][1]=['Close to your body','No. You might get tangled with the line.',0,0,1];
    I[8][3][2]=['Close to your buddy','No. He might get tangled with the line.',0,0,1];
    I[8][3][3]=['Taut','Correct. This reduces the risk of entanglement by minimising the amount of loose line.',1,100,1];
    I[8][3][4]=['Over lines laid previously by other divers','No. Keep your line under previous lines.',0,0,1];
    I[9]=[];I[9][0]=100;
    I[9][1]='';
    I[9][2]='0';
    I[9][3]=[];
    I[9][3][0]=['Cut the line','No. Cutting the line should only be necessary if you are unable to return to your starting point.',0,0,1];
    I[9][3][1]=['No action needed','No. If not secured, the loose line will become an entanglement hazard.',0,0,1];
    I[9][3][2]=['Secure the line','Correct. Make sure it will not come loose inadvertently, but will be easily detached on your return.',1,100,1];
    I[9][3][3]=['Tie the line securely, then continue using a second reel','No. You would only use a second reel if you had used all the line on the first.',0,0,1];
    I[10]=[];I[10][0]=100;
    I[10][1]='';
    I[10][2]='0';
    I[10][3]=[];
    I[10][3][0]=['Pocket','',0,0,1];
    I[10][3][1]=['Path','',0,0,1];
    I[10][3][2]=['Goody bag','',0,0,1];
    I[10][3][3]=['Face','',1,100,1];
    I[10][3][4]=['All of the above','',0,0,1];
    return I;
  }
};