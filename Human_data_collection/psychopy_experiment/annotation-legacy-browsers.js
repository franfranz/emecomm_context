/******************* 
 * Annotation Test *
 *******************/


// store info about the experiment session:
let expName = 'annotation';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instructions1RoutineBegin());
flowScheduler.add(Instructions1RoutineEachFrame());
flowScheduler.add(Instructions1RoutineEnd());
flowScheduler.add(Instructions2RoutineBegin());
flowScheduler.add(Instructions2RoutineEachFrame());
flowScheduler.add(Instructions2RoutineEnd());
flowScheduler.add(ExampleRoutineBegin());
flowScheduler.add(ExampleRoutineEachFrame());
flowScheduler.add(ExampleRoutineEnd());
flowScheduler.add(WarningRoutineBegin());
flowScheduler.add(WarningRoutineEachFrame());
flowScheduler.add(WarningRoutineEnd());
flowScheduler.add(paymentRoutineBegin());
flowScheduler.add(paymentRoutineEachFrame());
flowScheduler.add(paymentRoutineEnd());
flowScheduler.add(StartRoutineBegin());
flowScheduler.add(StartRoutineEachFrame());
flowScheduler.add(StartRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(CodeRoutineBegin());
flowScheduler.add(CodeRoutineEachFrame());
flowScheduler.add(CodeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img112.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img112.jpg'},
    {'name': 'Checks/check4/open-images-2924_0645dcbcf998fed9img3.jpg', 'path': 'Checks/check4/open-images-2924_0645dcbcf998fed9img3.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img113.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img113.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img172.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img172.jpg'},
    {'name': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img453.jpg', 'path': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img453.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img30.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img30.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img541.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img541.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img11.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img11.jpg'},
    {'name': 'Images/YouCook-video0084-shot22_0/img3.jpg', 'path': 'Images/YouCook-video0084-shot22_0/img3.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img0.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img53.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img53.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img440.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img440.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img62.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img62.jpg'},
    {'name': 'Checks/check1/open-images-1854_2b15616b4f1080e7img2.jpg', 'path': 'Checks/check1/open-images-1854_2b15616b4f1080e7img2.jpg'},
    {'name': 'Checks/check2/open-images-2603_1b5152f01f0093e7img3.jpg', 'path': 'Checks/check2/open-images-2603_1b5152f01f0093e7img3.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img33.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img33.jpg'},
    {'name': 'Images/YouCook-video0082-shot1_0/img7.jpg', 'path': 'Images/YouCook-video0082-shot1_0/img7.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img44.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img44.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img37.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img37.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img466.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img466.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img553.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img553.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img172.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img172.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img475.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img475.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img107.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img107.jpg'},
    {'name': 'Checks/check3/open-images-2994_9965cbf8aa20bda0img2.jpg', 'path': 'Checks/check3/open-images-2994_9965cbf8aa20bda0img2.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img125.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img125.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img28.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img28.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img140.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img140.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1085.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1085.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img120.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img120.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img164.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img164.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img16.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img16.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img152.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img152.jpg'},
    {'name': 'Images/YouCook-video0008-shot6_0/img150.jpg', 'path': 'Images/YouCook-video0008-shot6_0/img150.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img967.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img967.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img682.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img682.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img716.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img716.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img148.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img148.jpg'},
    {'name': 'Checks/check4/open-images-869_856ecbcb5faf76e3img8.jpg', 'path': 'Checks/check4/open-images-869_856ecbcb5faf76e3img8.jpg'},
    {'name': 'Checks/check2/open-images-974_0748fdedc4bf8b7bimg2.jpg', 'path': 'Checks/check2/open-images-974_0748fdedc4bf8b7bimg2.jpg'},
    {'name': 'Checks/check2/open-images-958_686caac9c5b322e7img5.jpg', 'path': 'Checks/check2/open-images-958_686caac9c5b322e7img5.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img425.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img425.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img9.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img9.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img395.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img395.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img445.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img445.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img250.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img250.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img22.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img22.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img82.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img82.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img157.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img157.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img134.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img134.jpg'},
    {'name': 'Images/YouCook-video0034-shot16_2/img367.jpg', 'path': 'Images/YouCook-video0034-shot16_2/img367.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img50.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img50.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img186.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img186.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img7.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img7.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img0.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img246.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img246.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img174.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img174.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img148.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img148.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img77.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img77.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img42.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img42.jpg'},
    {'name': 'Checks/check2/open-images-1278_21851d9bf5dc05c9img7.jpg', 'path': 'Checks/check2/open-images-1278_21851d9bf5dc05c9img7.jpg'},
    {'name': 'Example/img4.jpg', 'path': 'Example/img4.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img307.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img307.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img11.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img11.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img177.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img177.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img88.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img88.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img178.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img178.jpg'},
    {'name': 'Images/YouCook-video0008-shot6_0/img171.jpg', 'path': 'Images/YouCook-video0008-shot6_0/img171.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img55.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img55.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img540.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img540.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img103.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img103.jpg'},
    {'name': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img3.jpg', 'path': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img3.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img172.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img172.jpg'},
    {'name': 'Images/YouCook-video0008-shot6_0/img251.jpg', 'path': 'Images/YouCook-video0008-shot6_0/img251.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img138.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img138.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img250.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img250.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img242.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img242.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img708.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img708.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img541.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img541.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img973.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img973.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img0.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img0.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1054.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1054.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img0.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img0.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img663.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img663.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img528.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img528.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img47.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img47.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img69.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img69.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img535.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img535.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img27.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img27.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img546.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img546.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img49.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img49.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img146.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img146.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img235.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img235.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img35.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img35.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img265.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img265.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img506.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img506.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img922.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img922.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img681.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img681.jpg'},
    {'name': 'Checks/check3/open-images-1696_20a4ebf0c0f76b05img6.jpg', 'path': 'Checks/check3/open-images-1696_20a4ebf0c0f76b05img6.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img76.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img76.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img142.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img142.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img642.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img642.jpg'},
    {'name': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img516.jpg', 'path': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img516.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img130.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img130.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img252.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img252.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img10.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img10.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img45.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img45.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img22.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img22.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img7.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img7.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img121.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img121.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img519.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img519.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img712.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img712.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img525.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img525.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img5.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img5.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img138.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img138.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img45.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img45.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img688.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img688.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img4.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img4.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img45.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img45.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img51.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img51.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img142.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img142.jpg'},
    {'name': 'Checks/check3/open-images-1068_03d63613107970b3img6.jpg', 'path': 'Checks/check3/open-images-1068_03d63613107970b3img6.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img75.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img75.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img487.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img487.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img423.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img423.jpg'},
    {'name': 'Images/YouCook-video0050-shot1_0/img1906.jpg', 'path': 'Images/YouCook-video0050-shot1_0/img1906.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img661.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img661.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img60.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img60.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img15.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img15.jpg'},
    {'name': 'Checks/check3/open-images-2447_128483a48e1552f4img6.jpg', 'path': 'Checks/check3/open-images-2447_128483a48e1552f4img6.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1057.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1057.jpg'},
    {'name': 'Images/YouCook-video0084-shot22_0/img24.jpg', 'path': 'Images/YouCook-video0084-shot22_0/img24.jpg'},
    {'name': 'Example/img8.jpg', 'path': 'Example/img8.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img525.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img525.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img159.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img159.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img402.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img402.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img969.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img969.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img98.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img98.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img37.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img37.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img36.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img36.jpg'},
    {'name': 'Images/YouCook-video0050-shot1_0/img605.jpg', 'path': 'Images/YouCook-video0050-shot1_0/img605.jpg'},
    {'name': 'Images/YouCook-video0034-shot16_2/img275.jpg', 'path': 'Images/YouCook-video0034-shot16_2/img275.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img151.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img151.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img15.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img15.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img500.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img500.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img162.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img162.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img132.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img132.jpg'},
    {'name': 'Checks/check3/open-images-503_1ccd6fa641154ebbimg7.jpg', 'path': 'Checks/check3/open-images-503_1ccd6fa641154ebbimg7.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img281.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img281.jpg'},
    {'name': 'Images/YouCook-video0034-shot16_2/img344.jpg', 'path': 'Images/YouCook-video0034-shot16_2/img344.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img29.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img29.jpg'},
    {'name': 'Checks/check3/open-images-386_1b2e28d6d994603eimg1.jpg', 'path': 'Checks/check3/open-images-386_1b2e28d6d994603eimg1.jpg'},
    {'name': 'Checks/check5/open-images-1602_44092afdeab39e73img6.jpg', 'path': 'Checks/check5/open-images-1602_44092afdeab39e73img6.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img262.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img262.jpg'},
    {'name': 'Images/YouCook-video0034-shot16_2/img291.jpg', 'path': 'Images/YouCook-video0034-shot16_2/img291.jpg'},
    {'name': 'Example/img9.jpg', 'path': 'Example/img9.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img584.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img584.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img154.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img154.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img691.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img691.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img156.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img156.jpg'},
    {'name': 'Images/YouCook-video0034-shot16_2/img280.jpg', 'path': 'Images/YouCook-video0034-shot16_2/img280.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img49.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img49.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img20.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img20.jpg'},
    {'name': 'Checks/check1/open-images-1435_1b0ce31951048765img8.jpg', 'path': 'Checks/check1/open-images-1435_1b0ce31951048765img8.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img146.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img146.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img64.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img64.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img54.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img54.jpg'},
    {'name': 'Images/YouCook-video0050-shot1_0/img774.jpg', 'path': 'Images/YouCook-video0050-shot1_0/img774.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img92.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img92.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img532.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img532.jpg'},
    {'name': 'Checks/check1/open-images-2209_02c98146fb93ff17img1.jpg', 'path': 'Checks/check1/open-images-2209_02c98146fb93ff17img1.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img572.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img572.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img113.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img113.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img654.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img654.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img179.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img179.jpg'},
    {'name': 'Checks/check5/open-images-1365_a00a5fde334ae45aimg4.jpg', 'path': 'Checks/check5/open-images-1365_a00a5fde334ae45aimg4.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img87.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img87.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img72.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img72.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img43.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img43.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img439.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img439.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img128.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img128.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img33.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img33.jpg'},
    {'name': 'Images/YouCook-video0050-shot1_0/img673.jpg', 'path': 'Images/YouCook-video0050-shot1_0/img673.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img175.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img175.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img152.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img152.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img205.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img205.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img14.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img14.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img522.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img522.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img89.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img89.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img189.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img189.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img267.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img267.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img429.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img429.jpg'},
    {'name': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img19.jpg', 'path': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img19.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img45.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img45.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img489.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img489.jpg'},
    {'name': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img552.jpg', 'path': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img552.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img33.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img33.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img12.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img12.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img39.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img39.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img33.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img33.jpg'},
    {'name': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img70.jpg', 'path': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img70.jpg'},
    {'name': 'Checks/check3/open-images-1886_3db71eaddb618934img8.jpg', 'path': 'Checks/check3/open-images-1886_3db71eaddb618934img8.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img117.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img117.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img83.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img83.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img32.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img32.jpg'},
    {'name': 'Checks/check1/open-images-2666_044d7c6d11e6b493img8.jpg', 'path': 'Checks/check1/open-images-2666_044d7c6d11e6b493img8.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img21.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img21.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img143.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img143.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img266.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img266.jpg'},
    {'name': 'Checks/check1/open-images-2759_3a42708fe77398b7img8.jpg', 'path': 'Checks/check1/open-images-2759_3a42708fe77398b7img8.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img47.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img47.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img334.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img334.jpg'},
    {'name': 'Checks/check3/open-images-531_0dd4eb59d465a8beimg9.jpg', 'path': 'Checks/check3/open-images-531_0dd4eb59d465a8beimg9.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img86.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img86.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img100.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img100.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img165.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img165.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img681.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img681.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img160.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img160.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img99.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img99.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img441.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img441.jpg'},
    {'name': 'Checks/check2/open-images-617_01fb725fb1aa7b04img6.jpg', 'path': 'Checks/check2/open-images-617_01fb725fb1aa7b04img6.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img359.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img359.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img153.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img153.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img7.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img7.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img13.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img13.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img537.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img537.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img123.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img123.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img122.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img122.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img245.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img245.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img39.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img39.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img89.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img89.jpg'},
    {'name': 'Example/img7.jpg', 'path': 'Example/img7.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img48.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img48.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1073.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1073.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img6.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img6.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img668.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img668.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img56.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img56.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img46.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img46.jpg'},
    {'name': 'Checks/check3/open-images-471_1121e9f97c200ac0img8.jpg', 'path': 'Checks/check3/open-images-471_1121e9f97c200ac0img8.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img170.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img170.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img397.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img397.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img540.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img540.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img143.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img143.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img338.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img338.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img171.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img171.jpg'},
    {'name': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img510.jpg', 'path': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img510.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img183.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img183.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img52.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img52.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img449.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img449.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img15.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img15.jpg'},
    {'name': 'Example/img3.jpg', 'path': 'Example/img3.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img168.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img168.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img200.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img200.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img75.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img75.jpg'},
    {'name': 'Images/YouCook-video0034-shot16_2/img354.jpg', 'path': 'Images/YouCook-video0034-shot16_2/img354.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img34.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img34.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img88.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img88.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img656.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img656.jpg'},
    {'name': 'Images/YouCook-video0034-shot16_2/img301.jpg', 'path': 'Images/YouCook-video0034-shot16_2/img301.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img147.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img147.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img67.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img67.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img12.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img12.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img12.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img12.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img85.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img85.jpg'},
    {'name': 'Checks/check4/open-images-1907_5f9be3e4ea5e22c7img2.jpg', 'path': 'Checks/check4/open-images-1907_5f9be3e4ea5e22c7img2.jpg'},
    {'name': 'Checks/check1/open-images-510_3a241cb30d6e5319img2.jpg', 'path': 'Checks/check1/open-images-510_3a241cb30d6e5319img2.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img37.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img37.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img16.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img16.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img58.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img58.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img555.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img555.jpg'},
    {'name': 'Images/YouCook-video0082-shot1_0/img92.jpg', 'path': 'Images/YouCook-video0082-shot1_0/img92.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img0.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img0.jpg'},
    {'name': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img113.jpg', 'path': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img113.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img390.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img390.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img413.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img413.jpg'},
    {'name': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img11.jpg', 'path': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img11.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img187.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img187.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img225.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img225.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img40.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img40.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img33.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img33.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img151.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img151.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img449.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img449.jpg'},
    {'name': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img458.jpg', 'path': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img458.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img117.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img117.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img170.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img170.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img154.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img154.jpg'},
    {'name': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img519.jpg', 'path': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img519.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img2.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img2.jpg'},
    {'name': 'Checks/check2/open-images-1836_069810916ce5d675img8.jpg', 'path': 'Checks/check2/open-images-1836_069810916ce5d675img8.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img262.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img262.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img60.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img60.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img8.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img8.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img343.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img343.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img0.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img48.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img48.jpg'},
    {'name': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img131.jpg', 'path': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img131.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img456.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img456.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img560.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img560.jpg'},
    {'name': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img528.jpg', 'path': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img528.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img141.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img141.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img78.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img78.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img522.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img522.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img54.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img54.jpg'},
    {'name': 'Images/YouCook-video0082-shot1_0/img159.jpg', 'path': 'Images/YouCook-video0082-shot1_0/img159.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img14.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img14.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img204.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img204.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img201.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img201.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img32.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img32.jpg'},
    {'name': 'Checks/check3/open-images-1852_00faf52058ad28b8img4.jpg', 'path': 'Checks/check3/open-images-1852_00faf52058ad28b8img4.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img155.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img155.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img932.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img932.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img548.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img548.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img17.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img17.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img426.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img426.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img697.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img697.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img440.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img440.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img243.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img243.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img646.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img646.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img121.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img121.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img3.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img3.jpg'},
    {'name': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img357.jpg', 'path': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img357.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img153.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img153.jpg'},
    {'name': 'Images/YouCook-video0084-shot22_0/img5.jpg', 'path': 'Images/YouCook-video0084-shot22_0/img5.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img63.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img63.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img360.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img360.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img958.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img958.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img52.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img52.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img219.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img219.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img115.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img115.jpg'},
    {'name': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img37.jpg', 'path': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img37.jpg'},
    {'name': 'Checks/check5/open-images-2676_052dbf7b4899430bimg1.jpg', 'path': 'Checks/check5/open-images-2676_052dbf7b4899430bimg1.jpg'},
    {'name': 'Checks/check5/open-images-1305_05769e6abb16fdc8img9.jpg', 'path': 'Checks/check5/open-images-1305_05769e6abb16fdc8img9.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img47.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img47.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img125.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img125.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img2.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img2.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img0.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img0.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img452.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img452.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img323.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img323.jpg'},
    {'name': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img525.jpg', 'path': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img525.jpg'},
    {'name': 'Images/YouCook-video0082-shot1_0/img174.jpg', 'path': 'Images/YouCook-video0082-shot1_0/img174.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img92.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img92.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img191.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img191.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1059.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1059.jpg'},
    {'name': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img365.jpg', 'path': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img365.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img9.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img9.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img473.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img473.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img253.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img253.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img555.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img555.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1068.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1068.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img208.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img208.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img24.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img24.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img149.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img149.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img545.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img545.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img49.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img49.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img152.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img152.jpg'},
    {'name': 'Checks/check1/open-images-609_2dc0baa993a2bd25img5.jpg', 'path': 'Checks/check1/open-images-609_2dc0baa993a2bd25img5.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img265.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img265.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img84.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img84.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img29.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img29.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img87.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img87.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img8.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img8.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img467.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img467.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img515.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img515.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img332.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img332.jpg'},
    {'name': 'Example/img2.jpg', 'path': 'Example/img2.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img173.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img173.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img276.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img276.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1077.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1077.jpg'},
    {'name': 'Images/YouCook-video0050-shot1_0/img604.jpg', 'path': 'Images/YouCook-video0050-shot1_0/img604.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img93.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img93.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img146.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img146.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img73.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img73.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img5.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img5.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img18.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img18.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img257.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img257.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img252.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img252.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1092.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1092.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img52.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img52.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img55.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img55.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img12.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img12.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img0.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img0.jpg'},
    {'name': 'Images/YouCook-video0008-shot6_0/img0.jpg', 'path': 'Images/YouCook-video0008-shot6_0/img0.jpg'},
    {'name': 'Images/YouCook-video0008-shot6_0/img17.jpg', 'path': 'Images/YouCook-video0008-shot6_0/img17.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img496.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7059-shot1_1/img496.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img217.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img217.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img473.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img473.jpg'},
    {'name': 'Images/YouCook-video0050-shot1_0/img601.jpg', 'path': 'Images/YouCook-video0050-shot1_0/img601.jpg'},
    {'name': 'Checks/check5/open-images-1032_059f3cdfb85ee0ceimg3.jpg', 'path': 'Checks/check5/open-images-1032_059f3cdfb85ee0ceimg3.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img168.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img168.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img21.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img21.jpg'},
    {'name': 'Checks/check4/open-images-2609_3f72daeb23764ecfimg6.jpg', 'path': 'Checks/check4/open-images-2609_3f72daeb23764ecfimg6.jpg'},
    {'name': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img40.jpg', 'path': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img40.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img542.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img542.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img17.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img17.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img18.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img18.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img705.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img705.jpg'},
    {'name': 'Images/YouCook-video0050-shot1_0/img607.jpg', 'path': 'Images/YouCook-video0050-shot1_0/img607.jpg'},
    {'name': 'Checks/check4/open-images-1928_60679e2899870e08img1.jpg', 'path': 'Checks/check4/open-images-1928_60679e2899870e08img1.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img538.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img538.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img5.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img5.jpg'},
    {'name': 'Images/YouCook-video0084-shot22_0/img45.jpg', 'path': 'Images/YouCook-video0084-shot22_0/img45.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img2.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img2.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img179.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img179.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img80.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img80.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img534.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img534.jpg'},
    {'name': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img421.jpg', 'path': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img421.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img318.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img318.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img135.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img135.jpg'},
    {'name': 'Example/img1.jpg', 'path': 'Example/img1.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img328.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img328.jpg'},
    {'name': 'Checks/check2/open-images-1529_1442b11a10a6aeadimg3.jpg', 'path': 'Checks/check2/open-images-1529_1442b11a10a6aeadimg3.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img713.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img713.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img148.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img148.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img141.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img141.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img79.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img79.jpg'},
    {'name': 'Images/YouCook-video0082-shot1_0/img200.jpg', 'path': 'Images/YouCook-video0082-shot1_0/img200.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img458.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img458.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img18.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img18.jpg'},
    {'name': 'Checks/check5/open-images-727_25b77fff36adba66img2.jpg', 'path': 'Checks/check5/open-images-727_25b77fff36adba66img2.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img930.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img930.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img80.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img80.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img10.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img10.jpg'},
    {'name': 'Images/YouCook-video0034-shot16_2/img350.jpg', 'path': 'Images/YouCook-video0034-shot16_2/img350.jpg'},
    {'name': 'Images/YouCook-video0082-shot1_0/img18.jpg', 'path': 'Images/YouCook-video0082-shot1_0/img18.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img173.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot5_2/img173.jpg'},
    {'name': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img460.jpg', 'path': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img460.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img426.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img426.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img273.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img273.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img66.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img66.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img124.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img124.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img238.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img238.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img242.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img242.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img81.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img81.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img23.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img23.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img65.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img65.jpg'},
    {'name': 'Images/YouCook-video0082-shot1_0/img116.jpg', 'path': 'Images/YouCook-video0082-shot1_0/img116.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img230.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img230.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img27.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img27.jpg'},
    {'name': 'Checks/check1/open-images-1553_0f128317e56a9d2fimg9.jpg', 'path': 'Checks/check1/open-images-1553_0f128317e56a9d2fimg9.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img83.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img83.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img178.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img178.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img37.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img37.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img221.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img221.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img269.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img269.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img163.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img163.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img66.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img66.jpg'},
    {'name': 'Images/YouCook-video0082-shot1_0/img0.jpg', 'path': 'Images/YouCook-video0082-shot1_0/img0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img150.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img150.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img86.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img86.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img529.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img529.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img200.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img200.jpg'},
    {'name': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img30.jpg', 'path': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img30.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img25.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img25.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img175.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8691-shot1_1/img175.jpg'},
    {'name': 'Images/YouCook-video0008-shot6_0/img64.jpg', 'path': 'Images/YouCook-video0008-shot6_0/img64.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img141.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img141.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img620.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img620.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img80.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img80.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img12.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img12.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img217.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img217.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img525.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img525.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img213.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8108-shot1_2/img213.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img52.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img52.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img0.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img82.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img82.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img105.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img105.jpg'},
    {'name': 'Images/YouCook-video0034-shot16_2/img347.jpg', 'path': 'Images/YouCook-video0034-shot16_2/img347.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img512.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img512.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img35.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img35.jpg'},
    {'name': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img531.jpg', 'path': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img531.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img16.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img16.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img17.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img17.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img147.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8454-shot1_1/img147.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img31.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img31.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img27.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img27.jpg'},
    {'name': 'Example/img0.jpg', 'path': 'Example/img0.jpg'},
    {'name': 'Checks/check5/open-images-2569_1e81d79bb796a2dbimg7.jpg', 'path': 'Checks/check5/open-images-2569_1e81d79bb796a2dbimg7.jpg'},
    {'name': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img0.jpg', 'path': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img0.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img685.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img685.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img949.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img949.jpg'},
    {'name': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img456.jpg', 'path': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img456.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img35.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img35.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img6.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img6.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img110.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7541-shot1_1/img110.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img182.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8700-shot3_2/img182.jpg'},
    {'name': 'Images/YouCook-video0008-shot6_0/img114.jpg', 'path': 'Images/YouCook-video0008-shot6_0/img114.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img10.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img10.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img362.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img362.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img100.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img100.jpg'},
    {'name': 'Images/YouCook-video0008-shot6_0/img46.jpg', 'path': 'Images/YouCook-video0008-shot6_0/img46.jpg'},
    {'name': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img501.jpg', 'path': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img501.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img5.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img5.jpg'},
    {'name': 'Checks/check4/open-images-1811_9ae6351c7f7565edimg0.jpg', 'path': 'Checks/check4/open-images-1811_9ae6351c7f7565edimg0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img0.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img384.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9375-shot1_4/img384.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img75.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img75.jpg'},
    {'name': 'Images/YouCook-video0084-shot22_0/img9.jpg', 'path': 'Images/YouCook-video0084-shot22_0/img9.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img531.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img531.jpg'},
    {'name': 'Checks/check1/open-images-2880_159294646083f545img4.jpg', 'path': 'Checks/check1/open-images-2880_159294646083f545img4.jpg'},
    {'name': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img34.jpg', 'path': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img34.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img38.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img38.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img34.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img34.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1064.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1064.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img21.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img21.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img24.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9196-shot1_1/img24.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img161.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img161.jpg'},
    {'name': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img404.jpg', 'path': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img404.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img250.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img250.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img14.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img14.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img43.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img43.jpg'},
    {'name': 'Checks/check2/open-images-2424_05f04546e01499f2img0.jpg', 'path': 'Checks/check2/open-images-2424_05f04546e01499f2img0.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img5.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img5.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img25.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img25.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img521.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot61_22/img521.jpg'},
    {'name': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img62.jpg', 'path': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img62.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img0.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img432.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img432.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img56.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img56.jpg'},
    {'name': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img522.jpg', 'path': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img522.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img41.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img41.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img80.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7780-shot3_4/img80.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img287.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img287.jpg'},
    {'name': 'Checks/check5/open-images-2521_074d6af730ed17a6img1.jpg', 'path': 'Checks/check5/open-images-2521_074d6af730ed17a6img1.jpg'},
    {'name': 'Checks/check5/open-images-509_4d8bd994cb8c6eaeimg0.jpg', 'path': 'Checks/check5/open-images-509_4d8bd994cb8c6eaeimg0.jpg'},
    {'name': 'Images/YouCook-video0050-shot1_0/img0.jpg', 'path': 'Images/YouCook-video0050-shot1_0/img0.jpg'},
    {'name': 'Images/YouCook-video0050-shot1_0/img603.jpg', 'path': 'Images/YouCook-video0050-shot1_0/img603.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img59.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot75_0/img59.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img120.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img120.jpg'},
    {'name': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img65.jpg', 'path': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img65.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img11.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img11.jpg'},
    {'name': 'Checks/check2/open-images-507_047769e1f977cd97img2.jpg', 'path': 'Checks/check2/open-images-507_047769e1f977cd97img2.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img188.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img188.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img195.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8058-shot1_0/img195.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img87.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img87.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img31.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img31.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img23.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img23.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img5.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img5.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img41.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img41.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img42.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8525-shot1_1/img42.jpg'},
    {'name': 'Images/YouCook-video0008-shot6_0/img118.jpg', 'path': 'Images/YouCook-video0008-shot6_0/img118.jpg'},
    {'name': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img435.jpg', 'path': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img435.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1056.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_22/img1056.jpg'},
    {'name': 'Images/YouCook-video0084-shot22_0/img38.jpg', 'path': 'Images/YouCook-video0084-shot22_0/img38.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img1.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7047-shot1_0/img1.jpg'},
    {'name': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img58.jpg', 'path': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img58.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img130.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img130.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img955.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img955.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img218.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img218.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img943.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_6/img943.jpg'},
    {'name': 'Images/YouCook-video0084-shot22_0/img35.jpg', 'path': 'Images/YouCook-video0084-shot22_0/img35.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img245.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img245.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img6.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img6.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img167.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img167.jpg'},
    {'name': 'Images/YouCook-video0082-shot1_0/img95.jpg', 'path': 'Images/YouCook-video0082-shot1_0/img95.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img243.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8052-shot1_1/img243.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img91.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img91.jpg'},
    {'name': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img375.jpg', 'path': 'Images/video-storytelling-videochristmas_5RR_sRzKODA-shot20_8/img375.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img10.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img10.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img0.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img185.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img185.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img15.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7662-shot2_0/img15.jpg'},
    {'name': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img48.jpg', 'path': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img48.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img567.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img567.jpg'},
    {'name': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img43.jpg', 'path': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img43.jpg'},
    {'name': 'Checks/check4/open-images-1745_0ed62fe71809b2f5img2.jpg', 'path': 'Checks/check4/open-images-1745_0ed62fe71809b2f5img2.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img47.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9668-shot1_1/img47.jpg'},
    {'name': 'Example/img5.jpg', 'path': 'Example/img5.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img39.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img39.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img698.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot14_2/img698.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img25.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img25.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img31.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8965-shot1_0/img31.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img3.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot74_0/img3.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img0.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img30.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img30.jpg'},
    {'name': 'Checks/check4/open-images-250_02039517e63a91fbimg1.jpg', 'path': 'Checks/check4/open-images-250_02039517e63a91fbimg1.jpg'},
    {'name': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img27.jpg', 'path': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img27.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img254.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img254.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img349.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img349.jpg'},
    {'name': 'Checks/check5/open-images-2208_0fb92b9978d98575img2.jpg', 'path': 'Checks/check5/open-images-2208_0fb92b9978d98575img2.jpg'},
    {'name': 'Images/YouCook-video0082-shot1_0/img167.jpg', 'path': 'Images/YouCook-video0082-shot1_0/img167.jpg'},
    {'name': 'data_psy.csv', 'path': 'data_psy.csv'},
    {'name': 'Checks/check1/open-images-225_1442c0d0ef23d58bimg3.jpg', 'path': 'Checks/check1/open-images-225_1442c0d0ef23d58bimg3.jpg'},
    {'name': 'Checks/check4/open-images-1721_6f04da11945ea492img3.jpg', 'path': 'Checks/check4/open-images-1721_6f04da11945ea492img3.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img160.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9556-shot3_2/img160.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img30.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img30.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img42.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img42.jpg'},
    {'name': 'Images/YouCook-video0084-shot22_0/img18.jpg', 'path': 'Images/YouCook-video0084-shot22_0/img18.jpg'},
    {'name': 'Checks/check4/open-images-580_0ddffb9c25141999img1.jpg', 'path': 'Checks/check4/open-images-580_0ddffb9c25141999img1.jpg'},
    {'name': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img596.jpg', 'path': 'Images/video-storytelling-videowedding_Bp8t824h5NE-shot55_3/img596.jpg'},
    {'name': 'Images/YouCook-video0050-shot1_0/img599.jpg', 'path': 'Images/YouCook-video0050-shot1_0/img599.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img2.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img2.jpg'},
    {'name': 'Images/YouCook-video0008-shot6_0/img143.jpg', 'path': 'Images/YouCook-video0008-shot6_0/img143.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img33.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img33.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img48.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8886-shot1_1/img48.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img23.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img23.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img216.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8079-shot1_2/img216.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img683.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img683.jpg'},
    {'name': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img64.jpg', 'path': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img64.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img102.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9228-shot4_1/img102.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img26.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot14_0/img26.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img120.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot10_0/img120.jpg'},
    {'name': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img68.jpg', 'path': 'Images/video-storytelling-videowedding_de8dLXvgV-I-shot13_1/img68.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img248.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8588-shot1_2/img248.jpg'},
    {'name': 'Example/img6.jpg', 'path': 'Example/img6.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img354.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img354.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img144.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9623-shot1_1/img144.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img332.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img332.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img80.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7165-shot1_0/img80.jpg'},
    {'name': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img6.jpg', 'path': 'Images/video-storytelling-videobirthday_fwpYnUDbusw-shot15_0/img6.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img675.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot7_10/img675.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img9.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9951-shot1_0/img9.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img0.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7564-shot1_0/img0.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img76.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot63_2/img76.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img707.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_13/img707.jpg'},
    {'name': 'Images/YouCook-video0034-shot16_2/img338.jpg', 'path': 'Images/YouCook-video0034-shot16_2/img338.jpg'},
    {'name': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img526.jpg', 'path': 'Images/video-storytelling-videocamping_dBXYM3dQTSo-shot69_11/img526.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img106.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img106.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img17.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7198-shot1_0/img17.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img463.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8095-shot1_1/img463.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img8.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img8.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img342.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8310-shot1_5/img342.jpg'},
    {'name': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img0.jpg', 'path': 'Images/video-storytelling-videobirthday__amwPjAcoC8-shot42_0/img0.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img355.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video9602-shot1_0/img355.jpg'},
    {'name': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img443.jpg', 'path': 'Images/video-storytelling-videocamping_1OzbiB1TIWI-shot12_8/img443.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img15.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7522-shot4_0/img15.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img26.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7756-shot1_0/img26.jpg'},
    {'name': 'Images/YouCook-video0084-shot22_0/img0.jpg', 'path': 'Images/YouCook-video0084-shot22_0/img0.jpg'},
    {'name': 'Images/YouCook-video0084-shot22_0/img21.jpg', 'path': 'Images/YouCook-video0084-shot22_0/img21.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img4.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video7657-shot2_0/img4.jpg'},
    {'name': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img248.jpg', 'path': 'Images/MSR-VTT-videoTestVideo_video8411-shot1_1/img248.jpg'},
    {'name': 'Checks/check2/open-images-514_2c523ddedc2561d4img1.jpg', 'path': 'Checks/check2/open-images-514_2c523ddedc2561d4img1.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var Instructions1Clock;
var text;
var key_resp_2;
var text_space;
var Instructions2Clock;
var text_2;
var key_resp_3;
var text_space2;
var ExampleClock;
var text_example;
var ex2;
var ex3;
var ex4;
var ex5;
var ex6;
var ex7;
var ex8;
var ex9;
var ex10;
var mouse_2;
var ex1;
var WarningClock;
var text_3;
var key_resp_5;
var text_space4;
var paymentClock;
var payment_warn;
var key_resp;
var text_space7;
var StartClock;
var start;
var key_resp_6;
var text_space5;
var trialClock;
var caption_target;
var image_0;
var image_1;
var image_2;
var image_3;
var image_4;
var image_5;
var image_6;
var image_7;
var image_8;
var image_9;
var mouse;
var CodeClock;
var instructions_code;
var mturk;
var text_space6;
var text_x_code;
var key_resp_7;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions1"
  Instructions1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Welcome! \n\nIn this study, we ask you to identify a target image in a set of 10 images, based on a description.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_space = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_space',
    text: 'Press ‘space’ to go on',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.46)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Instructions2"
  Instructions2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'You will always see 10 images. Above them, there will be a description of the target. \n\nWe ask you to click on the target image. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_space2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_space2',
    text: 'Press ‘space’ to go on',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.46)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Example"
  ExampleClock = new util.Clock();
  text_example = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_example',
    text: 'For example, in this case, the target is the fourth image in the first row. You have to click on it.\n\n“The purple jelly fish”\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ex2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex2', units : undefined, 
    image : 'Example/img1.jpg', mask : undefined,
    ori : 0.0, pos : [(- 0.25), 0.1], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  ex3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex3', units : undefined, 
    image : 'Example/img2.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0.1], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  ex4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex4', units : undefined, 
    image : 'Example/img3.jpg', mask : undefined,
    ori : 0.0, pos : [0.25, 0.1], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  ex5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex5', units : undefined, 
    image : 'Example/img4.jpg', mask : undefined,
    ori : 0.0, pos : [0.5, 0.1], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  ex6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex6', units : undefined, 
    image : 'Example/img5.jpg', mask : undefined,
    ori : 0.0, pos : [(- 0.5), (- 0.2)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  ex7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex7', units : undefined, 
    image : 'Example/img6.jpg', mask : undefined,
    ori : 0.0, pos : [(- 0.25), (- 0.2)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  ex8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex8', units : undefined, 
    image : 'Example/img7.jpg', mask : undefined,
    ori : 0.0, pos : [0, (- 0.2)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  ex9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex9', units : undefined, 
    image : 'Example/img8.jpg', mask : undefined,
    ori : 0.0, pos : [0.25, (- 0.2)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  ex10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex10', units : undefined, 
    image : 'Example/img9.jpg', mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.2)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  ex1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ex1', units : undefined, 
    image : 'Example/img0.jpg', mask : undefined,
    ori : 0.0, pos : [(- 0.5), 0.1], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  // Initialize components for Routine "Warning"
  WarningClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: "Some cases can be harder than others, or without a clear answer.\n\nDon't worry.\n\nReply with what you think is the most plausible answer.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_space4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_space4',
    text: 'Press ‘space’ to go on',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.46)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "payment"
  paymentClock = new util.Clock();
  payment_warn = new visual.TextStim({
    win: psychoJS.window,
    name: 'payment_warn',
    text: 'Please, note that the task contains some items which we use to check the quality of your responses. \n\nIf these items indicate that responses were given randomly or without paying attention to the task, we will reject the submitted assignment.\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_space7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_space7',
    text: 'Press ‘space’ to go on',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.46)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Start"
  StartClock = new util.Clock();
  start = new visual.TextStim({
    win: psychoJS.window,
    name: 'start',
    text: "Let's start!",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_space5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_space5',
    text: 'Press ‘space’ to go on',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.46)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  caption_target = new visual.TextStim({
    win: psychoJS.window,
    name: 'caption_target',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_0', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.5), 0.15], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.25), 0.15], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.15], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.25, 0.15], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.5, 0.15], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.5), (- 0.15)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.25), (- 0.15)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.15)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.25, (- 0.15)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  image_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_9', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.5, (- 0.15)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Code"
  CodeClock = new util.Clock();
  instructions_code = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_code',
    text: 'Thank your for completing our study!\n\nBelow you see your personal verification code.\n\nPlease write it down now and enter it into the field "verification code" in the Amazon Mechanical Turk portal for our study (where you found the link to start the study).\n\nPlease note that we can only verify that you completed the study if you enter this code there. If you do not enter this code, we will not be able to compensate you for your participation.\n\nAfter you have written down your code you can finish the study by pressing ‘space’. \n\nThank you again!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  mturk = getRandomInt(1000000, 9999999)
  
  psychoJS.experiment.addData("mturk", mturk)
  
  text_space6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_space6',
    text: 'Press ‘space’ to go on',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.46)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_x_code = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_x_code',
    text: mturk,
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_2_allKeys;
var Instructions1Components;
function Instructions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions1'-------
    t = 0;
    Instructions1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    Instructions1Components = [];
    Instructions1Components.push(text);
    Instructions1Components.push(key_resp_2);
    Instructions1Components.push(text_space);
    
    Instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions1'-------
    // get current time
    t = Instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_space* updates
    if (t >= 0.0 && text_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_space.tStart = t;  // (not accounting for frame time here)
      text_space.frameNStart = frameN;  // exact frame index
      
      text_space.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions1'-------
    Instructions1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var Instructions2Components;
function Instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions2'-------
    t = 0;
    Instructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Instructions2Components = [];
    Instructions2Components.push(text_2);
    Instructions2Components.push(key_resp_3);
    Instructions2Components.push(text_space2);
    
    Instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions2'-------
    // get current time
    t = Instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_space2* updates
    if (t >= 0.0 && text_space2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_space2.tStart = t;  // (not accounting for frame time here)
      text_space2.frameNStart = frameN;  // exact frame index
      
      text_space2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions2'-------
    Instructions2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var ExampleComponents;
function ExampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Example'-------
    t = 0;
    ExampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ExampleComponents = [];
    ExampleComponents.push(text_example);
    ExampleComponents.push(ex2);
    ExampleComponents.push(ex3);
    ExampleComponents.push(ex4);
    ExampleComponents.push(ex5);
    ExampleComponents.push(ex6);
    ExampleComponents.push(ex7);
    ExampleComponents.push(ex8);
    ExampleComponents.push(ex9);
    ExampleComponents.push(ex10);
    ExampleComponents.push(mouse_2);
    ExampleComponents.push(ex1);
    
    ExampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function ExampleRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Example'-------
    // get current time
    t = ExampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_example* updates
    if (t >= 0.0 && text_example.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_example.tStart = t;  // (not accounting for frame time here)
      text_example.frameNStart = frameN;  // exact frame index
      
      text_example.setAutoDraw(true);
    }

    
    // *ex2* updates
    if (t >= 0.0 && ex2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex2.tStart = t;  // (not accounting for frame time here)
      ex2.frameNStart = frameN;  // exact frame index
      
      ex2.setAutoDraw(true);
    }

    
    // *ex3* updates
    if (t >= 0.0 && ex3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex3.tStart = t;  // (not accounting for frame time here)
      ex3.frameNStart = frameN;  // exact frame index
      
      ex3.setAutoDraw(true);
    }

    
    // *ex4* updates
    if (t >= 0.0 && ex4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex4.tStart = t;  // (not accounting for frame time here)
      ex4.frameNStart = frameN;  // exact frame index
      
      ex4.setAutoDraw(true);
    }

    
    // *ex5* updates
    if (t >= 0.0 && ex5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex5.tStart = t;  // (not accounting for frame time here)
      ex5.frameNStart = frameN;  // exact frame index
      
      ex5.setAutoDraw(true);
    }

    
    // *ex6* updates
    if (t >= 0.0 && ex6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex6.tStart = t;  // (not accounting for frame time here)
      ex6.frameNStart = frameN;  // exact frame index
      
      ex6.setAutoDraw(true);
    }

    
    // *ex7* updates
    if (t >= 0.0 && ex7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex7.tStart = t;  // (not accounting for frame time here)
      ex7.frameNStart = frameN;  // exact frame index
      
      ex7.setAutoDraw(true);
    }

    
    // *ex8* updates
    if (t >= 0.0 && ex8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex8.tStart = t;  // (not accounting for frame time here)
      ex8.frameNStart = frameN;  // exact frame index
      
      ex8.setAutoDraw(true);
    }

    
    // *ex9* updates
    if (t >= 0.0 && ex9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex9.tStart = t;  // (not accounting for frame time here)
      ex9.frameNStart = frameN;  // exact frame index
      
      ex9.setAutoDraw(true);
    }

    
    // *ex10* updates
    if (t >= 0.0 && ex10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex10.tStart = t;  // (not accounting for frame time here)
      ex10.frameNStart = frameN;  // exact frame index
      
      ex10.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [ex4]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *ex1* updates
    if (t >= 0.0 && ex1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ex1.tStart = t;  // (not accounting for frame time here)
      ex1.frameNStart = frameN;  // exact frame index
      
      ex1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ExampleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function ExampleRoutineEnd() {
  return async function () {
    //------Ending Routine 'Example'-------
    ExampleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_2.getPos();
    _mouseButtons = mouse_2.getPressed();
    psychoJS.experiment.addData('mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_2.rightButton', _mouseButtons[2]);
    if (mouse_2.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name[0]);}
    // the Routine "Example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var WarningComponents;
function WarningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Warning'-------
    t = 0;
    WarningClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    WarningComponents = [];
    WarningComponents.push(text_3);
    WarningComponents.push(key_resp_5);
    WarningComponents.push(text_space4);
    
    WarningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WarningRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Warning'-------
    // get current time
    t = WarningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_space4* updates
    if (t >= 0.0 && text_space4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_space4.tStart = t;  // (not accounting for frame time here)
      text_space4.frameNStart = frameN;  // exact frame index
      
      text_space4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WarningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WarningRoutineEnd() {
  return async function () {
    //------Ending Routine 'Warning'-------
    WarningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "Warning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var paymentComponents;
function paymentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'payment'-------
    t = 0;
    paymentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    paymentComponents = [];
    paymentComponents.push(payment_warn);
    paymentComponents.push(key_resp);
    paymentComponents.push(text_space7);
    
    paymentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function paymentRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'payment'-------
    // get current time
    t = paymentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *payment_warn* updates
    if (t >= 0.0 && payment_warn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      payment_warn.tStart = t;  // (not accounting for frame time here)
      payment_warn.frameNStart = frameN;  // exact frame index
      
      payment_warn.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_space7* updates
    if (t >= 0.0 && text_space7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_space7.tStart = t;  // (not accounting for frame time here)
      text_space7.frameNStart = frameN;  // exact frame index
      
      text_space7.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    paymentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function paymentRoutineEnd() {
  return async function () {
    //------Ending Routine 'payment'-------
    paymentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "payment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var StartComponents;
function StartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Start'-------
    t = 0;
    StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    StartComponents = [];
    StartComponents.push(start);
    StartComponents.push(key_resp_6);
    StartComponents.push(text_space5);
    
    StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function StartRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Start'-------
    // get current time
    t = StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start* updates
    if (t >= 0.0 && start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start.tStart = t;  // (not accounting for frame time here)
      start.frameNStart = frameN;  // exact frame index
      
      start.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_space5* updates
    if (t >= 0.0 && text_space5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_space5.tStart = t;  // (not accounting for frame time here)
      text_space5.frameNStart = frameN;  // exact frame index
      
      text_space5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StartRoutineEnd() {
  return async function () {
    //------Ending Routine 'Start'-------
    StartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'data_psy.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    caption_target.setText(caption);
    image_0.setImage(img1);
    image_1.setImage(img2);
    image_2.setImage(img3);
    image_3.setImage(img4);
    image_4.setImage(img5);
    image_5.setImage(img6);
    image_6.setImage(img7);
    image_7.setImage(img8);
    image_8.setImage(img9);
    image_9.setImage(img10);
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(caption_target);
    trialComponents.push(image_0);
    trialComponents.push(image_1);
    trialComponents.push(image_2);
    trialComponents.push(image_3);
    trialComponents.push(image_4);
    trialComponents.push(image_5);
    trialComponents.push(image_6);
    trialComponents.push(image_7);
    trialComponents.push(image_8);
    trialComponents.push(image_9);
    trialComponents.push(mouse);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *caption_target* updates
    if (t >= 0.0 && caption_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      caption_target.tStart = t;  // (not accounting for frame time here)
      caption_target.frameNStart = frameN;  // exact frame index
      
      caption_target.setAutoDraw(true);
    }

    
    // *image_0* updates
    if (t >= 0.0 && image_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_0.tStart = t;  // (not accounting for frame time here)
      image_0.frameNStart = frameN;  // exact frame index
      
      image_0.setAutoDraw(true);
    }

    
    // *image_1* updates
    if (t >= 0.0 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index
      
      image_1.setAutoDraw(true);
    }

    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }

    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }

    
    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }

    
    // *image_8* updates
    if (t >= 0.0 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }

    
    // *image_9* updates
    if (t >= 0.0 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.5 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image_0, image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);}
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var CodeComponents;
function CodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Code'-------
    t = 0;
    CodeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    CodeComponents = [];
    CodeComponents.push(instructions_code);
    CodeComponents.push(text_space6);
    CodeComponents.push(text_x_code);
    CodeComponents.push(key_resp_7);
    
    CodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CodeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Code'-------
    // get current time
    t = CodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_code* updates
    if (t >= 0.0 && instructions_code.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_code.tStart = t;  // (not accounting for frame time here)
      instructions_code.frameNStart = frameN;  // exact frame index
      
      instructions_code.setAutoDraw(true);
    }

    
    // *text_space6* updates
    if (t >= 0.0 && text_space6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_space6.tStart = t;  // (not accounting for frame time here)
      text_space6.frameNStart = frameN;  // exact frame index
      
      text_space6.setAutoDraw(true);
    }

    
    // *text_x_code* updates
    if (t >= 0.0 && text_x_code.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_x_code.tStart = t;  // (not accounting for frame time here)
      text_x_code.frameNStart = frameN;  // exact frame index
      
      text_x_code.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CodeRoutineEnd() {
  return async function () {
    //------Ending Routine 'Code'-------
    CodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "Code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
