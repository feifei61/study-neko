exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ murmur2)
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}




/***/ }),

/***/ 137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qX: () => (/* binding */ Person20Filled)
});

// UNUSED EXPORTS: Multiplier15X32Filled, Multiplier15X32Regular, Multiplier15X48Filled, Multiplier15X48Regular, Multiplier18X20Filled, Multiplier18X20Regular, Multiplier18X24Filled, Multiplier18X24Regular, Multiplier18X28Filled, Multiplier18X28Regular, Multiplier18X32Filled, Multiplier18X32Regular, Multiplier18X48Filled, Multiplier18X48Regular, Multiplier1X20Filled, Multiplier1X20Regular, Multiplier1X24Filled, Multiplier1X24Regular, Multiplier1X28Filled, Multiplier1X28Regular, Multiplier1X32Filled, Multiplier1X32Regular, Multiplier1X48Filled, Multiplier1X48Regular, Multiplier2X20Filled, Multiplier2X20Regular, Multiplier2X24Filled, Multiplier2X24Regular, Multiplier2X28Filled, Multiplier2X28Regular, Multiplier2X32Filled, Multiplier2X32Regular, Multiplier2X48Filled, Multiplier2X48Regular, Multiplier5X20Filled, Multiplier5X20Regular, Multiplier5X24Filled, Multiplier5X24Regular, Multiplier5X28Filled, Multiplier5X28Regular, Multiplier5X32Filled, Multiplier5X32Regular, Multiplier5X48Filled, Multiplier5X48Regular, MultiselectLtr16Filled, MultiselectLtr16Regular, MultiselectLtr20Filled, MultiselectLtr20Regular, MultiselectLtr24Filled, MultiselectLtr24Regular, MultiselectRtl16Filled, MultiselectRtl16Regular, MultiselectRtl20Filled, MultiselectRtl20Regular, MultiselectRtl24Filled, MultiselectRtl24Regular, MusicNote120Filled, MusicNote120Regular, MusicNote124Filled, MusicNote124Regular, MusicNote216Filled, MusicNote216Regular, MusicNote220Filled, MusicNote220Regular, MusicNote224Filled, MusicNote224Regular, MusicNote2Play20Filled, MusicNote2Play20Regular, MusicNoteOff120Filled, MusicNoteOff120Regular, MusicNoteOff124Filled, MusicNoteOff124Regular, MusicNoteOff216Filled, MusicNoteOff216Regular, MusicNoteOff220Filled, MusicNoteOff220Regular, MusicNoteOff224Filled, MusicNoteOff224Regular, MyLocation12Filled, MyLocation12Regular, MyLocation16Filled, MyLocation16Regular, MyLocation20Filled, MyLocation20Regular, MyLocation24Filled, MyLocation24Regular, Navigation16Filled, Navigation16Regular, Navigation20Filled, Navigation20Regular, Navigation24Filled, Navigation24Regular, NavigationLocationTarget20Filled, NavigationLocationTarget20Regular, NavigationPlay20Filled, NavigationPlay20Regular, NavigationUnread20Filled, NavigationUnread20Regular, NavigationUnread24Filled, NavigationUnread24Regular, NetworkAdapter16Filled, NetworkAdapter16Regular, NetworkCheck20Filled, NetworkCheck20Regular, NetworkCheck24Filled, NetworkCheck24Regular, New16Filled, New16Regular, New20Filled, New20Regular, New24Filled, New24Regular, News16Filled, News16Regular, News20Filled, News20Regular, News24Filled, News24Regular, News28Filled, News28Regular, Next16Filled, Next16Regular, Next20Filled, Next20Regular, Next24Filled, Next24Regular, Next28Filled, Next28Regular, Next32Filled, Next32Regular, Next48Filled, Next48Regular, Note16Filled, Note16Regular, Note20Filled, Note20Regular, Note24Filled, Note24Regular, Note28Filled, Note28Regular, Note48Filled, Note48Regular, NoteAdd16Filled, NoteAdd16Regular, NoteAdd20Filled, NoteAdd20Regular, NoteAdd24Filled, NoteAdd24Regular, NoteAdd28Filled, NoteAdd28Regular, NoteAdd48Filled, NoteAdd48Regular, NoteEdit20Filled, NoteEdit20Regular, NoteEdit24Filled, NoteEdit24Regular, NotePin16Filled, NotePin16Regular, NotePin20Filled, NotePin20Regular, Notebook16Filled, Notebook16Regular, Notebook20Filled, Notebook20Regular, Notebook24Filled, Notebook24Regular, Notebook32Filled, Notebook32Regular, NotebookAdd20Filled, NotebookAdd20Regular, NotebookAdd24Filled, NotebookAdd24Regular, NotebookArrowCurveDown20Filled, NotebookArrowCurveDown20Regular, NotebookError20Filled, NotebookError20Regular, NotebookError24Filled, NotebookError24Regular, NotebookEye20Filled, NotebookEye20Regular, NotebookLightning20Filled, NotebookLightning20Regular, NotebookLightning24Filled, NotebookLightning24Regular, NotebookQuestionMark20Filled, NotebookQuestionMark20Regular, NotebookQuestionMark24Filled, NotebookQuestionMark24Regular, NotebookSection20Filled, NotebookSection20Regular, NotebookSection24Filled, NotebookSection24Regular, NotebookSectionArrowRight20Filled, NotebookSectionArrowRight20Regular, NotebookSectionArrowRight24Filled, NotebookSectionArrowRight24Regular, NotebookSubsection20Filled, NotebookSubsection20Regular, NotebookSubsection24Filled, NotebookSubsection24Regular, NotebookSync20Filled, NotebookSync20Regular, NotebookSync24Filled, NotebookSync24Regular, Notepad12Filled, Notepad12Regular, Notepad16Filled, Notepad16Regular, Notepad20Filled, Notepad20Regular, Notepad24Filled, Notepad24Regular, Notepad28Filled, Notepad28Regular, Notepad32Filled, Notepad32Regular, NotepadEdit16Filled, NotepadEdit16Regular, NotepadEdit20Filled, NotepadEdit20Regular, NotepadPerson16Filled, NotepadPerson16Regular, NotepadPerson20Filled, NotepadPerson20Regular, NotepadPerson24Filled, NotepadPerson24Regular, NumberCircle116Filled, NumberCircle116Regular, NumberCircle120Filled, NumberCircle120Regular, NumberCircle124Filled, NumberCircle124Regular, NumberRow16Filled, NumberRow16Regular, NumberRow20Filled, NumberRow20Regular, NumberRow24Filled, NumberRow24Regular, NumberSymbol16Filled, NumberSymbol16Regular, NumberSymbol20Filled, NumberSymbol20Regular, NumberSymbol24Filled, NumberSymbol24Regular, NumberSymbol28Filled, NumberSymbol28Regular, NumberSymbol32Filled, NumberSymbol32Regular, NumberSymbol48Filled, NumberSymbol48Regular, NumberSymbolDismiss20Filled, NumberSymbolDismiss20Regular, NumberSymbolDismiss24Filled, NumberSymbolDismiss24Regular, NumberSymbolSquare20Filled, NumberSymbolSquare20Regular, NumberSymbolSquare24Filled, NumberSymbolSquare24Regular, Open16Filled, Open16Regular, Open20Filled, Open20Regular, Open24Filled, Open24Regular, Open28Filled, Open28Regular, Open32Filled, Open32Regular, Open48Filled, Open48Regular, OpenFolder16Filled, OpenFolder16Regular, OpenFolder20Filled, OpenFolder20Regular, OpenFolder24Filled, OpenFolder24Regular, OpenFolder28Filled, OpenFolder28Regular, OpenFolder48Filled, OpenFolder48Regular, OpenOff16Filled, OpenOff16Regular, OpenOff20Filled, OpenOff20Regular, OpenOff24Filled, OpenOff24Regular, OpenOff28Filled, OpenOff28Regular, OpenOff48Filled, OpenOff48Regular, Options16Filled, Options16Regular, Options20Filled, Options20Regular, Options24Filled, Options24Regular, Options48Filled, Options48Regular, Organization12Filled, Organization12Regular, Organization16Filled, Organization16Regular, Organization20Filled, Organization20Regular, Organization24Filled, Organization24Regular, Organization28Filled, Organization28Regular, Organization32Filled, Organization32Regular, Organization48Filled, Organization48Regular, OrganizationHorizontal20Filled, OrganizationHorizontal20Regular, Orientation20Filled, Orientation20Regular, Orientation24Filled, Orientation24Regular, Oval16Filled, Oval16Regular, Oval20Filled, Oval20Regular, Oval24Filled, Oval24Regular, Oval28Filled, Oval28Regular, Oval32Filled, Oval32Regular, Oval48Filled, Oval48Regular, Oven20Filled, Oven20Regular, Oven24Filled, Oven24Regular, Oven32Filled, Oven32Regular, Oven48Filled, Oven48Regular, PaddingDown20Filled, PaddingDown20Regular, PaddingDown24Filled, PaddingDown24Regular, PaddingLeft20Filled, PaddingLeft20Regular, PaddingLeft24Filled, PaddingLeft24Regular, PaddingRight20Filled, PaddingRight20Regular, PaddingRight24Filled, PaddingRight24Regular, PaddingTop20Filled, PaddingTop20Regular, PaddingTop24Filled, PaddingTop24Regular, PageFit16Filled, PageFit16Regular, PageFit20Filled, PageFit20Regular, PageFit24Filled, PageFit24Regular, PaintBrush16Filled, PaintBrush16Regular, PaintBrush20Filled, PaintBrush20Regular, PaintBrush24Filled, PaintBrush24Regular, PaintBrushArrowDown20Filled, PaintBrushArrowDown20Regular, PaintBrushArrowDown24Filled, PaintBrushArrowDown24Regular, PaintBrushArrowUp20Filled, PaintBrushArrowUp20Regular, PaintBrushArrowUp24Filled, PaintBrushArrowUp24Regular, PaintBucket16Filled, PaintBucket16Regular, PaintBucket20Filled, PaintBucket20Regular, PaintBucket24Filled, PaintBucket24Regular, Pair20Filled, Pair20Regular, Pair24Filled, Pair24Regular, PanelBottom20Filled, PanelBottom20Regular, PanelBottomContract20Filled, PanelBottomContract20Regular, PanelBottomExpand20Filled, PanelBottomExpand20Regular, PanelLeft16Filled, PanelLeft16Regular, PanelLeft20Filled, PanelLeft20Regular, PanelLeft24Filled, PanelLeft24Regular, PanelLeft28Filled, PanelLeft28Regular, PanelLeft32Filled, PanelLeft32Regular, PanelLeft48Filled, PanelLeft48Regular, PanelLeftAdd16Filled, PanelLeftAdd16Regular, PanelLeftAdd20Filled, PanelLeftAdd20Regular, PanelLeftAdd24Filled, PanelLeftAdd24Regular, PanelLeftAdd28Filled, PanelLeftAdd28Regular, PanelLeftAdd32Filled, PanelLeftAdd32Regular, PanelLeftAdd48Filled, PanelLeftAdd48Regular, PanelLeftContract16Filled, PanelLeftContract16Regular, PanelLeftContract20Filled, PanelLeftContract20Regular, PanelLeftContract24Filled, PanelLeftContract24Regular, PanelLeftContract28Filled, PanelLeftContract28Regular, PanelLeftExpand16Filled, PanelLeftExpand16Regular, PanelLeftExpand20Filled, PanelLeftExpand20Regular, PanelLeftExpand24Filled, PanelLeftExpand24Regular, PanelLeftExpand28Filled, PanelLeftExpand28Regular, PanelLeftFocusRight16Filled, PanelLeftFocusRight20Filled, PanelLeftFocusRight24Filled, PanelLeftFocusRight28Filled, PanelLeftHeader16Filled, PanelLeftHeader16Regular, PanelLeftHeader20Filled, PanelLeftHeader20Regular, PanelLeftHeader24Filled, PanelLeftHeader24Regular, PanelLeftHeader28Filled, PanelLeftHeader28Regular, PanelLeftHeader32Filled, PanelLeftHeader32Regular, PanelLeftHeader48Filled, PanelLeftHeader48Regular, PanelLeftHeaderAdd16Filled, PanelLeftHeaderAdd16Regular, PanelLeftHeaderAdd20Filled, PanelLeftHeaderAdd20Regular, PanelLeftHeaderAdd24Filled, PanelLeftHeaderAdd24Regular, PanelLeftHeaderAdd28Filled, PanelLeftHeaderAdd28Regular, PanelLeftHeaderAdd32Filled, PanelLeftHeaderAdd32Regular, PanelLeftHeaderAdd48Filled, PanelLeftHeaderAdd48Regular, PanelLeftHeaderKey16Filled, PanelLeftHeaderKey16Regular, PanelLeftHeaderKey20Filled, PanelLeftHeaderKey20Regular, PanelLeftHeaderKey24Filled, PanelLeftHeaderKey24Regular, PanelLeftKey16Filled, PanelLeftKey16Regular, PanelLeftKey20Filled, PanelLeftKey20Regular, PanelLeftKey24Filled, PanelLeftKey24Regular, PanelLeftText16Filled, PanelLeftText16Regular, PanelLeftText20Filled, PanelLeftText20Regular, PanelLeftText24Filled, PanelLeftText24Regular, PanelLeftText28Filled, PanelLeftText28Regular, PanelLeftText32Filled, PanelLeftText32Regular, PanelLeftText48Filled, PanelLeftText48Regular, PanelLeftTextAdd16Filled, PanelLeftTextAdd16Regular, PanelLeftTextAdd20Filled, PanelLeftTextAdd20Regular, PanelLeftTextAdd24Filled, PanelLeftTextAdd24Regular, PanelLeftTextAdd28Filled, PanelLeftTextAdd28Regular, PanelLeftTextAdd32Filled, PanelLeftTextAdd32Regular, PanelLeftTextAdd48Filled, PanelLeftTextAdd48Regular, PanelLeftTextDismiss16Filled, PanelLeftTextDismiss16Regular, PanelLeftTextDismiss20Filled, PanelLeftTextDismiss20Regular, PanelLeftTextDismiss24Filled, PanelLeftTextDismiss24Regular, PanelLeftTextDismiss28Filled, PanelLeftTextDismiss28Regular, PanelLeftTextDismiss32Filled, PanelLeftTextDismiss32Regular, PanelLeftTextDismiss48Filled, PanelLeftTextDismiss48Regular, PanelRight16Filled, PanelRight16Regular, PanelRight20Filled, PanelRight20Regular, PanelRight24Filled, PanelRight24Regular, PanelRight28Filled, PanelRight28Regular, PanelRight32Filled, PanelRight32Regular, PanelRight48Filled, PanelRight48Regular, PanelRightAdd20Filled, PanelRightAdd20Regular, PanelRightContract16Filled, PanelRightContract16Regular, PanelRightContract20Filled, PanelRightContract20Regular, PanelRightContract24Filled, PanelRightContract24Regular, PanelRightCursor20Filled, PanelRightCursor20Regular, PanelRightCursor24Filled, PanelRightCursor24Regular, PanelRightExpand20Filled, PanelRightExpand20Regular, PanelSeparateWindow20Filled, PanelSeparateWindow20Regular, PanelTopContract20Filled, PanelTopContract20Regular, PanelTopExpand20Filled, PanelTopExpand20Regular, Password16Filled, Password16Regular, Password20Filled, Password20Regular, Password24Filled, Password24Regular, Patch20Filled, Patch20Regular, Patch24Filled, Patch24Regular, Patient20Filled, Patient20Regular, Patient24Filled, Patient24Regular, Patient32Filled, Patient32Regular, Pause12Filled, Pause12Regular, Pause16Filled, Pause16Regular, Pause20Filled, Pause20Regular, Pause24Filled, Pause24Regular, Pause28Filled, Pause28Regular, Pause32Filled, Pause32Regular, Pause48Filled, Pause48Regular, PauseCircle20Filled, PauseCircle20Regular, PauseCircle24Filled, PauseCircle24Regular, PauseOff16Filled, PauseOff16Regular, PauseOff20Filled, PauseOff20Regular, PauseSettings16Filled, PauseSettings16Regular, PauseSettings20Filled, PauseSettings20Regular, Payment16Filled, Payment16Regular, Payment20Filled, Payment20Regular, Payment24Filled, Payment24Regular, Payment28Filled, Payment28Regular, Payment32Filled, Payment32Regular, Payment48Filled, Payment48Regular, Pen16Filled, Pen16Regular, Pen20Filled, Pen20Regular, Pen24Filled, Pen24Regular, Pen28Filled, Pen28Regular, Pen32Filled, Pen32Regular, Pen48Filled, Pen48Regular, PenDismiss16Filled, PenDismiss16Regular, PenDismiss20Filled, PenDismiss20Regular, PenDismiss24Filled, PenDismiss24Regular, PenDismiss28Filled, PenDismiss28Regular, PenDismiss32Filled, PenDismiss32Regular, PenDismiss48Filled, PenDismiss48Regular, PenOff16Filled, PenOff16Regular, PenOff20Filled, PenOff20Regular, PenOff24Filled, PenOff24Regular, PenOff28Filled, PenOff28Regular, PenOff32Filled, PenOff32Regular, PenOff48Filled, PenOff48Regular, PenProhibited16Filled, PenProhibited16Regular, PenProhibited20Filled, PenProhibited20Regular, PenProhibited24Filled, PenProhibited24Regular, PenProhibited28Filled, PenProhibited28Regular, PenProhibited32Filled, PenProhibited32Regular, PenProhibited48Filled, PenProhibited48Regular, Pentagon20Filled, Pentagon20Regular, Pentagon32Filled, Pentagon32Regular, Pentagon48Filled, Pentagon48Regular, People12Filled, People12Regular, People16Filled, People16Regular, People20Filled, People20Regular, People24Filled, People24Regular, People28Filled, People28Regular, People32Filled, People32Regular, People48Filled, People48Regular, PeopleAdd16Filled, PeopleAdd16Regular, PeopleAdd20Filled, PeopleAdd20Regular, PeopleAdd24Filled, PeopleAdd24Regular, PeopleAdd28Filled, PeopleAdd28Regular, PeopleAudience20Filled, PeopleAudience20Regular, PeopleAudience24Filled, PeopleAudience24Regular, PeopleCall16Filled, PeopleCall16Regular, PeopleCall20Filled, PeopleCall20Regular, PeopleCall24Filled, PeopleCall24Regular, PeopleCheckmark16Filled, PeopleCheckmark16Regular, PeopleCheckmark20Filled, PeopleCheckmark20Regular, PeopleCheckmark24Filled, PeopleCheckmark24Regular, PeopleCommunity16Filled, PeopleCommunity16Regular, PeopleCommunity20Filled, PeopleCommunity20Regular, PeopleCommunity24Filled, PeopleCommunity24Regular, PeopleCommunity28Filled, PeopleCommunity28Regular, PeopleCommunity32Filled, PeopleCommunity32Regular, PeopleCommunity48Filled, PeopleCommunity48Regular, PeopleCommunityAdd20Filled, PeopleCommunityAdd20Regular, PeopleCommunityAdd24Filled, PeopleCommunityAdd24Regular, PeopleCommunityAdd28Filled, PeopleCommunityAdd28Regular, PeopleEdit16Filled, PeopleEdit16Regular, PeopleEdit20Filled, PeopleEdit20Regular, PeopleEdit24Filled, PeopleEdit24Regular, PeopleError16Filled, PeopleError16Regular, PeopleError20Filled, PeopleError20Regular, PeopleError24Filled, PeopleError24Regular, PeopleList16Filled, PeopleList16Regular, PeopleList20Filled, PeopleList20Regular, PeopleList24Filled, PeopleList24Regular, PeopleList28Filled, PeopleList28Regular, PeopleLock20Filled, PeopleLock20Regular, PeopleLock24Filled, PeopleLock24Regular, PeopleMoney20Filled, PeopleMoney20Regular, PeopleMoney24Filled, PeopleMoney24Regular, PeopleProhibited16Filled, PeopleProhibited16Regular, PeopleProhibited20Filled, PeopleProhibited20Regular, PeopleProhibited24Filled, PeopleProhibited24Regular, PeopleQueue20Filled, PeopleQueue20Regular, PeopleQueue24Filled, PeopleQueue24Regular, PeopleSearch20Filled, PeopleSearch20Regular, PeopleSearch24Filled, PeopleSearch24Regular, PeopleSettings20Filled, PeopleSettings20Regular, PeopleSettings24Filled, PeopleSettings24Regular, PeopleSettings28Filled, PeopleSettings28Regular, PeopleStar16Filled, PeopleStar16Regular, PeopleStar20Filled, PeopleStar20Regular, PeopleStar24Filled, PeopleStar24Regular, PeopleStar28Filled, PeopleStar28Regular, PeopleStar32Filled, PeopleStar32Regular, PeopleStar48Filled, PeopleStar48Regular, PeopleSwap16Filled, PeopleSwap16Regular, PeopleSwap20Filled, PeopleSwap20Regular, PeopleSwap24Filled, PeopleSwap24Regular, PeopleSwap28Filled, PeopleSwap28Regular, PeopleSync16Filled, PeopleSync16Regular, PeopleSync20Filled, PeopleSync20Regular, PeopleSync28Filled, PeopleSync28Regular, PeopleTeam16Filled, PeopleTeam16Regular, PeopleTeam20Filled, PeopleTeam20Regular, PeopleTeam24Filled, PeopleTeam24Regular, PeopleTeam28Filled, PeopleTeam28Regular, PeopleTeam32Filled, PeopleTeam32Regular, PeopleTeam48Filled, PeopleTeam48Regular, PeopleTeamAdd20Filled, PeopleTeamAdd20Regular, PeopleTeamAdd24Filled, PeopleTeamAdd24Regular, PeopleTeamDelete16Filled, PeopleTeamDelete16Regular, PeopleTeamDelete20Filled, PeopleTeamDelete20Regular, PeopleTeamDelete24Filled, PeopleTeamDelete24Regular, PeopleTeamDelete28Filled, PeopleTeamDelete28Regular, PeopleTeamDelete32Filled, PeopleTeamDelete32Regular, PeopleTeamToolbox20Filled, PeopleTeamToolbox20Regular, PeopleTeamToolbox24Filled, PeopleTeamToolbox24Regular, PeopleToolbox16Filled, PeopleToolbox16Regular, PeopleToolbox20Filled, PeopleToolbox20Regular, Person12Filled, Person12Regular, Person16Filled, Person16Regular, Person20Regular, Person24Filled, Person24Regular, Person28Filled, Person28Regular, Person32Filled, Person32Regular, Person48Filled, Person48Regular, Person520Filled, Person520Regular, Person532Filled, Person532Regular, Person620Filled, Person620Regular, Person632Filled, Person632Regular, PersonAccounts20Filled, PersonAccounts20Regular, PersonAccounts24Filled, PersonAccounts24Regular, PersonAdd16Filled, PersonAdd16Regular, PersonAdd20Filled, PersonAdd20Regular, PersonAdd24Filled, PersonAdd24Regular, PersonAdd28Filled, PersonAdd28Regular, PersonAlert16Filled, PersonAlert16Regular, PersonAlert20Filled, PersonAlert20Regular, PersonAlert24Filled, PersonAlert24Regular, PersonArrowBack16Filled, PersonArrowBack16Regular, PersonArrowBack20Filled, PersonArrowBack20Regular, PersonArrowBack24Filled, PersonArrowBack24Regular, PersonArrowBack28Filled, PersonArrowBack28Regular, PersonArrowBack32Filled, PersonArrowBack32Regular, PersonArrowBack48Filled, PersonArrowBack48Regular, PersonArrowLeft16Filled, PersonArrowLeft16Regular, PersonArrowLeft20Filled, PersonArrowLeft20Regular, PersonArrowLeft24Filled, PersonArrowLeft24Regular, PersonArrowRight16Filled, PersonArrowRight16Regular, PersonArrowRight20Filled, PersonArrowRight20Regular, PersonArrowRight24Filled, PersonArrowRight24Regular, PersonAvailable16Filled, PersonAvailable16Regular, PersonAvailable20Filled, PersonAvailable20Regular, PersonAvailable24Filled, PersonAvailable24Regular, PersonBoard16Filled, PersonBoard16Regular, PersonBoard20Filled, PersonBoard20Regular, PersonBoard24Filled, PersonBoard24Regular, PersonBoard28Filled, PersonBoard28Regular, PersonBoard32Filled, PersonBoard32Regular, PersonCall16Filled, PersonCall16Regular, PersonCall20Filled, PersonCall20Regular, PersonCall24Filled, PersonCall24Regular, PersonChat16Filled, PersonChat16Regular, PersonChat20Filled, PersonChat20Regular, PersonChat24Filled, PersonChat24Regular, PersonCircle12Filled, PersonCircle12Regular, PersonCircle20Filled, PersonCircle20Regular, PersonCircle24Filled, PersonCircle24Regular, PersonCircle28Filled, PersonCircle28Regular, PersonCircle32Filled, PersonCircle32Regular, PersonClock16Filled, PersonClock16Regular, PersonClock20Filled, PersonClock20Regular, PersonClock24Filled, PersonClock24Regular, PersonDelete16Filled, PersonDelete16Regular, PersonDelete20Filled, PersonDelete20Regular, PersonDelete24Filled, PersonDelete24Regular, PersonDesktop20Filled, PersonDesktop20Regular, PersonEdit20Filled, PersonEdit20Regular, PersonEdit24Filled, PersonEdit24Regular, PersonFeedback16Filled, PersonFeedback16Regular, PersonFeedback20Filled, PersonFeedback20Regular, PersonFeedback24Filled, PersonFeedback24Regular, PersonFeedback28Filled, PersonFeedback28Regular, PersonFeedback32Filled, PersonFeedback32Regular, PersonFeedback48Filled, PersonFeedback48Regular, PersonHeart20Filled, PersonHeart20Regular, PersonHeart24Filled, PersonHeart24Regular, PersonInfo16Filled, PersonInfo16Regular, PersonInfo20Filled, PersonInfo20Regular, PersonInfo24Filled, PersonInfo24Regular, PersonKey20Filled, PersonKey20Regular, PersonLightbulb20Filled, PersonLightbulb20Regular, PersonLightbulb24Filled, PersonLightbulb24Regular, PersonLightning16Filled, PersonLightning16Regular, PersonLightning20Filled, PersonLightning20Regular, PersonLink16Filled, PersonLink16Regular, PersonLink20Filled, PersonLink20Regular, PersonLink24Filled, PersonLink24Regular, PersonLink28Filled, PersonLink28Regular, PersonLink32Filled, PersonLink32Regular, PersonLink48Filled, PersonLink48Regular, PersonLock16Filled, PersonLock16Regular, PersonLock20Filled, PersonLock20Regular, PersonLock24Filled, PersonLock24Regular, PersonMail16Filled, PersonMail16Regular, PersonMail20Filled, PersonMail20Regular, PersonMail24Filled, PersonMail24Regular, PersonMail28Filled, PersonMail28Regular, PersonMail48Filled, PersonMail48Regular, PersonMoney20Filled, PersonMoney20Regular, PersonMoney24Filled, PersonMoney24Regular, PersonNote16Filled, PersonNote16Regular, PersonNote20Filled, PersonNote20Regular, PersonNote24Filled, PersonNote24Regular

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@griffel/react/index.cjs.js
var index_cjs = __webpack_require__(3506);
;// CONCATENATED MODULE: ./node_modules/@fluentui/react-icons/lib/utils/useIconState.js

const useRootStyles = (0,index_cjs/* __styles */.sF)({
  "root": {
    "mc9l5x": "f1w7gpdv",
    "Bg96gwp": "fez10in",
    "ycbfsm": "fg4l7m0"
  }
}, {
  "d": [".f1w7gpdv{display:inline;}", ".fez10in{line-height:0;}"],
  "t": ["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"]
});
const useIconState = props => {
  const {
    title,
    primaryFill = "currentColor",
    ...rest
  } = props;
  const state = {
    ...rest,
    title: undefined,
    fill: primaryFill
  };
  const styles = useRootStyles();
  state.className = (0,index_cjs/* mergeClasses */.ze)(styles.root, state.className);
  if (title) {
    state['aria-label'] = title;
  }
  if (!state['aria-label'] && !state['aria-labelledby']) {
    state['aria-hidden'] = true;
  } else {
    state['role'] = 'img';
  }
  return state;
};
;// CONCATENATED MODULE: ./node_modules/@fluentui/react-icons/lib/utils/createFluentIcon.js


const createFluentIcon_createFluentIcon = (displayName, width, paths) => {
  const viewBoxWidth = width === "1em" ? "20" : width;
  const Icon = props => {
    const state = {
      ...useIconState(props),
      width,
      height: width,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: "http://www.w3.org/2000/svg"
    };
    return react_.createElement("svg", state, ...paths.map(d => react_.createElement("path", {
      d,
      fill: state.fill
    })));
  };
  Icon.displayName = displayName;
  return Icon;
};
;// CONCATENATED MODULE: ./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-8.js

const Multiplier15X32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier15X32Filled', "32", ["M7.2 9.09c.49.19.8.65.8 1.16v11.5a1.25 1.25 0 1 1-2.5 0v-8.5c-.43.32-.95.68-1.6 1.07a1.25 1.25 0 0 1-1.3-2.14c1.03-.61 1.6-1.07 2.02-1.47.29-.27.48-.49.71-.75l.5-.56c.36-.38.9-.5 1.38-.31ZM14.26 9c-.64 0-1.18.49-1.24 1.13l-.5 5a1.25 1.25 0 0 0 1.41 1.36l2.9-.41a2.35 2.35 0 1 1 .33 4.67h-.43c-.7 0-1.38-.27-1.9-.74l-.72-.68a1.25 1.25 0 1 0-1.7 1.84l.72.67c.98.9 2.26 1.41 3.6 1.41h.43a4.85 4.85 0 1 0-.67-9.65l-1.33.2.23-2.3h4.87a1.25 1.25 0 1 0 0-2.5h-6Zm10.88 7.37a1.25 1.25 0 0 0-1.76 1.76l1.36 1.37-1.36 1.37a1.25 1.25 0 0 0 1.76 1.76l1.37-1.36 1.37 1.36a1.25 1.25 0 0 0 1.76-1.76l-1.36-1.37 1.36-1.37a1.25 1.25 0 0 0-1.76-1.76l-1.37 1.36-1.37-1.36ZM11 22a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"])));
const Multiplier15X32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier15X32Regular', "32", ["M14.25 9a1 1 0 0 0-1 .9l-.5 5.26a1 1 0 0 0 1.13 1.08l3.28-.43a2.73 2.73 0 1 1 .36 5.44h-.53c-.9 0-1.77-.38-2.39-1.04l-.37-.4a1 1 0 0 0-1.46 1.37l.37.4a5.26 5.26 0 0 0 3.85 1.67h.53a4.73 4.73 0 1 0-.62-9.42l-2.04.27.3-3.1h5.34a1 1 0 1 0 0-2h-6.25Zm10.46 7.3a1 1 0 0 0-1.42 1.4l1.8 1.8-1.8 1.8a1 1 0 0 0 1.42 1.4l1.79-1.79 1.8 1.8a1 1 0 1 0 1.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 0 0-1.42-1.4l-1.79 1.79-1.8-1.8ZM11 22a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.33 9.05A1 1 0 0 1 8 10v12a1 1 0 1 1-2 0v-9.58c-.55.47-1.22.98-1.99 1.44A1 1 0 1 1 3 12.14 13.27 13.27 0 0 0 6.2 9.4a1 1 0 0 1 1.12-.34Z"])));
const Multiplier15X48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier15X48Filled', "48", ["M10.9 14.05c.65.18 1.1.78 1.1 1.45v17a1.5 1.5 0 1 1-3 0V19.67a15.4 15.4 0 0 1-2.73 2.12 1.5 1.5 0 0 1-1.54-2.58c1.37-.82 2.5-1.94 3.3-2.88a15.94 15.94 0 0 0 1.17-1.59l.01-.01a1.5 1.5 0 0 1 1.7-.68ZM21 14a1.5 1.5 0 0 0-1.48 1.29l-1 7a1.5 1.5 0 0 0 1.62 1.7l5.01-.45a3.99 3.99 0 1 1 .36 7.96h-.92c-1.26 0-2.47-.5-3.36-1.4l-.67-.66a1.5 1.5 0 0 0-2.12 2.12l.67.67a7.75 7.75 0 0 0 5.48 2.27h.92a6.99 6.99 0 1 0-.63-13.95l-3.13.28.55-3.83H30a1.5 1.5 0 0 0 0-3h-9Zm15.56 10.44a1.5 1.5 0 0 0-2.12 2.12L36.88 29l-2.44 2.44a1.5 1.5 0 0 0 2.12 2.12L39 31.12l2.44 2.44a1.5 1.5 0 0 0 2.12-2.12L41.12 29l2.44-2.44a1.5 1.5 0 0 0-2.12-2.12L39 26.88l-2.44-2.44ZM16.5 32.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"])));
const Multiplier15X48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier15X48Regular', "48", ["M11.5 15.25a1.25 1.25 0 0 0-2.32-.64l-.02.03a9.89 9.89 0 0 1-.34.51c-.23.35-.58.82-1 1.33a9.67 9.67 0 0 1-3.09 2.63 1.25 1.25 0 0 0 1.04 2.28A10.77 10.77 0 0 0 9 18.92v13.83a1.25 1.25 0 0 0 2.5 0v-17.5Zm10-1.25c-.64 0-1.18.49-1.24 1.13l-.75 7.5a1.25 1.25 0 0 0 1.39 1.36l4.45-.53a4.16 4.16 0 1 1 .5 8.29h-.5c-1.3 0-2.55-.55-3.43-1.52l-.74-.82a1.25 1.25 0 1 0-1.85 1.68l.74.82a7.14 7.14 0 0 0 5.29 2.34h.48a6.66 6.66 0 1 0-.79-13.27l-2.9.34.48-4.82h7.62a1.25 1.25 0 0 0 0-2.5H21.5Zm14.63 10.37a1.25 1.25 0 1 0-1.76 1.76L37.23 29l-2.86 2.87a1.25 1.25 0 0 0 1.76 1.76L39 30.77l2.87 2.86a1.25 1.25 0 0 0 1.76-1.76L40.77 29l2.86-2.87a1.25 1.25 0 0 0-1.76-1.76L39 27.23l-2.87-2.86ZM16.5 32.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"])));
const Multiplier18X20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier18X20Filled', "20", ["M4.46 6.03c.32.1.54.39.54.72v6.5a.75.75 0 0 1-1.5 0V8.81c-.24.19-.52.38-.86.58a.75.75 0 0 1-.78-1.28c.58-.35.9-.62 1.13-.87.22-.24.36-.47.58-.81l.04-.08a.75.75 0 0 1 .85-.32Zm8.79 2.22c0 .58-.23 1.07-.59 1.45.51.44.84 1.07.84 1.8 0 1.47-1.33 2.5-2.75 2.5S8 12.97 8 11.5c0-.73.33-1.36.84-1.8a2.08 2.08 0 0 1-.59-1.45C8.25 6.9 9.48 6 10.75 6s2.5.9 2.5 2.25Zm-2.5-.75c-.66 0-1 .44-1 .75s.34.75 1 .75c.66 0 1-.44 1-.75s-.34-.75-1-.75Zm-1.25 4c0 .46.46 1 1.25 1s1.25-.54 1.25-1c0-.46-.46-1-1.25-1s-1.25.54-1.25 1Zm4.72-1.28c.3-.3.77-.3 1.06 0l.72.72.72-.72a.75.75 0 1 1 1.06 1.06l-.72.72.72.72a.75.75 0 1 1-1.06 1.06l-.72-.72-.72.72a.75.75 0 1 1-1.06-1.06l.72-.72-.72-.72a.75.75 0 0 1 0-1.06ZM7 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"])));
const Multiplier18X20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier18X20Regular', "20", ["M4.66 6.03c.2.06.34.26.34.47v7a.5.5 0 0 1-1 0V7.96a6 6 0 0 1-1.24.97.5.5 0 0 1-.52-.86c.94-.56 1.31-1.1 1.64-1.57l.22-.3a.5.5 0 0 1 .56-.17ZM13 8c0 .59-.27 1.09-.69 1.44.7.44 1.19 1.18 1.19 2.06 0 1.43-1.29 2.5-2.75 2.5S8 12.93 8 11.5c0-.88.48-1.62 1.19-2.06A1.87 1.87 0 0 1 8.5 8c0-1.17 1.08-2 2.25-2S13 6.83 13 8Zm-2.25-1c-.77 0-1.25.52-1.25 1s.48 1 1.25 1S12 8.48 12 8s-.48-1-1.25-1ZM9 11.5c0 .77.73 1.5 1.75 1.5s1.75-.73 1.75-1.5-.73-1.5-1.75-1.5S9 10.73 9 11.5Zm5.15-1.35c.2-.2.5-.2.7 0L16 11.29l1.15-1.14a.5.5 0 0 1 .7.7L16.71 12l1.14 1.15a.5.5 0 0 1-.7.7L16 12.71l-1.15 1.14a.5.5 0 0 1-.7-.7L15.29 12l-1.14-1.15a.5.5 0 0 1 0-.7ZM7 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"])));
const Multiplier18X24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier18X24Filled', "24", ["M16 9.5c0 .66-.24 1.23-.62 1.68A3.5 3.5 0 0 1 13 17.25a3.5 3.5 0 0 1-2.38-6.07A2.56 2.56 0 0 1 10 9.5c0-1.64 1.47-2.75 3-2.75s3 1.11 3 2.75Zm-3-.75c-.68 0-1 .46-1 .75 0 .3.32.75 1 .75.68 0 1-.46 1-.75 0-.3-.32-.75-1-.75Zm-1.5 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM7.75 17a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm9.54-4.7a1 1 0 0 1 1.42 0l.79.79.8-.8a1 1 0 0 1 1.4 1.42l-.79.79.8.8a1 1 0 0 1-1.42 1.4l-.79-.79-.8.8a1 1 0 0 1-1.4-1.42l.79-.79-.8-.8a1 1 0 0 1 0-1.4ZM6 7.9a1 1 0 0 0-1.85-.52l-.08.12c-.4.67-.84 1.4-2.08 2.14A1 1 0 1 0 3 11.36c.38-.23.7-.46.99-.69V16a1 1 0 0 0 2 0V7.9Z"])));
const Multiplier18X24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier18X24Regular', "24", ["M16 9.5a2.6 2.6 0 0 1-.86 1.93c.82.58 1.36 1.5 1.36 2.57 0 1.86-1.64 3.25-3.5 3.25S9.5 15.86 9.5 14c0-1.07.54-1.99 1.36-2.57A2.6 2.6 0 0 1 10 9.5c0-1.6 1.43-2.75 3-2.75s3 1.15 3 2.75Zm-3-1.25c-.91 0-1.5.64-1.5 1.25s.59 1.25 1.5 1.25 1.5-.64 1.5-1.25-.59-1.25-1.5-1.25ZM11 14c0 .9.83 1.75 2 1.75s2-.85 2-1.75-.83-1.75-2-1.75-2 .85-2 1.75Zm7.28-1.78a.75.75 0 0 0-1.06 1.06l1.22 1.22-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 0 0 1.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 1 0-1.06-1.06l-1.22 1.22-1.22-1.22ZM8.5 16.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.45 7.03c.33.09.55.38.55.72v8.5a.75.75 0 0 1-1.5 0V9.83c-.38.37-.84.75-1.36 1.06a.75.75 0 0 1-.78-1.28A6.88 6.88 0 0 0 4.6 7.37v-.01h.01a.75.75 0 0 1 .84-.33Z"])));
const Multiplier18X28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier18X28Filled', "28", ["M15.25 7.75c-1.82 0-3.75 1.17-3.75 3.13 0 .81.34 1.5.87 2.01A3.83 3.83 0 0 0 10.75 16c0 2.32 2.07 4 4.38 4 2.3 0 4.37-1.68 4.37-4 0-1.23-.59-2.29-1.48-3 .59-.53.98-1.25.98-2.13 0-1.95-1.93-3.12-3.75-3.12Zm-1.75 3.13c0-.4.53-1.13 1.75-1.13s1.75.73 1.75 1.13c0 .4-.53 1.12-1.75 1.12s-1.75-.73-1.75-1.13ZM15.13 14c1.42 0 2.37 1 2.37 2s-.95 2-2.38 2c-1.42 0-2.37-1-2.37-2s.95-2 2.38-2Zm6.58.3a1 1 0 0 0-1.42 1.4l1.3 1.3-1.3 1.3a1 1 0 0 0 1.42 1.4L23 18.42l1.3 1.3a1 1 0 0 0 1.4-1.42L24.42 17l1.3-1.3a1 1 0 0 0-1.42-1.4L23 15.58l-1.3-1.3ZM8.75 20a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-6.6-7.49a1 1 0 0 1 .34-1.37A8.13 8.13 0 0 0 5.14 8.5 1 1 0 0 1 7 9v10a1 1 0 0 1-2 0v-7.27c-.43.4-.92.79-1.49 1.13a1 1 0 0 1-1.37-.35Zm3-4.03Z"])));
const Multiplier18X28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier18X28Regular', "28", ["M5.97 8.03c.32.1.53.4.53.72v10.5a.75.75 0 0 1-1.5 0v-8.3c-.45.47-1.05.95-1.86 1.44a.75.75 0 0 1-.78-1.28c1.53-.92 2.08-1.75 2.58-2.5.07-.1.13-.2.2-.28a.75.75 0 0 1 .83-.3ZM18.5 11a2.8 2.8 0 0 1-1.05 2.18 3.8 3.8 0 0 1 1.8 3.2c0 2.19-1.9 3.87-4.13 3.87-2.22 0-4.12-1.68-4.12-3.88a3.8 3.8 0 0 1 1.8-3.2A2.8 2.8 0 0 1 11.75 11c0-1.76 1.62-3 3.38-3 1.75 0 3.37 1.24 3.37 3Zm-3.38-1.5c-1.14 0-1.87.78-1.87 1.5s.73 1.5 1.88 1.5c1.14 0 1.87-.78 1.87-1.5s-.73-1.5-1.88-1.5Zm-2.62 6.88c0 1.25 1.12 2.37 2.63 2.37 1.5 0 2.62-1.12 2.62-2.38 0-1.25-1.12-2.37-2.63-2.37-1.5 0-2.62 1.12-2.62 2.38Zm7.72-2.16c.3-.3.77-.3 1.06 0L23 15.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L24.06 17l1.72 1.72a.75.75 0 1 1-1.06 1.06L23 18.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L21.94 17l-1.72-1.72a.75.75 0 0 1 0-1.06ZM9.5 19.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"])));
const Multiplier18X32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier18X32Filled', "32", ["M12.75 12.63c0-2.3 2.1-3.88 4.28-3.88 2.2 0 4.29 1.57 4.29 3.88 0 1-.4 1.86-1.03 2.52A4.43 4.43 0 0 1 22 18.62c0 2.68-2.37 4.63-5 4.63s-5-1.95-5-4.63c0-1.44.7-2.68 1.74-3.5a3.6 3.6 0 0 1-.99-2.5Zm4.28-1.38c-1.16 0-1.78.78-1.78 1.38 0 .6.62 1.37 1.78 1.37 1.16 0 1.79-.78 1.79-1.38 0-.6-.63-1.37-1.79-1.37ZM17 16.5c-1.5 0-2.5 1.07-2.5 2.13 0 1.05 1 2.12 2.5 2.12s2.5-1.07 2.5-2.13c0-1.05-1-2.12-2.5-2.12Zm8.13-.13a1.25 1.25 0 0 0-1.76 1.76l1.36 1.37-1.36 1.37a1.25 1.25 0 0 0 1.76 1.76l1.37-1.36 1.37 1.36a1.25 1.25 0 0 0 1.76-1.76l-1.36-1.37 1.36-1.37a1.25 1.25 0 0 0-1.76-1.76l-1.37 1.36-1.37-1.36ZM11 22a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.2 9.09c.49.19.8.65.8 1.16v11.5a1.25 1.25 0 1 1-2.5 0v-8.5c-.43.32-.95.68-1.6 1.07a1.25 1.25 0 0 1-1.3-2.14 11.1 11.1 0 0 0 2.02-1.47c.29-.27.48-.5.71-.75l.5-.56c.36-.38.9-.5 1.38-.31Z"])));
const Multiplier18X32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier18X32Regular', "32", ["M13 12.68c0-2.16 1.9-3.75 4.03-3.75 2.14 0 4.04 1.6 4.04 3.75 0 1.06-.45 1.97-1.16 2.64A4.18 4.18 0 0 1 22 18.88c0 2.56-2.4 4.37-5 4.37s-5-1.8-5-4.37c0-1.55.87-2.82 2.13-3.59A3.57 3.57 0 0 1 13 12.7Zm4.03-1.75c-1.21 0-2.03.88-2.03 1.75 0 .88.82 1.75 2.03 1.75 1.22 0 2.04-.87 2.04-1.75 0-.87-.82-1.75-2.04-1.75ZM17 16.5c-1.82 0-3 1.22-3 2.38 0 1.15 1.18 2.37 3 2.37s3-1.22 3-2.37c0-1.16-1.18-2.38-3-2.38Zm7.7-.2a1 1 0 0 0-1.4 1.4l1.79 1.8-1.8 1.8a1 1 0 0 0 1.42 1.4l1.79-1.79 1.8 1.8a1 1 0 0 0 1.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 0 0-1.42-1.4l-1.79 1.79-1.8-1.8ZM11 22a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.33 9.06A1 1 0 0 1 8 10v12a1 1 0 1 1-2 0v-9.58c-.55.47-1.22.98-1.99 1.44A1 1 0 0 1 3 12.14 13.27 13.27 0 0 0 6.2 9.4a1 1 0 0 1 1.12-.33Z"])));
const Multiplier18X48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier18X48Filled', "48", ["M31 19c0 1.48-.66 2.73-1.67 3.64A6.28 6.28 0 0 1 32 27.75c0 3.72-3.27 6.5-7 6.5s-7-2.78-7-6.5a6.28 6.28 0 0 1 2.67-5.1A4.83 4.83 0 0 1 19 19c0-3.14 2.95-5.25 6-5.25s6 2.1 6 5.25Zm-6-2.25c-1.92 0-3 1.25-3 2.25s1.08 2.25 3 2.25S28 20 28 19s-1.08-2.25-3-2.25Zm-4 11c0 1.8 1.65 3.5 4 3.5s4-1.7 4-3.5-1.65-3.5-4-3.5-4 1.7-4 3.5Zm15.56-3.31a1.5 1.5 0 0 0-2.12 2.12L36.88 29l-2.44 2.44a1.5 1.5 0 0 0 2.12 2.12L39 31.12l2.44 2.44a1.5 1.5 0 0 0 2.12-2.12L41.12 29l2.44-2.44a1.5 1.5 0 0 0-2.12-2.12L39 26.88l-2.44-2.44ZM16.5 32.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-5.6-18.7c.65.18 1.1.78 1.1 1.45v17a1.5 1.5 0 1 1-3 0V19.67a15.4 15.4 0 0 1-2.73 2.12 1.5 1.5 0 1 1-1.54-2.58c1.37-.82 2.5-1.94 3.3-2.88a15.94 15.94 0 0 0 1.17-1.59l.01-.01a1.5 1.5 0 0 1 1.7-.68Z"])));
const Multiplier18X48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier18X48Regular', "48", ["M30.5 18.88c0 1.5-.7 2.81-1.76 3.72a6.22 6.22 0 0 1 3.01 5.27c0 3.63-3.19 6.38-6.87 6.38-3.69 0-6.88-2.75-6.88-6.38a6.22 6.22 0 0 1 3.01-5.27 4.86 4.86 0 0 1-1.76-3.73c0-2.96 2.67-5.12 5.63-5.12 2.95 0 5.62 2.16 5.62 5.13Zm-5.62-2.63c-1.88 0-3.13 1.31-3.13 2.63 0 1.3 1.25 2.62 3.13 2.62 1.87 0 3.12-1.31 3.12-2.63 0-1.3-1.25-2.62-3.12-2.62ZM20.5 27.88c0 2.03 1.85 3.87 4.38 3.87 2.52 0 4.37-1.84 4.37-3.88 0-2.03-1.85-3.87-4.37-3.87-2.53 0-4.38 1.84-4.38 3.88Zm15.63-3.51a1.25 1.25 0 0 0-1.76 1.76L37.23 29l-2.86 2.87a1.25 1.25 0 0 0 1.76 1.76L39 30.77l2.87 2.86a1.25 1.25 0 0 0 1.76-1.76L40.77 29l2.86-2.87a1.25 1.25 0 0 0-1.76-1.76L39 27.23l-2.87-2.86ZM16.5 32.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-5-17.5a1.25 1.25 0 0 0-2.32-.64l-.02.03a9.15 9.15 0 0 1-.34.51c-.23.35-.58.82-1 1.33a9.67 9.67 0 0 1-3.09 2.63 1.25 1.25 0 0 0 1.04 2.28A10.77 10.77 0 0 0 9 18.92v13.83a1.25 1.25 0 0 0 2.5 0v-17.5Z"])));
const Multiplier1X20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier1X20Filled', "20", ["M8.5 6.75a.75.75 0 0 0-1.39-.4l-.04.08a5.3 5.3 0 0 1-.58.8 4.8 4.8 0 0 1-1.13.88.75.75 0 1 0 .78 1.28c.34-.2.62-.4.86-.58v4.44a.75.75 0 0 0 1.5 0v-6.5Zm2.78 3.47a.75.75 0 1 0-1.06 1.06l.72.72-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72.72-.72a.75.75 0 0 0-1.06-1.06l-.72.72-.72-.72Z"])));
const Multiplier1X20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier1X20Regular', "20", ["M8 6.5a.5.5 0 0 0-.9-.3l-.22.3c-.33.48-.7 1-1.64 1.57a.5.5 0 1 0 .52.86A6 6 0 0 0 7 7.96v5.54a.5.5 0 1 0 1 0v-7Zm2.85 3.65a.5.5 0 0 0-.7.7L11.29 12l-1.14 1.15a.5.5 0 0 0 .7.7L12 12.71l1.15 1.14a.5.5 0 0 0 .7-.7L12.71 12l1.14-1.15a.5.5 0 0 0-.7-.7L12 11.29l-1.15-1.14Z"])));
const Multiplier1X24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier1X24Filled', "24", ["M10 7.9a1 1 0 0 0-1.85-.52l-.08.12c-.4.67-.84 1.4-2.08 2.14A1 1 0 0 0 7 11.36c.38-.23.7-.46.99-.69V16a1 1 0 1 0 2 0V7.9Zm3.7 4.4a1 1 0 1 0-1.4 1.4l.79.8-.8.8a1 1 0 0 0 1.42 1.4l.79-.78.8.79a1 1 0 1 0 1.4-1.42l-.79-.79.8-.8a1 1 0 0 0-1.42-1.4l-.79.79-.8-.8Z"])));
const Multiplier1X24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier1X24Regular', "24", ["M10 7.75a.75.75 0 0 0-1.39-.4v.01a3.07 3.07 0 0 1-.15.22 6.88 6.88 0 0 1-2.1 2.03.75.75 0 1 0 .78 1.28c.52-.31.98-.69 1.36-1.06v6.42a.75.75 0 0 0 1.5 0v-8.5Zm3.28 4.47a.75.75 0 0 0-1.06 1.06l1.22 1.22-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 0 0 1.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 1 0-1.06-1.06l-1.22 1.22-1.22-1.22Z"])));
const Multiplier1X28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier1X28Filled', "28", ["M12 9a1 1 0 0 0-1.86-.52v.01a2.97 2.97 0 0 1-.17.25 8.13 8.13 0 0 1-2.49 2.4 1 1 0 0 0 1.03 1.72A9.18 9.18 0 0 0 10 11.73V19a1 1 0 1 0 2 0V9Zm3.7 5.3a1 1 0 0 0-1.4 1.4l1.29 1.3-1.3 1.3a1 1 0 0 0 1.42 1.4L17 18.42l1.3 1.3a1 1 0 0 0 1.4-1.42L18.42 17l1.3-1.3a1 1 0 0 0-1.42-1.4L17 15.58l-1.3-1.3Z"])));
const Multiplier1X28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier1X28Regular', "28", ["M11.5 8.75a.75.75 0 0 0-1.37-.42l-.19.28c-.5.75-1.05 1.58-2.58 2.5a.75.75 0 1 0 .78 1.28c.81-.49 1.4-.97 1.86-1.43v8.29a.75.75 0 1 0 1.5 0V8.75Zm3.78 5.47a.75.75 0 1 0-1.06 1.06L15.94 17l-1.72 1.72a.75.75 0 0 0 1.06 1.06L17 18.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L18.06 17l1.72-1.72a.75.75 0 0 0-1.06-1.06L17 15.94l-1.72-1.72Z"])));
const Multiplier1X32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier1X32Filled', "32", ["M13.5 10.25a1.25 1.25 0 0 0-2.16-.85l-.51.56c-.23.26-.42.48-.7.75-.42.4-1 .86-2.02 1.47a1.25 1.25 0 1 0 1.28 2.14c.66-.4 1.18-.75 1.61-1.08v8.51a1.25 1.25 0 1 0 2.5 0v-11.5Zm4.63 6.12a1.25 1.25 0 0 0-1.76 1.76l1.36 1.37-1.36 1.37a1.25 1.25 0 0 0 1.76 1.76l1.37-1.36 1.37 1.36a1.25 1.25 0 0 0 1.76-1.76l-1.36-1.37 1.36-1.37a1.25 1.25 0 0 0-1.76-1.76l-1.37 1.36-1.37-1.36Z"])));
const Multiplier1X32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier1X32Regular', "32", ["M13 10a1 1 0 0 0-1.79-.62v.01a4.52 4.52 0 0 1-.2.23 13.26 13.26 0 0 1-3.02 2.52A1 1 0 0 0 9 13.86c.77-.46 1.44-.97 1.99-1.44V22a1 1 0 1 0 2 0V10Zm4.7 6.3a1 1 0 0 0-1.4 1.4l1.79 1.8-1.8 1.8a1 1 0 0 0 1.42 1.4l1.79-1.79 1.8 1.8a1 1 0 0 0 1.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 0 0-1.42-1.4l-1.79 1.79-1.8-1.8Z"])));
const Multiplier1X48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier1X48Filled', "48", ["M20 15.5a1.5 1.5 0 0 0-2.78-.77l-.02.01a8.11 8.11 0 0 1-.27.42c-.2.29-.5.7-.9 1.17-.8.94-1.93 2.06-3.3 2.88a1.5 1.5 0 1 0 1.54 2.58A15.4 15.4 0 0 0 17 19.67V32.5a1.5 1.5 0 0 0 3 0v-17Zm6.56 8.94a1.5 1.5 0 0 0-2.12 2.12L26.88 29l-2.44 2.44a1.5 1.5 0 0 0 2.12 2.12L29 31.12l2.44 2.44a1.5 1.5 0 0 0 2.12-2.12L31.12 29l2.44-2.44a1.5 1.5 0 0 0-2.12-2.12L29 26.88l-2.44-2.44Z"])));
const Multiplier1X48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier1X48Regular', "48", ["M19.5 15.25a1.25 1.25 0 0 0-2.32-.64l-.02.03a10.19 10.19 0 0 1-.34.51c-.23.35-.58.82-1 1.33a9.67 9.67 0 0 1-3.09 2.63 1.25 1.25 0 0 0 1.04 2.28A10.77 10.77 0 0 0 17 18.92v13.83a1.25 1.25 0 0 0 2.5 0v-17.5Zm6.63 9.12a1.25 1.25 0 1 0-1.76 1.76L27.23 29l-2.86 2.87a1.25 1.25 0 0 0 1.76 1.76L29 30.77l2.87 2.86a1.25 1.25 0 0 0 1.76-1.76L30.77 29l2.86-2.87a1.25 1.25 0 0 0-1.76-1.76L29 27.23l-2.87-2.86Z"])));
const Multiplier2X20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier2X20Filled', "20", ["M5.7 8.75a.75.75 0 0 0 .8-.7l.02-.1c.02-.08.06-.19.13-.3.1-.16.34-.4.95-.4.58 0 .86.19 1 .38.16.22.27.61.16 1.24a.78.78 0 0 1-.4.6c-.2.13-.42.2-.72.31l-.43.17c-.47.18-1.06.45-1.5 1-.46.55-.7 1.3-.7 2.3a.75.75 0 0 0 .74.75H9.5a.75.75 0 0 0 0-1.5H6.58c.07-.28.17-.47.28-.6.2-.24.48-.4.9-.56l.27-.1c.34-.12.77-.28 1.12-.5.52-.32.95-.82 1.09-1.61a3.1 3.1 0 0 0-.42-2.38c-.5-.69-1.3-1-2.22-1-1.13 0-1.83.5-2.2 1.1A2.53 2.53 0 0 0 5 7.92v.02c-.02.41.29.77.7.8Zm6.58 1.47a.75.75 0 1 0-1.06 1.06l.72.72-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72.72-.72a.75.75 0 0 0-1.06-1.06l-.72.72-.72-.72Z"])));
const Multiplier2X20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier2X20Regular', "20", ["m6 8.09.01-.03.04-.12c.04-.11.1-.25.2-.39.2-.26.56-.55 1.26-.55.64 0 1.04.2 1.26.5.24.3.36.76.25 1.42-.07.38-.26.61-.57.8-.24.16-.52.28-.85.41l-.43.18c-.5.21-1.05.5-1.47 1a3.27 3.27 0 0 0-.69 2.19.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H6.04c.07-.49.23-.81.43-1.05.26-.32.64-.52 1.1-.72.1-.05.2-.1.32-.14.36-.14.77-.3 1.1-.52.48-.31.89-.76 1.01-1.49.14-.84.02-1.62-.44-2.2C9.1 6.29 8.37 6 7.5 6a2.44 2.44 0 0 0-2.48 1.88v.03h-.01c0 .03-.04.27 0 0A.5.5 0 0 0 6 8.1Zm5.86 2.06a.5.5 0 1 0-.7.7L12.3 12l-1.15 1.15a.5.5 0 0 0 .7.7L13 12.71l1.15 1.14a.5.5 0 1 0 .7-.7L13.71 12l1.14-1.15a.5.5 0 0 0-.7-.7L13 11.29l-1.14-1.14Z"])));
const Multiplier2X24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier2X24Filled', "24", ["M7.49 9.67a1 1 0 0 1-1.98-.33c-.03.2 0 0 0 0v-.02a1.83 1.83 0 0 1 .04-.13 3.02 3.02 0 0 1 .55-1.17 3.29 3.29 0 0 1 2.75-1.27c1.13 0 2.14.36 2.8 1.19.64.81.77 1.89.59 2.98a2.87 2.87 0 0 1-1.41 2.05c-.44.27-1 .47-1.43.62l-.34.13c-.53.2-.88.39-1.12.67-.12.14-.23.33-.32.61h3.63a1 1 0 0 1 0 2H6.5a1 1 0 0 1-1-1c0-1.25.32-2.2.91-2.9a4.55 4.55 0 0 1 1.93-1.25l.55-.2c.37-.14.65-.23.9-.39a.88.88 0 0 0 .48-.68c.13-.76-.02-1.18-.2-1.4-.15-.21-.5-.43-1.22-.43-.7 0-1 .27-1.15.48a1.29 1.29 0 0 0-.21.43v.01Zm0 0v-.01Zm0 0Zm7.22 2.62a1 1 0 1 0-1.42 1.42l.8.79-.8.8a1 1 0 0 0 1.42 1.4l.79-.79.8.8a1 1 0 1 0 1.4-1.42l-.79-.79.8-.8a1 1 0 0 0-1.42-1.4l-.79.79-.8-.8Z"])));
const Multiplier2X24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier2X24Regular', "24", ["M6.16 10.24A.75.75 0 0 0 7 9.58l.03-.12c.03-.1.1-.25.2-.4.18-.24.55-.56 1.39-.56.77 0 1.28.24 1.57.56.28.3.45.8.32 1.56-.07.43-.28.68-.64.9-.3.19-.63.32-1.04.48l-.54.21c-.62.26-1.34.61-1.9 1.26a4.1 4.1 0 0 0-.89 2.78.75.75 0 0 0 .75.75h5a.75.75 0 0 0 0-1.5H7.06c.1-.5.27-.82.47-1.06.32-.36.76-.6 1.33-.84l.4-.16c.45-.17.98-.38 1.4-.65.63-.39 1.17-.97 1.33-1.91.19-1.1-.03-2.1-.69-2.83A3.52 3.52 0 0 0 8.62 7c-1.32 0-2.14.55-2.6 1.18a2.88 2.88 0 0 0-.51 1.21v.02s-.05.39 0 0c-.05.41.24.79.65.83Zm8.12 1.98a.75.75 0 0 0-1.06 1.06l1.22 1.22-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 1 0 1.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 1 0-1.06-1.06l-1.22 1.22-1.22-1.22Z"])));
const Multiplier2X28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier2X28Filled', "28", ["M9 10.82v.01a1 1 0 0 1-2-.14c0 .31 0 0 0 0v-.03a1.9 1.9 0 0 1 .02-.15l.08-.34c.07-.27.22-.64.48-1 .56-.78 1.56-1.42 3.17-1.42 1.34 0 2.55.45 3.36 1.37.82.92 1.11 2.18.88 3.55a3.3 3.3 0 0 1-1.65 2.37c-.53.32-1.19.55-1.73.75l-.46.17c-.69.27-1.19.53-1.54.93-.21.25-.4.59-.52 1.11H14a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1 5 5 0 0 1 1.1-3.42 5.65 5.65 0 0 1 2.32-1.48l.67-.25c.48-.18.87-.32 1.22-.53.4-.23.62-.5.7-.99.16-.88-.05-1.5-.4-1.89-.35-.4-.95-.69-1.86-.69-1.02 0-1.39.36-1.55.58a1.2 1.2 0 0 0-.2.49Zm8.7 3.47a1 1 0 0 0-1.4 1.42L17.58 17l-1.3 1.3a1 1 0 0 0 1.42 1.4L19 18.42l1.3 1.3a1 1 0 0 0 1.4-1.42L20.42 17l1.3-1.3a1 1 0 0 0-1.42-1.4L19 15.58l-1.3-1.3Z"])));
const Multiplier2X28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier2X28Regular', "28", ["M8.49 10.9v-.03l.05-.15c.06-.13.15-.3.3-.49.28-.33.82-.73 1.9-.73.97 0 1.57.31 1.91.75.35.44.53 1.14.36 2.12-.1.58-.39.93-.84 1.22-.38.24-.8.4-1.3.61l-.63.26c-.74.32-1.57.75-2.2 1.5A4.9 4.9 0 0 0 7 19.26a.75.75 0 0 0 .75.75h6a.75.75 0 0 0 0-1.5h-5.2c.1-.73.34-1.22.63-1.57.4-.48.96-.79 1.65-1.09l.5-.2c.54-.22 1.15-.47 1.65-.79a3.18 3.18 0 0 0 1.5-2.22 4.11 4.11 0 0 0-.65-3.31C13.13 8.44 12.04 8 10.75 8c-1.53 0-2.5.6-3.06 1.27a3.33 3.33 0 0 0-.67 1.32v.02a.75.75 0 0 0 1.47.29Zm0 0Zm8.79 3.32a.75.75 0 0 0-1.06 1.06L17.94 17l-1.72 1.72a.75.75 0 1 0 1.06 1.06L19 18.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L20.06 17l1.72-1.72a.75.75 0 1 0-1.06-1.06L19 15.94l-1.72-1.72Z"])));
const Multiplier2X32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier2X32Filled', "32", ["M7.98 13.75a1.25 1.25 0 0 0 1.5-.96c0-.04.03-.1.06-.18.07-.16.18-.38.35-.6.32-.38.88-.83 1.98-.83 1.03 0 1.75.34 2.17.79.4.43.64 1.1.48 2.07-.09.49-.33.78-.83 1.06a9 9 0 0 1-1.54.61l-.82.28c-.92.33-2.04.8-2.9 1.71A5.62 5.62 0 0 0 7 21.75 1.25 1.25 0 0 0 8.25 23h7.5a1.25 1.25 0 0 0 0-2.5h-6.1c.13-.5.35-.83.59-1.08a4.79 4.79 0 0 1 1.93-1.08l.57-.19c.7-.23 1.5-.5 2.17-.87a3.88 3.88 0 0 0 2.07-2.82 4.8 4.8 0 0 0-1.11-4.2 5.36 5.36 0 0 0-4-1.58 4.83 4.83 0 0 0-4.83 3.55v.02h-.01c0 .01-.13.6 0 .01-.15.67.27 1.34.95 1.5Zm12.15 2.62a1.25 1.25 0 1 0-1.76 1.76l1.36 1.37-1.36 1.37a1.25 1.25 0 1 0 1.76 1.76l1.37-1.36 1.37 1.36a1.25 1.25 0 0 0 1.76-1.76l-1.36-1.37 1.36-1.37a1.25 1.25 0 0 0-1.76-1.76l-1.37 1.36-1.37-1.36Z"])));
const Multiplier2X32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier2X32Regular', "32", ["M9.39 12.7v-.04l.07-.2c.06-.17.17-.4.34-.63.31-.42.89-.9 2.07-.9 1.07 0 1.72.35 2.09.81.37.48.58 1.25.39 2.36-.1.62-.42.99-.92 1.31-.42.27-.88.46-1.45.7l-.76.3a6.7 6.7 0 0 0-2.6 1.78 5.8 5.8 0 0 0-1.22 3.88 1 1 0 0 0 1 1h6.93a1 1 0 0 0 0-2H9.48a3.2 3.2 0 0 1 .68-1.6A4.77 4.77 0 0 1 12 18.25l.56-.23c.63-.25 1.35-.55 1.94-.92a3.8 3.8 0 0 0 1.8-2.66 4.89 4.89 0 0 0-.78-3.93 4.48 4.48 0 0 0-3.66-1.58 4.37 4.37 0 0 0-4.44 3.37l-.01.04v.02s-.09.5 0 0a1 1 0 0 0 1.96.35v-.01Zm10.32 3.6a1 1 0 1 0-1.42 1.4l1.8 1.8-1.8 1.8a1 1 0 1 0 1.42 1.4l1.79-1.79 1.8 1.8a1 1 0 1 0 1.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 0 0-1.42-1.4l-1.79 1.79-1.8-1.8Z"])));
const Multiplier2X48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier2X48Filled', "48", ["M13.34 20.24A1.5 1.5 0 0 0 15 18.9a2.68 2.68 0 0 1 .45-1c.35-.49 1.09-1.14 2.8-1.14 1.54 0 2.55.5 3.13 1.19.57.68.9 1.76.64 3.3a2.45 2.45 0 0 1-1.27 1.81c-.6.37-1.26.62-2.08.93l-1.09.43a9.44 9.44 0 0 0-3.8 2.48C12.66 28.23 12 30.04 12 32.5a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 0-3h-8.38c.18-1.01.54-1.68.95-2.16.62-.72 1.5-1.19 2.64-1.65l.78-.3c.91-.35 1.97-.75 2.84-1.29a5.43 5.43 0 0 0 2.65-3.85c.38-2.2-.04-4.24-1.31-5.75-1.27-1.5-3.21-2.25-5.42-2.25-2.66 0-4.3 1.1-5.23 2.36a5.67 5.67 0 0 0-1 2.44v.02l-.01.01c0 .01-.05.44 0 .01a1.5 1.5 0 0 0 1.33 1.65Zm16.22 4.2a1.5 1.5 0 0 0-2.12 2.12L29.88 29l-2.44 2.44a1.5 1.5 0 0 0 2.12 2.12L32 31.12l2.44 2.44a1.5 1.5 0 0 0 2.12-2.12L34.12 29l2.44-2.44a1.5 1.5 0 0 0-2.12-2.12L32 26.88l-2.44-2.44Z"])));
const Multiplier2X48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier2X48Regular', "48", ["M13.03 19.98c.68.12 1.32-.33 1.45-1l.01-.06.1-.27c.08-.23.24-.55.5-.87.47-.59 1.36-1.28 3.16-1.28 1.6 0 2.6.52 3.17 1.24.58.74.88 1.9.6 3.55a2.81 2.81 0 0 1-1.41 2.02c-.62.4-1.32.69-2.15 1.02l-1.06.44a9.48 9.48 0 0 0-3.68 2.5c-1.09 1.3-1.72 3.06-1.72 5.48A1.25 1.25 0 0 0 13.25 34h10a1.25 1.25 0 1 0 0-2.5h-8.67a4.94 4.94 0 0 1 1.06-2.62c.66-.8 1.6-1.31 2.75-1.8.25-.12.53-.23.82-.35.9-.37 1.92-.78 2.75-1.31a5.3 5.3 0 0 0 2.52-3.7c.36-2.12.04-4.07-1.1-5.52-1.16-1.47-2.98-2.2-5.13-2.2-2.58 0-4.18 1.06-5.12 2.22a5.81 5.81 0 0 0-1.1 2.28v.02h-.01c0 .01-.04.13 0 .01-.12.68.33 1.33 1.01 1.45Zm1.45-1Zm0 0Zm14.65 5.39a1.25 1.25 0 0 0-1.76 1.76L30.23 29l-2.86 2.87a1.25 1.25 0 0 0 1.76 1.76L32 30.77l2.87 2.86a1.25 1.25 0 0 0 1.76-1.76L33.77 29l2.86-2.87a1.25 1.25 0 0 0-1.76-1.76L32 27.23l-2.87-2.86Z"])));
const Multiplier5X20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier5X20Filled', "20", ["M6.25 6.68A.75.75 0 0 1 7 6h3.25a.75.75 0 0 1 0 1.5H7.68l-.1 1.13.44-.06a2.85 2.85 0 1 1 .36 5.68c-.75 0-1.5-.3-2.03-.84l-.38-.38a.75.75 0 1 1 1.06-1.06l.38.38a1.36 1.36 0 0 0 2.34-.95c0-.82-.72-1.45-1.53-1.34l-1.37.18a.75.75 0 0 1-.85-.8l.25-2.76ZM5 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm8.28-3.28a.75.75 0 1 0-1.06 1.06l.72.72-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72.72-.72a.75.75 0 1 0-1.06-1.06l-.72.72-.72-.72Z"])));
const Multiplier5X20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier5X20Regular', "20", ["M7 6a.5.5 0 0 0-.5.46l-.25 3a.5.5 0 0 0 .56.54l1.88-.23A1.62 1.62 0 1 1 8.9 13h-.36c-.53 0-1.03-.2-1.4-.58l-.28-.27a.5.5 0 0 0-.7.7l.27.28c.56.56 1.32.87 2.1.87h.36a2.62 2.62 0 1 0-.3-5.22l-1.28.15L7.46 7h3.04a.5.5 0 0 0 0-1H7Zm5.15 4.15c.2-.2.5-.2.7 0L14 11.29l1.15-1.14a.5.5 0 0 1 .7.7L14.71 12l1.14 1.15a.5.5 0 0 1-.7.7L14 12.71l-1.15 1.14a.5.5 0 0 1-.7-.7L13.29 12l-1.14-1.15a.5.5 0 0 1 0-.7ZM5 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"])));
const Multiplier5X24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier5X24Filled', "24", ["M7.01 7.86A1 1 0 0 1 8 7h4a1 1 0 1 1 0 2H8.87l-.19 1.3.35-.05a3.65 3.65 0 1 1 .55 7.25 3.7 3.7 0 0 1-2.73-1.2l-.34-.38a1 1 0 1 1 1.48-1.34l.34.37c.31.35.77.55 1.25.55a1.65 1.65 0 1 0-.24-3.28l-1.68.27a1 1 0 0 1-1.15-1.13l.5-3.5Zm7.28 4.43a1 1 0 0 1 1.42 0l.79.8.8-.8a1 1 0 0 1 1.4 1.42l-.79.79.8.8a1 1 0 0 1-1.42 1.4l-.79-.79-.8.8a1 1 0 0 1-1.4-1.42l.79-.79-.8-.8a1 1 0 0 1 0-1.4ZM4.75 17a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"])));
const Multiplier5X24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier5X24Regular', "24", ["M7 7.7c.03-.4.36-.7.75-.7h4.5a.75.75 0 0 1 0 1.5h-3.8l-.14 2.13 1.29-.19a3.42 3.42 0 1 1 .48 6.81h-.36a3.78 3.78 0 0 1-2.8-1.24l-.23-.26a.75.75 0 0 1 1.12-1l.23.25c.43.48 1.04.75 1.68.75h.36a1.92 1.92 0 1 0-.27-3.82l-2.2.31a.75.75 0 0 1-.86-.79L7 7.7Zm7.22 4.52c.3-.3.77-.3 1.06 0l1.22 1.22 1.22-1.22a.75.75 0 0 1 1.06 1.06l-1.22 1.22 1.22 1.22a.75.75 0 1 1-1.06 1.06l-1.22-1.22-1.22 1.22a.75.75 0 0 1-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 0 1 0-1.06ZM4.75 17a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"])));
const Multiplier5X28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier5X28Filled', "28", ["M9.5 8a1 1 0 0 0-1 .88L8 13.13a1 1 0 0 0 1.12 1.11l2.57-.3a2.3 2.3 0 1 1 .27 4.56h-.15c-.7 0-1.37-.3-1.84-.83l-.72-.83a1 1 0 1 0-1.5 1.32l.72.82a4.44 4.44 0 0 0 3.34 1.52h.15a4.3 4.3 0 1 0-.51-8.55l-1.3.16.24-2.11h4.11a1 1 0 1 0 0-2h-5Zm7.8 6.3a1 1 0 0 1 1.4 0l1.3 1.29 1.3-1.3a1 1 0 0 1 1.4 1.42L21.42 17l1.3 1.3a1 1 0 0 1-1.42 1.4L20 18.42l-1.3 1.3a1 1 0 0 1-1.4-1.42L18.58 17l-1.3-1.3a1 1 0 0 1 0-1.4ZM6.5 19.24a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"])));
const Multiplier5X28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier5X28Regular', "28", ["M9.5 8c-.4 0-.73.31-.75.7l-.25 4.5a.75.75 0 0 0 .84.8l2.57-.31a2.54 2.54 0 1 1 .3 5.06h-.3c-.84 0-1.63-.36-2.17-1l-.42-.49a.75.75 0 1 0-1.14.98l.42.5a4.35 4.35 0 0 0 3.3 1.51h.3a4.04 4.04 0 1 0-.47-8.05l-1.68.2.16-2.9h4.54a.75.75 0 0 0 0-1.5H9.5Zm7.72 6.22c.3-.3.77-.3 1.06 0L20 15.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L21.06 17l1.72 1.72a.75.75 0 1 1-1.06 1.06L20 18.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L18.94 17l-1.72-1.72a.75.75 0 0 1 0-1.06ZM6.5 19.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"])));
const Multiplier5X32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier5X32Filled', "32", ["M10 10.13c.07-.64.6-1.13 1.25-1.13h6a1.25 1.25 0 1 1 0 2.5h-4.87l-.23 2.3 1.2-.18a4.96 4.96 0 1 1 .69 9.88h-.21a5.17 5.17 0 0 1-3.77-1.63l-.72-.76a1.25 1.25 0 1 1 1.82-1.72l.72.77c.5.54 1.21.84 1.95.84h.2a2.46 2.46 0 1 0-.34-4.9l-2.77.39a1.25 1.25 0 0 1-1.41-1.36l.5-5Zm10.37 6.24a1.25 1.25 0 0 1 1.76 0l1.37 1.36 1.37-1.36a1.25 1.25 0 0 1 1.76 1.76l-1.36 1.37 1.36 1.37a1.25 1.25 0 0 1-1.76 1.76l-1.37-1.36-1.37 1.36a1.25 1.25 0 0 1-1.76-1.76l1.36-1.37-1.36-1.37a1.25 1.25 0 0 1 0-1.76ZM7 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"])));
const Multiplier5X32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier5X32Regular', "32", ["M10.25 9.9a1 1 0 0 1 1-.9h6.25a1 1 0 1 1 0 2h-5.34l-.3 3.1 2.04-.27a4.73 4.73 0 1 1 .62 9.42h-.53c-1.46 0-2.86-.6-3.85-1.67l-.37-.4a1 1 0 0 1 1.46-1.36l.37.4A3.26 3.26 0 0 0 14 21.24h.53a2.73 2.73 0 1 0-.36-5.44l-3.28.43a1 1 0 0 1-1.13-1.08l.5-5.25Zm10.04 6.4a1 1 0 0 1 1.42 0l1.79 1.79 1.8-1.8a1 1 0 0 1 1.4 1.42l-1.79 1.79 1.8 1.8a1 1 0 0 1-1.42 1.4l-1.79-1.79-1.8 1.8a1 1 0 0 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 0 1 0-1.4ZM7 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"])));
const Multiplier5X48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier5X48Filled', "48", ["M14.52 15.29A1.5 1.5 0 0 1 16 14h9a1.5 1.5 0 0 1 0 3h-7.7l-.55 3.83 3.13-.28a6.99 6.99 0 1 1 .63 13.95h-.56c-2.15 0-4.19-.9-5.62-2.5l-.44-.5a1.5 1.5 0 1 1 2.22-2l.45.5c.86.95 2.1 1.5 3.39 1.5h.56a3.99 3.99 0 1 0-.36-7.96l-5.01.45a1.5 1.5 0 0 1-1.62-1.7l1-7Zm14.92 9.15a1.5 1.5 0 0 1 2.12 0L34 26.88l2.44-2.44a1.5 1.5 0 0 1 2.12 2.12L36.12 29l2.44 2.44a1.5 1.5 0 0 1-2.12 2.12L34 31.12l-2.44 2.44a1.5 1.5 0 0 1-2.12-2.12L31.88 29l-2.44-2.44a1.5 1.5 0 0 1 0-2.12ZM10.25 34a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"])));
const Multiplier5X48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Multiplier5X48Regular', "48", ["M15.26 15.13c.06-.64.6-1.13 1.24-1.13h8.75a1.25 1.25 0 1 1 0 2.5h-7.62l-.48 4.82 2.9-.34a6.66 6.66 0 1 1 .8 13.27h-.5a7.14 7.14 0 0 1-5.28-2.34l-.74-.82a1.25 1.25 0 1 1 1.84-1.68l.75.82a4.64 4.64 0 0 0 3.44 1.52h.48a4.16 4.16 0 1 0-.5-8.29L15.9 24a1.25 1.25 0 0 1-1.4-1.36l.76-7.5Zm14.1 9.24a1.25 1.25 0 0 1 1.77 0L34 27.23l2.87-2.86a1.25 1.25 0 0 1 1.76 1.76L35.77 29l2.86 2.87a1.25 1.25 0 0 1-1.76 1.76L34 30.77l-2.87 2.86a1.25 1.25 0 0 1-1.76-1.76L32.23 29l-2.86-2.87a1.25 1.25 0 0 1 0-1.76ZM10.26 34a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"])));
const MultiselectLtr16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectLtr16Filled', "16", ["M5.03 1.97c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0ZM6 3.75c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 3.75ZM6 8c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 8Zm-.97 2.97c.3.3.3.77 0 1.06l-2 2c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47c.3-.3.77-.3 1.06 0ZM6 12.25c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z"])));
const MultiselectLtr16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectLtr16Regular', "16", ["M4.85 2.15c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0ZM14.5 4h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1ZM6 8c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-8A.5.5 0 0 1 6 8Zm-1.15 3.15c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0ZM14.5 13h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1Z"])));
const MultiselectLtr20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectLtr20Filled', "20", ["M6.25 3.2c.31.27.33.74.06 1.05l-2.25 2.5a.75.75 0 0 1-1.09.03L1.72 5.53a.75.75 0 0 1 1.06-1.06l.7.7 1.71-1.92a.75.75 0 0 1 1.06-.06ZM8 5.24c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 8 5.25Zm0 5c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm.75 4.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-2.44-.25a.75.75 0 1 0-1.12-1l-1.72 1.91-.69-.69a.75.75 0 0 0-1.06 1.06l1.25 1.25a.75.75 0 0 0 1.09-.03l2.25-2.5Z"])));
const MultiselectLtr20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectLtr20Regular', "20", ["M5.85 4.35a.5.5 0 1 0-.7-.7L3.5 5.29l-.65-.64a.5.5 0 1 0-.7.7l1 1c.2.2.5.2.7 0l2-2ZM8 5.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm-2.65-.85c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0Z"])));
const MultiselectLtr24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectLtr24Filled', "24", ["M6.7 3.3a1 1 0 0 0-1.4 0L4 4.58l-.3-.3a1 1 0 0 0-1.4 1.42l1 1a1 1 0 0 0 1.4 0l2-2a1 1 0 0 0 0-1.42ZM10 17h11a1 1 0 0 1 .12 1.99H10A1 1 0 0 1 9.88 17H10Zm0-6h11a1 1 0 0 1 .12 2H10a1 1 0 0 1-.12-2H10Zm0-6h11a1 1 0 0 1 .12 2H10a1 1 0 0 1-.12-2H10ZM5.3 16.3a1 1 0 0 1 1.4 1.4l-2 2a1 1 0 0 1-1.4 0l-1-1a1 1 0 1 1 1.4-1.4l.3.29 1.3-1.3Z"])));
const MultiselectLtr24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectLtr24Regular', "24", ["M6.78 4.78a.75.75 0 0 0-1.06-1.06L3.75 5.69l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5Zm2.97 13.23h11.5a.75.75 0 0 1 .1 1.49H9.75a.75.75 0 0 1-.1-1.49h.1Zm0-6.51h11.5a.75.75 0 0 1 .1 1.5H9.75a.75.75 0 0 1-.1-1.5h.1Zm0-6.5h11.5a.75.75 0 0 1 .1 1.5H9.75a.75.75 0 0 1-.1-1.5h.1ZM6.78 16.72c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.97-1.97c.3-.3.77-.3 1.06 0Z"])));
const MultiselectRtl16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectRtl16Filled', "16", ["M15.03 3.03a.75.75 0 0 0-1.06-1.06L12.5 3.44l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2Zm-2 11 2-2a.75.75 0 1 0-1.06-1.06l-1.47 1.47-.47-.47a.75.75 0 1 0-1.06 1.06l1 1c.3.3.77.3 1.06 0ZM1.75 3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z"])));
const MultiselectRtl16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectRtl16Regular', "16", ["M14.85 2.85a.5.5 0 0 0-.7-.7L12.5 3.79l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 9a.5.5 0 0 0-.7-.7l-1.65 1.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2ZM1.5 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 4.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Zm0 4.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Z"])));
const MultiselectRtl20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectRtl20Filled', "20", ["M2 5.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 2 5.25Zm0 5c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm.75 4.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM18.31 4.25a.75.75 0 1 0-1.12-1l-1.72 1.91-.69-.69a.75.75 0 1 0-1.06 1.06l1.25 1.25a.75.75 0 0 0 1.09-.03l2.25-2.5Zm-.06 8.94c.31.28.33.75.06 1.06l-2.25 2.5a.75.75 0 0 1-1.09.03l-1.25-1.25a.75.75 0 1 1 1.06-1.06l.7.7 1.71-1.92a.75.75 0 0 1 1.06-.06Z"])));
const MultiselectRtl20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectRtl20Regular', "20", ["M17.85 4.35a.5.5 0 0 0-.7-.7L15.5 5.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l2-2Zm0 9.8c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0ZM2.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM2 15.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z"])));
const MultiselectRtl24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectRtl24Filled', "24", ["M21.7 3.3a1 1 0 0 0-1.4 0L19 4.58l-.3-.3a1 1 0 1 0-1.4 1.42l1 1a1 1 0 0 0 1.4 0l2-2a1 1 0 0 0 0-1.42ZM3 17h11a1 1 0 0 1 .12 1.99H3A1 1 0 0 1 2.88 17H3Zm0-6h11a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H3Zm0-6h11a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H3Zm17.3 11.3a1 1 0 0 1 1.4 1.4l-2 2a1 1 0 0 1-1.4 0l-1-1a1 1 0 0 1 1.4-1.4l.3.29 1.3-1.3Z"])));
const MultiselectRtl24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MultiselectRtl24Regular', "24", ["M21.78 4.78a.75.75 0 0 0-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 1 0-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5ZM2.75 18.01h11.5a.75.75 0 0 1 .1 1.49H2.75a.75.75 0 0 1-.1-1.49h.1Zm0-6.51h11.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h.1Zm0-6.5h11.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h.1Zm19.03 11.72c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.97-1.97c.3-.3.77-.3 1.06 0Z"])));
const MusicNote120Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote120Filled', "20", ["M10.15 2.02a.5.5 0 0 0-.65.48v9.9A3.24 3.24 0 0 0 4 14.75a3.25 3.25 0 1 0 6.5-.25V7.18l5.85 1.8A.5.5 0 0 0 17 8.5V5.98a2.5 2.5 0 0 0-1.76-2.4l-5.1-1.56Z"])));
const MusicNote120Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote120Regular', "20", ["M10.15 2.02a.5.5 0 0 0-.65.48v9.9A3.24 3.24 0 0 0 4 14.75a3.25 3.25 0 1 0 6.5-.25V7.18l5.85 1.8A.5.5 0 0 0 17 8.5V5.98a2.5 2.5 0 0 0-1.76-2.4l-5.1-1.56ZM16 7.82l-5.5-1.69V3.18l4.44 1.36c.63.2 1.06.78 1.06 1.44v1.84ZM5 14.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"])));
const MusicNote124Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote124Filled', "24", ["M11.51 2.05a.75.75 0 0 0-1.01.7v12.13a4 4 0 1 0 1.5 3.37V8.83l6.99 2.62a.75.75 0 0 0 1.01-.7V7.48c0-1.35-.84-2.56-2.1-3.04l-6.39-2.4Z"])));
const MusicNote124Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote124Regular', "24", ["M11.51 2.05a.75.75 0 0 0-1.01.7v12.13a4 4 0 1 0 1.5 3.37V8.83l6.99 2.62a.75.75 0 0 0 1.01-.7V7.48c0-1.35-.84-2.56-2.1-3.04l-6.39-2.4ZM10.5 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm8-8.33L12 7.23v-3.4l5.36 2.01c.69.26 1.14.91 1.14 1.64v2.19Z"])));
const MusicNote216Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote216Filled', "16", ["M12 5.21v5.06A2 2 0 1 0 13 12V1.93a.8.8 0 0 0-1.07-.76l-6.4 2.29A.8.8 0 0 0 5 4.2v7.06A2 2 0 1 0 6 13V7.35l6-2.14Z"])));
const MusicNote216Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote216Regular', "16", ["M12 5.21v5.06A2 2 0 1 0 13 12V1.93a.8.8 0 0 0-1.07-.76l-6.4 2.29A.8.8 0 0 0 5 4.2v7.06A2 2 0 1 0 6 13V7.35l6-2.14Zm0-1.06L6 6.29V4.35l6-2.14v1.94ZM11 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"])));
const MusicNote220Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote220Filled', "20", ["M15.99 3.02a1 1 0 0 0-1.29-.8l-7 2.2a1 1 0 0 0-.7.95v8.13a2.5 2.5 0 1 0 1 2V8.37l7-2.19v5.32a2.5 2.5 0 1 0 1 2V3.18l-.01-.16Z"])));
const MusicNote220Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote220Regular', "20", ["M14.7 2.23a1 1 0 0 1 1.3.95V13.5a2.5 2.5 0 1 1-1-2V6.18L8 8.37v7.13a2.5 2.5 0 1 1-1-2V5.37a1 1 0 0 1 .7-.96l7-2.18ZM8 7.32l7-2.19V3.18L8 5.37v1.95ZM5.5 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6.5-.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"])));
const MusicNote224Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote224Filled', "24", ["M20 2.75a.75.75 0 0 0-.97-.72l-10 3a.75.75 0 0 0-.53.72v9.88a3.5 3.5 0 1 0 1.5 2.62v-7.94l8.5-2.55v5.87a3.5 3.5 0 1 0 1.5 2.62V2.75Z"])));
const MusicNote224Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote224Regular', "24", ["M19.7 2.15c.19.14.3.36.3.6V16.5a3.5 3.5 0 1 1-1.5-2.87V7.76L10 10.3v8.19a3.5 3.5 0 1 1-1.5-2.87V5.75c0-.33.22-.62.53-.72l10-3a.75.75 0 0 1 .67.12ZM10 8.75l8.5-2.56V3.76L10 6.3v2.43ZM6.5 16.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"])));
const MusicNote2Play20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote2Play20Filled', "20", ["M15.99 3.02a1 1 0 0 0-1.29-.8l-7 2.2a1 1 0 0 0-.7.95v8.13a2.5 2.5 0 1 0 1 2V8.37l7-2.19v2.84c.34.03.68.1 1 .19V3.18l-.01-.16ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.26-.44-3-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.4.62.74.44l3-1.65a.5.5 0 0 0 0-.88Z"])));
const MusicNote2Play20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNote2Play20Regular', "20", ["M14.7 2.23a1 1 0 0 1 1.3.95v6.03c-.32-.1-.66-.16-1-.19V6.18L8 8.37v7.13a2.5 2.5 0 1 1-1-2V5.37a1 1 0 0 1 .7-.96l7-2.18ZM8 7.32l7-2.19V3.18L8 5.37v1.95ZM5.5 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm13.5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.26-.44-3-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.4.62.74.44l3-1.65a.5.5 0 0 0 0-.88Z"])));
const MusicNoteOff120Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNoteOff120Filled', "20", ["M2.85 2.15a.5.5 0 1 0-.7.7l7.35 7.36v2.2A3.24 3.24 0 0 0 4 14.74a3.25 3.25 0 1 0 6.5-.25v-3.3l6.65 6.65a.5.5 0 0 0 .7-.7l-15-15Zm7.65 5.03v1.2l-1-1V2.5a.5.5 0 0 1 .65-.48l5.09 1.57A2.5 2.5 0 0 1 17 5.98V8.5a.5.5 0 0 1-.65.48l-5.85-1.8Z"])));
const MusicNoteOff120Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNoteOff120Regular', "20", ["M2.85 2.15a.5.5 0 1 0-.7.7l7.35 7.36v2.2A3.24 3.24 0 0 0 4 14.74a3.25 3.25 0 1 0 6.5-.25v-3.3l6.65 6.65a.5.5 0 0 0 .7-.7l-15-15ZM5 14.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm5.5-7.57v1.2l-1-1V2.5a.5.5 0 0 1 .65-.48l5.09 1.57A2.5 2.5 0 0 1 17 5.98V8.5a.5.5 0 0 1-.65.48l-5.85-1.8Zm5.5.64V5.98a1.5 1.5 0 0 0-1.06-1.44L10.5 3.18v2.95l5.5 1.7Z"])));
const MusicNoteOff124Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNoteOff124Filled', "24", ["m12 13.06 8.72 8.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.28 8.28v3.32a4 4 0 1 0 1.5 3.37v-5.19Zm6.99-1.6-6.97-2.62-1.52-1.52V2.75a.75.75 0 0 1 1.01-.7l6.38 2.39A3.25 3.25 0 0 1 20 7.48v3.27a.75.75 0 0 1-1.01.7Z"])));
const MusicNoteOff124Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNoteOff124Regular', "24", ["m12 13.06 8.72 8.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.28 8.28v3.32a4 4 0 1 0 1.5 3.37v-5.19ZM10.5 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm8.49-6.55-6.97-2.6-1.52-1.53V2.75a.75.75 0 0 1 1.01-.7l6.38 2.39A3.25 3.25 0 0 1 20 7.48v3.27a.75.75 0 0 1-1.01.7Zm-.49-1.78V7.48c0-.73-.45-1.38-1.14-1.64l-5.36-2v3.39l6.5 2.44Z"])));
const MusicNoteOff216Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNoteOff216Filled', "16", ["m12.55 13.26 1.6 1.6a.5.5 0 0 0 .7-.71l-13-13a.5.5 0 1 0-.7.7L5 5.71v5.56A2 2 0 1 0 6 13V7.35l.48-.17 3.26 3.27a2 2 0 1 0 2.81 2.81ZM12 5.21v4.67l1 1V1.93a.8.8 0 0 0-1.07-.76L5.57 3.45l2.99 2.99L12 5.2Z"])));
const MusicNoteOff216Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNoteOff216Regular', "16", ["m12.55 13.26 1.6 1.6a.5.5 0 0 0 .7-.71l-13-13a.5.5 0 1 0-.7.7L5 5.71v5.56A2 2 0 1 0 6 13V7.35l.48-.17 3.26 3.27a2 2 0 1 0 2.81 2.81Zm-.71-.71a1 1 0 1 1-1.39-1.39l1.39 1.39ZM4 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8-7.85-4.22 1.5.78.79L12 5.2v4.67l1 1V1.93a.8.8 0 0 0-1.07-.76L5.57 3.45l.78.78L12 2.2v1.94Z"])));
const MusicNoteOff220Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNoteOff220Filled', "20", ["M2.85 2.15a.5.5 0 1 0-.7.7L7 7.71v5.79a2.5 2.5 0 1 0 1 2V8.7l3.41 3.42a2.5 2.5 0 0 0 3.46 3.46l2.28 2.27a.5.5 0 0 0 .7-.7l-15-15ZM13.5 11c-.12 0-.24 0-.35.02l2.83 2.83.02-.35V3.18l-.01-.16a1 1 0 0 0-1.29-.8l-7 2.2a1 1 0 0 0-.61.54l2.8 2.82L15 6.18v5.32c-.42-.31-.94-.5-1.5-.5Z"])));
const MusicNoteOff220Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNoteOff220Regular', "20", ["M2.85 2.15a.5.5 0 1 0-.7.7L7 7.71v5.79a2.5 2.5 0 1 0 1 2V8.7l3.41 3.42a2.5 2.5 0 0 0 3.46 3.46l2.28 2.27a.5.5 0 0 0 .7-.7l-15-15Zm11.3 12.7a1.5 1.5 0 0 1-2-2l2 2ZM5.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm8-3c-.12 0-.24 0-.35.02l2.83 2.83.02-.35V3.18a1 1 0 0 0-1.3-.95l-7 2.18a1 1 0 0 0-.61.55l.91.92v-.51l7-2.19v1.95L9.1 6.98l.8.8 5.1-1.6v5.32c-.42-.31-.94-.5-1.5-.5Z"])));
const MusicNoteOff224Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNoteOff224Filled', "24", ["M8.5 9.56v6.07a3.5 3.5 0 1 0 1.5 2.62v-7.19l3.55 3.55a3.5 3.5 0 0 0 4.84 4.84l2.33 2.33a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06L8.5 9.56Zm8 3.44-.3.01 3.79 3.8a3.54 3.54 0 0 0 .01-.56V2.75a.75.75 0 0 0-.97-.72l-10 3c-.2.06-.35.2-.44.37l4.1 4.1 5.81-1.74v5.87a3.48 3.48 0 0 0-2-.63Z"])));
const MusicNoteOff224Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MusicNoteOff224Regular', "24", ["M8.5 9.56v6.07a3.5 3.5 0 1 0 1.5 2.62v-7.19l3.55 3.55a3.5 3.5 0 0 0 4.84 4.84l2.33 2.33a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06L8.5 9.56Zm8.78 8.78a2 2 0 0 1-2.62-2.62l2.62 2.62ZM6.5 16.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10-3.5-.3.01 3.79 3.8a3.54 3.54 0 0 0 .01-.56V2.75a.75.75 0 0 0-.97-.72l-10 3c-.2.06-.35.2-.44.37L10 6.82V6.3l8.5-2.55v2.43l-7.02 2.1 1.2 1.21 5.82-1.74v5.87a3.48 3.48 0 0 0-2-.63Z"])));
const MyLocation12Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MyLocation12Filled', "12", ["M6 7.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm.75-5.68a4 4 0 0 1 3.18 3.18h1.32a.75.75 0 0 1 0 1.5H9.93a4 4 0 0 1-3.18 3.18v1.32a.75.75 0 0 1-1.5 0V9.93a4 4 0 0 1-3.18-3.18H.75a.75.75 0 0 1 0-1.5h1.32a4 4 0 0 1 3.18-3.18V.75a.75.75 0 0 1 1.5 0v1.32ZM8.5 6a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z", "M0 0h12v12H0z"])));
const MyLocation12Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MyLocation12Regular', "12", ["M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-.5-5.97V.5a.5.5 0 0 1 1 0v1.53A4 4 0 0 1 9.97 5.5h1.53a.5.5 0 0 1 0 1H9.97A4 4 0 0 1 6.5 9.97a.5.5 0 0 1 0 .03v1.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 0-.03A4 4 0 0 1 2.03 6.5a.5.5 0 0 1-.03 0H.5a.5.5 0 0 1 0-1H2a.5.5 0 0 1 .03 0A4 4 0 0 1 5.5 2.03ZM3 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z", "M0 0h12v12H0z"])));
const MyLocation16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MyLocation16Filled', "16", ["M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm.75-8.75a.75.75 0 0 0-1.5 0v1.3a5 5 0 0 0-4.2 4.2h-1.3a.75.75 0 0 0 0 1.5h1.3a5 5 0 0 0 4.2 4.2v1.3a.75.75 0 0 0 1.5 0v-1.3a5 5 0 0 0 4.2-4.2h1.3a.75.75 0 0 0 0-1.5h-1.3a5 5 0 0 0-4.2-4.2v-1.3ZM8 11.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"])));
const MyLocation16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MyLocation16Regular', "16", ["M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm.5-9a.5.5 0 0 0-1 0v1.52A5 5 0 0 0 3.02 7.5H1.5a.5.5 0 0 0 0 1h1.52a5 5 0 0 0 4.48 4.48v1.52a.5.5 0 0 0 1 0v-1.52a5 5 0 0 0 4.48-4.48h1.52a.5.5 0 1 0 0-1h-1.52A5 5 0 0 0 8.5 3.02V1.5ZM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"])));
const MyLocation20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MyLocation20Filled', "20", ["M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.75-10.25a.75.75 0 0 0-1.5 0v1.3a6 6 0 0 0-5.2 5.2h-1.3a.75.75 0 0 0 0 1.5h1.3a6 6 0 0 0 5.2 5.2v1.3a.75.75 0 0 0 1.5 0v-1.3a6 6 0 0 0 5.2-5.2h1.3a.75.75 0 0 0 0-1.5h-1.3a6 6 0 0 0-5.2-5.2v-1.3ZM10 14.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"])));
const MyLocation20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MyLocation20Regular', "20", ["M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.5-10.5a.5.5 0 0 0-1 0v1.52A6 6 0 0 0 4.02 9.5H2.5a.5.5 0 0 0 0 1h1.52a6 6 0 0 0 5.48 5.48v1.52a.5.5 0 0 0 1 0v-1.52a6 6 0 0 0 5.48-5.48h1.52a.5.5 0 0 0 0-1h-1.52a6 6 0 0 0-5.48-5.48V2.5ZM10 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"])));
const MyLocation24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MyLocation24Filled', "24", ["M12 2a1 1 0 0 1 1 .88V4.31a7.75 7.75 0 0 1 6.69 6.7L21 11a1 1 0 0 1 .12 2H19.69A7.75 7.75 0 0 1 13 19.69V21a1 1 0 0 1-2 .12V19.69A7.75 7.75 0 0 1 4.31 13H3a1 1 0 0 1-.12-2H4.31a7.75 7.75 0 0 1 6.7-6.69L11 3a1 1 0 0 1 1-1Zm0 4.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"])));
const MyLocation24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('MyLocation24Regular', "24", ["M12 2c.38 0 .7.28.74.65l.01.1v1.79a7.5 7.5 0 0 1 6.71 6.71h1.79a.75.75 0 0 1 .1 1.5H19.46a7.5 7.5 0 0 1-6.71 6.71v1.79a.75.75 0 0 1-1.5.1V19.46a7.5 7.5 0 0 1-6.71-6.71H2.75a.75.75 0 0 1-.1-1.5H4.54a7.5 7.5 0 0 1 6.71-6.71V2.75c0-.41.34-.75.75-.75Zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"])));
const Navigation16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Navigation16Filled', "16", ["M2 3.75c0-.41.34-.75.75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75Zm0 4c0-.41.34-.75.75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 7.75Zm0 4c0-.41.34-.75.75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"])));
const Navigation16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Navigation16Regular', "16", ["M2 3.5c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 4c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 4c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"])));
const Navigation20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Navigation20Filled', "20", ["M2 4.75c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 5c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75ZM2.75 14a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z"])));
const Navigation20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Navigation20Regular', "20", ["M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"])));
const Navigation24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Navigation24Filled', "24", ["M3 17h18a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H21 3Zm0-6h18a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H21 3Zm0-6h18a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H21 3Z"])));
const Navigation24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Navigation24Regular', "24", ["M2.75 18h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h18.6-18.5Zm0-6.5h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h18.6-18.5Zm0-6.5h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.49h18.6-18.5Z"])));
const NavigationLocationTarget20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NavigationLocationTarget20Filled', "20", ["M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2 10.75c0-.41.34-.75.75-.75h11.34a1.5 1.5 0 0 0-.07.27 4.47 4.47 0 0 0-1.85 1.23H2.75a.75.75 0 0 1-.75-.75ZM2.75 15h7.34a1.5 1.5 0 0 0 1.18.98c.06.18.13.35.22.52H2.75a.75.75 0 0 1 0-1.5Zm13.3.33a1 1 0 1 1-1.1-1.66 1 1 0 0 1 1.1 1.66Zm2.9-1.33h.55a.5.5 0 0 1 0 1h-.55A3.49 3.49 0 0 1 16 17.95v.55a.5.5 0 0 1-1 0v-.55A3.49 3.49 0 0 1 12.05 15h-.55a.5.5 0 0 1 0-1h.55A3.49 3.49 0 0 1 15 11.05v-.55a.5.5 0 0 1 1 0v.55A3.49 3.49 0 0 1 18.95 14Zm-3.2 2.99a2.5 2.5 0 1 0-.5-4.98 2.5 2.5 0 0 0 .5 4.98Z"])));
const NavigationLocationTarget20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NavigationLocationTarget20Regular', "20", ["M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 5a.5.5 0 0 0 0 1h10.2c.4-.32.84-.56 1.32-.73.01-.1.04-.18.07-.27H2.5Zm7.86 5.48a1.5 1.5 0 0 1-.27-.48H2.5a.5.5 0 0 0 0 1h8.77v-.02a1.5 1.5 0 0 1-.91-.5Zm5.14.02a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1.5h-.55A3.49 3.49 0 0 0 16 11.05v-.55a.5.5 0 0 0-1 0v.55A3.49 3.49 0 0 0 12.05 14h-.55a.5.5 0 0 0 0 1h.55A3.49 3.49 0 0 0 15 17.95v.55a.5.5 0 0 0 1 0v-.55A3.49 3.49 0 0 0 18.95 15h.55a.5.5 0 0 0 0-1Zm-2.23 2.27a2.5 2.5 0 1 1-3.54-3.54 2.5 2.5 0 0 1 3.54 3.54Z"])));
const NavigationPlay20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NavigationPlay20Filled', "20", ["M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2 10.75c0-.41.34-.75.75-.75h9.59c-.58.4-1.07.91-1.45 1.5H2.75a.75.75 0 0 1-.75-.75ZM2.75 15h7.27c.05.52.17 1.03.35 1.5H2.75a.75.75 0 0 1 0-1.5ZM20 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z"])));
const NavigationPlay20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NavigationPlay20Regular', "20", ["M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 5a.5.5 0 0 0 0 1h8.76c.31-.38.67-.72 1.08-1H2.5Zm7.7 6c-.08-.32-.15-.66-.18-1H2.5a.5.5 0 0 0 0 1h7.7Zm9.8-1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.29-.44-2.97-1.65a.5.5 0 0 0-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 0 0 0-.88Z"])));
const NavigationUnread20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NavigationUnread20Filled', "20", ["m17.98 4.57.02-.32a2.25 2.25 0 1 0-.28 1.08c.13-.24.22-.5.26-.76ZM2.75 4h9.76a3.28 3.28 0 0 0 .24 1.5h-10a.75.75 0 0 1 0-1.5ZM2 9.75c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75ZM2.75 14a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z"])));
const NavigationUnread20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NavigationUnread20Regular', "20", ["M18 4.42v-.17a2.25 2.25 0 1 0-.05.46c.02-.1.04-.2.04-.29ZM2.5 4h10a3.28 3.28 0 0 0 .09 1H2.5a.5.5 0 0 1 0-1ZM2 9.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"])));
const NavigationUnread24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NavigationUnread24Filled', "24", ["M19.25 8.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM15.71 7a3.74 3.74 0 0 1-.14-2H2.88A1 1 0 0 0 3 7h12.71ZM21 17H2.88A1 1 0 0 0 3 19h18.12a1 1 0 0 0-.12-2ZM3 11h18a1 1 0 0 1 .12 2H3a1 1 0 0 1-.12-2H3Z"])));
const NavigationUnread24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NavigationUnread24Regular', "24", ["M19.25 8.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Zm-3.67-2a3.77 3.77 0 0 1 0-1.5H2.74l-.1.01a.75.75 0 0 0 .1 1.5h12.83ZM21.25 18H2.65a.75.75 0 0 0 .1 1.5h18.6a.75.75 0 0 0-.1-1.5Zm-18.5-6.5h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.49h.1Z"])));
const NetworkAdapter16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NetworkAdapter16Filled', "16", ["M14.56 4.44A1.5 1.5 0 0 0 13.5 4H2V3a1 1 0 0 0-1-1H.5a.5.5 0 1 0 0 1H1v10.5c0 .13.05.26.15.35A.5.5 0 0 0 2 13.5V12h4v1.5c0 .13.05.26.15.35.09.1.22.15.35.15h6a.5.5 0 0 0 .5-.5V12h.5a1.5 1.5 0 0 0 1.5-1.5v-5c0-.4-.16-.78-.44-1.06ZM4 9.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v3Zm2.5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v3a.5.5 0 0 1-.5.5ZM9 13H7v-1h2v1Zm.5-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v3a.5.5 0 0 1-.5.5Zm2.5 3h-2v-1h2v1Zm1-3.5a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5v3Z"])));
const NetworkAdapter16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NetworkAdapter16Regular', "16", ["M4 6.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0ZM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5Zm3 0a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5Zm3 0a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Zm2.5-.5v5a1.5 1.5 0 0 1-1.5 1.5H13v1.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5V12H2v1.5a.5.5 0 0 1-1 0V3H.5a.5.5 0 0 1 0-1H1a1 1 0 0 1 1 1v1h11.5A1.5 1.5 0 0 1 15 5.5ZM7 13h2v-1H7v1Zm5-1h-2v1h2v-1Zm2-6.5a.5.5 0 0 0-.5-.5H2v6h11.5a.5.5 0 0 0 .5-.5v-5Z"])));
const NetworkCheck20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NetworkCheck20Filled', "20", ["M2.51 10.18a8 8 0 0 1 10.37-4.65l.57-.72.08-.1a9 9 0 0 0-11.95 5.1.5.5 0 1 0 .93.37Zm13.5-3.87a9.02 9.02 0 0 1 2.41 3.51.5.5 0 0 1-.93.36 8 8 0 0 0-1.87-2.88l.26-.66.14-.33ZM10 6.5c.66 0 1.3.1 1.9.28l-.67.86a5.52 5.52 0 0 0-6.56 3.98.5.5 0 1 1-.96-.24A6.5 6.5 0 0 1 10 6.5Zm5 2.35-.44 1.08c.35.51.6 1.08.77 1.7a.5.5 0 1 0 .97-.25c-.25-.95-.7-1.8-1.3-2.53ZM10 9h.16l-.83 1.08A3 3 0 0 0 7 13a.5.5 0 0 1-1 0 4 4 0 0 1 4-4Zm3.17 4.35v.02c.08.08.2.13.33.13a.5.5 0 0 0 .5-.5 4 4 0 0 0-.19-1.21l-.64 1.56Zm.22-6.85.61-.78.23-.29.04-.04a.5.5 0 0 1 .86.37l-.04.16-.14.35a1207.08 1207.08 0 0 1-2.7 6.7 77.26 77.26 0 0 1-.73 1.66 1.75 1.75 0 0 1-3.04-1.75l.38-.54.7-.92a341.32 341.32 0 0 1 3.83-4.92Zm1.74-.74a.5.5 0 0 1-.04.16Z"])));
const NetworkCheck20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NetworkCheck20Regular', "20", ["M2.51 10.18a8 8 0 0 1 10.37-4.65l.57-.72.08-.1a9 9 0 0 0-11.95 5.1.5.5 0 1 0 .93.37Zm13.5-3.87a9.02 9.02 0 0 1 2.41 3.51.5.5 0 0 1-.93.36 8 8 0 0 0-1.87-2.88l.26-.66.14-.33ZM10 6.5c.66 0 1.3.1 1.9.28l-.67.86a5.52 5.52 0 0 0-6.56 3.98.5.5 0 1 1-.96-.24A6.5 6.5 0 0 1 10 6.5Zm5 2.35-.44 1.08c.35.51.6 1.08.77 1.7a.5.5 0 1 0 .97-.25c-.25-.95-.7-1.8-1.3-2.53ZM10 9h.16l-.83 1.08A3 3 0 0 0 7 13a.5.5 0 0 1-1 0 4 4 0 0 1 4-4Zm3.17 4.35v.02c.08.08.2.13.33.13a.5.5 0 0 0 .5-.5 4 4 0 0 0-.19-1.21l-.64 1.56Zm.22-6.85.61-.78.23-.29.04-.04a.5.5 0 0 1 .86.37l-.04.16-.14.35a1207.08 1207.08 0 0 1-2.7 6.7 77.26 77.26 0 0 1-.73 1.66 1.75 1.75 0 0 1-3.04-1.75l.38-.54.7-.92a341.32 341.32 0 0 1 3.83-4.92Zm-1.1 3.02a338.93 338.93 0 0 0-2.94 3.86.75.75 0 1 0 1.3.75l.23-.5.44-1.05a342.47 342.47 0 0 0 1.55-3.8l-.57.74Zm2.84-3.76a.5.5 0 0 1-.04.16Z"])));
const NetworkCheck24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NetworkCheck24Filled', "24", ["m10.05 15.42 6.26-8.48a.7.7 0 0 1 1.23.57l-.03.1-3.87 9.8a2.07 2.07 0 1 1-3.74-1.76l.07-.12.08-.11 6.26-8.48-6.26 8.48Zm2.05-4.55-1.23 1.66a3.33 3.33 0 0 0-2.29 3.03.75.75 0 0 1-1.5-.07 4.82 4.82 0 0 1 5.02-4.62Zm4.17 2.75c.28.59.43 1.22.46 1.87a.75.75 0 0 1-1.38.44l.92-2.3Zm-2.24-5.37-.96 1.31a6.22 6.22 0 0 0-7.16 4.41.75.75 0 0 1-1.44-.4 7.7 7.7 0 0 1 9.56-5.32Zm3.51 2.14a7.66 7.66 0 0 1 1.8 3.15.75.75 0 0 1-1.44.42 6.23 6.23 0 0 0-.88-1.84l-.1-.14.62-1.59Zm-1.56-4.54-.09.06c-.12.08-.23.18-.33.3l-.1.11-.54.73a9.14 9.14 0 0 0-11.54 5.32.75.75 0 1 1-1.4-.54 10.64 10.64 0 0 1 14-5.97Zm2.63 1.56a10.65 10.65 0 0 1 3.22 4.41.75.75 0 0 1-1.4.55 9.17 9.17 0 0 0-2.32-3.4l.38-.97c.07-.2.11-.39.12-.59Z"])));
const NetworkCheck24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NetworkCheck24Regular', "24", ["m10.05 15.42 6.26-8.48a.7.7 0 0 1 1.23.57l-.03.1-3.87 9.8a2.07 2.07 0 1 1-3.74-1.76l.07-.12.08-.11 6.26-8.48-6.26 8.48Zm3.8-2.62-2.6 3.51-.03.06a.57.57 0 0 0 .22.78l.07.03c.26.1.55 0 .7-.24l.04-.08 1.6-4.06Zm-1.75-1.93-1.23 1.66a3.33 3.33 0 0 0-2.29 3.03.75.75 0 0 1-1.5-.07 4.82 4.82 0 0 1 5.02-4.62Zm4.17 2.75c.28.59.43 1.22.46 1.87a.75.75 0 0 1-1.38.44l.92-2.3Zm-2.24-5.37-.96 1.31a6.22 6.22 0 0 0-7.16 4.41.75.75 0 0 1-1.44-.4 7.7 7.7 0 0 1 9.56-5.32Zm3.51 2.14a7.66 7.66 0 0 1 1.8 3.15.75.75 0 0 1-1.44.42 6.23 6.23 0 0 0-.88-1.84l-.1-.14.62-1.59Zm-1.56-4.54-.09.06c-.12.08-.23.18-.33.3l-.1.11-.54.73a9.14 9.14 0 0 0-11.54 5.32.75.75 0 1 1-1.4-.54 10.64 10.64 0 0 1 14-5.97Zm2.63 1.56a10.65 10.65 0 0 1 3.22 4.41.75.75 0 0 1-1.4.55 9.17 9.17 0 0 0-2.32-3.4l.38-.97c.07-.2.11-.39.12-.59Z"])));
const New16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('New16Filled', "16", ["M3.75 11h4.5a.75.75 0 0 1 .1 1.5h-4.6a.75.75 0 0 1-.1-1.5h4.6-4.5Zm1.47-5.78a.75.75 0 0 1 .98-.07l.08.07 3.5 3.5a.75.75 0 0 1-.98 1.13l-.08-.07-3.5-3.5a.75.75 0 0 1 0-1.06ZM11.75 3c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 0 1-1.5.1v-4.6c0-.41.34-.75.75-.75Z"])));
const New16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('New16Regular', "16", ["M3.5 11h5a.5.5 0 0 1 .1 1H3.5a.5.5 0 0 1-.09-1h5.1-5Zm1.65-5.85a.5.5 0 0 1 .64-.06l.07.06 4 4a.5.5 0 0 1-.64.76l-.07-.06-4-4a.5.5 0 0 1 0-.7ZM11.5 3a.5.5 0 0 1 .5.41V8.5a.5.5 0 0 1-.99.09V3.5c0-.28.22-.5.5-.5Z"])));
const New20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('New20Filled', "20", ["M15.5 2.75c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0v-8c0-.41.34-.75.75-.75ZM5.97 5.97c.3-.3.77-.3 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06ZM3.5 14.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Z"])));
const New20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('New20Regular', "20", ["M15.5 3c.28 0 .5.22.5.5v8a.5.5 0 0 1-1 0v-8c0-.28.22-.5.5-.5ZM6.15 6.15c.2-.2.5-.2.7 0l6 6a.5.5 0 0 1-.7.7l-6-6a.5.5 0 0 1 0-.7ZM3.5 15a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Z"])));
const New24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('New24Filled', "24", ["M18 4a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM4 18a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM7.7 6.3a1 1 0 0 0-1.4 1.4l7 7a1 1 0 0 0 1.4-1.4l-7-7Z"])));
const New24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('New24Regular', "24", ["M18.25 4c.41 0 .75.34.75.75v8.5a.75.75 0 0 1-1.5 0v-8.5c0-.41.34-.75.75-.75ZM4 18.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM8.28 7.22a.75.75 0 0 0-1.06 1.06l6.5 6.5a.75.75 0 1 0 1.06-1.06l-6.5-6.5Z"])));
const News16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('News16Filled', "16", ["M4 9V8h1v1H4ZM1 4c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6.5a.5.5 0 0 0 1 0V4a2 2 0 0 1 2 2v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5V4Zm2.5 1a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2Zm4 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm0 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z"])));
const News16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('News16Regular', "16", ["M3.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 2a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2ZM4 9V8h1v1H4Zm3.5-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM1 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2 2 2 0 0 1 2 2v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5V4Zm11.5 6.5a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V6a1 1 0 0 0-1-1v5a.5.5 0 0 1-.5.5Z"])));
const News20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('News20Filled', "20", ["M5 12v-2h2v2H5Zm10-7.5c0-.83-.67-1.5-1.5-1.5H3.42c-.83 0-1.5.67-1.5 1.5v9a2.5 2.5 0 0 0 2.5 2.5h11.16a2.5 2.5 0 0 0 2.5-2.5v-6c0-.83-.67-1.5-1.5-1.5H16v7.23a.5.5 0 0 1-1 0V4.5Zm-11 2c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5ZM9.5 9h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM9 12.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.5 9h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z"])));
const News20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('News20Regular', "20", ["M5 6.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM10.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-.5 3.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM5.5 9a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3v-2h2v2H6ZM2 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v1a2 2 0 0 1 2 2v5.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5V5Zm13 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8.5c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8a1 1 0 0 0-1-1v6.5a.5.5 0 0 1-1 0V5Z"])));
const News24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('News24Filled', "24", ["M16.75 4c1.2 0 2.17.93 2.24 2.1l.01.15V17.5a.5.5 0 0 0 1 .09V7.01c1.07.12 1.92 1 2 2.08v7.66a3.25 3.25 0 0 1-3.07 3.24l-.18.01H5.25a3.25 3.25 0 0 1-3.24-3.07L2 16.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h12.5Zm-7.5 7h-3.5a.75.75 0 0 0-.75.75v3.5c0 .41.33.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 0 0-.75-.75Zm6 3.5h-2.6a.75.75 0 0 0 .1 1.5h2.6a.75.75 0 0 0-.1-1.5Zm-6.75-2v2h-2v-2h2Zm6.75-1.5h-2.5l-.1.01a.75.75 0 0 0 .1 1.5l2.5-.01h.1a.75.75 0 0 0-.1-1.5Zm0-3.5h-9.5l-.1.01a.75.75 0 0 0 .1 1.5h9.5l.1-.01a.75.75 0 0 0-.1-1.5Z"])));
const News24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('News24Regular', "24", ["M18.75 20H5.25a3.25 3.25 0 0 1-3.24-3.07L2 16.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h12.5c1.2 0 2.17.93 2.24 2.1l.01.15V7h.75c1.2 0 2.17.93 2.24 2.1l.01.15v7.5a3.25 3.25 0 0 1-3.07 3.24l-.18.01H5.25h13.5Zm-13.5-1.5h13.5c.92 0 1.67-.7 1.74-1.6l.01-.15v-7.5c0-.38-.28-.7-.65-.74l-.1-.01H19v7.75c0 .38-.28.7-.65.74l-.1.01a.75.75 0 0 1-.74-.65l-.01-.1v-10c0-.38-.28-.7-.65-.74l-.1-.01H4.25c-.38 0-.7.28-.74.65l-.01.1v10.5c0 .92.7 1.67 1.6 1.74l.15.01h13.5-13.5Zm7-4h3a.75.75 0 0 1 .1 1.5h-3.1a.75.75 0 0 1-.1-1.5h3.1-3Zm-3-3.5c.4 0 .74.34.74.75v3.5c0 .41-.33.75-.75.75h-3.5a.75.75 0 0 1-.74-.75v-3.5c0-.41.33-.75.75-.75h3.5Zm-.76 1.5h-2v2h2v-2Zm3.76-1.5h3a.75.75 0 0 1 .1 1.5h-3.1a.75.75 0 0 1-.1-1.49h3.1-3Zm-6.5-3.5h9.5a.75.75 0 0 1 .1 1.5h-9.6a.75.75 0 0 1-.1-1.5h9.6-9.5Z"])));
const News28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('News28Filled', "28", ["M22 5.75V20.5a.5.5 0 0 0 1 .09V7h1.25c.92 0 1.67.7 1.74 1.6l.01.15v12a3.25 3.25 0 0 1-3.07 3.24l-.18.01H5.25a3.25 3.25 0 0 1-3.24-3.07L2 20.75v-15c0-.92.7-1.67 1.6-1.74L3.76 4h16.5c.92 0 1.67.7 1.74 1.6l.01.15V20.5 5.75ZM9.75 13h-2.5c-.92 0-1.67.71-1.74 1.61l-.01.14v2.5c0 .92.7 1.67 1.6 1.74l.15.01h2.5c.91 0 1.67-.7 1.74-1.6v-2.65c0-.91-.7-1.67-1.6-1.74h-.14Zm8 4.5h-3.6a.75.75 0 0 0 0 1.5h3.7a.75.75 0 0 0 0-1.5h-.1Zm-10.5-3h2.5c.11 0 .21.09.24.2v2.55c0 .12-.08.22-.19.24l-.05.01h-2.5a.25.25 0 0 1-.24-.2L7 17.26v-2.5c0-.11.08-.21.2-.24h2.55-2.5Zm10.5-1.5h-3.5l-.1.01a.75.75 0 0 0 0 1.49h3.7a.75.75 0 0 0 0-1.49h-.1Zm0-4.5H6.15a.75.75 0 0 0 0 1.49h11.7a.75.75 0 0 0 0-1.49h-.1Z"])));
const News28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('News28Regular', "28", ["M22.75 24H5.25a3.25 3.25 0 0 1-3.24-3.07L2 20.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h15.5c1.2 0 2.17.93 2.24 2.1l.01.15V7h1.75c1.2 0 2.17.93 2.24 2.1l.01.15v11.5a3.25 3.25 0 0 1-3.07 3.24l-.18.01H5.25h17.5Zm-17.5-1.5h17.5c.92 0 1.67-.7 1.74-1.6l.01-.15V9.25c0-.38-.28-.7-.65-.74l-.1-.01H22v10.75c0 .38-.28.7-.65.74l-.1.01a.75.75 0 0 1-.74-.65l-.01-.1v-13c0-.38-.28-.7-.65-.74l-.1-.01H4.25c-.38 0-.7.28-.74.65l-.01.1v14.5c0 .92.7 1.67 1.6 1.74l.15.01h17.5-17.5Zm5-9.5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25v-3.5c0-.69.56-1.25 1.25-1.25h3.5Zm4 4.5h3.5a.75.75 0 0 1 .1 1.5h-3.6a.75.75 0 0 1-.1-1.5h3.6-3.5Zm-4.25-3H7v3h3v-3Zm4.25-1.5h3.5a.75.75 0 0 1 .1 1.5h-3.6a.75.75 0 0 1-.1-1.49h3.6-3.5Zm-8-4.5h11.5a.75.75 0 0 1 .1 1.49H6.25a.75.75 0 0 1-.1-1.49h11.6-11.5Z"])));
const Next16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next16Filled', "16", ["M2 3a1 1 0 0 1 1.58-.81l7 4.96a1 1 0 0 1 0 1.63l-7 5.03a1 1 0 0 1-1.58-.8V3Zm12-.5a.5.5 0 1 0-1 0v11a.5.5 0 0 0 1 0v-11Z"])));
const Next16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next16Regular', "16", ["M14 2.5a.5.5 0 1 0-1 0v11a.5.5 0 0 0 1 0v-11ZM2 3a1 1 0 0 1 1.58-.81l7 4.96a1 1 0 0 1 0 1.63l-7 5.03a1 1 0 0 1-1.58-.8V3Zm8 4.96L3 3v10l7-5.04Z"])));
const Next20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next20Filled', "20", ["M3 4.25c0-1 1.12-1.6 1.95-1.04l8.5 5.71c.73.5.73 1.57 0 2.07l-8.5 5.8A1.25 1.25 0 0 1 3 15.75V4.25Zm14-.75a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0v-13Z"])));
const Next20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next20Regular', "20", ["M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0v-13ZM3 4.25c0-1 1.12-1.6 1.95-1.04l8.5 5.71c.73.5.73 1.57 0 2.07l-8.5 5.8A1.25 1.25 0 0 1 3 15.75V4.25Zm1.39-.2a.25.25 0 0 0-.39.2v11.5c0 .2.23.32.4.2l8.49-5.78a.25.25 0 0 0 0-.42l-8.5-5.7Z"])));
const Next24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next24Filled', "24", ["M3 4.75c0-1.4 1.58-2.24 2.74-1.44l10.5 7.2c1 .68 1.01 2.17 0 2.87l-10.5 7.3A1.75 1.75 0 0 1 3 19.25V4.75Zm18-1a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75Z"])));
const Next24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next24Regular', "24", ["M3 4.75c0-1.4 1.58-2.24 2.74-1.44l10.5 7.2c1 .68 1.01 2.17 0 2.87l-10.5 7.3A1.75 1.75 0 0 1 3 19.25V4.75Zm1.9-.2a.25.25 0 0 0-.4.2v14.5c0 .2.23.32.4.2l10.5-7.3a.25.25 0 0 0-.01-.41l-10.5-7.2Zm16.1-.8a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75Z"])));
const Next28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next28Filled', "28", ["M23.5 3.75a.75.75 0 0 1 1.5 0v20.5a.75.75 0 0 1-1.5 0V3.75ZM3 5.25a2.25 2.25 0 0 1 3.53-1.84l12.5 8.68c1.3.89 1.3 2.78.02 3.68l-12.5 8.81A2.25 2.25 0 0 1 3 22.75V5.25Z"])));
const Next28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next28Regular', "28", ["M23.5 3.75a.75.75 0 0 1 1.5 0v20.5a.75.75 0 0 1-1.5 0V3.75ZM3 5.25a2.25 2.25 0 0 1 3.53-1.84l12.5 8.68c1.3.89 1.3 2.78.02 3.68l-12.5 8.81A2.25 2.25 0 0 1 3 22.75V5.25Zm2.68-.61a.75.75 0 0 0-1.18.61v17.5c0 .6.69.96 1.18.6l12.5-8.8a.75.75 0 0 0 0-1.23L5.68 4.64Z"])));
const Next32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next32Filled', "32", ["M26 5a1 1 0 1 1 2 0v22a1 1 0 0 1-2 0V5ZM4 6.5c0-2 2.24-3.19 3.9-2.07l14 9.43A2.5 2.5 0 0 1 21.9 18l-14 9.56A2.5 2.5 0 0 1 4 25.5v-19Z"])));
const Next32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next32Regular', "32", ["M26 5a1 1 0 1 1 2 0v22a1 1 0 0 1-2 0V5ZM4 6.5c0-2 2.24-3.19 3.9-2.07l14 9.43A2.5 2.5 0 0 1 21.9 18l-14 9.56A2.5 2.5 0 0 1 4 25.5v-19Zm2.78-.41A.5.5 0 0 0 6 6.5v19c0 .4.45.64.78.4l14-9.55a.5.5 0 0 0 0-.83l-14-9.43Z"])));
const Next48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next48Filled', "48", ["M40.75 6c-.69 0-1.25.56-1.25 1.25v33.5a1.25 1.25 0 0 0 2.5 0V7.25C42 6.56 41.44 6 40.75 6ZM6 9.26a3.25 3.25 0 0 1 5.09-2.68l21.5 14.74a3.25 3.25 0 0 1 0 5.36L11.1 41.42A3.25 3.25 0 0 1 6 38.74V9.26Z"])));
const Next48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Next48Regular', "48", ["M39.5 7.25a1.25 1.25 0 0 1 2.5 0v33.5a1.25 1.25 0 1 1-2.5 0V7.25ZM6 9.25v29.5a3.25 3.25 0 0 0 5.09 2.67l21.5-14.74a3.25 3.25 0 0 0 0-5.36L11.1 6.58A3.25 3.25 0 0 0 6 9.26Zm3.67-.61 21.5 14.74c.44.3.44.94 0 1.24L9.68 39.36a.75.75 0 0 1-1.17-.62V9.26c0-.6.68-.96 1.17-.62Z"])));
const Note16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Note16Filled', "16", ["M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V8h-3.5A2.5 2.5 0 0 0 8 10.5V14H4.5A2.5 2.5 0 0 1 2 11.5v-7Zm7 9.36c.35-.12.67-.32.94-.6l3.33-3.32c.27-.27.47-.59.59-.94H10.5C9.67 9 9 9.67 9 10.5v3.36Z"])));
const Note16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Note16Regular', "16", ["M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h3.67c.66 0 1.3-.26 1.77-.73l3.33-3.33c.47-.47.73-1.1.73-1.77V4.5A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5V8h-2.5A2.5 2.5 0 0 0 8 10.5V13H4.5A1.5 1.5 0 0 1 3 11.5v-7Zm6 8.25V10.5c0-.83.67-1.5 1.5-1.5h2.25a1.5 1.5 0 0 1-.19.23l-3.33 3.33a1.5 1.5 0 0 1-.23.2Z"])));
const Note20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Note20Filled', "20", ["M14 3a3 3 0 0 1 3 2.82V10h-4.18a3 3 0 0 0-2.81 2.82L10 13v4H6a3 3 0 0 1-3-2.82V6a3 3 0 0 1 2.82-3H14Zm2.9 8a2 2 0 0 1-.36.65l-.13.14-4.62 4.62a2 2 0 0 1-.79.5V12.84a2 2 0 0 1 1.84-1.84L13 11h3.9Z"])));
const Note20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Note20Regular', "20", ["M14 3a3 3 0 0 1 3 2.82v4.56a2 2 0 0 1-.47 1.28l-.12.13-4.62 4.62a2 2 0 0 1-1.24.58l-.17.01H6a3 3 0 0 1-3-2.82V6a3 3 0 0 1 2.82-3H14Zm0 1H6a2 2 0 0 0-2 1.85V14a2 2 0 0 0 1.85 2H10v-3a3 3 0 0 1 2.82-3H16V6a2 2 0 0 0-1.85-2H14Zm1.78 7H13a2 2 0 0 0-2 1.85V15.78l.09-.07 4.62-4.62a1 1 0 0 0 .07-.09Z"])));
const Note24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Note24Filled', "24", ["M17.75 3C19.55 3 21 4.46 21 6.25V13h-4.75A3.25 3.25 0 0 0 13 16.25V21H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5Zm2.81 11.5-6.06 6.06v-4.31c0-.97.78-1.75 1.75-1.75h4.31Z"])));
const Note24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Note24Regular', "24", ["M17.75 3C19.55 3 21 4.46 21 6.25v6.88c0 .6-.24 1.17-.66 1.59l-5.62 5.62c-.42.42-1 .66-1.6.66H6.26A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5Zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75H13v-3.25a3.25 3.25 0 0 1 3.07-3.24l.18-.01h3.25V6.25c0-.97-.78-1.75-1.75-1.75Zm.69 10h-2.19c-.92 0-1.67.7-1.74 1.6l-.01.15v2.19l3.94-3.94Z"])));
const Note28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Note28Filled', "28", ["M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75V15h-6.25A3.75 3.75 0 0 0 15 18.75V25H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM16.5 25h.06L25 16.56v-.06h-6.25c-1.24 0-2.25 1-2.25 2.25V25Z"])));
const Note28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Note28Regular', "28", ["M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h8.5c1 0 1.96-.4 2.66-1.1l6-6c.7-.7 1.09-1.65 1.09-2.64V6.75A3.75 3.75 0 0 0 21.25 3H6.75ZM4.5 6.75c0-1.24 1-2.25 2.25-2.25h14.5c1.24 0 2.25 1 2.25 2.25V15h-4.75A3.75 3.75 0 0 0 15 18.75v4.75H6.75c-1.24 0-2.25-1-2.25-2.25V6.75Zm12 16.38v-4.38c0-1.24 1-2.25 2.25-2.25h4.38c-.09.12-.18.24-.29.35l-6 6c-.1.1-.22.2-.34.28Z"])));
const Note48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Note48Filled', "48", ["M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5C6 39.2 8.8 42 12.25 42H26v-9.75C26 28.8 28.8 26 32.25 26H42V12.25C42 8.8 39.2 6 35.75 6h-23.5Zm29.2 22.5h-9.2a3.75 3.75 0 0 0-3.75 3.75v9.2c.68-.31 1.3-.74 1.85-1.28l9.82-9.82c.54-.54.97-1.17 1.28-1.85Z"])));
const Note48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Note48Regular', "48", ["M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5C6 39.2 8.8 42 12.25 42h13.68c1.66 0 3.25-.66 4.42-1.83l9.82-9.82A6.25 6.25 0 0 0 42 25.93V12.25C42 8.8 39.2 6 35.75 6h-23.5ZM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V26h-7.25A6.25 6.25 0 0 0 26 32.25v7.25H12.25a3.75 3.75 0 0 1-3.75-3.75v-23.5Zm20 26.23v-6.23a3.75 3.75 0 0 1 3.75-3.75h6.23l-.08.08-9.82 9.82-.08.08Z"])));
const NoteAdd16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteAdd16Filled', "16", ["M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H6V3.5ZM5.5 11a5.5 5.5 0 0 0 4.9-8h2.1A2.5 2.5 0 0 1 15 5.5V9h-3a3 3 0 0 0-3 3v3H5.5A2.5 2.5 0 0 1 3 12.5v-2.1c.75.38 1.6.6 2.5.6Zm4.5 3.98c.32-.04.62-.19.85-.42l3.71-3.71c.23-.23.38-.53.42-.85H12a2 2 0 0 0-2 2v2.98Z"])));
const NoteAdd16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteAdd16Regular', "16", ["M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H6V3.5Zm6.5.5h-1.7c-.1-.35-.24-.68-.4-1h2.1A2.5 2.5 0 0 1 15 5.5v4.29c0 .4-.16.78-.44 1.06l-3.71 3.71a1.5 1.5 0 0 1-1.06.44H5.5A2.5 2.5 0 0 1 3 12.5v-2.1c.32.16.65.3 1 .4v1.7c0 .83.67 1.5 1.5 1.5H9v-2a3 3 0 0 1 3-3h2V5.5c0-.83-.67-1.5-1.5-1.5ZM10 13.95a.5.5 0 0 0 .14-.1l3.71-3.71a.5.5 0 0 0 .1-.14H12a2 2 0 0 0-2 2v1.95Z"])));
const NoteAdd20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteAdd20Filled', "20", ["M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H6V3.5ZM5.5 11a5.5 5.5 0 0 0 4.9-8H14a3 3 0 0 1 3 2.82V10h-4.18a3 3 0 0 0-2.81 2.82L10 13v4H6a3 3 0 0 1-3-2.82V10.4c.75.38 1.6.6 2.5.6Zm11.4 0a2 2 0 0 1-.36.65l-.13.14-4.62 4.62a2 2 0 0 1-.79.5V12.84a2 2 0 0 1 1.84-1.84L13 11h3.9Z"])));
const NoteAdd20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteAdd20Regular', "20", ["M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H6V3.5Zm8 .5h-3.2c-.1-.35-.24-.68-.4-1H14a3 3 0 0 1 3 2.82v4.56a2 2 0 0 1-.47 1.28l-.12.13-4.62 4.62a2 2 0 0 1-1.24.58l-.17.01H6a3 3 0 0 1-3-2.82V10.4c.32.16.65.3 1 .4V14a2 2 0 0 0 1.85 2H10v-3a3 3 0 0 1 2.82-3H16V6a2 2 0 0 0-1.85-2H14Zm1.78 7H13a2 2 0 0 0-2 1.85V15.78l.09-.07 4.62-4.62a1 1 0 0 0 .07-.09Z"])));
const NoteAdd24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteAdd24Filled', "24", ["M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM7 7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 1 0V6h2.5a.5.5 0 0 1 0 1H7Zm-.5 6a6.5 6.5 0 0 0 5.48-10h5.77C19.55 3 21 4.46 21 6.25V13h-4.75A3.25 3.25 0 0 0 13 16.25V21H6.25A3.25 3.25 0 0 1 3 17.75v-5.77A6.47 6.47 0 0 0 6.5 13Zm14.06 1.5-6.06 6.06v-4.31c0-.97.78-1.75 1.75-1.75h4.31Z"])));
const NoteAdd24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteAdd24Regular', "24", ["M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM7 7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 1 0V6h2.5a.5.5 0 0 1 0 1H7Zm10.75-2.5h-5.06a6.47 6.47 0 0 0-.71-1.5h5.77C19.55 3 21 4.46 21 6.25v6.88c0 .6-.24 1.17-.66 1.59l-5.62 5.62c-.42.42-1 .66-1.6.66H6.26A3.25 3.25 0 0 1 3 17.75v-5.77c.46.3.97.53 1.5.7v5.07c0 .97.78 1.75 1.75 1.75H13v-3.25a3.25 3.25 0 0 1 3.07-3.24l.18-.01h3.25V6.25c0-.97-.78-1.75-1.75-1.75Zm.69 10h-2.19c-.92 0-1.67.7-1.74 1.6l-.01.15v2.19l3.94-3.94Z"])));
const NoteAdd28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteAdd28Filled', "28", ["M15 7.5a7.5 7.5 0 0 1-12 6v7.75A3.75 3.75 0 0 0 6.75 25H15v-6.25A3.75 3.75 0 0 1 18.75 15H25V6.75A3.75 3.75 0 0 0 21.25 3H13.5A7.47 7.47 0 0 1 15 7.5ZM16.56 25h-.06v-6.25c0-1.24 1-2.25 2.25-2.25H25v.06L16.56 25ZM7.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0-11c.28 0 .5.22.5.5V7h3.5a.5.5 0 0 1 0 1H8v3.5a.5.5 0 0 1-1 0V8H3.5a.5.5 0 0 1 0-1H7V3.5c0-.28.22-.5.5-.5Z"])));
const NoteAdd28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteAdd28Regular', "28", ["M14 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V7H3.5a.5.5 0 0 0 0 1H7v3.5a.5.5 0 0 0 1 0V8h3.5a.5.5 0 0 0 0-1H8V3.5Zm13.25 1h-6.87A7.49 7.49 0 0 0 13.5 3h7.75A3.75 3.75 0 0 1 25 6.75v8.5c0 1-.4 1.96-1.1 2.66l-6 6c-.7.7-1.65 1.09-2.64 1.09H6.75A3.75 3.75 0 0 1 3 21.25V13.5c.46.35.96.64 1.5.88v6.87c0 1.24 1 2.25 2.25 2.25H15v-4.75A3.75 3.75 0 0 1 18.75 15h4.75V6.75c0-1.24-1-2.25-2.25-2.25ZM16.5 23.13c.12-.09.24-.18.35-.29l6-6c.1-.1.2-.22.28-.34h-4.38c-1.24 0-2.25 1-2.25 2.25v4.38Z"])));
const NoteAdd48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteAdd48Filled', "48", ["M24 13a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM14 6a1 1 0 1 0-2 0v6H6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V6Zm-1 20A13 13 0 0 0 23.96 6h11.79C39.2 6 42 8.8 42 12.25V26h-9.75A6.25 6.25 0 0 0 26 32.25V42H12.25A6.25 6.25 0 0 1 6 35.75v-11.8A12.94 12.94 0 0 0 13 26Zm28.45 2.5h-9.2a3.75 3.75 0 0 0-3.75 3.75v9.2c.68-.31 1.3-.74 1.85-1.28l9.82-9.82c.54-.54.97-1.17 1.28-1.85Z"])));
const NoteAdd48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteAdd48Regular', "48", ["M24 13a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM14 6a1 1 0 1 0-2 0v6H6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V6Zm21.75 2.5H25.2c-.33-.88-.74-1.72-1.24-2.5h11.79C39.2 6 42 8.8 42 12.25v13.68c0 1.66-.66 3.25-1.83 4.42l-9.82 9.82A6.25 6.25 0 0 1 25.93 42H12.25A6.25 6.25 0 0 1 6 35.75v-11.8c.78.5 1.62.92 2.5 1.25v10.55a3.75 3.75 0 0 0 3.75 3.75H26v-7.25C26 28.8 28.8 26 32.25 26h7.25V12.25a3.75 3.75 0 0 0-3.75-3.75ZM28.5 38.48l.08-.08 9.82-9.82.08-.08h-6.23a3.75 3.75 0 0 0-3.75 3.75v6.23Z"])));
const NoteEdit20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteEdit20Filled', "20", ["M3 14.18A3 3 0 0 0 6 17h2l.06-.35.37-1.5a3.2 3.2 0 0 1 .84-1.48l4.83-4.83a2.87 2.87 0 0 1 2.9-.7V5.81A3 3 0 0 0 14 3h-4v4.18a3 3 0 0 1-2.82 2.81L7 10H3v4.18Zm.46-5.83A2 2 0 0 0 3.1 9h4.06a2 2 0 0 0 1.83-1.85L9 7V3.1a2 2 0 0 0-.8.49L3.6 8.2l-.13.14Zm6.52 6.03 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"])));
const NoteEdit20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteEdit20Regular', "20", ["M3 14.18A3 3 0 0 0 6 17h2l.06-.35.16-.65H5.85A2 2 0 0 1 4 14v-4h3.18A3 3 0 0 0 10 7V4h4.15A2 2 0 0 1 16 6v2c.34-.01.68.03 1 .13V5.82A3 3 0 0 0 14 3H9.45a2 2 0 0 0-1.24.59L3.59 8.2l-.12.13A2 2 0 0 0 3 9.62v4.56ZM7 9H4.22a1 1 0 0 1 .07-.09L8.91 4.3 9 4.22V7.15A2 2 0 0 1 7 9Zm2.98 5.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"])));
const NoteEdit24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteEdit24Filled', "24", ["M3 17.75C3 19.55 4.46 21 6.25 21h4.92l.35-1.42c.16-.65.5-1.24.97-1.72l5.9-5.9a3.28 3.28 0 0 1 2.61-.95V6.25C21 4.45 19.54 3 17.75 3H11v4.75C11 9.55 9.54 11 7.75 11H3v6.75ZM9.5 3.44 3.44 9.5h4.31c.97 0 1.75-.78 1.75-1.75V3.44Zm9.6 9.23-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z"])));
const NoteEdit24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NoteEdit24Regular', "24", ["M3 17.75C3 19.55 4.46 21 6.25 21h4.92l.35-1.42.02-.08H6.25c-.97 0-1.75-.78-1.75-1.75V11h3.43A3.25 3.25 0 0 0 11 7.74V4.5h6.75c.97 0 1.75.78 1.75 1.75v4.98c.48-.19 1-.26 1.5-.22V6.25C21 4.45 19.54 3 17.75 3h-6.88c-.6 0-1.17.24-1.59.66L3.66 9.28c-.42.42-.66 1-.66 1.6v6.87ZM7.75 9.5H5.56L9.5 5.56V7.9c-.08.9-.83 1.61-1.75 1.61Zm11.35 3.17-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z"])));
const NotePin16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotePin16Filled', "16", ["m6.61 1.46 1.93 1.93a1.5 1.5 0 0 1-.4 2.4l-1.65.8a1 1 0 0 0-.51.58l-.38 1.1a1 1 0 0 1-1.65.38L3 7.71 1.7 9H1v-.7L2.3 7l-.96-.95a1 1 0 0 1 .39-1.65l1.1-.38a1 1 0 0 0 .57-.5l.8-1.66a1.5 1.5 0 0 1 2.41-.4ZM2 11.5V9.93l.95-.96.44.43c.94.95 2.56.58 3-.69l.44-1.28 1.9-.92a2.27 2.27 0 0 0 .6-3.65L8.47 2h3.03A2.5 2.5 0 0 1 14 4.5V8h-3.5A2.5 2.5 0 0 0 8 10.5V14H4.5A2.5 2.5 0 0 1 2 11.5Zm7 2.36c.35-.12.67-.32.94-.6l3.33-3.32c.27-.27.47-.59.59-.94H10.5C9.67 9 9 9.67 9 10.5v3.36Z"])));
const NotePin16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotePin16Regular', "16", ["m6.61 1.46 1.93 1.93a1.5 1.5 0 0 1-.4 2.4l-1.65.8a1 1 0 0 0-.51.58l-.38 1.1a1 1 0 0 1-1.65.38L3 7.71 1.7 9H1v-.7L2.3 7l-.96-.95a1 1 0 0 1 .39-1.65l1.1-.38a1 1 0 0 0 .57-.5l.8-1.66a1.5 1.5 0 0 1 2.41-.4ZM2 11.5V9.93l.95-.96.05.05v2.48c0 .83.67 1.5 1.5 1.5H8v-2.5A2.5 2.5 0 0 1 10.5 8H13V4.5c0-.83-.67-1.5-1.5-1.5H9.46l-.13-.14L8.47 2h3.03A2.5 2.5 0 0 1 14 4.5v3.67c0 .66-.26 1.3-.73 1.77l-3.33 3.33a2.5 2.5 0 0 1-1.77.73H4.5A2.5 2.5 0 0 1 2 11.5Zm7 1.25c.08-.05.16-.12.23-.19l3.33-3.33.2-.23H10.5C9.67 9 9 9.67 9 10.5v2.25Z"])));
const NotePin20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotePin20Filled', "20", ["M3 9.02v5.16A3 3 0 0 0 6 17h4v-4.18a3 3 0 0 1 2.82-2.81L13 10h4V5.82A3 3 0 0 0 14 3H9.46c.95 1.12.6 2.85-.74 3.51l-1.89.92-.44 1.28a1.82 1.82 0 0 1-3 .7L3 9Zm13.54 2.63a2 2 0 0 0 .36-.65h-4.06a2 2 0 0 0-1.83 1.85L11 13v3.9a2 2 0 0 0 .8-.49l4.61-4.62.13-.14Zm-8-8.26L6.6 1.46a1.5 1.5 0 0 0-2.4.4L3.4 3.51a1 1 0 0 1-.57.5l-1.1.39a1 1 0 0 0-.39 1.65L2.3 7 1 8.3V9h.7L3 7.7l.95.95a1 1 0 0 0 1.65-.38l.38-1.1a1 1 0 0 1 .5-.57l1.65-.8a1.5 1.5 0 0 0 .4-2.41Z"])));
const NotePin20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotePin20Regular', "20", ["M3 9.02v5.16A3 3 0 0 0 6 17h4.55a2 2 0 0 0 1.24-.59l4.62-4.62.12-.13a2 2 0 0 0 .47-1.28V5.82A3 3 0 0 0 14 3H9.46c.26.3.42.64.5 1h4.19A2 2 0 0 1 16 6v4h-3.18A3 3 0 0 0 10 13v3H5.85A2 2 0 0 1 4 14V9.81a1.82 1.82 0 0 1-.61-.4L3 9ZM13 11h2.78a1 1 0 0 1-.07.09l-4.62 4.62-.09.07V12.85A2 2 0 0 1 13 11ZM8.54 3.39 6.6 1.46a1.5 1.5 0 0 0-2.4.4L3.4 3.51a1 1 0 0 1-.57.5l-1.1.39a1 1 0 0 0-.39 1.65L2.3 7 1 8.3V9h.7L3 7.7l.95.95a1 1 0 0 0 1.65-.38l.38-1.1a1 1 0 0 1 .5-.57l1.65-.8a1.5 1.5 0 0 0 .4-2.41Z"])));
const Notebook16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notebook16Filled', "16", ["M3.75 1C2.78 1 2 1.78 2 2.75v10.5c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75V2.75C13 1.78 12.22 1 11.25 1h-7.5ZM4 3.75c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75h-5.5A.75.75 0 0 1 4 4.25v-.5ZM14 4h.63c.2 0 .37.17.37.38v1.25c0 .2-.17.37-.38.37H14V4Zm.63 3H14v2h.63c.2 0 .37-.17.37-.38V7.38c0-.21-.17-.38-.38-.38ZM14 10h.63c.2 0 .37.17.37.38v1.24c0 .21-.17.38-.38.38H14v-2Z"])));
const Notebook16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notebook16Regular', "16", ["M4.75 3a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75h5.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75h-5.5ZM5 5V4h5v1H5ZM2 2.75C2 1.78 2.78 1 3.75 1h7.5c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75h-7.5C2.78 15 2 14.22 2 13.25V2.75ZM3.75 2a.75.75 0 0 0-.75.75v10.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V2.75a.75.75 0 0 0-.75-.75h-7.5Zm10.88 2H14v2h.63c.2 0 .37-.17.37-.38V4.38c0-.2-.17-.37-.38-.37ZM14 7h.63c.2 0 .37.17.37.38v1.25c0 .2-.17.37-.38.37H14V7Zm.63 3H14v2h.63c.2 0 .37-.17.37-.38v-1.24c0-.21-.17-.38-.38-.38Z"])));
const Notebook20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notebook20Filled', "20", ["M5 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1ZM16 6h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Z"])));
const Notebook20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notebook20Regular', "20", ["M5.5 5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7ZM6 7V6h6v1H6ZM3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5Zm11 3h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Z"])));
const Notebook24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notebook24Filled', "24", ["M16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h10.5ZM20 15h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75H20Zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75H20Zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75H20Zm-5.25-1.5h-6.5c-.38 0-.7.28-.74.65v1.6c0 .38.27.7.64.74l.1.01h6.5c.38 0 .7-.28.75-.65v-1.6a.75.75 0 0 0-.75-.75Z"])));
const Notebook24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notebook24Regular', "24", ["M16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h10.5Zm0 1.5H6.25a.75.75 0 0 0-.75.75v15.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V4.25a.75.75 0 0 0-.75-.75ZM20 15h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75H20Zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75H20Zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75H20Zm-4.75-2c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7.5A.75.75 0 0 1 7 8.25v-2.5c0-.41.34-.75.75-.75h7.5Zm-.75 1.5h-6v1h6v-1Z"])));
const Notebook32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notebook32Filled', "32", ["M7.25 2A3.25 3.25 0 0 0 4 5.25v21.5C4 28.55 5.46 30 7.25 30h16.5c1.8 0 3.25-1.46 3.25-3.25V5.25C27 3.45 25.54 2 23.75 2H7.25ZM10 7h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm18 1h1.25c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75H28V8Zm1.25 6H28v4h1.25c.41 0 .75-.34.75-.75v-2.5a.75.75 0 0 0-.75-.75ZM28 20h1.25c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75H28v-4Z"])));
const Notebook32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notebook32Regular', "32", ["M8 7.5C8 6.67 8.67 6 9.5 6h12c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-12A1.5 1.5 0 0 1 8 10.5v-3Zm2 .5v2h11V8H10ZM4 5.25C4 3.45 5.46 2 7.25 2h16.5C25.55 2 27 3.46 27 5.25v21.5c0 1.8-1.46 3.25-3.25 3.25H7.25A3.25 3.25 0 0 1 4 26.75V5.25ZM7.25 4C6.56 4 6 4.56 6 5.25v21.5c0 .69.56 1.25 1.25 1.25h16.5c.69 0 1.25-.56 1.25-1.25V5.25C25 4.56 24.44 4 23.75 4H7.25Zm22 4H28v4h1.25c.41 0 .75-.34.75-.75v-2.5a.75.75 0 0 0-.75-.75ZM28 14h1.25c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75H28v-4Zm1.25 6H28v4h1.25c.41 0 .75-.34.75-.75v-2.5a.75.75 0 0 0-.75-.75Z"])));
const NotebookAdd20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookAdd20Filled', "20", ["M5 2a2 2 0 0 0-2 2v5.6A5.5 5.5 0 0 1 9.74 18H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 5 7V5Zm11 1h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Zm-6 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5Z"])));
const NotebookAdd20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookAdd20Regular', "20", ["M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.74c.26-.3.48-.64.66-1H13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5.2c-.35.1-.68.24-1 .4V4Zm2.5.5A.5.5 0 0 0 5 5v2c0 .28.22.5.5.5h7A.5.5 0 0 0 13 7V5a.5.5 0 0 0-.5-.5h-7Zm.5 2v-1h6v1H6ZM16.5 6H16v2.5h.5A.5.5 0 0 0 17 8V6.5a.5.5 0 0 0-.5-.5Zm0 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5Zm0 3.5H16v2.5h.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-11 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H6v1.5a.5.5 0 0 1-1 0V15H3.5a.5.5 0 0 1 0-1H5v-1.5c0-.28.22-.5.5-.5Z"])));
const NotebookAdd24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookAdd24Filled', "24", ["M16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56A6.5 6.5 0 0 0 4 11.5V4.25C4 3.01 5 2 6.25 2h10.5Zm-2 3.5h-6.5c-.38 0-.7.28-.74.65v1.6c0 .38.27.7.64.74l.1.01h6.5c.38 0 .7-.28.75-.65v-1.6a.75.75 0 0 0-.75-.75Z", "M20 15h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3Z", "M20 11h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3Z", "M20 7h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7Z", "M12 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM7 18v2.5a.5.5 0 1 1-1 0V18H3.5a.5.5 0 0 1 0-1H6v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H7Z"])));
const NotebookAdd24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookAdd24Regular', "24", ["M16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56c.43-.44.8-.95 1.08-1.5h4.48c.41 0 .75-.34.75-.75V4.25a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.75.75v6.83c-.52.08-1.03.22-1.5.42V4.25C4 3.01 5 2 6.25 2h10.5Z", "M20 15h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3Z", "M20 11h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3Z", "M20 7h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7Z", "M15.25 5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7.5A.75.75 0 0 1 7 8.25v-2.5c0-.41.34-.75.75-.75h7.5Zm-.75 1.5h-6v1h6v-1Z", "M12 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM7 18v2.5a.5.5 0 1 1-1 0V18H3.5a.5.5 0 0 1 0-1H6v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H7Z"])));
const NotebookArrowCurveDown20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookArrowCurveDown20Filled', "20", ["M1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm6.4.9-.9.9V5.74A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.97 0 1.75.78 1.75 1.75v1.54l-.9-.9a.5.5 0 0 0-.7.71l1.75 1.76a.5.5 0 0 0 .7 0L8.12 7.1a.5.5 0 1 0-.71-.7Zm3.6-.9a5.5 5.5 0 0 1-8 4.9V16c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.74A5.48 5.48 0 0 1 11 5.5Zm5 .5h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Z"])));
const NotebookArrowCurveDown20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookArrowCurveDown20Regular', "20", ["M1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm6.4.9-.9.9V5.74A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.97 0 1.75.78 1.75 1.75v1.54l-.9-.9a.5.5 0 0 0-.7.71l1.75 1.76a.5.5 0 0 0 .7 0L8.12 7.1a.5.5 0 1 0-.71-.7Zm-4.4 4c.31.16.65.3 1 .4V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2.6a5.5 5.5 0 0 0-.66-1H13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5.6ZM16 6h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Z"])));
const NotebookError20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookError20Filled', "20", ["M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.74A5.5 5.5 0 0 0 3 9.6V4Zm2.5 1a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7Zm11 1H16v2.5h.5A.5.5 0 0 0 17 8V6.5a.5.5 0 0 0-.5-.5ZM16 9.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm.5 3.5H16v2.5h.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-11 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM5 12.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm1.13 4a.62.62 0 1 1-1.25 0 .62.62 0 0 1 1.25 0Z"])));
const NotebookError20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookError20Regular', "20", ["M5 2a2 2 0 0 0-2 2v5.6c.32-.16.65-.3 1-.4V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2.6c-.18.36-.4.7-.66 1H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5v2c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5ZM6 6h6v1H6V6Zm10 0h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Zm-6 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"])));
const NotebookError24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookError24Filled', "24", ["M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56A6.5 6.5 0 0 0 4 11.5V4.25C4 3.01 5 2 6.25 2h10.5ZM6.5 19.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-5.88a.5.5 0 0 0-.5.41v4.18a.5.5 0 0 0 1 0v-4.18a.5.5 0 0 0-.5-.4Zm14.25 1c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75Zm-6-1.5h-6.5c-.38 0-.7.28-.75.65v1.6c0 .38.28.7.65.74l.1.01h6.5c.38 0 .7-.28.74-.65v-1.6a.75.75 0 0 0-.74-.75Z"])));
const NotebookError24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookError24Regular', "24", ["M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56c.43-.44.79-.95 1.08-1.5h4.48c.41 0 .75-.34.75-.75V4.25a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.75.75v6.83c-.52.08-1.03.22-1.5.42V4.25C4 3.01 5 2 6.25 2h10.5ZM6.5 19.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-5.88a.5.5 0 0 0-.5.41v4.18a.5.5 0 0 0 1 0v-4.18a.5.5 0 0 0-.5-.4Zm14.25 1c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75Zm-5.5-2c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7.5A.75.75 0 0 1 7 8.25v-2.5c0-.41.34-.75.75-.75h7.5Zm-.75 1.5h-6v1h6v-1Z"])));
const NotebookEye20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookEye20Filled', "20", ["M5 2a2 2 0 0 0-2 2v7.57a5.8 5.8 0 0 1 6.47 1c.88.82 1.53 1.94 1.53 2.93a3.3 3.3 0 0 1-.43 1.52c-.18.33-.41.66-.7.98H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1ZM16 6h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13ZM1 15.5C1 14.32 2.74 12 5.5 12s4.5 2.3 4.5 3.5c0 1.18-1.74 3.5-4.5 3.5S1 16.7 1 15.5Zm3.11 2.08a2.5 2.5 0 1 0 2.78-4.16 2.5 2.5 0 0 0-2.78 4.16Zm2.64-1.25a1.5 1.5 0 1 0-2.5-1.66 1.5 1.5 0 0 0 2.5 1.66Z"])));
const NotebookEye20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookEye20Regular', "20", ["M5.5 5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7ZM6 7V6h6v1H6ZM3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.88c.28-.32.5-.65.69-.98V17H13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7.2c-.35.1-.69.22-1 .37V4Zm13 2h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13ZM1 15.5C1 14.32 2.74 12 5.5 12s4.5 2.3 4.5 3.5c0 1.18-1.74 3.5-4.5 3.5S1 16.7 1 15.5Zm3.11 2.08a2.5 2.5 0 1 0 2.78-4.16 2.5 2.5 0 0 0-2.78 4.16Zm2.64-1.25a1.5 1.5 0 1 0-2.5-1.66 1.5 1.5 0 0 0 2.5 1.66Z"])));
const NotebookLightning20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookLightning20Filled', "20", ["M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.74A5.5 5.5 0 0 0 3 9.6V4Zm2.5 1a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7Zm11 1H16v2.5h.5A.5.5 0 0 0 17 8V6.5a.5.5 0 0 0-.5-.5ZM16 9.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm.5 3.5H16v2.5h.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-11 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.13-3.66h-.6c-.2 0-.32-.2-.25-.39l1.1-2.78c.04-.1.13-.17.24-.17h1.83c.18 0 .3.19.25.37l-.31.97c-.05.17.07.33.24.33h.23c.36 0 .54.46.27.72l-2.56 2.53c-.2.2-.5 0-.44-.27l.24-1a.25.25 0 0 0-.24-.31Z"])));
const NotebookLightning20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookLightning20Regular', "20", ["M5 2a2 2 0 0 0-2 2v5.6c.32-.16.65-.3 1-.4V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2.6c-.18.36-.4.7-.66 1H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2ZM6 6v1h6V6H6Zm10 0h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Zm-6 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.63.84c.16 0 .28.15.24.3l-.24 1.01c-.06.27.25.46.44.27l2.56-2.53c.27-.26.1-.72-.27-.72h-.23a.25.25 0 0 1-.24-.33l.3-.97C7 12.19 6.88 12 6.7 12H4.86c-.1 0-.2.07-.24.17l-1.1 2.78c-.07.19.06.39.24.39h.6Z"])));
const NotebookLightning24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookLightning24Filled', "24", ["M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56A6.5 6.5 0 0 0 4 11.5V4.25C4 3.01 5 2 6.25 2h10.5ZM7.5 14H6a.5.5 0 0 0-.47.34l-1 3A.5.5 0 0 0 5 18h.8l-.77 2.34c-.2.56.58.92.9.42l2.5-4A.5.5 0 0 0 8 16h-.45l.43-1.35A.5.5 0 0 0 7.5 14Zm13.25 1c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75Zm-6-1.5h-6.5c-.38 0-.69.28-.74.65v1.6c0 .38.28.7.64.74l.1.01h6.5c.38 0 .7-.28.74-.65l.01-.1v-1.5a.75.75 0 0 0-.75-.75Z"])));
const NotebookLightning24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookLightning24Regular', "24", ["M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56c.43-.44.79-.95 1.08-1.5h4.48c.41 0 .75-.34.75-.75V4.25a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.75.75v6.83c-.52.08-1.03.22-1.5.42V4.25C4 3.01 5 2 6.25 2h10.5ZM7.5 14H6a.5.5 0 0 0-.47.34l-1 3A.5.5 0 0 0 5 18h.8l-.77 2.34c-.2.56.58.92.9.42l2.5-4A.5.5 0 0 0 8 16h-.45l.43-1.35A.5.5 0 0 0 7.5 14Zm13.25 1c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75Zm-5.5-2c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7.5A.75.75 0 0 1 7 8.25v-2.5c0-.41.34-.75.75-.75h7.5Zm-.75 1.5h-6v1h6v-1Z"])));
const NotebookQuestionMark20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookQuestionMark20Filled', "20", ["M5 2a2 2 0 0 0-2 2v5.6A5.5 5.5 0 0 1 9.74 18H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1ZM16 6h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Zm-6 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95Z"])));
const NotebookQuestionMark20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookQuestionMark20Regular', "20", ["M5 2a2 2 0 0 0-2 2v5.6c.32-.16.65-.3 1-.4V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2.6c-.18.36-.4.7-.66 1H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5v2c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5ZM6 6h6v1H6V6Zm10 0h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Zm-6 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95Z"])));
const NotebookQuestionMark24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookQuestionMark24Filled', "24", ["M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56A6.5 6.5 0 0 0 4 11.5V4.25C4 3.01 5 2 6.25 2h10.5ZM6.5 19.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-5.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 0 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .23-.07.4-.31.68l-.1.11-.27.3c-.48.53-.67.89-.67 1.46a.5.5 0 0 0 1 0c0-.23.08-.4.32-.7l.1-.1.27-.3c.48-.53.66-.88.66-1.45 0-1.1-.82-1.95-1.85-1.95Zm14.25 1c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75Zm-6-1.5h-6.5c-.38 0-.7.28-.74.65v1.6c0 .38.27.7.64.74l.1.01h6.5c.38 0 .7-.28.74-.65v-1.6a.75.75 0 0 0-.74-.75Z"])));
const NotebookQuestionMark24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookQuestionMark24Regular', "24", ["M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56c.43-.44.79-.95 1.08-1.5h4.48c.41 0 .75-.34.75-.75V4.25a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.75.75v6.83c-.52.08-1.03.22-1.5.42V4.25C4 3.01 5 2 6.25 2h10.5ZM6.5 19.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-5.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 0 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .23-.07.4-.31.68l-.1.11-.27.3c-.48.53-.67.89-.67 1.46a.5.5 0 0 0 1 0c0-.23.08-.4.32-.7l.1-.1.27-.3c.48-.53.66-.88.66-1.45 0-1.1-.82-1.95-1.85-1.95Zm14.25 1c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75Zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75Zm-5.5-2c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7.5A.75.75 0 0 1 7 8.25v-2.5c0-.41.34-.75.75-.75h7.5Zm-.75 1.5h-6v1h6v-1Z"])));
const NotebookSection20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSection20Filled', "20", ["M14 2.5a.5.5 0 0 0-1 0V3H8a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h5v.5a.5.5 0 0 0 1 0v-15Z"])));
const NotebookSection20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSection20Regular', "20", ["M14 2.5a.5.5 0 0 0-1 0V3H8a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h5v.5a.5.5 0 0 0 1 0v-15ZM13 16H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v12Z"])));
const NotebookSection24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSection24Filled', "24", ["M15.65 2h.1c.38 0 .7.28.74.65l.01.1v18.5a.75.75 0 0 1-1.5.1V20H9.25C8.01 20 7 18.99 7 17.75V6.25C7 5.01 8 4 9.25 4H15V2.75c0-.38.28-.7.65-.74l.1-.01h-.1Z"])));
const NotebookSection24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSection24Regular', "24", ["M15.65 2h.1c.38 0 .7.28.74.65l.01.1v18.5a.75.75 0 0 1-1.5.1V20H9.25C8.01 20 7 18.99 7 17.75V6.25C7 5.01 8 4 9.25 4H15V2.75c0-.38.28-.7.65-.74l.1-.01h-.1ZM15 5.5H9.25a.75.75 0 0 0-.75.75v11.5c0 .41.34.75.75.75H15v-13Z"])));
const NotebookSectionArrowRight20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSectionArrowRight20Filled', "20", ["M14 2.5a.5.5 0 0 0-1 0V3H8a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1.6A5.5 5.5 0 0 1 14 9.02V2.5Zm.5 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"])));
const NotebookSectionArrowRight20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSectionArrowRight20Regular', "20", ["M14 2.5a.5.5 0 0 0-1 0V3H8a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h1.6c-.16-.32-.3-.65-.4-1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v5.2c.32-.08.66-.15 1-.18V2.5Zm.5 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"])));
const NotebookSectionArrowRight24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSectionArrowRight24Filled', "24", ["M15.65 2h.1c.38 0 .7.28.74.65l.01.1v8.33a6.5 6.5 0 0 0-5 8.92H9.25C8.01 20 7 18.99 7 17.75V6.25C7 5.01 8 4 9.25 4H15V2.75c0-.38.28-.7.65-.74Z", "M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-8.5-.5a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L19.29 17H14.5Z"])));
const NotebookSectionArrowRight24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSectionArrowRight24Regular', "24", ["M15.65 2h.1c.38 0 .7.28.74.65l.01.1v8.33c-.52.08-1.03.22-1.5.42v-6H9.25a.75.75 0 0 0-.75.75v11.5c0 .41.34.75.75.75h1.83c.08.52.22 1.02.42 1.5H9.25C8.01 20 7 18.99 7 17.75V6.25C7 5.01 8 4 9.25 4H15V2.75c0-.38.28-.7.65-.74Z", "M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-8.5-.5a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7L19.29 17H14.5Z"])));
const NotebookSubsection20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSubsection20Filled', "20", ["M4 5.5A3.5 3.5 0 0 1 7.5 2H10c.82 0 1.54.4 2 1H7.5A2.5 2.5 0 0 0 5 5.5V15a2.5 2.5 0 0 1-1-2V5.5ZM13.5 2h-.07c-.24.05-.43.3-.43.6V4H7.5C6.67 4 6 4.67 6 5.5v10c0 .83.67 1.5 1.5 1.5H13V17.48c.04.3.25.52.5.52.28 0 .5-.27.5-.6V2.52c-.04-.3-.25-.52-.5-.52Z"])));
const NotebookSubsection20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSubsection20Regular', "20", ["M4 5.5A3.5 3.5 0 0 1 7.5 2H10c.82 0 1.54.4 2 1H7.5A2.5 2.5 0 0 0 5 5.5V15a2.5 2.5 0 0 1-1-2V5.5ZM13.43 2h.07c.25 0 .46.23.5.52V17.4c0 .33-.22.6-.5.6-.25 0-.46-.23-.5-.52V17H8a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h5V2.6c0-.3.19-.55.43-.6ZM8 5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5V5H8Z"])));
const NotebookSubsection24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSubsection24Filled', "24", ["M9 2a4.5 4.5 0 0 0-4.5 4.5v9.4c0 .98.63 1.81 1.5 2.12V6.5a3 3 0 0 1 3-3h5A2.25 2.25 0 0 0 11.88 2H9Z", "M7 6.75C7 5.51 8 4.5 9.25 4.5H15V2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-1.5 0V20H9.25C8.01 20 7 19 7 17.75v-11Z"])));
const NotebookSubsection24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSubsection24Regular', "24", ["M9 2a4.5 4.5 0 0 0-4.5 4.5v9.4c0 .98.63 1.81 1.5 2.12V6.5a3 3 0 0 1 3-3h5A2.25 2.25 0 0 0 11.88 2H9Z", "M7 6.75C7 5.51 8 4.5 9.25 4.5H15V2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-1.5 0V20H9.25C8.01 20 7 19 7 17.75v-11Zm8 11.75V6H9.25a.75.75 0 0 0-.75.75v11c0 .41.34.75.75.75H15Z"])));
const NotebookSync20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSync20Filled', "20", ["M5 2a2 2 0 0 0-2 2v5.6A5.5 5.5 0 0 1 9.74 18H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 5 7V5Zm11 1h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.47a1.99 1.99 0 0 0-2.38.34.5.5 0 0 1-.71-.71A3 3 0 0 1 7 12.15V12c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 4 16.85V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.47a1.99 1.99 0 0 0 2.38-.34.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z"])));
const NotebookSync20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSync20Regular', "20", ["M5.5 4.5A.5.5 0 0 0 5 5v2c0 .28.22.5.5.5h7A.5.5 0 0 0 13 7V5a.5.5 0 0 0-.5-.5h-7Zm.5 2v-1h6v1H6ZM3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.74c.26-.3.48-.64.66-1H13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5.2c-.35.1-.68.24-1 .4V4Zm13 2h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h.47a1.99 1.99 0 0 0-2.38.34.5.5 0 0 1-.71-.71A3 3 0 0 1 7 12.15V12c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 4 16.85V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.47a1.99 1.99 0 0 0 2.38-.34.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z"])));
const NotebookSync24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSync24Filled', "24", ["M16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56A6.5 6.5 0 0 0 4 11.5V4.25C4 3.01 5 2 6.25 2h10.5Zm-2 3.5h-6.5c-.38 0-.7.28-.74.65v1.6c0 .38.27.7.64.74l.1.01h6.5c.38 0 .7-.28.75-.65v-1.6a.75.75 0 0 0-.75-.75ZM20 15h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3Zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3Zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7ZM1 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0ZM9.5 14c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-4.03.04.5.5 0 1 1-.8-.59 3.5 3.5 0 0 1 5.33-.4v-.55c0-.28.22-.5.5-.5ZM4 19.95v.55a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-1a2.5 2.5 0 0 0 3.91.11.5.5 0 0 1 .77.65 3.5 3.5 0 0 1-5.18.19Z"])));
const NotebookSync24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotebookSync24Regular', "24", ["M16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56c.43-.44.8-.95 1.08-1.5h4.48c.41 0 .75-.34.75-.75V4.25a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.75.75v6.83c-.52.08-1.03.22-1.5.42V4.25C4 3.01 5 2 6.25 2h10.5ZM20 15h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3Zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3Zm0-4h.75c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7Zm-4.75-2c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7.5A.75.75 0 0 1 7 8.25v-2.5c0-.41.34-.75.75-.75h7.5Zm-.75 1.5h-6v1h6v-1ZM1 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0ZM9.5 14c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-4.03.04.5.5 0 1 1-.8-.59 3.5 3.5 0 0 1 5.33-.4v-.55c0-.28.22-.5.5-.5ZM4 19.95v.55a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-1a2.5 2.5 0 0 0 3.91.11.5.5 0 0 1 .77.65 3.5 3.5 0 0 1-5.18.19Z"])));
const Notepad12Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad12Filled', "12", ["M4 1.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2a2 2 0 0 1 2 2v3H7.5C6.67 7 6 7.67 6 8.5V11H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2v-.5Zm0 3c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm0 2c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5ZM4.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM7 8.5c0-.28.22-.5.5-.5H10l-3 3V8.5Z"])));
const Notepad12Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad12Regular', "12", ["M4 4.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM4.5 7a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3ZM4 8.5c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5Zm0-7a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2a2 2 0 0 1 2 2v4l-3 3H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2v-.5ZM7 10V8.5c0-.28.22-.5.5-.5H9V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3Z"])));
const Notepad16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad16Filled', "16", ["M5 1c.28 0 .5.22.5.5V2h2v-.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2c.83 0 1.5.67 1.5 1.5V10H9.5c-.83 0-1.5.67-1.5 1.5V15H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2v-.5c0-.28.22-.5.5-.5Zm.5 4.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5Zm0 3c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5Zm0 3c0 .28.22.5.5.5h.5a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM9 14.69l.15-.13 3.41-3.41.13-.15H9.5a.5.5 0 0 0-.5.5v3.19Z"])));
const Notepad16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad16Regular', "16", ["M6 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6Zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6Zm0 3a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1H6ZM5 1c.28 0 .5.22.5.5V2h2v-.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2c.83 0 1.5.67 1.5 1.5v6.59c0 .4-.16.78-.44 1.06l-3.41 3.41a1.5 1.5 0 0 1-1.06.44H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2v-.5c0-.28.22-.5.5-.5Zm6.5 2h-7a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5H8v-2.5c0-.83.67-1.5 1.5-1.5H12V3.5a.5.5 0 0 0-.5-.5ZM9 13.3l2.3-2.3H9.5a.5.5 0 0 0-.5.5v1.8Z"])));
const Notepad20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad20Filled', "20", ["M7 2.5a.5.5 0 0 0-1 0V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5H11v-3.5c0-.83.67-1.5 1.5-1.5H16V4.5c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5Zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM7 13.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm8.69.5H12.5a.5.5 0 0 0-.5.5v3.19l.15-.13 3.41-3.41.13-.15Z"])));
const Notepad20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad20Regular', "20", ["M7.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1-11a.5.5 0 0 0-.5.5V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h6a.5.5 0 0 0 .35-.15l4-4a.5.5 0 0 0 .15-.35v-9c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5a.5.5 0 0 0-.5-.5Zm8 2c.28 0 .5.22.5.5V13h-2.5c-.83 0-1.5.67-1.5 1.5V17H5.5a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5h9Zm-.2 10L12 16.3v-1.8c0-.28.22-.5.5-.5h1.8Z"])));
const Notepad24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad24Filled', "24", ["M16.25 2c.38 0 .7.28.74.65l.01.1v.75h.75c1.24 0 2.25 1 2.25 2.25V16h-3.91A2.25 2.25 0 0 0 14 18.1V22H5.75c-1.24 0-2.25-1-2.25-2.25v-14c0-1.24 1-2.25 2.25-2.25h.75v-.75a.75.75 0 0 1 1.5-.1v.85h3v-.75a.75.75 0 0 1 1.5-.1v.85h3v-.75c0-.41.34-.75.75-.75Zm3.3 15.5-4.06 4.07v-3.32l.01-.1c.05-.33.31-.6.64-.64l.1-.01h3.32Zm-8.3-1.5h-4.1a.75.75 0 0 0 0 1.5H11.35a.75.75 0 0 0 0-1.5h-.1Zm5-4h-9.1a.75.75 0 0 0 0 1.5h9.2a.75.75 0 0 0 0-1.5h-.1Zm0-4h-9.1a.75.75 0 0 0 0 1.5h9.2a.75.75 0 0 0 0-1.5h-.1Z"])));
const Notepad24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad24Regular', "24", ["M5.75 22c-1.24 0-2.25-1-2.25-2.25v-14c0-1.24 1-2.25 2.25-2.25h.75v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65l.01.1v.75h3v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.75.65v.85h3v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65l.01.1v.75h.75c1.24 0 2.25 1 2.25 2.25v11c0 .06 0 .12-.02.18l-.03.09-.04.1-.03.03a.69.69 0 0 1-.1.13l-4.5 4.5a.74.74 0 0 1-.09.08l.09-.08a.74.74 0 0 1-.1.1l-.1.04-.11.05-.12.03h-9.1Zm12-17h-12c-.42 0-.75.34-.75.75v14c0 .42.34.75.75.75H14v-2.25c0-1.2.93-2.17 2.1-2.24l.16-.01h2.25V5.75a.75.75 0 0 0-.75-.75Zm-.31 12.5h-1.2c-.37 0-.69.28-.74.65v1.3l1.94-1.95ZM7.25 16h4a.75.75 0 0 1 .1 1.5h-4.1a.75.75 0 0 1-.1-1.5h4.1-4Zm0-4h9a.75.75 0 0 1 .1 1.5h-9.1a.75.75 0 0 1-.1-1.5h9.1-9Zm0-4h9a.75.75 0 0 1 .1 1.5h-9.1a.75.75 0 0 1-.1-1.5h9.1-9Z"])));
const Notepad28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad28Filled', "28", ["M14 2c.41 0 .75.34.75.75V4h3.75V2.75a.75.75 0 0 1 1.5 0V4h.75C21.99 4 23 5 23 6.25V18.5h-4.75c-1.25 0-2.25 1-2.25 2.25v4.75H6.75c-1.24 0-2.25-1-2.25-2.25v-17C4.5 5.01 5.5 4 6.75 4H8V2.75a.75.75 0 0 1 1.5 0V4h3.75V2.75c0-.41.34-.75.75-.75Zm-6 8.25c0 .41.34.75.75.75h10a.75.75 0 0 0 0-1.5h-10a.75.75 0 0 0-.75.75Zm0 4.5c0 .41.34.75.75.75h10a.75.75 0 0 0 0-1.5h-10a.75.75 0 0 0-.75.75Zm0 4.5c0 .41.34.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75Zm9.5 5.81L22.56 20h-4.31a.75.75 0 0 0-.75.75v4.31Z"])));
const Notepad28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad28Regular', "28", ["M8 10.25c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75Zm0 4.5c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75Zm.75 3.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM14 2c.41 0 .75.34.75.75V4h3.75V2.75a.75.75 0 0 1 1.5 0V4h.75C21.99 4 23 5 23 6.25v13c0 .2-.08.39-.22.53l-5.5 5.5a.75.75 0 0 1-.53.22h-10c-1.24 0-2.25-1-2.25-2.25v-17C4.5 5.01 5.5 4 6.75 4H8V2.75a.75.75 0 0 1 1.5 0V4h3.75V2.75c0-.41.34-.75.75-.75ZM6 6.25v17c0 .41.34.75.75.75H16v-3.25c0-1.25 1-2.25 2.25-2.25h3.25V6.25a.75.75 0 0 0-.75-.75h-14a.75.75 0 0 0-.75.75ZM18.25 20a.75.75 0 0 0-.75.75v2.19L20.44 20h-2.2Z"])));
const Notepad32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad32Filled', "32", ["M12 4a1 1 0 1 0-2 0v1H9a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h8.5v-5.5A2.5 2.5 0 0 1 20 21h6V8a3 3 0 0 0-3-3h-1V4a1 1 0 1 0-2 0v1h-3V4a1 1 0 1 0-2 0v1h-3V4Zm0 7h8a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2Zm-1 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm1 4h3a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2Zm8.25 7.21a3 3 0 0 1-.75.5V23.5c0-.28.22-.5.5-.5h5.66a3 3 0 0 1-.63.83l-4.78 4.38Z"])));
const Notepad32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Notepad32Regular', "32", ["M11 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm-1 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm1-18a1 1 0 1 0-2 0v1H9a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h9.22a3 3 0 0 0 2.03-.79l4.78-4.38a3 3 0 0 0 .97-2.21V8a3 3 0 0 0-3-3h-1V4a1 1 0 1 0-2 0v1h-3V4a1 1 0 1 0-2 0v1h-3V4ZM9 7h14a1 1 0 0 1 1 1v13h-4a2.5 2.5 0 0 0-2.5 2.5V27H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm10.5 19.19V23.5c0-.28.22-.5.5-.5h2.97l-3.47 3.19Z"])));
const NotepadEdit16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotepadEdit16Filled', "16", ["M5 1c.28 0 .5.22.5.5V2h2v-.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2c.83 0 1.5.67 1.5 1.5v2.54c-.5.08-.98.32-1.37.7L10.3 8.1A.5.5 0 0 0 10 8H6a.5.5 0 0 0 0 1h3.38l-2.04 2.04c-.12.12-.24.25-.34.4a.5.5 0 0 0-.5-.44H6a.5.5 0 0 0 0 1h.5c.05 0 .1 0 .16-.03-.14.26-.24.54-.31.82L6.05 14c-.1.36-.06.7.07 1H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2v-.5c0-.28.22-.5.5-.5Zm.5 4.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5Zm6.84 1.96a1.56 1.56 0 0 1 2.2 2.2l-4.28 4.29c-.36.36-.8.6-1.3.73l-1.2.3a.6.6 0 0 1-.74-.74l.3-1.2c.12-.5.37-.94.73-1.3l4.29-4.28Z"])));
const NotepadEdit16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotepadEdit16Regular', "16", ["M5 1c.28 0 .5.22.5.5V2h2v-.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2c.83 0 1.5.67 1.5 1.5v2.54c-.35.06-.7.2-1 .4V3.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h1.55c-.1.36-.06.7.07 1H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2v-.5c0-.28.22-.5.5-.5Zm5 7c.1 0 .2.03.29.1l-.91.9H6a.5.5 0 0 1 0-1h4Zm-3 3.44a.5.5 0 0 0-.5-.44H6a.5.5 0 0 0 0 1h.5c.05 0 .1 0 .16-.03.1-.18.2-.36.34-.53ZM6 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6Zm6.34 2.46a1.56 1.56 0 0 1 2.2 2.2l-4.28 4.29c-.36.36-.8.6-1.3.73l-1.2.3a.6.6 0 0 1-.74-.74l.3-1.2c.12-.5.37-.94.73-1.3l4.29-4.28Z"])));
const NotepadEdit20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotepadEdit20Filled', "20", ["m15.8 10.55-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64ZM7 2.5a.5.5 0 0 0-1 0V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5H9l.06-.35.37-1.5a3.2 3.2 0 0 1 .84-1.48l4.83-4.83c.27-.27.57-.47.9-.6V4.5c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5ZM7.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Zm5.5 3.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.22.5.5ZM7.5 13h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z"])));
const NotepadEdit20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotepadEdit20Regular', "20", ["M7 7.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 13.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-1-11a.5.5 0 0 1 1 0V3h2.5v-.5a.5.5 0 0 1 1 0V3H13v-.5a.5.5 0 0 1 1 0V3h.5c.83 0 1.5.67 1.5 1.5v4.73c-.33.14-.63.34-.9.61l-.1.1V4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h3.72l-.16.65L9 18H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3H6v-.5Zm9.8 8.05-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z"])));
const NotepadPerson16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotepadPerson16Filled', "16", ["M5 1c.28 0 .5.22.5.5V2h2v-.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2c.83 0 1.5.67 1.5 1.5v1.9a2.99 2.99 0 0 0-2.6-.2.5.5 0 0 0-.4-.2H6a.5.5 0 0 0 0 1h3.26a2.99 2.99 0 0 0-.76 2H6a.5.5 0 0 0 0 1h2.67a3 3 0 0 0 .6 1.02 1.5 1.5 0 0 0-.38.1A2.3 2.3 0 0 0 7 12.39c0 .93.38 1.8 1 2.42v.2H4.5A1.5 1.5 0 0 1 3 13.5v-10C3 2.67 3.67 2 4.5 2v-.5c0-.28.22-.5.5-.5Zm.5 10.5c0 .28.22.5.5.5h.5a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5Zm3.83-.41H9.2A1.3 1.3 0 0 0 8 12.38a2.48 2.48 0 0 0 1.21 2.12c.23.13.48.24.75.3l.08.03a6.2 6.2 0 0 0 2.92 0l.08-.02A2.52 2.52 0 0 0 15 12.38c0-.72-.6-1.3-1.33-1.3H9.33ZM11.5 6a2 2 0 1 1 0 4 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"])));
const NotepadPerson16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotepadPerson16Regular', "16", ["M5.5 5.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 .4.2 3 3 0 0 0-1.14.8H6a.5.5 0 0 1-.5-.5Zm3 2.5H6a.5.5 0 0 0 0 1h2.67a3 3 0 0 1-.17-1Zm-1.1 6H4.5a.5.5 0 0 1-.5-.5v-10c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1.54c.36.06.7.19 1 .36V3.5c0-.83-.67-1.5-1.5-1.5v-.5a.5.5 0 0 0-1 0V2h-2v-.5a.5.5 0 0 0-1 0V2h-2v-.5a.5.5 0 0 0-1 0V2C3.67 2 3 2.67 3 3.5v10c0 .83.67 1.5 1.5 1.5H8.2c-.32-.29-.59-.62-.8-1Zm1.81.5A2.49 2.49 0 0 1 8 12.38a1.3 1.3 0 0 1 1.33-1.3h4.34c.74 0 1.33.58 1.33 1.3 0 1.14-.8 2.15-1.96 2.43l-.08.02a6.2 6.2 0 0 1-2.92 0l-.08-.02a2.63 2.63 0 0 1-.75-.31ZM13 9.32A2 2 0 0 1 9.5 8 2 2 0 1 1 13 9.32ZM5.5 11.5c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5Z"])));
const NotepadPerson20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotepadPerson20Filled', "20", ["M7 2.5a.5.5 0 0 0-1 0V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h5.87a3.21 3.21 0 0 1-.37-1.5c0-1.3 1-2.38 2.27-2.49A2.99 2.99 0 0 1 15.5 9c.17 0 .34.01.5.04V4.5c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5Zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 6c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0-3c0-.28.22-.5.5-.5H11a.5.5 0 0 1 0 1H7.5a.5.5 0 0 1-.5-.5ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z"])));
const NotepadPerson20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotepadPerson20Regular', "20", ["M7.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1-11a.5.5 0 0 0-.5.5V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h5.87a3.18 3.18 0 0 1-.33-1H5.5a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v4.54a3.02 3.02 0 0 1 1 0V4.5c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5a.5.5 0 0 0-.5-.5Zm9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5c2.5 0 3.5-1.25 3.5-2.5 0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5 0 1.25 1 2.5 3.5 2.5Zm-8-9a.5.5 0 0 0 0 1H11a.5.5 0 0 0 0-1H7.5Z"])));
const NotepadPerson24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotepadPerson24Filled', "24", ["M16.25 2c.38 0 .7.28.74.65l.01.1v.75h.75c1.24 0 2.25 1 2.25 2.25v5.59A3.5 3.5 0 0 0 16.05 17h-.28A2.77 2.77 0 0 0 13 19.77v.1c0 .75.21 1.49.67 2.13H5.75c-1.24 0-2.25-1-2.25-2.25v-14c0-1.24 1-2.25 2.25-2.25h.75v-.75a.75.75 0 0 1 1.5-.1v.85h3v-.75a.75.75 0 0 1 1.5-.1v.85h3v-.75c0-.41.34-.75.75-.75Zm-5 14h-4.1a.75.75 0 0 0 0 1.5H11.35a.75.75 0 0 0 0-1.5h-.1Zm5-8h-9.1a.75.75 0 0 0 0 1.5h9.2a.75.75 0 0 0 0-1.5h-.1ZM6.5 12.75c0 .41.34.75.75.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0-.75.75ZM21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 5.38c0 1.55-1.29 3.12-4.5 3.12S14 21.44 14 19.87v-.1c0-.98.8-1.77 1.77-1.77h5.46c.98 0 1.77.8 1.77 1.77v.1Z"])));
const NotepadPerson24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NotepadPerson24Regular', "24", ["M5.75 22c-1.24 0-2.25-1-2.25-2.25v-14c0-1.24 1-2.25 2.25-2.25h.75v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65l.01.1v.75h3v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65l.01.1v.75h3v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65l.01.1v.75h.75c1.24 0 2.25 1 2.25 2.25v5.59a3.49 3.49 0 0 0-1.5-.34V5.75a.75.75 0 0 0-.75-.75h-12c-.42 0-.75.34-.75.75v14c0 .42.34.75.75.75h7.3c.1.53.3 1.04.62 1.5H5.75Zm1.5-6h4a.75.75 0 0 1 .1 1.5h-4.1a.75.75 0 0 1-.1-1.5h.1Zm0-8h9a.75.75 0 0 1 .1 1.5h-9.1a.75.75 0 0 1-.1-1.5h.1Zm11.25 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 6c3.21 0 4.5-1.57 4.5-3.13v-.1c0-.98-.8-1.77-1.77-1.77h-5.46c-.98 0-1.77.8-1.77 1.77v.1c0 1.57 1.29 3.13 4.5 3.13ZM7.25 12a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"])));
const NumberCircle116Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberCircle116Filled', "16", ["M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm1-8.5v5a.5.5 0 1 1-1 0V7.41c-.19.15-.39.29-.58.41l-.14.1a.5.5 0 1 1-.56-.84l.16-.1c.31-.2.51-.34.68-.53.18-.2.34-.48.45-1.05a.5.5 0 0 1 .99.1Z"])));
const NumberCircle116Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberCircle116Regular', "16", ["M9 5.5a.5.5 0 0 0-.99-.1 2.1 2.1 0 0 1-.45 1.05c-.17.19-.37.32-.68.53l-.16.1a.5.5 0 0 0 .56.84l.14-.1c.2-.12.4-.26.58-.41v3.09a.5.5 0 1 0 1 0v-5ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Z"])));
const NumberCircle120Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberCircle120Filled', "20", ["M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-11.5v7a.5.5 0 0 1-1 0V8.48c-.38.48-.82.92-1.22 1.19a.5.5 0 1 1-.56-.84c.32-.2.71-.6 1.07-1.07.35-.47.62-.97.73-1.38a.5.5 0 0 1 .98.12Z"])));
const NumberCircle120Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberCircle120Regular', "20", ["M11 6.5a.5.5 0 0 0-.98-.12c-.1.4-.38.91-.73 1.38-.36.47-.75.86-1.07 1.07a.5.5 0 0 0 .56.84c.4-.27.84-.7 1.22-1.2v5.03a.5.5 0 1 0 1 0v-7ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"])));
const NumberCircle124Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberCircle124Filled', "24", ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm1.5-14.75v9a.75.75 0 0 1-1.5 0V10.1a4.99 4.99 0 0 1-2.01 1.36.75.75 0 0 1-.48-1.42c.57-.2 1.15-.64 1.63-1.23.47-.59.78-1.23.87-1.7a.75.75 0 0 1 1.49.14Z"])));
const NumberCircle124Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberCircle124Regular', "24", ["M13.5 7.25a.75.75 0 0 0-1.49-.15c-.1.48-.4 1.12-.87 1.7a3.75 3.75 0 0 1-1.63 1.24.75.75 0 0 0 .48 1.42A4.99 4.99 0 0 0 12 10.1v6.15a.75.75 0 0 0 1.5 0v-9ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"])));
const NumberRow16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberRow16Filled', "16", ["M1 4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4Zm3 1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5A.5.5 0 0 0 4 5Zm5-1c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V4Zm2 1.5c0 .28.22.5.5.5h.5v1.5h-.5a.5.5 0 0 0-.5.5v2.5c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1H12V8.5h.5A.5.5 0 0 0 13 8V5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Z"])));
const NumberRow16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberRow16Regular', "16", ["M4 5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3ZM2 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Zm9.5 1a.5.5 0 0 0 0 1h.5v1.5h-.5a.5.5 0 0 0-.5.5v2.5c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1H12V8.5h.5A.5.5 0 0 0 13 8V5.5a.5.5 0 0 0-.5-.5h-1ZM11 2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2Zm-1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4Z"])));
const NumberRow20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberRow20Filled', "20", ["M4 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm1 3.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM13 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Zm.5 3h2c.28 0 .5.22.5.5V10a.5.5 0 0 1-.5.5H14V13h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5V10c0-.28.22-.5.5-.5H15V7h-1.5a.5.5 0 0 1 0-1Z"])));
const NumberRow20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberRow20Regular', "20", ["M5 6.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM4 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4ZM3 5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Zm10.5 1a.5.5 0 0 0 0 1H15v2.5h-1.5a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1H14v-2.5h1.5a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5h-2ZM13 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Zm-1 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V5Z"])));
const NumberRow24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberRow24Filled', "24", ["M4.75 4h4a2.75 2.75 0 0 1 2.75 2.75v10.5A2.75 2.75 0 0 1 8.75 20h-4A2.75 2.75 0 0 1 2 17.25V6.75A2.75 2.75 0 0 1 4.75 4ZM6 9v6a.75.75 0 0 0 1.5 0V9A.75.75 0 0 0 6 9Zm9.25-5h4A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20h-4a2.75 2.75 0 0 1-2.75-2.75V6.75A2.75 2.75 0 0 1 15.25 4Zm2.25 5.75v1.5h-1.25a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h2a.75.75 0 0 0 0-1.5H17v-1.5h1.25c.41 0 .75-.34.75-.75V9a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0 0 1.5h1.25Z"])));
const NumberRow24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberRow24Regular', "24", ["M8.75 4a2.75 2.75 0 0 1 2.75 2.75v10.5A2.75 2.75 0 0 1 8.75 20h-4A2.75 2.75 0 0 1 2 17.25V6.75A2.75 2.75 0 0 1 4.75 4h4Zm0 1.5h-4c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25ZM19.25 4A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20h-4a2.75 2.75 0 0 1-2.75-2.75V6.75A2.75 2.75 0 0 1 15.25 4h4Zm0 1.5h-4c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25ZM6 9v6a.75.75 0 0 0 1.5 0V9A.75.75 0 0 0 6 9Zm11.5.75v1.5h-1.25a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h2a.75.75 0 0 0 0-1.5H17v-1.5h1.25c.41 0 .75-.34.75-.75V9a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0 0 1.5h1.25Z"])));
const NumberSymbol16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol16Filled', "16", ["M12 2.85a.75.75 0 0 0-1.5-.2L10.18 5H6.7l.3-2.14a.75.75 0 1 0-1.48-.22L5.17 5H3.75a.75.75 0 0 0 0 1.5h1.2l-.42 3H2.75a.75.75 0 1 0 0 1.5h1.56l-.3 2.14a.75.75 0 1 0 1.48.22L5.83 11h3.49L9 13.14a.75.75 0 1 0 1.48.22l.34-2.36h1.42a.75.75 0 0 0 0-1.5h-1.2l.42-3h1.78a.75.75 0 0 0 0-1.5h-1.56l.3-2.15ZM9.95 6.5l-.43 3H6.04l.43-3h3.49Z"])));
const NumberSymbol16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol16Regular', "16", ["M7 2.6a.5.5 0 1 0-1-.19L5.55 5H3.5a.5.5 0 0 0 0 1h1.86l-.73 4H2.5a.5.5 0 0 0 0 1h1.95L4 13.41a.5.5 0 0 0 .98.18L5.46 11h3.98l-.43 2.4a.5.5 0 0 0 .98.19l.47-2.59h2.04a.5.5 0 0 0 0-1h-1.86l.73-4h2.13a.5.5 0 1 0 0-1h-1.95L12 2.6a.5.5 0 1 0-.98-.19l-.47 2.6H6.55L7 2.58ZM6.36 6h3.99l-.73 4H5.64l.73-4Z"])));
const NumberSymbol20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol20Filled', "20", ["M8.99 2.88a.75.75 0 0 0-1.48-.26L6.84 6.5H3.75a.75.75 0 0 0 0 1.5h2.83l-.68 4H2.75a.75.75 0 0 0 0 1.5h2.89L5 17.12a.75.75 0 1 0 1.48.26l.67-3.88h4.48L11 17.12a.75.75 0 1 0 1.48.26l.67-3.88h3.1a.75.75 0 0 0 0-1.5h-2.84l.69-4h3.14a.75.75 0 1 0 0-1.5h-2.88l.62-3.62a.75.75 0 0 0-1.48-.26l-.67 3.88H8.37l.62-3.62ZM8.1 8h4.47l-.68 4H7.42l.69-4Z"])));
const NumberSymbol20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol20Regular', "20", ["M8.99 2.6a.5.5 0 0 0-.98-.2L7.09 7H3.5a.5.5 0 1 0 0 1h3.39l-.8 4H2.5a.5.5 0 0 0 0 1h3.4L5 17.4a.5.5 0 1 0 .98.2l.92-4.6h5l-.9 4.4a.5.5 0 0 0 .98.2l.95-4.6h3.56a.5.5 0 0 0 0-1h-3.36l.82-4h3.54a.5.5 0 1 0 0-1h-3.33l.9-4.39a.5.5 0 1 0-.98-.2l-.95 4.6H8.11l.88-4.41ZM7.91 8h5.03l-.82 4h-5l.79-4Z"])));
const NumberSymbol24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol24Filled', "24", ["M10.98 3.16a1 1 0 0 0-1.97-.32L8.15 8H4a1 1 0 1 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82L6 20.84a1 1 0 1 0 1.97.32L8.84 16h4.98l-.8 4.84a1 1 0 1 0 1.97.32l.86-5.17H20a1 1 0 0 0 0-2h-3.82l.67-4H21a1 1 0 0 0 0-2h-3.82l.8-4.83a1 1 0 1 0-1.97-.32l-.86 5.15h-4.97l.8-4.83ZM9.85 10h4.97l-.67 4H9.18l.67-4Z"])));
const NumberSymbol24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol24Regular', "24", ["M10.99 2.89a.75.75 0 1 0-1.48-.28L8.5 8H3.75a.75.75 0 1 0 0 1.5h4.46l-.95 5H2.75a.75.75 0 0 0 0 1.5h4.23l-.97 5.11a.75.75 0 1 0 1.48.28L8.5 16h5.47l-.97 5.12a.75.75 0 1 0 1.48.28L15.5 16h4.74a.75.75 0 1 0 0-1.5h-4.46l.95-5h4.51a.75.75 0 1 0 0-1.5h-4.23L18 2.9a.75.75 0 0 0-1.48-.28L15.5 8h-5.47L11 2.9Zm-1.25 6.6h5.47l-.94 5H8.79l.95-5Z"])));
const NumberSymbol28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol28Filled', "28", ["M12.98 3.2a1 1 0 1 0-1.96-.4L9.75 9H4a1 1 0 1 0 0 2h5.34l-1.22 6H3a1 1 0 1 0 0 2h4.7l-1.18 5.8a1 1 0 1 0 1.96.4L9.75 19h5.96l-1.19 5.8a1 1 0 1 0 1.96.4l1.27-6.2H23a1 1 0 1 0 0-2h-4.84l1.22-6H24a1 1 0 1 0 0-2h-4.2l1.18-5.8a1 1 0 1 0-1.96-.4L17.75 9H11.8l1.19-5.8ZM16.12 17h-5.96l1.22-6h5.96l-1.22 6Z"])));
const NumberSymbol28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol28Regular', "28", ["M12.98 3.4a.75.75 0 1 0-1.46-.3L10.28 9H3.75a.75.75 0 0 0 0 1.5h6.22L8.6 17H2.75a.75.75 0 1 0 0 1.5h5.54l-1.27 6.1a.75.75 0 1 0 1.46.3l1.34-6.4h6.47l-1.27 6.1a.75.75 0 0 0 1.46.3l1.34-6.4h6.43a.75.75 0 0 0 0-1.5h-6.11l1.36-6.5h5.75a.75.75 0 0 0 0-1.5h-5.44l1.17-5.6a.75.75 0 1 0-1.46-.3L18.28 9h-6.47l1.17-5.6ZM16.61 17h-6.47l1.36-6.5h6.47L16.6 17Z"])));
const NumberSymbol32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol32Filled', "32", ["M14.97 3.5a1.25 1.25 0 0 0-2.44-.5L11.2 9.5H5.25a1.25 1.25 0 1 0 0 2.5h5.44l-1.43 7H4.25a1.25 1.25 0 0 0 0 2.5h4.5l-1.22 6a1.25 1.25 0 1 0 2.44.5l1.33-6.5h6.95l-1.22 6a1.25 1.25 0 1 0 2.45.5l1.32-6.5h5.95a1.25 1.25 0 1 0 0-2.5h-5.44l1.43-7h5.01a1.25 1.25 0 1 0 0-2.5h-4.5l1.23-6a1.25 1.25 0 0 0-2.45-.5L20.7 9.5h-6.95l1.22-6ZM18.77 19h-6.95l1.43-7h6.95l-1.43 7Z"])));
const NumberSymbol32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol32Regular', "32", ["M14.98 3.2a1 1 0 0 0-1.96-.4L11.58 10H5a1 1 0 1 0 0 2h6.18l-1.4 7H4a1 1 0 1 0 0 2h5.38l-1.36 6.8a1 1 0 0 0 1.96.4l1.44-7.2h6.96l-1.36 6.8a1 1 0 0 0 1.96.4l1.44-7.2H27a1 1 0 1 0 0-2h-6.18l1.4-7H28a1 1 0 1 0 0-2h-5.38l1.36-6.8a1 1 0 0 0-1.96-.4L20.58 10h-6.96l1.36-6.8Zm3.8 15.8h-6.96l1.4-7h6.96l-1.4 7Z"])));
const NumberSymbol48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol48Filled', "48", ["M22.22 5.53a1.5 1.5 0 1 0-2.94-.55L17.4 15H7.25a1.5 1.5 0 1 0 0 3h9.6L14.6 30H5.25a1.5 1.5 0 1 0 0 3h8.8l-1.77 9.48a1.5 1.5 0 1 0 2.94.55L17.1 33h10.94l-1.76 9.48a1.5 1.5 0 1 0 2.94.55L31.1 33h9.65a1.5 1.5 0 0 0 0-3h-9.1l2.25-12h8.85a1.5 1.5 0 0 0 0-3h-8.3l1.77-9.47a1.5 1.5 0 1 0-2.94-.55L31.4 15H20.46l1.76-9.47ZM28.6 30H17.66l2.24-12h10.94L28.6 30Z"])));
const NumberSymbol48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbol48Regular', "48", ["M21.98 5.48a1.25 1.25 0 0 0-2.46-.46L17.66 15H7.25a1.25 1.25 0 0 0 0 2.5h9.94L14.86 30H5.25a1.25 1.25 0 0 0 0 2.5h9.14l-1.87 10.02a1.25 1.25 0 0 0 2.46.46l1.95-10.48H28.4l-1.87 10.02a1.25 1.25 0 0 0 2.46.46l1.95-10.48h9.82a1.25 1.25 0 1 0 0-2.5H31.4l2.33-12.5h9.02a1.25 1.25 0 1 0 0-2.5H34.2l1.78-9.52a1.25 1.25 0 0 0-2.46-.46L31.66 15H20.2l1.78-9.52ZM28.86 30H17.4l2.33-12.5H31.2L28.86 30Z"])));
const NumberSymbolDismiss20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbolDismiss20Filled', "20", ["M8.99 2.88a.75.75 0 0 0-1.48-.26L6.84 6.5H3.75a.75.75 0 0 0 0 1.5h2.83l-.68 4H2.75a.75.75 0 0 0 0 1.5h2.89L5 17.12a.75.75 0 1 0 1.48.26l.67-3.88H9.1c.1-.53.27-1.04.51-1.5H7.42l.69-4h4.47l-.24 1.44c.5-.21 1.03-.35 1.59-.41L14.11 8h3.14a.75.75 0 1 0 0-1.5h-2.88l.62-3.62a.75.75 0 0 0-1.48-.26l-.67 3.88H8.37l.62-3.62ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z"])));
const NumberSymbolDismiss20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbolDismiss20Regular', "20", ["M8.99 2.6a.5.5 0 0 0-.98-.2L7.09 7H3.5a.5.5 0 1 0 0 1h3.39l-.8 4H2.5a.5.5 0 0 0 0 1h3.4L5 17.4a.5.5 0 1 0 .98.2l.92-4.6h2.3c.1-.35.23-.69.4-1H7.1l.8-4h5.03l-.27 1.31c.34-.12.7-.2 1.08-.26L13.96 8h3.54a.5.5 0 1 0 0-1h-3.33l.9-4.39a.5.5 0 1 0-.98-.2l-.95 4.6H8.11l.88-4.41ZM19 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-2.65-1.15-1.14 1.15 1.14 1.15a.5.5 0 0 1-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 0 1 .7-.7l1.15 1.14 1.15-1.14a.5.5 0 0 1 .7.7Z"])));
const NumberSymbolDismiss24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbolDismiss24Filled', "24", ["M10.98 3.16a1 1 0 0 0-1.97-.32L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82L6 20.84a1 1 0 1 0 1.97.32L8.84 16h2.33c.18-.72.47-1.4.85-2H9.18l.67-4h4.97l-.29 1.71a6.46 6.46 0 0 1 2.14-.66l.18-1.06H21a1 1 0 0 0 0-2h-3.82l.8-4.83a1 1 0 1 0-1.97-.32l-.86 5.15h-4.97l.8-4.83ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64-1.65-1.64Z"])));
const NumberSymbolDismiss24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbolDismiss24Regular', "24", ["M10.99 2.89a.75.75 0 1 0-1.48-.28L8.5 8H3.75a.75.75 0 1 0 0 1.5h4.46l-.95 5H2.75a.75.75 0 0 0 0 1.5h4.23l-.97 5.11a.75.75 0 1 0 1.48.28L8.5 16h2.66c.13-.52.32-1.02.56-1.5H8.8l.95-5h5.47l-.4 2.09c.52-.23 1.06-.4 1.63-.5l.3-1.59h4.51a.75.75 0 1 0 0-1.5h-4.23L18 2.9a.75.75 0 0 0-1.48-.28L15.5 8h-5.47L11 2.9ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64-1.65-1.64Z"])));
const NumberSymbolSquare20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbolSquare20Filled', "20", ["m11.45 9-.43 2H8.55l.43-2h2.47ZM5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9Zm3.6 3.01a.5.5 0 0 1 .39.6L9.19 8h2.48L12 6.4a.5.5 0 0 1 .98.2l-.3 1.4h.81a.5.5 0 0 1 0 1h-1.02l-.43 2H13a.5.5 0 0 1 0 1h-1.17l-.34 1.6a.5.5 0 1 1-.98-.2l.3-1.4H8.33L8 13.6a.5.5 0 1 1-.98-.2l.3-1.4H6.5a.5.5 0 0 1 0-1h1.02l.43-2H7a.5.5 0 0 1 0-1h1.17l.34-1.6a.5.5 0 0 1 .6-.39Z"])));
const NumberSymbolSquare20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbolSquare20Regular', "20", ["M9.1 6.01a.5.5 0 0 1 .39.6L9.19 8h2.48L12 6.4a.5.5 0 0 1 .98.2l-.3 1.4h.81a.5.5 0 0 1 0 1h-1.02l-.43 2H13a.5.5 0 0 1 0 1h-1.17l-.34 1.6a.5.5 0 1 1-.98-.2l.3-1.4H8.33L8 13.6a.5.5 0 1 1-.98-.2l.3-1.4H6.5a.5.5 0 0 1 0-1h1.02l.43-2H7a.5.5 0 0 1 0-1h1.17l.34-1.6a.5.5 0 0 1 .6-.39ZM8.55 11h2.47l.43-2H8.98l-.43 2ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM5.5 4C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9Z"])));
const NumberSymbolSquare24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbolSquare24Filled', "24", ["m13.44 11-.4 2h-2.47l.4-2h2.47ZM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25Zm4.65 4.51c.4.09.67.48.59.89l-.22 1.1h2.47l.28-1.4a.75.75 0 0 1 1.47.3l-.22 1.1h.98a.75.75 0 0 1 0 1.5h-1.28l-.4 2h1.18a.75.75 0 0 1 0 1.5h-1.48l-.28 1.4a.75.75 0 0 1-1.48-.3l.23-1.1h-2.47l-.28 1.4a.75.75 0 0 1-1.48-.3l.23-1.1h-.99a.75.75 0 0 1 0-1.5h1.29l.4-2H8.25a.75.75 0 0 1 0-1.5h1.49l.28-1.4c.08-.4.47-.67.88-.59Z"])));
const NumberSymbolSquare24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('NumberSymbolSquare24Regular', "24", ["M10.9 7.51c.4.09.67.48.59.89l-.22 1.1h2.47l.28-1.4a.75.75 0 0 1 1.47.3l-.22 1.1h.98a.75.75 0 0 1 0 1.5h-1.28l-.4 2h1.18a.75.75 0 0 1 0 1.5h-1.48l-.28 1.4a.75.75 0 0 1-1.48-.3l.23-1.1h-2.47l-.28 1.4a.75.75 0 0 1-1.48-.3l.23-1.1h-.99a.75.75 0 0 1 0-1.5h1.29l.4-2H8.25a.75.75 0 0 1 0-1.5h1.49l.28-1.4c.08-.4.47-.67.88-.59ZM10.57 13h2.47l.4-2h-2.47l-.4 2ZM3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75H6.25Z"])));
const Open16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open16Filled', "16", ["M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 0 1 1.5 0v1.5A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2h1.5a.75.75 0 0 1 0 1.5h-1.5ZM8 2.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75v4.5a.75.75 0 0 1-1.5 0V4.56L9.28 7.78a.75.75 0 1 1-1.06-1.06l3.22-3.22H8.75A.75.75 0 0 1 8 2.75Z"])));
const Open16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open16Regular', "16", ["M4.5 3C3.67 3 3 3.67 3 4.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V9.27a.5.5 0 0 1 1 0v2.23a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2h2.23a.5.5 0 0 1 0 1H4.5Zm4.27-.5c0-.28.22-.5.5-.5h4.23c.28 0 .5.22.5.5v4.23a.5.5 0 0 1-1 0V3.71L9.62 7.08a.5.5 0 1 1-.7-.7L12.29 3H9.27a.5.5 0 0 1-.5-.5Z"])));
const Open20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open20Filled', "20", ["M6.25 4.5c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75v-2a.75.75 0 0 1 1.5 0v2c0 1.8-1.46 3.25-3.25 3.25h-7.5A3.25 3.25 0 0 1 3 13.75v-7.5C3 4.45 4.46 3 6.25 3h2a.75.75 0 0 1 0 1.5h-2Zm4.25-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0V5.56l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72h-3.19a.75.75 0 0 1-.75-.75Z"])));
const Open20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open20Regular', "20", ["M6 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1H6Zm5-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V4.7l-4.15 4.15a.5.5 0 0 1-.7-.7L15.29 4H11.5a.5.5 0 0 1-.5-.5Z"])));
const Open24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open24Filled', "24", ["M6.25 4.75c-.83 0-1.5.67-1.5 1.5v11.5c0 .83.67 1.5 1.5 1.5h11.5c.83 0 1.5-.67 1.5-1.5v-4a1 1 0 1 1 2 0v4a3.5 3.5 0 0 1-3.5 3.5H6.25a3.5 3.5 0 0 1-3.5-3.5V6.25a3.5 3.5 0 0 1 3.5-3.5h4a1 1 0 1 1 0 2h-4Zm6.5-1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V6.16l-4.8 4.8a1 1 0 1 1-1.4-1.42l4.79-4.79h-4.09a1 1 0 0 1-1-1Z"])));
const Open24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open24Regular', "24", ["M6.25 4.5c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h4a.75.75 0 0 1 0 1.5h-4ZM13 3.75c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75Z"])));
const Open28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open28Filled', "28", ["M7 5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4.5a1 1 0 1 1 2 0V21a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h4.5a1 1 0 1 1 0 2H7Zm8.5-1a1 1 0 0 1 1-1H24a1 1 0 0 1 1 1v7.5a1 1 0 1 1-2 0V6.41l-5.8 5.8a1 1 0 1 1-1.4-1.42L21.58 5H16.5a1 1 0 0 1-1-1Z"])));
const Open28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open28Regular', "28", ["M7.25 4.5A2.75 2.75 0 0 0 4.5 7.25v13.5a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75v-4.5a.75.75 0 0 1 1.5 0v4.5C25 23.1 23.1 25 20.75 25H7.25A4.25 4.25 0 0 1 3 20.75V7.25C3 4.9 4.9 3 7.25 3h4.5a.75.75 0 0 1 0 1.5h-4.5Zm8.25-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0V5.56l-6.22 6.22a.75.75 0 1 1-1.06-1.06l6.22-6.22h-6.19a.75.75 0 0 1-.75-.75Z"])));
const Open32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open32Filled', "32", ["M7.75 5.5c-1.24 0-2.25 1-2.25 2.25v16.5c0 1.24 1 2.25 2.25 2.25h16.5c1.24 0 2.25-1 2.25-2.25v-5a1.25 1.25 0 1 1 2.5 0v5A4.75 4.75 0 0 1 24.25 29H7.75A4.75 4.75 0 0 1 3 24.25V7.75A4.75 4.75 0 0 1 7.75 3h5a1.25 1.25 0 1 1 0 2.5h-5ZM18 4.25c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5a1.25 1.25 0 1 1-2.5 0V7.27l-6.37 6.36a1.25 1.25 0 1 1-1.76-1.76l6.36-6.37h-5.48c-.69 0-1.25-.56-1.25-1.25Z"])));
const Open32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open32Regular', "32", ["M8.5 5A3.5 3.5 0 0 0 5 8.5v15A3.5 3.5 0 0 0 8.5 27h15a3.5 3.5 0 0 0 3.5-3.5V19a1 1 0 1 1 2 0v4.5a5.5 5.5 0 0 1-5.5 5.5h-15A5.5 5.5 0 0 1 3 23.5v-15A5.5 5.5 0 0 1 8.5 3H13a1 1 0 1 1 0 2H8.5ZM18 4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V6.41l-7.3 7.3a1 1 0 0 1-1.4-1.42L25.58 5H19a1 1 0 0 1-1-1Z"])));
const Open48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open48Filled', "48", ["M41.45 6.34c.34.27.55.7.55 1.16v12a1.5 1.5 0 0 1-3 0v-8.38l-9.44 9.44a1.5 1.5 0 1 1-2.12-2.12L36.88 9H28.5a1.5 1.5 0 0 1 0-3h11.98a1.5 1.5 0 0 1 .97.34ZM12.5 9A3.5 3.5 0 0 0 9 12.5v23a3.5 3.5 0 0 0 3.5 3.5h23a3.5 3.5 0 0 0 3.5-3.5v-8a1.5 1.5 0 1 1 3 0v8a6.5 6.5 0 0 1-6.5 6.5h-23A6.5 6.5 0 0 1 6 35.5v-23A6.5 6.5 0 0 1 12.5 6h8a1.5 1.5 0 0 1 0 3h-8Z"])));
const Open48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Open48Regular', "48", ["M12.25 8.5a3.75 3.75 0 0 0-3.75 3.75v23.5a3.75 3.75 0 0 0 3.75 3.75h23.5a3.75 3.75 0 0 0 3.75-3.75v-8.5a1.25 1.25 0 0 1 2.5 0v8.5C42 39.2 39.2 42 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5C6 8.8 8.8 6 12.25 6h8.5a1.25 1.25 0 0 1 0 2.5h-8.5ZM27 7.25c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5a1.25 1.25 0 1 1-2.5 0v-9.48L29.13 20.63a1.25 1.25 0 0 1-1.76-1.76L37.73 8.5h-9.48c-.69 0-1.25-.56-1.25-1.25Z"])));
const OpenFolder16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenFolder16Filled', "16", ["M2 5.25C2 3.45 3.46 2 5.25 2h5.5C12.55 2 14 3.46 14 5.25v2a.75.75 0 0 1-1.5 0v-2c0-.97-.78-1.75-1.75-1.75h-5.5c-.97 0-1.75.78-1.75 1.75v5.5c0 .97.78 1.75 1.75 1.75h3a.75.75 0 0 1 0 1.5h-3A3.25 3.25 0 0 1 2 10.75v-5.5Zm4 1.5c0-.41.34-.75.75-.75h3.5a.75.75 0 0 1 0 1.5H8.56l4.22 4.22a.75.75 0 1 1-1.06 1.06L7.5 8.56v1.69a.75.75 0 0 1-1.5 0v-3.5Z"])));
const OpenFolder16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenFolder16Regular', "16", ["M2 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2.5a.5.5 0 0 1-1 0V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h3.5a.5.5 0 0 1 0 1H5a3 3 0 0 1-3-3V5Zm4.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V7.7l5.15 5.15a.5.5 0 0 0 .7-.7L7.71 7h2.79a.5.5 0 0 0 0-1h-4Z"])));
const OpenFolder20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenFolder20Filled', "20", ["M3 6.25C3 4.45 4.46 3 6.25 3H14c1.8 0 3.25 1.46 3.25 3.25v2a.75.75 0 0 1-1.5 0v-2c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75h4a.75.75 0 0 1 0 1.5h-4A3.25 3.25 0 0 1 3 13.75v-7.5Zm5 2.5c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l5.22 5.22a.75.75 0 1 1-1.06 1.06L9.5 10.56v2.69a.75.75 0 0 1-1.5 0v-4.5Z"])));
const OpenFolder20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenFolder20Regular', "20", ["M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.5a.5.5 0 0 0 0-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v2.5a.5.5 0 0 0 1 0V6a3 3 0 0 0-3-3H6Zm2.15 5.15A.5.5 0 0 1 8.5 8h4.99a.5.5 0 0 1 0 1H9.7l6.15 6.15a.5.5 0 0 1-.7.7L9 9.71v3.79a.5.5 0 1 1-1 0v-5a.5.5 0 0 1 .15-.35Z"])));
const OpenFolder24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenFolder24Filled', "24", ["M6.75 3h10.5c2 0 3.64 1.57 3.75 3.55v4.7a.75.75 0 0 1-1.49.1v-4.6c0-1.19-.93-2.16-2.1-2.24h-.16L6.75 4.5c-1.18 0-2.15.9-2.25 2.06v10.69c0 1.2.93 2.17 2.1 2.25h4.65a.75.75 0 0 1 .1 1.5h-4.6c-2 0-3.64-1.57-3.75-3.55V6.55A3.75 3.75 0 0 1 6.55 3l.2-.01Zm3.2 6H16a1 1 0 0 1 .11 2h-3.69l6.54 6.54a1 1 0 0 1 .08 1.32l-.08.1a1 1 0 0 1-1.32.08l-.1-.08L11 12.4v3.6a1 1 0 0 1-.88.99H10a1 1 0 0 1-1-.88v-6.2l.02-.1v-.05l.03-.07.03-.1.07-.12a1 1 0 0 1 .14-.19l.11-.1.12-.07.1-.05.1-.03.1-.02.12-.02H16 9.94Z"])));
const OpenFolder24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenFolder24Regular', "24", ["M6.75 3h10.5c2 0 3.64 1.57 3.75 3.55v4.7a.75.75 0 0 1-1.49.1v-4.6c0-1.19-.93-2.16-2.1-2.24h-.16L6.75 4.5c-1.18 0-2.15.9-2.25 2.06v10.69c0 1.2.93 2.17 2.1 2.25h4.65a.75.75 0 0 1 .1 1.5h-4.6c-2 0-3.64-1.57-3.75-3.55V6.55A3.75 3.75 0 0 1 6.55 3l.2-.01Zm3 6h6.5a.75.75 0 0 1 .1 1.5h-4.79l7.22 7.22c.27.27.3.68.08.98l-.08.08a.75.75 0 0 1-.97.07l-.09-.07-7.22-7.22v4.7c0 .37-.28.68-.65.73l-.1.01a.75.75 0 0 1-.74-.65l-.01-.1V9.73a.5.5 0 0 1 0-.07l.03-.11.03-.1a.72.72 0 0 1 .16-.23l.04-.04.08-.06.06-.04.1-.04.07-.02.06-.01.1-.01h6.52-6.5Z"])));
const OpenFolder28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenFolder28Filled', "28", ["M3 7.75a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5V13a1 1 0 1 1-2 0V7.75a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3V20a3 3 0 0 0 3 3h5a1 1 0 1 1 0 2H8a5 5 0 0 1-5-5V7.75ZM10 11a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-5.53l8.24 8.3a1 1 0 0 1-1.42 1.4L12 13.36V19a1 1 0 1 1-2 0v-8Z"])));
const OpenFolder28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenFolder28Regular', "28", ["M3 7.75A4.75 4.75 0 0 1 7.75 3h12.5A4.75 4.75 0 0 1 25 7.75v5.5a.75.75 0 0 1-1.5 0v-5.5c0-1.8-1.46-3.25-3.25-3.25H7.75A3.25 3.25 0 0 0 4.5 7.75v12.5c0 1.8 1.46 3.25 3.25 3.25h5.5a.75.75 0 0 1 0 1.5h-5.5A4.75 4.75 0 0 1 3 20.25V7.75Zm7.5 3.5c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-5.63l8.66 8.72a.75.75 0 1 1-1.06 1.06L12 13v5.75a.75.75 0 0 1-1.5 0v-7.5Z"])));
const OpenFolder48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenFolder48Filled', "48", ["M34.63 6.13a7.5 7.5 0 0 1 7.5 7.5v9a1.5 1.5 0 0 1-3 0v-9a4.5 4.5 0 0 0-4.5-4.5H13.36a4.5 4.5 0 0 0-4.5 4.5v21a4.5 4.5 0 0 0 4.5 4.5h9.26a1.5 1.5 0 0 1 0 3h-9.25a7.5 7.5 0 0 1-7.5-7.5v-21a7.5 7.5 0 0 1 7.5-7.5h21.24ZM18 19.5c0-.83.67-1.5 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-9.38l14.44 14.44a1.5 1.5 0 0 1-2.12 2.12L21 23.12v9.38a1.5 1.5 0 0 1-3 0v-13Z"])));
const OpenFolder48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenFolder48Regular', "48", ["M40.75 24c.69 0 1.25-.56 1.25-1.25v-9.5c0-4-3.25-7.25-7.25-7.25h-21.5C9.25 6 6 9.25 6 13.25v21.5c0 4 3.25 7.25 7.25 7.25h9.5a1.25 1.25 0 1 0 0-2.5h-9.5a4.75 4.75 0 0 1-4.75-4.75v-21.5a4.75 4.75 0 0 1 4.75-4.75h21.5a4.75 4.75 0 0 1 4.75 4.75v9.5c0 .69.56 1.25 1.25 1.25Zm-21.5-6c-.69 0-1.25.56-1.25 1.25v13.5a1.25 1.25 0 1 0 2.5 0V22.27l15.37 15.36a1.25 1.25 0 1 0 1.76-1.76L22.27 20.5h10.48a1.25 1.25 0 1 0 0-2.5h-13.5Z"])));
const OpenOff16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenOff16Filled', "16", ["M12.8 13.52c-.43.3-.97.48-1.55.48h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5c0-.58.18-1.12.48-1.56L1.15 1.85a.5.5 0 1 1 .7-.7l13 13a.5.5 0 0 1-.7.7l-1.34-1.33Zm-1.1-1.1L3.6 4.28c-.06.14-.09.3-.09.46v6.5c0 .69.56 1.25 1.25 1.25h6.5c.16 0 .32-.03.46-.09ZM8.54 6.4l1.06 1.06 2.91-2.9v2.68a.75.75 0 1 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 1 0 0 1.5h2.69L8.53 6.4Zm5.41 5.41-1.44-1.44v-.63a.75.75 0 0 1 1.5 0v1.5c0 .2-.02.39-.06.57ZM4.18 2.06 5.62 3.5h.63a.75.75 0 0 0 0-1.5h-1.5c-.2 0-.39.02-.57.06Z"])));
const OpenOff16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenOff16Regular', "16", ["m12.88 13.59 1.27 1.26a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7L2.4 3.12C2.15 3.52 2 4 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7c.5 0 .98-.15 1.38-.41Zm-.73-.74c-.2.1-.42.15-.65.15h-7A1.5 1.5 0 0 1 3 11.5v-7c0-.23.05-.45.15-.65l9 9Zm-3.37-6.2.57.57a.5.5 0 0 0 .27-.14L13 3.71v3.02a.5.5 0 0 0 1 0V2.5a.5.5 0 0 0-.5-.5H9.27a.5.5 0 0 0 0 1h3.02L8.92 6.38a.5.5 0 0 0-.14.27Zm5.2 5.2-.98-.97V9.27a.5.5 0 0 1 1 0v2.23c0 .12 0 .24-.02.35ZM4.15 2.02l.97.98h1.61a.5.5 0 0 0 0-1H4.5c-.12 0-.24 0-.35.02Z"])));
const OpenOff20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenOff20Filled', "20", ["m2.85 2.15 15 15a.5.5 0 0 1-.7.7l-1.48-1.48c-.54.4-1.2.63-1.92.63h-7.5A3.25 3.25 0 0 1 3 13.75v-7.5c0-.72.23-1.38.63-1.92L2.15 2.85a.5.5 0 1 1 .7-.7Zm11.73 13.14L4.71 5.42c-.13.25-.21.53-.21.83v7.5c0 .97.78 1.75 1.75 1.75h7.5c.3 0 .59-.08.83-.21Zm-4.01-6.85.99 1a.75.75 0 0 0 .22-.16l3.72-3.72v3.19a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0 0 1.5h3.19l-3.72 3.72a.75.75 0 0 0-.15.22Zm6.28 6.29-1.35-1.35v-1.63a.75.75 0 0 1 1.5 0v2c0 .34-.05.67-.15.98ZM5.27 3.15 6.62 4.5h1.63a.75.75 0 0 0 0-1.5h-2c-.34 0-.67.05-.98.15Z"])));
const OpenOff20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenOff20Regular', "20", ["m2.85 2.15 15 15a.5.5 0 0 1-.7.7l-1.41-1.4c-.5.34-1.1.55-1.74.55H6a3 3 0 0 1-3-3V6c0-.65.2-1.25.55-1.74l-1.4-1.4a.5.5 0 1 1 .7-.71Zm12.17 13.57L4.28 4.98A2 2 0 0 0 4 6v8c0 1.1.9 2 2 2h8a2 2 0 0 0 1.02-.28Zm1.88-.94-.9-.9V11.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-.1.78ZM5.22 3.1l.9.9H8.5a.5.5 0 0 0 0-1H6a3 3 0 0 0-.78.1Zm5.78.4c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V4.7l-4.15 4.15a.5.5 0 0 1-.7-.7L15.29 4H11.5a.5.5 0 0 1-.5-.5Z"])));
const OpenOff24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenOff24Filled', "24", ["m3.28 2.22 18.5 18.5a.75.75 0 0 1-1.06 1.06l-1.08-1.08c-.55.35-1.2.55-1.89.55H6.25a3.5 3.5 0 0 1-3.5-3.5V6.25c0-.7.2-1.34.55-1.89L2.22 3.28a.75.75 0 1 1 1.06-1.06ZM18.14 19.2 4.8 5.86a1.5 1.5 0 0 0-.05.39v11.5c0 .83.67 1.5 1.5 1.5h11.5c.13 0 .26-.02.39-.05ZM12.9 9.72l1.38 1.38a1 1 0 0 0 .18-.14l4.79-4.8v4.09a1 1 0 0 0 2 0v-6.5a1 1 0 0 0-1-1h-6.5a1 1 0 0 0 0 2h4.09l-4.8 4.8a1 1 0 0 0-.14.17Zm8.34 8.33-1.99-1.98v-2.32a1 1 0 1 1 2 0v4l-.01.3ZM5.94 2.76l2 1.99h2.31a1 1 0 1 0 0-2h-4l-.3.01Z"])));
const OpenOff24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenOff24Regular', "24", ["m3.28 2.22 18.5 18.5a.75.75 0 0 1-1.06 1.06l-1.26-1.26c-.5.3-1.08.48-1.71.48H6.25A3.25 3.25 0 0 1 3 17.75V6.25c0-.63.18-1.21.48-1.7L2.22 3.27a.75.75 0 1 1 1.06-1.06ZM18.34 19.4 4.6 5.66c-.06.19-.1.38-.1.59v11.5c0 .97.78 1.75 1.75 1.75h11.5c.2 0 .4-.04.59-.1Zm-5.26-9.5 1.02 1.02a.75.75 0 0 0 .18-.14l5.22-5.22v4.69a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h4.69l-5.22 5.22a.75.75 0 0 0-.14.18ZM21 17.82l-1.5-1.5v-2.57a.75.75 0 0 1 1.5 0v4.07ZM6.18 3l1.5 1.5h2.57a.75.75 0 0 0 0-1.5H6.18Z"])));
const OpenOff28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenOff28Filled', "28", ["m3.28 2.22 22.5 22.5a.75.75 0 0 1-1.06 1.06l-1.47-1.47c-.64.44-1.42.69-2.25.69H7a4 4 0 0 1-4-4V7c0-.83.25-1.6.7-2.25L2.21 3.28a.75.75 0 1 1 1.06-1.06Zm18.5 20.62L5.16 6.22A2 2 0 0 0 5 7v14c0 1.1.9 2 2 2h14a2 2 0 0 0 .78-.16ZM6.25 3.07 8.18 5h3.32a1 1 0 1 0 0-2H7c-.26 0-.5.02-.75.07Zm18.68 18.68L23 19.82V16.5a1 1 0 1 1 2 0V21c0 .26-.02.5-.07.75ZM15.5 4a1 1 0 0 1 1-1H24a1 1 0 0 1 1 1v7.5a1 1 0 1 1-2 0V6.41l-5.8 5.8a1 1 0 1 1-1.4-1.42L21.58 5H16.5a1 1 0 0 1-1-1Z"])));
const OpenOff28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenOff28Regular', "28", ["m3.28 2.22 22.5 22.5a.75.75 0 0 1-1.06 1.06l-1.54-1.54c-.7.48-1.53.76-2.43.76H7.25A4.25 4.25 0 0 1 3 20.75V7.25c0-.9.28-1.74.76-2.43L2.22 3.28a.75.75 0 1 1 1.06-1.06Zm18.81 20.93L4.85 5.91c-.22.4-.35.85-.35 1.34v13.5a2.75 2.75 0 0 0 2.75 2.75h13.5c.49 0 .94-.13 1.34-.35ZM6.3 3.11 7.7 4.5h4.06a.75.75 0 0 0 0-1.5h-4.5c-.33 0-.65.04-.96.1Zm18.6 18.6-1.39-1.4v-4.06a.75.75 0 0 1 1.5 0v4.5c0 .33-.04.65-.1.96ZM15.5 3.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0V5.56l-6.22 6.22a.75.75 0 1 1-1.06-1.06l6.22-6.22h-6.19a.75.75 0 0 1-.75-.75Z"])));
const OpenOff48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenOff48Filled', "48", ["M39.13 40.9A6.47 6.47 0 0 1 35.5 42h-23A6.5 6.5 0 0 1 6 35.5v-23c0-1.34.4-2.6 1.1-3.63L4.38 6.13a1.25 1.25 0 1 1 1.76-1.76l37.5 37.5a1.25 1.25 0 0 1-1.76 1.76l-2.74-2.74Zm-2.2-2.2L9.3 11.07c-.2.44-.3.92-.3 1.43v23a3.5 3.5 0 0 0 3.5 3.5h23c.5 0 1-.1 1.43-.3Zm4.98-2.1L39 33.7v-6.2a1.5 1.5 0 1 1 3 0v8c0 .38-.03.74-.1 1.1ZM11.4 6.1 14.3 9h6.2a1.5 1.5 0 0 0 0-3h-8c-.38 0-.74.03-1.1.1Zm30.05.24c.34.27.55.7.55 1.16v12a1.5 1.5 0 0 1-3 0v-8.38l-9.44 9.44a1.5 1.5 0 1 1-2.12-2.12L36.88 9H28.5a1.5 1.5 0 0 1 0-3h11.98a1.5 1.5 0 0 1 .97.34Z"])));
const OpenOff48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OpenOff48Regular', "48", ["M39.2 40.96A6.22 6.22 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5c0-1.27.38-2.46 1.04-3.45L4.37 6.13a1.25 1.25 0 1 1 1.76-1.76l37.5 37.5a1.25 1.25 0 0 1-1.76 1.76l-2.67-2.67Zm-1.83-1.83-28.5-28.5a3.74 3.74 0 0 0-.37 1.62v23.5a3.75 3.75 0 0 0 3.75 3.75h23.5c.58 0 1.13-.13 1.62-.37Zm4.57-2.5L39.5 34.2v-6.95a1.25 1.25 0 0 1 2.5 0v8.5c0 .3-.02.6-.06.88ZM11.37 6.06 13.8 8.5h6.95a1.25 1.25 0 0 0 0-2.5h-8.5c-.3 0-.6.02-.88.06ZM27 7.25c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5a1.25 1.25 0 1 1-2.5 0v-9.48L29.13 20.63a1.25 1.25 0 0 1-1.76-1.76L37.73 8.5h-9.48c-.69 0-1.25-.56-1.25-1.25Z"])));
const Options16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Options16Filled', "16", ["M6 9a2 2 0 0 1 1.94 1.5h5.56a.5.5 0 0 1 .09 1H7.94a2 2 0 0 1-3.88 0H2.5a.5.5 0 0 1-.09-1H4.06A2 2 0 0 1 6 9Zm4-6a2 2 0 0 1 1.94 1.5h1.56a.5.5 0 0 1 .09 1H11.94a2 2 0 0 1-3.88 0H2.5a.5.5 0 0 1-.09-1H8.06A2 2 0 0 1 10 3Z"])));
const Options16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Options16Regular', "16", ["M6 9a2 2 0 0 1 1.94 1.5h5.56a.5.5 0 0 1 .09 1H7.94a2 2 0 0 1-3.88 0H2.5a.5.5 0 0 1-.09-1H4.06A2 2 0 0 1 6 9Zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4-7a2 2 0 0 1 1.94 1.5h1.56a.5.5 0 0 1 .09 1H11.94a2 2 0 0 1-3.88 0H2.5a.5.5 0 0 1-.09-1H8.06A2 2 0 0 1 10 3Zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"])));
const Options20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Options20Filled', "20", ["M17.25 5h-2.36a2.5 2.5 0 0 0-4.78 0H2.75a.75.75 0 0 0 0 1.5h7.36a2.5 2.5 0 0 0 4.78 0h2.36a.75.75 0 0 0 0-1.5Zm-14.5 8.5a.75.75 0 0 0 0 1.5h2.36a2.5 2.5 0 0 0 4.78 0h7.36a.75.75 0 0 0 0-1.5H9.89a2.5 2.5 0 0 0-4.78 0H2.75Z"])));
const Options20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Options20Regular', "20", ["M14.95 5a2.5 2.5 0 0 0-4.9 0H2.5a.5.5 0 0 0 0 1h7.55a2.5 2.5 0 0 0 4.9 0h2.55a.5.5 0 0 0 0-1h-2.55ZM12.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-2.55 7a2.5 2.5 0 0 0-4.9 0H2.5a.5.5 0 0 0 0 1h2.55a2.5 2.5 0 0 0 4.9 0h7.55a.5.5 0 0 0 0-1H9.95ZM7.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"])));
const Options24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Options24Filled', "24", ["M8.75 13.5a3.25 3.25 0 0 1 3.16 2.5h9.34a.75.75 0 0 1 .1 1.5h-9.44a3.25 3.25 0 0 1-6.32 0H2.75a.75.75 0 0 1-.1-1.5h2.94a3.25 3.25 0 0 1 3.16-2.5Zm6.5-9.5a3.25 3.25 0 0 1 3.16 2.5h2.84a.75.75 0 0 1 .1 1.5h-2.94a3.25 3.25 0 0 1-6.32 0H2.75a.75.75 0 0 1-.1-1.5h9.44A3.25 3.25 0 0 1 15.25 4Z"])));
const Options24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Options24Regular', "24", ["M8.75 13.5a3.25 3.25 0 0 1 3.16 2.5h9.34a.75.75 0 0 1 .1 1.5h-9.44a3.25 3.25 0 0 1-6.32 0H2.75a.75.75 0 0 1-.1-1.5h2.94a3.25 3.25 0 0 1 3.16-2.5Zm0 1.5c-.76 0-1.41.49-1.65 1.17l-.02.07-.04.14a1.76 1.76 0 0 0 .02.82l.04.13.02.07a1.75 1.75 0 0 0 3.28-.07l.04-.13-.01.06a1.75 1.75 0 0 0 .04-.82l-.03-.13-.02-.07-.04-.14A1.75 1.75 0 0 0 8.75 15Zm6.5-11a3.25 3.25 0 0 1 3.16 2.5h2.84a.75.75 0 0 1 .1 1.5h-2.94a3.25 3.25 0 0 1-6.32 0H2.75a.75.75 0 0 1-.1-1.5h9.44A3.25 3.25 0 0 1 15.25 4Zm0 1.5c-.76 0-1.41.49-1.65 1.17l-.02.07-.04.14a1.76 1.76 0 0 0 .02.82l.04.13.02.07a1.75 1.75 0 0 0 3.28-.07l.04-.13-.01.06a1.75 1.75 0 0 0 .04-.82l-.03-.13-.02-.07-.04-.14a1.75 1.75 0 0 0-1.63-1.1Z"])));
const Options48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Options48Filled', "48", ["M5.25 15.5h19.88a6.25 6.25 0 0 0 12.25 0h5.37a1.25 1.25 0 1 0 0-2.5h-5.38a6.25 6.25 0 0 0-12.24 0H5.25a1.25 1.25 0 1 0 0 2.5Zm0 19h5.63a6.25 6.25 0 0 0 12.24 0h19.63a1.25 1.25 0 1 0 0-2.5H23.12a6.25 6.25 0 0 0-12.25 0H5.25a1.25 1.25 0 1 0 0 2.5Z"])));
const Options48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Options48Regular', "48", ["M5.25 15.5h19.88a6.25 6.25 0 0 0 12.25 0h5.37a1.25 1.25 0 1 0 0-2.5h-5.38a6.25 6.25 0 0 0-12.24 0H5.25a1.25 1.25 0 1 0 0 2.5Zm26-5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm-26 24h5.63a6.25 6.25 0 0 0 12.24 0h19.63a1.25 1.25 0 1 0 0-2.5H23.12a6.25 6.25 0 0 0-12.25 0H5.25a1.25 1.25 0 1 0 0 2.5Zm11.75-5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z"])));
const Organization12Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization12Filled', "12", ["M5.5 4.94a2 2 0 1 1 1 0V6h2a1 1 0 0 1 1 1v1.06a2 2 0 1 1-1 0V7h-5v1.06a2 2 0 1 1-1 0V7a1 1 0 0 1 1-1h2V4.94Z"])));
const Organization12Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization12Regular', "12", ["M5.5 4.94a2 2 0 1 1 1 0V6h2a1 1 0 0 1 1 1v1.06a2 2 0 1 1-1 0V7h-5v1.06a2 2 0 1 1-1 0V7a1 1 0 0 1 1-1h2V4.94ZM6 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"])));
const Organization16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization16Filled', "16", ["M5.5 3.5a2.5 2.5 0 1 1 3 2.45V7h2.13C11.4 7 12 7.61 12 8.37v1.68a2.5 2.5 0 1 1-1 0V8.37c0-.2-.16-.37-.37-.37H5.37c-.2 0-.37.16-.37.37v1.68a2.5 2.5 0 1 1-1 0V8.37C4 7.6 4.61 7 5.37 7H7.5V5.95a2.5 2.5 0 0 1-2-2.45Z"])));
const Organization16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization16Regular', "16", ["M8 1a2.5 2.5 0 0 0-.5 4.95V7H5.37C4.6 7 4 7.61 4 8.37v1.68a2.5 2.5 0 1 0 1 0V8.37c0-.2.16-.37.37-.37h5.26c.2 0 .37.16.37.37v1.68a2.5 2.5 0 1 0 1 0V8.37C12 7.6 11.39 7 10.63 7H8.5V5.95A2.5 2.5 0 0 0 8 1ZM6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-3.5 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm8.5-1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"])));
const Organization20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization20Filled', "20", ["M7 5a3 3 0 1 1 3.5 2.96V9.5h3c.83 0 1.5.67 1.5 1.5v1.04a3 3 0 1 1-1 0V11a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v1.04a3 3 0 1 1-1 0V11c0-.83.67-1.5 1.5-1.5h3V7.96A3 3 0 0 1 7 5Z"])));
const Organization20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization20Regular', "20", ["M10 2a3 3 0 0 0-.5 5.96V9.5h-3c-.83 0-1.5.67-1.5 1.5v1.04a3 3 0 1 0 1 0V11c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1.04a3 3 0 1 0 1 0V11c0-.83-.67-1.5-1.5-1.5h-3V7.96A3 3 0 0 0 10 2ZM8 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM3.5 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm11-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"])));
const Organization24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization24Filled', "24", ["M8 5.75a3.75 3.75 0 1 1 4.5 3.68v2.07h3.25c1.24 0 2.25 1 2.25 2.25v.82a3.75 3.75 0 1 1-1.5 0v-.82a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v.82a3.75 3.75 0 1 1-1.5 0v-.82c0-1.24 1-2.25 2.25-2.25H11V9.43a3.75 3.75 0 0 1-3-3.68Z"])));
const Organization24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization24Regular', "24", ["M11.75 2A3.75 3.75 0 0 0 11 9.43v2.07H7.75c-1.24 0-2.25 1-2.25 2.25v.83a3.75 3.75 0 1 0 1.5 0v-.83c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v.83a3.75 3.75 0 1 0 1.5 0v-.83c0-1.24-1-2.25-2.25-2.25H12.5V9.43A3.75 3.75 0 0 0 11.75 2ZM9.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM4 18.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM17.25 16a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"])));
const Organization28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization28Filled', "28", ["M9.75 6.25a4.25 4.25 0 1 1 5 4.18v3.07h4.5c1.24 0 2.25 1 2.25 2.25v1.82a4.25 4.25 0 1 1-1.5 0v-1.82a.75.75 0 0 0-.75-.75H8.75a.75.75 0 0 0-.75.75v1.82a4.25 4.25 0 1 1-1.5 0v-1.82c0-1.24 1-2.25 2.25-2.25h4.5v-3.07a4.25 4.25 0 0 1-3.5-4.18Z"])));
const Organization28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization28Regular', "28", ["M14 2a4.25 4.25 0 0 0-.75 8.43v3.07h-4.5c-1.24 0-2.25 1-2.25 2.25v1.82a4.25 4.25 0 1 0 1.5 0v-1.82c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v1.82a4.25 4.25 0 1 0 1.5 0v-1.82c0-1.24-1-2.25-2.25-2.25h-4.5v-3.07A4.25 4.25 0 0 0 14 2Zm-2.75 4.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM4.5 21.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM20.75 19a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"])));
const Organization32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization32Filled', "32", ["M11 7a5 5 0 1 1 6 4.9V15h5.27c1.5 0 2.73 1.22 2.73 2.73v2.37a5 5 0 1 1-2 0v-2.37c0-.4-.33-.73-.73-.73H9.73c-.4 0-.73.33-.73.73v2.37a5 5 0 1 1-2 0v-2.37C7 16.23 8.22 15 9.73 15H15v-3.1A5 5 0 0 1 11 7Z"])));
const Organization32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization32Regular', "32", ["M16 2a5 5 0 0 0-1 9.9V15H9.73A2.73 2.73 0 0 0 7 17.73v2.37a5 5 0 1 0 2 0v-2.37c0-.4.33-.73.73-.73h12.54c.4 0 .73.33.73.73v2.37a5 5 0 1 0 2 0v-2.37c0-1.5-1.22-2.73-2.73-2.73H17v-3.1A5 5 0 0 0 16 2Zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM5 25a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm19-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"])));
const Organization48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization48Filled', "48", ["M16.5 11.5a7.5 7.5 0 1 1 8.75 7.4V23h7.5a3.75 3.75 0 0 1 3.75 3.75v2.35a7.5 7.5 0 1 1-2.5 0v-2.35c0-.7-.56-1.25-1.25-1.25h-17.5c-.7 0-1.25.56-1.25 1.25v2.35a7.5 7.5 0 1 1-2.5 0v-2.35A3.75 3.75 0 0 1 15.25 23h7.5v-4.1a7.5 7.5 0 0 1-6.25-7.4Z"])));
const Organization48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Organization48Regular', "48", ["M24 4a7.5 7.5 0 0 0-1.25 14.9V23h-7.5a3.75 3.75 0 0 0-3.75 3.75v2.35a7.5 7.5 0 1 0 2.5 0v-2.35c0-.7.56-1.25 1.25-1.25h17.5c.69 0 1.25.56 1.25 1.25v2.35a7.5 7.5 0 1 0 2.5 0v-2.35A3.75 3.75 0 0 0 32.75 23h-7.5v-4.1A7.5 7.5 0 0 0 24 4Zm-5 7.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm-11.25 25a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm27.5-5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"])));
const OrganizationHorizontal20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OrganizationHorizontal20Filled', "20", ["M5 13a3 3 0 1 1 2.96-3.5H9.5v-3c0-.83.67-1.5 1.5-1.5h1.04a3 3 0 1 1 0 1H11a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h1.04a3 3 0 1 1 0 1H11a1.5 1.5 0 0 1-1.5-1.5v-3H7.96A3 3 0 0 1 5 13Z"])));
const OrganizationHorizontal20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('OrganizationHorizontal20Regular', "20", ["M2 10a3 3 0 0 0 5.96.5H9.5v3c0 .83.67 1.5 1.5 1.5h1.04a3 3 0 1 0 0-1H11a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h1.04a3 3 0 1 0 0-1H11c-.83 0-1.5.67-1.5 1.5v3H7.96A3 3 0 0 0 2 10Zm3 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm10 4.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2-11a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"])));
const Orientation20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Orientation20Filled', "20", ["M3.25 5a.25.25 0 0 0-.25.25v.25a.5.5 0 0 1-1 0v-.25C2 4.56 2.56 4 3.25 4h.25a.5.5 0 0 1 0 1h-.25Z", "M5 4.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z", "M8 4.5c0-.28.22-.5.5-.5h.25C9.44 4 10 4.56 10 5.25v.25a.5.5 0 0 1-1 0v-.25A.25.25 0 0 0 8.75 5H8.5a.5.5 0 0 1-.5-.5Z", "m14.85 5.85-.15.16a3.5 3.5 0 0 1-.2 6.99.5.5 0 0 1 0-1 2.5 2.5 0 0 0 .22-5l.13.15a.5.5 0 0 1-.7.7l-1-1a.5.5 0 0 1 0-.7l1-1a.5.5 0 0 1 .7.7Z", "M3.5 9C2.67 9 2 9.67 2 10.5v4c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-1 0v1c0 .28.22.5.5.5h-6Z", "M3 7.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Z"])));
const Orientation20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Orientation20Regular', "20", ["M3.25 5a.25.25 0 0 0-.25.25v.25a.5.5 0 0 1-1 0v-.25C2 4.56 2.56 4 3.25 4h.25a.5.5 0 0 1 0 1h-.25Z", "M5 4.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z", "M8 4.5c0-.28.22-.5.5-.5h.25C9.44 4 10 4.56 10 5.25v.25a.5.5 0 0 1-1 0v-.25A.25.25 0 0 0 8.75 5H8.5a.5.5 0 0 1-.5-.5Z", "m14.85 5.85-.15.16a3.5 3.5 0 0 1-.2 6.99.5.5 0 0 1 0-1 2.5 2.5 0 0 0 .22-5l.13.15a.5.5 0 0 1-.7.7l-1-1a.5.5 0 0 1 0-.7l1-1a.5.5 0 0 1 .7.7Z", "M2 10.5C2 9.67 2.67 9 3.5 9h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 0 1 2 14.5v-4Zm1.5-.5a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-8Z", "M9.5 9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5Z", "M3 7.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Z"])));
const Orientation24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Orientation24Filled', "24", ["M6.75 4a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM3.5 8.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM2 12.9c0-1.05.85-1.9 1.9-1.9h10.2c1.05 0 1.9.85 1.9 1.9v5.2a1.9 1.9 0 0 1-1.9 1.9H3.9A1.9 1.9 0 0 1 2 18.1v-5.2ZM12.25 11a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5c0 .41-.34.75-.75.75Zm-8.5-5.5a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5C2 4.78 2.78 4 3.75 4h.5a.75.75 0 0 1 0 1.5h-.5Zm7.75.25a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.97 0 1.75.78 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5ZM17 16.08c0 .48.42.87.89.74A5.5 5.5 0 0 0 17.5 6.1l.3-.35a.75.75 0 1 0-1.13-.98l-1.5 1.75a.75.75 0 0 0 0 .98l1.5 1.75a.75.75 0 1 0 1.14-.98l-.6-.7a4 4 0 0 1 .37 7.79c-.33.1-.59.38-.59.73Z"])));
const Orientation24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Orientation24Regular', "24", ["M6.75 4a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM3.5 8.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM3.9 11A1.9 1.9 0 0 0 2 12.9v5.2c0 1.05.85 1.9 1.9 1.9h10.2a1.9 1.9 0 0 0 1.9-1.9v-5.2a1.9 1.9 0 0 0-1.9-1.9h-1.85c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .41.34.75.75.75H3.9Zm-.4 1.9c0-.22.18-.4.4-.4h10.2c.22 0 .4.18.4.4v5.2a.4.4 0 0 1-.4.4H3.9a.4.4 0 0 1-.4-.4v-5.2Zm.25-7.4a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5C2 4.78 2.78 4 3.75 4h.5a.75.75 0 0 1 0 1.5h-.5Zm7.75.25a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.97 0 1.75.78 1.75 1.75v.5a.75.75 0 0 1-1.5 0v-.5ZM17 16.08c0 .48.42.87.89.74A5.5 5.5 0 0 0 17.5 6.1l.3-.35a.75.75 0 1 0-1.13-.98l-1.5 1.75a.75.75 0 0 0 0 .98l1.5 1.75a.75.75 0 1 0 1.14-.98l-.6-.7a4 4 0 0 1 .37 7.79c-.33.1-.59.38-.59.73Z"])));
const Oval16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval16Filled', "16", ["M1 8a5 5 0 0 1 5-5h4a5 5 0 0 1 0 10H6a5 5 0 0 1-5-5Z"])));
const Oval16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval16Regular', "16", ["M1 8a5 5 0 0 1 5-5h4a5 5 0 0 1 0 10H6a5 5 0 0 1-5-5Zm5-4a4 4 0 1 0 0 8h4a4 4 0 0 0 0-8H6Z"])));
const Oval20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval20Filled', "20", ["M2 10a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6Z"])));
const Oval20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval20Regular', "20", ["M2 10a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6Zm6-5a5 5 0 0 0 0 10h4a5 5 0 0 0 0-10H8Z"])));
const Oval24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval24Filled', "24", ["M2 12a8 8 0 0 1 8-8h4a8 8 0 1 1 0 16h-4a8 8 0 0 1-8-8Z"])));
const Oval24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval24Regular', "24", ["M2 12a8 8 0 0 1 8-8h4a8 8 0 1 1 0 16h-4a8 8 0 0 1-8-8Zm8-6.5a6.5 6.5 0 0 0 0 13h4a6.5 6.5 0 1 0 0-13h-4Z"])));
const Oval28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval28Filled', "28", ["M2 14a9 9 0 0 1 9-9h6a9 9 0 1 1 0 18h-6a9 9 0 0 1-9-9Z"])));
const Oval28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval28Regular', "28", ["M2 14a9 9 0 0 1 9-9h6a9 9 0 1 1 0 18h-6a9 9 0 0 1-9-9Zm9-7.5a7.5 7.5 0 1 0 0 15h6a7.5 7.5 0 0 0 0-15h-6Z"])));
const Oval32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval32Filled', "32", ["M12 6a10 10 0 0 0 0 20h8a10 10 0 0 0 0-20h-8Z"])));
const Oval32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval32Regular', "32", ["M12 8a8 8 0 1 0 0 16h8a8 8 0 1 0 0-16h-8ZM2 16A10 10 0 0 1 12 6h8a10 10 0 0 1 0 20h-8A10 10 0 0 1 2 16Z"])));
const Oval48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval48Filled', "48", ["M4 24A15 15 0 0 1 19 9h10a15 15 0 1 1 0 30H19A15 15 0 0 1 4 24Z"])));
const Oval48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oval48Regular', "48", ["M4 24A15 15 0 0 1 19 9h10a15 15 0 1 1 0 30H19A15 15 0 0 1 4 24Zm15-12.5a12.5 12.5 0 1 0 0 25h10a12.5 12.5 0 1 0 0-25H19Z"])));
const Oven20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oven20Filled', "20", ["M6 3a3 3 0 0 0-3 3v1h14V6a3 3 0 0 0-3-3H6Zm1.5 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm6.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4 .75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM3 14V8h14v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm3.5-4a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-7Z"])));
const Oven20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oven20Regular', "20", ["M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 14V8h12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm12-7H4V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1Zm-9.25-.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.5 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-2.5-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6Zm0 5v-4h8v4H6Z"])));
const Oven24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oven24Filled', "24", ["M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25V8.5H3V6.25ZM8 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM3 17.75V10h18v7.75c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75ZM7.25 12C6.56 12 6 12.56 6 13.25v3.5c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-9.5Z"])));
const Oven24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oven24Regular', "24", ["M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25Zm16.5 0c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75V8h15V6.25Zm0 11.5V9.5h-15v8.25c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75ZM8 7.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7.5 16.5v-4h9v4h-9ZM7.25 11C6.56 11 6 11.56 6 12.25v4.5c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69-.56-1.25-1.25-1.25h-9.5Z"])));
const Oven32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oven32Filled', "32", ["M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5V12H3V7.5Zm5.5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm6 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM22 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3 14v10.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5V14H3Zm5.5 3h15c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 7 23.5v-5c0-.83.67-1.5 1.5-1.5Z"])));
const Oven32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oven32Regular', "32", ["M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17Zm24 0A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5V11h22V7.5Zm0 17V13H5v11.5A2.5 2.5 0 0 0 7.5 27h17a2.5 2.5 0 0 0 2.5-2.5Zm-17-15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM23.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9 23v-6h14v6H9Zm-.5-8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-15Z"])));
const Oven48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oven48Filled', "48", ["M12 6a6 6 0 0 0-6 6v5.5h36V12a6 6 0 0 0-6-6H12Zm6 6.25a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6 20v16a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6V20H6Zm6.75 3.5h22.5c.97 0 1.75.78 1.75 1.75v10c0 .97-.78 1.75-1.75 1.75h-22.5c-.97 0-1.75-.78-1.75-1.75v-10c0-.97.78-1.75 1.75-1.75Z"])));
const Oven48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Oven48Regular', "48", ["M6 12.25C6 8.8 8.8 6 12.25 6h23.5C39.2 6 42 8.8 42 12.25v23.5C42 39.2 39.2 42 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5Zm2.5 23.5a3.75 3.75 0 0 0 3.75 3.75h23.5a3.75 3.75 0 0 0 3.75-3.75V18.5h-31v17.25Zm0-23.5V16h31v-3.75a3.75 3.75 0 0 0-3.75-3.75h-23.5a3.75 3.75 0 0 0-3.75 3.75Zm7.5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM13.5 34.5v-11h21v11h-21ZM12.75 21c-.97 0-1.75.78-1.75 1.75v12.5c0 .97.78 1.75 1.75 1.75h22.5c.97 0 1.75-.78 1.75-1.75v-12.5c0-.97-.78-1.75-1.75-1.75h-22.5Z"])));
const PaddingDown20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingDown20Filled', "20", ["M3.75 2.75c0 .41.34.75.75.75H15A.75.75 0 0 0 15 2H4.5a.75.75 0 0 0-.75.75Zm0 14.5c0 .41.34.75.75.75h1.31a.75.75 0 0 0 0-1.5H4.5a.75.75 0 0 0-.75.75Zm3.94 0c0 .41.33.75.75.75h2.62a.75.75 0 0 0 0-1.5H8.44a.75.75 0 0 0-.75.75Zm5.25 0c0 .41.33.75.75.75H15a.75.75 0 0 0 0-1.5h-1.31a.75.75 0 0 0-.75.75Zm-2.66-1.97c-.3.3-.77.3-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L9 12.94V5.75a.75.75 0 0 1 1.5 0v7.19l2.97-2.97a.75.75 0 1 1 1.06 1.06l-4.25 4.25Z"])));
const PaddingDown20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingDown20Regular', "20", ["m14.35 11.35-4.5 4.5a.5.5 0 0 1-.7 0l-4.5-4.5a.5.5 0 0 1 .7-.7L9 14.29V4.5a.5.5 0 0 1 1 0v9.8l3.65-3.65a.5.5 0 0 1 .7.7ZM3.5 3a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1h-12Zm0 15a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1Zm3 0a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Zm4 0a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Zm4 0a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1Z"])));
const PaddingDown24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingDown24Filled', "24", ["M4 3a1 1 0 0 0 1 1h14a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Zm0 18a1 1 0 0 0 1 1h1.75a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Zm5.25 0a1 1 0 0 0 1 1h3.5a1 1 0 1 0 0-2h-3.5a1 1 0 0 0-1 1Zm7 0a1 1 0 0 0 1 1H19a1 1 0 1 0 0-2h-1.75a1 1 0 0 0-1 1Zm1.46-7.3-5 5a1 1 0 0 1-1.42 0l-5-5a1 1 0 1 1 1.42-1.4L11 15.58V6a1 1 0 1 1 2 0v9.59l3.3-3.3a1 1 0 0 1 1.4 1.42Z"])));
const PaddingDown24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingDown24Regular', "24", ["M4.5 2.75c0 .41.34.75.75.75h13a.75.75 0 0 0 0-1.5h-13a.75.75 0 0 0-.75.75Zm0 18.5c0 .41.34.75.75.75h.87a.75.75 0 0 0 0-1.5h-.87a.75.75 0 0 0-.75.75Zm3.47 0c0 .41.33.75.75.75h1.73a.75.75 0 0 0 0-1.5H8.72a.75.75 0 0 0-.75.75Zm4.33 0c0 .41.34.75.75.75h1.73a.75.75 0 0 0 0-1.5h-1.73a.75.75 0 0 0-.75.75Zm4.33 0c0 .41.34.75.75.75h.87a.75.75 0 0 0 0-1.5h-.87a.75.75 0 0 0-.75.75Zm-4.35-2.47c-.3.3-.77.3-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L11 16.44V5.75a.75.75 0 0 1 1.5 0v10.69l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5Z"])));
const PaddingLeft20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingLeft20Filled', "20", ["M2.75 3.75A.75.75 0 0 0 2 4.5v1.31a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-.75-.75Zm0 3.94a.75.75 0 0 0-.75.75v2.62a.75.75 0 0 0 1.5 0V8.44a.75.75 0 0 0-.75-.75Zm0 5.25a.75.75 0 0 0-.75.75V15a.75.75 0 0 0 1.5 0v-1.31a.75.75 0 0 0-.75-.75Zm14.5-9.19a.75.75 0 0 0-.75.75V15a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-.75-.75ZM4.72 10.28a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 1 1 1.06 1.06L7.06 9h7.19a.75.75 0 0 1 0 1.5H7.06l2.97 2.97a.75.75 0 1 1-1.06 1.06l-4.25-4.25Z"])));
const PaddingLeft20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingLeft20Regular', "20", ["M2 3.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm0 3a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm0 4a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm0 4a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm2.15-4.65a.5.5 0 0 1 0-.7l4.5-4.5a.5.5 0 1 1 .7.7L5.71 9h9.79a.5.5 0 0 1 0 1H5.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5ZM17 3.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-1 0v-12Z"])));
const PaddingLeft24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingLeft24Filled', "24", ["M3 4a1 1 0 0 0-1 1v1.75a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1Zm0 5.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1Zm0 7a1 1 0 0 0-1 1V19a1 1 0 1 0 2 0v-1.75a1 1 0 0 0-1-1ZM21 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1ZM5.3 12.7a1 1 0 0 1 0-1.4l5-5a1 1 0 1 1 1.4 1.4L8.42 11H18a1 1 0 1 1 0 2H8.41l3.3 3.3a1 1 0 0 1-1.42 1.4l-5-5Z"])));
const PaddingLeft24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingLeft24Regular', "24", ["M2.75 4.5a.75.75 0 0 0-.75.75v.87a.75.75 0 0 0 1.5 0v-.87a.75.75 0 0 0-.75-.75Zm0 3.47a.75.75 0 0 0-.75.75v1.73a.75.75 0 0 0 1.5 0V8.72a.75.75 0 0 0-.75-.75Zm0 4.33a.75.75 0 0 0-.75.75v1.73a.75.75 0 0 0 1.5 0v-1.73a.75.75 0 0 0-.75-.75Zm0 4.33a.75.75 0 0 0-.75.75v.87a.75.75 0 0 0 1.5 0v-.87a.75.75 0 0 0-.75-.75ZM21.25 4.5a.75.75 0 0 0-.75.75v13a.75.75 0 0 0 1.5 0v-13a.75.75 0 0 0-.75-.75ZM5.22 12.28a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06L7.56 11h10.69a.75.75 0 0 1 0 1.5H7.56l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5Z"])));
const PaddingRight20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingRight20Filled', "20", ["M2.75 3.75c.41 0 .75.34.75.75V15A.75.75 0 0 1 2 15V4.5c0-.41.34-.75.75-.75Zm14.5 0c.41 0 .75.34.75.75v1.31a.75.75 0 0 1-1.5 0V4.5c0-.41.34-.75.75-.75Zm0 3.94c.41 0 .75.33.75.75v2.62a.75.75 0 0 1-1.5 0V8.44c0-.42.34-.75.75-.75Zm0 5.25c.41 0 .75.33.75.75V15a.75.75 0 0 1-1.5 0v-1.31c0-.42.34-.75.75-.75Zm-1.97-2.66c.3-.3.3-.77 0-1.06l-4.25-4.25a.75.75 0 1 0-1.06 1.06L12.94 9H5.75a.75.75 0 0 0 0 1.5h7.19l-2.97 2.97a.75.75 0 1 0 1.06 1.06l4.25-4.25Z"])));
const PaddingRight20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingRight20Regular', "20", ["M15.85 9.85a.5.5 0 0 0 0-.7l-4.5-4.5a.5.5 0 0 0-.7.7L14.29 9H4.5a.5.5 0 0 0 0 1h9.8l-3.65 3.65a.5.5 0 0 0 .7.7l4.5-4.5ZM3 3.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12Zm15 0a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm0 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm0 4a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm0 4a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Z"])));
const PaddingRight24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingRight24Filled', "24", ["M3 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm18 0a1 1 0 0 1 1 1v1.75a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 5.25a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1Zm0 7a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.75a1 1 0 0 1 1-1Zm-2.3-3.54a1 1 0 0 0 0-1.42l-5-5a1 1 0 1 0-1.4 1.42L15.58 11H6a1 1 0 1 0 0 2h9.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z"])));
const PaddingRight24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingRight24Regular', "24", ["M2.75 4.5c.41 0 .75.34.75.75v13a.75.75 0 0 1-1.5 0v-13c0-.41.34-.75.75-.75Zm18.5 0c.41 0 .75.34.75.75v.87a.75.75 0 0 1-1.5 0v-.87c0-.41.34-.75.75-.75Zm0 3.47c.41 0 .75.33.75.75v1.73a.75.75 0 0 1-1.5 0V8.72c0-.42.34-.75.75-.75Zm0 4.33c.41 0 .75.34.75.75v1.73a.75.75 0 0 1-1.5 0v-1.73c0-.41.34-.75.75-.75Zm0 4.33c.41 0 .75.34.75.75v.87a.75.75 0 0 1-1.5 0v-.87c0-.41.34-.75.75-.75Zm-2.47-4.35c.3-.3.3-.77 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L16.44 11H5.75a.75.75 0 0 0 0 1.5h10.69l-3.72 3.72a.75.75 0 1 0 1.06 1.06l5-5Z"])));
const PaddingTop20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingTop20Filled', "20", ["M3.75 2.75c0-.41.34-.75.75-.75h1.31a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm3.94 0c0-.41.33-.75.75-.75h2.62a.75.75 0 0 1 0 1.5H8.44a.75.75 0 0 1-.75-.75Zm5.25 0c0-.41.33-.75.75-.75H15a.75.75 0 0 1 0 1.5h-1.31a.75.75 0 0 1-.75-.75Zm-9.19 14.5c0-.41.34-.75.75-.75H15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm6.53-12.53a.75.75 0 0 0-1.06 0L4.97 8.97a.75.75 0 1 0 1.06 1.06L9 7.06v7.19a.75.75 0 0 0 1.5 0V7.06l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25Z"])));
const PaddingTop20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingTop20Regular', "20", ["M3.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM9.85 4.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L9 5.71v9.79a.5.5 0 0 0 1 0V5.7l3.65 3.65a.5.5 0 0 0 .7-.7l-4.5-4.5ZM3.5 17a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12Z"])));
const PaddingTop24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingTop24Filled', "24", ["M4 3a1 1 0 0 1 1-1h1.75a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Zm5.25 0a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1Zm7 0a1 1 0 0 1 1-1H19a1 1 0 1 1 0 2h-1.75a1 1 0 0 1-1-1ZM4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm8.7-15.7a1 1 0 0 0-1.4 0l-5 5a1 1 0 1 0 1.4 1.4L11 8.42V18a1 1 0 1 0 2 0V8.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z"])));
const PaddingTop24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaddingTop24Regular', "24", ["M4.5 2.75c0-.41.34-.75.75-.75h.87a.75.75 0 0 1 0 1.5h-.87a.75.75 0 0 1-.75-.75Zm3.47 0c0-.41.33-.75.75-.75h1.73a.75.75 0 0 1 0 1.5H8.72a.75.75 0 0 1-.75-.75Zm4.33 0c0-.41.34-.75.75-.75h1.73a.75.75 0 0 1 0 1.5h-1.73a.75.75 0 0 1-.75-.75Zm4.33 0c0-.41.34-.75.75-.75h.87a.75.75 0 0 1 0 1.5h-.87a.75.75 0 0 1-.75-.75ZM4.5 21.25c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm7.78-16.03a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06L11 7.56v10.69a.75.75 0 0 0 1.5 0V7.56l3.72 3.72a.75.75 0 1 0 1.06-1.06l-5-5Z"])));
const PageFit16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PageFit16Filled', "16", ["M1 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5Zm2 1v1a.5.5 0 0 0 1 0V6h1a.5.5 0 0 0 0-1H4a1 1 0 0 0-1 1Zm9-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0V6a1 1 0 0 0-1-1Zm0 6a1 1 0 0 0 1-1V9a.5.5 0 0 0-1 0v1h-1a.5.5 0 0 0 0 1h1Zm-8 0h1a.5.5 0 0 0 0-1H4V9a.5.5 0 0 0-1 0v1a1 1 0 0 0 1 1Z"])));
const PageFit16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PageFit16Regular', "16", ["M3 6a1 1 0 0 1 1-1h1a.5.5 0 0 1 0 1H4v1a.5.5 0 0 1-1 0V6Zm10 0a1 1 0 0 0-1-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0V6Zm0 4a1 1 0 0 1-1 1h-1a.5.5 0 0 1 0-1h1V9a.5.5 0 0 1 1 0v1ZM3 10a1 1 0 0 0 1 1h1a.5.5 0 0 0 0-1H4V9a.5.5 0 0 0-1 0v1Zm0-7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm10 1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10Z"])));
const PageFit20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PageFit20Filled', "20", ["M4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm1.5 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1C4 6.67 4.67 6 5.5 6Zm8 0h1c.83 0 1.5.67 1.5 1.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1ZM5 11.5v1c0 .28.22.5.5.5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 4 12.5v-1a.5.5 0 0 1 1 0Zm11 0v1c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0Z"])));
const PageFit20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PageFit20Regular', "20", ["M5.5 6C4.67 6 4 6.67 4 7.5v1a.5.5 0 0 0 1 0v-1c0-.28.22-.5.5-.5h1a.5.5 0 0 0 0-1h-1Zm8 0a.5.5 0 0 0 0 1h1c.28 0 .5.22.5.5v1a.5.5 0 0 0 1 0v-1c0-.83-.67-1.5-1.5-1.5h-1ZM5 11.5a.5.5 0 0 0-1 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 1-.5-.5v-1Zm11 0a.5.5 0 0 0-1 0v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1c.83 0 1.5-.67 1.5-1.5v-1ZM2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm1 0v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm2.5 0C4.67 6 4 6.67 4 7.5v1a.5.5 0 0 0 1 0v-1c0-.28.22-.5.5-.5h1a.5.5 0 0 0 0-1h-1ZM5 11.5a.5.5 0 0 0-1 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 1-.5-.5v-1Z"])));
const PageFit24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PageFit24Filled', "24", ["M18.25 4A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25v-8.5A3.75 3.75 0 0 1 5.75 4h12.5Zm0 9c-.38 0-.7.28-.74.65l-.01.1V15a.5.5 0 0 1-.41.5h-1.34a.75.75 0 0 0-.1 1.5H17a2 2 0 0 0 2-1.85v-1.4a.75.75 0 0 0-.75-.75Zm-12.5 0c-.38 0-.7.28-.74.65l-.01.1V15a2 2 0 0 0 1.85 2h1.4a.75.75 0 0 0 .1-1.5H7a.5.5 0 0 1-.5-.41v-1.34a.75.75 0 0 0-.75-.75Zm2.5-6h-1.4a2 2 0 0 0-1.84 1.84L5 9v1.35a.75.75 0 0 0 1.5 0V8.91a.5.5 0 0 1 .41-.4L7 8.5h1.35a.75.75 0 0 0 0-1.5h-.1ZM17 7h-1.25a.75.75 0 0 0-.1 1.5H17a.5.5 0 0 1 .5.41v1.34a.75.75 0 0 0 1.5.1V9a2 2 0 0 0-1.85-2H17Z"])));
const PageFit24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PageFit24Regular', "24", ["M18.25 4A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25v-8.5A3.75 3.75 0 0 1 5.75 4h12.5Zm0 1.5H5.75c-1.24 0-2.25 1-2.25 2.25v8.5c0 1.24 1 2.25 2.25 2.25h12.5c1.24 0 2.25-1 2.25-2.25v-8.5c0-1.24-1-2.25-2.25-2.25Zm0 7.5c.41 0 .75.34.75.75V15a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5H17a.5.5 0 0 0 .5-.5v-1.25c0-.41.34-.75.75-.75Zm-12.5 0c.41 0 .75.34.75.75V15c0 .28.22.5.5.5h1.25a.75.75 0 0 1 0 1.5H7a2 2 0 0 1-2-2v-1.25c0-.41.34-.75.75-.75ZM7 7h1.25a.75.75 0 0 1 .1 1.5H7a.5.5 0 0 0-.5.41v1.34a.75.75 0 0 1-1.5.1V9a2 2 0 0 1 1.85-2H7Zm10 0a2 2 0 0 1 2 2v1.25a.75.75 0 0 1-1.5 0V9a.5.5 0 0 0-.5-.5h-1.25a.75.75 0 0 1 0-1.5H17Z"])));
const PaintBrush16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrush16Filled', "16", ["M8 1v2.5a.5.5 0 0 0 1 0V1h1v3.5a.5.5 0 0 0 1 0V1h1.5v6h-9V1H8ZM3.5 8v.5c0 1.1.9 2 2 2h1v3a1.5 1.5 0 0 0 3 0v-3h1a2 2 0 0 0 2-2V8h-9Z"])));
const PaintBrush16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrush16Regular', "16", ["M4 1a.5.5 0 0 0-.5.5v7c0 1.1.9 2 2 2H6V13a2 2 0 1 0 4 0v-2.5h.5a2 2 0 0 0 2-2v-7A.5.5 0 0 0 12 1H4Zm7.5 6h-7V2h3v1.5a.5.5 0 1 0 1 0V2h1v2.5a.5.5 0 0 0 1 0V2h1v5Zm-7 1.5V8h7v.5a1 1 0 0 1-1 1h-1a.5.5 0 0 0-.5.5v3a1 1 0 0 1-2 0v-3a.5.5 0 0 0-.5-.5h-1a1 1 0 0 1-1-1Z"])));
const PaintBrush20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrush20Filled', "20", ["M10 4.5V2H5.5a.5.5 0 0 0-.5.5V9h10V2.5a.5.5 0 0 0-.5-.5H13v3.5a.5.5 0 0 1-1 0V2h-1v2.5a.5.5 0 0 1-1 0Zm5 5.5H5v1c0 1.1.9 2 2 2h1.5v3.5a1.5 1.5 0 1 0 3 0V13H13a2 2 0 0 0 2-2v-1Z"])));
const PaintBrush20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrush20Regular', "20", ["M5.5 2a.5.5 0 0 0-.5.5V11c0 1.1.9 2 2 2h1v3a2 2 0 1 0 4 0v-3h1a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5h-9Zm.5 8h8v1a1 1 0 0 1-1 1h-1.5a.5.5 0 0 0-.5.5V16a1 1 0 1 1-2 0v-3.5a.5.5 0 0 0-.5-.5H7a1 1 0 0 1-1-1v-1Zm8-1H6V3h4v1.5a.5.5 0 0 0 1 0V3h1v2.5a.5.5 0 0 0 1 0V3h1v6Z"])));
const PaintBrush24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrush24Filled', "24", ["M12.5 2v3.25a.75.75 0 0 0 1.5 0V2h1v4.25a.75.75 0 0 0 1.5 0V2h1.75c.41 0 .75.34.75.75V11H5V2.75c0-.41.34-.75.75-.75h6.75ZM5 12.5v1.75c0 1.24 1 2.25 2.25 2.25H10V20a2 2 0 1 0 4 0v-3.5h2.75c1.24 0 2.25-1 2.25-2.25V12.5H5Z"])));
const PaintBrush24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrush24Regular', "24", ["M5.75 2a.75.75 0 0 0-.75.75v11.5c0 1.24 1 2.25 2.25 2.25H9.5v3a2.5 2.5 0 1 0 5 0v-3h2.25c1.24 0 2.25-1 2.25-2.25V2.75a.75.75 0 0 0-.75-.75H5.75Zm.75 9V3.5h6v1.75a.75.75 0 1 0 1.5 0V3.5h1v2.75a.75.75 0 1 0 1.5 0V3.5h1V11h-11Zm0 3.25V12.5h11v1.75c0 .41-.34.75-.75.75h-3a.75.75 0 0 0-.75.75v3.75a1 1 0 0 1-2 0v-3.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 1-.75-.75Z"])));
const PaintBrushArrowDown20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrushArrowDown20Filled', "20", ["M3.57 17.24A.5.5 0 0 0 4 18h1.7l.02-.03c.26-.54.55-1.14.79-1.71.3-.73.49-1.35.49-1.76a.5.5 0 0 1 1 0c0 .63-.27 1.41-.57 2.14-.19.46-.4.92-.61 1.36H8c.2-.39.43-.8.61-1.21.24-.54.39-.99.39-1.29a.5.5 0 0 1 1 0c0 .53-.23 1.15-.48 1.7-.12.27-.25.54-.39.8h2.75l-.44-.44A1.5 1.5 0 0 1 13 15.1V13.5a1.5 1.5 0 0 1 2-1.41V11H5v.5a12.57 12.57 0 0 1-1.42 5.72v.02ZM5 10h10V9a2 2 0 0 0-2-2h-1V4a2 2 0 1 0-4 0v3H7a2 2 0 0 0-2 2v1Zm10 3.5a.5.5 0 0 0-1 0v3.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 0 0-.7-.7L15 17.29V13.5Z"])));
const PaintBrushArrowDown20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrushArrowDown20Regular', "20", ["M9 4v3.5a.5.5 0 0 1-.5.5H7a1 1 0 0 0-1 1v1h8V9a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1-.5-.5V4a1 1 0 1 0-2 0Zm6 5v1.47a.57.57 0 0 1 0 .06v1.56a1.5 1.5 0 0 0-1 0V11H6v.5A13.57 13.57 0 0 1 4.8 17h1.37l.02-.04a16.46 16.46 0 0 0 .66-1.7A3 3 0 0 0 7 14.5a.5.5 0 0 1 1 0c0 .32-.08.69-.18 1.03A10.96 10.96 0 0 1 7.28 17h1.24l.18-.42c.17-.4.3-.83.3-1.08a.5.5 0 0 1 1 0c0 .47-.2 1.05-.37 1.46L9.6 17h1.48c.07.2.19.4.35.56l.44.44H4a.5.5 0 0 1-.43-.76l.01-.02a3.9 3.9 0 0 0 .2-.38A12.57 12.57 0 0 0 5 11.5V9c0-1.1.9-2 2-2h1V4a2 2 0 0 1 4 0v3h1a2 2 0 0 1 2 2Zm0 4.5a.5.5 0 0 0-1 0v3.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 0 0-.7-.7L15 17.29V13.5Z"])));
const PaintBrushArrowDown24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrushArrowDown24Filled', "24", ["M10 4a2 2 0 1 1 4 0v3.5h2.75c1.24 0 2.25 1 2.25 2.25v1.75H5.09c.01-.72 0-1.35-.02-1.87A2.06 2.06 0 0 1 7.11 7.5H10V4Zm-4.96 9H19v1.15a1.74 1.74 0 0 0-2.45 1.6v2.44a1.75 1.75 0 0 0-2.04 2.8L15.53 22h-4.98c.17-.38.36-.87.54-1.39a9.53 9.53 0 0 0 .41-1.84v-.02a.75.75 0 1 0-1.5.03l-.04.23c-.04.23-.12.6-.3 1.13A16.83 16.83 0 0 1 8.91 22H7.57l.4-.93c.4-.97.88-2.23 1.02-3.21a.75.75 0 0 0-1.48-.22c-.11.77-.51 1.88-.92 2.85A32.38 32.38 0 0 1 5.91 22H3.75a.75.75 0 0 1-.63-1.16c.95-1.46 1.47-3.58 1.73-5.73.1-.72.15-1.43.19-2.11Zm10.18 6.22c.3-.3.77-.3 1.06 0l1.27 1.27v-4.74a.75.75 0 0 1 1.5 0v4.64l1.17-1.17a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 0-1.06Z"])));
const PaintBrushArrowDown24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrushArrowDown24Regular', "24", ["M12 2a2.5 2.5 0 0 0-2.5 2.5v3H7.11c-1.17 0-2.08 1-2.04 2.13.04 1.3.05 3.36-.22 5.48-.26 2.15-.78 4.27-1.73 5.73A.75.75 0 0 0 3.75 22h11.78l-1.02-1.01a1.75 1.75 0 0 1-.34-.49h-3.04l.35-1.59a.75.75 0 0 0-1.46-.32l-.43 1.91H8.3a13.66 13.66 0 0 0 .7-2.64.75.75 0 0 0-1.48-.22 10.67 10.67 0 0 1-.83 2.8l-.02.06H5a18.05 18.05 0 0 0 1.33-5.2c.1-.79.16-1.57.2-2.3H17.5v1.2a1.74 1.74 0 0 1 1.5-.05v-4.4c0-1.24-1-2.25-2.25-2.25H14.5v-3A2.5 2.5 0 0 0 12 2Zm5.5 9.5H6.59c.01-.74 0-1.4-.02-1.92A.56.56 0 0 1 7.11 9h3.14c.41 0 .75-.34.75-.75V4.5a1 1 0 1 1 2 0v3.75c0 .41.34.75.75.75h3c.41 0 .75.34.75.75v1.75Zm-2.28 7.72c.3-.3.77-.3 1.06 0l1.27 1.27v-4.74a.75.75 0 0 1 1.5 0v4.64l1.17-1.17a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 0-1.06Z"])));
const PaintBrushArrowUp20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrushArrowUp20Filled', "20", ["M3.57 17.24A.5.5 0 0 0 4 18h1.7l.02-.03c.26-.54.55-1.14.79-1.71.3-.73.49-1.35.49-1.76a.5.5 0 0 1 1 0c0 .63-.27 1.41-.57 2.14-.19.46-.4.92-.61 1.36H8c.2-.39.43-.8.61-1.21.24-.54.39-.99.39-1.29a.5.5 0 0 1 1 0c0 .53-.23 1.15-.48 1.7-.12.27-.25.54-.39.8H13v-1.09a1.5 1.5 0 0 1-1.56-2.47l2-2a1.5 1.5 0 0 1 1.56-.35V11H5v.5a12.57 12.57 0 0 1-1.42 5.72v.02ZM5 10h10V9a2 2 0 0 0-2-2h-1V4a2 2 0 1 0-4 0v3H7a2 2 0 0 0-2 2v1Zm10 4.7v3.8a.5.5 0 0 1-1 0v-3.8l-1.15 1.15a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L15 14.71Z"])));
const PaintBrushArrowUp20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrushArrowUp20Regular', "20", ["M9 4v3.5a.5.5 0 0 1-.5.5H7a1 1 0 0 0-1 1v1h8V9a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1-.5-.5V4a1 1 0 1 0-2 0Zm6 5v1.47a.57.57 0 0 1 0 .06v1.56a1.5 1.5 0 0 0-1 0V11H6v.5A13.57 13.57 0 0 1 4.8 17h1.37l.02-.04a16.46 16.46 0 0 0 .66-1.7A3 3 0 0 0 7 14.5a.5.5 0 0 1 1 0c0 .32-.08.69-.18 1.03A10.96 10.96 0 0 1 7.28 17h1.24l.18-.42c.17-.4.3-.83.3-1.08a.5.5 0 0 1 1 0c0 .47-.2 1.05-.37 1.46L9.6 17H13v1H4a.5.5 0 0 1-.43-.76l.01-.02a3.9 3.9 0 0 0 .2-.38A12.57 12.57 0 0 0 5 11.5V9c0-1.1.9-2 2-2h1V4a2 2 0 0 1 4 0v3h1a2 2 0 0 1 2 2Zm0 5.7v3.8a.5.5 0 0 1-1 0v-3.8l-1.15 1.15a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L15 14.71Z"])));
const PaintBrushArrowUp24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrushArrowUp24Filled', "24", ["M12 2a2 2 0 0 0-2 2v3.5H7.11c-1.17 0-2.08 1-2.04 2.13.02.4.02 1.36.02 1.87H19V9.75c0-1.24-1-2.25-2.25-2.25H14V4a2 2 0 0 0-2-2ZM4.85 15.11c.1-.72.19-2.11.19-2.11H19v1.17a1.75 1.75 0 0 0-1.99.34l-2.5 2.5a1.75 1.75 0 0 0 2.04 2.8V22h-6c.17-.38.36-.87.54-1.39a9.53 9.53 0 0 0 .41-1.84v-.02s0-.75-.75-.75a.75.75 0 0 0-.75.78l-.04.23c-.04.23-.12.6-.3 1.13A16.83 16.83 0 0 1 8.91 22H7.57l.4-.93c.4-.97.88-2.23 1.02-3.21a.75.75 0 0 0-1.48-.22c-.11.77-.51 1.88-.92 2.85A32.38 32.38 0 0 1 5.91 22H3.75a.75.75 0 0 1-.63-1.16c.95-1.46 1.47-3.58 1.73-5.73Zm11.43 3.67a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L19 17.56v4.69a.75.75 0 0 1-1.5 0v-4.69l-1.22 1.22Z"])));
const PaintBrushArrowUp24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBrushArrowUp24Regular', "24", ["M12 2a2.5 2.5 0 0 0-2.5 2.5v3H7.11c-1.17 0-2.08 1-2.04 2.13.04 1.3.05 3.36-.22 5.48-.26 2.15-.78 4.27-1.73 5.73A.75.75 0 0 0 3.75 22h12.8v-1.5h-5.42l.35-1.59a.75.75 0 0 0-1.46-.32l-.43 1.91H8.3a13.66 13.66 0 0 0 .7-2.64.75.75 0 0 0-1.48-.22 10.67 10.67 0 0 1-.83 2.8l-.02.06H5a18.05 18.05 0 0 0 1.33-5.2c.1-.79.16-1.57.2-2.3H17.5v1.17a1.75 1.75 0 0 1 1.5 0V9.75c0-1.24-1-2.25-2.25-2.25H14.5v-3A2.5 2.5 0 0 0 12 2Zm5.5 9.5H6.59c.01-.74 0-1.4-.02-1.92A.56.56 0 0 1 7.11 9h3.14c.41 0 .75-.34.75-.75V4.5a1 1 0 1 1 2 0v3.75c0 .41.34.75.75.75h3c.41 0 .75.34.75.75v1.75Zm-2.28 7.28c.3.3.77.3 1.06 0l1.27-1.27v4.74a.75.75 0 0 0 1.5 0v-4.64l1.17 1.17a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5c-.3.3-.3.77 0 1.06Z"])));
const PaintBucket16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBucket16Filled', "16", ["M8 1.5a.5.5 0 0 0-1 0v.84c-.25.06-.49.2-.69.39L1.34 7.71a1.5 1.5 0 0 0-.03 2.1l3.62 3.8a1.5 1.5 0 0 0 2.15.02l5.07-5.07a1.5 1.5 0 0 0 0-2.12L8.43 2.73a1.5 1.5 0 0 0-.43-.3V1.5ZM11.3 8H2.45L7 3.46V4.5a.5.5 0 1 0 1 0v-.79l3.44 3.44c.2.2.2.5 0 .7l-.15.15Zm1.62 2.22a.56.56 0 0 0-.84 0l-1.15 1.32a2.09 2.09 0 1 0 3.14 0l-1.15-1.32Z"])));
const PaintBucket16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBucket16Regular', "16", ["M7.5 1c.28 0 .5.22.5.5v.93c.16.07.3.17.43.3l3.72 3.7a1.5 1.5 0 0 1 0 2.13l-5.07 5.07c-.6.6-1.57.58-2.15-.03L1.31 9.8a1.5 1.5 0 0 1 .03-2.1L6.3 2.74c.2-.2.44-.33.69-.4V1.5c0-.28.22-.5.5-.5ZM7 4.5V3.46L2.46 8h8.83l.15-.15a.5.5 0 0 0 0-.7L8 3.7v.79a.5.5 0 0 1-1 0ZM1.95 9a.5.5 0 0 0 .09.11l3.62 3.8c.19.2.51.21.71.01L10.3 9H1.95Zm10.97 1.22a.56.56 0 0 0-.84 0l-1.15 1.32a2.09 2.09 0 1 0 3.14 0l-1.15-1.32Zm-1.24 1.98.82-.94.82.94a1.09 1.09 0 1 1-1.64 0Z"])));
const PaintBucket20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBucket20Filled', "20", ["M9 2.5a.5.5 0 0 0-1 0V4c-.2.07-.4.19-.56.35L2.35 9.44a1.5 1.5 0 0 0 0 2.12L6.7 15.9a1.5 1.5 0 0 0 2.12 0l5.09-5.09a1.5 1.5 0 0 0 0-2.12L9.56 4.35A1.5 1.5 0 0 0 9 4V2.5Zm4.27 7.5H3.2L8 5.2v1.3a.5.5 0 0 0 1 0V5.2l4.19 4.2a.5.5 0 0 1 .08.6Zm2.75 1.4a.6.6 0 0 0-1.04 0l-1.65 2.82a2.51 2.51 0 1 0 4.34 0l-1.65-2.83Z"])));
const PaintBucket20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBucket20Regular', "20", ["M9 2.5a.5.5 0 0 0-1 0V4c-.2.07-.4.19-.56.35L2.35 9.44a1.5 1.5 0 0 0 0 2.12L6.7 15.9a1.5 1.5 0 0 0 2.12 0l5.09-5.09a1.5 1.5 0 0 0 0-2.12L9.56 4.35A1.5 1.5 0 0 0 9 4V2.5ZM8 5.2v1.3a.5.5 0 0 0 1 0V5.2l4.19 4.2a.5.5 0 0 1 .08.6H3.2L8 5.2Zm-.6 9.99L3.2 11h9.1l-4.2 4.19a.5.5 0 0 1-.7 0Zm8.62-3.8a.6.6 0 0 0-1.04 0l-1.65 2.83a2.51 2.51 0 1 0 4.34 0l-1.65-2.83Zm-1.82 3.34 1.3-2.24 1.3 2.24a1.51 1.51 0 1 1-2.6 0Z"])));
const PaintBucket24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBucket24Filled', "24", ["M12 2.25a.75.75 0 0 0-1.5 0V3.5c-.3.1-.6.28-.84.53l-6.88 6.88c-.88.88-.88 2.3 0 3.18l4.88 4.88c.88.88 2.3.88 3.18 0l6.88-6.88c.88-.88.88-2.3 0-3.18l-4.88-4.88A2.24 2.24 0 0 0 12 3.5V2.25Zm-1.5 3.06v1.44a.75.75 0 0 0 1.5 0V5.31l4.66 4.66c.3.3.3.77 0 1.06l-.97.97H3.8l.03-.03 6.66-6.66Zm9.02 8.3a.87.87 0 0 0-1.54 0l-2 3.76a3.15 3.15 0 1 0 5.55 0l-2-3.77Z"])));
const PaintBucket24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PaintBucket24Regular', "24", ["M12 2.25a.75.75 0 0 0-1.5 0V3.5c-.3.1-.6.28-.84.53l-6.88 6.88c-.88.88-.88 2.3 0 3.18l4.88 4.88c.88.88 2.3.88 3.18 0l6.88-6.88c.88-.88.88-2.3 0-3.18l-4.88-4.88A2.24 2.24 0 0 0 12 3.5V2.25Zm-8.16 9.72 6.66-6.66v1.44a.75.75 0 0 0 1.5 0V5.31l4.66 4.66c.3.3.3.77 0 1.06l-.97.97H3.8l.03-.03Zm.47 1.53h9.88l-4.41 4.4c-.3.3-.77.3-1.06 0l-4.4-4.4Zm15.21.1a.87.87 0 0 0-1.54 0l-2 3.77a3.15 3.15 0 1 0 5.55 0l-2-3.77Zm-2.23 4.47 1.46-2.73 1.46 2.73a1.65 1.65 0 1 1-2.92 0Z"])));
const Pair20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pair20Filled', "20", ["M2 3.5c0 .56.3 1.04.75 1.3v6.4a1.5 1.5 0 1 0 2.05 2.05h1.95v1.95a1.5 1.5 0 1 0 2.05 2.05h6.4a1.5 1.5 0 1 0 2.05-2.05V8.8a1.5 1.5 0 1 0-2.05-2.05h-1.95V4.8a1.5 1.5 0 1 0-2.05-2.05H4.8A1.5 1.5 0 0 0 2 3.5Zm6.8 12.25a1.5 1.5 0 0 0-.55-.55v-1.95h2.95a1.5 1.5 0 1 0 2.05-2.05V8.25h1.95c.13.23.32.42.55.55v6.4a1.5 1.5 0 0 0-.55.55H8.8ZM4.25 11.2V4.8c.23-.13.42-.32.55-.55h6.4c.13.23.32.42.55.55v1.95H8.8A1.5 1.5 0 1 0 6.75 8.8v2.95H4.8a1.5 1.5 0 0 0-.55-.55Zm7.5 0a1.5 1.5 0 0 0-.55.55H8.25V8.8c.23-.13.42-.32.55-.55h2.95v2.95Z"])));
const Pair20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pair20Regular', "20", ["M2 3.5c0 .65.42 1.2 1 1.41v6.18A1.5 1.5 0 1 0 4.91 13H7v2.09A1.5 1.5 0 1 0 8.91 17h6.18A1.5 1.5 0 1 0 17 15.09V8.9A1.5 1.5 0 1 0 15.09 7H13V4.91A1.5 1.5 0 1 0 11.09 3H4.9A1.5 1.5 0 0 0 2 3.5ZM8.91 16a1.5 1.5 0 0 0-.91-.91V13h3.09A1.5 1.5 0 1 0 13 11.09V8h2.09c.15.43.48.76.91.91v6.18a1.5 1.5 0 0 0-.91.91H8.9ZM4 11.09V4.9c.43-.15.76-.48.91-.91h6.18c.15.43.48.76.91.91V7H8.91A1.5 1.5 0 1 0 7 8.91V12H4.91a1.5 1.5 0 0 0-.91-.91Zm8 0a1.5 1.5 0 0 0-.91.91H8V8.91c.43-.15.76-.48.91-.91H12v3.09Z"])));
const Pair24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pair24Filled', "24", ["M18.27 21h-6.54A2 2 0 1 1 9 18.27V15H5.73a2 2 0 0 1-1.58 1H4a2 2 0 0 1-1-3.73V5.73A2 2 0 1 1 5.73 3h6.54A2 2 0 1 1 15 5.73V9h3.27a2 2 0 0 1 1.58-1H20a2 2 0 0 1 1 3.73v6.54A2 2 0 1 1 18.27 21h-6.54 6.54Zm0-10H15v1.27a2 2 0 0 1 1 1.58V14a2 2 0 0 1-3.73 1H11v3.27a2 2 0 0 1 .73.73h6.54c.17-.3.43-.56.73-.73v-6.54a2.01 2.01 0 0 1-.64-.58l-.1-.15ZM13 11h-1.27c-.17.3-.43.56-.73.73V13h1.27c.17-.3.43-.56.73-.73V11Zm-.73-6H5.73c-.17.3-.43.56-.73.73v6.54c.3.17.56.43.73.73H9v-1.27a2 2 0 0 1-1-1.58V10a2 2 0 0 1 3.73-1H13V5.73a2.01 2.01 0 0 1-.64-.58l-.1-.15Z"])));
const Pair24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pair24Regular', "24", ["M18.67 21h-7.34a1.75 1.75 0 1 1-2.32-2.33v-3.68H5.33c-.26.56-.8.95-1.44 1l-.14.01A1.75 1.75 0 0 1 3 12.67V5.33A1.75 1.75 0 1 1 5.33 3h7.34A1.75 1.75 0 1 1 15 5.33V9h3.67c.26-.55.8-.94 1.44-1h.14a1.75 1.75 0 0 1 .75 3.33v7.34A1.75 1.75 0 1 1 18.67 21h-7.34 7.34Zm0-10.5H15v2.16c.56.27.95.8 1 1.44v.14a1.75 1.75 0 0 1-3.33.76h-2.15v3.67c.36.17.65.47.82.83h7.34c.17-.36.47-.66.83-.83v-7.34a1.76 1.76 0 0 1-.75-.67l-.08-.16Zm-5.18 0h-2.16c-.17.36-.46.66-.82.83v2.16h2.15c.18-.36.47-.65.84-.83V10.5Zm-.82-6H5.33c-.17.36-.47.66-.83.83v7.34c.36.17.66.46.83.83H9v-2.17c-.56-.26-.95-.8-1-1.44L8 9.75A1.75 1.75 0 0 1 11.33 9h2.16V5.33a1.76 1.76 0 0 1-.74-.68l-.08-.15Z"])));
const PanelBottom20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelBottom20Filled', "20", ["M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v5h14V6a2 2 0 0 0-2-2H5Z"])));
const PanelBottom20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelBottom20Regular', "20", ["M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5ZM3 6c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v5H3V6Zm0 6h14v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Z"])));
const PanelBottomContract20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelBottomContract20Filled', "20", ["m10.5 11.17.87-1a.5.5 0 0 1 .76.66l-1.75 2a.5.5 0 0 1-.76 0l-1.75-2a.5.5 0 1 1 .76-.65l.87 1V7.5a.5.5 0 1 1 1 0v3.67ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-3.83a1.5 1.5 0 0 1-.3.5l-1.74 2a1.5 1.5 0 0 1-2.26 0l-1.75-2a1.5 1.5 0 0 1-.29-.5H3V6Z"])));
const PanelBottomContract20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelBottomContract20Regular', "20", ["m10.5 11.17.87-1a.5.5 0 0 1 .76.66l-1.75 2a.5.5 0 0 1-.76 0l-1.75-2a.5.5 0 1 1 .76-.65l.87 1V7.5a.5.5 0 1 1 1 0v3.67ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-3.83a1.5 1.5 0 0 1-.3.5l-.44.5H17v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2h4.57l-.45-.5a1.5 1.5 0 0 1-.29-.5H3V6Z"])));
const PanelBottomExpand20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelBottomExpand20Filled', "20", ["m10.5 8.83.87 1a.5.5 0 0 0 .76-.66l-1.75-2a.5.5 0 0 0-.76 0l-1.75 2a.5.5 0 0 0 .76.65l.87-1v3.68a.5.5 0 0 0 1 0V8.83ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-5.5v1.5a1.5 1.5 0 1 1-3 0V11H3V6Z"])));
const PanelBottomExpand20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelBottomExpand20Regular', "20", ["m10.5 8.83.87 1a.5.5 0 0 0 .76-.66l-1.75-2a.5.5 0 0 0-.76 0l-1.75 2a.5.5 0 0 0 .76.65l.87-1v3.68a.5.5 0 0 0 1 0V8.83ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-5.5v1H17v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2h5.5v-1H3V6Z"])));
const PanelLeft16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft16Filled', "16", ["M4.5 3A2.5 2.5 0 0 0 2 5.5v5A2.5 2.5 0 0 0 4.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 11.5 3h-7ZM7 4h4.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H7V4Z"])));
const PanelLeft16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft16Regular', "16", ["M2 5.5A2.5 2.5 0 0 1 4.5 3h7A2.5 2.5 0 0 1 14 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 10.5v-5ZM7 4v8h4.5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H7ZM6 4H4.5C3.67 4 3 4.67 3 5.5v5c0 .83.67 1.5 1.5 1.5H6V4Z"])));
const PanelLeft20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft20Filled', "20", ["M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Zm10 1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.5V4H15Z"])));
const PanelLeft20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft20Regular', "20", ["M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Zm6.5-2v11H15a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8.5Zm-1 0H5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2.5V4Z"])));
const PanelLeft24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft24Filled', "24", ["M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25Zm13.5 1.5c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75H9.5v-13h9.25Z"])));
const PanelLeft24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft24Regular', "24", ["M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM9.5 5.5v13h9.25c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75H9.5ZM8 5.5H5.25c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75H8v-13Z"])));
const PanelLeft28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft28Filled', "28", ["M2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v11.5A3.75 3.75 0 0 1 22.25 23H5.75A3.75 3.75 0 0 1 2 19.25V7.75ZM22.25 21.5c1.24 0 2.25-1 2.25-2.25V7.75c0-1.24-1-2.25-2.25-2.25H10.5v16h11.75Z"])));
const PanelLeft28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft28Regular', "28", ["M5.75 4A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h16.5A3.75 3.75 0 0 0 26 19.25V7.75A3.75 3.75 0 0 0 22.25 4H5.75ZM3.5 7.75c0-1.24 1.01-2.25 2.25-2.25H9v16H5.75c-1.24 0-2.25-1-2.25-2.25V7.75Zm7 13.75v-16h11.75c1.24 0 2.25 1 2.25 2.25v11.5c0 1.24-1 2.25-2.25 2.25H10.5Z"])));
const PanelLeft32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft32Filled', "32", ["M25.5 28a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4h-19A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19Zm0-22A2.5 2.5 0 0 1 28 8.5v15a2.5 2.5 0 0 1-2.5 2.5H12V6h13.5Z"])));
const PanelLeft32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft32Regular', "32", ["M12 6v20h13.5a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 25.5 6H12Zm-2 0H6.5A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26H10V6ZM2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5v-15Z"])));
const PanelLeft48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft48Filled', "48", ["M4 13.25C4 9.8 6.8 7 10.25 7h27.5C41.2 7 44 9.8 44 13.25v21.5C44 38.2 41.2 41 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75v-21.5ZM37.75 38.5a3.75 3.75 0 0 0 3.75-3.75v-21.5a3.75 3.75 0 0 0-3.75-3.75h-19.5v29h19.5Z"])));
const PanelLeft48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeft48Regular', "48", ["M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5C4 38.2 6.8 41 10.25 41h27.5C41.2 41 44 38.2 44 34.75v-21.5C44 9.8 41.2 7 37.75 7h-27.5ZM6.5 13.25a3.75 3.75 0 0 1 3.75-3.75h5.5v29h-5.5a3.75 3.75 0 0 1-3.75-3.75v-21.5ZM18.25 38.5v-29h19.5a3.75 3.75 0 0 1 3.75 3.75v21.5a3.75 3.75 0 0 1-3.75 3.75h-19.5Z"])));
const PanelLeftAdd16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd16Filled', "16", ["M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12h2.52a5.57 5.57 0 0 1 0-1H6V3h4.5c.83 0 1.5.67 1.5 1.5v1.52c.34.03.68.1 1 .19V4.5A2.5 2.5 0 0 0 10.5 2h-7ZM16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z"])));
const PanelLeftAdd16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd16Regular', "16", ["M1 4.5A2.5 2.5 0 0 1 3.5 2h7A2.5 2.5 0 0 1 13 4.5v1.7c-.32-.08-.66-.15-1-.18V4.5c0-.83-.67-1.5-1.5-1.5H6v8h.02a5.57 5.57 0 0 0 0 1H3.5A2.5 2.5 0 0 1 1 9.5v-5ZM5 3H3.5C2.67 3 2 3.67 2 4.5v5c0 .83.67 1.5 1.5 1.5H5V3Zm11 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z"])));
const PanelLeftAdd20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd20Filled', "20", ["M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.2c-.08-.32-.15-.66-.18-1H8.5V4H15a2 2 0 0 1 2 2v3.6c.36.18.7.4 1 .66V6a3 3 0 0 0-3-3H5Zm14 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"])));
const PanelLeftAdd20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd20Regular', "20", ["M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4.26a5.5 5.5 0 0 0-1-.66V6a2 2 0 0 0-2-2H8.5v11h.52c.03.34.1.68.19 1H5a3 3 0 0 1-3-3V6Zm5.5-2H5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2.5V4ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"])));
const PanelLeftAdd24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd24Filled', "24", ["M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h6.25c-.2-.47-.34-.98-.42-1.5H9.5v-13h9.25c.97 0 1.75.78 1.75 1.75v4.48c.55.29 1.06.65 1.5 1.08V7.25C22 5.45 20.54 4 18.75 4H5.25ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z"])));
const PanelLeftAdd24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd24Regular', "24", ["M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v5.56a6.52 6.52 0 0 0-1.5-1.08V7.25c0-.97-.78-1.75-1.75-1.75H9.5v13h1.58c.08.52.22 1.03.42 1.5H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM8 5.5H5.25c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75H8v-13Zm15 12a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z"])));
const PanelLeftAdd28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd28Filled', "28", ["M2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v7.65c-.44-.48-.95-.9-1.5-1.25v-6.4c0-1.24-1-2.25-2.25-2.25H10.5v16h2.57c.07.52.19 1.02.36 1.5H5.75A3.75 3.75 0 0 1 2 19.25V7.75ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"])));
const PanelLeftAdd28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd28Regular', "28", ["M5.75 4A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h7.67c-.17-.48-.29-.98-.36-1.5H10.5v-16h11.75c1.24 0 2.25 1 2.25 2.25v6.4c.55.35 1.05.77 1.5 1.25V7.75A3.75 3.75 0 0 0 22.25 4H5.75ZM3.5 7.75c0-1.24 1-2.25 2.25-2.25H9v16H5.75c-1.24 0-2.25-1-2.25-2.25V7.75ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"])));
const PanelLeftAdd32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd32Filled', "32", ["M6.5 28h9.02a8.97 8.97 0 0 1-1-2H12V6h13.5A2.5 2.5 0 0 1 28 8.5v7.02c.76.5 1.43 1.12 2 1.82V8.5A4.5 4.5 0 0 0 25.5 4h-19A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28ZM23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0Z"])));
const PanelLeftAdd32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd32Regular', "32", ["M12 6h13.5A2.5 2.5 0 0 1 28 8.5v7.02c.76.5 1.43 1.12 2 1.82V8.5A4.5 4.5 0 0 0 25.5 4h-19A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h9.02a8.97 8.97 0 0 1-1-2H12V6Zm-2 0v20H6.5A2.5 2.5 0 0 1 4 23.5v-15A2.5 2.5 0 0 1 6.5 6H10Zm13 24.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0Z"])));
const PanelLeftAdd48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd48Filled', "48", ["M4 13.25C4 9.8 6.8 7 10.25 7h27.5C41.2 7 44 9.8 44 13.25v12.37c-.75-.72-1.6-1.36-2.5-1.88V13.25a3.75 3.75 0 0 0-3.75-3.75h-19.5v29h4.23c.24.87.57 1.71.98 2.5H10.25A6.25 6.25 0 0 1 4 34.75v-21.5ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z"])));
const PanelLeftAdd48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftAdd48Regular', "48", ["M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5C4 38.2 6.8 41 10.25 41h13.21c-.4-.79-.74-1.63-.98-2.5h-4.23v-29h19.5a3.75 3.75 0 0 1 3.75 3.75v10.49c.9.52 1.75 1.16 2.5 1.88V13.25C44 9.8 41.2 7 37.75 7h-27.5ZM6.5 13.25a3.75 3.75 0 0 1 3.75-3.75h5.5v29h-5.5a3.75 3.75 0 0 1-3.75-3.75v-21.5ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z"])));
const PanelLeftContract16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftContract16Filled', "16", ["m9.7 8.5.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 0 1 .7.7l-.64.65h1.79a.5.5 0 0 1 0 1H9.7ZM4 3a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm3 9V4h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7Z"])));
const PanelLeftContract16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftContract16Regular', "16", ["m9.7 8.5.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 0 1 .7.7l-.64.65h1.79a.5.5 0 0 1 0 1H9.7ZM4 3a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4ZM3 5a1 1 0 0 1 1-1h2v8H4a1 1 0 0 1-1-1V5Zm4 7V4h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7Z"])));
const PanelLeftContract20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftContract20Filled', "20", ["M10.82 10.5h3.68a.5.5 0 0 0 0-1h-3.68l1-.87a.5.5 0 1 0-.66-.76l-2 1.75a.5.5 0 0 0 0 .76l2 1.75a.5.5 0 1 0 .66-.76l-1-.87ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm4 11V5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8Z"])));
const PanelLeftContract20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftContract20Regular', "20", ["M10.82 10.5h3.68a.5.5 0 0 0 0-1h-3.68l1-.87a.5.5 0 1 0-.66-.76l-2 1.75a.5.5 0 0 0 0 .76l2 1.75a.5.5 0 1 0 .66-.76l-1-.87ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h3v10H4a1 1 0 0 1-1-1V6Zm5 9V5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8Z"])));
const PanelLeftContract24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftContract24Filled', "24", ["M14.8 9.25a.75.75 0 0 0-1.05-.06l-2.5 2.25a.75.75 0 0 0 0 1.12l2.5 2.25a.75.75 0 1 0 1-1.12l-1.05-.94h3.55a.75.75 0 0 0 0-1.5H13.7l1.05-.94c.31-.28.33-.75.06-1.06ZM2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75ZM9 5.5v13h10.25c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H9Z"])));
const PanelLeftContract24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftContract24Regular', "24", ["M14.8 9.25a.75.75 0 0 0-1.05-.06l-2.5 2.25a.75.75 0 0 0 0 1.12l2.5 2.25a.75.75 0 0 0 1-1.12l-1.05-.94h3.55a.75.75 0 1 0 0-1.5H13.7l1.05-.94c.31-.28.33-.75.06-1.06Zm-12.8 8A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4H4.75A2.75 2.75 0 0 0 2 6.75v10.5Zm2.75 1.25c-.69 0-1.25-.56-1.25-1.25V6.75c0-.7.56-1.25 1.25-1.25H8v13H4.75Zm4.75 0v-13h9.75c.69 0 1.25.56 1.25 1.25v10.5c0 .7-.56 1.25-1.25 1.25H9.5Z"])));
const PanelLeftContract28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftContract28Filled', "28", ["M17.28 11.53a.75.75 0 1 0-1.06-1.06l-3 3c-.3.3-.3.77 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72ZM22.25 4A3.75 3.75 0 0 1 26 7.75v12.5A3.75 3.75 0 0 1 22.25 24H5.75A3.75 3.75 0 0 1 2 20.25V7.75A3.75 3.75 0 0 1 5.75 4h16.5Zm2.25 3.75c0-1.24-1-2.25-2.25-2.25H11v17h11.25c1.24 0 2.25-1 2.25-2.25V7.75Z"])));
const PanelLeftContract28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftContract28Regular', "28", ["M17.28 11.53a.75.75 0 1 0-1.06-1.06l-3 3c-.3.3-.3.77 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72ZM26 7.75A3.75 3.75 0 0 0 22.25 4H5.75A3.75 3.75 0 0 0 2 7.75v12.5A3.75 3.75 0 0 0 5.75 24h16.5A3.75 3.75 0 0 0 26 20.25V7.75ZM22.25 5.5c1.24 0 2.25 1 2.25 2.25v12.5c0 1.24-1 2.25-2.25 2.25H11v-17h11.25ZM9.5 5.5v17H5.75c-1.24 0-2.25-1-2.25-2.25V7.75c0-1.24 1.01-2.25 2.25-2.25H9.5Z"])));
const PanelLeftExpand16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftExpand16Filled', "16", ["M8.5 7.5h1.8l-.66-.65a.5.5 0 0 1 .71-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 1 1-.7-.7l.64-.65H8.5a.5.5 0 0 1 0-1Z", "M2 5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm10-1H7v8h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"])));
const PanelLeftExpand16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftExpand16Regular', "16", ["m9.65 9.15.64-.65H8.5a.5.5 0 0 1 0-1h1.8l-.65-.65a.5.5 0 1 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 1 1-.7-.7Z", "M2 5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2V4H4Zm3 0v8h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7Z"])));
const PanelLeftExpand20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftExpand20Filled', "20", ["m13.18 10.5-1 .87a.5.5 0 0 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 1 0-.66.76l1 .87H9.5a.5.5 0 0 0 0 1h3.68ZM2 14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8Zm6 1V5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8Z"])));
const PanelLeftExpand20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftExpand20Regular', "20", ["m13.18 10.5-1 .87a.5.5 0 0 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 1 0-.66.76l1 .87H9.5a.5.5 0 0 0 0 1h3.68ZM2 14c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8Zm2 1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3v10H4Zm4 0V5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8Z"])));
const PanelLeftExpand24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftExpand24Filled', "24", ["M14.2 14.75c.27.3.74.33 1.05.06l2.5-2.25a.75.75 0 0 0 0-1.12l-2.5-2.25a.75.75 0 0 0-1 1.12l1.05.94h-3.55a.75.75 0 1 0 0 1.5h3.55l-1.05.94a.75.75 0 0 0-.06 1.06ZM2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75ZM9 5.5v13h10.25c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H9Z"])));
const PanelLeftExpand24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftExpand24Regular', "24", ["M14.2 14.75c.27.3.74.33 1.05.06l2.5-2.25a.75.75 0 0 0 0-1.12l-2.5-2.25a.75.75 0 0 0-1 1.12l1.05.94h-3.55a.75.75 0 1 0 0 1.5h3.55l-1.05.94a.75.75 0 0 0-.06 1.06ZM2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75ZM4.75 5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25H8v-13H4.75Zm4.75 0v13h9.75c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H9.5Z"])));
const PanelLeftExpand28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftExpand28Filled', "28", ["M17.72 11.53a.75.75 0 1 1 1.06-1.06l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72h-5.69a.75.75 0 0 1 0-1.5h5.69l-1.72-1.72ZM22.25 4A3.75 3.75 0 0 1 26 7.75v12.5A3.75 3.75 0 0 1 22.25 24H5.75A3.75 3.75 0 0 1 2 20.25V7.75A3.75 3.75 0 0 1 5.75 4h16.5Zm2.25 3.75c0-1.24-1-2.25-2.25-2.25H11v17h11.25c1.24 0 2.25-1 2.25-2.25V7.75Z"])));
const PanelLeftExpand28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftExpand28Regular', "28", ["M17.72 11.53a.75.75 0 1 1 1.06-1.06l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72h-5.69a.75.75 0 0 1 0-1.5h5.69l-1.72-1.72ZM26 7.75A3.75 3.75 0 0 0 22.25 4H5.75A3.75 3.75 0 0 0 2 7.75v12.5A3.75 3.75 0 0 0 5.75 24h16.5A3.75 3.75 0 0 0 26 20.25V7.75ZM22.25 5.5c1.24 0 2.25 1 2.25 2.25v12.5c0 1.24-1 2.25-2.25 2.25H11v-17h11.25ZM9.5 5.5v17H5.75c-1.24 0-2.25-1-2.25-2.25V7.75c0-1.24 1.01-2.25 2.25-2.25H9.5Z"])));
const PanelLeftFocusRight16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftFocusRight16Filled', "16", ["M12 13a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h8ZM6 4v8H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2Z"])));
const PanelLeftFocusRight20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftFocusRight20Filled', "20", ["M16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12ZM7 5v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3Z"])));
const PanelLeftFocusRight24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftFocusRight24Filled', "24", ["M19.25 20A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4H4.75A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h14.5ZM8 5.5v13H4.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25H8Z"])));
const PanelLeftFocusRight28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftFocusRight28Filled', "28", ["M2 20.25A3.75 3.75 0 0 0 5.75 24h16.5A3.75 3.75 0 0 0 26 20.25V7.75A3.75 3.75 0 0 0 22.25 4H5.75A3.75 3.75 0 0 0 2 7.75v12.5Zm3.75 2.25c-1.24 0-2.25-1-2.25-2.25V7.75c0-1.24 1.01-2.25 2.25-2.25H9v17H5.75Z"])));
const PanelLeftHeader16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader16Filled', "16", ["M2 5.5A2.5 2.5 0 0 1 4.5 3h7A2.5 2.5 0 0 1 14 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 10.5v-5Zm11 1v-1c0-.83-.67-1.5-1.5-1.5H7v2.5h6Zm-6 1V12h4.5c.83 0 1.5-.67 1.5-1.5v-3H7Z"])));
const PanelLeftHeader16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader16Regular', "16", ["M4.5 3A2.5 2.5 0 0 0 2 5.5v5A2.5 2.5 0 0 0 4.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 11.5 3h-7ZM13 6.5H7V4h4.5c.83 0 1.5.67 1.5 1.5v1ZM6 4v8H4.5A1.5 1.5 0 0 1 3 10.5v-5C3 4.67 3.67 4 4.5 4H6Zm1 3.5h6v3c0 .83-.67 1.5-1.5 1.5H7V7.5Z"])));
const PanelLeftHeader20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader20Filled', "20", ["M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Zm12 3v1H8.5V4H15a2 2 0 0 1 2 2Zm-2 9H8.5V8H17v5a2 2 0 0 1-2 2Z"])));
const PanelLeftHeader20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader20Regular', "20", ["M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Zm3.5 4V4H15a2 2 0 0 1 2 2v1H8.5Zm0 1H17v5a2 2 0 0 1-2 2H8.5V8ZM5 4h2.5v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z"])));
const PanelLeftHeader24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader24Filled', "24", ["M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5Zm18.5 0c0-.97-.78-1.75-1.75-1.75H9.5V9h11V7.25Zm0 3.25h-11v8h9.25c.97 0 1.75-.78 1.75-1.75V10.5Z"])));
const PanelLeftHeader24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader24Regular', "24", ["M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25Zm4.25 6.5h11v6.25c0 .97-.78 1.75-1.75 1.75H9.5v-8Zm11-1.5h-11V5.5h9.25c.97 0 1.75.78 1.75 1.75V9ZM5.25 5.5H8v13H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75Z"])));
const PanelLeftHeader28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader28Filled', "28", ["M5.75 4A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h16.5A3.75 3.75 0 0 0 26 19.25V7.75A3.75 3.75 0 0 0 22.25 4H5.75ZM24.5 19.25c0 1.24-1 2.25-2.25 2.25H10.5v-10h14v7.75Zm0-9.25h-14V5.5h11.75c1.24 0 2.25 1 2.25 2.25V10Z"])));
const PanelLeftHeader28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader28Regular', "28", ["M2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v11.5A3.75 3.75 0 0 1 22.25 23H5.75A3.75 3.75 0 0 1 2 19.25V7.75ZM5.75 5.5c-1.24 0-2.25 1-2.25 2.25v11.5c0 1.24 1.01 2.25 2.25 2.25H9v-16H5.75Zm4.75 6v10h11.75c1.24 0 2.25-1 2.25-2.25V11.5h-14Zm14-1.5V7.75c0-1.24-1-2.25-2.25-2.25H10.5V10h14Z"])));
const PanelLeftHeader32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader32Filled', "32", ["M30 23.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15Zm-2-15A2.5 2.5 0 0 0 25.5 6H12v5h16V8.5Zm0 4.5H12v13h13.5a2.5 2.5 0 0 0 2.5-2.5V13Z"])));
const PanelLeftHeader32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader32Regular', "32", ["M6.5 4A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4h-19Zm5.5 9h16v10.5a2.5 2.5 0 0 1-2.5 2.5H12V13Zm16-2H12V6h13.5A2.5 2.5 0 0 1 28 8.5V11ZM6.5 6H10v20H6.5A2.5 2.5 0 0 1 4 23.5v-15A2.5 2.5 0 0 1 6.5 6Z"])));
const PanelLeftHeader48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader48Filled', "48", ["M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5C4 38.2 6.8 41 10.25 41h27.5C41.2 41 44 38.2 44 34.75v-21.5C44 9.8 41.2 7 37.75 7h-27.5ZM41.5 34.75a3.75 3.75 0 0 1-3.75 3.75h-19.5v-18H41.5v14.25Zm0-16.75H18.25V9.5h19.5a3.75 3.75 0 0 1 3.75 3.75V18Z"])));
const PanelLeftHeader48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeader48Regular', "48", ["M4 13.25C4 9.8 6.8 7 10.25 7h27.5C41.2 7 44 9.8 44 13.25v21.5C44 38.2 41.2 41 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75v-21.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75h5.5v-29h-5.5Zm8 11v18h19.5a3.75 3.75 0 0 0 3.75-3.75V20.5H18.25Zm0-2.5H41.5v-4.75a3.75 3.75 0 0 0-3.75-3.75h-19.5V18Z"])));
const PanelLeftHeaderAdd16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd16Filled', "16", ["M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H6V6.5h7v-2A2.5 2.5 0 0 0 10.5 2h-7ZM12 5.5H6V3h4.5c.83 0 1.5.67 1.5 1.5v1ZM11.5 16a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm.5-6.5a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z"])));
const PanelLeftHeaderAdd16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd16Regular', "16", ["M1 4.5v5A2.5 2.5 0 0 0 3.5 12H6V6.5h7v-2A2.5 2.5 0 0 0 10.5 2h-7A2.5 2.5 0 0 0 1 4.5Zm11 0v1H6V3h4.5c.83 0 1.5.67 1.5 1.5ZM3.5 3H5v8H3.5A1.5 1.5 0 0 1 2 9.5v-5C2 3.67 2.67 3 3.5 3ZM7 11.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm5-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z"])));
const PanelLeftHeaderAdd20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd20Filled', "20", ["M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4.26a5.5 5.5 0 0 0-1-.66V8H8.5v7h.52c.03.34.1.68.19 1H5a3 3 0 0 1-3-3V6Zm15 0a2 2 0 0 0-2-2H8.5v3H17V6Zm2 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"])));
const PanelLeftHeaderAdd20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd20Regular', "20", ["M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.2c-.08-.32-.15-.66-.18-1H8.5V8H17v1.6c.36.18.7.4 1 .66V6a3 3 0 0 0-3-3H5Zm12 4H8.5V4H15a2 2 0 0 1 2 2v1ZM5 4h2.5v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm14 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"])));
const PanelLeftHeaderAdd24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd24Filled', "24", ["M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v5.56a6.52 6.52 0 0 0-1.5-1.08V10.5h-11v8h1.58c.08.52.22 1.03.42 1.5H5.25A3.25 3.25 0 0 1 2 16.75v-9.5Zm18.5 0c0-.97-.78-1.75-1.75-1.75H9.5V9h11V7.25ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z"])));
const PanelLeftHeaderAdd24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd24Regular', "24", ["M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h6.25c-.2-.47-.34-.98-.42-1.5H9.5v-8h11v1.23c.55.29 1.06.65 1.5 1.08V7.25C22 5.45 20.54 4 18.75 4H5.25ZM20.5 9h-11V5.5h9.25c.97 0 1.75.78 1.75 1.75V9ZM5.25 5.5H8v13H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z"])));
const PanelLeftHeaderAdd28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd28Filled', "28", ["M5.75 4A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h7.68c-.17-.48-.3-.98-.36-1.5H10.5v-10h14v2.65c.55.35 1.06.77 1.5 1.25V7.75A3.75 3.75 0 0 0 22.25 4H5.75Zm18.75 6h-14V5.5h11.75c1.24 0 2.25 1 2.25 2.25V10ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"])));
const PanelLeftHeaderAdd28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd28Regular', "28", ["M2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v7.65c-.44-.48-.95-.9-1.5-1.25V11.5h-14v10h2.57c.07.52.19 1.02.36 1.5H5.75A3.75 3.75 0 0 1 2 19.25V7.75Zm22.5 0c0-1.24-1-2.25-2.25-2.25H10.5V10h14V7.75ZM5.75 5.5c-1.24 0-2.25 1-2.25 2.25v11.5c0 1.24 1.01 2.25 2.25 2.25H9v-16H5.75ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"])));
const PanelLeftHeaderAdd32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd32Filled', "32", ["M12 13v13h2.51c.25.71.6 1.38 1 2H6.5A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v8.84a9.05 9.05 0 0 0-2-1.82V13H12Zm0-2h16V8.5A2.5 2.5 0 0 0 25.5 6H12v5Zm18.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0ZM24 18.25a.75.75 0 0 0-1.5 0V22h-3.75a.75.75 0 0 0 0 1.5h3.75v3.75a.75.75 0 0 0 1.5 0V23.5h3.75a.75.75 0 0 0 0-1.5H24v-3.75Z"])));
const PanelLeftHeaderAdd32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd32Regular', "32", ["M12 13v13h2.51c.25.71.6 1.38 1 2H6.5A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v8.84a9.05 9.05 0 0 0-2-1.82V13H12Zm0-2h16V8.5A2.5 2.5 0 0 0 25.5 6H12v5Zm-2-5H6.5A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26H10V6Zm20.5 17a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0ZM24 18.25a.75.75 0 0 0-1.5 0V22h-3.75a.75.75 0 0 0 0 1.5h3.75v3.75a.75.75 0 0 0 1.5 0V23.5h3.75a.75.75 0 0 0 0-1.5H24v-3.75Z"])));
const PanelLeftHeaderAdd48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd48Filled', "48", ["M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5C4 38.2 6.8 41 10.25 41h13.21c-.4-.79-.74-1.63-.98-2.5h-4.23v-18H41.5v3.24c.9.52 1.75 1.16 2.5 1.88V13.25C44 9.8 41.2 7 37.75 7h-27.5ZM41.5 18H18.25V9.5h19.5a3.75 3.75 0 0 1 3.75 3.75V18ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z"])));
const PanelLeftHeaderAdd48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderAdd48Regular', "48", ["M4 13.25C4 9.8 6.8 7 10.25 7h27.5C41.2 7 44 9.8 44 13.25v12.37c-.75-.72-1.6-1.36-2.5-1.88V20.5H18.25v18h4.23c.24.87.57 1.71.98 2.5H10.25A6.25 6.25 0 0 1 4 34.75v-21.5ZM18.25 18H41.5v-4.75a3.75 3.75 0 0 0-3.75-3.75h-19.5V18Zm-8-8.5a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75h5.5v-29h-5.5ZM35 46a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-19a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6h-6a1 1 0 1 1 0-2h6v-6a1 1 0 0 1 1-1Z"])));
const PanelLeftHeaderKey16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderKey16Filled', "16", ["M1 4.5A2.5 2.5 0 0 1 3.5 2h7A2.5 2.5 0 0 1 13 4.5v2H6V11h2.38l-1 1H3.5A2.5 2.5 0 0 1 1 9.5v-5Zm5 1h6v-1c0-.83-.67-1.5-1.5-1.5H6v2.5ZM7.5 16a.48.48 0 0 1-.35-.15.48.48 0 0 1-.15-.35V14c0-.14.05-.25.15-.35l2.94-2.94a3.74 3.74 0 0 1-.09-.77c0-.4.08-.79.24-1.14a3.1 3.1 0 0 1 1.61-1.57 2.94 2.94 0 0 1 3.27.64A3.01 3.01 0 0 1 12 12.84V13.52a.65.65 0 0 1-.08.24.5.5 0 0 1-.15.17.46.46 0 0 1-.27.07H11c0 .24 0 .43-.02.56a.46.46 0 0 1-.11.3.47.47 0 0 1-.3.12L10 15v.27c0 .08 0 .17-.02.25a.86.86 0 0 1-.06.24.37.37 0 0 1-.15.17.57.57 0 0 1-.27.07h-2Zm7-6.75c0-.2-.07-.39-.22-.53a.72.72 0 0 0-.53-.22c-.2 0-.39.07-.53.22a.72.72 0 0 0-.22.53c0 .2.07.39.22.53.14.15.32.22.53.22.2 0 .39-.07.53-.22a.72.72 0 0 0 .22-.53Z"])));
const PanelLeftHeaderKey16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderKey16Regular', "16", ["M13 6.5H6V11h2.38l-1 1H3.5A2.5 2.5 0 0 1 1 9.5v-5A2.5 2.5 0 0 1 3.5 2h7A2.5 2.5 0 0 1 13 4.5v2ZM10.5 3H6v2.5h6v-1c0-.83-.67-1.5-1.5-1.5ZM5 3H3.5C2.67 3 2 3.67 2 4.5v5c0 .83.67 1.5 1.5 1.5H5V3Zm2.5 13a.48.48 0 0 1-.35-.15.48.48 0 0 1-.15-.35V14c0-.14.05-.25.15-.35l2.94-2.94a3.74 3.74 0 0 1-.09-.77c0-.4.08-.79.24-1.14a3.1 3.1 0 0 1 1.61-1.57 2.94 2.94 0 0 1 3.27.64A3.01 3.01 0 0 1 12 12.84V13.52a.65.65 0 0 1-.08.24.5.5 0 0 1-.15.17.46.46 0 0 1-.27.07H11c0 .24 0 .43-.02.56a.46.46 0 0 1-.11.3.47.47 0 0 1-.3.12L10 15v.27c0 .08 0 .17-.02.25a.86.86 0 0 1-.06.24.37.37 0 0 1-.15.17.57.57 0 0 1-.27.07h-2Zm7-6.75c0-.2-.07-.39-.22-.53a.72.72 0 0 0-.53-.22c-.2 0-.39.07-.53.22a.72.72 0 0 0-.22.53c0 .2.07.39.22.53.14.15.32.22.53.22.2 0 .39-.07.53-.22a.72.72 0 0 0 .22-.53Z"])));
const PanelLeftHeaderKey20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderKey20Filled', "20", ["M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3.53a4.18 4.18 0 0 0-1-.4V8H8.5v7h1.88l-.94.94-.05.06H5a3 3 0 0 1-3-3V6Zm6.5 1H17V6a2 2 0 0 0-2-2H8.5v3Zm2 12a.48.48 0 0 1-.35-.15.48.48 0 0 1-.15-.35V17c0-.14.05-.25.15-.35l2.94-2.94a3.74 3.74 0 0 1-.09-.77c0-.4.08-.79.24-1.14a3.1 3.1 0 0 1 1.61-1.57 2.94 2.94 0 0 1 3.27.64A3 3 0 0 1 15 15.84V16.52a.65.65 0 0 1-.08.24.5.5 0 0 1-.15.17.46.46 0 0 1-.27.07H14c0 .24 0 .43-.02.56a.46.46 0 0 1-.11.3.47.47 0 0 1-.3.12L13 18v.27c0 .08 0 .17-.02.25a.86.86 0 0 1-.06.24.37.37 0 0 1-.15.17.57.57 0 0 1-.27.07h-2Zm7-6.75c0-.2-.07-.39-.22-.53a.72.72 0 0 0-.53-.22c-.2 0-.39.07-.53.22a.72.72 0 0 0-.22.53c0 .2.07.39.22.53.14.15.32.22.53.22.2 0 .39-.07.53-.22a.72.72 0 0 0 .22-.53Z"])));
const PanelLeftHeaderKey20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderKey20Regular', "20", ["M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.39l.05-.06.94-.94H8.5V8H17v1.12a3.85 3.85 0 0 1 1 .41V6a3 3 0 0 0-3-3H5Zm12 4H8.5V4H15a2 2 0 0 1 2 2v1ZM5 4h2.5v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm5.5 15a.48.48 0 0 1-.35-.15.48.48 0 0 1-.15-.35V17c0-.14.05-.25.15-.35l2.94-2.94a3.74 3.74 0 0 1-.09-.77c0-.4.08-.79.24-1.14a3.1 3.1 0 0 1 1.61-1.57 2.94 2.94 0 0 1 3.27.64A3 3 0 0 1 15 15.84V16.52a.65.65 0 0 1-.08.24.5.5 0 0 1-.15.17.46.46 0 0 1-.27.07H14c0 .24 0 .43-.02.56a.46.46 0 0 1-.11.3.47.47 0 0 1-.3.12L13 18v.27c0 .08 0 .17-.02.25a.86.86 0 0 1-.06.24.37.37 0 0 1-.15.17.57.57 0 0 1-.27.07h-2Zm7-6.75c0-.2-.07-.39-.22-.53a.72.72 0 0 0-.53-.22c-.2 0-.39.07-.53.22a.72.72 0 0 0-.22.53c0 .2.07.39.22.53.14.15.32.22.53.22.2 0 .39-.07.53-.22a.72.72 0 0 0 .22-.53Z"])));
const PanelLeftHeaderKey24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderKey24Filled', "24", ["M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v4.5c-.45-.3-.96-.52-1.5-.64v-.61h-11v8h3.09l-1.08 1.07c-.12.13-.23.27-.31.43H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM9.5 9h11V7.25c0-.97-.78-1.75-1.75-1.75H9.5V9Zm10 10a3.5 3.5 0 1 0-3.38-2.59.75.75 0 0 0-.15.12l-3.75 3.75a.75.75 0 0 0-.22.53v1.44c0 .41.34.75.75.75h1.75a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1h1.5Zm1.5-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"])));
const PanelLeftHeaderKey24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftHeaderKey24Regular', "24", ["M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h5.95c.08-.16.19-.3.31-.43l1.08-1.07H9.5v-8h11v.61c.54.13 1.05.35 1.5.65V7.25C22 5.45 20.54 4 18.75 4H5.25ZM20.5 9h-11V5.5h9.25c.97 0 1.75.78 1.75 1.75V9ZM8 5.5v13H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75H8ZM19.5 19a3.5 3.5 0 1 0-3.38-2.59.75.75 0 0 0-.15.12l-3.75 3.75a.75.75 0 0 0-.22.53v1.44c0 .41.34.75.75.75h1.75a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1h1.5Zm1.5-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"])));
const PanelLeftKey16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftKey16Filled', "16", ["M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12h3.88l1-1H6V3h4.5c.83 0 1.5.67 1.5 1.5v1.63c.32-.08.64-.12.97-.13H13V4.5A2.5 2.5 0 0 0 10.5 2h-7Zm3.65 13.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V15l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L11 14h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 16 10a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z"])));
const PanelLeftKey16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftKey16Regular', "16", ["M6 3h4.5c.83 0 1.5.67 1.5 1.5v1.63c.32-.08.64-.12.97-.13H13V4.5A2.5 2.5 0 0 0 10.5 2h-7A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12h3.88l1-1H6V3ZM5 3v8H3.5A1.5 1.5 0 0 1 2 9.5v-5C2 3.67 2.67 3 3.5 3H5Zm2.15 12.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V15l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L11 14h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 16 10a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z"])));
const PanelLeftKey20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftKey20Filled', "20", ["M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.39l.05-.06.94-.94H8.5V4H15a2 2 0 0 1 2 2v3.12a3.85 3.85 0 0 1 1 .41V6a3 3 0 0 0-3-3H5Zm5.15 15.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V18l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L14 17h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 19 13a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z"])));
const PanelLeftKey20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftKey20Regular', "20", ["M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3.53a4.18 4.18 0 0 0-1-.4V6a2 2 0 0 0-2-2H8.5v11h1.88l-.94.94-.05.06H5a3 3 0 0 1-3-3V6Zm5.5-2H5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2.5V4Zm2.65 14.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V18l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L14 17h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 19 13a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z"])));
const PanelLeftKey24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftKey24Filled', "24", ["M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h5.95c.08-.16.19-.3.31-.43l1.08-1.07H9.5v-13h9.25c.97 0 1.75.78 1.75 1.75v3.86c.54.13 1.05.35 1.5.65V7.25C22 5.45 20.54 4 18.75 4H5.25ZM23 15.5a3.5 3.5 0 0 1-3.5 3.5H18v1a.5.5 0 0 1-.5.5h-1v1a.5.5 0 0 1-.5.5h-1v.5a.5.5 0 0 1-.5.5h-1.75a.75.75 0 0 1-.75-.75v-1.44c0-.2.08-.39.22-.53l3.75-3.75.15-.12A3.5 3.5 0 1 1 23 15.5Zm-3 .5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"])));
const PanelLeftKey24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftKey24Regular', "24", ["M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v4.5c-.45-.3-.96-.52-1.5-.64V7.25c0-.97-.78-1.75-1.75-1.75H9.5v13h3.09l-1.08 1.07c-.12.13-.23.27-.31.43H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM8 5.5H5.25c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75H8v-13Zm15 10a3.5 3.5 0 0 1-3.5 3.5H18v1a.5.5 0 0 1-.5.5h-1v1a.5.5 0 0 1-.5.5h-1v.5a.5.5 0 0 1-.5.5h-1.75a.75.75 0 0 1-.75-.75v-1.44c0-.2.08-.39.22-.53l3.75-3.75.15-.12A3.5 3.5 0 1 1 23 15.5Zm-3 .5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"])));
const PanelLeftText16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText16Filled', "16", ["M2 5.5A2.5 2.5 0 0 1 4.5 3h7A2.5 2.5 0 0 1 14 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 10.5v-5Zm9.5 6.5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H8v8h3.5Zm-7-7a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM4 8c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1A.5.5 0 0 0 4 8Zm.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"])));
const PanelLeftText16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText16Regular', "16", ["M4 5.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM4 8c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 4 8Zm.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm0-7A2.5 2.5 0 0 0 2 5.5v5A2.5 2.5 0 0 0 4.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 11.5 3h-7ZM3 5.5C3 4.67 3.67 4 4.5 4H7v8H4.5A1.5 1.5 0 0 1 3 10.5v-5ZM8 12V4h3.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H8Z"])));
const PanelLeftText20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText20Filled', "20", ["M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Zm7 9h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9v11ZM6.59 7a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09ZM7 12.5a.5.5 0 0 0-.5-.5H4.41a.5.5 0 0 0 .09 1h2.09a.5.5 0 0 0 .41-.5Z"])));
const PanelLeftText20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText20Regular', "20", ["M6.59 7a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09ZM5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Zm10 12H9V4h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2ZM5 4h3v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z"])));
const PanelLeftText24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText24Filled', "24", ["M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5Zm8 11.25h8.75c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75H10v13Zm-5.25-10c0 .41.34.75.75.75h1.25a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 0-.75.75Zm0 3.5c0 .41.34.75.75.75h1.25a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 0-.75.75Zm.75 2.75a.75.75 0 0 0 0 1.5h1.25a.75.75 0 0 0 0-1.5H5.5Z"])));
const PanelLeftText24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText24Regular', "24", ["M4.75 8.5c0-.41.34-.75.75-.75h1.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75Zm0 3.5c0-.41.34-.75.75-.75h1.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75Zm0 3.5c0-.41.34-.75.75-.75h1.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75ZM5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25Zm13.5 14.5H10v-13h8.75c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75Zm-13.5-13H8.5v13H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75Z"])));
const PanelLeftText28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText28Filled', "28", ["M5.75 4A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h16.5A3.75 3.75 0 0 0 26 19.25V7.75A3.75 3.75 0 0 0 22.25 4H5.75ZM11 21.5v-16h11.25c1.24 0 2.25 1 2.25 2.25v11.5c0 1.24-1 2.25-2.25 2.25H11Zm-6-13c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 8.5Zm0 5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 13.5Zm.75 4.25h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5Z"])));
const PanelLeftText28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText28Regular', "28", ["M5 8.5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 8.5Zm0 5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 13.5Zm0 5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 18.5ZM2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v11.5A3.75 3.75 0 0 1 22.25 23H5.75A3.75 3.75 0 0 1 2 19.25V7.75ZM5.75 5.5c-1.24 0-2.25 1-2.25 2.25v11.5c0 1.24 1.01 2.25 2.25 2.25H9.5v-16H5.75Zm5.25 0v16h11.25c1.24 0 2.25-1 2.25-2.25V7.75c0-1.24-1-2.25-2.25-2.25H11Z"])));
const PanelLeftText32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText32Filled', "32", ["M2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5v-15ZM25.5 6H13v20h12.5a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 25.5 6Zm-19 3a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Zm-1 7a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1Zm0 6a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1Z"])));
const PanelLeftText32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText32Regular', "32", ["M6.5 9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Zm-1 7a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm0-17A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4h-19ZM13 26V6h12.5A2.5 2.5 0 0 1 28 8.5v15a2.5 2.5 0 0 1-2.5 2.5H13ZM6.5 6H11v20H6.5A2.5 2.5 0 0 1 4 23.5v-15A2.5 2.5 0 0 1 6.5 6Z"])));
const PanelLeftText48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText48Filled', "48", ["M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5C4 38.2 6.8 41 10.25 41h27.5C41.2 41 44 38.2 44 34.75v-21.5C44 9.8 41.2 7 37.75 7h-27.5ZM19 9.5h18.75a3.75 3.75 0 0 1 3.75 3.75v21.5a3.75 3.75 0 0 1-3.75 3.75H19v-29ZM8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm1.25 7.75h3.5a1.25 1.25 0 1 1 0 2.5h-3.5a1.25 1.25 0 1 1 0-2.5Z"])));
const PanelLeftText48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftText48Regular', "48", ["M8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25ZM4 13.25C4 9.8 6.8 7 10.25 7h27.5C41.2 7 44 9.8 44 13.25v21.5C44 38.2 41.2 41 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75v-21.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75h6.25v-29h-6.25Zm27.5 0H19v29h18.75a3.75 3.75 0 0 0 3.75-3.75v-21.5a3.75 3.75 0 0 0-3.75-3.75Z"])));
const PanelLeftTextAdd16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd16Filled', "16", ["M1 4.5A2.5 2.5 0 0 1 3.5 2h7A2.5 2.5 0 0 1 13 4.5v1.7c-.32-.08-.66-.15-1-.18V4.5c0-.83-.67-1.5-1.5-1.5H7v5.34A5.47 5.47 0 0 0 6.02 12H3.5A2.5 2.5 0 0 1 1 9.5v-5ZM3.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM3 7c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1A.5.5 0 0 0 3 7Zm.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z"])));
const PanelLeftTextAdd16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd16Regular', "16", ["M3 4.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM3 7c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 3 7Zm0 2.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12h2.52A5.57 5.57 0 0 1 7 8.34V3h3.5c.83 0 1.5.67 1.5 1.5v1.52c.34.03.68.1 1 .19V4.5A2.5 2.5 0 0 0 10.5 2h-7ZM2 4.5C2 3.67 2.67 3 3.5 3H6v8H3.5A1.5 1.5 0 0 1 2 9.5v-5Zm14 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z"])));
const PanelLeftTextAdd20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd20Filled', "20", ["M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4.26a5.5 5.5 0 0 0-1-.66V6a2 2 0 0 0-2-2H9v11h.02c.03.34.1.68.19 1H5a3 3 0 0 1-3-3V6Zm4.59 1a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09ZM7 12.5a.5.5 0 0 0-.5-.5H4.41a.5.5 0 0 0 .09 1h2.09a.5.5 0 0 0 .41-.5Zm12 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"])));
const PanelLeftTextAdd20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd20Regular', "20", ["M6.59 7a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09ZM7 12.5a.5.5 0 0 1-.41.5H4.5a.5.5 0 0 1-.09-1H6.5c.28 0 .5.22.5.5ZM5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.2c-.08-.32-.15-.66-.18-1H9V4h6a2 2 0 0 1 2 2v3.6c.36.18.7.4 1 .66V6a3 3 0 0 0-3-3H5Zm0 1h3v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm14 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"])));
const PanelLeftTextAdd24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd24Filled', "24", ["M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v5.56a6.52 6.52 0 0 0-1.5-1.08V7.25c0-.97-.78-1.75-1.75-1.75H10v13h1.08c.08.52.22 1.03.42 1.5H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM4.75 8.5c0 .41.34.75.75.75h1.25a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 0-.75.75Zm0 3.5c0 .41.34.75.75.75h1.25a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 0-.75.75Zm.75 2.75a.75.75 0 0 0 0 1.5h1.25a.75.75 0 0 0 0-1.5H5.5ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z"])));
const PanelLeftTextAdd24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd24Regular', "24", ["M4.75 8.5c0-.41.34-.75.75-.75h1.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75Zm0 3.5c0-.41.34-.75.75-.75h1.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75Zm.75 2.75a.75.75 0 0 0 0 1.5h1.25a.75.75 0 0 0 0-1.5H5.5ZM5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h6.25c-.2-.47-.34-.98-.42-1.5H10v-13h8.75c.97 0 1.75.78 1.75 1.75v4.48c.55.29 1.06.65 1.5 1.08V7.25C22 5.45 20.54 4 18.75 4H5.25Zm0 1.5H8.5v13H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z"])));
const PanelLeftTextAdd28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd28Filled', "28", ["M5.75 4A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h7.68c-.17-.48-.3-.98-.36-1.5H11v-16h11.25c1.24 0 2.25 1 2.25 2.25v6.4c.55.35 1.06.77 1.5 1.25V7.75A3.75 3.75 0 0 0 22.25 4H5.75ZM5 8.5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 8.5Zm0 5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 13.5Zm.75 4.25h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"])));
const PanelLeftTextAdd28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd28Regular', "28", ["M5 8.5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 8.5Zm0 5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 13.5Zm.75 4.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v7.65c-.44-.48-.95-.9-1.5-1.25v-6.4c0-1.24-1-2.25-2.25-2.25H11v16h2.07c.07.52.19 1.02.36 1.5H5.75A3.75 3.75 0 0 1 2 19.25V7.75ZM5.75 5.5c-1.24 0-2.25 1-2.25 2.25v11.5c0 1.24 1.01 2.25 2.25 2.25H9.5v-16H5.75ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"])));
const PanelLeftTextAdd32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd32Filled', "32", ["M2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v8.84a9.05 9.05 0 0 0-2-1.82V8.5A2.5 2.5 0 0 0 25.5 6H13v20h1.51c.25.71.6 1.38 1 2H6.5A4.5 4.5 0 0 1 2 23.5v-15Zm4.5.5a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Zm-1 7a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1Zm0 6a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1ZM23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0Z"])));
const PanelLeftTextAdd32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd32Regular', "32", ["M6.5 9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Zm-1 7a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm1-18A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h9.02a8.97 8.97 0 0 1-1-2H13V6h12.5A2.5 2.5 0 0 1 28 8.5v7.02c.76.5 1.43 1.12 2 1.82V8.5A4.5 4.5 0 0 0 25.5 4h-19Zm0 2H11v20H6.5A2.5 2.5 0 0 1 4 23.5v-15A2.5 2.5 0 0 1 6.5 6ZM23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0Z"])));
const PanelLeftTextAdd48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd48Filled', "48", ["M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5C4 38.2 6.8 41 10.25 41h13.21c-.4-.79-.74-1.63-.98-2.5H19v-29h18.75a3.75 3.75 0 0 1 3.75 3.75v10.49c.9.52 1.75 1.16 2.5 1.88V13.25C44 9.8 41.2 7 37.75 7h-27.5ZM8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm1.25 7.75h3.5a1.25 1.25 0 1 1 0 2.5h-3.5a1.25 1.25 0 1 1 0-2.5ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z"])));
const PanelLeftTextAdd48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextAdd48Regular', "48", ["M8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm1.25 7.75a1.25 1.25 0 1 0 0 2.5h3.5a1.25 1.25 0 1 0 0-2.5h-3.5ZM4 13.25C4 9.8 6.8 7 10.25 7h27.5C41.2 7 44 9.8 44 13.25v12.37c-.75-.72-1.6-1.36-2.5-1.88V13.25a3.75 3.75 0 0 0-3.75-3.75H19v29h3.48c.24.87.57 1.71.98 2.5H10.25A6.25 6.25 0 0 1 4 34.75v-21.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75h6.25v-29h-6.25ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z"])));
const PanelLeftTextDismiss16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss16Filled', "16", ["M2 5.5A2.5 2.5 0 0 1 4.5 3h7A2.5 2.5 0 0 1 14 5.5v1.1c-.32-.16-.65-.3-1-.4v-.7c0-.83-.67-1.5-1.5-1.5H8v3.26A5.49 5.49 0 0 0 6.2 13H4.5A2.5 2.5 0 0 1 2 10.5v-5ZM4.5 5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM4 8c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1A.5.5 0 0 0 4 8Zm.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM16 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z"])));
const PanelLeftTextDismiss16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss16Regular', "16", ["M4.5 3A2.5 2.5 0 0 0 2 5.5v5A2.5 2.5 0 0 0 4.5 13h1.7c-.08-.32-.15-.66-.18-1H4.5A1.5 1.5 0 0 1 3 10.5v-5C3 4.67 3.67 4 4.5 4H7v4.34c.28-.4.62-.77 1-1.08V4h3.5c.83 0 1.5.67 1.5 1.5v.7c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0 0 11.5 3h-7ZM4 5.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM4 8c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 4 8Zm0 2.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm12 1a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z"])));
const PanelLeftTextDismiss20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss20Filled', "20", ["M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4.26a5.5 5.5 0 0 0-1-.66V6a2 2 0 0 0-2-2H9v11h.02c.03.34.1.68.19 1H5a3 3 0 0 1-3-3V6Zm4.59 1a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09ZM7 12.5a.5.5 0 0 0-.5-.5H4.41a.5.5 0 0 0 .09 1h2.09a.5.5 0 0 0 .41-.5Zm12 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z"])));
const PanelLeftTextDismiss20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss20Regular', "20", ["M6.59 7a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09Zm0 3a.5.5 0 0 0-.09-1H4.41a.5.5 0 0 0 .09 1h2.09ZM7 12.5a.5.5 0 0 1-.41.5H4.5a.5.5 0 0 1-.09-1H6.5c.28 0 .5.22.5.5ZM5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.2c-.08-.32-.15-.66-.18-1H9V4h6a2 2 0 0 1 2 2v3.6c.36.18.7.4 1 .66V6a3 3 0 0 0-3-3H5Zm0 1h3v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Zm14 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z"])));
const PanelLeftTextDismiss24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss24Filled', "24", ["M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v5.56a6.52 6.52 0 0 0-1.5-1.08V7.25c0-.97-.78-1.75-1.75-1.75H10v13h1.08c.08.52.22 1.03.42 1.5H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM4.75 8.5c0 .41.34.75.75.75h1.25a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 0-.75.75Zm0 3.5c0 .41.34.75.75.75h1.25a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 0-.75.75Zm.75 2.75a.75.75 0 0 0 0 1.5h1.25a.75.75 0 0 0 0-1.5H5.5ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64-1.65-1.64Z"])));
const PanelLeftTextDismiss24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss24Regular', "24", ["M4.75 8.5c0-.41.34-.75.75-.75h1.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75Zm0 3.5c0-.41.34-.75.75-.75h1.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75Zm.75 2.75a.75.75 0 0 0 0 1.5h1.25a.75.75 0 0 0 0-1.5H5.5ZM5.25 4A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h6.25c-.2-.47-.34-.98-.42-1.5H10v-13h8.75c.97 0 1.75.78 1.75 1.75v4.48c.55.29 1.06.65 1.5 1.08V7.25C22 5.45 20.54 4 18.75 4H5.25Zm0 1.5H8.5v13H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64-1.65-1.64Z"])));
const PanelLeftTextDismiss28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss28Filled', "28", ["M5.75 4A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h7.68c-.17-.48-.3-.98-.36-1.5H11v-16h11.25c1.24 0 2.25 1 2.25 2.25v6.4c.55.35 1.06.77 1.5 1.25V7.75A3.75 3.75 0 0 0 22.25 4H5.75ZM5 8.5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 8.5Zm0 5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 13.5Zm.75 4.25h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-9.15-3.35a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7l-2.64-2.65 2.64-2.65a.5.5 0 0 0-.7-.7l-2.65 2.64-2.65-2.64Z"])));
const PanelLeftTextDismiss28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss28Regular', "28", ["M5 8.5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 8.5Zm0 5c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 13.5Zm.75 4.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v7.65c-.44-.48-.95-.9-1.5-1.25v-6.4c0-1.24-1-2.25-2.25-2.25H11v16h2.07c.07.52.19 1.02.36 1.5H5.75A3.75 3.75 0 0 1 2 19.25V7.75ZM5.75 5.5c-1.24 0-2.25 1-2.25 2.25v11.5c0 1.24 1.01 2.25 2.25 2.25H9.5v-16H5.75ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-9.15-3.35a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7l-2.64-2.65 2.64-2.65a.5.5 0 0 0-.7-.7l-2.65 2.64-2.65-2.64Z"])));
const PanelLeftTextDismiss32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss32Filled', "32", ["M2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v8.84a9.05 9.05 0 0 0-2-1.82V8.5A2.5 2.5 0 0 0 25.5 6H13v20h1.51c.25.71.6 1.38 1 2H6.5A4.5 4.5 0 0 1 2 23.5v-15Zm4.5.5a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Zm-1 7a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1Zm0 6a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1ZM23 15.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm2.72 3.72L23 21.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L21.94 23l-2.72 2.72a.75.75 0 1 0 1.06 1.06L23 24.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L24.06 23l2.72-2.72a.75.75 0 1 0-1.06-1.06Z"])));
const PanelLeftTextDismiss32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss32Regular', "32", ["M6.5 9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Zm-1 7a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm1-18A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h9.02a8.97 8.97 0 0 1-1-2H13V6h12.5A2.5 2.5 0 0 1 28 8.5v7.02c.76.5 1.43 1.12 2 1.82V8.5A4.5 4.5 0 0 0 25.5 4h-19Zm0 2H11v20H6.5A2.5 2.5 0 0 1 4 23.5v-15A2.5 2.5 0 0 1 6.5 6ZM23 15.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm2.72 3.72L23 21.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L21.94 23l-2.72 2.72a.75.75 0 1 0 1.06 1.06L23 24.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L24.06 23l2.72-2.72a.75.75 0 1 0-1.06-1.06Z"])));
const PanelLeftTextDismiss48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss48Filled', "48", ["M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5C4 38.2 6.8 41 10.25 41h13.21c-.4-.79-.74-1.63-.98-2.5H19v-29h18.75a3.75 3.75 0 0 1 3.75 3.75v10.49c.9.52 1.75 1.16 2.5 1.88V13.25C44 9.8 41.2 7 37.75 7h-27.5ZM8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm1.25 7.75h3.5a1.25 1.25 0 1 1 0 2.5h-3.5a1.25 1.25 0 1 1 0-2.5ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-5.3-4.3a1 1 0 0 0-1.4-1.4L35 33.58l-4.3-4.3a1 1 0 0 0-1.4 1.42L33.58 35l-4.3 4.3a1 1 0 0 0 1.42 1.4L35 36.42l4.3 4.3a1 1 0 0 0 1.4-1.42L36.42 35l4.3-4.3Z"])));
const PanelLeftTextDismiss48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelLeftTextDismiss48Regular', "48", ["M8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25Zm1.25 7.75a1.25 1.25 0 1 0 0 2.5h3.5a1.25 1.25 0 1 0 0-2.5h-3.5ZM4 13.25C4 9.8 6.8 7 10.25 7h27.5C41.2 7 44 9.8 44 13.25v12.37c-.75-.72-1.6-1.36-2.5-1.88V13.25a3.75 3.75 0 0 0-3.75-3.75H19v29h3.48c.24.87.57 1.71.98 2.5H10.25A6.25 6.25 0 0 1 4 34.75v-21.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75h6.25v-29h-6.25ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-5.3-4.3a1 1 0 0 0-1.4-1.4L35 33.58l-4.3-4.3a1 1 0 0 0-1.4 1.42L33.58 35l-4.3 4.3a1 1 0 0 0 1.42 1.4L35 36.42l4.3 4.3a1 1 0 0 0 1.4-1.42L36.42 35l4.3-4.3Z"])));
const PanelRight16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight16Filled', "16", ["M11.5 3A2.5 2.5 0 0 1 14 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 10.5v-5A2.5 2.5 0 0 1 4.5 3h7ZM9 4H4.5C3.67 4 3 4.67 3 5.5v5c0 .83.67 1.5 1.5 1.5H9V4Z"])));
const PanelRight16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight16Regular', "16", ["M14 5.5A2.5 2.5 0 0 0 11.5 3h-7A2.5 2.5 0 0 0 2 5.5v5A2.5 2.5 0 0 0 4.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-5ZM9 4v8H4.5A1.5 1.5 0 0 1 3 10.5v-5C3 4.67 3.67 4 4.5 4H9Zm1 0h1.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H10V4Z"])));
const PanelRight20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight20Filled', "20", ["M15 3a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h10ZM5 4a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h6.5V4H5Z"])));
const PanelRight20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight20Regular', "20", ["M18 6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6Zm-6.5-2v11H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6.5Zm1 0H15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2.5V4Z"])));
const PanelRight24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight24Filled', "24", ["M18.75 4C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75v-9.5C2 5.45 3.46 4 5.25 4h13.5ZM5.25 5.5c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75h9.25v-13H5.25Z"])));
const PanelRight24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight24Regular', "24", ["M22 7.25C22 5.45 20.54 4 18.75 4H5.25A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5ZM14.5 5.5v13H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75h9.25Zm1.5 0h2.75c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75H16v-13Z"])));
const PanelRight28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight28Filled', "28", ["M26 7.75A3.75 3.75 0 0 0 22.25 4H5.75A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h16.5A3.75 3.75 0 0 0 26 19.25V7.75ZM5.75 21.5c-1.24 0-2.25-1-2.25-2.25V7.75c0-1.24 1-2.25 2.25-2.25H17.5v16H5.75Z"])));
const PanelRight28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight28Regular', "28", ["M22.25 4A3.75 3.75 0 0 1 26 7.75v11.5A3.75 3.75 0 0 1 22.25 23H5.75A3.75 3.75 0 0 1 2 19.25V7.75A3.75 3.75 0 0 1 5.75 4h16.5Zm2.25 3.75c0-1.24-1.01-2.25-2.25-2.25H19v16h3.25c1.24 0 2.25-1 2.25-2.25V7.75Zm-7 13.75v-16H5.75c-1.24 0-2.25 1-2.25 2.25v11.5c0 1.24 1 2.25 2.25 2.25H17.5Z"])));
const PanelRight32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight32Filled', "32", ["M6.5 28A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19Zm0-22A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26H20V6H6.5Z"])));
const PanelRight32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight32Regular', "32", ["M20 6v20H6.5A2.5 2.5 0 0 1 4 23.5v-15A2.5 2.5 0 0 1 6.5 6H20Zm2 0h3.5A2.5 2.5 0 0 1 28 8.5v15a2.5 2.5 0 0 1-2.5 2.5H22V6Zm8 2.5A4.5 4.5 0 0 0 25.5 4h-19A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5v-15Z"])));
const PanelRight48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight48Filled', "48", ["M44 13.25C44 9.8 41.2 7 37.75 7h-27.5A6.25 6.25 0 0 0 4 13.25v21.5C4 38.2 6.8 41 10.25 41h27.5C41.2 41 44 38.2 44 34.75v-21.5ZM10.25 38.5a3.75 3.75 0 0 1-3.75-3.75v-21.5a3.75 3.75 0 0 1 3.75-3.75h19.5v29h-19.5Z"])));
const PanelRight48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRight48Regular', "48", ["M37.75 7C41.2 7 44 9.8 44 13.25v21.5C44 38.2 41.2 41 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75v-21.5C4 9.8 6.8 7 10.25 7h27.5Zm3.75 6.25a3.75 3.75 0 0 0-3.75-3.75h-5.5v29h5.5a3.75 3.75 0 0 0 3.75-3.75v-21.5ZM29.75 38.5v-29h-19.5a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75h19.5Z"])));
const PanelRightAdd20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightAdd20Filled', "20", ["M18 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.2c-.08-.32-.15-.66-.18-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8v4.6a5.48 5.48 0 0 1 6 .66V6Zm-3.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z"])));
const PanelRightAdd20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightAdd20Regular', "20", ["M18 6c0-1.1-.9-2.02-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.2c-.08-.32-.15-.66-.18-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8v4.6c.32-.16.66-.3 1-.4V5h3a1 1 0 0 1 1 1v3.6c.36.18.7.4 1 .66V6Zm-3.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z"])));
const PanelRightContract16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightContract16Filled', "16", ["M6.3 7.5H4.5a.5.5 0 0 0 0 1h1.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65ZM12 13a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h8Zm-3-1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v8Z"])));
const PanelRightContract16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightContract16Regular', "16", ["m6.3 8.5-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H4.5a.5.5 0 1 0 0 1h1.8ZM12 13a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h8Zm1-2a1 1 0 0 1-1 1h-2V4h2a1 1 0 0 1 1 1v6ZM9 4v8H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5Z"])));
const PanelRightContract20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightContract20Filled', "20", ["m9.18 10.5-1 .87a.5.5 0 1 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 1 0-.66.76l1 .87H5.5a.5.5 0 0 0 0 1h3.68ZM16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12ZM12 5v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8Z"])));
const PanelRightContract20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightContract20Regular', "20", ["m9.18 10.5-1 .87a.5.5 0 1 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 1 0-.66.76l1 .87H5.5a.5.5 0 0 0 0 1h3.68ZM16 16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12Zm1-2a1 1 0 0 1-1 1h-3V5h3a1 1 0 0 1 1 1v8Zm-5-9v10H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8Z"])));
const PanelRightContract24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightContract24Filled', "24", ["M9.2 9.25a.75.75 0 0 1 1.05-.06l2.5 2.25a.75.75 0 0 1 0 1.12l-2.5 2.25a.75.75 0 1 1-1-1.12l1.05-.94H6.75a.75.75 0 0 1 0-1.5h3.55l-1.05-.94a.75.75 0 0 1-.06-1.06Zm12.8 8A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5Zm-7 1.25v-13H4.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25H15Z"])));
const PanelRightContract24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightContract24Regular', "24", ["M9.2 9.25a.75.75 0 0 1 1.05-.06l2.5 2.25a.75.75 0 0 1 0 1.12l-2.5 2.25a.75.75 0 0 1-1-1.12l1.05-.94H6.75a.75.75 0 1 1 0-1.5h3.55l-1.05-.94a.75.75 0 0 1-.06-1.06Zm12.8 8A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5Zm-2.75 1.25c.69 0 1.25-.56 1.25-1.25V6.75c0-.7-.56-1.25-1.25-1.25H16v13h3.25Zm-4.75 0v-13H4.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .7.56 1.25 1.25 1.25h9.75Z"])));
const PanelRightCursor20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightCursor20Filled', "20", ["M15 3a3 3 0 0 1 3 3v7c0 .53-.14 1.02-.38 1.45l-5.06-5.01A1.5 1.5 0 0 0 11.5 9V4H5a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h5v1H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h10Zm-3.14 7.15a.5.5 0 0 0-.86.35v8a.5.5 0 0 0 .9.3l2-2.65 3.5.78a.5.5 0 0 0 .45-.84l-6-5.94Z"])));
const PanelRightCursor20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightCursor20Regular', "20", ["M18 6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h5v-1H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6.5v5c.36 0 .72.13 1 .38V4H15a2 2 0 0 1 2 2v7a2 2 0 0 1-.13.7l.75.75c.24-.43.38-.92.38-1.45V6Zm-6.14 4.15a.5.5 0 0 0-.86.35v8a.5.5 0 0 0 .9.3l2-2.65 3.5.78a.5.5 0 0 0 .45-.84l-6-5.94Z"])));
const PanelRightCursor24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightCursor24Filled', "24", ["M18.75 4C20.55 4 22 5.46 22 7.25v9.5c0 .42-.08.81-.22 1.18l-5.73-6.35c-.4-.44-.98-.65-1.55-.56V5.5H5.25c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75H13V20H5.25A3.25 3.25 0 0 1 2 16.75v-9.5C2 5.45 3.46 4 5.25 4h13.5Zm-4.26 8.05a.75.75 0 0 1 .82.2l6.37 7.06a.75.75 0 0 1-.74 1.23l-3.54-.88-2.03 3.01a.75.75 0 0 1-1.37-.42v-9.5c0-.31.2-.59.49-.7Z"])));
const PanelRightCursor24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightCursor24Regular', "24", ["M22 7.25C22 5.45 20.54 4 18.75 4H5.25A3.25 3.25 0 0 0 2 7.25v9.5C2 18.55 3.46 20 5.25 20H13v-1.5H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75h9.25v5.52c.55-.08 1.1.1 1.5.5V5.5h2.75c.97 0 1.75.78 1.75 1.75v9.26l1.28 1.42c.14-.37.22-.76.22-1.18v-9.5Zm-7.51 4.8a.75.75 0 0 1 .82.2l6.37 7.06a.75.75 0 0 1-.74 1.23l-3.54-.88-2.03 3.01a.75.75 0 0 1-1.37-.42v-9.5c0-.31.2-.59.49-.7Z"])));
const PanelRightExpand20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightExpand20Filled', "20", ["m6.82 10.5 1 .87a.5.5 0 0 1-.66.76l-2-1.75a.5.5 0 0 1 0-.76l2-1.75a.5.5 0 0 1 .66.76l-1 .87h3.68a.5.5 0 0 1 0 1H6.82ZM18 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8Zm-6 1V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8Z"])));
const PanelRightExpand20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelRightExpand20Regular', "20", ["m6.82 10.5 1 .87a.5.5 0 0 1-.66.76l-2-1.75a.5.5 0 0 1 0-.76l2-1.75a.5.5 0 0 1 .66.76l-1 .87h3.68a.5.5 0 0 1 0 1H6.82ZM18 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8Zm-2 1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3v10h3Zm-4 0V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8Z"])));
const PanelSeparateWindow20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelSeparateWindow20Filled', "20", ["M3 2a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3Zm0 12v-3h1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3V4h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"])));
const PanelSeparateWindow20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelSeparateWindow20Regular', "20", ["M3 2a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3ZM2 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Zm1 10v-3h1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3V4h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"])));
const PanelTopContract20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelTopContract20Filled', "20", ["m10.5 8.83.87 1a.5.5 0 0 0 .76-.66l-1.75-2a.5.5 0 0 0-.76 0l-1.75 2a.5.5 0 0 0 .76.65l.87-1v3.68a.5.5 0 0 0 1 0V8.83ZM4 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4Zm-1-2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-3.83a1.5 1.5 0 0 0-.3-.5l-1.74-2a1.5 1.5 0 0 0-2.26 0l-1.75 2a1.5 1.5 0 0 0-.29.5H3v5Z"])));
const PanelTopContract20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelTopContract20Regular', "20", ["m10.5 8.83.87 1a.5.5 0 0 0 .76-.66l-1.75-2a.5.5 0 0 0-.76 0l-1.75 2a.5.5 0 0 0 .76.65l.87-1v3.68a.5.5 0 0 0 1 0V8.83ZM4 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4Zm-1-2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-3.83a1.5 1.5 0 0 0-.3-.5l-.44-.5H17V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h4.57l-.45.5a1.5 1.5 0 0 0-.29.5H3v5Z"])));
const PanelTopExpand20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelTopExpand20Filled', "20", ["m10.5 11.17.87-1a.5.5 0 0 1 .76.66l-1.75 2a.5.5 0 0 1-.76 0l-1.75-2a.5.5 0 1 1 .76-.65l.87 1V7.5a.5.5 0 0 1 1 0v3.67ZM4 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4Zm-1-2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-5.5V7.5a1.5 1.5 0 1 0-3 0V9H3v5Z"])));
const PanelTopExpand20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PanelTopExpand20Regular', "20", ["m10.5 11.17.87-1a.5.5 0 0 1 .76.66l-1.75 2a.5.5 0 0 1-.76 0l-1.75-2a.5.5 0 1 1 .76-.65l.87 1V7.5a.5.5 0 0 1 1 0v3.67ZM4 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4Zm-1-2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-5.5V8H17V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h5.5v1H3v5Z"])));
const Password16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Password16Filled', "16", ["M1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v4a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 9.5v-4Zm4.15.65-.65.64-.65-.64a.5.5 0 1 0-.7.7l.64.65-.64.65a.5.5 0 1 0 .7.7l.65-.64.65.64a.5.5 0 1 0 .7-.7l-.64-.65.64-.65a.5.5 0 1 0-.7-.7Zm4 0-.65.64-.65-.64a.5.5 0 1 0-.7.7l.64.65-.64.65a.5.5 0 1 0 .7.7l.65-.64.65.64a.5.5 0 1 0 .7-.7l-.64-.65.64-.65a.5.5 0 0 0-.7-.7ZM11 8.5c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5Z"])));
const Password16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Password16Regular', "16", ["M5.85 6.15a.5.5 0 0 0-.7 0l-.65.64-.65-.64a.5.5 0 1 0-.7.7l.64.65-.64.65a.5.5 0 1 0 .7.7l.65-.64.65.64a.5.5 0 1 0 .7-.7l-.64-.65.64-.65a.5.5 0 0 0 0-.7Zm3.3 0a.5.5 0 1 1 .7.7l-.64.65.64.65a.5.5 0 0 1-.7.7l-.65-.64-.65.64a.5.5 0 1 1-.7-.7l.64-.65-.64-.65a.5.5 0 1 1 .7-.7l.65.64.65-.64ZM11.5 8a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-8-5A2.5 2.5 0 0 0 1 5.5v4A2.5 2.5 0 0 0 3.5 12h9A2.5 2.5 0 0 0 15 9.5v-4A2.5 2.5 0 0 0 12.5 3h-9ZM2 5.5C2 4.67 2.67 4 3.5 4h9c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 2 9.5v-4Z"])));
const Password20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Password20Filled', "20", ["M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v5.5A2.75 2.75 0 0 1 15.25 15H4.75A2.75 2.75 0 0 1 2 12.25v-5.5Zm5.15 1.4-.65.64-.65-.64a.5.5 0 1 0-.7.7l.64.65-.64.65a.5.5 0 0 0 .7.7l.65-.64.65.64a.5.5 0 0 0 .7-.7l-.64-.65.64-.65a.5.5 0 1 0-.7-.7Zm4 0-.65.64-.65-.64a.5.5 0 1 0-.7.7l.64.65-.64.65a.5.5 0 0 0 .7.7l.65-.64.65.64a.5.5 0 0 0 .7-.7l-.64-.65.64-.65a.5.5 0 0 0-.7-.7ZM13 10.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z"])));
const Password20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Password20Regular', "20", ["M7.85 8.15a.5.5 0 0 0-.7 0l-.65.64-.65-.64a.5.5 0 1 0-.7.7l.64.65-.64.65a.5.5 0 0 0 .7.7l.65-.64.65.64a.5.5 0 0 0 .7-.7l-.64-.65.64-.65a.5.5 0 0 0 0-.7Zm3.3 0a.5.5 0 0 1 .7.7l-.64.65.64.65a.5.5 0 0 1-.7.7l-.65-.64-.65.64a.5.5 0 0 1-.7-.7l.64-.65-.64-.65a.5.5 0 1 1 .7-.7l.65.64.65-.64ZM13.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM4.75 4A2.75 2.75 0 0 0 2 6.75v5.5A2.75 2.75 0 0 0 4.75 15h10.5A2.75 2.75 0 0 0 18 12.25v-5.5A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 14 3 13.22 3 12.25v-5.5Z"])));
const Password24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Password24Filled', "24", ["M5.25 5A3.25 3.25 0 0 0 2 8.25v7.5C2 17.55 3.46 19 5.25 19h13.5c1.8 0 3.25-1.46 3.25-3.25v-7.5C22 6.45 20.55 5 18.75 5H5.25Zm1.03 5.22.72.72.72-.72a.75.75 0 1 1 1.06 1.06l-.72.72.72.72a.75.75 0 1 1-1.06 1.06L7 13.06l-.72.72a.75.75 0 0 1-1.06-1.06l.72-.72-.72-.72a.75.75 0 0 1 1.06-1.06Zm5.5 0 .72.72.72-.72a.75.75 0 1 1 1.06 1.06l-.72.72.72.72a.75.75 0 1 1-1.06 1.06l-.72-.72-.72.72a.75.75 0 1 1-1.06-1.06l.72-.72-.72-.72a.75.75 0 0 1 1.06-1.06Zm3.97 4.03c0-.41.34-.75.75-.75h1.75a.75.75 0 0 1 0 1.5H16.5a.75.75 0 0 1-.75-.75Z"])));
const Password24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Password24Regular', "24", ["M11.78 10.22a.75.75 0 0 0-1.06 1.06l.72.72-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72.72.72a.75.75 0 0 0 1.06-1.06l-.72-.72.72-.72a.75.75 0 1 0-1.06-1.06l-.72.72-.72-.72Zm-6.56 0c.3-.3.77-.3 1.06 0l.72.72.72-.72a.75.75 0 1 1 1.06 1.06l-.72.72.72.72a.75.75 0 1 1-1.06 1.06L7 13.06l-.72.72a.75.75 0 0 1-1.06-1.06l.72-.72-.72-.72a.75.75 0 0 1 0-1.06ZM16.5 13.5a.75.75 0 0 0 0 1.5h1.75a.75.75 0 0 0 0-1.5H16.5ZM5.25 5A3.25 3.25 0 0 0 2 8.25v7.5C2 17.55 3.46 19 5.25 19h13.5c1.8 0 3.25-1.46 3.25-3.25v-7.5C22 6.45 20.55 5 18.75 5H5.25ZM3.5 8.25c0-.97.78-1.75 1.75-1.75h13.5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75v-7.5Z"])));
const Patch20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Patch20Filled', "20", ["m8.27 3.06 1.02 1.03-5.2 5.2-1.03-1.02a2.5 2.5 0 0 1 0-3.54l1.67-1.67a2.5 2.5 0 0 1 3.54 0Zm3.46 13.88-1.02-1.03 5.2-5.2 1.03 1.02a2.5 2.5 0 0 1 0 3.54l-1.67 1.67a2.5 2.5 0 0 1-3.54 0Zm-8.67-5.2a2.5 2.5 0 0 0 0 3.53l1.67 1.67a2.5 2.5 0 0 0 3.54 0l8.67-8.67a2.5 2.5 0 0 0 0-3.54l-1.67-1.67a2.5 2.5 0 0 0-3.54 0l-8.67 8.67ZM10 8.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM8.5 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm3.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM10.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"])));
const Patch20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Patch20Regular', "20", ["M10.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm4.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM10 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-6.94 2.77a2.5 2.5 0 0 1 0-3.54l8.67-8.67a2.5 2.5 0 0 1 3.54 0l1.67 1.67a2.5 2.5 0 0 1 0 3.54l-8.67 8.67a2.5 2.5 0 0 1-3.54 0l-1.67-1.67Zm.7-2.83a1.5 1.5 0 0 0 0 2.12l1.68 1.67a1.5 1.5 0 0 0 2.12 0l1.73-1.73-3.79-3.8-1.73 1.74ZM13.8 10 10 6.2 6.2 10l3.8 3.8 3.8-3.8Zm.71-.7 1.73-1.74a1.5 1.5 0 0 0 0-2.12l-1.67-1.67a1.5 1.5 0 0 0-2.12 0L10.7 5.5l3.79 3.8Zm-3.8 6.61 1.03 1.03a2.5 2.5 0 0 0 3.54 0l1.67-1.67a2.5 2.5 0 0 0 0-3.54l-1.03-1.02-.7.7 1.02 1.03a1.5 1.5 0 0 1 0 2.12l-1.67 1.67a1.5 1.5 0 0 1-2.12 0l-1.03-1.02-.7.7ZM8.6 4.8 7.56 3.77a1.5 1.5 0 0 0-2.12 0L3.77 5.44a1.5 1.5 0 0 0 0 2.12L4.79 8.6l-.7.7-1.03-1.02a2.5 2.5 0 0 1 0-3.54l1.67-1.67a2.5 2.5 0 0 1 3.54 0L9.29 4.1l-.7.7Z"])));
const Patch24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Patch24Filled', "24", ["m9.8 3.24 1.5 1.5-6.57 6.55-1.5-1.5a3.25 3.25 0 0 1 0-4.59L5.2 3.24a3.25 3.25 0 0 1 4.6 0Zm4.4 17.52-1.5-1.5 6.57-6.55 1.5 1.5a3.25 3.25 0 0 1 0 4.59l-1.97 1.96a3.25 3.25 0 0 1-4.6 0ZM3.24 14.2a3.25 3.25 0 0 0 0 4.6l1.96 1.96a3.25 3.25 0 0 0 4.6 0L20.76 9.8a3.25 3.25 0 0 0 0-4.6L18.8 3.24a3.25 3.25 0 0 0-4.6 0L3.24 14.2ZM12.75 9a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"])));
const Patch24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Patch24Regular', "24", ["M12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.25 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-1.75 1.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 10.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.24 18.3a3.25 3.25 0 0 1 0-4.6L13.7 3.24a3.25 3.25 0 0 1 4.6 0l2.46 2.46a3.25 3.25 0 0 1 0 4.6L10.3 20.76a3.25 3.25 0 0 1-4.6 0L3.24 18.3Zm1.06-3.54c-.69.69-.69 1.8 0 2.48l2.46 2.46c.69.68 1.8.68 2.48 0l1.7-1.7L6 13.06l-1.7 1.7ZM16.94 12 12 7.06 7.06 12 12 16.94 16.94 12ZM18 10.94l1.7-1.7c.69-.69.69-1.8 0-2.48L17.24 4.3a1.75 1.75 0 0 0-2.48 0L13.06 6 18 10.94Zm-7.77-5.65-1-1a1.75 1.75 0 0 0-2.47 0L4.3 6.77c-.69.69-.69 1.8 0 2.48l1 1-1.07 1.05-1-1a3.25 3.25 0 0 1 0-4.59L5.7 3.24a3.25 3.25 0 0 1 4.6 0l1 1-1.07 1.05Zm2.48 14.48 1 1a3.25 3.25 0 0 0 4.59 0l2.46-2.47a3.25 3.25 0 0 0 0-4.6l-1-1-1.05 1.07 1 1c.67.68.67 1.78 0 2.47l-2.47 2.46c-.69.69-1.8.69-2.48 0l-1-1-1.05 1.07Z"])));
const Patient20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Patient20Filled', "20", ["M10 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6.5 14.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm10-1H6a1 1 0 0 0-1 1v8h2v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h2V4a1 1 0 0 0-1-1ZM5 13v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3H5Z"])));
const Patient20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Patient20Regular', "20", ["M10 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-2.5 8.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm10-1H6a1 1 0 0 0-1 1v8h2v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h2V4a1 1 0 0 0-1-1Zm-2 7H8v2h4v-2Zm-7 3v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3H5Z"])));
const Patient24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Patient24Filled', "24", ["M17.75 2C18.99 2 20 3 20 4.25v15.5C20 21 19 22 17.75 22H6.25C5.01 22 4 21 4 19.75V4.25c0-1.2.93-2.17 2.1-2.24L6.25 2h11.5Zm.75 14h-13v3.75c0 .42.34.75.75.75h11.5c.41 0 .75-.33.75-.75V16ZM7.75 17.5h8.5a.75.75 0 0 1 .1 1.5h-8.6a.75.75 0 0 1-.1-1.5h8.6-8.5Zm10-14H6.15a.75.75 0 0 0-.65.75V14.5H8v-2.25c0-.65.5-1.18 1.12-1.25h5.63c.65 0 1.18.49 1.24 1.12l.01.13v2.25h2.5V4.25a.75.75 0 0 0-.75-.75ZM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"])));
const Patient24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Patient24Regular', "24", ["M17.75 2C18.99 2 20 3 20 4.25v15.5C20 21 19 22 17.75 22H6.25C5.01 22 4 21 4 19.75V4.25c0-1.2.93-2.17 2.1-2.24L6.25 2h11.5Zm.75 14h-13v3.75c0 .42.34.75.75.75h11.5c.41 0 .75-.33.75-.75V16ZM7.75 17.5h8.5a.75.75 0 0 1 .1 1.5h-8.6a.75.75 0 0 1-.1-1.5h8.6-8.5Zm10-14H6.15a.75.75 0 0 0-.65.75V14.5H8v-2.25c0-.65.5-1.18 1.12-1.25h5.63c.65 0 1.18.49 1.24 1.12l.01.13v2.25h2.5V4.25a.75.75 0 0 0-.75-.75Zm-3.25 9h-5v2h5v-2ZM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"])));
const Patient32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Patient32Filled', "32", ["M20 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM10 24a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H10ZM5 5.5A3.5 3.5 0 0 1 8.5 2h15A3.5 3.5 0 0 1 27 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5v-21ZM8.5 4C7.67 4 7 4.67 7 5.5V20h3v-3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3h3V5.5c0-.83-.67-1.5-1.5-1.5h-15ZM7 26.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5V22H7v4.5Z"])));
const Patient32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Patient32Regular', "32", ["M16 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-6 12a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H10ZM5 5.5A3.5 3.5 0 0 1 8.5 2h15A3.5 3.5 0 0 1 27 5.5v21a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5v-21ZM8.5 4C7.67 4 7 4.67 7 5.5V20h3v-3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3h3V5.5c0-.83-.67-1.5-1.5-1.5h-15ZM7 26.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5V22H7v4.5ZM20 17h-8v3h8v-3Z"])));
const Pause12Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause12Filled', "12", ["M3 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Zm5 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8Z"])));
const Pause12Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause12Regular', "12", ["M2 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm1 0v6h1V3H3Zm4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3Zm1 0v6h1V3H8Z"])));
const Pause16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause16Filled', "16", ["M3.75 2C2.78 2 2 2.78 2 3.75v8.5c0 .97.78 1.75 1.75 1.75h1.5C6.22 14 7 13.22 7 12.25v-8.5C7 2.78 6.22 2 5.25 2h-1.5Zm7 0C9.78 2 9 2.78 9 3.75v8.5c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75v-8.5C14 2.78 13.22 2 12.25 2h-1.5Z"])));
const Pause16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause16Regular', "16", ["M3.75 2C2.78 2 2 2.78 2 3.75v8.5c0 .97.78 1.75 1.75 1.75h1.5C6.22 14 7 13.22 7 12.25v-8.5C7 2.78 6.22 2 5.25 2h-1.5ZM3 3.75c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v8.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 0 1-.75-.75v-8.5ZM10.75 2C9.78 2 9 2.78 9 3.75v8.5c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75v-8.5C14 2.78 13.22 2 12.25 2h-1.5ZM10 3.75c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v8.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 0 1-.75-.75v-8.5Z"])));
const Pause20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause20Filled', "20", ["M5 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm8 0a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2Z"])));
const Pause20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause20Regular', "20", ["M5 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5ZM4 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4Zm9-2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2Zm-1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4Z"])));
const Pause24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause24Filled', "24", ["M5.75 3C4.78 3 4 3.78 4 4.75v14.5c0 .97.78 1.75 1.75 1.75h3.5c.96 0 1.75-.78 1.75-1.75V4.75C11 3.78 10.2 3 9.25 3h-3.5Zm9 0C13.78 3 13 3.78 13 4.75v14.5c0 .97.78 1.75 1.75 1.75h3.5c.96 0 1.75-.78 1.75-1.75V4.75C20 3.78 19.2 3 18.25 3h-3.5Z"])));
const Pause24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause24Regular', "24", ["M6.25 3C5.01 3 4 4 4 5.25v13.5C4 19.99 5 21 6.25 21h2.5C9.99 21 11 20 11 18.75V5.25C11 4.01 10 3 8.75 3h-2.5ZM5.5 5.25c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1-.75-.75V5.25ZM15.25 3C14.01 3 13 4 13 5.25v13.5c0 1.24 1 2.25 2.25 2.25h2.5c1.24 0 2.25-1 2.25-2.25V5.25C20 4.01 19 3 17.75 3h-2.5Zm-.75 2.25c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1-.75-.75V5.25Z"])));
const Pause28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause28Filled', "28", ["M6.75 3A2.75 2.75 0 0 0 4 5.75v16.5A2.75 2.75 0 0 0 6.75 25h3a2.75 2.75 0 0 0 2.75-2.75V5.75A2.75 2.75 0 0 0 9.75 3h-3Zm11.5 0a2.75 2.75 0 0 0-2.75 2.75v16.5A2.75 2.75 0 0 0 18.25 25h3A2.75 2.75 0 0 0 24 22.25V5.75A2.75 2.75 0 0 0 21.25 3h-3Z"])));
const Pause28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause28Regular', "28", ["M6.75 3A2.75 2.75 0 0 0 4 5.75v16.5A2.75 2.75 0 0 0 6.75 25h3a2.75 2.75 0 0 0 2.75-2.75V5.75A2.75 2.75 0 0 0 9.75 3h-3ZM5.5 5.75c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v16.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25V5.75ZM18.25 3a2.75 2.75 0 0 0-2.75 2.75v16.5A2.75 2.75 0 0 0 18.25 25h3A2.75 2.75 0 0 0 24 22.25V5.75A2.75 2.75 0 0 0 21.25 3h-3ZM17 5.75c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v16.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25V5.75Z"])));
const Pause32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause32Filled', "32", ["M7.25 3A3.25 3.25 0 0 0 4 6.25v18.5C4 26.55 5.46 28 7.25 28h3.5c1.8 0 3.25-1.46 3.25-3.25V6.25C14 4.45 12.54 3 10.75 3h-3.5Zm14 0A3.25 3.25 0 0 0 18 6.25v18.5c0 1.8 1.46 3.25 3.25 3.25h3.5c1.8 0 3.25-1.46 3.25-3.25V6.25C28 4.45 26.54 3 24.75 3h-3.5Z"])));
const Pause32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause32Regular', "32", ["M7.25 3A3.25 3.25 0 0 0 4 6.25v18.5C4 26.55 5.46 28 7.25 28h3.5c1.8 0 3.25-1.46 3.25-3.25V6.25C14 4.45 12.54 3 10.75 3h-3.5ZM6 6.25C6 5.56 6.56 5 7.25 5h3.5c.69 0 1.25.56 1.25 1.25v18.5c0 .69-.56 1.25-1.25 1.25h-3.5C6.56 26 6 25.44 6 24.75V6.25ZM21.25 3A3.25 3.25 0 0 0 18 6.25v18.5c0 1.8 1.46 3.25 3.25 3.25h3.5c1.8 0 3.25-1.46 3.25-3.25V6.25C28 4.45 26.54 3 24.75 3h-3.5ZM20 6.25c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.25.56 1.25 1.25v18.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25V6.25Z"])));
const Pause48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause48Filled', "48", ["M11.75 6A3.75 3.75 0 0 0 8 9.75v28.5A3.75 3.75 0 0 0 11.75 42h6.5A3.75 3.75 0 0 0 22 38.25V9.75A3.75 3.75 0 0 0 18.25 6h-6.5Zm18 0A3.75 3.75 0 0 0 26 9.75v28.5A3.75 3.75 0 0 0 29.75 42h6.5A3.75 3.75 0 0 0 40 38.25V9.75A3.75 3.75 0 0 0 36.25 6h-6.5Z"])));
const Pause48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pause48Regular', "48", ["M11.75 6A3.75 3.75 0 0 0 8 9.75v28.5A3.75 3.75 0 0 0 11.75 42h6.5A3.75 3.75 0 0 0 22 38.25V9.75A3.75 3.75 0 0 0 18.25 6h-6.5ZM10.5 9.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v28.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25V9.75ZM29.75 6A3.75 3.75 0 0 0 26 9.75v28.5A3.75 3.75 0 0 0 29.75 42h6.5A3.75 3.75 0 0 0 40 38.25V9.75A3.75 3.75 0 0 0 36.25 6h-6.5ZM28.5 9.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v28.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25V9.75Z"])));
const PauseCircle20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseCircle20Filled', "20", ["M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm7-2.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5Zm3 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5Z"])));
const PauseCircle20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseCircle20Regular', "20", ["M9 7.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5Zm3 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"])));
const PauseCircle24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseCircle24Filled', "24", ["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.5 6.25v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Zm4.5 0v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Z"])));
const PauseCircle24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseCircle24Regular', "24", ["M10.5 8.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Zm4.5 0a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"])));
const PauseOff16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseOff16Filled', "16", ["m13.15 13.85 1 1a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7l1 1c-.1.2-.15.42-.15.65v9c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V7.7l2 2v2.8c0 .83.67 1.5 1.5 1.5h2c.23 0 .45-.05.65-.15ZM9 6.88l5 5V3.5c0-.83-.67-1.5-1.5-1.5h-2C9.67 2 9 2.67 9 3.5v3.38ZM4.12 2 7 4.88V3.5C7 2.67 6.33 2 5.5 2H4.12Z"])));
const PauseOff16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseOff16Regular', "16", ["m13.15 13.85 1 1a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7l1 1c-.1.2-.15.42-.15.65v9c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V7.7l2 2v2.8c0 .83.67 1.5 1.5 1.5h2c.23 0 .45-.05.65-.15Zm-.86-.85H10.5a.5.5 0 0 1-.5-.5v-1.8l2.3 2.3ZM6 6.7v5.8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V3.7l3 3Zm0-3.2v.38l1 1V3.5C7 2.67 6.33 2 5.5 2H4.12l1 1h.38c.28 0 .5.22.5.5Zm3 3.38 1 1V3.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v7.38l1 1V3.5c0-.83-.67-1.5-1.5-1.5h-2C9.67 2 9 2.67 9 3.5v3.38Z"])));
const PauseOff20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseOff20Filled', "20", ["M3 3.7v12.8c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V8.7l4 4v3.8c0 .83.67 1.5 1.5 1.5h2c.49 0 .92-.23 1.2-.6l.45.45a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7l.85.86Zm9 6.18 5 5V3.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v6.38ZM4.16 2.04 8 5.88V3.5C8 2.67 7.33 2 6.5 2h-2c-.12 0-.23.01-.34.04Z"])));
const PauseOff20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseOff20Regular', "20", ["m3 3.7-.85-.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-.45-.45c-.28.37-.71.6-1.2.6h-2a1.5 1.5 0 0 1-1.5-1.5v-3.8l-4-4v7.8c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 3 16.5V3.7Zm4 4-3-3v11.8c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5V7.7Zm6 6v2.8c0 .28.22.5.5.5h2a.5.5 0 0 0 .47-.32L13 13.7ZM7 3.5v1.38l1 1V3.5C8 2.67 7.33 2 6.5 2h-2c-.12 0-.23.01-.34.04l.96.96H6.5c.28 0 .5.22.5.5Zm5 6.38 1 1V3.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v10.38l1 1V3.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v6.38Z"])));
const PauseSettings16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseSettings16Filled', "16", ["M3.5 2C2.67 2 2 2.67 2 3.5v9c0 .83.67 1.5 1.5 1.5h2c.23 0 .45-.05.64-.14A5.48 5.48 0 0 1 7 6.26V3.5C7 2.67 6.33 2 5.5 2h-2ZM14 3.5v2.76A5.48 5.48 0 0 0 9 5.2V3.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5ZM8.07 7.44a2 2 0 0 1-1.44 2.48l-.46.12a4.71 4.71 0 0 0 .01 1.01l.35.09A2 2 0 0 1 8 13.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 13 7.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"])));
const PauseSettings16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseSettings16Regular', "16", ["M3.5 2C2.67 2 2 2.67 2 3.5v9c0 .83.67 1.5 1.5 1.5h2c.23 0 .45-.05.64-.14a5.5 5.5 0 0 1-.54-.87.5.5 0 0 1-.1.01h-2a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v3.84c.28-.4.62-.77 1-1.08V3.5C7 2.67 6.33 2 5.5 2h-2ZM14 3.5v2.76a5.5 5.5 0 0 0-1-.66V3.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v1.52c-.34.03-.68.1-1 .19V3.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5ZM8.07 7.44a2 2 0 0 1-1.44 2.48l-.46.12a4.71 4.71 0 0 0 .01 1.01l.35.09A2 2 0 0 1 8 13.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 13 7.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"])));
const PauseSettings20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseSettings20Filled', "20", ["M12 3.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v6.1a5.48 5.48 0 0 0-5 0V3.5Zm-9 0C3 2.67 3.67 2 4.5 2h2C7.33 2 8 2.67 8 3.5v13c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 3 16.5v-13Zm9.07 7.94a2 2 0 0 1-1.44 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"])));
const PauseSettings20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PauseSettings20Regular', "20", ["M4.5 2C3.67 2 3 2.67 3 3.5v13c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-13C8 2.67 7.33 2 6.5 2h-2Zm0 1h2c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-13c0-.28.22-.5.5-.5Zm9-1c-.83 0-1.5.67-1.5 1.5v6.1c.32-.16.65-.3 1-.4V3.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v5.7c.35.1.68.24 1 .4V3.5c0-.83-.67-1.5-1.5-1.5h-2Zm-1.43 9.44a2 2 0 0 1-1.44 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.73 4.73 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"])));
const Payment16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment16Filled', "16", ["M3.5 3A2.5 2.5 0 0 0 1 5.5V6h14v-.5A2.5 2.5 0 0 0 12.5 3h-9ZM15 7H1v3.5A2.5 2.5 0 0 0 3.5 13h9a2.5 2.5 0 0 0 2.5-2.5V7Zm-4.5 3h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z"])));
const Payment16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment16Regular', "16", ["M10.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-5ZM14 6v-.5c0-.83-.67-1.5-1.5-1.5h-9C2.67 4 2 4.67 2 5.5V6h12ZM2 7v3.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H2Z"])));
const Payment20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment20Filled', "20", ["M4.75 4A2.75 2.75 0 0 0 2 6.75V8h16V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM18 9H2v4.25A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25V9Zm-4.5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z"])));
const Payment20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment20Regular', "20", ["M13.5 13a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM4.75 5C3.78 5 3 5.78 3 6.75V8h14V6.75C17 5.78 16.22 5 15.25 5H4.75ZM17 9H3v4.25c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75V9Z"])));
const Payment24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment24Filled', "24", ["M5.25 5A3.25 3.25 0 0 0 2 8.25V9.5h20V8.25C22 6.45 20.54 5 18.75 5H5.25ZM22 11H2v4.75C2 17.55 3.46 19 5.25 19h13.5c1.8 0 3.25-1.46 3.25-3.25V11Zm-6.25 3.5h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5Z"])));
const Payment24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment24Regular', "24", ["M15.75 14.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5ZM2 8.25C2 6.45 3.46 5 5.25 5h13.5C20.55 5 22 6.46 22 8.25v7.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 15.75v-7.5ZM20.5 9.5V8.25c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75V9.5h17ZM3.5 11v4.75c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75V11h-17Z"])));
const Payment28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment28Filled', "28", ["M5.75 5A3.75 3.75 0 0 0 2 8.75v.75h24v-.75A3.75 3.75 0 0 0 22.25 5H5.75ZM2 19.25V11h24v8.25A3.75 3.75 0 0 1 22.25 23H5.75A3.75 3.75 0 0 1 2 19.25Zm16.25-2.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"])));
const Payment28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment28Regular', "28", ["M18.25 16.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM2 8.75A3.75 3.75 0 0 1 5.75 5h16.5A3.75 3.75 0 0 1 26 8.75v10.5A3.75 3.75 0 0 1 22.25 23H5.75A3.75 3.75 0 0 1 2 19.25V8.75ZM5.75 6.5c-1.24 0-2.25 1-2.25 2.25v.75h21v-.75c0-1.24-1-2.25-2.25-2.25H5.75ZM3.5 19.25c0 1.24 1.01 2.25 2.25 2.25h16.5c1.24 0 2.25-1 2.25-2.25V11h-21v8.25Z"])));
const Payment32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment32Filled', "32", ["M6.5 5A4.5 4.5 0 0 0 2 9.5V11h28V9.5A4.5 4.5 0 0 0 25.5 5h-19ZM2 22.5V13h28v9.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5ZM21 19a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"])));
const Payment32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment32Regular', "32", ["M2 9.5A4.5 4.5 0 0 1 6.5 5h19A4.5 4.5 0 0 1 30 9.5v13a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13ZM6.5 7A2.5 2.5 0 0 0 4 9.5V11h24V9.5A2.5 2.5 0 0 0 25.5 7h-19ZM4 22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5V13H4v9.5ZM21 19h3a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2Z"])));
const Payment48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment48Filled', "48", ["M10.25 9A6.25 6.25 0 0 0 4 15.25v3.25h40v-3.25C44 11.8 41.2 9 37.75 9h-27.5ZM4 32.75V21h40v11.75C44 36.2 41.2 39 37.75 39h-27.5A6.25 6.25 0 0 1 4 32.75Zm27.25-3.25a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5h-5.5Z"])));
const Payment48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Payment48Regular', "48", ["M4 15.25C4 11.8 6.8 9 10.25 9h27.5C41.2 9 44 11.8 44 15.25v17.5C44 36.2 41.2 39 37.75 39h-27.5A6.25 6.25 0 0 1 4 32.75v-17.5Zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v3.25h35v-3.25a3.75 3.75 0 0 0-3.75-3.75h-27.5ZM6.5 32.75a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75V21h-35v11.75Zm24.75-3.25a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5h-5.5Z"])));
const Pen16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen16Filled', "16", ["M10.73 2.56a1.91 1.91 0 0 1 2.71 2.7l-.73.74.26.26c.68.69.68 1.8 0 2.48l-1.12 1.11a.5.5 0 0 1-.7-.7l1.11-1.12c.3-.3.3-.77 0-1.06L12 6.71l-5.95 5.95c-.19.18-.4.32-.65.4l-2.74.91a.5.5 0 0 1-.63-.63l.91-2.74c.08-.24.22-.46.4-.65l7.4-7.39Z"])));
const Pen16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen16Regular', "16", ["M13.44 2.56a1.91 1.91 0 0 0-2.7 0l-7.4 7.4c-.18.18-.32.4-.4.64l-.91 2.74a.5.5 0 0 0 .63.63l2.74-.91c.24-.08.46-.22.65-.4L12 6.71l.26.26c.3.3.3.77 0 1.06l-1.11 1.12a.5.5 0 1 0 .7.7l1.12-1.11c.68-.69.68-1.8 0-2.48L12.71 6l.73-.73c.75-.75.75-1.96 0-2.7Zm-1.78 3.07a.46.46 0 0 0-.03.03l-6.3 6.3a.65.65 0 0 1-.25.15l-1.79.6.6-1.8c.03-.09.08-.18.16-.25l7.39-7.4a.91.91 0 1 1 1.3 1.3l-1.08 1.07Z"])));
const Pen20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen20Filled', "20", ["M12.92 2.87a2.97 2.97 0 0 1 4.2 4.21l-.66.67.33.34a2 2 0 0 1 0 2.82l-.94.94a.5.5 0 0 1-.7-.7l.94-.94a1 1 0 0 0 0-1.42l-.34-.33-7.98 7.98c-.34.34-.77.57-1.24.68l-3.92.87a.5.5 0 0 1-.6-.6l.88-3.95c.1-.45.33-.86.66-1.2l9.37-9.37Z"])));
const Pen20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen20Regular', "20", ["M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.32-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.88c.47-.1.9-.33 1.24-.67l7.98-7.98.34.33a1 1 0 0 1 0 1.42l-.94.94a.5.5 0 0 0 .7.7l.94-.94a2 2 0 0 0 0-2.82l-.33-.34.67-.67a2.97 2.97 0 0 0 .05-4.15Zm-3.55.65a1.97 1.97 0 0 1 2.79 2.8l-9.36 9.35c-.2.2-.46.35-.74.4l-3.16.71.7-3.18c.07-.27.2-.51.4-.7l9.37-9.38Z"])));
const Pen24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen24Filled', "24", ["M15.9 3.05a3.58 3.58 0 1 1 5.05 5.06l-.89.89a3.25 3.25 0 0 1 0 4.6l-1.79 1.77a.75.75 0 1 1-1.06-1.06L19 12.53c.68-.68.68-1.79 0-2.47l-10 10c-.4.4-.92.7-1.48.82l-4.6 1.1a.75.75 0 0 1-.9-.9l1.1-4.6A3.1 3.1 0 0 1 3.94 15L15.9 3.05Z"])));
const Pen24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen24Regular', "24", ["M20.95 3.05a3.58 3.58 0 0 0-5.06 0L3.94 15c-.4.4-.7.92-.82 1.48l-1.1 4.6a.75.75 0 0 0 .9.9l4.6-1.1A3.1 3.1 0 0 0 9 20.06l10-10c.68.68.68 1.79 0 2.47l-1.79 1.78a.75.75 0 1 0 1.06 1.06l1.79-1.78a3.25 3.25 0 0 0 0-4.59l.9-.9a3.58 3.58 0 0 0 0-5.05Zm-4 1.06a2.08 2.08 0 1 1 2.94 2.94L7.94 19a1.6 1.6 0 0 1-.76.43l-3.42.8.82-3.4c.06-.3.21-.56.42-.77L16.95 4.1Z"])));
const Pen28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen28Filled', "28", ["M19.29 3.15a3.93 3.93 0 1 1 5.56 5.56l-1.54 1.54a3.25 3.25 0 0 1-.05 4.55l-1.98 1.98a.75.75 0 1 1-1.06-1.06l1.98-1.98c.67-.67.68-1.74.05-2.43L10.06 23.5c-.44.44-.98.76-1.58.93l-5.53 1.54a.75.75 0 0 1-.92-.92l1.54-5.53c.17-.6.5-1.14.93-1.58L19.3 3.15Z"])));
const Pen28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen28Regular', "28", ["M24.85 3.15a3.93 3.93 0 0 0-5.56 0L4.5 17.94c-.44.44-.76.98-.93 1.58l-1.54 5.53a.75.75 0 0 0 .92.92l5.53-1.54c.6-.17 1.14-.5 1.58-.93L22.25 11.3c.63.69.62 1.76-.05 2.43l-1.98 1.98a.75.75 0 1 0 1.06 1.06l1.98-1.98a3.25 3.25 0 0 0 .05-4.55l1.54-1.54a3.93 3.93 0 0 0 0-5.56Zm-4.5 1.06a2.43 2.43 0 1 1 3.44 3.44L9 22.44c-.26.26-.58.44-.93.54l-4.24 1.19 1.19-4.24c.1-.35.28-.67.54-.93L20.35 4.2Z"])));
const Pen32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen32Filled', "32", ["M21.65 3.43a4.89 4.89 0 1 1 6.91 6.92l-.9.9.28.27a3.5 3.5 0 0 1 0 4.95l-2.23 2.24a1 1 0 0 1-1.42-1.42l2.24-2.23a1.5 1.5 0 0 0 0-2.12l-.28-.28-14.98 14.98c-.5.5-1.14.86-1.84 1l-6.22 1.34a1 1 0 0 1-1.19-1.19l1.34-6.22c.14-.7.5-1.34 1-1.84l17.29-17.3Z"])));
const Pen32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen32Regular', "32", ["M28.56 3.43c-1.9-1.9-5-1.9-6.91 0l-17.3 17.3a3.7 3.7 0 0 0-1 1.84l-1.33 6.22a1 1 0 0 0 1.19 1.19l6.22-1.34a3.7 3.7 0 0 0 1.84-1l14.98-14.98.28.28a1.5 1.5 0 0 1 0 2.12l-2.24 2.23a1 1 0 0 0 1.42 1.42l2.23-2.24a3.5 3.5 0 0 0 0-4.95l-.28-.27.9-.9c1.91-1.91 1.91-5 0-6.92Zm-5.5 1.42a2.89 2.89 0 0 1 4.09 4.08l-17.3 17.3c-.23.23-.52.39-.84.46l-4.7 1 1-4.7c.07-.32.23-.62.46-.85l17.3-17.3Z"])));
const Pen48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen48Filled', "48", ["M32.2 6.03a6.9 6.9 0 1 1 9.77 9.76l-2.23 2.24.94 1a4.25 4.25 0 0 1-.1 5.9l-3.45 3.45a1.25 1.25 0 0 1-1.76-1.76l3.44-3.45c.67-.67.69-1.75.04-2.43l-.88-.94-20.16 20.16a6 6 0 0 1-2.76 1.58l-9.49 2.42a1.25 1.25 0 0 1-1.52-1.52l2.43-9.49a6 6 0 0 1 1.57-2.75L32.2 6.03Z"])));
const Pen48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pen48Regular', "48", ["M41.97 6.02a6.9 6.9 0 0 0-9.76 0L8.04 30.2a6 6 0 0 0-1.57 2.75l-2.43 9.49a1.25 1.25 0 0 0 1.52 1.52l9.49-2.42a6 6 0 0 0 2.76-1.58L37.97 19.8l.88.94c.65.68.63 1.76-.04 2.43l-3.44 3.45a1.25 1.25 0 0 0 1.76 1.76l3.45-3.44a4.25 4.25 0 0 0 .1-5.91l-.94-1 2.23-2.24a6.9 6.9 0 0 0 0-9.77Zm-8 1.77a4.4 4.4 0 0 1 6.24 6.23L16.04 38.2c-.45.44-1 .76-1.61.91l-7.45 1.9 1.9-7.44c.16-.6.48-1.16.93-1.6L33.97 7.78Z"])));
const PenDismiss16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss16Filled', "16", ["M9.73 1.56a1.91 1.91 0 0 1 2.71 2.7l-.84.85A5.53 5.53 0 0 0 5 10.5c0 .38.04.74.11 1.1l-.06.06c-.19.18-.4.32-.65.4l-2.74.91a.5.5 0 0 1-.63-.63l.91-2.74c.08-.24.22-.46.4-.65l7.4-7.39ZM15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L10.5 9.79 9.35 8.65a.5.5 0 1 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z"])));
const PenDismiss16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss16Regular', "16", ["M12.44 1.56a1.91 1.91 0 0 0-2.7 0l-7.4 7.4c-.18.18-.32.4-.4.64l-.91 2.74a.5.5 0 0 0 .63.63l2.74-.91c.24-.08.46-.22.65-.4l.06-.06a5.53 5.53 0 0 1-.1-1.31l-.67.66a.65.65 0 0 1-.26.16l-1.79.6.6-1.8c.03-.09.08-.18.16-.25l7.39-7.4a.91.91 0 1 1 1.3 1.3L10.28 5a5.6 5.6 0 0 1 1.3.11l.85-.84c.75-.75.75-1.96 0-2.71ZM15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7L10.5 9.79 9.35 8.65a.5.5 0 1 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z"])));
const PenDismiss20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss20Filled', "20", ["M12.92 2.87a2.97 2.97 0 0 1 4.2 4.21L15 9.21A5.5 5.5 0 0 0 8.2 16l-.43.44c-.34.34-.77.57-1.24.68l-3.92.87a.5.5 0 0 1-.6-.6l.88-3.95c.1-.45.33-.86.66-1.2l9.37-9.37ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z"])));
const PenDismiss20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss20Regular', "20", ["M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.32-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.88c.47-.1.9-.33 1.24-.67L8.2 16c-.11-.39-.18-.8-.2-1.21l-.95.94c-.2.2-.46.35-.74.4l-3.16.71.7-3.18c.07-.27.2-.51.4-.7l9.37-9.38a1.97 1.97 0 0 1 2.79 2.8L13.78 9c.42.02.83.09 1.22.2l2.13-2.13a2.97 2.97 0 0 0 .05-4.15ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z"])));
const PenDismiss24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss24Filled', "24", ["M15.9 3.05a3.58 3.58 0 1 1 5.05 5.06l-3.04 3.04a6.52 6.52 0 0 0-7.76 7.76L9 20.06c-.4.4-.92.7-1.48.82l-4.6 1.1a.75.75 0 0 1-.9-.9l1.1-4.6A3.1 3.1 0 0 1 3.94 15L15.9 3.05ZM22 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64-1.65-1.64Z"])));
const PenDismiss24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss24Regular', "24", ["M20.95 3.05a3.58 3.58 0 0 0-5.06 0L3.94 15c-.4.4-.7.92-.82 1.48l-1.1 4.6a.75.75 0 0 0 .9.9l4.6-1.1A3.1 3.1 0 0 0 9 20.06l1.15-1.15a6.52 6.52 0 0 1-.12-2L7.94 19a1.6 1.6 0 0 1-.76.43l-3.42.8.82-3.4c.06-.3.21-.56.42-.77L16.95 4.11a2.08 2.08 0 1 1 2.94 2.94l-3.98 3.98a6.55 6.55 0 0 1 2 .12l3.04-3.04a3.58 3.58 0 0 0 0-5.06ZM22 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.15-2.35a.5.5 0 0 0-.7.7l1.64 1.65-1.64 1.65a.5.5 0 0 0 .7.7l1.65-1.64 1.65 1.64a.5.5 0 0 0 .7-.7l-1.64-1.65 1.64-1.65a.5.5 0 0 0-.7-.7l-1.65 1.64-1.65-1.64Z"])));
const PenDismiss28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss28Filled', "28", ["M19.29 3.15a3.93 3.93 0 1 1 5.56 5.56l-4.36 4.36a7.5 7.5 0 0 0-8.43 8.43l-2 2c-.44.44-.98.76-1.58.93l-5.53 1.54a.75.75 0 0 1-.92-.92l1.54-5.53c.17-.6.5-1.14.93-1.58L19.3 3.15ZM26 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-9.15-3.35a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7l-2.64-2.65 2.64-2.65a.5.5 0 0 0-.7-.7l-2.65 2.64-2.65-2.64Z"])));
const PenDismiss28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss28Regular', "28", ["M24.85 3.15a3.93 3.93 0 0 0-5.56 0L4.5 17.94c-.44.44-.76.98-.93 1.58l-1.54 5.53a.75.75 0 0 0 .92.92l5.53-1.54c.6-.17 1.14-.5 1.58-.93l2-2a7.56 7.56 0 0 1 .03-2.15L9 22.44c-.26.26-.58.44-.93.54l-4.24 1.19 1.19-4.24c.1-.35.28-.67.54-.93L20.35 4.2a2.43 2.43 0 1 1 3.44 3.44l-5.44 5.44a7.56 7.56 0 0 1 2.14-.02l4.36-4.36a3.93 3.93 0 0 0 0-5.56ZM26 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-9.15-3.35a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7l-2.64-2.65 2.64-2.65a.5.5 0 0 0-.7-.7l-2.65 2.64-2.65-2.64Z"])));
const PenDismiss32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss32Filled', "32", ["M21.65 3.43a4.89 4.89 0 1 1 6.91 6.92l-4.01 4.02a9 9 0 0 0-11.18 11.18l-2.1 2.1c-.5.5-1.14.85-1.84 1l-6.22 1.33a1 1 0 0 1-1.19-1.19l1.34-6.22c.14-.7.5-1.34 1-1.84l17.29-17.3ZM22 15.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm2.72 3.72L22 21.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L20.94 23l-2.72 2.72a.75.75 0 1 0 1.06 1.06L22 24.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L23.06 23l2.72-2.72a.75.75 0 1 0-1.06-1.06Z"])));
const PenDismiss32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss32Regular', "32", ["M28.56 3.43c-1.9-1.9-5-1.9-6.91 0l-17.3 17.3a3.7 3.7 0 0 0-1 1.84l-1.33 6.22a1 1 0 0 0 1.19 1.19l6.22-1.34a3.7 3.7 0 0 0 1.84-1l2.1-2.1A9 9 0 0 1 13 23.1l-3.14 3.14c-.24.23-.53.4-.85.46l-4.7 1 1-4.7c.07-.32.23-.61.46-.85l17.3-17.3a2.89 2.89 0 0 1 4.08 4.1L22.08 14a9 9 0 0 1 2.47.37l4.01-4.02c1.91-1.91 1.91-5 0-6.92ZM22 15.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm2.72 3.72L22 21.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L20.94 23l-2.72 2.72a.75.75 0 1 0 1.06 1.06L22 24.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L23.06 23l2.72-2.72a.75.75 0 1 0-1.06-1.06Z"])));
const PenDismiss48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss48Filled', "48", ["M32.2 6.03a6.9 6.9 0 1 1 9.77 9.76l-6.45 6.45a13 13 0 0 0-15.28 15.28l-2.43 2.44a6 6 0 0 1-2.76 1.58l-9.49 2.42a1.25 1.25 0 0 1-1.52-1.52l2.43-9.48a6 6 0 0 1 1.57-2.76L32.2 6.03ZM44 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-5.3-4.3a1 1 0 0 0-1.4-1.4L33 33.58l-4.3-4.3a1 1 0 0 0-1.4 1.42L31.58 35l-4.3 4.3a1 1 0 0 0 1.42 1.4L33 36.42l4.3 4.3a1 1 0 0 0 1.4-1.42L34.42 35l4.3-4.3Z"])));
const PenDismiss48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenDismiss48Regular', "48", ["M41.97 6.03a6.9 6.9 0 0 0-9.76 0L8.04 30.2a6 6 0 0 0-1.57 2.76l-2.43 9.48a1.25 1.25 0 0 0 1.52 1.52l9.49-2.42a6 6 0 0 0 2.76-1.58l2.44-2.44a13.07 13.07 0 0 1-.23-3.3l-3.98 3.98c-.45.44-1 .76-1.61.91l-7.45 1.9 1.9-7.44c.16-.6.48-1.16.93-1.6L33.97 7.78a4.4 4.4 0 0 1 6.24 6.24l-8 8a13.2 13.2 0 0 1 3.31.21l6.45-6.45a6.9 6.9 0 0 0 0-9.76ZM44 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-5.3-4.3a1 1 0 0 0-1.4-1.4L33 33.58l-4.3-4.3a1 1 0 0 0-1.4 1.42L31.58 35l-4.3 4.3a1 1 0 0 0 1.42 1.4L33 36.42l4.3 4.3a1 1 0 0 0 1.4-1.42L34.42 35l4.3-4.3Z"])));
const PenOff16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff16Filled', "16", ["m9 9.7 5.15 5.15a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7L6.29 7 3.34 9.95c-.18.19-.32.4-.4.65l-.91 2.74a.5.5 0 0 0 .63.63l2.74-.91c.24-.08.46-.22.65-.4L9 9.71Zm3.26-1.67-1.05 1.06.7.7 1.06-1.05c.68-.69.68-1.8 0-2.48L12.71 6l.73-.73a1.91 1.91 0 0 0-2.7-2.71L7.7 5.59l2.7 2.7L12 6.71l.26.26c.3.3.3.77 0 1.06Z"])));
const PenOff16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff16Regular', "16", ["m9 9.7 5.15 5.15a.5.5 0 0 0 .7-.7l-13-13a.5.5 0 1 0-.7.7L6.29 7 3.34 9.95c-.18.19-.32.4-.4.65l-.91 2.74a.5.5 0 0 0 .63.63l2.74-.91c.24-.08.46-.22.65-.4L9 9.71ZM8.3 9l-2.96 2.95a.65.65 0 0 1-.26.16l-1.79.6.6-1.8c.03-.09.08-.18.16-.25L7 7.71 8.3 9Zm3.33-3.34L9.71 7.6l.7.7L12 6.71l.26.26c.3.3.3.77 0 1.06l-1.05 1.06.7.7 1.06-1.05c.68-.69.68-1.8 0-2.48L12.71 6l.73-.73a1.91 1.91 0 0 0-2.7-2.71L7.7 5.59l.7.7 3.03-3.02a.91.91 0 1 1 1.3 1.3l-1.08 1.06a.46.46 0 0 0-.03.03Z"])));
const PenOff20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff20Filled', "20", ["M2.85 2.15a.5.5 0 1 0-.7.7l5.4 5.4-4 4c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68l3.98-3.98 5.4 5.4a.5.5 0 0 0 .7-.71l-15-15Zm12.9 6.3-2.59 2.6-4.2-4.21 3.96-3.97a2.97 2.97 0 0 1 4.2 4.21l-.66.67.33.34a2 2 0 0 1 0 2.82l-.94.94a.5.5 0 0 1-.7-.7l.94-.94a1 1 0 0 0 0-1.42l-.34-.33Z"])));
const PenOff20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff20Regular', "20", ["M2.85 2.15a.5.5 0 1 0-.7.7l5.4 5.4-4 4c-.33.32-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.88c.47-.1.9-.33 1.24-.67l3.98-3.98 5.4 5.4a.5.5 0 0 0 .7-.71l-15-15Zm8.2 9.6-3.99 3.98c-.2.2-.46.35-.74.4l-3.16.71.7-3.18c.07-.27.2-.51.4-.7l3.99-4 2.8 2.79Zm5.37-5.38-3.96 3.97.7.7 2.59-2.58.34.33a1 1 0 0 1 0 1.42l-.94.94a.5.5 0 1 0 .7.7l.94-.94a2 2 0 0 0 0-2.82l-.33-.34.67-.67a2.97 2.97 0 0 0-4.21-4.2L8.96 6.83l.7.7 3.97-3.96a1.97 1.97 0 0 1 2.79 2.8Z"])));
const PenOff24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff24Filled', "24", ["m14 15.06 6.72 6.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 0 0-1.06 1.06L8.94 10l-5 5c-.4.4-.7.92-.82 1.48l-1.1 4.6a.75.75 0 0 0 .9.9l4.6-1.1A3.1 3.1 0 0 0 9 20.06l5-5Zm5-2.53-1.65 1.64 1.06 1.06 1.65-1.64a3.25 3.25 0 0 0 0-4.6l.9-.88a3.58 3.58 0 0 0-5.07-5.06l-4.83 4.83 5.06 5.06L19 10.06c.68.68.68 1.79 0 2.47Z"])));
const PenOff24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff24Regular', "24", ["M8.94 10 2.22 3.28a.75.75 0 0 1 1.06-1.06l18.5 18.5a.75.75 0 1 1-1.06 1.06L14 15.06l-5 5c-.4.4-.92.7-1.48.82l-4.6 1.1a.75.75 0 0 1-.9-.9l1.1-4.6A3.1 3.1 0 0 1 3.94 15l5-5Zm4 4L10 11.06l-5 5a1.6 1.6 0 0 0-.42.76l-.82 3.42 3.42-.81c.29-.07.55-.22.76-.43l5-5Zm6.95-6.95-4.83 4.83 1.06 1.06L19 10.06c.68.68.68 1.79 0 2.47l-1.65 1.64 1.06 1.06 1.64-1.64A3.25 3.25 0 0 0 20.07 9l.9-.9a3.58 3.58 0 0 0-5.07-5.05l-4.83 4.83 1.06 1.06 4.83-4.83a2.08 2.08 0 1 1 2.94 2.94Z"])));
const PenOff28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff28Filled', "28", ["m16.25 17.31 8.47 8.47a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.47 8.47-6.19 6.19c-.44.44-.76.98-.93 1.58l-1.54 5.53a.75.75 0 0 0 .92.92l5.53-1.54c.6-.17 1.14-.5 1.58-.93l6.19-6.19Zm-3.44-7.68 5.56 5.56 3.88-3.88c.63.69.62 1.76-.05 2.43l-1.98 1.98a.75.75 0 1 0 1.06 1.06l1.98-1.98a3.25 3.25 0 0 0 .05-4.55l1.54-1.54a3.93 3.93 0 1 0-5.56-5.56L12.8 9.63Z"])));
const PenOff28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff28Regular', "28", ["M10.69 11.75 2.22 3.28a.75.75 0 1 1 1.06-1.06l22.5 22.5a.75.75 0 0 1-1.06 1.06l-8.47-8.47-6.19 6.19c-.44.44-.98.76-1.58.93l-5.53 1.54a.75.75 0 0 1-.92-.92l1.54-5.53c.17-.6.5-1.14.93-1.58l6.19-6.19Zm4.5 4.5-3.44-3.44L5.56 19c-.26.26-.44.58-.54.93l-1.19 4.24 4.24-1.19c.35-.1.67-.28.93-.54l6.19-6.19ZM12.8 9.63l1.06 1.06 6.48-6.48a2.43 2.43 0 1 1 3.44 3.44l-6.48 6.48 1.06 1.06 3.88-3.88c.63.69.62 1.76-.05 2.43l-1.98 1.98a.75.75 0 1 0 1.06 1.06l1.98-1.98a3.25 3.25 0 0 0 .05-4.55l1.54-1.54a3.93 3.93 0 1 0-5.56-5.56L12.8 9.63Z"])));
const PenOff32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff32Filled', "32", ["m18.75 20.16 9.54 9.55a1 1 0 0 0 1.42-1.42l-26-26a1 1 0 0 0-1.42 1.42l9.55 9.54-7.48 7.48a3.7 3.7 0 0 0-1 1.84l-1.34 6.22a1 1 0 0 0 1.19 1.19l6.22-1.34a3.7 3.7 0 0 0 1.84-1l7.48-7.48Zm7.5-7.5-5.02 5.03-6.92-6.92 7.34-7.34a4.89 4.89 0 1 1 6.91 6.92l-.9.9.28.27a3.5 3.5 0 0 1 0 4.95l-2.23 2.24a1 1 0 0 1-1.42-1.42l2.23-2.23a1.5 1.5 0 0 0 0-2.12l-.27-.28Z"])));
const PenOff32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff32Regular', "32", ["m18.75 20.16 9.54 9.55a1 1 0 0 0 1.42-1.42l-26-26a1 1 0 0 0-1.42 1.42l9.55 9.54-7.48 7.48a3.7 3.7 0 0 0-1 1.84l-1.34 6.22a1 1 0 0 0 1.19 1.19l6.22-1.34a3.7 3.7 0 0 0 1.84-1l7.48-7.48Zm-1.41-1.41-7.48 7.48c-.24.23-.53.39-.85.46l-4.7 1 1-4.7c.07-.32.23-.62.46-.85l7.48-7.48 4.09 4.09Zm9.81-9.82-7.34 7.34 1.42 1.42 5.02-5.03.27.28a1.5 1.5 0 0 1 0 2.12l-2.23 2.23a1 1 0 0 0 1.42 1.42l2.23-2.24a3.5 3.5 0 0 0 0-4.95l-.28-.27.9-.9a4.89 4.89 0 1 0-6.91-6.92l-7.34 7.34 1.42 1.42 7.33-7.34a2.89 2.89 0 1 1 4.09 4.08Z"])));
const PenOff48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff48Filled', "48", ["m28 29.77 13.87 13.86a1.25 1.25 0 0 0 1.76-1.76L6.13 4.37a1.25 1.25 0 1 0-1.76 1.76L18.23 20 8.03 30.2a6 6 0 0 0-1.56 2.76l-2.43 9.48a1.25 1.25 0 0 0 1.52 1.52l9.49-2.42a6 6 0 0 0 2.76-1.58L28 29.76Zm9.97-9.97-6.43 6.43-9.77-9.76L32.2 6.03a6.9 6.9 0 1 1 9.76 9.76l-2.23 2.24.94 1a4.25 4.25 0 0 1-.1 5.9l-3.45 3.45a1.25 1.25 0 0 1-1.76-1.76l3.44-3.45c.67-.67.69-1.75.04-2.43l-.88-.94Z"])));
const PenOff48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenOff48Regular', "48", ["m28 29.77 13.87 13.86a1.25 1.25 0 0 0 1.76-1.76L6.13 4.37a1.25 1.25 0 1 0-1.76 1.76L18.23 20 8.03 30.2a6 6 0 0 0-1.56 2.76l-2.43 9.48a1.25 1.25 0 0 0 1.52 1.52l9.49-2.42a6 6 0 0 0 2.76-1.58L28 29.76ZM26.23 28l-10.2 10.2c-.44.44-1 .76-1.6.91l-7.45 1.9 1.9-7.44c.16-.6.48-1.16.93-1.6L20 21.76 26.22 28Zm13.98-13.97L29.77 24.47l1.77 1.76 6.43-6.43.88.94c.65.68.63 1.76-.04 2.43l-3.44 3.45a1.25 1.25 0 0 0 1.76 1.76l3.45-3.44a4.25 4.25 0 0 0 .1-5.91l-.94-1 2.23-2.24a6.9 6.9 0 0 0-9.76-9.76L21.77 16.47l1.77 1.76L33.97 7.8a4.4 4.4 0 0 1 6.24 6.24Z"])));
const PenProhibited16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited16Filled', "16", ["M12.44 1.56a1.91 1.91 0 0 0-2.7 0l-7.4 7.4c-.18.18-.32.4-.4.64l-.91 2.74a.5.5 0 0 0 .63.63l2.74-.91c.24-.08.46-.22.65-.4l.06-.06A5.53 5.53 0 0 1 10.5 5c.38 0 .74.04 1.1.11l.84-.84c.75-.75.75-1.96 0-2.7ZM6 10.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z"])));
const PenProhibited16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited16Regular', "16", ["M9.73 1.56a1.91 1.91 0 0 1 2.71 2.7l-.84.85a5.53 5.53 0 0 0-1.31-.1l1.44-1.45a.91.91 0 1 0-1.29-1.3l-7.4 7.4a.65.65 0 0 0-.15.26l-.6 1.79 1.8-.6c.09-.03.18-.08.25-.16L5 10.3a5.6 5.6 0 0 0 .11 1.3l-.06.07c-.19.18-.4.32-.65.4l-2.74.91a.5.5 0 0 1-.63-.63l.91-2.74c.08-.24.22-.46.4-.65l7.4-7.39ZM6 10.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm1 0c0 .79.26 1.51.7 2.1l4.9-4.9A3.5 3.5 0 0 0 7 10.5Zm3.5 3.5a3.5 3.5 0 0 0 2.8-5.6l-4.9 4.9c.59.44 1.31.7 2.1.7Z"])));
const PenProhibited20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited20Filled', "20", ["M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16A5.5 5.5 0 0 1 15 9.2l2.13-2.12a2.97 2.97 0 0 0 .05-4.15ZM9 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z"])));
const PenProhibited20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited20Regular', "20", ["M12.92 2.87a2.97 2.97 0 0 1 4.2 4.2L15 9.22c-.39-.11-.8-.18-1.21-.2l2.63-2.64a1.97 1.97 0 0 0-2.8-2.8l-9.37 9.38c-.2.2-.32.44-.38.7l-.71 3.2 3.16-.71c.28-.06.54-.2.74-.41l.95-.95c.02.42.09.83.2 1.22l-.44.44c-.34.34-.77.57-1.24.67L2.61 18a.5.5 0 0 1-.6-.6l.88-3.95c.1-.45.33-.87.66-1.2l9.37-9.37ZM9 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z"])));
const PenProhibited24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited24Filled', "24", ["M20.95 3.05a3.58 3.58 0 0 0-5.06 0L3.94 15c-.4.4-.7.92-.82 1.48l-1.1 4.6a.75.75 0 0 0 .9.9l4.6-1.1A3.1 3.1 0 0 0 9 20.06l1.15-1.15a6.52 6.52 0 0 1 7.76-7.76l3.04-3.04a3.58 3.58 0 0 0 0-5.06ZM22 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-9.5 0a4 4 0 0 1 6.25-3.3l-5.56 5.55a3.98 3.98 0 0 1-.69-2.25Zm4 4c-.83 0-1.6-.26-2.25-.7l5.56-5.55a4 4 0 0 1-3.3 6.25Z"])));
const PenProhibited24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited24Regular', "24", ["M15.9 3.05a3.58 3.58 0 1 1 5.05 5.06l-3.04 3.04a6.52 6.52 0 0 0-2-.12l3.98-3.98a2.08 2.08 0 0 0-2.94-2.94L5 16.06a1.6 1.6 0 0 0-.42.76l-.82 3.42 3.42-.81c.29-.07.55-.22.76-.43l2.09-2.09a6.57 6.57 0 0 0 .12 2L9 20.06c-.4.4-.92.7-1.48.82l-4.6 1.1a.75.75 0 0 1-.9-.9l1.1-4.6A3.1 3.1 0 0 1 3.94 15L15.9 3.05ZM22 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-9.5 0a4 4 0 0 1 6.25-3.3l-5.56 5.55a3.98 3.98 0 0 1-.69-2.25Zm4 4c-.83 0-1.6-.26-2.25-.7l5.56-5.55a4 4 0 0 1-3.3 6.25Z"])));
const PenProhibited28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited28Filled', "28", ["M24.85 3.15a3.93 3.93 0 0 0-5.56 0L4.5 17.94c-.44.44-.76.98-.93 1.58l-1.54 5.53a.75.75 0 0 0 .92.92l5.53-1.54c.6-.17 1.14-.5 1.58-.93l2-2a7.5 7.5 0 0 1 8.43-8.43l4.36-4.36a3.93 3.93 0 0 0 0-5.56ZM19.5 27a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0-1.5a4.98 4.98 0 0 1-2.97-.97l7-7a5 5 0 0 1-4.03 7.97Zm2.97-9.03-7 7a5 5 0 0 1 7-7Z"])));
const PenProhibited28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited28Regular', "28", ["M19.29 3.15a3.93 3.93 0 1 1 5.56 5.56l-4.36 4.36a7.57 7.57 0 0 0-2.14.02l5.44-5.44a2.43 2.43 0 0 0-3.44-3.44L5.56 19c-.26.26-.44.58-.54.93l-1.19 4.24 4.24-1.19c.35-.1.67-.28.93-.54l3.09-3.09a7.56 7.56 0 0 0-.02 2.15l-2 2c-.45.44-1 .76-1.6.93l-5.52 1.54a.75.75 0 0 1-.92-.92l1.54-5.53c.17-.6.5-1.14.93-1.58L19.3 3.15ZM19.5 27a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0-1.5a4.98 4.98 0 0 1-2.97-.97l7-7a5 5 0 0 1-4.03 7.97Zm2.97-9.03-7 7a5 5 0 0 1 7-7Z"])));
const PenProhibited32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited32Filled', "32", ["M28.56 3.43c-1.9-1.9-5-1.9-6.91 0l-17.3 17.3a3.7 3.7 0 0 0-1 1.84l-1.33 6.22a1 1 0 0 0 1.19 1.19l6.22-1.34a3.7 3.7 0 0 0 1.84-1l2.1-2.1a9 9 0 0 1 11.18-11.17l4.01-4.02c1.91-1.91 1.91-5 0-6.92ZM22 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-2a5.47 5.47 0 0 1-3.12-.97l7.65-7.65A5.5 5.5 0 0 1 22 28.5Zm3.12-10.03-7.65 7.65a5.5 5.5 0 0 1 7.65-7.65Z"])));
const PenProhibited32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited32Regular', "32", ["M21.65 3.43a4.89 4.89 0 1 1 6.91 6.92l-4.01 4.02a9 9 0 0 0-2.47-.37l5.07-5.07a2.89 2.89 0 0 0-4.09-4.08L5.77 22.15c-.23.22-.4.52-.46.84l-1 4.7 4.7-1c.32-.07.61-.23.85-.46L13 23.08a9 9 0 0 0 .37 2.47l-2.1 2.1c-.5.5-1.14.85-1.84 1l-6.22 1.33a1 1 0 0 1-1.19-1.19l1.34-6.22c.14-.7.5-1.34 1-1.84l17.29-17.3ZM22 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-2a5.47 5.47 0 0 1-3.12-.97l7.65-7.65A5.5 5.5 0 0 1 22 28.5Zm3.12-10.03-7.65 7.65a5.5 5.5 0 0 1 7.65-7.65Z"])));
const PenProhibited48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited48Filled', "48", ["M41.97 6.02a6.9 6.9 0 0 0-9.76 0L8.04 30.2a6 6 0 0 0-1.57 2.75l-2.43 9.49a1.25 1.25 0 0 0 1.52 1.52l9.49-2.42a6 6 0 0 0 2.76-1.58l2.44-2.44a13 13 0 0 1 15.28-15.28l6.44-6.45a6.9 6.9 0 0 0 0-9.77ZM33 46a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-2.5c-1.9 0-3.65-.62-5.06-1.67l11.89-11.9A8.5 8.5 0 0 1 33 43.5Zm5.06-15.33-11.89 11.9a8.5 8.5 0 0 1 11.9-11.9Z"])));
const PenProhibited48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PenProhibited48Regular', "48", ["M32.2 6.03a6.9 6.9 0 1 1 9.77 9.76l-6.45 6.45a13.07 13.07 0 0 0-3.31-.22l8-8a4.4 4.4 0 1 0-6.24-6.23L9.81 31.96c-.45.45-.77 1-.92 1.61l-1.9 7.45 7.44-1.9a3.5 3.5 0 0 0 1.6-.92l4-3.99a13.15 13.15 0 0 0 .21 3.31l-2.43 2.44a6 6 0 0 1-2.76 1.58l-9.49 2.42a1.25 1.25 0 0 1-1.52-1.52l2.43-9.49a6 6 0 0 1 1.57-2.75L32.2 6.03ZM33 46a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-2.5c-1.9 0-3.65-.62-5.06-1.67l11.89-11.9A8.5 8.5 0 0 1 33 43.5Zm5.06-15.33-11.89 11.9a8.5 8.5 0 0 1 11.9-11.9Z"])));
const Pentagon20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pentagon20Filled', "20", ["M11.76 1.66a2.5 2.5 0 0 0-3.37-.01L2.82 6.7a2.5 2.5 0 0 0-.67 2.7l2.15 5.95A2.5 2.5 0 0 0 6.65 17h6.83a2.5 2.5 0 0 0 2.36-1.7l2.03-6.02a2.5 2.5 0 0 0-.68-2.64l-5.43-4.98Z"])));
const Pentagon20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pentagon20Regular', "20", ["M8.4 1.65a2.5 2.5 0 0 1 3.36 0l5.43 4.99c.73.67 1 1.7.68 2.64l-2.03 6.02a2.5 2.5 0 0 1-2.36 1.7H6.65c-1.05 0-2-.66-2.35-1.65L2.15 9.4a2.5 2.5 0 0 1 .67-2.7L8.4 1.65Zm2.69.74a1.5 1.5 0 0 0-2.03 0L3.5 7.44a1.5 1.5 0 0 0-.4 1.62l2.15 5.95c.21.6.78.99 1.4.99h6.84a1.5 1.5 0 0 0 1.42-1.02l2.02-6.02a1.5 1.5 0 0 0-.4-1.58l-5.43-4.99Z"])));
const Pentagon32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pentagon32Filled', "32", ["M17.91 2.6a3.25 3.25 0 0 0-3.82 0L3.85 10.04a3.25 3.25 0 0 0-1.18 3.64l3.9 12.04a3.25 3.25 0 0 0 3.1 2.24h12.66c1.4 0 2.66-.9 3.1-2.24l3.9-12.04a3.25 3.25 0 0 0-1.18-3.64L17.91 2.6Z"])));
const Pentagon32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pentagon32Regular', "32", ["M14.09 2.6a3.25 3.25 0 0 1 3.82 0l10.24 7.44a3.25 3.25 0 0 1 1.18 3.64l-3.9 12.04a3.25 3.25 0 0 1-3.1 2.24H9.67c-1.4 0-2.66-.9-3.1-2.24l-3.9-12.04a3.25 3.25 0 0 1 1.18-3.64L14.09 2.6Zm2.64 1.62a1.25 1.25 0 0 0-1.46 0L5.02 11.66c-.43.32-.62.88-.45 1.4L8.48 25.1c.17.51.65.86 1.19.86h12.66c.54 0 1.02-.35 1.19-.86l3.91-12.04a1.25 1.25 0 0 0-.45-1.4L16.73 4.22Z"])));
const Pentagon48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pentagon48Filled', "48", ["M21.5 4.31a4.25 4.25 0 0 1 5 0l15.75 11.46a4.25 4.25 0 0 1 1.54 4.75l-6.01 18.54A4.25 4.25 0 0 1 33.73 42H14.27a4.25 4.25 0 0 1-4.04-2.94L4.2 20.52a4.25 4.25 0 0 1 1.54-4.75L21.5 4.3Z"])));
const Pentagon48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Pentagon48Regular', "48", ["M21.5 4.31a4.25 4.25 0 0 1 5 0l15.75 11.46a4.25 4.25 0 0 1 1.54 4.75l-6.01 18.54A4.25 4.25 0 0 1 33.73 42H14.27a4.25 4.25 0 0 1-4.04-2.94L4.2 20.52a4.25 4.25 0 0 1 1.54-4.75L21.5 4.3Zm3.53 2.02a1.75 1.75 0 0 0-2.06 0L7.22 17.8a1.75 1.75 0 0 0-.63 1.96l6.01 18.54c.24.72.91 1.2 1.67 1.2h19.46c.76 0 1.44-.48 1.67-1.2l6.02-18.54a1.75 1.75 0 0 0-.64-1.96L25.03 6.33Z"])));
const People12Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People12Filled', "12", ["M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM2.25 7C1.56 7 1 7.56 1 8.25c0 0 0 2.25 3 2.25 2.38 0 2.87-1.41 2.97-2C7 8.35 7 8.25 7 8.25 7 7.56 6.44 7 5.75 7h-3.5ZM8 8.6a2.26 2.26 0 0 1-.1.54c-.06.22-.16.49-.34.76.27.06.58.1.94.1C11 10 11 8.25 11 8.25 11 7.56 10.44 7 9.75 7H7.62c.24.36.38.79.38 1.25v.35Z"])));
const People12Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People12Regular', "12", ["M3 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM8.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM1 8.25C1 7.56 1.56 7 2.25 7h3.5C6.44 7 7 7.56 7 8.25v.05a1.05 1.05 0 0 1-.02.2 2.06 2.06 0 0 1-.39.93c-.42.59-1.21 1.07-2.59 1.07s-2.17-.48-2.6-1.07A2.18 2.18 0 0 1 1 8.3v-.05Zm1 .03v.02l.02.13c.03.11.09.27.2.42.2.27.66.65 1.78.65s1.58-.38 1.78-.65A1.18 1.18 0 0 0 6 8.28v-.03A.25.25 0 0 0 5.75 8h-3.5a.25.25 0 0 0-.25.25v.03ZM8.5 10c-.36 0-.67-.04-.93-.1a2.86 2.86 0 0 0 .38-.94c.15.02.34.04.55.04.89 0 1.23-.27 1.36-.44a.67.67 0 0 0 .14-.31.25.25 0 0 0-.25-.25H7.99c-.04-.37-.17-.7-.37-1h2.13c.69 0 1.25.56 1.25 1.25v.02a.99.99 0 0 1 0 .09l-.05.21c-.04.17-.13.4-.31.62-.37.46-1.03.81-2.14.81Z"])));
const People16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People16Filled', "16", ["M8 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11.5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-1 2.6v-.1c0-.56-.19-1.08-.5-1.5h3.27c.68 0 1.23.55 1.23 1.22 0 0 0 2.28-3 2.28-.6 0-1.08-.09-1.46-.23a3.86 3.86 0 0 0 .46-1.58v-.1Zm-1-.1C9.5 9.67 8.83 9 8 9H3c-.83 0-1.5.67-1.5 1.5v.07s0 2.93 4 2.93c3.81 0 4-2.66 4-2.9v-.1Z"])));
const People16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People16Regular', "16", ["M4 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-10 6.5C1.5 9.67 2.17 9 3 9h5c.83 0 1.5.67 1.5 1.5v.11a1.38 1.38 0 0 1-.01.14c0 .08-.03.2-.06.34-.07.27-.2.64-.46 1-.55.76-1.6 1.41-3.47 1.41-1.88 0-2.92-.65-3.47-1.4a2.85 2.85 0 0 1-.53-1.49v-.11Zm1 .09v.06l.04.2c.04.18.13.42.3.65.33.45 1.04 1 2.66 1s2.33-.55 2.66-1a1.85 1.85 0 0 0 .34-.9V10.5A.5.5 0 0 0 8 10H3a.5.5 0 0 0-.5.5v.09Zm9 1.91a4.1 4.1 0 0 1-1.46-.24c.19-.34.3-.67.36-.93.27.1.63.17 1.1.17 1.12 0 1.58-.38 1.78-.67a1.22 1.22 0 0 0 .22-.56v-.02a.25.25 0 0 0-.25-.25h-2.8c-.07-.37-.23-.7-.45-1h3.25c.69 0 1.25.56 1.25 1.25v.02a1.35 1.35 0 0 1 0 .1l-.05.27c-.05.21-.15.5-.36.78-.42.59-1.2 1.08-2.59 1.08Z"])));
const People20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People20Filled', "20", ["M6.75 10a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm5.69 5.14c.53.22 1.2.36 2.06.36 4 0 4-3 4-3 0-.83-.67-1.5-1.5-1.5h-4.63c.4.48.63 1.09.63 1.75v.36a2.94 2.94 0 0 1-.02.25 4.62 4.62 0 0 1-.54 1.78ZM17 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM1.5 13c0-1.1.9-2 2-2H10a2 2 0 0 1 2 2s0 4-5.25 4-5.25-4-5.25-4Zm11.5.1v.07Z"])));
const People20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People20Regular', "20", ["M4.5 6.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 3.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm5.69 11.65c.53.21 1.21.35 2.06.35 1.88 0 2.92-.67 3.47-1.43a2.92 2.92 0 0 0 .53-1.5v-.07c0-.83-.67-1.5-1.5-1.5h-4.63c.24.29.42.63.53 1H17c.28 0 .5.22.5.5v.1l-.04.22c-.04.18-.13.42-.3.66-.33.46-1.04 1.02-2.66 1.02-.73 0-1.28-.11-1.69-.28-.08.28-.2.6-.37.93ZM1.5 13c0-1.1.9-2 2-2H10a2 2 0 0 1 2 2V13.08a1.43 1.43 0 0 1-.01.18 3.95 3.95 0 0 1-.67 1.8C10.62 16.09 9.26 17 6.75 17c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V13Zm1 .06v.1l.06.33c.07.27.2.64.45 1C3.49 15.2 4.5 16 6.75 16s3.26-.8 3.74-1.5a2.95 2.95 0 0 0 .5-1.42l.01-.02V13a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1v.06ZM13 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"])));
const People24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People24Filled', "24", ["M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 14C3.01 14 2 15 2 16.25v.25S2 21 8 21s6-4.5 6-4.5v-.25c0-1.24-1-2.25-2.25-2.25h-7.5ZM17 19.5a7.33 7.33 0 0 1-2.75-.46 5.5 5.5 0 0 0 .75-2.49v-.3c0-.87-.34-1.66-.9-2.25H19.8c1.22 0 2.2.98 2.2 2.2 0 0 0 3.3-5 3.3Z"])));
const People24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People24Regular', "24", ["M5.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-2.75 13.04c.7.28 1.6.46 2.75.46 2.28 0 3.59-.7 4.3-1.56a3.14 3.14 0 0 0 .7-1.73v-.03c0-1.2-.97-2.18-2.18-2.18H14.1c.4.41.68.93.81 1.5h4.91a.68.68 0 0 1 .68.7l-.04.18c-.04.16-.13.38-.32.6C19.8 17.42 18.97 18 17 18c-.98 0-1.67-.15-2.17-.34-.1.4-.28.88-.58 1.38ZM4.25 14C3.01 14 2 15 2 16.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 19.97 5.17 21 8 21s4.39-1.03 5.2-2.2a4.48 4.48 0 0 0 .8-2.27v-.28c0-1.24-1-2.25-2.25-2.25h-7.5Zm-.75 2.5v-.25c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v.34l-.06.33c-.07.28-.2.65-.46 1.02-.5.71-1.56 1.56-3.98 1.56s-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43Z"])));
const People28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People28Filled', "28", ["M9.5 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm7.6 7.62c.76.23 1.71.38 2.9.38 6 0 6-3.75 6-3.75 0-1.24-1-2.25-2.25-2.25h-6.66c.56.58.9 1.38.9 2.25v.56a2.95 2.95 0 0 1-.01.32c-.03.2-.06.45-.14.75-.12.48-.34 1.1-.74 1.74Zm6.4-11.12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM2 18.25C2 17.01 3 16 4.25 16h10.5c1.24 0 2.25 1 2.25 2.25v.5S17 24 9.5 24 2 18.75 2 18.75v-.5Z"])));
const People28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People28Regular', "28", ["M9.5 5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm-3 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM20 7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM2 18.25C2 17.01 3 16 4.25 16h10.5c1.24 0 2.25 1 2.25 2.25v.53a2.24 2.24 0 0 1-.02.24 5.09 5.09 0 0 1-.98 2.43C15 22.8 13.07 24 9.5 24S4 22.8 3 21.45a5.09 5.09 0 0 1-1-2.67v-.53Zm1.5.5v.11l.08.41c.09.35.26.81.61 1.28.68.9 2.12 1.95 5.31 1.95 3.2 0 4.63-1.05 5.3-1.95a3.59 3.59 0 0 0 .7-1.79v-.51a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v.5Zm13.6 2.87A9.9 9.9 0 0 0 20 22c2.77 0 4.32-.8 5.16-1.76a3.48 3.48 0 0 0 .84-1.96v-.03c0-1.24-1-2.25-2.25-2.25h-6.66c.4.41.69.93.82 1.5h5.84a.75.75 0 0 1 .74.79c0 .04-.01.12-.04.22-.06.2-.18.47-.42.75-.47.54-1.55 1.24-4.03 1.24-.94 0-1.68-.1-2.26-.26a6.1 6.1 0 0 1-.64 1.38Z"])));
const People32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People32Filled', "32", ["M10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM23 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3H5Zm18 7c-1.46 0-2.6-.2-3.52-.51a7.03 7.03 0 0 0 1.02-3.23V21c0-1.15-.44-2.2-1.15-3h8.24a2.4 2.4 0 0 1 2.4 2.4s0 4.6-7 4.6Z"])));
const People32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People32Regular', "32", ["M7 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM10.5 5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM21 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM2 21a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v.23a2.76 2.76 0 0 1-.02.27 5.56 5.56 0 0 1-1.13 2.7c-1.17 1.51-3.37 2.8-7.35 2.8-3.98 0-6.18-1.29-7.35-2.8A5.56 5.56 0 0 1 2 21.24V21Zm2 .18v.11l.09.4c.09.35.27.82.64 1.29.7.9 2.25 2.02 5.77 2.02 3.52 0 5.07-1.12 5.77-2.02a3.56 3.56 0 0 0 .73-1.79V21a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v.18Zm15.48 3.31c.93.32 2.08.51 3.52.51 3.2 0 5.02-.95 6.01-2.12a4.26 4.26 0 0 0 .99-2.36V20.46C30 19.1 28.9 18 27.54 18h-8.19c.5.56.86 1.24 1.04 2h7.15c.25 0 .45.2.46.45v.04l-.06.25c-.06.22-.19.53-.45.84-.51.6-1.7 1.42-4.49 1.42a9.21 9.21 0 0 1-2.72-.35 7.04 7.04 0 0 1-.8 1.84Z"])));
const People48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People48Filled', "48", ["M16 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm18 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM6.75 27A3.75 3.75 0 0 0 3 30.75V32s0 9 13 9 13-9 13-9v-1.25A3.75 3.75 0 0 0 25.25 27H6.75Zm21.92 11.09c1.38.56 3.12.91 5.33.91 10.5 0 10.5-8 10.5-8v-.25A3.75 3.75 0 0 0 40.75 27H29.6c.86 1 1.39 2.32 1.39 3.75v1.35a5.66 5.66 0 0 1-.04.58 10.68 10.68 0 0 1-2.28 5.4Z"])));
const People48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('People48Regular', "48", ["M10.5 16a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM16 8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm14.5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 27c-2.18 0-3.92-.35-5.32-.92a10.96 10.96 0 0 0 1.35-2.16c1.02.35 2.32.58 3.97.58 4.27 0 6.17-1.53 7.06-2.83a5.55 5.55 0 0 0 .94-2.68v-.24c0-.69-.56-1.25-1.25-1.25h-9.89c-.2-.94-.64-1.8-1.25-2.5h11.14a3.75 3.75 0 0 1 3.75 3.75V31.05a3.66 3.66 0 0 1-.02.36c-.03.23-.07.55-.16.92a8.05 8.05 0 0 1-1.2 2.75C41.7 37.16 38.97 39 34 39ZM6.75 27A3.75 3.75 0 0 0 3 30.75v1.3a3.76 3.76 0 0 0 .03.42 8.69 8.69 0 0 0 1.7 4.16C6.47 38.95 9.82 41 16 41c6.18 0 9.52-2.05 11.28-4.37A8.69 8.69 0 0 0 29 32.05v-1.3A3.75 3.75 0 0 0 25.25 27H6.75ZM5.5 32.02v-1.27c0-.69.56-1.25 1.25-1.25h18.5c.69 0 1.25.56 1.25 1.25v1.27a5.19 5.19 0 0 1-.14.88c-.16.6-.46 1.41-1.07 2.22-1.19 1.56-3.71 3.38-9.29 3.38-5.57 0-8.1-1.82-9.29-3.38a6.19 6.19 0 0 1-1.2-3.1Z"])));
const PeopleAdd16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAdd16Filled', "16", ["M8 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11.5 6a5.5 5.5 0 0 0-1.58.23 2 2 0 1 1 3.16 0A5.5 5.5 0 0 0 11.5 6ZM3 8h4.26a5.48 5.48 0 0 0-1.17 4.48l-.59.02c-4 0-4-2.93-4-2.93V9.5C1.5 8.67 2.17 8 3 8Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z"])));
const PeopleAdd16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAdd16Regular', "16", ["M4 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-.58 1.23a5.5 5.5 0 0 1 3.16 0 2 2 0 1 0-3.16 0ZM3 8h4.26c-.26.3-.48.64-.66 1H3a.5.5 0 0 0-.5.5v.15l.04.2c.04.18.13.42.3.65.33.45 1.04 1 2.66 1 .18 0 .34 0 .5-.02v.02c0 .33.03.66.09.98a7.3 7.3 0 0 1-.59.02c-1.88 0-2.92-.65-3.47-1.4A2.85 2.85 0 0 1 1.5 9.6V9.5C1.5 8.67 2.17 8 3 8Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z"])));
const PeopleAdd20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAdd20Filled', "20", ["M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM17 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 0 0-1-.26H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 0 1 9 14.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"])));
const PeopleAdd20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAdd20Regular', "20", ["M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 1 .26c-.28.23-.54.49-.77.77A1 1 0 0 0 10 11H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.15 2.25-.37.01.35.05.7.12 1.02-.64.22-1.42.35-2.37.35-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12ZM13 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"])));
const PeopleAdd24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAdd24Filled', "24", ["M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 13C3.01 13 2 14 2 15.25v.25S2 20 8 20a7.9 7.9 0 0 0 3.28-.61 6.5 6.5 0 0 1 1.36-6.2 2.24 2.24 0 0 0-.89-.19h-7.5ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z"])));
const PeopleAdd24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAdd24Regular', "24", ["M5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4.25 13C3.01 13 2 14 2 15.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 18.97 5.17 20 8 20c1.37 0 2.44-.24 3.28-.62a6.48 6.48 0 0 1-.27-1.55c-.65.38-1.6.67-3.01.67-2.42 0-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43v-.26c0-.41.34-.75.75-.75h7.48c.25-.48.56-.92.91-1.32a2.24 2.24 0 0 0-.89-.18h-7.5ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z"])));
const PeopleAdd28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAdd28Filled', "28", ["M9.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm14-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM2 17.25C2 16.01 3 15 4.25 15h10.5c.2 0 .39.03.57.07a7.48 7.48 0 0 0-2.07 7.35c-.98.36-2.2.58-3.75.58C2 23 2 17.75 2 17.75v-.5Zm25 3.25a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"])));
const PeopleAdd28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAdd28Regular', "28", ["M9.5 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm-3 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM20 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM4.25 15C3.01 15 2 16 2 17.25v.53a2.2 2.2 0 0 0 .02.24A5.09 5.09 0 0 0 3 20.45C4 21.8 5.93 23 9.5 23c1.53 0 2.76-.22 3.75-.58-.13-.5-.21-1-.24-1.52-.84.35-1.97.6-3.51.6-3.2 0-4.63-1.05-5.3-1.95a3.59 3.59 0 0 1-.7-1.79v-.51c0-.41.34-.75.75-.75h9.9c.33-.52.73-1 1.17-1.43a2.25 2.25 0 0 0-.57-.07H4.25ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"])));
const PeopleAudience20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAudience20Filled', "20", ["M12.21 5.22a2.23 2.23 0 1 0-4.45 0 2.23 2.23 0 0 0 4.45 0ZM2.51 12h3V8.83c.03-.3.12-.57.26-.82H3.02l-.12.01a1 1 0 0 0-.88 1v2.48c0 .28.22.5.5.5ZM18 11.5a.5.5 0 0 1-.5.5h-3.02V8.87c-.02-.31-.12-.6-.26-.86h2.78a1 1 0 0 1 1 .89v2.6Zm-4.52-2.6a1 1 0 0 0-1-.89H7.5l-.11.01a1 1 0 0 0-.89 1V12h6.97V8.9Zm1.5-5.28a1.91 1.91 0 1 1 0 3.82 1.91 1.91 0 0 1 0-3.82ZM6.93 5.53a1.91 1.91 0 1 0-3.83 0 1.91 1.91 0 0 0 3.83 0ZM2.5 13a.5.5 0 0 0-.5.5v1A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-.5-.5h-15Z"])));
const PeopleAudience20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAudience20Regular', "20", ["M9.99 2.99a2.23 2.23 0 1 1 0 4.45 2.23 2.23 0 0 1 0-4.45Zm0 1a1.23 1.23 0 1 0 0 2.45 1.23 1.23 0 0 0 0-2.45ZM3.02 11.5a.5.5 0 1 1-1 0V9.01a1 1 0 0 1 .88-.99h2.87c-.14.24-.23.52-.26.81v.18H3v2.49Zm14.47.5a.5.5 0 0 0 .5-.5V8.9a1 1 0 0 0-1-.89h-2.78c.14.26.24.55.26.86V9H17v2.49c0 .28.22.5.5.5Zm-5.02-3.99a1 1 0 0 1 1 .89v2.6a.5.5 0 1 1-1 0V9.01H7.5v2.49a.5.5 0 1 1-1 0V9.01a1 1 0 0 1 .89-.99h5.08Zm4.42-2.48a1.91 1.91 0 1 0-3.83 0 1.91 1.91 0 0 0 3.83 0Zm-2.83 0a.91.91 0 1 1 1.83 0 .91.91 0 0 1-1.83 0ZM5.02 3.62a1.91 1.91 0 1 1 0 3.82 1.91 1.91 0 0 1 0-3.82Zm0 1a.91.91 0 1 0 0 1.82.91.91 0 0 0 0-1.82ZM2.5 13a.5.5 0 0 0-.5.5v1A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-.5-.5h-15Zm.5 1.5V14h14v.5c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5Z"])));
const PeopleAudience24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAudience24Filled', "24", ["M14.75 10c.97 0 1.75.78 1.75 1.75V16h-9v-4.25c0-.97.79-1.75 1.75-1.75h5.5ZM22 11.75c0-.97-.78-1.75-1.75-1.75h-3.38c.4.47.63 1.08.63 1.75V16h3.75c.41 0 .75-.34.75-.75v-3.5ZM6.5 15v-3.25l.01-.22c.05-.58.27-1.1.62-1.53H3.61c-.9.08-1.61.83-1.61 1.75v3.5c0 .41.34.75.75.75H6.5v-1ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2 17.75c0-.41.34-.75.75-.75h18.5c.41 0 .75.34.75.75v.5A3.75 3.75 0 0 1 18.25 22H5.75A3.75 3.75 0 0 1 2 18.25v-.5Z"])));
const PeopleAudience24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleAudience24Regular', "24", ["M14.75 10c.97 0 1.75.78 1.75 1.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-1.5 0v-3.5c0-.97.79-1.75 1.75-1.75h5.5Zm5.75 1.75v3.5a.75.75 0 0 0 1.5 0v-3.5c0-.97-.78-1.75-1.75-1.75h-3.38c.35.41.57.93.62 1.5h2.76c.14 0 .25.11.25.25ZM2 15.25a.75.75 0 0 0 1.5 0v-3.5c0-.14.11-.25.25-.25h2.76c.05-.57.28-1.09.62-1.5H3.75C2.78 10 2 10.78 2 11.75v3.5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6.5-.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM2.75 17a.75.75 0 0 0-.75.75v.5A3.75 3.75 0 0 0 5.75 22h12.5A3.75 3.75 0 0 0 22 18.25v-.5a.75.75 0 0 0-.75-.75H2.75Zm3 3.5a2.25 2.25 0 0 1-2.24-2H20.5a2.25 2.25 0 0 1-2.24 2H5.75Z"])));
const PeopleCall16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCall16Filled', "16", ["M5.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 8c.83 0 1.5.67 1.5 1.5V9.59c0 .25-.19 2.91-4 2.91-4 0-4-2.93-4-2.93V9.5C1.5 8.67 2.17 8 3 8h5Zm4.58.58.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z"])));
const PeopleCall16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCall16Regular', "16", ["M5.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm8.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM3 8c-.83 0-1.5.67-1.5 1.5v.11a1.39 1.39 0 0 0 .01.14c0 .08.03.2.06.34.07.27.2.64.46 1 .55.76 1.6 1.41 3.47 1.41 1.88 0 2.92-.65 3.47-1.4A2.85 2.85 0 0 0 9.5 9.6V9.5C9.5 8.67 8.83 8 8 8H3Zm-.5 1.6V9.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v.15l-.04.2c-.04.18-.13.42-.3.65-.33.45-1.04 1-2.66 1s-2.33-.55-2.66-1a1.85 1.85 0 0 1-.34-.9Zm10.08-1.02.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z"])));
const PeopleCall20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCall20Filled', "20", ["M6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 2 2V12.08a1.43 1.43 0 0 1-.01.18 3.95 3.95 0 0 1-.67 1.8C10.62 15.09 9.26 16 6.75 16c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12Zm13-8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm1.08 7.58.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z"])));
const PeopleCall20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCall20Regular', "20", ["M6.75 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.5 5.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0 4.25a2 2 0 0 0-2 2V12.08a1.72 1.72 0 0 0 .01.18 3.95 3.95 0 0 0 .67 1.8C2.88 15.09 4.24 16 6.75 16c2.51 0 3.87-.92 4.57-1.93a3.95 3.95 0 0 0 .68-1.99V12a2 2 0 0 0-2-2H3.5Zm-1 2.06V12a1 1 0 0 1 1-1H10a1 1 0 0 1 1 1v.16l-.06.33c-.07.27-.2.64-.45 1C10.01 14.2 9 15 6.75 15s-3.26-.8-3.74-1.5a2.95 2.95 0 0 1-.5-1.42l-.01-.02ZM14.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm3.58 5.08.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z"])));
const PeopleCall24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCall24Filled', "24", ["M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 13C3.01 13 2 14 2 15.25v.25S2 20 8 20s6-4.5 6-4.5v-.25c0-1.24-1-2.25-2.25-2.25h-7.5Zm13.94 1 .48-1.21c.24-.61.92-.93 1.55-.73l.43.14c.72.24 1.32.8 1.35 1.57.1 3.11-2.48 7.58-5.22 9.06-.67.36-1.46.12-2.03-.4l-.34-.3a1.25 1.25 0 0 1-.14-1.7l.8-1.02a1.2 1.2 0 0 1 1.22-.42l1.3.32a3.78 3.78 0 0 0 1.77-3.08l-.92-.96a1.2 1.2 0 0 1-.25-1.28Z"])));
const PeopleCall24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCall24Regular', "24", ["M5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4.25 13C3.01 13 2 14 2 15.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 18.97 5.17 20 8 20s4.39-1.03 5.2-2.2a4.48 4.48 0 0 0 .8-2.27v-.28c0-1.24-1-2.25-2.25-2.25h-7.5Zm-.75 2.5v-.25c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v.34l-.06.33c-.07.28-.2.65-.46 1.02-.5.71-1.56 1.56-3.98 1.56s-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43ZM18.2 14l.47-1.21c.24-.61.92-.93 1.55-.73l.43.14c.72.24 1.32.8 1.35 1.57.1 3.11-2.48 7.58-5.22 9.06-.67.36-1.46.12-2.03-.4l-.34-.3a1.25 1.25 0 0 1-.14-1.7l.8-1.02a1.2 1.2 0 0 1 1.22-.42l1.3.32a3.78 3.78 0 0 0 1.77-3.08l-.92-.96a1.2 1.2 0 0 1-.25-1.28Z"])));
const PeopleCheckmark16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCheckmark16Filled', "16", ["M8 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11.5 6a5.5 5.5 0 0 0-1.58.23 2 2 0 1 1 3.16 0A5.5 5.5 0 0 0 11.5 6ZM3 8h4.26a5.48 5.48 0 0 0-1.17 4.48l-.59.02c-4 0-4-2.93-4-2.93V9.5C1.5 8.67 2.17 8 3 8Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"])));
const PeopleCheckmark16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCheckmark16Regular', "16", ["M4 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-.58 1.23a5.5 5.5 0 0 1 3.16 0 2 2 0 1 0-3.16 0ZM3 8h4.26c-.26.3-.48.64-.66 1H3a.5.5 0 0 0-.5.5v.15l.04.2c.04.18.13.42.3.65.33.45 1.04 1 2.66 1 .18 0 .34 0 .5-.02v.02c0 .33.03.66.09.98a7.3 7.3 0 0 1-.59.02c-1.88 0-2.92-.65-3.47-1.4A2.85 2.85 0 0 1 1.5 9.6V9.5C1.5 8.67 2.17 8 3 8Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"])));
const PeopleCheckmark20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCheckmark20Filled', "20", ["M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM17 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 0 0-1-.26H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 0 1 9 14.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"])));
const PeopleCheckmark20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCheckmark20Regular', "20", ["M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 1 .26c-.28.23-.54.49-.77.77A1 1 0 0 0 10 11H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.15 2.25-.37.01.35.05.7.12 1.02-.64.22-1.42.35-2.37.35-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12ZM13 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"])));
const PeopleCheckmark24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCheckmark24Filled', "24", ["M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 13C3.01 13 2 14 2 15.25v.25S2 20 8 20a7.9 7.9 0 0 0 3.28-.61 6.5 6.5 0 0 1 1.36-6.2 2.24 2.24 0 0 0-.89-.19h-7.5ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.85-2.35-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0-.7-.7Z"])));
const PeopleCheckmark24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCheckmark24Regular', "24", ["M5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4.25 13C3.01 13 2 14 2 15.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 18.97 5.17 20 8 20c1.37 0 2.44-.24 3.28-.62a6.48 6.48 0 0 1-.27-1.55c-.65.38-1.6.67-3.01.67-2.42 0-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43v-.26c0-.41.34-.75.75-.75h7.48c.25-.48.56-.92.91-1.32a2.24 2.24 0 0 0-.89-.18h-7.5ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z"])));
const PeopleCommunity16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity16Filled', "16", ["M3 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm6.78 1.58A2 2 0 0 0 11 5a2 2 0 1 0-1.22-.42ZM6.27 6a2 2 0 1 1 3.46 2 2 2 0 0 1-3.46-2ZM2.5 6h2.67a3 3 0 0 0 .6 3H5.5c-1.09 0-2 .7-2.35 1.66a3.73 3.73 0 0 1-.94-.55A3.25 3.25 0 0 1 1 7.5C1 6.67 1.67 6 2.5 6Zm8 3c1.09 0 2 .7 2.35 1.66.34-.14.66-.32.94-.55.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5h-2.67a3 3 0 0 1-.6 3h.27Zm1.39 1.93c.07.17.11.37.11.57 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 0 1-2.79-.89A3.25 3.25 0 0 1 4 11.5 1.5 1.5 0 0 1 5.5 10h5c.63 0 1.16.38 1.39.93Z"])));
const PeopleCommunity16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity16Regular', "16", ["M3 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4.78 2.58a2 2 0 1 1 2.43-3.16 2 2 0 0 1-2.43 3.16ZM11 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM2.5 6h2.67A3 3 0 0 0 5 7H2.5a.5.5 0 0 0-.5.5c0 .82.32 1.42.84 1.83.23.2.52.35.84.46a2.5 2.5 0 0 0-.53.87 3.73 3.73 0 0 1-.94-.55A3.25 3.25 0 0 1 1 7.5C1 6.67 1.67 6 2.5 6Zm3.77 0a2 2 0 0 0 1 2.86A2 2 0 0 0 10 7a2 2 0 0 0-2-2 2 2 0 0 0-1.73 1Zm1.5.03a1 1 0 0 1 1.2 1.2 1 1 0 1 1-1.2-1.2Zm5.4 3.3c-.24.2-.53.35-.85.46.24.25.42.54.53.87.34-.14.66-.32.94-.55.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5h-2.67A3 3 0 0 1 11 7h2.5c.28 0 .5.22.5.5 0 .82-.32 1.42-.84 1.83ZM10.5 10a1.5 1.5 0 0 1 1.5 1.5c0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 0 1-2.79-.89A3.25 3.25 0 0 1 4 11.5 1.5 1.5 0 0 1 5.5 10h5Zm0 1h-5a.5.5 0 0 0-.5.5c0 .82.32 1.42.84 1.83.52.43 1.28.67 2.16.67.88 0 1.64-.24 2.16-.67.52-.4.84-1.01.84-1.83a.5.5 0 0 0-.5-.5Z"])));
const PeopleCommunity20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity20Filled', "20", ["M7.88 7.5a2.74 2.74 0 1 1 4.24 3.49A2.74 2.74 0 0 1 7.88 7.5Zm5.87 1.75c0-.63-.16-1.23-.43-1.75h4.18c.83 0 1.5.67 1.5 1.5v.5c0 1.59-1.2 3.21-3.31 3.78A2.5 2.5 0 0 0 13.5 12h-.95a3.74 3.74 0 0 0 1.2-2.75ZM13.5 13a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5A1.5 1.5 0 0 1 6.5 13h7ZM1 9.5c0 1.59 1.2 3.21 3.31 3.78A2.5 2.5 0 0 1 6.5 12h.95a3.74 3.74 0 0 1-.77-4.5H2.5C1.67 7.5 1 8.17 1 9v.5Zm7.75-5.75a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Zm8 0a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Z"])));
const PeopleCommunity20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity20Regular', "20", ["M8.75 3.75a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Zm-4.5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM2.5 7.5h4.18c-.16.31-.28.65-.35 1H2.5A.5.5 0 0 0 2 9v.5c0 1.26 1.1 2.61 3.1 2.93-.33.22-.6.51-.79.85C2.21 12.71 1 11.08 1 9.5V9c0-.83.67-1.5 1.5-1.5Zm5.38 0a2.74 2.74 0 1 1 4.24 3.49A2.74 2.74 0 0 1 7.88 7.5Zm.54 1a1.74 1.74 0 0 0 .87 2.35 1.74 1.74 0 0 0 2.46-1.6 1.74 1.74 0 0 0-2.01-1.73c-.59.09-1.08.46-1.32.98Zm7.27 4.78c-.2-.34-.46-.63-.79-.85 2-.32 3.1-1.67 3.1-2.93V9a.5.5 0 0 0-.5-.5h-3.82c-.08-.35-.2-.69-.36-1h4.18c.83 0 1.5.67 1.5 1.5v.5c0 1.59-1.2 3.21-3.31 3.78Zm-1.2.1a1.5 1.5 0 0 0-.99-.38h-7A1.5 1.5 0 0 0 5 14.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5c0-.45-.2-.85-.51-1.13ZM6 14.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v.5c0 1.44-1.43 3-4 3-2.57 0-4-1.56-4-3v-.5ZM14 1a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 14 1Zm0 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 14 2Z"])));
const PeopleCommunity24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity24Filled', "24", ["M7.5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 10.77C2 9.79 2.8 9 3.77 9h4.77a3.98 3.98 0 0 0 .81 5H8.27c-1.19 0-2.2.75-2.6 1.8a4.6 4.6 0 0 1-2.97-2.1 5.15 5.15 0 0 1-.7-2.57v-.36ZM16 11c0-.73-.2-1.41-.54-2h4.77c.98 0 1.77.8 1.77 1.77v.36c0 .2 0 1.4-.7 2.57a4.6 4.6 0 0 1-2.98 2.1 2.77 2.77 0 0 0-2.59-1.8h-1.08A3.99 3.99 0 0 0 16 11Zm3.5-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-13 11.77c0-.98.8-1.77 1.77-1.77h7.46c.98 0 1.77.8 1.77 1.77v.36c0 .2 0 1.4-.7 2.57-.74 1.24-2.19 2.3-4.8 2.3s-4.06-1.06-4.8-2.3a5.15 5.15 0 0 1-.7-2.57v-.36ZM12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"])));
const PeopleCommunity24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity24Regular', "24", ["M7.5 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM4.5 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-.73 4C2.79 9 2 9.8 2 10.77v.36c0 .2 0 1.4.7 2.57a4.6 4.6 0 0 0 2.98 2.1c.2-.55.58-1.02 1.06-1.34-1.6-.17-2.36-.88-2.75-1.53a3.65 3.65 0 0 1-.49-1.8v-.36c0-.15.12-.27.27-.27h4.26c.07-.54.24-1.05.5-1.5H3.78Zm11.7 0c.26.45.43.96.5 1.5h4.26c.15 0 .27.12.27.27v.36c0 .14 0 1-.49 1.8-.39.65-1.14 1.36-2.75 1.53.48.32.86.79 1.06 1.34a4.6 4.6 0 0 0 2.98-2.1c.7-1.16.7-2.36.7-2.57v-.36C22 9.79 21.2 9 20.23 9h-4.77ZM15 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM12 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM9 11a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2.5 5.77c0-.98.8-1.77 1.77-1.77h7.46c.98 0 1.77.8 1.77 1.77v.36c0 .2 0 1.4-.7 2.57-.74 1.24-2.19 2.3-4.8 2.3s-4.06-1.06-4.8-2.3a5.15 5.15 0 0 1-.7-2.57v-.36Zm1.77-.27a.27.27 0 0 0-.27.27v.36c0 .14 0 1 .49 1.8.44.74 1.37 1.57 3.51 1.57 2.14 0 3.07-.83 3.51-1.57.49-.8.49-1.66.49-1.8v-.36a.27.27 0 0 0-.27-.27H8.27Z"])));
const PeopleCommunity28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity28Filled', "28", ["M8.5 9.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM2 12.98c0-1.1.89-1.98 1.98-1.98h5.6a4.74 4.74 0 0 0 2.3 6h-2.4c-1.24 0-2.31.76-2.76 1.85a5.5 5.5 0 0 1-3.89-2.5A5.85 5.85 0 0 1 2 13.39v-.4ZM16.12 17h2.4c1.24 0 2.31.76 2.76 1.85a5.5 5.5 0 0 0 3.89-2.5c.83-1.34.83-2.73.83-2.97v-.4c0-1.1-.89-1.98-1.98-1.98h-5.6a4.74 4.74 0 0 1-2.3 6Zm7.13-11.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM7.5 19.98c0-1.1.89-1.98 1.98-1.98h9.04c1.1 0 1.98.89 1.98 1.98v.4c0 .24 0 1.63-.83 2.98C18.8 24.77 17.11 26 14 26c-3.1 0-4.8-1.23-5.67-2.64a5.85 5.85 0 0 1-.83-2.98v-.4ZM14 16.5A3.75 3.75 0 1 0 14 9a3.75 3.75 0 0 0 0 7.5Z"])));
const PeopleCommunity28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity28Regular', "28", ["M8.5 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM4.75 5.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM2 12.98c0-1.1.89-1.98 1.98-1.98h5.6c-.18.47-.3.97-.32 1.5H3.98a.48.48 0 0 0-.48.48v.4c0 .17 0 1.2.6 2.2.53.84 1.56 1.75 3.76 1.9a3 3 0 0 0-1.14 1.37 5.5 5.5 0 0 1-3.89-2.5A5.85 5.85 0 0 1 2 13.39v-.4ZM18.42 11c.18.47.3.97.32 1.5h5.28c.26 0 .48.22.48.48v.4c0 .17 0 1.2-.6 2.2-.53.84-1.56 1.75-3.76 1.9.5.33.9.8 1.14 1.37a5.5 5.5 0 0 0 3.89-2.5c.83-1.34.83-2.73.83-2.97v-.4c0-1.1-.89-1.98-1.98-1.98h-5.6Zm1.08-7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.75 2.25a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM7.5 19.98c0-1.1.89-1.98 1.98-1.98h9.04c1.1 0 1.98.89 1.98 1.98v.4c0 .24 0 1.63-.83 2.98C18.8 24.77 17.11 26 14 26c-3.1 0-4.8-1.23-5.67-2.64a5.85 5.85 0 0 1-.83-2.98v-.4Zm1.98-.48a.48.48 0 0 0-.48.48v.4c0 .17 0 1.2.6 2.2.57.91 1.76 1.92 4.4 1.92 2.64 0 3.83-1 4.4-1.93.6-.98.6-2.02.6-2.2v-.39a.48.48 0 0 0-.48-.48H9.48Zm2.27-6.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM14 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 14 9Z"])));
const PeopleCommunity32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity32Filled', "32", ["M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 4.5A2.5 2.5 0 0 1 4.5 13h6.37a5.49 5.49 0 0 0 1.97 6.5H10.5a4 4 0 0 0-3.55 2.15 6.53 6.53 0 0 1-3.9-2.54C2 17.59 2 16.03 2 15.75v-.25Zm23.05 6.15a6.53 6.53 0 0 0 3.9-2.54C30 17.59 30 16.02 30 15.75v-.25a2.5 2.5 0 0 0-2.5-2.5h-6.37a5.49 5.49 0 0 1-1.97 6.5h2.34a4 4 0 0 1 3.55 2.15ZM26 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM8 23.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5v.25c0 .27 0 1.84-1.05 3.36C21.85 28.69 19.75 30 16 30c-3.76 0-5.85-1.3-6.95-2.89C8 25.59 8 24.03 8 23.75v-.25Zm8-4.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"])));
const PeopleCommunity32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity32Regular', "32", ["M8 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4.5 13A2.5 2.5 0 0 0 2 15.5v.25c0 .27 0 1.84 1.05 3.36a6.53 6.53 0 0 0 3.9 2.54c.39-.74 1-1.34 1.74-1.72-2.33-.25-3.44-1.16-4-1.96A4 4 0 0 1 4 15.75v-.25c0-.28.22-.5.5-.5h6c0-.7.13-1.38.37-2H4.5Zm24.45 6.11a6.53 6.53 0 0 1-3.9 2.54c-.39-.74-1-1.34-1.74-1.72 2.33-.25 3.44-1.16 4-1.96a4 4 0 0 0 .69-2.22v-.25a.5.5 0 0 0-.5-.5h-6c0-.7-.13-1.38-.37-2h6.37a2.5 2.5 0 0 1 2.5 2.5v.25c0 .27 0 1.84-1.05 3.36ZM20 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-4 8.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5v.25c0 .27 0 1.84-1.05 3.36C21.85 28.69 19.75 30 16 30c-3.76 0-5.85-1.3-6.95-2.89C8 25.59 8 24.03 8 23.75v-.25Zm2.5-.5a.5.5 0 0 0-.5.5v.25a4 4 0 0 0 .7 2.22c.65.93 2.06 2.03 5.3 2.03 3.24 0 4.65-1.1 5.3-2.03a4 4 0 0 0 .7-2.22v-.25a.5.5 0 0 0-.5-.5h-11Z"])));
const PeopleCommunity48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity48Filled', "48", ["M15 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm18 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM4 22.45C4 20.55 5.54 19 7.45 19h9.62a7.96 7.96 0 0 0 1.64 10h-2.26c-2.01 0-3.77 1.09-4.71 2.7-3.22-.63-5.18-2.2-6.32-3.96A9.18 9.18 0 0 1 4 22.88v-.43ZM31.55 29c2.01 0 3.77 1.09 4.71 2.7 3.22-.63 5.18-2.2 6.32-3.96C44 25.54 44 23.27 44 22.88v-.43c0-1.9-1.54-3.45-3.45-3.45h-9.62a7.96 7.96 0 0 1-1.64 10h2.26ZM30 23a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM13 34.45c0-1.9 1.54-3.45 3.45-3.45h15.1c1.9 0 3.45 1.54 3.45 3.45v.43c0 .4 0 2.66-1.42 4.86C32.1 42.04 29.23 44 24 44s-8.1-1.97-9.58-4.26C13 37.54 13 35.27 13 34.88v-.43Z"])));
const PeopleCommunity48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunity48Regular', "48", ["M11.5 11a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM15 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm14.5 6a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM33 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM4 22.45C4 20.55 5.54 19 7.45 19h9.62c-.44.76-.76 1.6-.93 2.5h-8.7a.95.95 0 0 0-.94.95v.43c0 .27 0 1.93 1.02 3.5.9 1.39 2.72 2.92 6.68 3.1a5.47 5.47 0 0 0-2.46 2.22c-3.22-.63-5.18-2.2-6.32-3.96A9.18 9.18 0 0 1 4 22.88v-.43Zm29.8 7.03a5.47 5.47 0 0 1 2.46 2.22c3.22-.63 5.18-2.2 6.32-3.96C44 25.54 44 23.27 44 22.88v-.43c0-1.9-1.54-3.45-3.45-3.45h-9.62c.44.76.76 1.6.93 2.5h8.7c.52 0 .94.42.94.95v.43c0 .27 0 1.93-1.02 3.5-.9 1.39-2.72 2.92-6.68 3.1ZM24 19.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM18 23a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm-5 11.45c0-1.9 1.54-3.45 3.45-3.45h15.1c1.9 0 3.45 1.54 3.45 3.45v.43c0 .4 0 2.66-1.42 4.86C32.1 42.04 29.23 44 24 44s-8.1-1.97-9.58-4.26C13 37.54 13 35.27 13 34.88v-.43Zm3.45-.95a.95.95 0 0 0-.95.95v.42c0 .28 0 1.94 1.02 3.51.95 1.48 2.96 3.12 7.48 3.12 4.52 0 6.53-1.64 7.48-3.12a6.68 6.68 0 0 0 1.02-3.5v-.43a.95.95 0 0 0-.95-.95h-15.1Z"])));
const PeopleCommunityAdd20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunityAdd20Filled', "20", ["M10 6.5a2.74 2.74 0 0 0-.39 5.47 5.52 5.52 0 0 1 3.14-2.69v-.03A2.74 2.74 0 0 0 10 6.5Zm8.68 4.42a5.49 5.49 0 0 0-4.94-1.87 3.73 3.73 0 0 0-.42-1.55h4.18c.83 0 1.5.67 1.5 1.5v.5c0 .48-.11.96-.32 1.42ZM9.2 13a5.5 5.5 0 0 0 1.98 5.9c-.37.06-.77.1-1.19.1-3.14 0-5-2.03-5-4v-.5A1.5 1.5 0 0 1 6.5 13h2.7Zm-4.9.28C2.21 12.71 1 11.08 1 9.5V9c0-.83.67-1.5 1.5-1.5h4.18a3.73 3.73 0 0 0 .77 4.5H6.5a2.5 2.5 0 0 0-2.19 1.28ZM6 1a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 6 1Zm8 0a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 14 1Zm.5 18a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z"])));
const PeopleCommunityAdd20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunityAdd20Regular', "20", ["M6 1a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 6 1Zm0 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 6 2Zm.68 5.5H2.5C1.67 7.5 1 8.17 1 9v.5c0 1.59 1.2 3.21 3.31 3.78.2-.34.46-.63.79-.85-2-.32-3.1-1.67-3.1-2.93V9c0-.28.22-.5.5-.5h3.83c.07-.35.19-.69.35-1Zm3.32-1a2.74 2.74 0 0 0-.39 5.47c.19-.35.41-.69.67-1A1.76 1.76 0 0 1 8.42 8.5a1.75 1.75 0 0 1 3.25 1.28c.34-.2.7-.37 1.08-.5v-.03A2.75 2.75 0 0 0 10 6.5Zm8.68 4.42c-.24-.27-.5-.52-.78-.75.07-.22.1-.45.1-.67V9a.5.5 0 0 0-.5-.5h-3.82c-.08-.35-.2-.69-.36-1h4.18c.83 0 1.5.67 1.5 1.5v.5c0 .48-.11.96-.32 1.42ZM9.2 13H6.5A1.5 1.5 0 0 0 5 14.5v.5c0 1.97 1.86 4 5 4 .42 0 .82-.04 1.2-.1a5.54 5.54 0 0 1-.95-.9H10c-2.57 0-4-1.56-4-3v-.5c0-.28.22-.5.5-.5h2.52c.03-.34.1-.68.19-1Zm7.54-9.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Zm-4.5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z"])));
const PeopleCommunityAdd24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunityAdd24Filled', "24", ["M10.5 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM3.77 8C2.79 8 2 8.8 2 9.77v.36c0 .2 0 1.4.7 2.57a4.6 4.6 0 0 0 2.98 2.1c.39-1.05 1.4-1.8 2.59-1.8h1.08a3.99 3.99 0 0 1-.81-5H3.77Zm11.7 0a3.98 3.98 0 0 1 .34 3.22 6.51 6.51 0 0 1 5.67 1.14c.52-1.05.52-2.04.52-2.23v-.36C22 8.79 21.2 8 20.23 8h-4.77Zm-3.45 6a6.47 6.47 0 0 0 0 7H12c-2.61 0-4.06-1.06-4.8-2.3a5.15 5.15 0 0 1-.7-2.57v-.36c0-.98.8-1.77 1.77-1.77h3.75Zm4.48-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm1 5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.5 8.5V18h2.5a.5.5 0 0 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.5a.5.5 0 0 0 0 1H17v2.5a.5.5 0 1 0 1 0ZM9 10.15A3 3 0 1 0 12.02 7H12a3 3 0 0 0-3 3v.15ZM12.02 7H12Z"])));
const PeopleCommunityAdd24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunityAdd24Regular', "24", ["M6 4a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 9.77C2 8.79 2.8 8 3.77 8h4.77c-.27.45-.44.96-.5 1.5H3.76a.27.27 0 0 0-.27.27v.36c0 .14 0 1 .49 1.8.39.65 1.14 1.36 2.75 1.53-.48.32-.86.79-1.06 1.34a4.6 4.6 0 0 1-2.98-2.1 5.15 5.15 0 0 1-.7-2.57v-.36Zm13.97-.27a3.97 3.97 0 0 0-.5-1.5h4.76c.98 0 1.77.8 1.77 1.77v.36c0 .19 0 1.18-.52 2.23a6.5 6.5 0 0 0-1.29-.78c.3-.69.31-1.33.31-1.46v-.35a.27.27 0 0 0-.27-.27h-4.26Zm-1.55 2.28a3 3 0 1 0-4.84-3.55 3 3 0 0 0 4.84 3.55ZM12.02 14H8.27c-.98 0-1.77.8-1.77 1.77v.36c0 .2 0 1.4.7 2.57C7.94 19.94 9.4 21 12 21h.02c-.3-.47-.54-.99-.72-1.53-1.65-.16-2.42-.88-2.81-1.54a3.65 3.65 0 0 1-.49-1.8v-.36c0-.15.12-.27.27-.27h3.04c.18-.53.42-1.04.71-1.5ZM16.5 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-3 1.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-3 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.5 8.5V18h2.5a.5.5 0 0 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.5a.5.5 0 0 0 0 1H17v2.5a.5.5 0 1 0 1 0Z"])));
const PeopleCommunityAdd28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunityAdd28Filled', "28", ["M8.5 8.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM2 11.98c0-1.1.89-1.98 1.98-1.98h5.6a4.74 4.74 0 0 0 2.3 6h-2.4c-1.24 0-2.31.76-2.76 1.85a5.5 5.5 0 0 1-3.89-2.5A5.85 5.85 0 0 1 2 12.39v-.4Zm15.75-.23c0 .75-.22 1.45-.6 2.04-.8.4-1.5.93-2.1 1.56a3.75 3.75 0 1 1 2.7-3.6ZM9.48 17h4.38a7.47 7.47 0 0 0 .63 7.99L14 25c-3.1 0-4.8-1.23-5.67-2.64a5.85 5.85 0 0 1-.83-2.98v-.4c0-1.1.89-1.98 1.98-1.98ZM26 12.38c0 .2 0 1.3-.56 2.48a7.47 7.47 0 0 0-6.94-1.6 4.74 4.74 0 0 0-.08-3.26h5.6c1.1 0 1.98.89 1.98 1.98v.4Zm-2.75-7.63a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"])));
const PeopleCommunityAdd28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleCommunityAdd28Regular', "28", ["M8.5 2.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM4.75 4.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM2 11.98c0-1.1.89-1.98 1.98-1.98h5.6c-.18.47-.3.97-.32 1.5H3.98a.48.48 0 0 0-.48.48v.4c0 .17 0 1.2.6 2.2.53.84 1.56 1.75 3.76 1.9a3 3 0 0 0-1.14 1.37 5.5 5.5 0 0 1-3.89-2.5A5.85 5.85 0 0 1 2 12.39v-.4ZM18.42 10c.18.47.3.97.32 1.5h5.28c.26 0 .48.22.48.48v.4c0 .13 0 .82-.3 1.59.44.25.86.55 1.24.89.56-1.18.56-2.27.56-2.48v-.4c0-1.1-.89-1.98-1.98-1.98h-5.6Zm-.67 1.75c0 .75-.22 1.45-.6 2.04-.8.4-1.5.93-2.1 1.56a3.75 3.75 0 1 1 2.7-3.6ZM9.48 17h4.38c-.24.47-.45.97-.59 1.5H9.48a.48.48 0 0 0-.48.48v.4c0 .17 0 1.2.6 2.2.55.87 1.64 1.82 4.02 1.91.23.54.53 1.04.87 1.5L14 25c-3.1 0-4.8-1.23-5.67-2.64a5.85 5.85 0 0 1-.83-2.98v-.4c0-1.1.89-1.98 1.98-1.98ZM19.5 2.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.75 2.25a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm-4 7a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"])));
const PeopleEdit16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleEdit16Filled', "17", ["M5.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8-2a2 2 0 0 1-.4 1.19c-.36.14-.7.36-1 .65l-.1.1A2 2 0 1 1 13.5 5Zm-6.23 6.67L9.5 9.44A1.5 1.5 0 0 0 8 8H3c-.83 0-1.5.67-1.5 1.5v.07s0 2.93 4 2.93c.46 0 .87-.04 1.23-.1.15-.27.33-.52.54-.73Zm.71.7 4.83-4.82a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"])));
const PeopleEdit16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleEdit16Regular', "17", ["M5.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm8.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 3.6 1.19c-.36.14-.7.36-1 .65l-.1.1A2 2 0 0 1 9.5 5Zm-2.23 6.67L9.5 9.44A1.5 1.5 0 0 0 8 8H3c-.83 0-1.5.67-1.5 1.5v.11a1.39 1.39 0 0 0 .01.14c0 .08.03.2.06.34.07.27.2.64.46 1 .55.76 1.6 1.41 3.47 1.41.46 0 .87-.04 1.23-.1.15-.27.33-.52.54-.73ZM2.5 9.6V9.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v.15l-.04.2c-.04.18-.13.42-.3.65-.33.45-1.04 1-2.66 1s-2.33-.55-2.66-1a1.85 1.85 0 0 1-.34-.9Zm5.48 2.78 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"])));
const PeopleEdit20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleEdit20Filled', "20", ["M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM10 10a2 2 0 0 1 2 1.94l-1.73 1.73c-.4.41-.7.92-.84 1.49l-.1.42c-.68.26-1.52.42-2.58.42-5.25 0-5.25-4-5.25-4 0-1.1.9-2 2-2H10Zm7-3.5A2.49 2.49 0 0 1 14.5 9 2.5 2.5 0 1 1 17 6.5Zm-1.2 3.05-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z"])));
const PeopleEdit20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleEdit20Regular', "20", ["M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM10 10a2 2 0 0 1 2 1.94l-1.42 1.42a2.96 2.96 0 0 0 .42-1.28V12a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c1.56 0 2.53-.39 3.14-.86-.21.3-.37.65-.46 1.02l-.1.42a7.2 7.2 0 0 1-2.58.42c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12c0-1.1.9-2 2-2H10Zm7-3.5A2.49 2.49 0 0 1 14.5 9 2.5 2.5 0 1 1 17 6.5Zm-4 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm2.8 3.05-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z"])));
const PeopleEdit24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleEdit24Filled', "24", ["M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm8 1a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 16.25C2 15.01 3 14 4.25 14h7.5c1.24 0 2.25 1 2.25 2.25v.1l-1.5 1.51c-.48.48-.82 1.07-.98 1.72l-.2.79c-.82.38-1.9.63-3.32.63-6 0-6-4.5-6-4.5v-.25Zm17.1-3.58-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z"])));
const PeopleEdit24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleEdit24Regular', "24", ["M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm13-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM14 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2 16.25C2 15.01 3 14 4.25 14h7.5c1.24 0 2.25 1 2.25 2.25v.1l-1.5 1.51c-.48.48-.82 1.07-.98 1.72l-.2.78C10.5 20.75 9.4 21 8 21c-2.83 0-4.39-1.03-5.2-2.2a4.49 4.49 0 0 1-.8-2.27v-.28Zm1.5.24v.1l.06.33c.07.28.2.65.46 1.02.5.71 1.56 1.56 3.98 1.56s3.49-.85 3.98-1.56a2.99 2.99 0 0 0 .52-1.43v-.26a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v.24Zm15.6-3.82-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z"])));
const PeopleError16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleError16Filled', "16", ["M8 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11.5 6a5.5 5.5 0 0 0-1.58.23 2 2 0 1 1 3.16 0A5.5 5.5 0 0 0 11.5 6ZM3 8h4.26a5.48 5.48 0 0 0-1.17 4.48l-.59.02c-4 0-4-2.93-4-2.93V9.5C1.5 8.67 2.17 8 3 8Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM11.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"])));
const PeopleError16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleError16Regular', "16", ["M4 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-.58 1.23a5.5 5.5 0 0 1 3.16 0 2 2 0 1 0-3.16 0ZM3 8h4.26c-.26.3-.48.64-.66 1H3a.5.5 0 0 0-.5.5v.15l.04.2c.04.18.13.42.3.65.33.45 1.04 1 2.66 1 .18 0 .34 0 .5-.02v.02c0 .33.03.66.09.98a7.3 7.3 0 0 1-.59.02c-1.88 0-2.92-.65-3.47-1.4A2.85 2.85 0 0 1 1.5 9.6V9.5C1.5 8.67 2.17 8 3 8Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM11.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"])));
const PeopleError20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleError20Filled', "20", ["M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM17 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 0 0-1-.26H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 0 1 9 14.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"])));
const PeopleError20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleError20Regular', "20", ["M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 1 .26c-.28.23-.54.49-.77.77A1 1 0 0 0 10 11H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.15 2.25-.37.01.35.05.7.12 1.02-.64.22-1.42.35-2.37.35-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12ZM13 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"])));
const PeopleError24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleError24Filled', "24", ["M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 13C3.01 13 2 14 2 15.25v.25S2 20 8 20a7.9 7.9 0 0 0 3.28-.61 6.5 6.5 0 0 1 1.36-6.2 2.24 2.24 0 0 0-.89-.19h-7.5ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM17.5 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z"])));
const PeopleError24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleError24Regular', "24", ["M5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4.25 13C3.01 13 2 14 2 15.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 18.97 5.17 20 8 20c1.37 0 2.44-.24 3.28-.62a6.48 6.48 0 0 1-.27-1.55c-.65.38-1.6.67-3.01.67-2.42 0-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43v-.26c0-.41.34-.75.75-.75h7.48c.25-.48.56-.92.91-1.32a2.24 2.24 0 0 0-.89-.18h-7.5ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM17.5 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25Z"])));
const PeopleList16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleList16Filled', "16", ["M8 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11.5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 9.5c0-.17.03-.34.08-.5H3c-.83 0-1.5.67-1.5 1.5v.07s0 2.93 4 2.93c1.21 0 2.06-.27 2.64-.64.07-.13.15-.25.24-.36a1.5 1.5 0 0 1 0-2 1.5 1.5 0 0 1-.38-1ZM9.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"])));
const PeopleList16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleList16Regular', "16", ["M4 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 9h.08a1.5 1.5 0 0 0 0 1H3a.5.5 0 0 0-.5.5v.15l.04.2c.04.18.13.42.3.65.33.45 1.04 1 2.66 1 1.41 0 2.13-.42 2.51-.82.04.31.17.6.37.82-.1.1-.17.23-.23.36-.61.38-1.46.64-2.65.64-1.88 0-2.92-.65-3.47-1.4a2.85 2.85 0 0 1-.53-1.49v-.11C1.5 9.67 2.17 9 3 9h5Zm1.5 0a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"])));
const PeopleList20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleList20Filled', "20", ["M6.75 10a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm3.75 2.5c0-.48.23-.91.58-1.18A2 2 0 0 0 10 11H3.5a2 2 0 0 0-2 2s0 4 5.25 4c1.95 0 3.18-.55 3.95-1.25.05-.09.11-.17.18-.25a1.5 1.5 0 0 1 0-2 1.5 1.5 0 0 1-.38-1Zm6.5-5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12 12a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z"])));
const PeopleList20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleList20Regular', "20", ["M4.5 6.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 3.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM10 11a2 2 0 0 1 1.08.32c-.27.2-.46.5-.54.84A1 1 0 0 0 10 12H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 15.2 4.5 16 6.75 16s3.26-.8 3.74-1.5l.01-.01v.01c0 .38.14.73.38 1a1.5 1.5 0 0 0-.2.27C9.9 16.47 8.67 17 6.76 17c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V13c0-1.1.9-2 2-2H10Zm3-3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM12 12a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z"])));
const PeopleList24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleList24Filled', "24", ["M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 14C3.01 14 2 15 2 16.25v.25S2 21 8 21c1.85 0 3.14-.43 4.02-1.02.06-.38.24-.72.5-.98a1.74 1.74 0 0 1 0-2.5 1.74 1.74 0 0 1-.1-2.4c-.2-.06-.43-.1-.67-.1h-7.5Zm9.5.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 2.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 2.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z"])));
const PeopleList24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleList24Regular', "24", ["M5.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4.25 14C3.01 14 2 15 2 16.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 19.97 5.17 21 8 21c1.82 0 3.11-.42 4.02-1.04.07-.37.25-.7.5-.96a1.74 1.74 0 0 1-.51-1.1l-.03.04c-.5.71-1.56 1.56-3.98 1.56s-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43v-.26c0-.41.34-.75.75-.75h7.5c.1 0 .2.02.28.05a1.76 1.76 0 0 1 .4-1.45c-.22-.06-.44-.1-.68-.1h-7.5Zm8.28 2.5-.03.03v-.06l.03.03Zm1.22-2a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 2.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 2.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z"])));
const PeopleList28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleList28Filled', "28", ["M9.5 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm14-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM2 18.25C2 17.01 3 16 4.25 16h10.5c.24 0 .46.04.68.1a1.74 1.74 0 0 0 .42 2.65 1.75 1.75 0 0 0-.05 2.97 5.2 5.2 0 0 1-.39.4C14.34 23.14 12.53 24 9.5 24 2 24 2 18.75 2 18.75v-.5Zm14.75-1.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"])));
const PeopleList28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleList28Regular', "28", ["M5 9.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm4.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm7 4a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 18.25C2 17.01 3 16 4.25 16h10.5c.24 0 .46.04.68.1a1.74 1.74 0 0 0-.4 1.45.75.75 0 0 0-.28-.05H4.25a.75.75 0 0 0-.75.75v.61l.08.41c.09.35.26.81.61 1.28.68.9 2.12 1.95 5.31 1.95 3.2 0 4.63-1.05 5.3-1.95l.2-.29c0 .61.32 1.15.8 1.46a5.22 5.22 0 0 1-.35.36C14.33 23.16 12.49 24 9.5 24 5.94 24 4 22.8 3 21.45a5.09 5.09 0 0 1-1-2.67v-.53Zm14.75-1.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"])));
const PeopleLock20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleLock20Filled', "20", ["M10 5.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm1 8.7c-.74.83-2.02 1.55-4.25 1.55-5.25 0-5.25-4-5.25-4 0-1.1.9-2 2-2H10a2 2 0 0 1 2 2l-.02.28A2 2 0 0 0 11 14v.45ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-1 3v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"])));
const PeopleLock20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleLock20Regular', "20", ["M6.75 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.5 5.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm7.5 8.72C10.23 15.3 8.93 16 6.75 16c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12c0-1.1.9-2 2-2H10a2 2 0 0 1 2 2V12.08a1.43 1.43 0 0 1-.01.18v.02A2 2 0 0 0 11 14v.47Zm-8.5-2.4v.1l.06.32c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15s3.26-.8 3.74-1.5a2.95 2.95 0 0 0 .5-1.42l.01-.02V12a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1v.06ZM14.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm1.5 5.5v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"])));
const PeopleLock24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleLock24Filled', "24", ["M12 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm4 3.83a3.49 3.49 0 0 1 2.45-.2 3 3 0 1 0-2.44.2Zm-2.3 3.3A2.5 2.5 0 0 0 12 16.5v2.49A7.08 7.08 0 0 1 8 20c-6 0-6-4.5-6-4.5v-.25C2 14.01 3 13 4.25 13h7.5c.83 0 1.56.45 1.95 1.13ZM15 15v-1a2.5 2.5 0 0 1 5 0v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h.5Zm1.5-1v1h2v-1a1 1 0 1 0-2 0Zm2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"])));
const PeopleLock24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleLock24Regular', "24", ["M8 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM4 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm13-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM14 8a3 3 0 1 1 4.45 2.63 3.5 3.5 0 0 0-2.44.2A3 3 0 0 1 14 8Zm-.3 6.13A2.25 2.25 0 0 0 11.75 13h-7.5C3.01 13 2 14 2 15.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 18.97 5.17 20 8 20c1.8 0 3.1-.42 4-1.02V16.9l-.02.03c-.5.71-1.56 1.56-3.98 1.56s-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43v-.26c0-.41.34-.75.75-.75h7.5c.34 0 .63.23.72.54.3-.42.73-.74 1.23-.91Zm.8.87h.5v-1a2.5 2.5 0 0 1 5 0v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5Zm2-1v1h2v-1a1 1 0 1 0-2 0Zm2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"])));
const PeopleMoney20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleMoney20Filled', "20", ["M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM9 12.5c0-1.1.71-2.04 1.7-2.37A2 2 0 0 0 10 10H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.9 0 1.64-.12 2.26-.31L9 15.5v-3Zm8-6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-7 6c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3Zm1 0v1c.83 0 1.5-.67 1.5-1.5h-1a.5.5 0 0 1-.5.5Zm7 1v-1a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5ZM16.5 16h1c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5ZM11 14.5v1c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5Zm3.5 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"])));
const PeopleMoney20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleMoney20Regular', "20", ["M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM10 10a2 2 0 0 1 .7.13c-.48.16-.9.47-1.2.87h-6a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.14 2.25-.37v1.06c-.61.2-1.36.31-2.25.31-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12c0-1.1.9-2 2-2H10Zm3-3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM10 12.5c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3Zm1 0v1c.83 0 1.5-.67 1.5-1.5h-1a.5.5 0 0 1-.5.5Zm7 1v-1a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5ZM16.5 16h1c0-.28.22-.5.5-.5v-1c-.83 0-1.5.67-1.5 1.5ZM11 14.5v1c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5Zm3.5 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"])));
const PeopleMoney24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleMoney24Filled', "24", ["M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 13C3.01 13 2 14 2 15.25v.25S2 20 8 20c1.24 0 2.22-.2 3-.5v-4a2.5 2.5 0 0 1 1.6-2.33c-.26-.11-.55-.17-.85-.17h-7.5ZM12 15.5c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-4Zm1 .5v1a2 2 0 0 0 2-2h-1a1 1 0 0 1-1 1Zm9 1v-1a1 1 0 0 1-1-1h-1c0 1.1.9 2 2 2Zm-2 3h1a1 1 0 0 1 1-1v-1a2 2 0 0 0-2 2Zm-7-2v1a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2Zm4.5 1.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"])));
const PeopleMoney24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleMoney24Regular', "24", ["M5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5.25 8c.3 0 .59.06.85.17a2.5 2.5 0 0 0-1.4 1.33H4.26a.75.75 0 0 0-.75.75v.34l.06.33c.07.28.2.65.46 1.02.5.71 1.56 1.56 3.98 1.56 1.4 0 2.36-.29 3-.67v1.67c-.8.3-1.78.5-3 .5-2.83 0-4.39-1.03-5.2-2.2a4.49 4.49 0 0 1-.8-2.27v-.28C2 14.01 3 13 4.25 13h7.5Zm.25 2.5c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-4Zm1 .5v1a2 2 0 0 0 2-2h-1a1 1 0 0 1-1 1Zm9 1v-1a1 1 0 0 1-1-1h-1c0 1.1.9 2 2 2Zm-2 3h1a1 1 0 0 1 1-1v-1a2 2 0 0 0-2 2Zm-7-2v1a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2Zm4.5 1.25a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"])));
const PeopleProhibited16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleProhibited16Filled', "16", ["M8 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11.5 6a5.5 5.5 0 0 0-1.58.23 2 2 0 1 1 3.16 0A5.5 5.5 0 0 0 11.5 6ZM3 8h4.26a5.48 5.48 0 0 0-1.17 4.48l-.59.02c-4 0-4-2.93-4-2.93V9.5C1.5 8.67 2.17 8 3 8Zm4 3.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z"])));
const PeopleProhibited16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleProhibited16Regular', "16", ["M4 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-.58 1.23a5.5 5.5 0 0 1 3.16 0 2 2 0 1 0-3.16 0ZM3 8h4.26c-.26.3-.48.64-.66 1H3a.5.5 0 0 0-.5.5v.15l.04.2c.04.18.13.42.3.65.33.45 1.04 1 2.66 1 .18 0 .34 0 .5-.02v.02c0 .33.03.66.09.98a7.3 7.3 0 0 1-.59.02c-1.88 0-2.92-.65-3.47-1.4A2.85 2.85 0 0 1 1.5 9.6V9.5C1.5 8.67 2.17 8 3 8Zm4 3.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z"])));
const PeopleProhibited20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleProhibited20Filled', "20", ["M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM17 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 0 0-1-.26H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 0 1 9 14.5Zm1 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z"])));
const PeopleProhibited20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleProhibited20Regular', "20", ["M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 1 .26c-.28.23-.54.49-.77.77A1 1 0 0 0 10 11H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.15 2.25-.37.01.35.05.7.12 1.02-.64.22-1.42.35-2.37.35-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12ZM13 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z"])));
const PeopleProhibited24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleProhibited24Filled', "24", ["M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 13C3.01 13 2 14 2 15.25v.25S2 20 8 20a7.9 7.9 0 0 0 3.28-.61 6.5 6.5 0 0 1 1.36-6.2 2.24 2.24 0 0 0-.89-.19h-7.5ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-9.5 0c0 .83.26 1.6.7 2.25l5.55-5.56a4 4 0 0 0-6.25 3.3Zm4 4a4 4 0 0 0 3.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69Z"])));
const PeopleProhibited24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleProhibited24Regular', "24", ["M5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4.25 13C3.01 13 2 14 2 15.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 18.97 5.17 20 8 20c1.37 0 2.44-.24 3.28-.62a6.48 6.48 0 0 1-.27-1.55c-.65.38-1.6.67-3.01.67-2.42 0-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43v-.26c0-.41.34-.75.75-.75h7.48c.25-.48.56-.92.91-1.32a2.24 2.24 0 0 0-.89-.18h-7.5ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-9.5 0c0 .83.26 1.6.7 2.25l5.55-5.56a4 4 0 0 0-6.25 3.3Zm4 4a4 4 0 0 0 3.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69Z"])));
const PeopleQueue20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleQueue20Filled', "20", ["M8.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM4 8a1 1 0 0 0-1 1v4.5a3.5 3.5 0 1 0 7 0V9a1 1 0 0 0-1-1H4Zm5.75-2.75c0 .65-.2 1.26-.52 1.76a2 2 0 0 1 1.08.48l.19.01a2.25 2.25 0 1 0-1.31-4.08c.35.52.56 1.15.56 1.83Zm-.25 11.6A4.49 4.49 0 0 0 11 13.5V9a2 2 0 0 0-.27-1H13a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.35Zm4.25-11.6c0 .65-.2 1.26-.52 1.76a2 2 0 0 1 1.08.48l.19.01a2.25 2.25 0 1 0-1.31-4.08c.35.52.56 1.15.56 1.83Zm-.25 11.6A4.49 4.49 0 0 0 15 13.5V9a2 2 0 0 0-.27-1H17a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.35Z"])));
const PeopleQueue20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleQueue20Regular', "20", ["M6.5 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0-1a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM3 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4.5a3.5 3.5 0 1 1-7 0V9Zm1 0v4.5a2.5 2.5 0 0 0 5 0V9H4Zm5.63-2.86c-.1.31-.23.6-.4.87a2 2 0 0 1 1.08.48l.19.01a2.25 2.25 0 1 0-1.31-4.08c.19.28.34.6.44.94a1.25 1.25 0 0 1 2.12.89 1.25 1.25 0 0 1-2.12.9ZM9.5 16.85A3.5 3.5 0 0 0 14 13.5V9a1 1 0 0 0-1-1h-2.27A2 2 0 0 1 11 9h2v4.5a2.5 2.5 0 0 1-2.75 2.49c-.21.32-.47.6-.75.86Zm4.13-10.7c-.1.3-.23.6-.4.86a2 2 0 0 1 1.08.48l.19.01a2.25 2.25 0 1 0-1.31-4.08c.19.28.34.6.44.94a1.25 1.25 0 0 1 2.12.89 1.25 1.25 0 0 1-2.12.9Zm-.13 10.7A3.5 3.5 0 0 0 18 13.5V9a1 1 0 0 0-1-1h-2.27A2 2 0 0 1 15 9h2v4.5a2.5 2.5 0 0 1-2.75 2.49c-.21.32-.47.6-.75.86Z"])));
const PeopleQueue24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleQueue24Filled', "24", ["M10.5 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-5.75 4C3.78 10 3 10.78 3 11.75v4.75a4.5 4.5 0 1 0 9 0v-4.75c0-.97-.78-1.75-1.75-1.75h-5.5Zm6.11 10.85A5.5 5.5 0 0 0 13 16.5v-4.75c0-.66-.24-1.27-.63-1.75h2.38c.97 0 1.75.78 1.75 1.75v4.75a4.5 4.5 0 0 1-5.64 4.35ZM11.5 6c0 1-.37 1.91-.97 2.61a3 3 0 1 0 0-5.23c.6.7.97 1.62.97 2.62Zm3.86 14.85a5.5 5.5 0 0 0 2.14-4.35v-4.75c0-.66-.24-1.27-.63-1.75h2.38c.97 0 1.75.78 1.75 1.75v4.75a4.5 4.5 0 0 1-5.64 4.35ZM16 6c0 1-.37 1.91-.97 2.61a3 3 0 1 0 0-5.23c.6.7.97 1.62.97 2.62Z"])));
const PeopleQueue24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleQueue24Regular', "24", ["M7.5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM3 11.75c0-.97.78-1.75 1.75-1.75h5.5c.97 0 1.75.78 1.75 1.75v4.75a4.5 4.5 0 1 1-9 0v-4.75Zm1.75-.25a.25.25 0 0 0-.25.25v4.75a3 3 0 1 0 6 0v-4.75a.25.25 0 0 0-.25-.25h-5.5Zm5.78-2.89a3 3 0 1 0 0-5.23 4 4 0 0 1 .75 1.3 1.5 1.5 0 1 1 0 2.63 4 4 0 0 1-.75 1.3Zm.33 12.24a4.5 4.5 0 0 0 5.64-4.35v-4.75c0-.97-.78-1.75-1.75-1.75h-2.38c.34.42.57.93.62 1.5h1.76c.14 0 .25.11.25.25v4.75a3 3 0 0 1-2.89 3c-.34.52-.76.98-1.25 1.35Zm4.17-12.24a3 3 0 1 0 0-5.23 4 4 0 0 1 .75 1.3 1.5 1.5 0 1 1 0 2.63 4 4 0 0 1-.75 1.3Zm.33 12.24A4.5 4.5 0 0 0 21 16.5v-4.75c0-.97-.78-1.75-1.75-1.75h-2.38c.34.42.57.93.62 1.5h1.76c.14 0 .25.11.25.25v4.75a3 3 0 0 1-2.89 3c-.34.52-.76.98-1.25 1.35Z"])));
const PeopleSearch20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSearch20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm4.87 14.8a8.53 8.53 0 0 1-3.97 1.17 1.5 1.5 0 0 0-.34-.53l-2-2A4.48 4.48 0 0 0 8.24 11H15a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8ZM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"])));
const PeopleSearch20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSearch20Regular', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm7.87 10.8a8.53 8.53 0 0 1-3.97 1.17 1.5 1.5 0 0 0-.34-.53l-.44-.44a8.07 8.07 0 0 0 4.2-1.05A3.36 3.36 0 0 0 16 13a1 1 0 0 0-1-1H8.74c-.12-.36-.3-.7-.5-1H15a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8ZM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"])));
const PeopleSearch24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSearch24Filled', "24", ["M11.9 14h7.85C21 14 22 15 22 16.25v.9c0 1.1-.47 2.14-1.3 2.85-1.57 1.34-3.81 2-6.7 2h-.18c.3-.6.23-1.36-.22-1.9l-.11-.12-2.23-2.22A5.48 5.48 0 0 0 11.9 14Zm-5.4-3.5a4.5 4.5 0 0 1 3.46 7.38l2.82 2.81a.75.75 0 0 1-.97 1.14l-.09-.08-2.9-2.9A4.5 4.5 0 1 1 6.5 10.5Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM14 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"])));
const PeopleSearch24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSearch24Regular', "24", ["M11.9 14h7.85C21 14 22 15 22 16.25v.9c0 1.1-.47 2.14-1.3 2.85-1.57 1.34-3.81 2-6.7 2h-.18c.23-.47.24-1.02.03-1.5H14c2.56 0 4.46-.56 5.72-1.64.5-.43.78-1.05.78-1.7v-.91a.75.75 0 0 0-.75-.75h-7.77a5.56 5.56 0 0 0-.07-1.5Zm-5.4-3.5a4.5 4.5 0 0 1 3.46 7.38l2.82 2.81a.75.75 0 0 1-.97 1.14l-.09-.08-2.9-2.9A4.5 4.5 0 1 1 6.5 10.5Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM14 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"])));
const PeopleSettings20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSettings20Filled', "20", ["M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM17 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 0 0-1-.26H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 0 1 9 14.5Zm3.06-3.06a2 2 0 0 1-1.43 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"])));
const PeopleSettings20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSettings20Regular', "20", ["M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 1 .26c-.28.23-.54.49-.77.77A1 1 0 0 0 10 11H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.15 2.25-.37.01.35.05.7.12 1.02-.64.22-1.42.35-2.37.35-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12ZM13 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-2.44 7.44a2 2 0 0 1-1.43 2.48l-.46.12a4.73 4.73 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"])));
const PeopleSettings24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSettings24Filled', "24", ["M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 13C3.01 13 2 14 2 15.25v.25S2 20 8 20a7.9 7.9 0 0 0 3.28-.61 6.5 6.5 0 0 1 1.36-6.2 2.24 2.24 0 0 0-.89-.19h-7.5Zm10.03.98a2 2 0 0 1-1.44 2.5l-.59.14a5.73 5.73 0 0 0 0 1.8l.55.13a2 2 0 0 1 1.45 2.51l-.19.64c.44.38.94.7 1.49.92l.49-.52a2 2 0 0 1 2.9 0l.5.52a5.28 5.28 0 0 0 1.48-.9l-.2-.7a2 2 0 0 1 1.44-2.5l.59-.14a5.73 5.73 0 0 0-.01-1.8l-.54-.13a2 2 0 0 1-1.45-2.51l.19-.63c-.44-.39-.94-.7-1.49-.93l-.49.52a2 2 0 0 1-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.91l.2.69ZM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19Z"])));
const PeopleSettings24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSettings24Regular', "24", ["M5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4.25 13C3.01 13 2 14 2 15.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 18.97 5.17 20 8 20c1.37 0 2.44-.24 3.28-.62a6.48 6.48 0 0 1-.27-1.55c-.65.38-1.6.67-3.01.67-2.42 0-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43v-.26c0-.41.34-.75.75-.75h7.48c.25-.48.56-.92.91-1.32a2.24 2.24 0 0 0-.89-.18h-7.5Zm10.03.98a2 2 0 0 1-1.44 2.5l-.59.14a5.73 5.73 0 0 0 0 1.8l.55.13a2 2 0 0 1 1.45 2.51l-.19.64c.44.38.94.7 1.49.92l.49-.52a2 2 0 0 1 2.9 0l.5.52a5.28 5.28 0 0 0 1.48-.9l-.2-.7a2 2 0 0 1 1.44-2.5l.59-.14a5.73 5.73 0 0 0-.01-1.8l-.54-.13a2 2 0 0 1-1.45-2.51l.19-.63c-.44-.39-.94-.7-1.49-.93l-.49.52a2 2 0 0 1-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.91l.2.69ZM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19Z"])));
const PeopleSettings28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSettings28Filled', "28", ["M9.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm14-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM2 17.25C2 16.01 3 15 4.25 15h10.5c.2 0 .39.03.57.07a7.48 7.48 0 0 0-2.07 7.35c-.98.36-2.2.58-3.75.58C2 23 2 17.75 2 17.75v-.5Zm14.8-.55a2 2 0 0 1-1.45 2.5l-1.02.25a6.8 6.8 0 0 0 0 2.15l.98.23a2 2 0 0 1 1.45 2.52l-.32 1.1c.52.45 1.11.83 1.75 1.1l.85-.9a2 2 0 0 1 2.9 0l.85.9a6.2 6.2 0 0 0 1.75-1.09l-.34-1.16a2 2 0 0 1 1.44-2.5l1.03-.25a6.8 6.8 0 0 0 0-2.15l-.99-.23a2 2 0 0 1-1.45-2.51l.33-1.1a6.2 6.2 0 0 0-1.75-1.1l-.85.88a2 2 0 0 1-2.9 0l-.85-.9a6.2 6.2 0 0 0-1.75 1.1l.34 1.16Zm3.7 5.3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"])));
const PeopleSettings28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSettings28Regular', "28", ["M9.5 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm-3 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM20 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM4.25 15C3.01 15 2 16 2 17.25v.53a2.2 2.2 0 0 0 .02.24A5.09 5.09 0 0 0 3 20.45C4 21.8 5.93 23 9.5 23c1.53 0 2.76-.22 3.75-.58-.13-.5-.21-1-.24-1.52-.84.35-1.97.6-3.51.6-3.2 0-4.63-1.05-5.3-1.95a3.59 3.59 0 0 1-.7-1.79v-.51c0-.41.34-.75.75-.75h9.9c.33-.52.73-1 1.17-1.43a2.25 2.25 0 0 0-.57-.07H4.25Zm12.55 1.7a2 2 0 0 1-1.45 2.5l-1.02.25a6.8 6.8 0 0 0 0 2.15l.98.23a2 2 0 0 1 1.45 2.52l-.32 1.1c.52.45 1.11.83 1.75 1.1l.85-.9a2 2 0 0 1 2.9 0l.85.9a6.2 6.2 0 0 0 1.75-1.09l-.34-1.16a2 2 0 0 1 1.44-2.5l1.03-.25a6.8 6.8 0 0 0 0-2.15l-.99-.23a2 2 0 0 1-1.45-2.51l.33-1.1a6.2 6.2 0 0 0-1.75-1.1l-.85.88a2 2 0 0 1-2.9 0l-.85-.9a6.2 6.2 0 0 0-1.75 1.1l.34 1.16Zm3.7 5.3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"])));
const PeopleStar16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar16Filled', "16", ["M8 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11.5 6a5.5 5.5 0 0 0-1.58.23 2 2 0 1 1 3.16 0A5.5 5.5 0 0 0 11.5 6ZM3 8h4.26a5.48 5.48 0 0 0-1.17 4.48l-.59.02c-4 0-4-2.93-4-2.93V9.5C1.5 8.67 2.17 8 3 8Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H9c-.48 0-.68.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z"])));
const PeopleStar16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar16Regular', "16", ["M4 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-.58 1.23a5.5 5.5 0 0 1 3.16 0 2 2 0 1 0-3.16 0ZM3 8h4.26c-.26.3-.48.64-.66 1H3a.5.5 0 0 0-.5.5v.15l.04.2c.04.18.13.42.3.65.33.45 1.04 1 2.66 1 .18 0 .34 0 .5-.02v.02c0 .33.03.66.09.98a7.3 7.3 0 0 1-.59.02c-1.88 0-2.92-.65-3.47-1.4A2.85 2.85 0 0 1 1.5 9.6V9.5C1.5 8.67 2.17 8 3 8Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H9c-.48 0-.68.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z"])));
const PeopleStar20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar20Filled', "20", ["M6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 1 .26 5.49 5.49 0 0 0-1.88 5.4c-.64.21-1.42.34-2.37.34-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12ZM17 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2-1.1h-1.55l-.47-1.54a.5.5 0 0 0-.96 0l-.47 1.53H12c-.48 0-.69.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95Z"])));
const PeopleStar20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar20Regular', "20", ["M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 1 .26c-.28.23-.54.49-.77.77A1 1 0 0 0 10 11H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.15 2.25-.37.01.35.05.7.12 1.02-.64.22-1.42.35-2.37.35-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12ZM13 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.02-2.64a.5.5 0 0 0-.96 0l-.47 1.53H12c-.48 0-.69.65-.3.95l1.26.94-.48 1.53c-.15.49.38.89.77.59l1.25-.95 1.25.95c.4.3.92-.1.77-.59l-.48-1.53 1.25-.94c.4-.3.2-.95-.3-.95h-1.54l-.47-1.53Z"])));
const PeopleStar24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar24Filled', "24", ["M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 13C3.01 13 2 14 2 15.25v.25S2 20 8 20a7.9 7.9 0 0 0 3.28-.61 6.5 6.5 0 0 1 1.36-6.2 2.24 2.24 0 0 0-.89-.19h-7.5ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-4.94-3.08a.58.58 0 0 0-1.12 0l-.55 1.79h-1.8c-.57 0-.8.75-.35 1.1l1.46 1.1-.56 1.79c-.17.56.44 1.03.9.68l1.46-1.1 1.46 1.1c.46.35 1.07-.12.9-.68l-.56-1.79 1.46-1.1c.46-.35.22-1.1-.35-1.1h-1.8l-.55-1.79Z"])));
const PeopleStar24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar24Regular', "24", ["M5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm7.5 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4.25 13C3.01 13 2 14 2 15.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 18.97 5.17 20 8 20c1.37 0 2.44-.24 3.28-.62a6.48 6.48 0 0 1-.27-1.55c-.65.38-1.6.67-3.01.67-2.42 0-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43v-.26c0-.41.34-.75.75-.75h7.48c.25-.48.56-.92.91-1.32a2.24 2.24 0 0 0-.89-.18h-7.5ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-4.94-3.08a.58.58 0 0 0-1.12 0l-.55 1.79h-1.8c-.57 0-.8.75-.35 1.1l1.46 1.1-.56 1.79c-.17.56.44 1.03.9.68l1.46-1.1 1.46 1.1c.46.35 1.07-.12.9-.68l-.56-1.79 1.46-1.1c.46-.35.22-1.1-.35-1.1h-1.8l-.55-1.79Z"])));
const PeopleStar28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar28Filled', "28", ["M9.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm14-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM2 17.25C2 16.01 3 15 4.25 15h10.5c.2 0 .39.03.57.07a7.48 7.48 0 0 0-2.07 7.35c-.98.36-2.2.58-3.75.58C2 23 2 17.75 2 17.75v-.5Zm25 3.25a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-5.79-3.96a.74.74 0 0 0-1.42 0l-.72 2.3h-2.32c-.73 0-1.03.97-.44 1.41l1.88 1.42-.72 2.3c-.23.72.57 1.32 1.16.88l1.87-1.42 1.88 1.42c.58.44 1.38-.16 1.15-.88l-.72-2.3 1.88-1.42c.59-.44.29-1.41-.44-1.41h-2.32l-.72-2.3Z"])));
const PeopleStar28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar28Regular', "28", ["M9.5 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm-3 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM20 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM2 17.25C2 16.01 3 15 4.25 15h10.5c.2 0 .39.03.57.07-.44.43-.84.9-1.17 1.43h-9.9a.75.75 0 0 0-.75.75v.61l.08.41c.09.35.26.81.61 1.28.68.9 2.12 1.95 5.31 1.95 1.54 0 2.67-.25 3.51-.6.03.52.1 1.03.24 1.52-.99.36-2.22.58-3.75.58C5.94 23 4 21.8 3 20.45a5.09 5.09 0 0 1-1-2.67v-.53Zm25 3.25a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-5.79-3.96a.74.74 0 0 0-1.42 0l-.72 2.3h-2.32c-.73 0-1.03.97-.44 1.41l1.88 1.42-.72 2.3c-.23.72.57 1.32 1.16.88l1.87-1.42 1.88 1.42c.58.44 1.38-.16 1.15-.88l-.72-2.3 1.88-1.42c.59-.44.29-1.41-.44-1.41h-2.32l-.72-2.3Z"])));
const PeopleStar32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar32Filled', "32", ["M10.5 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM23 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-9 9c0-2.71 1.2-5.14 3.1-6.8A3 3 0 0 0 16 16H5a3 3 0 0 0-3 3v.15S2 25 10.5 25c1.44 0 2.64-.17 3.63-.45A9.06 9.06 0 0 1 14 23Zm16.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.21-4.86-.94 2.83h-3a.75.75 0 0 0-.43 1.36l2.4 1.7-.92 2.8a.75.75 0 0 0 1.14.84L23 25.93l2.46 1.74a.75.75 0 0 0 1.14-.84l-.93-2.8 2.41-1.7a.75.75 0 0 0-.43-1.36h-3l-.94-2.83a.75.75 0 0 0-1.42 0Z"])));
const PeopleStar32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar32Regular', "32", ["M7 8.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM10.5 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM21 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-7 10a3 3 0 0 1 1.1.2 9.05 9.05 0 0 0-1.58 1.8H5a1 1 0 0 0-1 1V19.29l.09.4c.09.35.27.82.64 1.29.7.9 2.25 2.02 5.77 2.02 1.5 0 2.64-.2 3.51-.5a9.12 9.12 0 0 0 .12 2.05c-1 .28-2.2.45-3.63.45-3.98 0-6.18-1.29-7.35-2.8A5.56 5.56 0 0 1 2 19.24V19a3 3 0 0 1 3-3h11Zm14.5 7a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-8.21-4.86-.94 2.83h-3a.75.75 0 0 0-.43 1.36l2.4 1.7-.92 2.8a.75.75 0 0 0 1.14.84L23 25.93l2.46 1.74a.75.75 0 0 0 1.14-.84l-.93-2.8 2.41-1.7a.75.75 0 0 0-.43-1.36h-3l-.94-2.83a.75.75 0 0 0-1.42 0Z"])));
const PeopleStar48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar48Filled', "48", ["M16 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm18 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM6.75 25A3.75 3.75 0 0 0 3 28.75V30s0 9 13 9c2.6 0 4.7-.36 6.36-.94a13.04 13.04 0 0 1 4.1-12.86c-.38-.13-.79-.2-1.21-.2H6.75ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.81-6.6c-.37-1.2-2-1.2-2.38 0l-1.2 3.83h-3.86c-1.2 0-1.71 1.62-.73 2.36l3.12 2.37-1.2 3.83c-.37 1.2.95 2.2 1.94 1.45L35 39.88l3.12 2.36c.99.75 2.3-.25 1.93-1.45l-1.2-3.83 3.13-2.37c.98-.74.48-2.36-.73-2.36h-3.87L36.2 28.4Z"])));
const PeopleStar48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleStar48Regular', "48", ["M10.5 14a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM16 6a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm14.5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM6.75 25A3.75 3.75 0 0 0 3 28.75v1.3a3.76 3.76 0 0 0 .03.42 8.69 8.69 0 0 0 1.7 4.16C6.47 36.95 9.82 39 16 39c2.59 0 4.68-.36 6.36-.95-.2-.82-.32-1.67-.35-2.54-1.45.59-3.4.99-6.01.99-5.57 0-8.1-1.82-9.29-3.38a6.19 6.19 0 0 1-1.21-3.13v-1.24c0-.69.56-1.25 1.25-1.25h17.63c.6-.85 1.3-1.62 2.08-2.3-.38-.13-.79-.2-1.21-.2H6.75ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.81-6.6c-.37-1.2-2-1.2-2.38 0l-1.2 3.83h-3.86c-1.2 0-1.71 1.62-.73 2.36l3.12 2.37-1.2 3.83c-.37 1.2.95 2.2 1.94 1.45L35 39.88l3.12 2.36c.99.75 2.3-.25 1.93-1.45l-1.2-3.83 3.13-2.37c.98-.74.48-2.36-.73-2.36h-3.87L36.2 28.4Z"])));
const PeopleSwap16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSwap16Filled', "16", ["M5.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7.88 9l-1.44 1.44a1.5 1.5 0 0 0 0 2.12l.73.73c-.46.13-1.01.21-1.67.21-4 0-4-2.93-4-2.93v-.07C1.5 9.67 2.17 9 3 9h4.88Zm1.97.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L8.71 12h4.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L13.29 11H8.71l1.14-1.15Z"])));
const PeopleSwap16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSwap16Regular', "16", ["M5.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3 5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm8.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM3 9c-.83 0-1.5.67-1.5 1.5v.11a1.38 1.38 0 0 0 .01.14c0 .08.03.2.06.34.07.27.2.64.46 1 .55.76 1.6 1.41 3.47 1.41.65 0 1.2-.08 1.67-.21l-.73-.73a1.53 1.53 0 0 1-.1-.12c-.25.04-.53.06-.84.06-1.62 0-2.33-.55-2.66-1a1.85 1.85 0 0 1-.34-.9V10.5c0-.28.22-.5.5-.5h3.88l1-1H3Zm6.85.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L8.71 12h4.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L13.29 11H8.71l1.14-1.15Z"])));
const PeopleSwap20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSwap20Filled', "20", ["M10 6.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm1.35 4.78-1.91 1.9a1.5 1.5 0 0 0 0 2.13l.65.65a6.3 6.3 0 0 1-3.34.79C1.5 17 1.5 13 1.5 13c0-1.1.9-2 2-2H10a2 2 0 0 1 1.35.53ZM14.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-1.65 2.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 15h5.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L17.29 14h-5.58l1.14-1.15Z"])));
const PeopleSwap20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSwap20Regular', "20", ["M6.75 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.5 6.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm7.85 4.78A2 2 0 0 0 10 11H3.5a2 2 0 0 0-2 2V13.08a1.72 1.72 0 0 0 .01.18 3.95 3.95 0 0 0 .67 1.8C2.88 16.09 4.24 17 6.75 17c1.48 0 2.56-.32 3.34-.79l-.65-.65a1.53 1.53 0 0 1-.08-.09c-.6.31-1.44.53-2.61.53-2.24 0-3.26-.8-3.74-1.5a2.95 2.95 0 0 1-.5-1.42l-.01-.02V13a1 1 0 0 1 1-1H10a1 1 0 0 1 .64.23l.71-.7ZM14.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm.85 5.35a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L11.71 15h5.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L17.29 14h-5.58l1.14-1.15Z"])));
const PeopleSwap24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSwap24Filled', "24", ["M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm8 1a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 16.25C2 15.01 3 14 4.25 14h7.5c.37 0 .72.09 1.03.25L10.5 16.5c-.68.69-.68 1.8 0 2.48l1.19 1.18c-.87.5-2.06.83-3.7.83-6 0-6-4.5-6-4.5v-.25Zm18.28-1.53a.75.75 0 0 0-1.06 1.06L20.44 17h-6.88l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5c-.3.3-.3.77 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06l-1.22-1.22h6.88l-1.22 1.22a.75.75 0 0 0 1.06 1.06l2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5Z"])));
const PeopleSwap24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSwap24Regular', "24", ["M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm13-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM14 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1.22 5.25c-.31-.16-.66-.25-1.03-.25h-7.5C3.01 14 2 15 2 16.25v.28a2.07 2.07 0 0 0 .01.2c.02.14.04.32.1.53.09.42.29.98.68 1.55C3.61 19.97 5.17 21 8 21c1.6 0 2.8-.33 3.7-.83l-1.13-1.12c-.61.27-1.45.45-2.57.45-2.42 0-3.49-.85-3.98-1.56a2.99 2.99 0 0 1-.52-1.43v-.26c0-.41.34-.75.75-.75h7.28l1.25-1.25Zm7.5.47a.75.75 0 0 0-1.06 1.06L20.44 17h-6.88l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5c-.3.3-.3.77 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06l-1.22-1.22h6.88l-1.22 1.22a.75.75 0 0 0 1.06 1.06l2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5Z"])));
const PeopleSwap28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSwap28Filled', "28", ["M14 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm1.01 6.51-2.5 2.5c-.68.69-.68 1.8 0 2.48l1.9 1.89A9.46 9.46 0 0 1 9.5 24C2 24 2 18.75 2 18.75v-.5C2 17.01 3 16 4.25 16h10.5l.26.01ZM20 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2.22 2.78a.75.75 0 0 0-1.06-1.06l-3.5 3.5c-.3.3-.3.77 0 1.06l3.5 3.5a.75.75 0 0 0 1.06-1.06l-2.22-2.22h8.88l-2.22 2.22a.75.75 0 0 0 1.06 1.06l3.5-3.5c.3-.3.3-.77 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 1.06L24.44 19h-8.88l2.22-2.22Z"])));
const PeopleSwap28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSwap28Regular', "28", ["M5 9.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm4.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm7 4a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 18.25C2 17.01 3 16 4.25 16h10.5l.26.01-1.48 1.49H4.25a.75.75 0 0 0-.75.75v.61l.08.41c.09.35.26.81.61 1.28.68.9 2.12 1.95 5.31 1.95a8.5 8.5 0 0 0 3.8-.73l1.1 1.1A9.46 9.46 0 0 1 9.5 24C5.94 24 4 22.8 3 21.45a5.09 5.09 0 0 1-1-2.67v-.53Zm15.78-1.47a.75.75 0 0 0-1.06-1.06l-3.5 3.5c-.3.3-.3.77 0 1.06l3.5 3.5a.75.75 0 0 0 1.06-1.06l-2.22-2.22h8.88l-2.22 2.22a.75.75 0 0 0 1.06 1.06l3.5-3.5c.3-.3.3-.77 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 1.06L24.44 19h-8.88l2.22-2.22Z"])));
const PeopleSync16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSync16Filled', "16", ["M8 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11.5 6a5.5 5.5 0 0 0-1.58.23 2 2 0 1 1 3.16 0A5.5 5.5 0 0 0 11.5 6ZM3 8h4.26a5.48 5.48 0 0 0-1.17 4.48l-.59.02c-4 0-4-2.93-4-2.93V9.5C1.5 8.67 2.17 8 3 8Zm4 3.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H12a.5.5 0 0 1 0-1h.47a1.98 1.98 0 0 0-1.72-.1 2 2 0 0 0-.66.44.5.5 0 0 1-.71-.71A3 3 0 0 1 13 9.15V9c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V14a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H11a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z"])));
const PeopleSync16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSync16Regular', "16", ["M4 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-.58 1.23a5.5 5.5 0 0 1 3.16 0 2 2 0 1 0-3.16 0ZM3 8h4.26c-.26.3-.48.64-.66 1H3a.5.5 0 0 0-.5.5v.15l.04.2c.04.18.13.42.3.65.33.45 1.04 1 2.66 1 .18 0 .34 0 .5-.02v.02c0 .33.03.66.09.98a7.3 7.3 0 0 1-.59.02c-1.88 0-2.92-.65-3.47-1.4A2.85 2.85 0 0 1 1.5 9.6V9.5C1.5 8.67 2.17 8 3 8Zm4 3.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H12a.5.5 0 0 1 0-1h.47a1.98 1.98 0 0 0-1.72-.1 2 2 0 0 0-.66.44.5.5 0 0 1-.71-.71A3 3 0 0 1 13 9.15V9c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V14a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H11a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z"])));
const PeopleSync20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSync20Filled', "20", ["M6.75 9a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM17 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-8 8c0-1.7.78-3.23 2-4.24a2 2 0 0 0-1-.26H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.95 0 1.73-.13 2.37-.35A5.52 5.52 0 0 1 9 14.5Zm1 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z"])));
const PeopleSync20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSync20Regular', "20", ["M4.5 5.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.5 12c0-1.1.9-2 2-2H10a2 2 0 0 1 1 .26c-.28.23-.54.49-.77.77A1 1 0 0 0 10 11H3.5a1 1 0 0 0-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c.95 0 1.69-.15 2.25-.37.01.35.05.7.12 1.02-.64.22-1.42.35-2.37.35-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 0 1-.68-1.99V12ZM13 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z"])));
const PeopleSync28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSync28Filled', "28", ["M9.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm14-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM2 17.25C2 16.01 3 15 4.25 15h10.5c.2 0 .39.03.57.07a7.48 7.48 0 0 0-2.07 7.35c-.98.36-2.2.58-3.75.58C2 23 2 17.75 2 17.75v-.5Zm12 3.25a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm5.35-4.08a4 4 0 0 1 4.65 1.9v-.82a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.73a3 3 0 0 0-4.85-.87.5.5 0 0 1-.7-.7 4 4 0 0 1 1.67-1.01Zm2.3 8.16a4 4 0 0 1-4.65-1.9v.82a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.73a3 3 0 0 0 4.85.87.5.5 0 0 1 .7.7 4 4 0 0 1-1.67 1.01Z"])));
const PeopleSync28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleSync28Regular', "28", ["M9.5 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm-3 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM20 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM4.25 15C3.01 15 2 16 2 17.25v.53a2.2 2.2 0 0 0 .02.24A5.09 5.09 0 0 0 3 20.45C4 21.8 5.93 23 9.5 23c1.53 0 2.76-.22 3.75-.58-.13-.5-.21-1-.24-1.52-.84.35-1.97.6-3.51.6-3.2 0-4.63-1.05-5.3-1.95a3.59 3.59 0 0 1-.7-1.79v-.51c0-.41.34-.75.75-.75h9.9c.33-.52.73-1 1.17-1.43a2.25 2.25 0 0 0-.57-.07H4.25ZM14 20.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm5.35-4.08a4 4 0 0 1 4.65 1.9v-.82a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.73a3 3 0 0 0-4.85-.87.5.5 0 0 1-.7-.7 4 4 0 0 1 1.67-1.01Zm2.3 8.16a4 4 0 0 1-4.65-1.9v.82a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.73a3 3 0 0 0 4.85.87.5.5 0 0 1 .7.7 4 4 0 0 1-1.67 1.01Z"])));
const PeopleTeam16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam16Filled', "16", ["M8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a3.02 3.02 0 0 1-.15.93A3 3 0 0 1 5 11V8ZM4 8c0-.36.1-.7.27-1H2a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 0 3.44 2.32A3.98 3.98 0 0 1 4 11V8Zm8 0v3c0 .65-.16 1.27-.44 1.82A2.5 2.5 0 0 0 15 10.5V8a1 1 0 0 0-1-1h-2.27A2 2 0 0 1 12 8Z"])));
const PeopleTeam16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam16Regular', "16", ["M6 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-9-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3 4.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM4.27 7A2 2 0 0 0 4 8H2v2.5a1.5 1.5 0 0 0 2.1 1.38c.07.33.19.64.34.94A2.5 2.5 0 0 1 1 10.5V8a1 1 0 0 1 1-1h2.27Zm7.3 5.82A2.5 2.5 0 0 0 15 10.5V8a1 1 0 0 0-1-1h-2.27A2 2 0 0 1 12 8h2v2.5a1.5 1.5 0 0 1-2.1 1.38c-.07.33-.19.64-.34.94ZM6 7a1 1 0 0 0-1 1v3a3 3 0 0 0 6 0V8a1 1 0 0 0-1-1H6Zm0 1h4v3a2 2 0 0 1-4 0V8Z"])));
const PeopleTeam20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam20Filled', "20", ["M12.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5 .5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-13 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 0 1-8 0V9.25Zm-1 0c0-.46.14-.9.38-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.4 2.97C5.14 15.37 5 14.7 5 14V9.25ZM15 14c0 .7-.14 1.37-.4 1.97A3 3 0 0 0 18 13V9.25C18 8.56 17.44 8 16.75 8h-2.13c.24.36.38.79.38 1.25V14Z"])));
const PeopleTeam20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam20Regular', "20", ["M10 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM7.5 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm8-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-10 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.6 12H5a2 2 0 0 1-2-2V9.25c0-.14.11-.25.25-.25h1.76c.04-.37.17-.7.37-1H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.4 2.97 4.96 4.96 0 0 1-.3-.97Zm9.5.97A3 3 0 0 0 18 13V9.25C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1h1.76c.14 0 .25.11.25.25V13a2 2 0 0 1-2.1 2c-.07.34-.17.66-.3.97ZM7.25 8C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 8 0V9.25C14 8.56 13.44 8 12.75 8h-5.5ZM7 9.25c0-.14.11-.25.25-.25h5.5c.14 0 .25.11.25.25V14a3 3 0 1 1-6 0V9.25Z"])));
const PeopleTeam24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam24Filled', "24", ["M14.75 10c.97 0 1.75.78 1.75 1.75v4.75a4.5 4.5 0 0 1-9 0v-4.75c0-.97.79-1.75 1.75-1.75h5.5Zm-7.62 0c-.35.42-.57.95-.62 1.53v4.97c0 .85.18 1.65.52 2.36A4 4 0 0 1 2 15v-3.24c0-.92.7-1.67 1.6-1.74l.15-.01h3.38Zm9.74 0h3.38c.97 0 1.75.78 1.75 1.75V15a4 4 0 0 1-5.03 3.87c.3-.63.48-1.32.53-2.06v-5.06c0-.67-.23-1.28-.63-1.75ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"])));
const PeopleTeam24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam24Regular', "24", ["M14.75 10c.97 0 1.75.78 1.75 1.75v4.75a4.5 4.5 0 0 1-9 0v-4.75c0-.97.79-1.75 1.75-1.75h5.5Zm0 1.5h-5.5a.25.25 0 0 0-.25.25v4.75a3 3 0 0 0 6 0v-4.75a.25.25 0 0 0-.25-.25Zm-11-1.5h3.38c-.34.41-.57.93-.62 1.5H3.75a.25.25 0 0 0-.25.25V15a2.5 2.5 0 0 0 3.08 2.43c.09.5.24.99.45 1.43A4 4 0 0 1 2 15v-3.24c0-.97.78-1.75 1.75-1.75Zm13.12 0h3.38c.97 0 1.75.78 1.75 1.75V15a4 4 0 0 1-5.03 3.87c.21-.45.37-.93.46-1.44A2.5 2.5 0 0 0 20.5 15v-3.25a.25.25 0 0 0-.25-.25h-2.76a2.74 2.74 0 0 0-.62-1.5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm6.5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-13 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"])));
const PeopleTeam28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam28Filled', "28", ["M17.75 11c.97 0 1.75.78 1.75 1.75v6.75a5.5 5.5 0 0 1-11 0v-6.75c0-.97.79-1.75 1.75-1.75h7.5Zm-14 0h4.38c-.35.42-.57.95-.62 1.53v6.97c0 1.13.28 2.2.8 3.13A4.49 4.49 0 0 1 2 18.5v-5.75c0-.97.78-1.75 1.75-1.75Zm16.12 0h4.38c.97 0 1.75.78 1.75 1.75v5.75a4.5 4.5 0 0 1-6.3 4.13l.06-.1c.43-.82.69-1.73.74-2.7v-7.08c0-.67-.23-1.28-.63-1.75ZM14 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm8 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM6 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"])));
const PeopleTeam28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam28Regular', "28", ["M17.25 11c1.25 0 2.25 1 2.25 2.25v6.25a5.5 5.5 0 0 1-11 0v-6.25c0-1.24 1-2.25 2.25-2.25h6.5Zm0 1.5h-6.5a.75.75 0 0 0-.75.75v6.25a4 4 0 0 0 8 0v-6.25a.75.75 0 0 0-.75-.75Zm-13-1.5h4.16c-.4.41-.69.93-.82 1.5H4.25a.75.75 0 0 0-.75.75v5.25a3 3 0 0 0 4.24 2.73c.13.5.32.96.56 1.4A4.49 4.49 0 0 1 2 18.5v-5.25C2 12.01 3 11 4.25 11Zm19.5 0c1.24 0 2.25 1 2.25 2.25v5.25a4.5 4.5 0 0 1-6.3 4.13l.06-.1c.21-.41.38-.84.5-1.3a3 3 0 0 0 4.23-2.74v-5.24a.75.75 0 0 0-.74-.75h-3.33a3.24 3.24 0 0 0-.82-1.5h4.15ZM14 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm8 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM6 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm8 .5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-16 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"])));
const PeopleTeam32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam32Filled', "32", ["M16 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm19 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9.38 13a3.98 3.98 0 0 0-.88 2.5V23c0 1.23.3 2.4.83 3.43A5 5 0 0 1 2 22v-6.5A2.5 2.5 0 0 1 4.5 13h4.88Zm13.3 13.43c.52-1.03.82-2.2.82-3.43v-7.5c0-.95-.33-1.82-.88-2.5h4.88a2.5 2.5 0 0 1 2.5 2.5V22a5 5 0 0 1-7.33 4.43ZM12.5 13a2.5 2.5 0 0 0-2.5 2.5V23a6 6 0 0 0 12 0v-7.5a2.5 2.5 0 0 0-2.5-2.5h-7Z"])));
const PeopleTeam32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam32Regular', "32", ["M16 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm13.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM22 7.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm-17 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm2.15 20.5A3 3 0 0 1 4 22v-6.5c0-.28.22-.5.5-.5h4.03c.1-.75.4-1.44.85-2H4.5A2.5 2.5 0 0 0 2 15.5V22a5 5 0 0 0 7.33 4.43c-.31-.6-.54-1.25-.68-1.92Zm14.02 1.93A5 5 0 0 0 30 22v-6.5a2.5 2.5 0 0 0-2.5-2.5h-4.88c.45.56.76 1.25.85 2h4.03c.28 0 .5.22.5.5V22a3 3 0 0 1-4.65 2.5 7.45 7.45 0 0 1-.68 1.93ZM12.5 13a2.5 2.5 0 0 0-2.5 2.5V23a6 6 0 0 0 12 0v-7.5a2.5 2.5 0 0 0-2.5-2.5h-7Zm-.5 2.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V23a4 4 0 0 1-8 0v-7.5Z"])));
const PeopleTeam48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam48Filled', "48", ["M18 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm19-4a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM11 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm8.25 12A4.25 4.25 0 0 0 15 23.25V34a9 9 0 1 0 18 0V23.25C33 20.9 31.1 19 28.75 19h-9.5ZM13 23.25c0-1.6.6-3.06 1.6-4.17a4.27 4.27 0 0 0-.85-.08h-5.5A4.25 4.25 0 0 0 4 23.25V33a7 7 0 0 0 10.3 6.18c-.83-1.54-1.3-3.3-1.3-5.18V23.25ZM35 34c0 1.87-.47 3.64-1.3 5.18A7 7 0 0 0 44 33v-9.75C44 20.9 42.1 19 39.75 19h-5.5c-.29 0-.57.03-.84.08A6.23 6.23 0 0 1 35 23.25V34Z"])));
const PeopleTeam48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeam48Regular', "48", ["M24 7.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM18 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm19-1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM32 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM8.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM11 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm4 16.25C15 20.9 16.9 19 19.25 19h9.5C31.1 19 33 20.9 33 23.25V34a9 9 0 1 1-18 0V23.25Zm9 17.25a6.5 6.5 0 0 0 6.5-6.5V23.25c0-.97-.78-1.75-1.75-1.75h-9.5c-.97 0-1.75.78-1.75 1.75V34a6.5 6.5 0 0 0 6.5 6.5Zm-13-3c.87 0 1.68-.25 2.37-.67.22.82.53 1.61.92 2.35A7 7 0 0 1 4 33v-9.75C4.01 20.9 5.91 19 8.26 19h5.5c.29 0 .57.03.84.08a6.24 6.24 0 0 0-1.34 2.42h-5c-.97 0-1.75.78-1.75 1.75V33a4.5 4.5 0 0 0 4.5 4.5ZM37 40c-1.19 0-2.31-.3-3.3-.82.4-.74.71-1.53.93-2.35A4.5 4.5 0 0 0 41.5 33v-9.75c0-.97-.78-1.75-1.75-1.75h-5a6.24 6.24 0 0 0-1.34-2.42c.27-.05.55-.08.84-.08h5.5C42.1 19 44 20.9 44 23.25V33a7 7 0 0 1-7 7Z"])));
const PeopleTeamAdd20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamAdd20Filled', "20", ["M12.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5 .5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-13 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.61 0 1.12.44 1.23 1.02A5.5 5.5 0 0 0 10.25 18L10 18a4 4 0 0 1-4-4V9.25Zm8.99-.23c1.14.1 2.18.55 3.01 1.24V9.25C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.65.37 1.02ZM5 9.25c0-.46.14-.9.38-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.4 2.97C5.14 15.37 5 14.7 5 14V9.25Zm14 5.25a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"])));
const PeopleTeamAdd20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamAdd20Regular', "20", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-11 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM5 15h.1c.07.34.17.66.3.97A3 3 0 0 1 2 13V9.25C2 8.56 2.56 8 3.25 8h2.13c-.2.3-.33.63-.37 1H3.25a.25.25 0 0 0-.25.25V13c0 1.1.9 2 2 2Zm8.97-6c-.11-.57-.62-1-1.22-1h-5.5C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 4.25 4 5.51 5.51 0 0 1-.66-1.03A3 3 0 0 1 7 14V9.25c0-.14.11-.25.25-.25h6.72ZM15 9h1.76c.14 0 .25.11.25.25v.35c.36.18.7.4 1 .66V9.25C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1Zm-.49 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z"])));
const PeopleTeamAdd24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamAdd24Filled', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2h-.09a.5.5 0 0 0-.4.4l-.01.1V17h-2.6a.5.5 0 0 0-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 0 0 .4-.4l.01-.1V18h2.6a.5.5 0 0 0 .4-.41v-.18a.5.5 0 0 0-.4-.4l-.1-.01H18v-2.6a.5.5 0 0 0-.41-.4h-.09Zm-3.25-4c.84 0 1.57.45 1.96 1.13A6.5 6.5 0 0 0 12.02 21H12a4.5 4.5 0 0 1-4.5-4.5v-4.25c0-1.24 1-2.25 2.25-2.25h4.5Zm-6.84 0a3.24 3.24 0 0 0-.9 2.03v4.47c0 .85.18 1.65.52 2.36A4 4 0 0 1 2 15v-2.74c0-1.2.93-2.17 2.1-2.24l.15-.01h3.16Zm12.34 0c1.24 0 2.25 1 2.25 2.25v.56A6.48 6.48 0 0 0 17.5 11h-.24a3.25 3.25 0 0 0-.66-1h3.15ZM18.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"])));
const PeopleTeamAdd24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamAdd24Regular', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2h-.09a.5.5 0 0 0-.4.4l-.01.1V17h-2.6a.5.5 0 0 0-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 0 0 .4-.4l.01-.1V18h2.6a.5.5 0 0 0 .4-.41v-.18a.5.5 0 0 0-.4-.4l-.1-.01H18v-2.6a.5.5 0 0 0-.41-.4h-.09Zm-3.25-4c.84 0 1.57.45 1.96 1.13-.54.1-1.05.28-1.52.5a.74.74 0 0 0-.44-.13h-4.5a.75.75 0 0 0-.75.75v4.25a3 3 0 0 0 2.29 2.91c.17.57.42 1.1.73 1.6L12 21a4.5 4.5 0 0 1-4.5-4.5v-4.25c0-1.24 1-2.25 2.25-2.25h4.5Zm-6.84 0c-.4.41-.69.93-.82 1.5H4.25a.75.75 0 0 0-.75.75V15a2.5 2.5 0 0 0 3.08 2.43c.09.5.24.99.45 1.43A4 4 0 0 1 2 15v-2.74c0-1.2.93-2.17 2.1-2.24l.15-.01h3.16Zm12.34 0c1.24 0 2.25 1 2.25 2.25v.56A6.48 6.48 0 0 0 17.5 11h-.25a3.21 3.21 0 0 0-.65-1h3.15ZM18.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm13 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-6.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-6.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"])));
const PeopleTeamDelete16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamDelete16Filled', "16", ["M8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM5 8a1 1 0 0 1 1-1h2.34a5.5 5.5 0 0 0-1.95 6.53A3 3 0 0 1 5 11V8ZM4 8c0-.36.1-.7.27-1H2a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 0 3.44 2.32A3.98 3.98 0 0 1 4 11V8Zm12 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z"])));
const PeopleTeamDelete16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamDelete16Regular', "16", ["M6 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-9-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3 4.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM4.27 7A2 2 0 0 0 4 8H2v2.5a1.5 1.5 0 0 0 2.1 1.38c.07.33.19.64.34.94A2.5 2.5 0 0 1 1 10.5V8a1 1 0 0 1 1-1h2.27ZM6 7a1 1 0 0 0-1 1v3a3 3 0 0 0 1.39 2.53A5.49 5.49 0 0 1 6 11V8h1.26c.31-.38.67-.72 1.08-1H6Zm10 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z"])));
const PeopleTeamDelete20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamDelete20Filled', "20", ["M12.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5 .5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-13 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.61 0 1.12.44 1.23 1.02A5.5 5.5 0 0 0 10.25 18L10 18a4 4 0 0 1-4-4V9.25Zm8.99-.23c1.14.1 2.18.55 3.01 1.24V9.25C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.65.37 1.02ZM5 9.25c0-.46.14-.9.38-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.4 2.97C5.14 15.37 5 14.7 5 14V9.25Zm14 5.25a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z"])));
const PeopleTeamDelete20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamDelete20Regular', "20", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-11 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM5 15h.1c.07.34.17.66.3.97A3 3 0 0 1 2 13V9.25C2 8.56 2.56 8 3.25 8h2.13c-.2.3-.33.63-.37 1H3.25a.25.25 0 0 0-.25.25V13c0 1.1.9 2 2 2Zm8.97-6c-.11-.57-.62-1-1.22-1h-5.5C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 4.25 4 5.51 5.51 0 0 1-.66-1.03A3 3 0 0 1 7 14V9.25c0-.14.11-.25.25-.25h6.72ZM18 10.26V9.25C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1h1.76c.14 0 .25.11.25.25v.35c.36.18.7.4 1 .66ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-5.65-1.14 1.15 1.14 1.15a.5.5 0 0 1-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 0 1 .7-.7l1.15 1.14 1.15-1.14a.5.5 0 0 1 .7.7Z"])));
const PeopleTeamDelete24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamDelete24Filled', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-3.25-2c.84 0 1.57.45 1.96 1.13A6.5 6.5 0 0 0 12.02 21H12a4.5 4.5 0 0 1-4.5-4.5v-4.25c0-1.24 1-2.25 2.25-2.25h4.5Zm.84 4.97-.07.05-.05.07a.5.5 0 0 0 0 .57l.05.07 1.77 1.77-1.76 1.77-.06.07a.5.5 0 0 0 0 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 0 0 0-.57l-.05-.07-1.77-1.77 1.77-1.77.06-.07a.5.5 0 0 0 0-.57l-.06-.07-.07-.05a.5.5 0 0 0-.57 0l-.07.05-1.77 1.77-1.77-1.77-.07-.05a.5.5 0 0 0-.5-.05l-.07.05ZM7.41 10a3.24 3.24 0 0 0-.9 2.03v4.47c0 .85.18 1.65.52 2.36A4 4 0 0 1 2 15v-2.74c0-1.2.93-2.17 2.1-2.24l.15-.01h3.16Zm12.34 0c1.24 0 2.25 1 2.25 2.25v.56A6.48 6.48 0 0 0 17.5 11h-.24a3.25 3.25 0 0 0-.66-1h3.15ZM18.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"])));
const PeopleTeamDelete24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamDelete24Regular', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-3.25-2c.84 0 1.57.45 1.96 1.13-.54.1-1.05.28-1.52.5a.74.74 0 0 0-.44-.13h-4.5a.75.75 0 0 0-.75.75v4.25a3 3 0 0 0 2.29 2.91c.17.57.42 1.1.73 1.6L12 21a4.5 4.5 0 0 1-4.5-4.5v-4.25c0-1.24 1-2.25 2.25-2.25h4.5Zm.84 4.97-.07.05-.05.07a.5.5 0 0 0 0 .57l.05.07 1.77 1.77-1.76 1.77-.06.07a.5.5 0 0 0 0 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 0 0 0-.57l-.05-.07-1.77-1.77 1.77-1.77.06-.07a.5.5 0 0 0 0-.57l-.06-.07-.07-.05a.5.5 0 0 0-.57 0l-.07.05-1.77 1.77-1.77-1.77-.07-.05a.5.5 0 0 0-.5-.05l-.07.05ZM7.41 10c-.4.41-.69.93-.82 1.5H4.25a.75.75 0 0 0-.75.75V15a2.5 2.5 0 0 0 3.08 2.43c.09.5.24.99.45 1.43A4 4 0 0 1 2 15v-2.74c0-1.2.93-2.17 2.1-2.24l.15-.01h3.16Zm12.34 0c1.24 0 2.25 1 2.25 2.25v.56A6.48 6.48 0 0 0 17.5 11h-.25a3.21 3.21 0 0 0-.65-1h3.15ZM18.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm13 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-6.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-6.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"])));
const PeopleTeamDelete28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamDelete28Filled', "28", ["M17.75 11c.97 0 1.75.78 1.75 1.75v.32a7.5 7.5 0 0 0-5.02 11.9A5.5 5.5 0 0 1 8.5 19.5v-6.74c0-.97.79-1.75 1.75-1.75h7.5Zm2.75 2c2.18 0 4.13.93 5.5 2.4v-2.65c0-.97-.78-1.75-1.75-1.75h-4.38c.4.47.63 1.08.63 1.75V13ZM3.75 11h4.38c-.35.42-.57.95-.62 1.53v6.97c0 1.13.28 2.2.8 3.13A4.49 4.49 0 0 1 2 18.5v-5.75c0-.97.78-1.75 1.75-1.75ZM14 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm8 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM6 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm21 16.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6.5-.7-2.65-2.65a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7l-2.64-2.65 2.64-2.65a.5.5 0 0 0-.7-.7l-2.65 2.64Z"])));
const PeopleTeamDelete28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamDelete28Regular', "28", ["M17.25 11c1.18 0 2.15.91 2.25 2.07-.52.07-1.02.19-1.5.36v-.18a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75v6.25a4 4 0 0 0 3.62 3.98c.23.54.52 1.04.86 1.5L14 25a5.5 5.5 0 0 1-5.5-5.5v-6.25c0-1.24 1-2.25 2.25-2.25h6.5Zm7.25 3.15c.55.35 1.06.77 1.5 1.25v-2.15c0-1.24-1-2.25-2.25-2.25H19.6c.4.41.68.93.82 1.5h3.33c.41 0 .75.34.75.75v.9ZM4.25 11h4.16c-.4.41-.69.93-.82 1.5H4.25a.75.75 0 0 0-.75.75v5.25a3 3 0 0 0 4.24 2.73c.13.5.32.96.56 1.4A4.49 4.49 0 0 1 2 18.5v-5.25C2 12.01 3 11 4.25 11ZM14 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm8 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM6 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm8 .5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-16 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm21 15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6.5-.7-2.65-2.65a.5.5 0 0 0-.7.7l2.64 2.65-2.64 2.65a.5.5 0 0 0 .7.7l2.65-2.64 2.65 2.64a.5.5 0 0 0 .7-.7l-2.64-2.65 2.64-2.65a.5.5 0 0 0-.7-.7l-2.65 2.64Z"])));
const PeopleTeamDelete32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamDelete32Filled', "32", ["M16 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm19 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9.38 13a3.98 3.98 0 0 0-.88 2.5V23c0 1.23.3 2.4.83 3.43A5 5 0 0 1 2 22v-6.5A2.5 2.5 0 0 1 4.5 13h4.88ZM14 23a9 9 0 0 1 7.58-8.89A2.5 2.5 0 0 0 19.5 13h-7a2.5 2.5 0 0 0-2.5 2.5V23a6 6 0 0 0 6.29 6A8.97 8.97 0 0 1 14 23Zm8.62-10a4 4 0 0 1 .59 1A8.98 8.98 0 0 1 30 17.34V15.5a2.5 2.5 0 0 0-2.5-2.5h-4.88Zm.38 2.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm2.72 3.72L23 21.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L21.94 23l-2.72 2.72a.75.75 0 1 0 1.06 1.06L23 24.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L24.06 23l2.72-2.72a.75.75 0 1 0-1.06-1.06Z"])));
const PeopleTeamDelete32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamDelete32Regular', "32", ["M16 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm11.5-3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM24 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-21 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM6.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM7 25c.61 0 1.18-.18 1.65-.5.14.68.37 1.33.68 1.93A5 5 0 0 1 2 22v-6.5A2.5 2.5 0 0 1 4.5 13h4.88a3.98 3.98 0 0 0-.85 2H4.5a.5.5 0 0 0-.5.5V22a3 3 0 0 0 3 3Zm16.21-11A8.98 8.98 0 0 1 30 17.34V15.5a2.5 2.5 0 0 0-2.5-2.5h-4.88a4 4 0 0 1 .59 1Zm-3.71-1c.87 0 1.63.44 2.08 1.11-.96.15-1.87.46-2.7.89H12.5a.5.5 0 0 0-.5.5V23a4 4 0 0 0 2.86 3.83c.37.8.85 1.52 1.43 2.16A6.02 6.02 0 0 1 10 23v-7.5a2.5 2.5 0 0 1 2.5-2.5h7Zm3.5 2.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm2.72 3.72L23 21.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L21.94 23l-2.72 2.72a.75.75 0 1 0 1.06 1.06L23 24.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L24.06 23l2.72-2.72a.75.75 0 1 0-1.06-1.06Z"])));
const PeopleTeamToolbox20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamToolbox20Filled', "20", ["M12.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5 .5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-13 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.6 0 1.1.43 1.22 1h-.47a2.5 2.5 0 0 0-2.46 2.04A2.5 2.5 0 0 0 9 13.5v4c0 .13.01.26.03.38A4 4 0 0 1 6 14V9.25Zm11.96 1.8H18v-1.8C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1h.51a2.5 2.5 0 0 1 2.46 2.04ZM5 9.24c0-.46.14-.9.38-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.4 2.97C5.14 15.37 5 14.7 5 14V9.25ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z"])));
const PeopleTeamToolbox20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamToolbox20Regular', "20", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-11 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM5 15h.1c.07.34.17.66.3.97A3 3 0 0 1 2 13V9.25C2 8.56 2.56 8 3.25 8h2.13c-.2.3-.33.63-.37 1H3.25a.25.25 0 0 0-.25.25V13c0 1.1.9 2 2 2Zm12-5.5c.5.37.84.91.96 1.54l.04.01v-1.8C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1h1.76c.14 0 .25.11.25.25v.25Zm-1.5.5h-2c-.83 0-1.5.67-1.5 1.5v.5h-.5c-.83 0-1.5.67-1.5 1.5V15h2v-.5a.5.5 0 0 1 1 0v.5h3v-.5a.5.5 0 0 1 1 0v.5h2v-1.5c0-.83-.67-1.5-1.5-1.5H17v-.5c0-.83-.67-1.5-1.5-1.5ZM7.25 9a.25.25 0 0 0-.25.25V14a3 3 0 0 0 2 2.83v.67c0 .13.01.26.03.38A4 4 0 0 1 6 14V9.25C6 8.56 6.56 8 7.25 8h5.5c.6 0 1.1.43 1.22 1H7.25ZM13 12v-.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v.5h-3Zm4 4v.5a.5.5 0 0 1-1 0V16h-3v.5a.5.5 0 0 1-1 0V16h-2v1.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V16h-2Z"])));
const PeopleTeamToolbox24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamToolbox24Filled', "24", ["M14.75 10c.8 0 1.47.53 1.68 1.25h-.68A2.75 2.75 0 0 0 13 14v.05a2.5 2.5 0 0 0-2 2.45v4.39a4.5 4.5 0 0 1-3.5-4.4v-4.74c0-.97.79-1.75 1.75-1.75h5.5Zm4.5 1.25A2.75 2.75 0 0 1 22 13.99v-2.24c0-.97-.78-1.75-1.75-1.75h-3.38c.3.35.5.78.59 1.25h1.79ZM7.13 10c-.35.42-.57.95-.62 1.53v4.97c0 .85.18 1.65.52 2.36A4 4 0 0 1 2 15v-3.24c0-.92.7-1.67 1.6-1.74l.15-.01h3.38ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM14 15h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1Zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1ZM12 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5Z"])));
const PeopleTeamToolbox24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleTeamToolbox24Regular', "24", ["M14.75 10c.8 0 1.47.53 1.68 1.25h-.68c-.4 0-.8.09-1.15.25H9.25a.25.25 0 0 0-.25.25v4.75a3 3 0 0 0 2 2.83v1.56a4.5 4.5 0 0 1-3.5-4.4v-4.74c0-.97.79-1.75 1.75-1.75h5.5Zm4.5 1.25A2.75 2.75 0 0 1 22 13.99v-2.24c0-.97-.78-1.75-1.75-1.75h-3.38c.3.35.5.78.59 1.25h1.79ZM3.75 10h3.38c-.34.41-.57.93-.62 1.5H3.75a.25.25 0 0 0-.25.25V15a2.5 2.5 0 0 0 3.08 2.43c.09.5.24.99.45 1.43A4 4 0 0 1 2 15v-3.24c0-.97.78-1.75 1.75-1.75ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6.5-.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM14 15h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1Zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1ZM12 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5Z"])));
const PeopleToolbox16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleToolbox16Filled', "16", ["M8 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.5 6c-.23 0-.46.03-.68.1a2 2 0 1 1 3.35 0 2.5 2.5 0 0 0-.67-.1h-2ZM8 8h.05v.04A2.5 2.5 0 0 0 6 10.5v1.98l-.5.02c-4 0-4-2.93-4-2.93V9.5C1.5 8.67 2.17 8 3 8h5Zm1 1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V9h.5c.83 0 1.5.67 1.5 1.5V12h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5H7v-1.5C7 9.67 7.67 9 8.5 9H9Zm1-.5V9h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 7 14.5V13h2v.5a.5.5 0 0 0 1 0V13h3v.5a.5.5 0 0 0 1 0V13Z"])));
const PeopleToolbox16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleToolbox16Regular', "16", ["M4 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm0 1h2c.23 0 .46.03.68.1a2 2 0 1 0-3.35 0c.2-.07.44-.1.67-.1ZM8 8h.05v.04A2.5 2.5 0 0 0 6.5 9H3a.5.5 0 0 0-.5.5v.15l.04.2c.04.18.13.42.3.65.33.45 1.04 1 2.66 1 .18 0 .34 0 .5-.02v1l-.5.02c-1.88 0-2.92-.65-3.47-1.4A2.85 2.85 0 0 1 1.5 9.6V9.5C1.5 8.67 2.17 8 3 8h5Zm1 1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V9h.5c.83 0 1.5.67 1.5 1.5V12h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5H7v-1.5C7 9.67 7.67 9 8.5 9H9Zm1-.5V9h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 7 14.5V13h2v.5a.5.5 0 0 0 1 0V13h3v.5a.5.5 0 0 0 1 0V13Z"])));
const PeopleToolbox20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleToolbox20Filled', "20", ["M10 5.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-3.26 1.43c-.1.2-.16.4-.2.61A2.5 2.5 0 0 0 9 13.5v2.2c-.62.18-1.36.3-2.25.3-5.25 0-5.25-4-5.25-4 0-1.1.9-2 2-2H10a2 2 0 0 1 1.24.43ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"])));
const PeopleToolbox20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PeopleToolbox20Regular', "20", ["M6.75 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.5 5.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM14.5 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm-3.26 1.43A2 2 0 0 0 10 10H3.5a2 2 0 0 0-2 2V12.08a1.72 1.72 0 0 0 .01.18 3.95 3.95 0 0 0 .67 1.8C2.88 15.09 4.24 16 6.75 16c.89 0 1.63-.11 2.25-.3v-1.07c-.56.22-1.3.37-2.25.37-2.24 0-3.26-.8-3.74-1.5a2.95 2.95 0 0 1-.5-1.42l-.01-.02V12a1 1 0 0 1 1-1H10a1 1 0 0 1 .57.18c.15-.06.3-.1.47-.14.04-.21.1-.42.2-.6ZM14.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"])));
const Person12Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person12Filled', "12", ["M6 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm2.5 5h-5C2.67 6 2 6.67 2 7.5c0 1.12.46 2.01 1.21 2.61.74.6 1.74.89 2.79.89s2.05-.29 2.79-.89C9.54 9.51 10 8.61 10 7.5 10 6.67 9.33 6 8.5 6Z"])));
const Person12Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person12Regular', "12", ["M6 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm3.5 3h-5C2.67 6 2 6.67 2 7.5c0 1.12.46 2.01 1.21 2.61.74.6 1.74.89 2.79.89s2.05-.29 2.79-.89C9.54 9.51 10 8.61 10 7.5 10 6.67 9.33 6 8.5 6Zm-5 1h5c.28 0 .5.22.5.5 0 .82-.32 1.42-.84 1.83-.52.43-1.28.67-2.16.67-.88 0-1.64-.24-2.16-.67A2.25 2.25 0 0 1 3 7.5c0-.28.22-.5.5-.5Z"])));
const Person16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person16Filled', "16", ["M11.5 8c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5C3 8.67 3.67 8 4.5 8h7ZM8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5Z"])));
const Person16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person16Regular', "16", ["M11.5 8c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5C3 8.67 3.67 8 4.5 8h7Zm0 1h-7a.5.5 0 0 0-.5.5v.5c0 1.44 1.43 3 4 3 2.57 0 4-1.56 4-3v-.5a.5.5 0 0 0-.5-.5ZM8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5Zm0 1A1.75 1.75 0 1 0 8 6a1.75 1.75 0 0 0 0-3.5Z"])));
const Person20Filled = /*#__PURE__*/createFluentIcon_createFluentIcon('Person20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0 0 17 13a2 2 0 0 0-2-2H5Z"]);
const Person20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person20Regular', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0 0 17 13a2 2 0 0 0-2-2H5Zm-1 2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0 1 10 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 4 13Z"])));
const Person24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person24Filled', "24", ["M17.75 14C19 14 20 15 20 16.25v.92c0 .57-.18 1.13-.5 1.6C17.93 20.93 15.41 22 12 22s-5.94-1.07-7.49-3.24a2.75 2.75 0 0 1-.5-1.6v-.91C4 15 5 14 6.24 14h11.5ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"])));
const Person24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person24Regular', "24", ["M17.75 14C19 14 20 15 20 16.25v.57c0 .9-.32 1.76-.9 2.44C17.53 21.1 15.15 22 12 22c-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 0 1-.9-2.43v-.58C4 15 5.01 14 6.25 14h11.5Zm0 1.5H6.25a.75.75 0 0 0-.75.75v.58c0 .53.2 1.05.54 1.46C7.3 19.76 9.26 20.5 12 20.5c2.74 0 4.7-.74 5.96-2.21.35-.41.54-.93.54-1.47v-.57a.75.75 0 0 0-.75-.75ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"])));
const Person28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person28Filled', "28", ["M21 16a3 3 0 0 1 3 3v.71C24 23.3 19.79 26 14 26S4 23.43 4 19.71V19a3 3 0 0 1 3-3h14ZM14 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"])));
const Person28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person28Regular', "28", ["M21 16a3 3 0 0 1 3 3v.71C24 23.3 19.79 26 14 26S4 23.43 4 19.71V19a3 3 0 0 1 3-3h14Zm0 1.5H7c-.78 0-1.42.6-1.5 1.36v.85c0 2.68 3.39 4.79 8.5 4.79 4.93 0 8.35-2.1 8.5-4.62V19c0-.78-.6-1.42-1.36-1.5H21ZM14 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"])));
const Person32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person32Filled', "32", ["M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.4 1.52 4.42 3.68 5.8A15.67 15.67 0 0 0 16 30c3.2 0 6.14-.82 8.32-2.2C26.48 26.41 28 24.4 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5h-17Z"])));
const Person32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person32Regular', "32", ["M23 9A7 7 0 1 1 9 9a7 7 0 0 1 14 0Zm-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0ZM7.5 18A3.5 3.5 0 0 0 4 21.5v.5c0 2.4 1.52 4.42 3.68 5.8A15.67 15.67 0 0 0 16 30c3.2 0 6.14-.82 8.32-2.2C26.48 26.41 28 24.4 28 22v-.5a3.5 3.5 0 0 0-3.5-3.5h-17ZM6 21.5c0-.83.67-1.5 1.5-1.5h17c.83 0 1.5.67 1.5 1.5v.5c0 1.47-.94 2.95-2.76 4.1A13.69 13.69 0 0 1 16 28c-2.88 0-5.43-.74-7.24-1.9C6.94 24.96 6 23.48 6 22v-.5Z"])));
const Person48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person48Filled', "48", ["M24 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM12.25 28A4.25 4.25 0 0 0 8 32.25V33c0 3.76 1.94 6.57 4.92 8.38C15.85 43.16 19.79 44 24 44s8.15-.84 11.08-2.62C38.06 39.57 40 36.76 40 33v-.75C40 29.9 38.1 28 35.75 28h-23.5Z"])));
const Person48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person48Regular', "48", ["M24 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Zm-4.25 14A4.25 4.25 0 0 0 8 32.25V33c0 3.76 1.94 6.57 4.92 8.38C15.85 43.16 19.79 44 24 44s8.15-.84 11.08-2.62C38.06 39.57 40 36.76 40 33v-.75C40 29.9 38.1 28 35.75 28h-23.5Zm-1.75 4.25c0-.97.78-1.75 1.75-1.75h23.5c.97 0 1.75.78 1.75 1.75V33c0 2.74-1.36 4.8-3.72 6.24-2.41 1.47-5.85 2.26-9.78 2.26-3.93 0-7.37-.79-9.78-2.26-2.36-1.43-3.72-3.5-3.72-6.24v-.75Z"])));
const Person520Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person520Filled', "20", ["M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h7.59l-.07.25-.5 3A1.5 1.5 0 0 0 13.48 16a1.5 1.5 0 0 0-1.44 1.83c-.65.11-1.34.17-2.04.17a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm11-2a.5.5 0 0 0-.5.42l-.5 3a.5.5 0 0 0 .57.58l.08-.02.21-.02a130.74 130.74 0 0 1 1.74-.2l.02-.01a1.63 1.63 0 0 1 0 3.25c-.3 0-.66-.08-1-.23a1.6 1.6 0 0 1-.7-.54.5.5 0 0 0-.84.54c.26.41.7.71 1.13.91.45.2.96.32 1.41.32a2.63 2.63 0 1 0-.48-5.2 59.76 59.76 0 0 0-1.04.12l.32-1.92h3.08a.5.5 0 0 0 0-1H14Z"])));
const Person520Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person520Regular', "20", ["M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 13a2 2 0 0 1 2-2h7.59l-.07.25-.12.75H5a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 10 17c.78 0 1.51-.07 2.18-.21a1.5 1.5 0 0 0-.14 1.04c-.65.11-1.34.17-2.04.17a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm11-2a.5.5 0 0 0-.5.42l-.5 3a.5.5 0 0 0 .57.58l.08-.02.21-.02a130.74 130.74 0 0 1 1.74-.2l.02-.01a1.63 1.63 0 0 1 0 3.25c-.3 0-.66-.08-1-.23a1.6 1.6 0 0 1-.7-.54.5.5 0 0 0-.84.54c.26.41.7.71 1.13.91.45.2.96.32 1.41.32a2.63 2.63 0 1 0-.48-5.2 59.76 59.76 0 0 0-1.04.12l.32-1.92h3.08a.5.5 0 0 0 0-1H14Z"])));
const Person532Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person532Filled', "32", ["M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.4 1.52 4.42 3.68 5.8A15.67 15.67 0 0 0 16 30c1.14 0 2.25-.1 3.3-.3a2.5 2.5 0 0 1 1.7-3.65v-.42a2.5 2.5 0 0 1-1.74-2.62l.48-5.01H7.5Zm13.75-.1a1 1 0 0 1 1-.9h6.25a1 1 0 1 1 0 2h-5.34l-.3 3.09 1.92-.26a4.6 4.6 0 1 1 .61 9.17h-.61c-1.31 0-2.57-.5-3.53-1.38l-.43-.38a1 1 0 0 1 1.36-1.48l.42.4c.6.54 1.37.84 2.18.84h.61a2.6 2.6 0 1 0-.35-5.19l-3.16.43a1 1 0 0 1-1.13-1.08l.5-5.25Z"])));
const Person532Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person532Regular', "32", ["M23 9A7 7 0 1 1 9 9a7 7 0 0 1 14 0Zm-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0ZM6 21.5c0-.83.67-1.5 1.5-1.5h12.05l.19-2H7.5A3.5 3.5 0 0 0 4 21.5v.5c0 2.4 1.52 4.42 3.68 5.8A15.67 15.67 0 0 0 16 30c1.14 0 2.25-.1 3.3-.3a2.5 2.5 0 0 1-.17-2c-.98.2-2.03.3-3.13.3-2.88 0-5.43-.74-7.24-1.9C6.94 24.96 6 23.48 6 22v-.5ZM22.25 17a1 1 0 0 0-1 .9l-.5 5.26a1 1 0 0 0 1.13 1.08l3.16-.43A2.6 2.6 0 1 1 25.4 29h-.61c-.8 0-1.59-.3-2.18-.85l-.42-.39a1 1 0 0 0-1.36 1.48l.43.38A5.22 5.22 0 0 0 24.78 31h.61a4.6 4.6 0 1 0-.61-9.17l-1.92.26.3-3.09h5.34a1 1 0 1 0 0-2h-6.25Z"])));
const Person620Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person620Filled', "20", ["M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h9.05A3.49 3.49 0 0 0 13 13.5v3c0 .37.06.73.16 1.06-.96.3-2.03.44-3.16.44a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm12 .5a1.5 1.5 0 0 1 2.63-1 .5.5 0 0 0 .74-.65A2.5 2.5 0 0 0 14 13.5v3a2.5 2.5 0 1 0 1-2v-1Zm1.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"])));
const Person620Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person620Regular', "20", ["M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 13a2 2 0 0 1 2-2h9.05c-.3.29-.54.63-.71 1H5A1 1 0 0 0 4 13c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 10 17c1.1 0 2.13-.15 3-.43 0 .34.06.68.16 1-.96.29-2.03.43-3.16.43a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm12 .5a1.5 1.5 0 0 1 2.63-1 .5.5 0 0 0 .74-.65A2.5 2.5 0 0 0 14 13.5v3a2.5 2.5 0 1 0 1-2v-1Zm1.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"])));
const Person632Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person632Filled', "32", ["M23 9A7 7 0 1 1 9 9a7 7 0 0 1 14 0ZM4 21.5A3.5 3.5 0 0 1 7.5 18h11.83a6.71 6.71 0 0 0-.83 3.24V26c0 1.35.41 2.6 1.11 3.64-1.14.23-2.36.36-3.61.36-3.2 0-6.14-.82-8.32-2.2C5.52 26.41 4 24.4 4 22v-.5ZM25.24 18A3.24 3.24 0 0 0 22 21.24V22a5 5 0 1 1-2 4v-4.76a5.24 5.24 0 0 1 8.95-3.7l.26.25a1 1 0 0 1-1.42 1.42l-.25-.26c-.61-.6-1.44-.95-2.3-.95ZM25 29a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"])));
const Person632Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('Person632Regular', "32", ["M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm-8.5 6c-.83 0-1.5.67-1.5 1.5v.5c0 1.47.94 2.95 2.76 4.1 1.8 1.16 4.36 1.9 7.24 1.9.95 0 1.87-.08 2.74-.23.2.67.49 1.3.87 1.87-1.14.23-2.36.36-3.61.36-3.2 0-6.14-.82-8.32-2.2C5.52 26.41 4 24.4 4 22v-.5A3.5 3.5 0 0 1 7.5 18h11.83a6.7 6.7 0 0 0-.72 2H7.5Zm17.74-2A3.24 3.24 0 0 0 22 21.24V22a5 5 0 1 1-2 4v-4.76a5.24 5.24 0 0 1 8.95-3.7l.26.25a1 1 0 0 1-1.42 1.42l-.25-.26c-.61-.6-1.44-.95-2.3-.95ZM25 29a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"])));
const PersonAccounts20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAccounts20Filled', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18h.05a2.51 2.51 0 0 1-.05-.5v-4a2.5 2.5 0 0 1 2.04-2.46l.01-.04H4.01Zm8 .5v.5h-.5c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5H17v-.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5Zm1.5-.5h2c.28 0 .5.22.5.5v.5h-3v-.5c0-.28.22-.5.5-.5Z"])));
const PersonAccounts20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAccounts20Regular', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18h.05a2.51 2.51 0 0 1-.05-.5V17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.5c.37-.5.91-.84 1.54-.96l.01-.04H4.01Zm8 .5v.5h-.5c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5H17v-.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5Zm1.5-.5h2c.28 0 .5.22.5.5v.5h-3v-.5c0-.28.22-.5.5-.5Z"])));
const PersonAccounts24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAccounts24Filled', "24", ["M13 14.05V14H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c.36 0 .7-.01 1.04-.03-.03-.15-.04-.31-.04-.47v-5c0-1.2.86-2.22 2-2.45ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm4 13h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H21v-1.25c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75V15Zm1.5-1.25c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25V15h-4v-1.25Z"])));
const PersonAccounts24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAccounts24Regular', "24", ["M13 14.05V14H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.36 0 .7-.01 1.04-.03a2.5 2.5 0 0 1-.04-.47v-1.03c-.32.02-.65.03-1 .03-2.74 0-4.7-.74-5.96-2.21-.34-.4-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h6.96A2.5 2.5 0 0 1 13 14.05ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM14 15h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H21v-1.25c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75V15Zm1.5-1.25c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25V15h-4v-1.25Z"])));
const PersonAdd16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAdd16Filled', "16", ["M9.63 5.07a5.5 5.5 0 0 0-3.3 1.85 2.75 2.75 0 1 1 3.3-1.85ZM5.6 8a5.48 5.48 0 0 0 .62 5.96C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1Zm4.9 7a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V10h1.5a.5.5 0 0 1 0 1H11v1.5a.5.5 0 0 1-1 0V11H8.5a.5.5 0 0 1 0-1H10V8.5c0-.28.22-.5.5-.5Z"])));
const PersonAdd16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAdd16Regular', "16", ["M6.22 13.96C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1c-.16.32-.3.65-.4 1H3.5a.5.5 0 0 0-.5.5v.5c0 1.13.88 2.33 2.5 2.8.2.42.44.8.72 1.16Zm3.4-8.9a2.75 2.75 0 1 0-3.3 1.86c.32-.37.68-.7 1.08-.97a1.76 1.76 0 0 1-2.15-1.7 1.75 1.75 0 1 1 3 1.23c.43-.2.89-.33 1.38-.41ZM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V10h1.5a.5.5 0 0 1 0 1H11v1.5a.5.5 0 0 1-1 0V11H8.5a.5.5 0 0 1 0-1H10V8.5c0-.28.22-.5.5-.5Z"])));
const PersonAdd20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAdd20Filled', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06a5.48 5.48 0 0 1 .05-6.94H4Zm10.5 8a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z"])));
const PersonAdd20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAdd20Regular', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 0 1 9.6 17 12 12 0 0 1 9 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.6c.18-.36.4-.7.66-1H4Zm10.5 8a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z"])));
const PersonAdd24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAdd24Filled', "24", ["M11 17.5c0-1.29.38-2.49 1.02-3.5H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c.93 0 1.8-.08 2.6-.24A6.48 6.48 0 0 1 11 17.5ZM15 7A5 5 0 1 0 5 7a5 5 0 0 0 10 0Zm8 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM17.41 14h.18c.2.05.37.2.4.41l.01.09V17h2.6c.2.05.36.2.4.41v.18a.5.5 0 0 1-.4.4l-.1.01H18v2.59a.5.5 0 0 1-.41.4l-.09.01h-.09a.5.5 0 0 1-.4-.41L17 20.5V18H14.4a.5.5 0 0 1-.4-.41v-.18a.5.5 0 0 1 .4-.4l.1-.01H17v-2.59a.5.5 0 0 1 .41-.4Z"])));
const PersonAdd24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAdd24Regular', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.48 2c-.3.46-.53.97-.7 1.5H4.24a.75.75 0 0 0-.75.75v.58c0 .53.2 1.05.54 1.46C5.3 19.76 7.26 20.5 10 20.5c.6 0 1.16-.03 1.68-.1.25.49.55.95.91 1.36-.8.16-1.66.24-2.59.24-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 0 1-.9-2.43v-.58C2 15 3.01 14 4.25 14h7.77Zm5.48 0h-.09a.5.5 0 0 0-.4.41l-.01.09V17H14.4a.5.5 0 0 0-.4.41v.18c.04.2.2.37.4.4l.1.01H17v2.59c.05.2.2.37.41.4l.09.01h.09a.5.5 0 0 0 .4-.41l.01-.09V18h2.6a.5.5 0 0 0 .4-.41v-.18a.5.5 0 0 0-.4-.4l-.1-.01H18v-2.59a.5.5 0 0 0-.41-.4L17.5 14ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"])));
const PersonAdd28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAdd28Filled', "28", ["M15.11 25.72A7.48 7.48 0 0 1 14.5 16H5a3 3 0 0 0-3 3v.71C2 23.43 6.21 26 12 26c1.1 0 2.14-.1 3.11-.28ZM18 8A6 6 0 1 0 6 8a6 6 0 0 0 12 0Zm2.5 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0-11c.28 0 .5.22.5.5V20h3.5a.5.5 0 0 1 0 1H21v3.5a.5.5 0 0 1-1 0V21h-3.5a.5.5 0 0 1 0-1H20v-3.5c0-.28.22-.5.5-.5Z"])));
const PersonAdd28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAdd28Regular', "28", ["M15.11 25.72c-.4-.4-.74-.86-1.04-1.35-.65.08-1.34.13-2.07.13-5.11 0-8.5-2.11-8.5-4.79v-.85A1.5 1.5 0 0 1 5 17.5h8.62c.24-.54.53-1.04.88-1.5H5a3 3 0 0 0-3 3v.71C2 23.43 6.21 26 12 26c1.1 0 2.14-.1 3.11-.28ZM18 8A6 6 0 1 0 6 8a6 6 0 0 0 12 0ZM7.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm13 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0-11c.28 0 .5.22.5.5V20h3.5a.5.5 0 0 1 0 1H21v3.5a.5.5 0 0 1-1 0V21h-3.5a.5.5 0 0 1 0-1H20v-3.5c0-.28.22-.5.5-.5Z"])));
const PersonAlert16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAlert16Filled', "16", ["M11.5 8c.83 0 1.5.67 1.5 1.5v.5c0 1.51-1.1 3.05-3.02 3.7.07-.48-.08-.98-.51-1.34l-.97-.82V10c0-.73-.2-1.41-.54-2h3.54ZM6.36 6.46a4 4 0 0 1 .43.26 2.75 2.75 0 1 0-.42-.26ZM1.5 10a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.33.88H.5a.5.5 0 0 1-.32-.88L1.5 12v-2Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Z"])));
const PersonAlert16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAlert16Regular', "16", ["M11.5 8c.83 0 1.5.67 1.5 1.5v.5c0 1.51-1.1 3.05-3.02 3.7.05-.34-.01-.69-.2-.99C11.22 12.19 12 11.06 12 10v-.5a.5.5 0 0 0-.5-.5H8.37c-.09-.35-.23-.69-.4-1h3.53ZM6.36 6.46a4 4 0 0 1 .43.26 2.75 2.75 0 1 0-.42-.26ZM8 2.5A1.75 1.75 0 1 1 8 6a1.75 1.75 0 0 1 0-3.5ZM1.5 10a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.33.88H.5a.5.5 0 0 1-.32-.88L1.5 12v-2Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Z"])));
const PersonAlert20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAlert20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 16h-.37a1.5 1.5 0 0 0 .84-2.64l-.97-.82V13c0-.73-.2-1.41-.54-2H15a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 0 1 10 18Zm-7.5-5a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.33.88H1.5a.5.5 0 0 1-.32-.88L2.5 15v-2Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Z"])));
const PersonAlert20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAlert20Regular', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3 12h-.37c.65-.06 1.12-.5 1.3-1.04a7.48 7.48 0 0 0 3.4-1A3.36 3.36 0 0 0 16 13a1 1 0 0 0-1-1H9.37c-.09-.35-.23-.7-.4-1H15a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 0 1 10 18Zm-7.5-5a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.33.88H1.5a.5.5 0 0 1-.32-.88L2.5 15v-2Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Z"])));
const PersonAlert24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAlert24Filled', "24", ["M17.75 14C19 14 20 15 20 16.25v.92c0 .57-.18 1.13-.5 1.6C17.93 20.93 15.41 22 12 22h-.48c.12-.01.37-.03.62-.14a1.5 1.5 0 0 0 .72-1.99c-.1-.24-.3-.41-.38-.5l-.37-.32-.61-.51V16c0-.71-.15-1.39-.42-2h6.67ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10ZM6.5 12a4 4 0 0 0-4 4v3l-.95.8c-.3.26-.46.39-.5.5a.5.5 0 0 0 .24.65c.1.05.3.05.7.05h9.02c.4 0 .6 0 .7-.05a.5.5 0 0 0 .25-.66c-.05-.1-.2-.23-.5-.49l-.96-.8v-3a4 4 0 0 0-4-4ZM8 22c-.22.58-.8 1-1.5 1-.69 0-1.28-.42-1.5-1h3Z"])));
const PersonAlert24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAlert24Regular', "24", ["M17.76 14C19 14 20 15 20 16.25v.57c0 .9-.31 1.76-.9 2.44C17.53 21.1 15.15 22 12 22h-.48c.12-.01.37-.03.62-.14.55-.26.87-.82.86-1.4 2.23-.16 3.87-.89 4.96-2.17.35-.41.54-.93.54-1.47v-.57a.75.75 0 0 0-.74-.75h-6.29a4.97 4.97 0 0 0-.39-1.5h6.68ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM6.5 12a4 4 0 0 0-4 4v3l-.95.8c-.3.26-.46.39-.5.5a.5.5 0 0 0 .24.65c.1.05.3.05.7.05h9.02c.4 0 .6 0 .7-.05a.5.5 0 0 0 .25-.66c-.05-.1-.2-.23-.5-.49l-.96-.8v-3a4 4 0 0 0-4-4ZM8 22c-.22.58-.8 1-1.5 1-.69 0-1.28-.42-1.5-1h3Z"])));
const PersonArrowBack16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack16Filled', "16", ["M2 10c0 1.8 1.55 3.65 4.22 3.96A5.48 5.48 0 0 1 5.6 8H3.5C2.67 8 2 8.67 2 9.5v.5Zm4.33-3.08a5.5 5.5 0 0 1 3.3-1.85 2.75 2.75 0 1 0-3.3 1.85ZM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 13 12.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75H8.71l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7L8.9 7.9a.5.5 0 1 1 .7.7Z"])));
const PersonArrowBack16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack16Regular', "16", ["M2 10c0 1.8 1.55 3.65 4.22 3.96a5.5 5.5 0 0 1-.72-1.16C3.88 12.33 3 11.13 3 10v-.5c0-.28.22-.5.5-.5h1.7c.1-.35.24-.68.4-1H3.5C2.67 8 2 8.67 2 9.5v.5Zm7.75-5.75c0 .29-.04.56-.12.82-.49.08-.95.22-1.39.41A1.74 1.74 0 0 0 7 2.5a1.75 1.75 0 1 0 .4 3.45c-.4.28-.76.6-1.07.97a2.75 2.75 0 1 1 3.42-2.67ZM10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 13 12.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75H8.71l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7L8.9 7.9a.5.5 0 1 1 .7.7Z"])));
const PersonArrowBack20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack20Filled', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06a5.48 5.48 0 0 1 .05-6.94H4Zm10.5 8a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z"])));
const PersonArrowBack20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack20Regular', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 0 1 9.6 17 12 12 0 0 1 9 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.6c.18-.36.4-.7.66-1H4Zm10.5 8a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.9-6.4-.9.9h1.55A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 0 1-.71.7l-1.76-1.75a.5.5 0 0 1 0-.7l1.76-1.75a.5.5 0 0 1 .7.7Z"])));
const PersonArrowBack24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack24Filled', "24", ["M11 17.5c0-1.29.38-2.49 1.02-3.5H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c.93 0 1.8-.08 2.6-.24A6.47 6.47 0 0 1 11 17.5ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm13 15.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-6.65-2.15a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65h2.04c1.24 0 2.25 1 2.25 2.25v.25a.5.5 0 0 0 1 0v-.25c0-1.8-1.46-3.25-3.25-3.25h-2.04l.64-.65Z"])));
const PersonArrowBack24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack24Regular', "24", ["M11.31 15.5c.18-.53.42-1.04.71-1.5H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.93 0 1.8-.08 2.6-.24a6.5 6.5 0 0 1-.92-1.37c-.52.08-1.08.11-1.68.11-2.74 0-4.7-.75-5.96-2.21-.34-.41-.54-.93-.54-1.46v-.58c0-.42.34-.75.75-.75h7.06ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm13 14a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-6.65-2.15a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65h2.04c1.24 0 2.25 1 2.25 2.25v.25a.5.5 0 0 0 1 0v-.25c0-1.8-1.46-3.25-3.25-3.25h-2.04l.64-.65Z"])));
const PersonArrowBack28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack28Filled', "28", ["M13 20.5c0 2.03.8 3.87 2.11 5.22-.97.18-2 .28-3.11.28-5.79 0-10-2.57-10-6.29V19a3 3 0 0 1 3-3h9.5a7.47 7.47 0 0 0-1.5 4.5ZM12 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm15 18.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-8.15-2.65a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L17.71 20h2.54A2.75 2.75 0 0 1 23 22.75V23a.5.5 0 0 0 1 0v-.25A3.75 3.75 0 0 0 20.25 19h-2.54l1.14-1.15Z"])));
const PersonArrowBack28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack28Regular', "28", ["M14.07 24.37c.3.49.65.94 1.04 1.35-.97.18-2 .28-3.11.28-5.79 0-10-2.57-10-6.29V19a3 3 0 0 1 3-3h9.5c-.35.46-.64.96-.88 1.5H5c-.78 0-1.42.6-1.5 1.36v.85c0 2.68 3.39 4.79 8.5 4.79.73 0 1.42-.05 2.07-.13ZM12 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm15 17a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM17.7 19l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L17.71 20h2.54A2.75 2.75 0 0 1 23 22.75V23a.5.5 0 0 0 1 0v-.25A3.75 3.75 0 0 0 20.25 19h-2.54Z"])));
const PersonArrowBack32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack32Filled', "32", ["M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-8.5 2A3.5 3.5 0 0 0 3 21.5v.5c0 2.4 1.52 4.42 3.68 5.8A15.67 15.67 0 0 0 15 30c.74 0 1.47-.04 2.19-.13A8.98 8.98 0 0 1 15.52 18H6.5ZM23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm-1.22-10.22-1.22 1.22h2.69c2.35 0 4.25 1.9 4.25 4.25v.5a.75.75 0 0 1-1.5 0v-.5A2.75 2.75 0 0 0 23.25 23h-2.69l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 1 1 1.06 1.06Z"])));
const PersonArrowBack32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack32Regular', "32", ["M22 9A7 7 0 1 1 8 9a7 7 0 0 1 14 0Zm-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0ZM6.5 18A3.5 3.5 0 0 0 3 21.5v.5c0 2.4 1.52 4.42 3.68 5.8A15.67 15.67 0 0 0 15 30c.74 0 1.47-.04 2.19-.13a9.05 9.05 0 0 1-1.68-1.88L15 28c-2.88 0-5.43-.74-7.24-1.9C5.94 24.96 5 23.48 5 22v-.5c0-.83.67-1.5 1.5-1.5h8.01c.25-.71.6-1.38 1-2H6.5ZM23 30.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm-1.22-10.22-1.22 1.22h2.69c2.35 0 4.25 1.9 4.25 4.25v.5a.75.75 0 0 1-1.5 0v-.5A2.75 2.75 0 0 0 23.25 23h-2.69l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 1 1 1.06 1.06Z"])));
const PersonArrowBack48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack48Filled', "48", ["M22 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM10.25 28A4.25 4.25 0 0 0 6 32.25V33c0 3.76 1.94 6.57 4.92 8.38C13.85 43.16 17.79 44 22 44c1.17 0 2.32-.06 3.43-.2A12.95 12.95 0 0 1 24.04 28H10.25ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-14.3-3.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.4-1.4L30.42 35H36a4 4 0 0 1 4 4 1 1 0 1 0 2 0 6 6 0 0 0-6-6h-5.59l1.3-1.3Z"])));
const PersonArrowBack48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowBack48Regular', "48", ["M22 4a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-7.5 10a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Zm-4.25 14A4.25 4.25 0 0 0 6 32.25V33c0 3.76 1.94 6.57 4.92 8.38C13.85 43.16 17.79 44 22 44c1.17 0 2.32-.06 3.43-.2-.65-.71-1.23-1.5-1.72-2.35-.56.03-1.13.05-1.71.05-3.93 0-7.37-.79-9.78-2.26C9.86 37.81 8.5 35.74 8.5 33v-.75c0-.97.78-1.75 1.75-1.75H22.8c.33-.88.74-1.72 1.24-2.5H10.25ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-14.3-3.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.4-1.4L30.42 35H36a4 4 0 0 1 4 4 1 1 0 1 0 2 0 6 6 0 0 0-6-6h-5.59l1.3-1.3Z"])));
const PersonArrowLeft16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowLeft16Filled', "16", ["M9.63 5.07a5.5 5.5 0 0 0-3.3 1.85 2.75 2.75 0 1 1 3.3-1.85ZM5.6 8a5.48 5.48 0 0 0 .62 5.96C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1Zm9.4 2.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L9.71 11h2.79a.5.5 0 0 0 0-1H9.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z"])));
const PersonArrowLeft16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowLeft16Regular', "16", ["M6.22 13.96C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1c-.16.32-.3.65-.4 1H3.5a.5.5 0 0 0-.5.5v.5c0 1.13.88 2.33 2.5 2.8.2.42.44.8.72 1.16Zm3.4-8.9a2.75 2.75 0 1 0-3.3 1.86c.32-.37.68-.7 1.08-.97a1.76 1.76 0 0 1-2.15-1.7 1.75 1.75 0 1 1 3 1.23c.43-.2.89-.33 1.38-.41ZM15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L9.71 11h2.79a.5.5 0 0 0 0-1H9.7l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z"])));
const PersonArrowLeft20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowLeft20Filled', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06a5.48 5.48 0 0 1 .05-6.94H4Zm15 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z"])));
const PersonArrowLeft20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowLeft20Regular', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 0 1 9.6 17 12 12 0 0 1 9 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.6c.18-.36.4-.7.66-1H4Zm15 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z"])));
const PersonArrowLeft24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowLeft24Filled', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.48 2a6.47 6.47 0 0 0 .6 7.8c-.8.13-1.68.2-2.62.2-2.89 0-5.13-.66-6.7-2A3.75 3.75 0 0 1 2 17.16v-.91C2 15.01 3.01 14 4.25 14h7.77Zm4.7.59-.07.06-2.52 2.51-.04.05-.03.06-.03.08-.01.04-.02.09v.09l.03.08.03.08.02.04.05.07 2.52 2.51a.5.5 0 0 0 .77-.63l-.06-.07L15.7 18h4.79a.5.5 0 0 0 .5-.41v-.09a.5.5 0 0 0-.41-.5h-4.88l1.65-1.65a.5.5 0 0 0 .06-.63l-.06-.07a.5.5 0 0 0-.64-.06ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"])));
const PersonArrowLeft24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowLeft24Regular', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.48 2c-.3.46-.53.97-.7 1.5H4.24a.75.75 0 0 0-.75.75v.9c0 .66.29 1.29.79 1.71C5.55 19.95 7.44 20.5 10 20.5c.6 0 1.16-.03 1.69-.09.25.5.56.96.93 1.38-.8.14-1.68.21-2.62.21-2.89 0-5.13-.66-6.7-2A3.75 3.75 0 0 1 2 17.16v-.91C2 15.01 3.01 14 4.25 14h7.77Zm4.7.59-.07.06-2.52 2.51-.04.05-.03.06-.03.08-.01.04-.02.09v.09l.03.08.03.08.02.04.05.07 2.52 2.51a.5.5 0 0 0 .77-.63l-.06-.07L15.7 18h4.79a.5.5 0 0 0 .5-.41v-.09a.5.5 0 0 0-.41-.5h-4.88l1.65-1.65a.5.5 0 0 0 .06-.63l-.06-.07a.5.5 0 0 0-.64-.06ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"])));
const PersonArrowRight16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowRight16Filled', "16", ["M6.33 6.92a5.5 5.5 0 0 1 3.3-1.85 2.75 2.75 0 1 0-3.3 1.85ZM5 10.5c0-.9.22-1.75.6-2.5H3.5C2.67 8 2 8.67 2 9.5v.5c0 1.8 1.55 3.65 4.22 3.96A5.48 5.48 0 0 1 5 10.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L11.29 10H8.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"])));
const PersonArrowRight16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowRight16Regular', "16", ["M2 10c0 1.8 1.55 3.65 4.22 3.96a5.5 5.5 0 0 1-.72-1.16C3.88 12.33 3 11.13 3 10v-.5c0-.28.22-.5.5-.5h1.7c.1-.35.24-.68.4-1H3.5C2.67 8 2 8.67 2 9.5v.5Zm7.75-5.75c0 .29-.04.56-.12.82-.49.08-.95.22-1.39.41A1.74 1.74 0 0 0 7 2.5a1.75 1.75 0 1 0 .4 3.45c-.4.28-.76.6-1.07.97a2.75 2.75 0 1 1 3.42-2.67ZM15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L11.29 10H8.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"])));
const PersonArrowRight20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowRight20Filled', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06a5.48 5.48 0 0 1 .05-6.94H4Zm15 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"])));
const PersonArrowRight20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowRight20Regular', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 0 1 9.6 17 12 12 0 0 1 9 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.6c.18-.36.4-.7.66-1H4Zm15 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"])));
const PersonArrowRight24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowRight24Filled', "24", ["M11 17.5c0-1.29.38-2.49 1.02-3.5H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c.93 0 1.8-.08 2.6-.24A6.47 6.47 0 0 1 11 17.5ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm13 15.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-4.65-2.85a.5.5 0 0 0-.7.7L19.29 17H15a.5.5 0 1 0 0 1h4.3l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 .15-.34v-.01a.5.5 0 0 0-.15-.36l-2.5-2.5Z"])));
const PersonArrowRight24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonArrowRight24Regular', "24", ["M11.31 15.5c.18-.53.42-1.04.71-1.5H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.93 0 1.8-.08 2.6-.24a6.51 6.51 0 0 1-.92-1.36c-.52.07-1.08.1-1.68.1-2.74 0-4.7-.74-5.96-2.21-.34-.4-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h7.06ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm13 14a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-4.65-2.85a.5.5 0 0 0-.7.7L19.29 17H15a.5.5 0 1 0 0 1h4.3l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5a.5.5 0 0 0 .15-.34v-.01a.5.5 0 0 0-.15-.36l-2.5-2.5Z"])));
const PersonAvailable16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAvailable16Filled', "16", ["M8.89 5.24a5.5 5.5 0 0 0-2.62 1.75 2.5 2.5 0 1 1 2.62-1.75ZM3.5 8h2.1a5.48 5.48 0 0 0 .62 5.95C3.55 13.64 2 11.73 2 10v-.25C2 8.95 2.67 8 3.5 8ZM15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L9.5 11.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"])));
const PersonAvailable16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAvailable16Regular', "16", ["M4 4.5a2.5 2.5 0 1 1 4.89.74 5.5 5.5 0 0 0-2.62 1.75A2.5 2.5 0 0 1 4 4.5ZM6.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2.35-6.35c.2.2.2.5 0 .7l-3 3a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0ZM5.6 8H3.5C2.67 8 2 8.95 2 9.75V10c0 1.73 1.55 3.64 4.22 3.95a5.5 5.5 0 0 1-.72-1.16C3.82 12.3 3 10.98 3 10v-.25c0-.14.07-.36.22-.55.15-.18.26-.2.28-.2h1.7c.1-.35.24-.68.4-1Z"])));
const PersonAvailable20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAvailable20Filled', "20", ["M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h6.26a5.48 5.48 0 0 0-.05 6.94c-.4.04-.8.06-1.21.06a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm17 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"])));
const PersonAvailable20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAvailable20Regular', "20", ["M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 13a2 2 0 0 1 2-2h6.26c-.26.3-.48.64-.66 1H4a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 9 17l.6-.01c.17.34.37.66.61.95-.4.04-.8.06-1.21.06a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm17 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"])));
const PersonAvailable24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAvailable24Filled', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.48 2a6.47 6.47 0 0 0 .57 7.76c-.8.16-1.66.24-2.59.24-3.42 0-5.94-1.07-7.49-3.24a2.75 2.75 0 0 1-.5-1.6v-.91C2 15 3 14 4.24 14h7.77Zm2.83 3.15a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 1 0-.7-.7l-3.65 3.64-1.65-1.64ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"])));
const PersonAvailable24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonAvailable24Regular', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-2.65 5.15a.5.5 0 1 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 1 0-.7-.7l-3.65 3.64-1.65-1.64ZM12.02 14c-.3.46-.53.97-.7 1.5H4.24a.75.75 0 0 0-.75.75v.58c0 .53.2 1.05.54 1.46C5.3 19.76 7.26 20.5 10 20.5c.6 0 1.16-.03 1.68-.1.25.49.55.95.91 1.36-.8.16-1.66.24-2.59.24-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 0 1-.9-2.43v-.58C2 15 3.01 14 4.25 14h7.77ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"])));
const PersonBoard16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonBoard16Filled', "16", ["M4.5 2A2.5 2.5 0 0 0 2 4.5v5A2.5 2.5 0 0 0 4.5 12h5A2.5 2.5 0 0 0 12 9.5v-5A2.5 2.5 0 0 0 9.5 2h-5ZM7 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-1.75.63h3.5c.62 0 1.13.5 1.13 1.12v.25c0 .4-.18.89-.65 1.26-.46.38-1.18.62-2.23.62-1.06 0-1.78-.25-2.24-.62a1.63 1.63 0 0 1-.63-1.26v-.25c0-.62.5-1.13 1.12-1.13ZM4.5 13c.46.6 1.18 1 2 1h3A4.5 4.5 0 0 0 14 9.5v-3c0-.82-.4-1.54-1-2v5A3.5 3.5 0 0 1 9.5 13h-5Z"])));
const PersonBoard16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonBoard16Regular', "16", ["M7 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 8.25C4 7.56 4.56 7 5.25 7h3.5C9.44 7 10 7.56 10 8.25v.25c0 .44-.19.96-.69 1.36-.49.4-1.24.64-2.31.64-1.08 0-1.83-.25-2.32-.65-.5-.4-.68-.92-.68-1.35v-.25ZM5.25 8a.25.25 0 0 0-.25.25v.25c0 .14.06.37.31.58.26.2.76.42 1.69.42.93 0 1.43-.21 1.69-.42.25-.2.31-.43.31-.58v-.25A.25.25 0 0 0 8.75 8h-3.5ZM4.5 2A2.5 2.5 0 0 0 2 4.5v5A2.5 2.5 0 0 0 4.5 12h5A2.5 2.5 0 0 0 12 9.5v-5A2.5 2.5 0 0 0 9.5 2h-5Zm5 1c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 9.5v-5C3 3.67 3.67 3 4.5 3h5Zm-5 10c.46.6 1.18 1 2 1h3A4.5 4.5 0 0 0 14 9.5v-3c0-.82-.4-1.54-1-2v5A3.5 3.5 0 0 1 9.5 13h-5Z"])));
const PersonBoard20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonBoard20Filled', "20", ["M6 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm4.75 3.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm1.75 4c0 .59-.15 2.5-3.5 2.5-3.36 0-3.5-1.93-3.5-2.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1ZM5.76 16A3 3 0 0 0 8 17h4.5a4.5 4.5 0 0 0 4.5-4.5V8a3 3 0 0 0-1-2.24v6.74a3.5 3.5 0 0 1-3.5 3.5H5.76Z"])));
const PersonBoard20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonBoard20Regular', "20", ["M9 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6.5 9C5.67 9 5 9.67 5 10.5c0 .33.04 1.05.62 1.68.59.63 1.63 1.07 3.38 1.07s2.79-.43 3.37-1.06A2.4 2.4 0 0 0 13 10.5c0-.83-.67-1.5-1.5-1.5h-5ZM6 10.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5 0 .25-.03.66-.36 1-.32.35-1.04.75-2.64.75s-2.32-.4-2.64-.75a1.41 1.41 0 0 1-.36-1ZM3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm2 13a3 3 0 0 1-2.24-1h6.74a3.5 3.5 0 0 0 3.5-3.5V5.76A3 3 0 0 1 17 8v4.5a4.5 4.5 0 0 1-4.5 4.5H8Z"])));
const PersonBoard24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonBoard24Filled', "24", ["M6.25 3A3.25 3.25 0 0 0 3 6.25v8.5C3 16.55 4.46 18 6.25 18h8.5c1.8 0 3.25-1.46 3.25-3.25v-8.5C18 4.45 16.54 3 14.75 3h-8.5Zm6.5 4.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm.75 3.25c.83 0 1.5.67 1.5 1.5v.5c0 .5-.09.86-.25 1.16-.17.3-.43.56-.82.83-.73.5-1.86.76-3.43.76a6.12 6.12 0 0 1-3.24-.76 3.1 3.1 0 0 1-.94-.83c-.2-.3-.32-.66-.32-1.16v-.5c0-.83.67-1.5 1.5-1.5h6ZM6.01 19c.58.9 1.59 1.5 2.74 1.5h6.5c2.9 0 5.25-2.35 5.25-5.25v-6.5c0-1.15-.6-2.16-1.5-2.74v9.24A3.75 3.75 0 0 1 15.25 19H6.01Z"])));
const PersonBoard24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonBoard24Regular', "24", ["M15.25 12.25c0-.97-.78-1.75-1.75-1.75h-6c-.97 0-1.75.78-1.75 1.75v.5c0 1.08.52 1.66 1.38 2.2.85.54 2.02.8 3.37.8 1.59 0 2.77-.26 3.57-.8.81-.56 1.18-1.15 1.18-2.2v-.5Zm-8 0c0-.14.11-.25.25-.25h6c.14 0 .25.11.25.25v.5c0 .27-.03.33-.1.45l-.06.1c-.1.21-.26.38-.5.52-.5.29-1.31.43-2.59.43a5.41 5.41 0 0 1-2.41-.43 1.6 1.6 0 0 1-.62-.54 1.98 1.98 0 0 0-.1-.12c-.07-.1-.12-.17-.12-.41v-.5ZM13 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM3 6.25C3 4.45 4.46 3 6.25 3h8.5C16.55 3 18 4.46 18 6.25v8.5c0 1.8-1.46 3.25-3.25 3.25h-8.5A3.25 3.25 0 0 1 3 14.75v-8.5ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75h8.5c.97 0 1.75-.78 1.75-1.75v-8.5c0-.97-.78-1.75-1.75-1.75h-8.5Zm2.5 16c-1.15 0-2.16-.6-2.74-1.5h9.24A3.75 3.75 0 0 0 19 15.25V6.01c.9.58 1.5 1.59 1.5 2.74v6.5c0 2.9-2.35 5.25-5.25 5.25h-6.5Z"])));
const PersonBoard28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonBoard28Filled', "28", ["M6.75 3A3.75 3.75 0 0 0 3 6.75v11.5A3.75 3.75 0 0 0 6.75 22h11.5A3.75 3.75 0 0 0 22 18.25V6.75A3.75 3.75 0 0 0 18.25 3H6.75Zm2.13 11h7.24c1.04 0 1.88.77 1.88 1.72a3.3 3.3 0 0 1-1.73 2.89c-1.02.61-2.36.89-3.77.89-1.4 0-2.75-.28-3.77-.9A3.3 3.3 0 0 1 7 15.73c0-.95.84-1.72 1.88-1.72Zm6.62-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.25 24.5c-1.24 0-2.34-.6-3.02-1.53.17.02.34.03.52.03h12C21.1 23 23 21.1 23 18.75v-12c0-.18 0-.35-.03-.52a3.74 3.74 0 0 1 1.53 3.02v9.5a5.75 5.75 0 0 1-5.75 5.75h-9.5Z"])));
const PersonBoard28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonBoard28Regular', "28", ["M6.75 3A3.75 3.75 0 0 0 3 6.75v11.5A3.75 3.75 0 0 0 6.75 22h11.5A3.75 3.75 0 0 0 22 18.25V6.75A3.75 3.75 0 0 0 18.25 3H6.75ZM4.5 6.75c0-1.24 1-2.25 2.25-2.25h11.5c1.24 0 2.25 1 2.25 2.25v11.5c0 1.24-1 2.25-2.25 2.25H6.75c-1.24 0-2.25-1-2.25-2.25V6.75ZM9.25 24.5c-1.24 0-2.34-.6-3.02-1.53.17.02.34.03.52.03h12C21.1 23 23 21.1 23 18.75v-12c0-.18 0-.35-.03-.52a3.74 3.74 0 0 1 1.53 3.02v9.5a5.75 5.75 0 0 1-5.75 5.75h-9.5ZM7 14.87C7 13.85 7.84 13 8.88 13h7.24c1.04 0 1.88.84 1.88 1.88 0 1.4-.68 2.46-1.73 3.15a6.92 6.92 0 0 1-3.77.97c-1.4 0-2.75-.3-3.77-.97A3.66 3.66 0 0 1 7 14.87Zm1.88-.37c-.21 0-.38.17-.38.38 0 .83.38 1.45 1.05 1.9.7.45 1.73.72 2.95.72 1.22 0 2.25-.27 2.95-.73a2.16 2.16 0 0 0 1.05-1.9c0-.2-.17-.37-.38-.37H8.88ZM11 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"])));
const PersonBoard32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonBoard32Filled', "32", ["M7.5 3A4.5 4.5 0 0 0 3 7.5v13A4.5 4.5 0 0 0 7.5 25h13a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 20.5 3h-13Zm2.13 12h8.74c1.18 0 2.13.95 2.13 2.13 0 1.56-.89 2.7-2.12 3.4-1.2.67-2.76.97-4.38.97s-3.19-.3-4.38-.98a3.84 3.84 0 0 1-2.12-3.4c0-1.17.95-2.12 2.13-2.12Zm.87-5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm.5 19a4.5 4.5 0 0 1-3.75-2H21.5a5 5 0 0 0 5-5V7.25c1.2.81 2 2.19 2 3.75v10.5a7 7 0 0 1-7 7H11Z"])));
const PersonBoard32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonBoard32Regular', "32", ["M7.5 3A4.5 4.5 0 0 0 3 7.5v13A4.5 4.5 0 0 0 7.5 25h13a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 20.5 3h-13ZM5 7.5A2.5 2.5 0 0 1 7.5 5h13A2.5 2.5 0 0 1 23 7.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 20.5v-13Zm6 21a4.5 4.5 0 0 1-3.75-2H21.5a5 5 0 0 0 5-5V7.25c1.2.81 2 2.19 2 3.75v10.5a7 7 0 0 1-7 7H11ZM7.5 16.37A2.37 2.37 0 0 1 9.88 14h8.24a2.37 2.37 0 0 1 2.38 2.38 4.6 4.6 0 0 1-2.04 3.9A7.85 7.85 0 0 1 14 21.5a7.85 7.85 0 0 1-4.46-1.22 4.6 4.6 0 0 1-2.04-3.9ZM9.88 16c-.21 0-.38.17-.38.38a2.6 2.6 0 0 0 1.18 2.26c.78.54 1.94.86 3.32.86s2.54-.32 3.32-.86a2.6 2.6 0 0 0 1.18-2.27c0-.2-.17-.37-.38-.37H9.88Zm2.62-6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM14 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"])));
const PersonCall16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCall16Filled', "16", ["M7.57 11.98a2.2 2.2 0 0 0-.52 1.96C4.5 13.57 3 11.76 3 10v-.5C3 8.67 3.67 8 4.5 8h6.02c.02.48.22.95.59 1.3l.51.51c-.1.44-.33.81-.7 1.12l-.8-.18c-.72-.18-1.5.06-2 .62l-.55.61ZM8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5Zm3.58 6.08.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z"])));
const PersonCall16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCall16Regular', "16", ["M7.07 12.93a2.2 2.2 0 0 0-.02 1C4.5 13.58 3 11.77 3 10v-.5C3 8.67 3.67 8 4.5 8h6.02c.02.35.13.7.33 1H4.5a.5.5 0 0 0-.5.5v.5c0 1.25 1.09 2.6 3.07 2.93ZM8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5Zm0 1A1.75 1.75 0 1 0 8 6a1.75 1.75 0 0 0 0-3.5Zm3.58 5.08.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z"])));
const PersonCall20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCall20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c.36 0 .71-.01 1.06-.04a2.2 2.2 0 0 1 .51-1.98l.55-.6c.5-.57 1.28-.8 2-.63l.8.18c.37-.31.6-.68.7-1.12l-.51-.5a1.94 1.94 0 0 1-.46-2.08l.08-.23H5.01Zm10.58.58.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z"])));
const PersonCall20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCall20Regular', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c.36 0 .71-.01 1.06-.04a2.2 2.2 0 0 1 0-1c-.34.02-.7.04-1.06.04a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h9.52c0-.26.03-.52.13-.77l.08-.23H5.01Zm10.58.58.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z"])));
const PersonCall24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCall24Filled', "24", ["M17.72 15.95a2.2 2.2 0 0 1-.57-1.95H6.25C5.01 14 4 15 4 16.25v.92c0 .57.18 1.13.51 1.6C6.06 20.92 8.58 22 12 22a15 15 0 0 0 1.13-.04 2.25 2.25 0 0 1 .36-2.16l.8-1.01a2.2 2.2 0 0 1 2.23-.77l.84.2c.52-.43.83-.97.95-1.64l-.6-.63ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.2 12 .47-1.21c.24-.61.92-.93 1.55-.73l.43.14c.72.24 1.32.8 1.35 1.57.1 3.11-2.48 7.58-5.22 9.06-.67.36-1.46.12-2.03-.4l-.34-.3a1.25 1.25 0 0 1-.14-1.7l.8-1.02a1.2 1.2 0 0 1 1.22-.42l1.3.32a3.78 3.78 0 0 0 1.77-3.08l-.92-.96a1.2 1.2 0 0 1-.25-1.28Z"])));
const PersonCall24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCall24Regular', "24", ["M17.38 15.5a2.2 2.2 0 0 1-.23-1.5H6.25C5.01 14 4 15 4 16.25v.58c0 .89.32 1.75.9 2.43C6.47 21.1 8.85 22 12 22a15 15 0 0 0 1.13-.04 2.26 2.26 0 0 1 0-1.5c-.36.03-.74.04-1.13.04-2.74 0-4.7-.74-5.96-2.21-.34-.41-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h11.13ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM18.2 14l.47-1.21c.24-.61.92-.93 1.55-.73l.43.14c.72.24 1.32.8 1.35 1.57.1 3.11-2.48 7.58-5.22 9.06-.67.36-1.46.12-2.03-.4l-.34-.3a1.25 1.25 0 0 1-.14-1.7l.8-1.02a1.2 1.2 0 0 1 1.22-.42l1.3.32a3.78 3.78 0 0 0 1.77-3.08l-.92-.96a1.2 1.2 0 0 1-.25-1.28Z"])));
const PersonChat16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonChat16Filled', "16", ["m7.6 13.27-.21.7C4.62 13.73 3 11.84 3 10v-.5C3 8.67 3.67 8 4.5 8h4.54a4.27 4.27 0 0 0-1.44 5.27ZM8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5Zm7 10a3.5 3.5 0 0 1-5.2 3.06L8.41 15a.32.32 0 0 1-.4-.4l.43-1.4A3.5 3.5 0 1 1 15 11.5ZM10.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-.5 2.5c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5Z"])));
const PersonChat16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonChat16Regular', "16", ["m7.6 13.27-.21.7C4.62 13.73 3 11.84 3 10v-.5C3 8.67 3.67 8 4.5 8h4.54a4.3 4.3 0 0 0-1.01 1H4.5a.5.5 0 0 0-.5.5v.5c0 1.34 1.24 2.78 3.48 2.98l.12.29ZM8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5Zm0 1A1.75 1.75 0 1 0 8 6a1.75 1.75 0 0 0 0-3.5Zm7 9a3.5 3.5 0 0 1-5.2 3.06L8.41 15a.32.32 0 0 1-.4-.4l.43-1.4A3.5 3.5 0 1 1 15 11.5ZM10.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-.5 2.5c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5Z"])));
const PersonChat20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonChat20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8a8.54 8.54 0 0 0 4 1.17l.36-1.2a5.48 5.48 0 0 1 .77-5.77H5Zm14 3.5a4.5 4.5 0 0 1-6.68 3.94l-1.8.54a.4.4 0 0 1-.5-.5l.54-1.8A4.5 4.5 0 1 1 19 14.5ZM12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z"])));
const PersonChat20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonChat20Regular', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8a8.54 8.54 0 0 0 4 1.17l.3-.98a7.74 7.74 0 0 1-3.76-1.04A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h4.6c.18-.36.4-.7.66-1H5Zm14 3.5a4.5 4.5 0 0 1-6.68 3.94l-1.8.54a.4.4 0 0 1-.5-.5l.54-1.8A4.5 4.5 0 1 1 19 14.5ZM12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z"])));
const PersonChat24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonChat24Filled', "24", ["M11 17.5c0-1.29.37-2.5 1.02-3.5H6.25C5 14 4 15 4 16.25v.92c0 .57.18 1.13.51 1.6 1.4 1.96 3.62 3.03 6.58 3.2l.52-1.7A6.48 6.48 0 0 1 11 17.5ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm11 15.5a5.5 5.5 0 0 1-8.17 4.81l-2.19.67a.5.5 0 0 1-.62-.63l.67-2.18A5.5 5.5 0 1 1 23 17.5ZM15.5 16a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 1 0 0-1h-2a.5.5 0 0 0-.5.5Z"])));
const PersonChat24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonChat24Regular', "24", ["M11.31 15.5c.17-.54.41-1.04.7-1.5H6.26C5 14 4 15 4 16.25v.58c0 .89.32 1.75.9 2.43 1.41 1.65 3.49 2.55 6.19 2.71l.45-1.48c-2.5-.08-4.32-.82-5.5-2.2-.35-.41-.54-.93-.54-1.46v-.58c0-.42.34-.75.75-.75h5.06ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm11 14a5.5 5.5 0 0 1-8.17 4.81l-2.19.67a.5.5 0 0 1-.62-.63l.67-2.18A5.5 5.5 0 1 1 23 17.5ZM15.5 16a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 1 0 0-1h-2a.5.5 0 0 0-.5.5Z"])));
const PersonCircle12Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCircle12Filled', "12", ["M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0Zm-6.78.26a.84.84 0 0 0-.22.55v.16c0 .82.82 1.53 2 1.53 1.18 0 2-.71 2-1.53v-.16c0-.2-.09-.4-.22-.55A.75.75 0 0 0 7.22 6H4.79a.75.75 0 0 0-.56.26ZM6 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"])));
const PersonCircle12Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCircle12Regular', "12", ["M4.22 6.26A.75.75 0 0 1 4.78 6h2.44c.24 0 .43.12.56.26.13.15.22.35.22.55v.16c0 .82-.82 1.53-2 1.53-1.18 0-2-.71-2-1.53v-.16c0-.2.09-.4.22-.55ZM6 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6A5 5 0 1 0 6 1a5 5 0 0 0 0 10Zm0-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"])));
const PersonCircle20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCircle20Filled', "20", ["M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-.5 3h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 0 1-2.79-.89A3.25 3.25 0 0 1 6 11.5c0-.83.67-1.5 1.5-1.5Z"])));
const PersonCircle20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCircle20Regular', "20", ["M8 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-.5 3h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 0 1-2.79-.89A3.25 3.25 0 0 1 6 11.5c0-.83.67-1.5 1.5-1.5ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"])));
const PersonCircle24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCircle24Filled', "24", ["M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm5-8.5c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5Zm-2.25-5.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Z"])));
const PersonCircle24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCircle24Regular', "24", ["M17 13.5c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5Zm-2.25-5.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0ZM22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-1.5 0a8.5 8.5 0 1 0-17 0 8.5 8.5 0 0 0 17 0Z"])));
const PersonCircle28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCircle28Filled', "28", ["M14 2a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 19.5c-3.31 0-6-2.14-6-5.36 0-1.18.96-2.14 2.14-2.14h7.72c1.18 0 2.14.96 2.14 2.14 0 3.22-2.69 5.36-6 5.36Zm0-9A3.25 3.25 0 1 1 14 6a3.25 3.25 0 0 1 0 6.5Z"])));
const PersonCircle28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCircle28Regular', "28", ["M3.5 14a10.5 10.5 0 1 1 21 0 10.5 10.5 0 0 1-21 0ZM14 2a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm3.25 7.25a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0ZM14 21.5c3.31 0 6-2.14 6-5.36 0-1.18-.96-2.14-2.14-2.14h-7.72C8.96 14 8 14.96 8 16.14c0 3.22 2.69 5.36 6 5.36Z"])));
const PersonCircle32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCircle32Filled', "32", ["M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28Zm0 22.5c-3.87 0-7-2.43-7-6.07A2.43 2.43 0 0 1 11.43 16h9.14A2.43 2.43 0 0 1 23 18.43c0 3.64-3.13 6.07-7 6.07Zm0-10A3.75 3.75 0 1 1 16 7a3.75 3.75 0 0 1 0 7.5Z"])));
const PersonCircle32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonCircle32Regular', "32", ["M16 4a12 12 0 1 0 0 24 12 12 0 0 0 0-24ZM2 16a14 14 0 1 1 28 0 14 14 0 0 1-28 0Zm14 8.5c3.87 0 7-2.43 7-6.07A2.43 2.43 0 0 0 20.57 16h-9.14A2.43 2.43 0 0 0 9 18.43c0 3.64 3.13 6.07 7 6.07Zm0-10A3.75 3.75 0 1 0 16 7a3.75 3.75 0 0 0 0 7.5Z"])));
const PersonClock16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonClock16Filled', "16", ["M2 10c0 1.8 1.55 3.65 4.22 3.96A5.48 5.48 0 0 1 5.6 8H3.5C2.67 8 2 8.67 2 9.5v.5Zm4.33-3.08a5.5 5.5 0 0 1 3.3-1.85 2.75 2.75 0 1 0-3.3 1.85ZM15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10.5 8a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H12a.5.5 0 0 0 0-1h-1V8.5a.5.5 0 0 0-.5-.5Z"])));
const PersonClock16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonClock16Regular', "16", ["M2 10c0 1.8 1.55 3.65 4.22 3.96a5.5 5.5 0 0 1-.72-1.16C3.88 12.33 3 11.13 3 10v-.5c0-.28.22-.5.5-.5h1.7c.1-.35.24-.68.4-1H3.5C2.67 8 2 8.67 2 9.5v.5Zm7.75-5.75c0 .29-.04.56-.12.82-.49.08-.95.22-1.39.41A1.74 1.74 0 0 0 7 2.5a1.75 1.75 0 1 0 .4 3.45c-.4.28-.76.6-1.07.97a2.75 2.75 0 1 1 3.42-2.67ZM15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10.5 8a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H12a.5.5 0 0 0 0-1h-1V8.5a.5.5 0 0 0-.5-.5Z"])));
const PersonClock20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonClock20Filled', "20", ["M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h6.26a5.48 5.48 0 0 0-.05 6.94c-.4.04-.8.06-1.21.06a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm17 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z"])));
const PersonClock20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonClock20Regular', "20", ["M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 13a2 2 0 0 1 2-2h6.26c-.26.3-.48.64-.66 1H4a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 9 17l.6-.01c.17.34.37.66.61.95-.4.04-.8.06-1.21.06a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm17 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z"])));
const PersonClock24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonClock24Filled', "24", ["M11 17.5c0-1.29.38-2.49 1.02-3.5H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.93 0 1.8-.08 2.6-.24A6.48 6.48 0 0 1 11 17.5ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm7.5 10a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm2 5.5h-2V15a.5.5 0 1 0-1 0v3c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1Z"])));
const PersonClock24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonClock24Regular', "24", ["M11.31 15.5c.18-.53.42-1.04.71-1.5H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.93 0 1.8-.08 2.6-.24a6.52 6.52 0 0 1-.92-1.36c-.52.07-1.08.1-1.68.1-2.74 0-4.7-.74-5.96-2.21-.34-.4-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h7.06ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm7.5 8.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm2 5.5h-2V15a.5.5 0 1 0-1 0v3c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1Z"])));
const PersonDelete16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonDelete16Filled', "16", ["M9.5 9c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5C1 9.67 1.67 9 2.5 9h7ZM6 2.5A2.75 2.75 0 1 1 6 8a2.75 2.75 0 0 1 0-5.5Zm4.78-1.41.07.06 1.65 1.64 1.65-1.64a.5.5 0 0 1 .7.7L13.21 3.5l1.64 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-1.65-1.64-1.65 1.64a.5.5 0 0 1-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 0 1-.06-.63l.06-.07a.5.5 0 0 1 .56-.1l.07.04Z"])));
const PersonDelete16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonDelete16Regular', "16", ["M9.5 9c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5C1 9.67 1.67 9 2.5 9h7Zm0 1h-7a.5.5 0 0 0-.5.5v.5c0 1.44 1.43 3 4 3 2.57 0 4-1.56 4-3v-.5a.5.5 0 0 0-.5-.5ZM6 2.5A2.75 2.75 0 1 1 6 8a2.75 2.75 0 0 1 0-5.5Zm0 1A1.75 1.75 0 1 0 6 7a1.75 1.75 0 0 0 0-3.5Zm4.78-2.41.07.06 1.65 1.64 1.65-1.64a.5.5 0 0 1 .7.7L13.21 3.5l1.64 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-1.65-1.64-1.65 1.64a.5.5 0 0 1-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 0 1-.06-.63l.06-.07a.5.5 0 0 1 .56-.1l.07.04Z"])));
const PersonDelete20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonDelete20Filled', "20", ["M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h6.26a5.48 5.48 0 0 0-.05 6.94c-.4.04-.8.06-1.21.06a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm17 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z"])));
const PersonDelete20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonDelete20Regular', "20", ["M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 13a2 2 0 0 1 2-2h6.26c-.26.3-.48.64-.66 1H4a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 9 17l.6-.01c.17.34.37.66.61.95-.4.04-.8.06-1.21.06a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm17 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z"])));
const PersonDelete24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonDelete24Filled', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.48 2a6.47 6.47 0 0 0 .6 7.8c-.8.13-1.68.2-2.62.2-2.89 0-5.13-.66-6.7-2A3.75 3.75 0 0 1 2 17.16v-.91C2 15.01 3.01 14 4.25 14h7.77Zm3.07.97-.07.05-.05.07a.5.5 0 0 0 0 .57l.05.07 1.77 1.77-1.76 1.77-.06.07a.5.5 0 0 0 0 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 0 0 0-.57l-.05-.07-1.77-1.77 1.77-1.77.06-.07a.5.5 0 0 0 0-.57l-.06-.07-.07-.05a.5.5 0 0 0-.57 0l-.07.05-1.77 1.77-1.77-1.77-.07-.05a.5.5 0 0 0-.49-.05l-.08.05ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"])));
const PersonDelete24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonDelete24Regular', "24", ["M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.48 2c-.3.46-.53.97-.7 1.5H4.24a.75.75 0 0 0-.75.75v.9c0 .66.29 1.29.79 1.71C5.55 19.95 7.44 20.5 10 20.5c.6 0 1.16-.03 1.69-.09.25.5.56.96.93 1.38-.8.14-1.68.21-2.62.21-2.89 0-5.13-.66-6.7-2A3.75 3.75 0 0 1 2 17.16v-.91C2 15.01 3.01 14 4.25 14h7.77Zm3.07.97-.07.05-.05.07a.5.5 0 0 0 0 .57l.05.07 1.77 1.77-1.76 1.77-.06.07a.5.5 0 0 0 0 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 0 0 0-.57l-.05-.07-1.77-1.77 1.77-1.77.06-.07a.5.5 0 0 0 0-.57l-.06-.07-.07-.05a.5.5 0 0 0-.57 0l-.07.05-1.77 1.77-1.77-1.77-.07-.05a.5.5 0 0 0-.49-.05l-.08.05ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"])));
const PersonDesktop20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonDesktop20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c.24 0 .48 0 .72-.02A2 2 0 0 1 9 16v-4c0-.36.1-.7.27-1H5Zm5 1a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v1h.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h.5v-1h-2a1 1 0 0 1-1-1v-4Z"])));
const PersonDesktop20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonDesktop20Regular', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c.24 0 .48 0 .72-.02a2 2 0 0 1-1.47-1 7.61 7.61 0 0 1-3.58-1.03A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h4c0-.36.1-.7.27-1H5Zm5 1a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v1h.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h.5v-1h-2a1 1 0 0 1-1-1v-4Z"])));
const PersonEdit20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonEdit20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8a8.46 8.46 0 0 0 3.88 1.16c0-.1.02-.2.05-.3l.37-1.5a3.2 3.2 0 0 1 .84-1.49L13.94 11H5.01Zm5.98 4.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"])));
const PersonEdit20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonEdit20Regular', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8a8.46 8.46 0 0 0 3.88 1.16c0-.1.02-.2.05-.3l.17-.68a7.59 7.59 0 0 1-3.56-1.03A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h7.94l1-1H5.01Zm5.98 4.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"])));
const PersonEdit24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonEdit24Filled', "24", ["M12.5 17.86 16.35 14H6.26C5 14 4 15 4 16.25v.92c0 .57.18 1.13.51 1.6 1.4 1.94 3.57 3 6.49 3.2 0-.18.02-.37.06-.56l.46-1.83c.16-.65.5-1.24.97-1.71ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm7.1 10.67-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z"])));
const PersonEdit24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonEdit24Regular', "24", ["m14.86 15.5 1.5-1.5H6.26C5 14 4 15 4 16.25v.58c0 .89.32 1.75.9 2.43 1.4 1.64 3.44 2.53 6.1 2.7 0-.17.02-.36.06-.55l.23-.93c-2.37-.12-4.1-.85-5.25-2.2-.34-.4-.54-.92-.54-1.45v-.58c0-.41.34-.75.75-.75h8.6ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm7.1 9.17-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24Z"])));
const PersonFeedback16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback16Filled', "16", ["M9.5 1.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1V7l1.8-1.5h2.2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4ZM5 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm2.5 5h-5C1.67 9 1 9.67 1 10.5c0 1.12.46 2.01 1.21 2.61.74.6 1.74.89 2.79.89s2.05-.29 2.79-.89c.75-.6 1.21-1.5 1.21-2.61C9 9.67 8.33 9 7.5 9Z"])));
const PersonFeedback16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback16Regular', "16", ["M9.5 1C8.67 1 8 1.67 8 2.5v2c0 .65.42 1.2 1 1.41V7a.5.5 0 0 0 .82.38L11.48 6h2.02c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-4ZM9 2.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2.2a.5.5 0 0 0-.32.12l-.98.81V5.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5v-2ZM3 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM2.5 9h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 0 1-2.79-.89A3.25 3.25 0 0 1 1 10.5C1 9.67 1.67 9 2.5 9Zm5 1h-5a.5.5 0 0 0-.5.5c0 .82.32 1.42.84 1.83.52.43 1.28.67 2.16.67.88 0 1.64-.24 2.16-.67.52-.4.84-1.01.84-1.83a.5.5 0 0 0-.5-.5Z"])));
const PersonFeedback20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback20Filled', "20", ["M10.5 12c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h7ZM7 5.5A2.75 2.75 0 1 1 7 11a2.75 2.75 0 0 1 0-5.5ZM16 2a2 2 0 0 1 2 1.85V6a2 2 0 0 1-1.85 2H14.5l-1.2 1.6a1 1 0 0 1-1.78-.38l-.01-.1V9l-.01-1.07-.08-.01a2 2 0 0 1-1.4-1.6l-.01-.17L10 6V4a2 2 0 0 1 1.85-2H16Z"])));
const PersonFeedback20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback20Regular', "20", ["M10.5 12c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h7Zm0 1h-7a.5.5 0 0 0-.5.5v.5c0 1.44 1.43 3 4 3 2.57 0 4-1.56 4-3v-.5a.5.5 0 0 0-.5-.5ZM7 5.5A2.75 2.75 0 1 1 7 11a2.75 2.75 0 0 1 0-5.5ZM16 2a2 2 0 0 1 2 1.85V6a2 2 0 0 1-1.85 2H14.5l-1.2 1.6a1 1 0 0 1-1.78-.38l-.01-.1V9l-.01-1.07-.08-.01a2 2 0 0 1-1.4-1.6l-.01-.17L10 6V4a2 2 0 0 1 1.85-2H16ZM7 6.5A1.75 1.75 0 1 0 7 10a1.75 1.75 0 0 0 0-3.5ZM16 3h-4a1 1 0 0 0-1 .88V6a1 1 0 0 0 .88 1h.62v2L14 7h2a1 1 0 0 0 1-.88V4a1 1 0 0 0-.88-1H16Z"])));
const PersonFeedback24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback24Filled', "24", ["M14.77 12.4c.15.07.32.1.48.1.33 0 .64-.13.88-.36L18.31 10h.94A2.75 2.75 0 0 0 22 7.25v-2.5A2.75 2.75 0 0 0 19.25 2h-4.5A2.75 2.75 0 0 0 12 4.75v2.5c0 1.26.85 2.32 2 2.65v1.35c0 .5.31.95.77 1.15ZM8 13.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM8 22c-2.06 0-3.64-.56-4.7-1.67-1.34-1.4-1.3-3.17-1.3-3.36v-.01A2 2 0 0 1 4 15h8a2 2 0 0 1 2 2c0 .13.05 1.92-1.3 3.33C11.64 21.44 10.06 22 8 22Z"])));
const PersonFeedback24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback24Regular', "24", ["M14.77 12.4c.15.07.32.1.48.1.33 0 .64-.13.88-.36L18.31 10h.94A2.75 2.75 0 0 0 22 7.25v-2.5A2.75 2.75 0 0 0 19.25 2h-4.5A2.75 2.75 0 0 0 12 4.75v2.5c0 1.26.85 2.32 2 2.65v1.35c0 .5.31.95.77 1.15ZM13.5 4.75c0-.69.56-1.25 1.25-1.25h4.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-1.56l-2.19 2.15V8.5h-.75c-.69 0-1.25-.56-1.25-1.25v-2.5ZM8 13.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM8 8a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2Zm0 14c-2.06 0-3.64-.56-4.7-1.67-1.34-1.4-1.3-3.17-1.3-3.36v-.01A2 2 0 0 1 4 15h8a2 2 0 0 1 2 2c0 .13.05 1.92-1.3 3.33C11.64 21.44 10.06 22 8 22Zm-4-5.5a.5.5 0 0 0-.5.5c0 .1-.02 1.35.9 2.31.76.79 1.97 1.19 3.6 1.19 1.63 0 2.85-.41 3.61-1.21.91-.95.9-2.2.9-2.26 0-.31-.24-.54-.5-.54H4v.01Z"])));
const PersonFeedback28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback28Filled', "28", ["M17.75 14a1.25 1.25 0 0 1-1.25-1.25v-1.76A2.76 2.76 0 0 1 14 8.25v-3.5A2.75 2.75 0 0 1 16.75 2h6.5A2.75 2.75 0 0 1 26 4.75v3.5A2.75 2.75 0 0 1 23.25 11h-2.62l-1.88 2.5c-.24.32-.61.5-1 .5ZM9.5 16.5a4.26 4.26 0 0 1 0-8.5 4.26 4.26 0 0 1 0 8.5Zm-6.03 7.42C4.78 25.3 6.81 26 9.5 26c2.7 0 4.72-.7 6.03-2.08A5.44 5.44 0 0 0 17 20.24v-.01C17 19 16 18 14.77 18H4.23A2.22 2.22 0 0 0 2 20.2c0 .2-.04 2.12 1.47 3.72Z"])));
const PersonFeedback28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback28Regular', "28", ["M17.75 14a1.25 1.25 0 0 1-1.25-1.25v-1.76A2.76 2.76 0 0 1 14 8.25v-3.5A2.75 2.75 0 0 1 16.75 2h6.5A2.75 2.75 0 0 1 26 4.75v3.5A2.75 2.75 0 0 1 23.25 11h-2.62l-1.88 2.5c-.24.32-.61.5-1 .5Zm-1-10.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25H18V12l1.88-2.5h3.38c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-6.51Zm-7.25 13a4.26 4.26 0 0 1 0-8.5 4.26 4.26 0 0 1 0 8.5Zm0-7a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM3.47 23.92C4.78 25.3 6.81 26 9.5 26c2.7 0 4.72-.7 6.03-2.08A5.44 5.44 0 0 0 17 20.24v-.01C17 19 16 18 14.77 18H4.23A2.22 2.22 0 0 0 2 20.2c0 .2-.04 2.12 1.47 3.72Zm.03-3.69c0-.4.33-.73.73-.73h10.54c.4 0 .73.33.73.77 0 .07.02 1.47-1.06 2.62-1 1.07-2.69 1.61-4.94 1.61-2.25 0-3.9-.53-4.92-1.59a3.89 3.89 0 0 1-1.08-2.67v-.01Z"])));
const PersonFeedback32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback32Filled', "32", ["M19.95 15.89a1.5 1.5 0 0 0 1.65-.37L23.94 13H27a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v4.99a3 3 0 0 0 3 3v1.5c0 .63.37 1.17.95 1.4ZM10.5 18a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0 11.99c-2.9 0-5.12-.8-6.62-2.37A7.1 7.1 0 0 1 2 22.78v-.01A2.8 2.8 0 0 1 4.82 20h11.36A2.82 2.82 0 0 1 19 22.82c0 .19.06 2.78-1.88 4.81C15.62 29.2 13.4 30 10.5 30v-.01Z"])));
const PersonFeedback32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback32Regular', "32", ["M19.95 15.89a1.5 1.5 0 0 0 1.65-.37L23.94 13H27a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v4.99a3 3 0 0 0 3 3v1.5c0 .63.37 1.17.95 1.4ZM18 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3.94L21 13.22V11h-2a1 1 0 0 1-1-1V5Zm-7.5 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Zm0 19.99c-2.9 0-5.12-.8-6.62-2.37A7.1 7.1 0 0 1 2 22.78v-.01A2.8 2.8 0 0 1 4.82 20h11.36A2.82 2.82 0 0 1 19 22.82c0 .19.06 2.78-1.88 4.81C15.62 29.2 13.4 30 10.5 30v-.01Zm-5.68-8a.82.82 0 0 0-.82.83c0 .15-.03 2.03 1.34 3.44C6.44 27.41 8.18 28 10.5 28c2.32 0 4.05-.58 5.16-1.73a5.05 5.05 0 0 0 1.34-3.4.83.83 0 0 0-.82-.86H4.82Z"])));
const PersonFeedback48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback48Filled', "48", ["M30.27 25c-.24 0-.49-.04-.73-.12A2.21 2.21 0 0 1 28 22.75v-2.81a4.76 4.76 0 0 1-4-4.69v-6.5A4.75 4.75 0 0 1 28.75 4h11.5A4.75 4.75 0 0 1 45 8.75v6.5A4.75 4.75 0 0 1 40.25 20h-5.12l-3.08 4.1c-.44.58-1.09.9-1.78.9ZM16 27.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM3 34.79c0 .09.15 9.21 13 9.21s13-9.12 13-9.21v-1.04A3.75 3.75 0 0 0 25.25 30H6.75A3.75 3.75 0 0 0 3 33.75v1.04Z"])));
const PersonFeedback48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonFeedback48Regular', "48", ["M30.27 25c-.24 0-.49-.04-.73-.12A2.21 2.21 0 0 1 28 22.75v-2.81a4.76 4.76 0 0 1-4-4.69v-6.5A4.75 4.75 0 0 1 28.75 4h11.5A4.75 4.75 0 0 1 45 8.75v6.5A4.75 4.75 0 0 1 40.25 20h-5.12l-3.08 4.1c-.44.58-1.09.9-1.78.9ZM28.75 6.5a2.25 2.25 0 0 0-2.25 2.25v6.5a2.25 2.25 0 0 0 2.25 2.25h1.75V22l3.38-4.5h6.38a2.25 2.25 0 0 0 2.25-2.25v-6.5a2.25 2.25 0 0 0-2.25-2.25H28.75ZM16 27.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM16 15a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM3 34.79c0 .09.15 9.21 13 9.21s13-9.12 13-9.21v-1.04A3.75 3.75 0 0 0 25.25 30H6.75A3.75 3.75 0 0 0 3 33.75v1.04Zm2.5-1.04c0-.69.56-1.25 1.25-1.25h18.5c.69 0 1.25.56 1.25 1.25v1.03c0 .27-.22 6.72-10.5 6.72S5.5 35.05 5.5 34.79v-1.04Z"])));
const PersonHeart20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonHeart20Filled', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.95 0 1.88-.1 2.72-.31l-1.83-2a3.4 3.4 0 0 1 .1-4.69H4Zm10.5 1-.63-.49a2.4 2.4 0 0 0-3.24 3.5l3.5 3.83c.2.22.54.22.74 0l3.5-3.83a2.4 2.4 0 0 0-3.24-3.5l-.63.5Z"])));
const PersonHeart20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonHeart20Regular', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.95 0 1.88-.1 2.72-.31l-.78-.86c-.6.11-1.26.17-1.94.17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.3a3.4 3.4 0 0 1 .69-1H4Zm10.5 1-.63-.49a2.4 2.4 0 0 0-3.24 3.5l3.5 3.83c.2.22.54.22.74 0l3.5-3.83a2.4 2.4 0 0 0-3.24-3.5l-.63.5Z"])));
const PersonHeart24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonHeart24Filled', "24", ["M11.4 19.07a4.47 4.47 0 0 1-.88-5.07H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c1.41 0 2.67-.18 3.77-.55l-2.37-2.38ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm7.04 21a.75.75 0 0 1-.53-.22l-4.4-4.41a3.47 3.47 0 0 1 4.9-4.9l.03.03.04-.04a3.47 3.47 0 0 1 4.9 4.9l-4.4 4.42a.75.75 0 0 1-.54.22Z"])));
const PersonHeart24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonHeart24Regular', "24", ["M10.1 15.5c.06-.52.2-1.02.42-1.5H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c1.41 0 2.67-.18 3.77-.55l-1.21-1.21c-.76.17-1.62.26-2.56.26-2.74 0-4.7-.75-5.96-2.21-.34-.41-.54-.93-.54-1.46v-.58c0-.42.34-.75.75-.75h5.86ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.04 23a.75.75 0 0 1-.53-.22l-4.4-4.41a3.47 3.47 0 0 1 4.9-4.9l.03.03.04-.03a3.47 3.47 0 0 1 4.9 4.9l-4.4 4.4a.75.75 0 0 1-.54.23Z"])));
const PersonInfo16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonInfo16Filled', "16", ["M9.63 5.07a5.5 5.5 0 0 0-3.3 1.85 2.75 2.75 0 1 1 3.3-1.85ZM5.6 8a5.48 5.48 0 0 0 .62 5.96C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1Zm4.28.5a.62.62 0 1 1 1.24 0 .62.62 0 0 1-1.24 0Zm1.12 4a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2Zm-5-2a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm1 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z"])));
const PersonInfo16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonInfo16Regular', "16", ["M2 10c0 1.8 1.55 3.65 4.22 3.96a5.5 5.5 0 0 1-.72-1.16C3.88 12.33 3 11.13 3 10v-.5c0-.28.22-.5.5-.5h1.7c.1-.35.24-.68.4-1H3.5C2.67 8 2 8.67 2 9.5v.5Zm7.75-5.75c0 .29-.04.56-.12.82-.49.08-.95.22-1.39.41A1.74 1.74 0 0 0 7 2.5a1.75 1.75 0 1 0 .4 3.45c-.4.28-.76.6-1.07.97a2.75 2.75 0 1 1 3.42-2.67Zm.75 3.63a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.24Zm0 5.12a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5Zm0-7a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 1a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"])));
const PersonInfo20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonInfo20Filled', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06a5.48 5.48 0 0 1 .05-6.94H4Zm9.88 1.5a.62.62 0 1 1 1.24 0 .62.62 0 0 1-1.24 0Zm1.12 4a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2Zm-5-2a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm1 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z"])));
const PersonInfo20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonInfo20Regular', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.41 0 .82-.02 1.21-.06A5.5 5.5 0 0 1 9.6 17 12 12 0 0 1 9 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.6c.18-.36.4-.7.66-1H4Zm9.88 1.5a.62.62 0 1 1 1.24 0 .62.62 0 0 1-1.24 0Zm1.12 4a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2Zm-5-2a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm1 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z"])));
const PersonInfo24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonInfo24Filled', "24", ["M11 17.5c0-1.29.38-2.49 1.02-3.5H5.25C4.01 14 3 15 3 16.25v.92c0 .57.18 1.13.51 1.6C5.06 20.92 7.58 22 11 22c.6 0 1.17-.03 1.72-.1A6.48 6.48 0 0 1 11 17.5ZM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm12 15.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-9.5 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm5-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.25 2.5a.75.75 0 0 0-1.5 0v1.75a.75.75 0 0 0 1.5 0V18Z"])));
const PersonInfo24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonInfo24Regular', "24", ["M11.31 15.5c.18-.53.42-1.04.71-1.5H5.25C4.01 14 3 15 3 16.25v.58c0 .89.32 1.75.9 2.43C5.47 21.1 7.85 22 11 22c.6 0 1.17-.03 1.72-.1-.4-.42-.73-.9-1-1.42-.23.02-.47.02-.72.02-2.74 0-4.7-.74-5.96-2.21-.34-.41-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h6.06ZM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm12 14a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-9.5 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm5-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.25 2.5a.75.75 0 0 0-1.5 0v1.75a.75.75 0 0 0 1.5 0V18Z"])));
const PersonKey20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonKey20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A8.46 8.46 0 0 0 9 17.96V17c0-.41.16-.78.44-1.06l2.58-2.58a3.72 3.72 0 0 1 .51-2.36H5.01Zm5.15 7.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V18l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L14 17h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 19 13a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z"])));
const PersonKey20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonKey20Regular', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A8.46 8.46 0 0 0 9 17.96v-1a7.42 7.42 0 0 1-3.33-1A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h7.11a3.65 3.65 0 0 1 .42-1H5.01Zm5.15 7.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 0 0 .06-.24l.02-.25V18l.56-.02a.47.47 0 0 0 .3-.12c.07-.07.11-.17.12-.3L14 17h.5c.1 0 .2-.02.27-.07a.5.5 0 0 0 .15-.17.65.65 0 0 0 .07-.24 2.34 2.34 0 0 0 .01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 0 0 2.62-.86A3.11 3.11 0 0 0 19 13a2.94 2.94 0 0 0-.88-2.13 3 3 0 0 0-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35Zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.39.22-.53a.72.72 0 0 1 .53-.22c.2 0 .39.07.53.22Z"])));
const PersonLightbulb20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLightbulb20Filled', "20", ["M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h6.54a3.98 3.98 0 0 0 .85 5.03l.33 1.66c-.85.2-1.77.31-2.72.31a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm15 0a3 3 0 0 1-1.3 2.47l-.1.53h-3.2l-.1-.53A3 3 0 1 1 18 13Zm-4.4 4 .24 1.2c.1.46.5.8.98.8h.36a1 1 0 0 0 .98-.8l.24-1.2h-2.8Z"])));
const PersonLightbulb20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLightbulb20Regular', "20", ["M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 13a2 2 0 0 1 2-2h6.54c-.18.3-.32.65-.41 1H5A1 1 0 0 0 4 13c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 10 17c.91 0 1.76-.1 2.52-.3l.2.99c-.85.2-1.77.31-2.72.31a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm15 0a3 3 0 0 1-1.3 2.47l-.1.53h-3.2l-.1-.53A3 3 0 1 1 18 13Zm-4.4 4 .24 1.2c.1.46.5.8.98.8h.36a1 1 0 0 0 .98-.8l.24-1.2h-2.8Z"])));
const PersonLightbulb24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLightbulb24Filled', "24", ["M13 16c0-.71.15-1.39.42-2H6.25C5.01 14 4 15 4 16.25v.92c0 .57.18 1.13.51 1.6C6.06 20.92 8.58 22 12 22c1.18 0 2.24-.13 3.2-.38l-.34-1.73A5 5 0 0 1 13 16Zm4-9A5 5 0 1 0 7 7a5 5 0 0 0 10 0Zm5 9a4 4 0 0 1-1.76 3.32l-.14.68h-4.2l-.14-.68A4 4 0 1 1 22 16Zm-5.9 5 .16.8c.14.7.76 1.2 1.47 1.2h.54c.72 0 1.33-.5 1.47-1.2l.16-.8h-3.8Z"])));
const PersonLightbulb24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLightbulb24Regular', "24", ["M13.03 15.5c.05-.53.18-1.03.39-1.5H6.25C5.01 14 4 15 4 16.25v.58c0 .89.32 1.75.9 2.43C6.47 21.1 8.85 22 12 22c1.18 0 2.24-.13 3.2-.38l-.29-1.47c-.85.23-1.82.35-2.91.35-2.74 0-4.7-.74-5.96-2.21-.34-.4-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h6.78ZM17 7A5 5 0 1 0 7 7a5 5 0 0 0 10 0ZM8.5 7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM22 16a4 4 0 0 1-1.76 3.32l-.14.68h-4.2l-.14-.68A4 4 0 1 1 22 16Zm-5.9 5 .16.8c.14.7.76 1.2 1.47 1.2h.54c.72 0 1.33-.5 1.47-1.2l.16-.8h-3.8Z"])));
const PersonLightning16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLightning16Filled', "16", ["M7.12 11.92a1.5 1.5 0 0 0 .9 2c-.32.05-.66.08-1.02.08-3.14 0-5-2.03-5-4v-.5C2 8.67 2.67 8 3.5 8h5.25l-1.63 3.92ZM7 1.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5ZM8.5 13h1.75l-.59 2.36c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-1.1l.78-2.34a.5.5 0 0 0-.47-.66h-3.47a.5.5 0 0 0-.47.3l-2.08 5c-.14.34.1.7.46.7Z"])));
const PersonLightning16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLightning16Regular', "16", ["M7.09 13c.15.43.49.78.93.92-.32.05-.66.08-1.02.08-3.14 0-5-2.03-5-4v-.5C2 8.67 2.67 8 3.5 8h5.25l-.42 1H3.5a.5.5 0 0 0-.5.5v.5c0 1.44 1.43 3 4 3h.09ZM7 1.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5Zm0 1A1.75 1.75 0 1 0 7 6a1.75 1.75 0 0 0 0-3.5ZM8.5 13h1.75l-.59 2.36c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-1.1l.78-2.34a.5.5 0 0 0-.47-.66h-3.47a.5.5 0 0 0-.47.3l-2.08 5c-.14.34.1.7.46.7Z"])));
const PersonLightning20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLightning20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c.6 0 1.19-.04 1.75-.12l.22-.88h-.47a1.5 1.5 0 0 1-1.38-2.08L11.75 11H5.01Zm7.61 5c.33 0 .57.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.47a.5.5 0 0 0-.47.3l-2.08 5c-.14.34.1.7.46.7h1.11Z"])));
const PersonLightning20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLightning20Regular', "20", ["M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 13a2 2 0 0 1 2-2h6.75l-.42 1H5.01A1 1 0 0 0 4 13c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 10 17h1.97l-.22.88c-.56.08-1.15.12-1.75.12a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm9.61 3c.33 0 .57.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.47a.5.5 0 0 0-.47.3l-2.08 5c-.14.34.1.7.46.7h1.11Z"])));
const PersonLink16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink16Filled', "16", ["M5.98 13.92C3.46 13.54 2 11.75 2 10v-.5C2 8.67 2.67 8 3.5 8h5a3.5 3.5 0 0 0-2.52 5.92ZM7 1.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5ZM8.5 9a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1h-.5ZM12 9a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H12Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"])));
const PersonLink16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink16Regular', "16", ["M5.98 13.92C3.46 13.54 2 11.75 2 10v-.5C2 8.67 2.67 8 3.5 8h5c-.95 0-1.82.38-2.45 1H3.5a.5.5 0 0 0-.5.5v.5c0 1.06.78 2.19 2.21 2.7.17.46.43.88.77 1.22ZM7 1.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5Zm0 1A1.75 1.75 0 1 0 7 6a1.75 1.75 0 0 0 0-3.5ZM8.5 9a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1h-.5ZM12 9a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H12Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"])));
const PersonLink20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink20Filled', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8a9.14 9.14 0 0 0 5.2 1.2 3.5 3.5 0 0 1 3.17-5H16a2 2 0 0 0-2-2H4Zm8.5 3a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"])));
const PersonLink20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink20Regular', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8a9.14 9.14 0 0 0 5.2 1.2 3.48 3.48 0 0 1-.3-1H9a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2H4Zm8.5 3a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"])));
const PersonLink24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink24Filled', "24", ["M16.75 14c.78 0 1.47.4 1.88 1h-2.88a4.75 4.75 0 0 0-4.19 6.99L11 22c-3.42 0-5.94-1.07-7.49-3.24a2.75 2.75 0 0 1-.5-1.6v-.91C3 15 4 14 5.24 14h11.5ZM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm12 17.75A3.75 3.75 0 0 0 19.25 16h-.1a.75.75 0 0 0 .1 1.5h.15a2.25 2.25 0 0 1-.15 4.5l-.1.01a.75.75 0 0 0 .1 1.5v-.01h.2A3.75 3.75 0 0 0 23 19.74Zm-6.5-3a.75.75 0 0 0-.75-.75h-.2a3.75 3.75 0 0 0 .2 7.5h.1a.75.75 0 0 0-.1-1.5h-.15a2.25 2.25 0 0 1 .15-4.5h.1a.75.75 0 0 0 .65-.75Zm3.5 3a.75.75 0 0 0-.75-.75h-3.6a.75.75 0 0 0 .1 1.5h3.6a.75.75 0 0 0 .65-.75Z"])));
const PersonLink24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink24Regular', "24", ["M16.75 14c.78 0 1.47.4 1.88 1h-2.88c-.76 0-1.48.18-2.12.5H5.25a.75.75 0 0 0-.75.75v.58c0 .53.2 1.05.54 1.46C6.3 19.75 8.26 20.5 11 20.5h.06c.09.53.26 1.03.5 1.49L11 22c-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 0 1-.9-2.43v-.58C3 15 4.01 14 5.25 14h11.5ZM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm12 16.25A3.75 3.75 0 0 0 19.25 16h-.1a.75.75 0 0 0 .1 1.5h.15a2.25 2.25 0 0 1-.15 4.5l-.1.01a.75.75 0 0 0 .1 1.5v-.01h.2A3.75 3.75 0 0 0 23 19.74Zm-6.5-3a.75.75 0 0 0-.75-.75h-.2a3.75 3.75 0 0 0 .2 7.5h.1a.75.75 0 0 0-.1-1.5h-.15a2.25 2.25 0 0 1 .15-4.5h.1a.75.75 0 0 0 .65-.75Zm3.5 3a.75.75 0 0 0-.75-.75h-3.6a.75.75 0 0 0 .1 1.5h3.6a.75.75 0 0 0 .65-.75Z"])));
const PersonLink28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink28Filled', "28", ["M20 16a3 3 0 0 1 2.96 2.5h-5.21a4.75 4.75 0 0 0-3.89 7.48L13 26c-5.79 0-10-2.57-10-6.29V19a3 3 0 0 1 3-3h14ZM13 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm4.75 19a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5h-.5ZM17 23.25c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm6.25 2.25a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5h.5Z"])));
const PersonLink28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink28Regular', "28", ["M20 16a3 3 0 0 1 2.96 2.5H21.4a1.5 1.5 0 0 0-1.27-1H6c-.78 0-1.42.6-1.5 1.36v.85c0 2.68 3.39 4.79 8.5 4.79h.17c.14.54.38 1.04.7 1.48L13 26c-5.79 0-10-2.57-10-6.29V19a3 3 0 0 1 3-3h14ZM13 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM17.75 21a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5h-.5ZM17 23.25c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm6.25 2.25a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5h.5Z"])));
const PersonLink32Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink32Filled', "32", ["M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-8.5 2A3.5 3.5 0 0 0 3 21.5v.5c0 2.4 1.52 4.42 3.68 5.8a15.67 15.67 0 0 0 8.84 2.2A6 6 0 0 1 20 20h6c.23 0 .46.01.68.04A3.5 3.5 0 0 0 23.5 18h-17Zm15 4.5a1 1 0 0 0-1-1H20a4.5 4.5 0 1 0 0 9h.5a1 1 0 1 0 0-2H20a2.5 2.5 0 0 1 0-5h.5a1 1 0 0 0 1-1Zm4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5h-.5a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9h-.5Zm-5 3.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"])));
const PersonLink32Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink32Regular', "32", ["M22 9A7 7 0 1 1 8 9a7 7 0 0 1 14 0Zm-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0ZM6.5 18A3.5 3.5 0 0 0 3 21.5v.5c0 2.4 1.52 4.42 3.68 5.8a15.67 15.67 0 0 0 8.84 2.2 6 6 0 0 1-1.18-2.01 13.4 13.4 0 0 1-6.58-1.88C5.94 24.95 5 23.47 5 22v-.5c0-.83.67-1.5 1.5-1.5H26c.23 0 .46.01.68.04A3.5 3.5 0 0 0 23.5 18h-17Zm15 4.5a1 1 0 0 0-1-1H20a4.5 4.5 0 1 0 0 9h.5a1 1 0 1 0 0-2H20a2.5 2.5 0 0 1 0-5h.5a1 1 0 0 0 1-1Zm4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5h-.5a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9h-.5Zm-5 3.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"])));
const PersonLink48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink48Filled', "48", ["M24 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM12.25 28A4.25 4.25 0 0 0 8 32.25V33c0 3.76 1.94 6.57 4.92 8.38 2.73 1.66 6.33 2.5 10.21 2.6A8.4 8.4 0 0 1 22 39.76a8.13 8.13 0 0 1 8-8.25h9.93a4.25 4.25 0 0 0-4.18-3.5h-23.5ZM24 39.75c0-3.45 2.8-6.25 6.25-6.25h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 24 39.75Zm22 0c0-3.45-2.8-6.25-6.25-6.25h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5C43.2 46 46 43.2 46 39.75Zm-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25Z"])));
const PersonLink48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLink48Regular', "48", ["M24 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Zm-4.25 14A4.25 4.25 0 0 0 8 32.25V33c0 3.76 1.94 6.57 4.92 8.38 2.73 1.66 6.33 2.5 10.21 2.6a8.35 8.35 0 0 1-.96-2.54c-3.17-.2-5.92-.96-7.95-2.2-2.36-1.43-3.72-3.5-3.72-6.24v-.75c0-.97.78-1.75 1.75-1.75h23.5c.7 0 1.3.4 1.58 1h2.6a4.25 4.25 0 0 0-4.18-3.5h-23.5ZM24 39.75c0-3.45 2.8-6.25 6.25-6.25h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 24 39.75Zm22 0c0-3.45-2.8-6.25-6.25-6.25h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5C43.2 46 46 43.2 46 39.75Zm-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25Z"])));
const PersonLock16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLock16Filled', "16", ["M9.5 8v1h-.63C8.4 9 8 9.4 8 9.9v4.2c0 .5.4.9.88.9h5.24c.49 0 .88-.4.88-.9V9.9c0-.5-.4-.9-.88-.9h-.62V8a2 2 0 1 0-4 0Zm2-1a1 1 0 0 1 1 1v1h-2V8a1 1 0 0 1 1-1Zm0 5.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM7 14V9.9c0-.9.63-1.68 1.5-1.86V8h-5C2.67 8 2 8.67 2 9.5v.5c0 1.97 1.86 4 5 4Zm2.75-9.75a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Z"])));
const PersonLock16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLock16Regular', "16", ["M7 14v-1c-2.57 0-4-1.56-4-3v-.5c0-.28.22-.5.5-.5h3.72c.26-.48.72-.85 1.28-.96V8h-5C2.67 8 2 8.67 2 9.5v.5c0 1.97 1.86 4 5 4Zm2.75-9.75a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Zm-4.5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM9.5 8v1h-.63C8.4 9 8 9.4 8 9.9v4.2c0 .5.4.9.88.9h5.24c.49 0 .88-.4.88-.9V9.9c0-.5-.4-.9-.88-.9h-.62V8a2 2 0 1 0-4 0Zm2-1a1 1 0 0 1 1 1v1h-2V8a1 1 0 0 1 1-1Zm0 5.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"])));
const PersonLock20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLock20Filled', "20", ["M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h8.67a3 3 0 0 0-.17 1v.06A2 2 0 0 0 11 14v3.84c-.64.1-1.31.16-2 .16a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm11.5 0v-1a2 2 0 1 1 4 0v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5Zm1-1v1h2v-1a1 1 0 1 0-2 0Zm1.75 4a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"])));
const PersonLock20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLock20Regular', "20", ["M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 13a2 2 0 0 1 2-2h8.67a3 3 0 0 0-.17 1H4a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 9 17c.7 0 1.38-.06 2-.18v1.02c-.64.1-1.31.16-2 .16a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm11.5 0v-1a2 2 0 1 1 4 0v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5Zm1-1v1h2v-1a1 1 0 1 0-2 0Zm1.75 4a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"])));
const PersonLock24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLock24Filled', "24", ["M14 14.05V14H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c.71 0 1.39-.05 2.03-.14a2.51 2.51 0 0 1-.03-.36v-5a2.5 2.5 0 0 1 2-2.45ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm5 13v-1a2.5 2.5 0 0 1 5 0v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h.5Zm1.5-1v1h2v-1a1 1 0 1 0-2 0Zm2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"])));
const PersonLock24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonLock24Regular', "24", ["M14 14H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.71 0 1.39-.05 2.03-.14a2.53 2.53 0 0 1-.03-.36v-1.15c-.61.1-1.28.15-2 .15-2.74 0-4.7-.74-5.96-2.21-.34-.4-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75h7.96A2.5 2.5 0 0 1 14 14.05V14ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM15 15h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H20v-1a2.5 2.5 0 0 0-5 0v1Zm1.5-1a1 1 0 0 1 2 0v1h-2v-1Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"])));
const PersonMail16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMail16Filled', "16", ["M2 10c0 1.5 1.09 3.05 3 3.69V9c0-.36.1-.7.27-1H3.5C2.67 8 2 8.67 2 9.5v.5Zm5-8.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5Zm3.51 10.43L6.01 9.3c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43Zm.23 1.01 4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 6 13.5v-3.05l4.25 2.48c.15.09.33.1.49.01Z"])));
const PersonMail16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMail16Regular', "16", ["M2 10c0 1.5 1.09 3.05 3 3.69v-1.07c-1.3-.55-2-1.61-2-2.62v-.5c0-.28.22-.5.5-.5H5c0-.36.1-.7.27-1H3.5C2.67 8 2 8.67 2 9.5v.5Zm5-8.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5Zm0 1A1.75 1.75 0 1 0 7 6a1.75 1.75 0 0 0 0-3.5Zm3.51 9.43L6.01 9.3c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43Zm.23 1.01 4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 6 13.5v-3.05l4.25 2.48c.15.09.33.1.49.01Z"])));
const PersonMail20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMail20Filled', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18v-5c0-1.1.9-2 2-2H4Zm10.51 4.93-4.5-2.63c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43Zm.23 1.01 4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3.05l4.25 2.48c.15.09.33.1.49.01Z"])));
const PersonMail20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMail20Regular', "20", ["M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18v-1a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h5.27A2 2 0 0 1 11 11H4Zm10.51 4.93-4.5-2.63c.1-.73.73-1.3 1.49-1.3h6c.83 0 1.5.67 1.5 1.5l-4.49 2.43Zm.23 1.01 4.26-2.3v2.86c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3.05l4.25 2.48c.15.09.33.1.49.01Z"])));
const PersonMail24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMail24Filled', "24", ["M11 15.5c0-.56.19-1.08.5-1.5H5.25C4.01 14 3 15 3 16.25v.92c0 .57.18 1.13.51 1.6C5.06 20.92 7.58 22 11 22h.05a2.51 2.51 0 0 1-.05-.5v-6ZM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.51 16.93-5.5-3.2a2 2 0 0 1 2-1.73H21a2 2 0 0 1 2 1.97l-5.49 2.96Zm.23 1.01L23 17.11V21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4.13l5.25 3.06c.15.09.33.1.49.01Z"])));
const PersonMail24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMail24Regular', "24", ["M11 15.5c0-.56.19-1.08.5-1.5H5.25C4.01 14 3 15 3 16.25v.58c0 .89.32 1.75.9 2.43C5.47 21.1 7.85 22 11 22h.05a2.51 2.51 0 0 1-.05-.5v-1c-2.74 0-4.7-.74-5.96-2.21-.34-.4-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75H11ZM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm6.51 15.43-5.5-3.2a2 2 0 0 1 2-1.73H21a2 2 0 0 1 2 1.97l-5.49 2.96Zm.23 1.01L23 17.11V21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4.13l5.25 3.06c.15.09.33.1.49.01Z"])));
const PersonMail28Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMail28Filled', "28", ["M13.17 26a3 3 0 0 1-.17-1v-7c0-.77.29-1.47.76-2H6a3 3 0 0 0-3 3v.71C3 23.43 7.21 26 13 26h.17ZM19 8A6 6 0 1 0 7 8a6 6 0 0 0 12 0Zm-2.5 8a2.5 2.5 0 0 0-2.5 2.5v.2l6.5 3.24L27 18.7v-.19a2.5 2.5 0 0 0-2.5-2.5h-8ZM27 19.8l-6.28 3.15a.5.5 0 0 1-.44 0L14 19.8v4.69a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-4.7Z"])));
const PersonMail28Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMail28Regular', "28", ["M13 25a3 3 0 0 0 .17 1H13c-5.79 0-10-2.57-10-6.29V19a3 3 0 0 1 3-3h7.76c-.37.41-.62.93-.72 1.5H6c-.78 0-1.42.6-1.5 1.36v.85c0 2.68 3.39 4.79 8.5 4.79v.5Zm0-23a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm1 15a2.5 2.5 0 0 1 2.5-2.5h8a2.5 2.5 0 0 1 2.5 2.5v.2l-6.5 3.24L14 18.7v-.19Zm6.72 4.45L27 19.8v4.69a2.5 2.5 0 0 1-2.5 2.5h-8a2.5 2.5 0 0 1-2.5-2.5v-4.7l6.28 3.15c.14.07.3.07.44 0Z"])));
const PersonMail48Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMail48Filled', "48", ["M22 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM10.25 28A4.25 4.25 0 0 0 6 32.25V33c0 3.76 1.94 6.57 4.92 8.38C13.85 43.16 17.79 44 22 44V30c0-.73.2-1.41.54-2H10.25ZM24 31a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v.79l-11 5.1-11-5.1V31Zm11.42 7.9L46 34v9a3 3 0 0 1-3 3H27a3 3 0 0 1-3-3v-9l10.58 4.9a1 1 0 0 0 .84 0Z"])));
const PersonMail48Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMail48Regular', "48", ["M22 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Zm-4.25 14A4.25 4.25 0 0 0 6 32.25V33c0 3.76 1.94 6.57 4.92 8.38C13.85 43.16 17.79 44 22 44v-2.5c-3.93 0-7.37-.79-9.78-2.26C9.86 37.81 8.5 35.74 8.5 33v-.75c0-.97.78-1.75 1.75-1.75H22V30c0-.73.2-1.41.54-2H10.25ZM24 31a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v.79l-11 5.1-11-5.1V31Zm11.42 7.9L46 34v9a3 3 0 0 1-3 3H27a3 3 0 0 1-3-3v-9l10.58 4.9a1 1 0 0 0 .84 0Z"])));
const PersonMoney20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMoney20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A8.46 8.46 0 0 0 9 17.96V14c0-1.1.9-2 2-2h5.73A2 2 0 0 0 15 11H5Zm14 3.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5Zm0-3a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"])));
const PersonMoney20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMoney20Regular', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A8.46 8.46 0 0 0 9 17.96v-1a7.42 7.42 0 0 1-3.33-1A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h11.73A2 2 0 0 0 15 11H5Zm14 3.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5Zm0-3a.5.5 0 0 1-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1Zm-6.5-.5a.5.5 0 0 1-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1Zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"])));
const PersonMoney24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMoney24Filled', "24", ["M17.75 14c.78 0 1.47.4 1.87 1H13.5a2.5 2.5 0 0 0-2.5 2.5v4c0 .16.02.32.04.47-2.93-.18-5.13-1.25-6.53-3.2a2.75 2.75 0 0 1-.5-1.6v-.92C4 15 5 14 6.24 14h11.5ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 15.5c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-4Zm10 .5a1 1 0 0 1-1-1h-1c0 1.1.9 2 2 2v-1Zm0 2a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1v-1Zm-8-3a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2h-1Zm1 5a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1h1Zm4.25-2.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Z"])));
const PersonMoney24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonMoney24Regular', "24", ["M17.75 14c.78 0 1.47.4 1.87 1H13.5c-.56 0-1.08.19-1.5.5H6.25a.75.75 0 0 0-.75.75v.58c0 .53.2 1.05.54 1.46 1.1 1.28 2.74 2.01 4.96 2.18v1.03c0 .16.02.32.04.47-2.67-.17-4.73-1.06-6.14-2.7a3.75 3.75 0 0 1-.9-2.44v-.58C4 15 5.01 14 6.25 14h11.5ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 14c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-4Zm10 .5a1 1 0 0 1-1-1h-1c0 1.1.9 2 2 2v-1Zm0 2a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1v-1Zm-8-3a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2h-1Zm1 5a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1h1Zm4.25-2.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Z"])));
const PersonNote16Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonNote16Filled', "16", ["M6 10v3.93c-2.53-.38-4-2.18-4-3.93v-.5C2 8.67 2.67 8 3.5 8h3.26A2.99 2.99 0 0 0 6 10Zm1-8.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5ZM9 8a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H9Zm.5 5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1 0-1ZM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z"])));
const PersonNote16Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonNote16Regular', "16", ["M6 12.91v1.02c-2.53-.38-4-2.18-4-3.93v-.5C2 8.67 2.67 8 3.5 8h3.26a3 3 0 0 0-.59 1H3.5a.5.5 0 0 0-.5.5v.5c0 1.24 1.06 2.57 3 2.91ZM7 1.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5Zm0 1A1.75 1.75 0 1 0 7 6a1.75 1.75 0 0 0 0-3.5ZM9 8a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H9Zm.5 5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1 0-1ZM9 10.5c0-.28.22-.5.5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z"])));
const PersonNote20Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonNote20Filled', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8 1.1.69 2.5 1.07 4.03 1.17A3 3 0 0 1 9 17v-4c0-.77.29-1.47.76-2H5.01Zm5 2c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"])));
const PersonNote20Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonNote20Regular', "20", ["M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8 1.1.69 2.5 1.07 4.03 1.17A3 3 0 0 1 9 17v-.04a7.42 7.42 0 0 1-3.33-1A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h4.17a3 3 0 0 1 .6-1H5Zm5 2c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"])));
const PersonNote24Filled = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonNote24Filled', "24", ["M11 15a3 3 0 0 1 .17-1H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c.4 0 .78-.01 1.16-.04A3 3 0 0 1 11 21v-6ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm2 13c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-6Zm2.5 1a.5.5 0 1 0 0 1h6a.5.5 0 1 0 0-1h-6Zm0 3a.5.5 0 1 0 0 1h6a.5.5 0 1 0 0-1h-6Z"])));
const PersonNote24Regular = /*#__PURE__*/(/* unused pure expression or super */ null && (createFluentIcon('PersonNote24Regular', "24", ["M11 15a3 3 0 0 1 .17-1H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.4 0 .78-.01 1.16-.04A3 3 0 0 1 11 21v-.53c-.32.02-.65.03-1 .03-2.74 0-4.7-.74-5.96-2.21-.34-.4-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75H11V15ZM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM12 15c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-6Zm2.5 1a.5.5 0 1 0 0 1h6a.5.5 0 1 0 0-1h-6Zm0 3a.5.5 0 1 0 0 1h6a.5.5 0 1 0 0-1h-6Z"])));

/***/ }),

/***/ 130:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

__webpack_require__(3985);
var store = __webpack_require__(4858);
var isDevToolsEnabled = __webpack_require__(3839);
var reduceToClassNameForSlots = __webpack_require__(2047);

/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms & DOM insertion.
 *
 * @internal
 */
function __css(classesMapBySlot) {
  let ltrClassNamesForSlots = null;
  let rtlClassNamesForSlots = null;
  function computeClasses(options) {
    const {
      dir
    } = options;
    const isLTR = dir === 'ltr';
    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = reduceToClassNameForSlots.reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = reduceToClassNameForSlots.reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    }
    const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
    if (false) {}
    return classNamesForSlots;
  }
  return computeClasses;
}

exports.__css = __css;
//# sourceMappingURL=__css.cjs.js.map


/***/ }),

/***/ 5903:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var constants = __webpack_require__(3985);

/**
 * @internal
 */
function __resetCSS(ltrClassName, rtlClassName) {
  function computeClassName(options) {
    const {
      dir
    } = options;
    const className = dir === 'ltr' ? ltrClassName : rtlClassName || ltrClassName;
    if (false) {}
    return className;
  }
  return computeClassName;
}

exports.__resetCSS = __resetCSS;
//# sourceMappingURL=__resetCSS.cjs.js.map


/***/ }),

/***/ 3189:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var constants = __webpack_require__(3985);

/**
 * @internal
 */
function __resetStyles(ltrClassName, rtlClassName, cssRules) {
  const insertionCache = {};
  function computeClassName(options) {
    const {
      dir,
      renderer
    } = options;
    const isLTR = dir === 'ltr';
    // As RTL classes are different they should have a different cache key for insertion
    const rendererId = isLTR ? renderer.id : renderer.id + 'r';
    if (insertionCache[rendererId] === undefined) {
      renderer.insertCSSRules({
        r: cssRules
      });
      insertionCache[rendererId] = true;
    }
    const className = isLTR ? ltrClassName : rtlClassName || ltrClassName;
    if (false) {}
    return className;
  }
  return computeClassName;
}

exports.__resetStyles = __resetStyles;
//# sourceMappingURL=__resetStyles.cjs.js.map


/***/ }),

/***/ 7282:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

__webpack_require__(3985);
var store = __webpack_require__(4858);
var isDevToolsEnabled = __webpack_require__(3839);
var getSourceURLfromError = __webpack_require__(8257);
var reduceToClassNameForSlots = __webpack_require__(2047);

/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
function __styles(classesMapBySlot, cssRules) {
  const insertionCache = {};
  let ltrClassNamesForSlots = null;
  let rtlClassNamesForSlots = null;
  let sourceURL;
  if (false) {}
  function computeClasses(options) {
    const {
      dir,
      renderer
    } = options;
    const isLTR = dir === 'ltr';
    // As RTL classes are different they should have a different cache key for insertion
    const rendererId = isLTR ? renderer.id : renderer.id + 'r';
    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = reduceToClassNameForSlots.reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = reduceToClassNameForSlots.reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    }
    if (insertionCache[rendererId] === undefined) {
      renderer.insertCSSRules(cssRules);
      insertionCache[rendererId] = true;
    }
    const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
    if (false) {}
    return classNamesForSlots;
  }
  return computeClasses;
}

exports.__styles = __styles;
//# sourceMappingURL=__styles.cjs.js.map


/***/ }),

/***/ 3985:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

// ----
// Heads up!
// These constants are global and will be shared between Griffel instances.
// Any change in them should happen only in a MAJOR version. If it happens,
// please change "__NAMESPACE_PREFIX__" to include a version.
const __GLOBAL__ = typeof window === 'undefined' ? global : window;
const __NAMESPACE_PREFIX__ = '@griffel/';
function getGlobalVar(name, defaultValue) {
  if (!__GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)]) {
    __GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)] = defaultValue;
  }
  return __GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)];
}
/** @internal */
const DEBUG_RESET_CLASSES = /*#__PURE__*/getGlobalVar('DEBUG_RESET_CLASSES', {});
/** @internal */
const DEFINITION_LOOKUP_TABLE = /*#__PURE__*/getGlobalVar('DEFINITION_LOOKUP_TABLE', {});
// ----
/** @internal */
const DATA_BUCKET_ATTR = 'data-make-styles-bucket';
/** @internal */
const HASH_PREFIX = 'f';
/** @internal */
const RESET_HASH_PREFIX = 'r';
/** @internal */
const SEQUENCE_HASH_LENGTH = 7;
/** @internal */
const SEQUENCE_PREFIX = '___';
/** @internal */
const DEBUG_SEQUENCE_SEPARATOR = '_';
/** @internal */
const SEQUENCE_SIZE =  true ? SEQUENCE_PREFIX.length + SEQUENCE_HASH_LENGTH : 0;
// indexes for values in LookupItem tuple
/** @internal */
const LOOKUP_DEFINITIONS_INDEX = 0;
/** @internal */
const LOOKUP_DIR_INDEX = 1;
// This collection is a map simply for faster access when checking if a CSS property is unsupported
/** @internal */
const UNSUPPORTED_CSS_PROPERTIES = {
  all: 1,
  animation: 1,
  background: 1,
  backgroundPosition: 1,
  border: 1,
  borderBlock: 1,
  borderBlockEnd: 1,
  borderBlockStart: 1,
  borderBottom: 1,
  borderColor: 1,
  borderImage: 1,
  borderInline: 1,
  borderInlineEnd: 1,
  borderInlineStart: 1,
  borderLeft: 1,
  borderRadius: 1,
  borderRight: 1,
  borderStyle: 1,
  borderTop: 1,
  borderWidth: 1,
  caret: 1,
  columns: 1,
  columnRule: 1,
  containIntrinsicSize: 1,
  container: 1,
  flex: 1,
  flexFlow: 1,
  font: 1,
  gap: 1,
  grid: 1,
  gridArea: 1,
  gridColumn: 1,
  gridRow: 1,
  gridTemplate: 1,
  inset: 1,
  insetBlock: 1,
  insetInline: 1,
  lineClamp: 1,
  listStyle: 1,
  margin: 1,
  marginBlock: 1,
  marginInline: 1,
  mask: 1,
  maskBorder: 1,
  motion: 1,
  offset: 1,
  outline: 1,
  overflow: 1,
  overscrollBehavior: 1,
  padding: 1,
  paddingBlock: 1,
  paddingInline: 1,
  placeItems: 1,
  placeContent: 1,
  placeSelf: 1,
  scrollMargin: 1,
  scrollMarginBlock: 1,
  scrollMarginInline: 1,
  scrollPadding: 1,
  scrollPaddingBlock: 1,
  scrollPaddingInline: 1,
  scrollSnapMargin: 1,
  scrollTimeline: 1,
  textDecoration: 1,
  textEmphasis: 1,
  transition: 1
};

exports.DATA_BUCKET_ATTR = DATA_BUCKET_ATTR;
exports.DEBUG_RESET_CLASSES = DEBUG_RESET_CLASSES;
exports.DEBUG_SEQUENCE_SEPARATOR = DEBUG_SEQUENCE_SEPARATOR;
exports.DEFINITION_LOOKUP_TABLE = DEFINITION_LOOKUP_TABLE;
exports.HASH_PREFIX = HASH_PREFIX;
exports.LOOKUP_DEFINITIONS_INDEX = LOOKUP_DEFINITIONS_INDEX;
exports.LOOKUP_DIR_INDEX = LOOKUP_DIR_INDEX;
exports.RESET_HASH_PREFIX = RESET_HASH_PREFIX;
exports.SEQUENCE_HASH_LENGTH = SEQUENCE_HASH_LENGTH;
exports.SEQUENCE_PREFIX = SEQUENCE_PREFIX;
exports.SEQUENCE_SIZE = SEQUENCE_SIZE;
exports.UNSUPPORTED_CSS_PROPERTIES = UNSUPPORTED_CSS_PROPERTIES;
//# sourceMappingURL=constants.cjs.js.map


/***/ }),

/***/ 4960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var constants = __webpack_require__(3985);
var store = __webpack_require__(4858);
var utils = __webpack_require__(9302);

function getDebugTree(debugSequenceHash, parentNode) {
  const lookupItem = constants.DEFINITION_LOOKUP_TABLE[debugSequenceHash];
  if (lookupItem === undefined) {
    return undefined;
  }
  const parentLookupItem = parentNode ? constants.DEFINITION_LOOKUP_TABLE[parentNode.sequenceHash] : undefined;
  const debugClassNames = utils.getDebugClassNames(lookupItem, parentLookupItem, parentNode === null || parentNode === void 0 ? void 0 : parentNode.debugClassNames, parentNode === null || parentNode === void 0 ? void 0 : parentNode.children);
  const node = {
    sequenceHash: debugSequenceHash,
    direction: lookupItem[1],
    children: [],
    debugClassNames
  };
  const childrenSequences = store.debugData.getChildrenSequences(node.sequenceHash);
  childrenSequences.reverse() // first process the overriding children that are merged last
  .forEach(sequence => {
    const child = getDebugTree(sequence, node);
    if (child) {
      node.children.push(child);
    }
  });
  // if it's leaf (makeStyle node), get css rules
  if (!node.children.length) {
    node.rules = {};
    node.debugClassNames.forEach(({
      className
    }) => {
      const mapData = store.debugData.getSequenceDetails(debugSequenceHash);
      if (mapData) {
        node.slot = mapData.slotName;
        node.sourceURL = mapData.sourceURL;
      }
      const cssRule = store.debugData.getCSSRules().find(cssRule => {
        return cssRule.includes(className);
      });
      node.rules[className] = cssRule;
    });
  }
  return node;
}

exports.getDebugTree = getDebugTree;
//# sourceMappingURL=getDebugTree.cjs.js.map


/***/ }),

/***/ 8257:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var stackTrace = __webpack_require__(9098);

function getSourceURLfromError() {
  const stacks = String(new Error().stack).split('\n');
  const userMakeStyleCallLine = findUserMakeStyleCallInStacks(stacks);
  if (userMakeStyleCallLine === undefined) {
    return undefined;
  }
  const result = stackTrace.parseStackTraceLine(userMakeStyleCallLine);
  return result === null || result === void 0 ? void 0 : result.loc;
}
function findUserMakeStyleCallInStacks(stacks) {
  for (let i = stacks.length - 1; i >= 0; --i) {
    if (stacks[i].includes('at getSourceURLfromError')) {
      // The error stacks look like:
      //   getSourceURLfromError
      //   makeStyles/__styles in griffel core
      //   makeStyles/__styles in griffel react
      //   user makeStyles call
      return stacks[i + 3];
    }
  }
  return undefined;
}

exports.getSourceURLfromError = getSourceURLfromError;
//# sourceMappingURL=getSourceURLfromError.cjs.js.map


/***/ }),

/***/ 2626:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var constants = __webpack_require__(3985);
var getDebugTree = __webpack_require__(4960);

function injectDevTools(document) {
  const window = document.defaultView;
  if (!window || window.__GRIFFEL_DEVTOOLS__) {
    return;
  }
  const devtools = {
    getInfo: element => {
      const rootDebugSequenceHash = Array.from(element.classList).find(className => className.startsWith(constants.SEQUENCE_PREFIX));
      if (rootDebugSequenceHash === undefined) {
        return undefined;
      }
      return getDebugTree.getDebugTree(rootDebugSequenceHash);
    }
  };
  Object.defineProperty(window, '__GRIFFEL_DEVTOOLS__', {
    configurable: false,
    enumerable: false,
    get() {
      return devtools;
    }
  });
}

exports.injectDevTools = injectDevTools;
//# sourceMappingURL=injectDevTools.cjs.js.map


/***/ }),

/***/ 3839:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const isDevToolsEnabled = /*#__PURE__*/(() => {
  var _a;
  // Accessing "window.sessionStorage" causes an exception when third party cookies are blocked
  // https://stackoverflow.com/questions/30481516/iframe-in-chrome-error-failed-to-read-localstorage-from-window-access-deni
  try {
    return Boolean(typeof window !== 'undefined' && ((_a = window.sessionStorage) === null || _a === void 0 ? void 0 : _a.getItem('__GRIFFEL_DEVTOOLS__')));
  } catch (e) {
    return false;
  }
})();

exports.isDevToolsEnabled = isDevToolsEnabled;
//# sourceMappingURL=isDevToolsEnabled.cjs.js.map


/***/ }),

/***/ 9098:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

// TODO: duplicated from https://github.com/lahmatiy/react-render-tracker/blob/main/src/publisher/react-integration/utils/stackTrace.ts
// once it is published as a standalone npm package, remove this file
// Adopted version of StackTrace-Parser
// https://github.com/errwischt/stacktrace-parser/blob/master/src/stack-trace-parser.js
const UNKNOWN_FUNCTION = '<unknown>';
function parseStackTraceLine(line) {
  return parseChrome(line) || parseGecko(line) || parseJSC(line);
}
const chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)?\)?\s*$/i;
const chromeRe2 = /^\s*at ()((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)\s*$/i;
const chromeEvalRe = /\((\S*)\)/;
function parseChrome(line) {
  const parts = chromeRe.exec(line) || chromeRe2.exec(line);
  if (!parts) {
    return null;
  }
  let loc = parts[2];
  const isNative = loc && loc.indexOf('native') === 0; // start of line
  const isEval = loc && loc.indexOf('eval') === 0; // start of line
  const submatch = chromeEvalRe.exec(loc);
  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line/column number
    loc = submatch[1]; // url
  }

  return {
    loc: !isNative ? parts[2] : null,
    name: parts[1] || UNKNOWN_FUNCTION
  };
}
const geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)\s*$/i;
const geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function parseGecko(line) {
  const parts = geckoRe.exec(line);
  if (!parts) {
    return null;
  }
  let loc = parts[3];
  const isEval = loc && loc.indexOf(' > eval') > -1;
  const submatch = geckoEvalRe.exec(loc);
  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line number
    loc = submatch[1];
  }
  return {
    loc: parts[3],
    name: parts[1] || UNKNOWN_FUNCTION
  };
}
const javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?)\s*$/i;
function parseJSC(line) {
  const parts = javaScriptCoreRe.exec(line);
  if (!parts) {
    return null;
  }
  return {
    loc: parts[3],
    name: parts[1] || UNKNOWN_FUNCTION
  };
}

exports.parseStackTraceLine = parseStackTraceLine;
//# sourceMappingURL=stackTrace.cjs.js.map


/***/ }),

/***/ 4858:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var constants = __webpack_require__(3985);
var mergeClasses = __webpack_require__(5846);

const sequenceDetails = {};
const cssRules = /*#__PURE__*/new Set();
const debugData = {
  getChildrenSequences: debugSequenceHash => {
    const key = Object.keys(mergeClasses.mergeClassesCachedResults).find(key => mergeClasses.mergeClassesCachedResults[key].startsWith(debugSequenceHash));
    if (key) {
      // key of the mergeClasses cache contains merge order
      return key.split(constants.SEQUENCE_PREFIX).filter(sequence => sequence.length).map(sequence => constants.SEQUENCE_PREFIX + sequence);
    }
    return [];
  },
  addCSSRule: rule => {
    cssRules.add(rule);
  },
  addSequenceDetails: (classNamesForSlots, sourceURL) => {
    Object.entries(classNamesForSlots).forEach(([slotName, sequenceHash]) => {
      sequenceDetails[sequenceHash.substring(0, constants.SEQUENCE_SIZE)] = {
        slotName,
        sourceURL
      };
    });
  },
  getCSSRules: () => {
    return Array.from(cssRules);
  },
  getSequenceDetails: sequenceHash => {
    return sequenceDetails[sequenceHash];
  }
};

exports.debugData = debugData;
//# sourceMappingURL=store.cjs.js.map


/***/ }),

/***/ 9302:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function getDirectionalClassName(classes, direction) {
  return Array.isArray(classes) ? direction === 'rtl' ? classes[1] : classes[0] : classes;
}
function getDebugClassNames(lookupItem, parentLookupItem, parentDebugClassNames, overridingSiblings) {
  const classesMapping = lookupItem[0];
  const direction = lookupItem[1];
  return Object.entries(classesMapping).map(([propertyHash, classes]) => {
    const className = getDirectionalClassName(classes, direction);
    let overriddenBy;
    if (parentDebugClassNames && parentLookupItem) {
      const matching = parentDebugClassNames.find(({
        className: parentClassName
      }) => parentClassName === className);
      if (!matching && parentLookupItem[0][propertyHash]) {
        // parent node does not have current className (style), but has current selector:
        // style is overriden in current merging by another rule in sibling node
        overriddenBy = getDirectionalClassName(parentLookupItem[0][propertyHash], parentLookupItem[1]);
      } else if (matching && parentLookupItem[0][propertyHash]) {
        // parent node has current className (style), and has current selector:
        // case 1. style is not overriden during current merging; it may be overriden in higher level of merging
        // case 2. style is overriden in current merging by exactly the same rule in sibling nodes
        const siblingHasSameRule = overridingSiblings ? overridingSiblings.filter(({
          debugClassNames
        }) => debugClassNames.filter(({
          className: siblingClassName
        }) => siblingClassName === className).length > 0).length > 0 : false;
        overriddenBy = siblingHasSameRule ? matching.className // case 2
        : matching.overriddenBy; // case 1
      } else if (!matching && !parentLookupItem[0][propertyHash]) {
        // parent node does not have current className (style), and does not have current selector:
        // this case is not possible
        overriddenBy = undefined;
      } else if (matching && !parentLookupItem[0][propertyHash]) {
        // parent node has current className (style), but does not have current selector:
        // this case is not possible
        overriddenBy = undefined;
      }
    }
    return {
      className,
      overriddenBy
    };
  });
}

exports.getDebugClassNames = getDebugClassNames;
//# sourceMappingURL=utils.cjs.js.map


/***/ }),

/***/ 4402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var border = __webpack_require__(9395);
var borderLeft = __webpack_require__(343);
var borderBottom = __webpack_require__(2403);
var borderRight = __webpack_require__(145);
var borderTop = __webpack_require__(6800);
var borderColor = __webpack_require__(614);
var borderStyle = __webpack_require__(9618);
var borderRadius = __webpack_require__(1155);
var borderWidth = __webpack_require__(4439);
var flex = __webpack_require__(802);
var gap = __webpack_require__(5234);
var gridArea = __webpack_require__(8143);
var margin = __webpack_require__(718);
var marginBlock = __webpack_require__(2707);
var marginInline = __webpack_require__(2238);
var padding = __webpack_require__(5626);
var paddingBlock = __webpack_require__(8533);
var paddingInline = __webpack_require__(402);
var overflow = __webpack_require__(553);
var inset = __webpack_require__(3249);
var outline = __webpack_require__(9591);
var transition = __webpack_require__(8986);
var createDOMRenderer = __webpack_require__(4846);
var rehydrateRendererCache = __webpack_require__(7931);
var mergeClasses = __webpack_require__(5846);
var makeStyles = __webpack_require__(3907);
var makeStaticStyles = __webpack_require__(1499);
var makeResetStyles = __webpack_require__(3654);
var resolveStyleRulesForSlots = __webpack_require__(7947);
var __css = __webpack_require__(130);
var __styles = __webpack_require__(7282);
var __resetCSS = __webpack_require__(5903);
var __resetStyles = __webpack_require__(3189);
var normalizeCSSBucketEntry = __webpack_require__(8926);
var getStyleSheetForBucket = __webpack_require__(1572);
var getStyleBucketName = __webpack_require__(7405);
var reduceToClassNameForSlots = __webpack_require__(2047);
var resolveStyleRules = __webpack_require__(7797);
var resolveResetStyleRules = __webpack_require__(4047);
var constants = __webpack_require__(3985);

// This should be just "export * as shorthands from "
const shorthands = {
  border: border.border,
  borderLeft: borderLeft.borderLeft,
  borderBottom: borderBottom.borderBottom,
  borderRight: borderRight.borderRight,
  borderTop: borderTop.borderTop,
  borderColor: borderColor.borderColor,
  borderStyle: borderStyle.borderStyle,
  borderRadius: borderRadius.borderRadius,
  borderWidth: borderWidth.borderWidth,
  flex: flex.flex,
  gap: gap.gap,
  gridArea: gridArea.gridArea,
  margin: margin.margin,
  marginBlock: marginBlock.marginBlock,
  marginInline: marginInline.marginInline,
  padding: padding.padding,
  paddingBlock: paddingBlock.paddingBlock,
  paddingInline: paddingInline.paddingInline,
  overflow: overflow.overflow,
  inset: inset.inset,
  outline: outline.outline,
  transition: transition.transition
};

exports.createDOMRenderer = createDOMRenderer.createDOMRenderer;
exports.defaultCompareMediaQueries = createDOMRenderer.defaultCompareMediaQueries;
exports.rehydrateRendererCache = rehydrateRendererCache.rehydrateRendererCache;
exports.mergeClasses = mergeClasses.mergeClasses;
exports.makeStyles = makeStyles.makeStyles;
exports.makeStaticStyles = makeStaticStyles.makeStaticStyles;
exports.makeResetStyles = makeResetStyles.makeResetStyles;
exports.resolveStyleRulesForSlots = resolveStyleRulesForSlots.resolveStyleRulesForSlots;
exports.__css = __css.__css;
exports.__styles = __styles.__styles;
exports.__resetCSS = __resetCSS.__resetCSS;
exports.__resetStyles = __resetStyles.__resetStyles;
exports.normalizeCSSBucketEntry = normalizeCSSBucketEntry.normalizeCSSBucketEntry;
exports.styleBucketOrdering = getStyleSheetForBucket.styleBucketOrdering;
exports.getStyleBucketName = getStyleBucketName.getStyleBucketName;
exports.reduceToClassNameForSlots = reduceToClassNameForSlots.reduceToClassNameForSlots;
exports.resolveStyleRules = resolveStyleRules.resolveStyleRules;
exports.resolveResetStyleRules = resolveResetStyleRules.resolveResetStyleRules;
exports.DATA_BUCKET_ATTR = constants.DATA_BUCKET_ATTR;
exports.DEBUG_RESET_CLASSES = constants.DEBUG_RESET_CLASSES;
exports.DEBUG_SEQUENCE_SEPARATOR = constants.DEBUG_SEQUENCE_SEPARATOR;
exports.DEFINITION_LOOKUP_TABLE = constants.DEFINITION_LOOKUP_TABLE;
exports.HASH_PREFIX = constants.HASH_PREFIX;
exports.LOOKUP_DEFINITIONS_INDEX = constants.LOOKUP_DEFINITIONS_INDEX;
exports.LOOKUP_DIR_INDEX = constants.LOOKUP_DIR_INDEX;
exports.RESET_HASH_PREFIX = constants.RESET_HASH_PREFIX;
exports.SEQUENCE_HASH_LENGTH = constants.SEQUENCE_HASH_LENGTH;
exports.SEQUENCE_PREFIX = constants.SEQUENCE_PREFIX;
exports.SEQUENCE_SIZE = constants.SEQUENCE_SIZE;
exports.UNSUPPORTED_CSS_PROPERTIES = constants.UNSUPPORTED_CSS_PROPERTIES;
exports.shorthands = shorthands;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ 3654:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var constants = __webpack_require__(3985);
var resolveResetStyleRules = __webpack_require__(4047);

function makeResetStyles(styles) {
  const insertionCache = {};
  let ltrClassName = null;
  let rtlClassName = null;
  let cssRules = null;
  function computeClassName(options) {
    const {
      dir,
      renderer
    } = options;
    if (ltrClassName === null) {
      [ltrClassName, rtlClassName, cssRules] = resolveResetStyleRules.resolveResetStyleRules(styles);
    }
    const isLTR = dir === 'ltr';
    // As RTL classes are different they should have a different cache key for insertion
    const rendererId = isLTR ? renderer.id : renderer.id + 'r';
    if (insertionCache[rendererId] === undefined) {
      renderer.insertCSSRules({
        r: cssRules
      });
      insertionCache[rendererId] = true;
    }
    const className = isLTR ? ltrClassName : rtlClassName || ltrClassName;
    if (false) {}
    return className;
  }
  return computeClassName;
}

exports.makeResetStyles = makeResetStyles;
//# sourceMappingURL=makeResetStyles.cjs.js.map


/***/ }),

/***/ 1499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var resolveStaticStyleRules = __webpack_require__(5914);

/**
 * Register static css.
 * @param styles - styles object or string.
 */
function makeStaticStyles(styles) {
  const styleCache = {};
  const stylesSet = Array.isArray(styles) ? styles : [styles];
  function useStaticStyles(options) {
    const cacheKey = options.renderer.id;
    if (styleCache[cacheKey]) {
      return;
    }
    for (const styleRules of stylesSet) {
      options.renderer.insertCSSRules(resolveStaticStyleRules.resolveStaticStyleRules(styleRules));
    }
    styleCache[cacheKey] = true;
  }
  return useStaticStyles;
}

exports.makeStaticStyles = makeStaticStyles;
//# sourceMappingURL=makeStaticStyles.cjs.js.map


/***/ }),

/***/ 3907:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

__webpack_require__(3985);
var store = __webpack_require__(4858);
var isDevToolsEnabled = __webpack_require__(3839);
var getSourceURLfromError = __webpack_require__(8257);
var resolveStyleRulesForSlots = __webpack_require__(7947);
var reduceToClassNameForSlots = __webpack_require__(2047);

function makeStyles(stylesBySlots) {
  const insertionCache = {};
  let classesMapBySlot = null;
  let cssRules = null;
  let ltrClassNamesForSlots = null;
  let rtlClassNamesForSlots = null;
  let sourceURL;
  if (false) {}
  function computeClasses(options) {
    const {
      dir,
      renderer
    } = options;
    if (classesMapBySlot === null) {
      [classesMapBySlot, cssRules] = resolveStyleRulesForSlots.resolveStyleRulesForSlots(stylesBySlots);
    }
    const isLTR = dir === 'ltr';
    // As RTL classes are different they should have a different cache key for insertion
    const rendererId = isLTR ? renderer.id : renderer.id + 'r';
    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = reduceToClassNameForSlots.reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = reduceToClassNameForSlots.reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    }
    if (insertionCache[rendererId] === undefined) {
      renderer.insertCSSRules(cssRules);
      insertionCache[rendererId] = true;
    }
    const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
    if (false) {}
    return classNamesForSlots;
  }
  return computeClasses;
}

exports.makeStyles = makeStyles;
//# sourceMappingURL=makeStyles.cjs.js.map


/***/ }),

/***/ 5846:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var constants = __webpack_require__(3985);
var hashSequence = __webpack_require__(5288);
var reduceToClassNameForSlots = __webpack_require__(2047);

// Contains a mapping of previously resolved sequences of atomic classnames
const mergeClassesCachedResults = {};
function mergeClasses() {
  // arguments are parsed manually to avoid double loops as TS & Babel transforms rest via an additional loop
  // @see https://babeljs.io/docs/en/babel-plugin-transform-parameters
  /* eslint-disable prefer-rest-params */
  let dir = null;
  let resultClassName = '';
  // Is used as a cache key to avoid object merging
  let sequenceMatch = '';
  const sequencesIds = new Array(arguments.length);
  let containsResetClassName = '';
  for (let i = 0; i < arguments.length; i++) {
    const className = arguments[i];
    if (typeof className === 'string' && className !== '') {
      // All classes generated by `makeStyles()` are prefixed by a sequence hash, this allows to identify class sets
      // without parsing each className in a string
      const sequenceIndex = className.indexOf(constants.SEQUENCE_PREFIX);
      if (sequenceIndex === -1) {
        if (false) {}
        resultClassName += className + ' ';
      } else {
        const sequenceId = className.substr(sequenceIndex, constants.SEQUENCE_SIZE);
        // Handles a case with mixed classnames, i.e. "ui-button ATOMIC_CLASSES"
        if (sequenceIndex > 0) {
          resultClassName += className.slice(0, sequenceIndex);
        }
        sequenceMatch += sequenceId;
        sequencesIds[i] = sequenceId;
      }
      if (false) {}
    }
  }
  // .slice() there allows to avoid trailing space for non-atomic classes
  // "ui-button ui-flex " => "ui-button ui-flex"
  if (sequenceMatch === '') {
    return resultClassName.slice(0, -1);
  }
  // It's safe to reuse results to avoid continuous merging as results are stable
  // "__seq1 ... __seq2 ..." => "__seq12 ..."
  const mergeClassesResult = mergeClassesCachedResults[sequenceMatch];
  if (mergeClassesResult !== undefined) {
    return resultClassName + mergeClassesResult;
  }
  const sequenceMappings = [];
  for (let i = 0; i < arguments.length; i++) {
    const sequenceId = sequencesIds[i];
    if (sequenceId) {
      const sequenceMapping = constants.DEFINITION_LOOKUP_TABLE[sequenceId];
      if (sequenceMapping) {
        sequenceMappings.push(sequenceMapping[constants.LOOKUP_DEFINITIONS_INDEX]);
        if (false) {}
        dir = sequenceMapping[constants.LOOKUP_DIR_INDEX];
      } else {
        if (false) {}
      }
    }
  }
  // eslint-disable-next-line prefer-spread
  const resultDefinitions = Object.assign.apply(Object,
  // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
  [{}].concat(sequenceMappings));
  let atomicClassNames = reduceToClassNameForSlots.reduceToClassName(resultDefinitions, dir);
  // Each merge of classes generates a new sequence of atomic classes that needs to be registered
  const newSequenceHash = hashSequence.hashSequence(atomicClassNames, dir, sequencesIds);
  atomicClassNames = newSequenceHash + ' ' + atomicClassNames;
  mergeClassesCachedResults[sequenceMatch] = atomicClassNames;
  constants.DEFINITION_LOOKUP_TABLE[newSequenceHash] = [resultDefinitions, dir];
  return resultClassName + atomicClassNames;
}

exports.mergeClasses = mergeClasses;
exports.mergeClassesCachedResults = mergeClassesCachedResults;
//# sourceMappingURL=mergeClasses.cjs.js.map


/***/ }),

/***/ 4846:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var injectDevTools = __webpack_require__(2626);
var isDevToolsEnabled = __webpack_require__(3839);
var store = __webpack_require__(4858);
var normalizeCSSBucketEntry = __webpack_require__(8926);
var getStyleSheetForBucket = __webpack_require__(1572);

let lastIndex = 0;
/** @internal */
const defaultCompareMediaQueries = (a, b) => a < b ? -1 : a > b ? 1 : 0;
/**
 * Creates a new instances of a renderer.
 *
 * @public
 */
function createDOMRenderer(targetDocument = typeof document === 'undefined' ? undefined : document, options = {}) {
  const {
    unstable_filterCSSRule,
    insertionPoint,
    styleElementAttributes,
    compareMediaQueries = defaultCompareMediaQueries
  } = options;
  const renderer = {
    insertionCache: {},
    stylesheets: {},
    styleElementAttributes: Object.freeze(styleElementAttributes),
    compareMediaQueries,
    id: `d${lastIndex++}`,
    insertCSSRules(cssRules) {
      // eslint-disable-next-line guard-for-in
      for (const styleBucketName in cssRules) {
        const cssRulesForBucket = cssRules[styleBucketName];
        // This is a hot path in rendering styles: ".length" is cached in "l" var to avoid accesses the property
        for (let i = 0, l = cssRulesForBucket.length; i < l; i++) {
          const [ruleCSS, metadata] = normalizeCSSBucketEntry.normalizeCSSBucketEntry(cssRulesForBucket[i]);
          const sheet = getStyleSheetForBucket.getStyleSheetForBucket(styleBucketName, targetDocument, insertionPoint || null, renderer, metadata);
          if (renderer.insertionCache[ruleCSS]) {
            continue;
          }
          renderer.insertionCache[ruleCSS] = styleBucketName;
          if (false) {}
          try {
            if (unstable_filterCSSRule) {
              if (unstable_filterCSSRule(ruleCSS)) {
                sheet.insertRule(ruleCSS);
              }
            } else {
              sheet.insertRule(ruleCSS);
            }
          } catch (e) {
            // We've disabled these warnings due to false-positive errors with browser prefixes
            if (false) {}
          }
        }
      }
    }
  };
  if (targetDocument && "production" !== 'production' && 0) {}
  return renderer;
}
/**
 * Suffixes to be ignored in case of error
 */
const ignoreSuffixes = /*#__PURE__*/['-moz-placeholder', '-moz-focus-inner', '-moz-focusring', '-ms-input-placeholder', '-moz-read-write', '-moz-read-only'].join('|');
const ignoreSuffixesRegex = /*#__PURE__*/new RegExp(`:(${ignoreSuffixes})`);

exports.createDOMRenderer = createDOMRenderer;
exports.defaultCompareMediaQueries = defaultCompareMediaQueries;
//# sourceMappingURL=createDOMRenderer.cjs.js.map


/***/ }),

/***/ 713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var constants = __webpack_require__(3985);

function createIsomorphicStyleSheet(styleElement, bucketName, elementAttributes) {
  // no CSSStyleSheet in SSR, just append rules here for server render
  const __cssRulesForSSR = [];
  elementAttributes[constants.DATA_BUCKET_ATTR] = bucketName;
  if (styleElement) {
    for (const attrName in elementAttributes) {
      styleElement.setAttribute(attrName, elementAttributes[attrName]);
    }
  }
  function insertRule(rule) {
    if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
      return styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
    }
    return __cssRulesForSSR.push(rule);
  }
  return {
    elementAttributes,
    insertRule,
    element: styleElement,
    bucketName,
    cssRules() {
      if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
        return Array.from(styleElement.sheet.cssRules).map(cssRule => cssRule.cssText);
      }
      return __cssRulesForSSR;
    }
  };
}
function createIsomorphicStyleSheetFromElement(element) {
  const elementAttributes = Array.from(element.attributes).reduce((acc, attr) => {
    acc[attr.name] = attr.value;
    return acc;
  }, {});
  const stylesheet = createIsomorphicStyleSheet(element, elementAttributes[constants.DATA_BUCKET_ATTR], elementAttributes);
  return stylesheet;
}

exports.createIsomorphicStyleSheet = createIsomorphicStyleSheet;
exports.createIsomorphicStyleSheetFromElement = createIsomorphicStyleSheetFromElement;
//# sourceMappingURL=createIsomorphicStyleSheet.cjs.js.map


/***/ }),

/***/ 1572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var constants = __webpack_require__(3985);
var createIsomorphicStyleSheet = __webpack_require__(713);

/**
 * Ordered style buckets using their short pseudo name.
 *
 * @internal
 */
const styleBucketOrdering = [
// reset styles
'r',
// catch-all
'd',
// link
'l',
// visited
'v',
// focus-within
'w',
// focus
'f',
// focus-visible
'i',
// hover
'h',
// active
'a',
// keyframes
'k',
// at-rules
't',
// @media rules
'm',
// @container rules
'c'];
// avoid repeatedly calling `indexOf`to determine order during new insertions
const styleBucketOrderingMap = /*#__PURE__*/styleBucketOrdering.reduce((acc, cur, j) => {
  acc[cur] = j;
  return acc;
}, {});
/**
 * Lazily adds a `<style>` bucket to the `<head>`. This will ensure that the style buckets are ordered.
 */
function getStyleSheetForBucket(bucketName, targetDocument, insertionPoint, renderer, metadata = {}) {
  const isMediaBucket = bucketName === 'm';
  const stylesheetKey = isMediaBucket ? bucketName + metadata['m'] : bucketName;
  if (!renderer.stylesheets[stylesheetKey]) {
    const tag = targetDocument && targetDocument.createElement('style');
    const stylesheet = createIsomorphicStyleSheet.createIsomorphicStyleSheet(tag, bucketName, {
      ...renderer.styleElementAttributes,
      ...(isMediaBucket && {
        media: metadata['m']
      })
    });
    renderer.stylesheets[stylesheetKey] = stylesheet;
    if (targetDocument && tag) {
      targetDocument.head.insertBefore(tag, findInsertionPoint(targetDocument, insertionPoint, bucketName, renderer, metadata));
    }
  }
  return renderer.stylesheets[stylesheetKey];
}
/**
 * Finds an element before which the new bucket style element should be inserted following the bucket sort order.
 *
 * @param targetDocument - A document
 * @param insertionPoint - An element that will be used as an initial insertion point
 * @param targetBucket - The bucket that should be inserted to DOM
 * @param renderer - Griffel renderer
 * @param metadata - metadata for CSS rule
 * @returns - Smallest style element with greater sort order than the current bucket
 */
function findInsertionPoint(targetDocument, insertionPoint, targetBucket, renderer, metadata) {
  const targetOrder = styleBucketOrderingMap[targetBucket];
  // Similar to javascript sort comparators where
  // a positive value is increasing sort order
  // a negative value is decreasing sort order
  let comparer = el => targetOrder - styleBucketOrderingMap[el.getAttribute(constants.DATA_BUCKET_ATTR)];
  let styleElements = targetDocument.head.querySelectorAll(`[${constants.DATA_BUCKET_ATTR}]`);
  if (targetBucket === 'm' && metadata) {
    const mediaElements = targetDocument.head.querySelectorAll(`[${constants.DATA_BUCKET_ATTR}="${targetBucket}"]`);
    // only reduce the scope of the search and change comparer
    // if there are other media buckets already on the page
    if (mediaElements.length) {
      styleElements = mediaElements;
      comparer = el => renderer.compareMediaQueries(metadata['m'], el.media);
    }
  }
  const length = styleElements.length;
  let index = length - 1;
  while (index >= 0) {
    const styleElement = styleElements.item(index);
    if (comparer(styleElement) > 0) {
      return styleElement.nextSibling;
    }
    index--;
  }
  if (length > 0) {
    return styleElements.item(0);
  }
  return insertionPoint ? insertionPoint.nextSibling : null;
}

exports.getStyleSheetForBucket = getStyleSheetForBucket;
exports.styleBucketOrdering = styleBucketOrdering;
//# sourceMappingURL=getStyleSheetForBucket.cjs.js.map


/***/ }),

/***/ 7931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var createIsomorphicStyleSheet = __webpack_require__(713);
__webpack_require__(3985);
var store = __webpack_require__(4858);
var isDevToolsEnabled = __webpack_require__(3839);

// Regexps to extract names of classes and animations
// https://github.com/styletron/styletron/blob/e0fcae826744eb00ce679ac613a1b10d44256660/packages/styletron-engine-atomic/src/client/client.js#L8
const KEYFRAMES_HYDRATOR = /@(-webkit-)?keyframes ([^{]+){((?:(?:from|to|(?:\d+\.?\d*%))\{(?:[^}])*})*)}/g;
const AT_RULES_HYDRATOR = /@(media|supports|layer)[^{]+\{([\s\S]+?})\s*}/g;
const STYLES_HYDRATOR = /\.([^{:]+)(:[^{]+)?{(?:[^}]*;)?([^}]*?)}/g;
const regexps = {
  k: KEYFRAMES_HYDRATOR,
  t: AT_RULES_HYDRATOR,
  m: AT_RULES_HYDRATOR
};
/**
 * Should be called in a case of Server-Side rendering. Rehydrates cache from for a renderer to avoid double insertion
 * of classes to DOM.
 *
 * @public
 */
function rehydrateRendererCache(renderer, target = typeof document === 'undefined' ? undefined : document) {
  if (target) {
    const styleElements = target.querySelectorAll('[data-make-styles-bucket]');
    styleElements.forEach(styleElement => {
      const bucketName = styleElement.dataset['makeStylesBucket'];
      const regex = regexps[bucketName] || STYLES_HYDRATOR;
      const stylesheetKey = bucketName === 'm' ? bucketName + styleElement.media : bucketName;
      // 👇 If some elements are not created yet, we will register them in renderer
      if (!renderer.stylesheets[stylesheetKey]) {
        renderer.stylesheets[stylesheetKey] = createIsomorphicStyleSheet.createIsomorphicStyleSheetFromElement(styleElement);
      }
      let match;
      while (match = regex.exec(styleElement.textContent)) {
        // "cacheKey" is either a class name or an animation name
        const [cssRule] = match;
        renderer.insertionCache[cssRule] = bucketName;
        if (false) {}
      }
    });
  }
}

exports.rehydrateRendererCache = rehydrateRendererCache;
//# sourceMappingURL=rehydrateRendererCache.cjs.js.map


/***/ }),

/***/ 7947:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var resolveStyleRules = __webpack_require__(7797);

/**
 * Calls resolveStyleRules() for each slot, is also used by build time transform.
 *
 * @param stylesBySlots - An object with makeStyles rules where a key is a slot name
 *
 * @return - A tuple with an object classnames mapping where a key is a slot name and an array with CSS rules
 */
function resolveStyleRulesForSlots(stylesBySlots) {
  const classesMapBySlot = {};
  const cssRules = {};
  // eslint-disable-next-line guard-for-in
  for (const slotName in stylesBySlots) {
    const slotStyles = stylesBySlots[slotName];
    const [cssClassMap, cssRulesByBucket] = resolveStyleRules.resolveStyleRules(slotStyles);
    classesMapBySlot[slotName] = cssClassMap;
    Object.keys(cssRulesByBucket).forEach(styleBucketName => {
      cssRules[styleBucketName] = (cssRules[styleBucketName] || []).concat(cssRulesByBucket[styleBucketName]);
    });
  }
  return [classesMapBySlot, cssRules];
}

exports.resolveStyleRulesForSlots = resolveStyleRulesForSlots;
//# sourceMappingURL=resolveStyleRulesForSlots.cjs.js.map


/***/ }),

/***/ 2733:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var stylis = __webpack_require__(3531);
var globalPlugin = __webpack_require__(7064);
var hyphenateProperty = __webpack_require__(5310);
var normalizeNestedProperty = __webpack_require__(2333);

const PSEUDO_SELECTOR_REGEX = /,( *[^ &])/g;
/**
 * Normalizes pseudo selectors to always contain &, requires to work properly with comma-separated selectors.
 *
 * @example
 *   ":hover" => "&:hover"
 *   " :hover" => "& :hover"
 *   ":hover,:focus" => "&:hover,&:focus"
 *   " :hover, :focus" => "& :hover,& :focus"
 */
function normalizePseudoSelector(pseudoSelector) {
  return '&' + normalizeNestedProperty.normalizeNestedProperty(
  // Regex there replaces a comma, spaces and an ampersand if it's present with comma and an ampersand.
  // This allows to normalize input, see examples in JSDoc.
  pseudoSelector.replace(PSEUDO_SELECTOR_REGEX, ',&$1'));
}
function compileCSSRules(cssRules) {
  const rules = [];
  stylis.serialize(stylis.compile(cssRules), stylis.middleware([globalPlugin.globalPlugin, stylis.prefixer, stylis.stringify,
  // 💡 we are using `.insertRule()` API for DOM operations, which does not support
  // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
  // individual rules to be used with this API
  stylis.rulesheet(rule => rules.push(rule))]));
  return rules;
}
function createCSSRule(classNameSelector, cssDeclaration, pseudos) {
  let cssRule = cssDeclaration;
  if (pseudos.length > 0) {
    cssRule = pseudos.reduceRight((acc, selector) => {
      return `${normalizePseudoSelector(selector)} { ${acc} }`;
    }, cssDeclaration);
  }
  return `${classNameSelector}{${cssRule}}`;
}
function compileCSS(options) {
  const {
    className,
    media,
    layer,
    selectors,
    support,
    property,
    rtlClassName,
    rtlProperty,
    rtlValue,
    value,
    container
  } = options;
  const classNameSelector = `.${className}`;
  const cssDeclaration = Array.isArray(value) ? `${value.map(v => `${hyphenateProperty.hyphenateProperty(property)}: ${v}`).join(';')};` : `${hyphenateProperty.hyphenateProperty(property)}: ${value};`;
  let cssRule = createCSSRule(classNameSelector, cssDeclaration, selectors);
  if (rtlProperty && rtlClassName) {
    const rtlClassNameSelector = `.${rtlClassName}`;
    const rtlCSSDeclaration = Array.isArray(rtlValue) ? `${rtlValue.map(v => `${hyphenateProperty.hyphenateProperty(rtlProperty)}: ${v}`).join(';')};` : `${hyphenateProperty.hyphenateProperty(rtlProperty)}: ${rtlValue};`;
    cssRule += createCSSRule(rtlClassNameSelector, rtlCSSDeclaration, selectors);
  }
  if (media) {
    cssRule = `@media ${media} { ${cssRule} }`;
  }
  if (layer) {
    cssRule = `@layer ${layer} { ${cssRule} }`;
  }
  if (support) {
    cssRule = `@supports ${support} { ${cssRule} }`;
  }
  if (container) {
    cssRule = `@container ${container} { ${cssRule} }`;
  }
  return compileCSSRules(cssRule);
}

exports.compileCSS = compileCSS;
exports.compileCSSRules = compileCSSRules;
exports.normalizePseudoSelector = normalizePseudoSelector;
//# sourceMappingURL=compileCSS.cjs.js.map


/***/ }),

/***/ 481:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var stylis = __webpack_require__(3531);
var cssifyObject = __webpack_require__(7206);

function compileKeyframeRule(keyframeObject) {
  let css = '';
  // eslint-disable-next-line guard-for-in
  for (const percentage in keyframeObject) {
    css += `${percentage}{${cssifyObject.cssifyObject(keyframeObject[percentage])}}`;
  }
  return css;
}
/**
 * Creates CSS rules for insertion from passed CSS.
 */
function compileKeyframesCSS(keyframeName, keyframeCSS) {
  const cssRule = `@keyframes ${keyframeName} {${keyframeCSS}}`;
  const rules = [];
  stylis.serialize(stylis.compile(cssRule), stylis.middleware([stylis.prefixer, stylis.stringify,
  // 💡 we are using `.insertRule()` API for DOM operations, which does not support
  // insertion of multiple CSS rules in a single call. `rulesheet` plugin extracts
  // individual rules to be used with this API
  stylis.rulesheet(rule => rules.push(rule))]));
  return rules;
}

exports.compileKeyframeRule = compileKeyframeRule;
exports.compileKeyframesCSS = compileKeyframesCSS;
//# sourceMappingURL=compileKeyframeCSS.cjs.js.map


/***/ }),

/***/ 8299:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var compileCSS = __webpack_require__(2733);
var cssifyObject = __webpack_require__(7206);

function compileStaticCSS(property, value) {
  const cssRule = `${property} {${cssifyObject.cssifyObject(value)}}`;
  return compileCSS.compileCSSRules(cssRule)[0];
}

exports.compileStaticCSS = compileStaticCSS;
//# sourceMappingURL=compileStaticCSS.cjs.js.map


/***/ }),

/***/ 7405:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * Maps the long pseudo name to the short pseudo name. Pseudos that match here will be ordered, everything else will
 * make their way to default style bucket. We reduce the pseudo name to save bundlesize.
 * Thankfully there aren't any overlaps, see: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes.
 */
const pseudosMap = {
  // :focus-within
  'us-w': 'w',
  // :focus-visible
  'us-v': 'i',
  // :link
  nk: 'l',
  // :visited
  si: 'v',
  // :focus
  cu: 'f',
  // :hover
  ve: 'h',
  // :active
  ti: 'a'
};
/**
 * Gets the bucket depending on the pseudo.
 *
 * Input:
 *
 * ```
 * ":hover"
 * ":focus:hover"
 * ```
 *
 * Output:
 *
 * ```
 * "h"
 * "f"
 * ```
 *
 * @internal
 */
function getStyleBucketName(selectors, layer, media, support, container) {
  if (media) {
    return 'm';
  }
  // We are grouping all the at-rules like @supports etc under `t` bucket.
  if (layer || support) {
    return 't';
  }
  if (container) {
    return 'c';
  }
  if (selectors.length > 0) {
    const normalizedPseudo = selectors[0].trim();
    if (normalizedPseudo.charCodeAt(0) === 58 /* ":" */) {
      // We send through a subset of the string instead of the full pseudo name.
      // For example:
      // - `"focus-visible"` name would instead of `"us-v"`.
      // - `"focus"` name would instead of `"us"`.
      // Return a mapped pseudo else default bucket.
      return pseudosMap[normalizedPseudo.slice(4, 8)] /* allows to avoid collisions between "focus-visible" & "focus" */ || pseudosMap[normalizedPseudo.slice(3, 5)] || 'd';
    }
  }
  // Return default bucket
  return 'd';
}

exports.getStyleBucketName = getStyleBucketName;
//# sourceMappingURL=getStyleBucketName.cjs.js.map


/***/ }),

/***/ 2047:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var constants = __webpack_require__(3985);
var hashSequence = __webpack_require__(5288);

/**
 * Reduces a classname map for slot to a classname string. Uses classnames according to text directions.
 *
 * @private
 */
function reduceToClassName(classMap, dir) {
  let className = '';
  // eslint-disable-next-line guard-for-in
  for (const propertyHash in classMap) {
    const classNameMapping = classMap[propertyHash];
    if (classNameMapping) {
      const hasRTLClassName = Array.isArray(classNameMapping);
      if (dir === 'rtl') {
        className += (hasRTLClassName ? classNameMapping[1] : classNameMapping) + ' ';
      } else {
        className += (hasRTLClassName ? classNameMapping[0] : classNameMapping) + ' ';
      }
    }
  }
  return className.slice(0, -1);
}
/**
 * Reduces classname maps for slots to classname strings. Registers them in a definition cache to be used by
 * `mergeClasses()`.
 *
 * @internal
 */
function reduceToClassNameForSlots(classesMapBySlot, dir) {
  const classNamesForSlots = {};
  // eslint-disable-next-line guard-for-in
  for (const slotName in classesMapBySlot) {
    const slotClasses = reduceToClassName(classesMapBySlot[slotName], dir);
    // Handles a case when there are no classes in a set i.e. "makeStyles({ root: {} })"
    if (slotClasses === '') {
      classNamesForSlots[slotName] = '';
      continue;
    }
    const sequenceHash = hashSequence.hashSequence(slotClasses, dir);
    const resultSlotClasses = sequenceHash + ' ' + slotClasses;
    constants.DEFINITION_LOOKUP_TABLE[sequenceHash] = [classesMapBySlot[slotName], dir];
    classNamesForSlots[slotName] = resultSlotClasses;
  }
  return classNamesForSlots;
}

exports.reduceToClassName = reduceToClassName;
exports.reduceToClassNameForSlots = reduceToClassNameForSlots;
//# sourceMappingURL=reduceToClassNameForSlots.cjs.js.map


/***/ }),

/***/ 4047:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var hashString = __webpack_require__(562);
var core = __webpack_require__(1990);
var constants = __webpack_require__(3985);
var isMediaQuerySelector = __webpack_require__(3760);
var isLayerSelector = __webpack_require__(907);
var isNestedSelector = __webpack_require__(8039);
var isSupportQuerySelector = __webpack_require__(9625);
var isObject = __webpack_require__(8636);
var hyphenateProperty = __webpack_require__(5310);
var compileCSS = __webpack_require__(2733);
var compileKeyframeCSS = __webpack_require__(481);
var isContainerQuerySelector = __webpack_require__(5483);
var warnAboutUnresolvedRule = __webpack_require__(7898);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var hashString__default = /*#__PURE__*/_interopDefaultLegacy(hashString);

/**
 * @internal
 */
function createStringFromStyles(styles) {
  let ltrCSS = '';
  let rtlCSS = '';
  // eslint-disable-next-line guard-for-in
  for (const property in styles) {
    const value = styles[property];
    // eslint-disable-next-line eqeqeq
    if (value == null) {
      continue;
    }
    if (typeof value === 'string' || typeof value === 'number') {
      const {
        key: rtlProperty,
        value: rtlValue
      } = core.convertProperty(property, value);
      ltrCSS += `${hyphenateProperty.hyphenateProperty(property)}:${value};`;
      rtlCSS += `${hyphenateProperty.hyphenateProperty(rtlProperty)}:${rtlValue};`;
      continue;
    }
    if (property === 'animationName' && typeof value === 'object') {
      const values = Array.isArray(value) ? value : [value];
      const ltrAnimationNames = [];
      const rtlAnimationNames = [];
      for (const keyframeObject of values) {
        const ltrKeyframeRule = compileKeyframeCSS.compileKeyframeRule(keyframeObject);
        const rtlKeyframeRule = compileKeyframeCSS.compileKeyframeRule(core.convert(keyframeObject));
        const ltrAnimationName = constants.RESET_HASH_PREFIX + hashString__default["default"](ltrKeyframeRule);
        const rtlAnimationName = constants.RESET_HASH_PREFIX + hashString__default["default"](rtlKeyframeRule);
        ltrAnimationNames.push(ltrAnimationName);
        rtlAnimationNames.push(rtlAnimationName);
        ltrCSS += compileKeyframeCSS.compileKeyframesCSS(ltrAnimationName, ltrKeyframeRule).join('');
        if (ltrAnimationName !== rtlAnimationName) {
          rtlCSS += compileKeyframeCSS.compileKeyframesCSS(rtlAnimationName, rtlKeyframeRule).join('');
        }
      }
      ltrCSS += `animation-name:${ltrAnimationNames.join(',')};`;
      rtlCSS += `animation-name:${rtlAnimationNames.join(',')};`;
      continue;
    }
    if (Array.isArray(value)) {
      // not animationName property but array in the value => fallback values
      if (value.length === 0) {
        if (false) {}
        continue;
      }
      const rtlDefinitions = value.map(v => core.convertProperty(property, v));
      const rtlPropertyConsistent = !rtlDefinitions.some(v => v.key !== rtlDefinitions[0].key);
      if (!rtlPropertyConsistent) {
        if (false) {}
        continue;
      }
      const rtlProperty = rtlDefinitions[0].key;
      ltrCSS += value.map(v => `${hyphenateProperty.hyphenateProperty(property)}:${v};`).join('');
      rtlCSS += rtlDefinitions.map(definition => `${hyphenateProperty.hyphenateProperty(rtlProperty)}:${definition.value};`).join('');
      continue;
    }
    if (isObject.isObject(value)) {
      if (isNestedSelector.isNestedSelector(property)) {
        const nestedSelector = compileCSS.normalizePseudoSelector(property);
        const [ltrNested, rtlNested] = createStringFromStyles(value);
        ltrCSS += `${nestedSelector}{${ltrNested}}`;
        rtlCSS += `${nestedSelector}{${rtlNested}}`;
        continue;
      }
      if (isMediaQuerySelector.isMediaQuerySelector(property) || isLayerSelector.isLayerSelector(property) || isSupportQuerySelector.isSupportQuerySelector(property) || isContainerQuerySelector.isContainerQuerySelector(property)) {
        const [ltrNested, rtlNested] = createStringFromStyles(value);
        ltrCSS += `${property}{${ltrNested}}`;
        rtlCSS += `${property}{${rtlNested}}`;
        continue;
      }
    }
    warnAboutUnresolvedRule.warnAboutUnresolvedRule(property, value);
  }
  return [ltrCSS, rtlCSS];
}
/**
 * @internal
 */
function resolveResetStyleRules(styles) {
  const [ltrRule, rtlRule] = createStringFromStyles(styles);
  const ltrClassName = constants.RESET_HASH_PREFIX + hashString__default["default"](ltrRule);
  const ltrCSS = compileCSS.compileCSSRules(`.${ltrClassName}{${ltrRule}}`);
  if (ltrRule === rtlRule) {
    return [ltrClassName, null, ltrCSS];
  }
  const rtlClassName = constants.RESET_HASH_PREFIX + hashString__default["default"](rtlRule);
  const rtlCSS = compileCSS.compileCSSRules(`.${rtlClassName}{${rtlRule}}`);
  return [ltrClassName, rtlClassName, ltrCSS.concat(rtlCSS)];
}

exports.resolveResetStyleRules = resolveResetStyleRules;
//# sourceMappingURL=resolveResetStyleRules.cjs.js.map


/***/ }),

/***/ 5914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var compileStaticCSS = __webpack_require__(8299);
var compileCSS = __webpack_require__(2733);

function resolveStaticStyleRules(styles, result = {}) {
  if (typeof styles === 'string') {
    const cssRules = compileCSS.compileCSSRules(styles);
    for (const rule of cssRules) {
      addResolvedStyles(rule, result);
    }
  } else {
    // eslint-disable-next-line guard-for-in
    for (const property in styles) {
      const value = styles[property];
      const staticCSS = compileStaticCSS.compileStaticCSS(property, value);
      addResolvedStyles(staticCSS, result);
    }
  }
  return result;
}
function addResolvedStyles(cssRule, result = {}) {
  // 👇 static rules should be inserted into default bucket
  result.d = result.d || [];
  result.d.push(cssRule);
}

exports.resolveStaticStyleRules = resolveStaticStyleRules;
//# sourceMappingURL=resolveStaticStyleRules.cjs.js.map


/***/ }),

/***/ 7797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var hashString = __webpack_require__(562);
var core = __webpack_require__(1990);
var constants = __webpack_require__(3985);
var compileCSS = __webpack_require__(2733);
var compileKeyframeCSS = __webpack_require__(481);
var generateCombinedMediaQuery = __webpack_require__(1349);
var isMediaQuerySelector = __webpack_require__(3760);
var isLayerSelector = __webpack_require__(907);
var isNestedSelector = __webpack_require__(8039);
var isSupportQuerySelector = __webpack_require__(9625);
var isContainerQuerySelector = __webpack_require__(5483);
var normalizeNestedProperty = __webpack_require__(2333);
var isObject = __webpack_require__(8636);
var getStyleBucketName = __webpack_require__(7405);
var hashClassName = __webpack_require__(8905);
var hashPropertyKey = __webpack_require__(4897);
var warnAboutUnresolvedRule = __webpack_require__(7898);
var warnAboutUnsupportedProperties = __webpack_require__(9767);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var hashString__default = /*#__PURE__*/_interopDefaultLegacy(hashString);

function pushToClassesMap(classesMap, propertyKey, ltrClassname, rtlClassname) {
  classesMap[propertyKey] = rtlClassname ? [ltrClassname, rtlClassname] : ltrClassname;
}
function createBucketEntry(cssRule, metadata) {
  if (metadata) {
    return [cssRule, metadata];
  }
  return cssRule;
}
function pushToCSSRules(cssRulesByBucket, styleBucketName, ltrCSS, rtlCSS, media) {
  var _a;
  let metadata;
  if (styleBucketName === 'm' && media) {
    metadata = {
      m: media
    };
  }
  (_a = cssRulesByBucket[styleBucketName]) !== null && _a !== void 0 ? _a : cssRulesByBucket[styleBucketName] = [];
  if (ltrCSS) {
    cssRulesByBucket[styleBucketName].push(createBucketEntry(ltrCSS, metadata));
  }
  if (rtlCSS) {
    cssRulesByBucket[styleBucketName].push(createBucketEntry(rtlCSS, metadata));
  }
}
/**
 * Transforms input styles to classes maps & CSS rules.
 *
 * @internal
 */
function resolveStyleRules(styles, selectors = [], media = '', layer = '', support = '', container = '', cssClassesMap = {}, cssRulesByBucket = {}, rtlValue) {
  // eslint-disable-next-line guard-for-in
  for (const property in styles) {
    // eslint-disable-next-line no-prototype-builtins
    if (constants.UNSUPPORTED_CSS_PROPERTIES.hasOwnProperty(property)) {
      warnAboutUnsupportedProperties.warnAboutUnsupportedProperties(property, styles[property]);
      continue;
    }
    const value = styles[property];
    // eslint-disable-next-line eqeqeq
    if (value == null) {
      continue;
    }
    if (typeof value === 'string' || typeof value === 'number') {
      // uniq key based on a hash of property & selector, used for merging later
      const key = hashPropertyKey.hashPropertyKey(selectors, media, support, property);
      const className = hashClassName.hashClassName({
        media,
        layer,
        value: value.toString(),
        support,
        selectors,
        property
      });
      const rtlDefinition = rtlValue && {
        key: property,
        value: rtlValue
      } || core.convertProperty(property, value);
      const flippedInRtl = rtlDefinition.key !== property || rtlDefinition.value !== value;
      const rtlClassName = flippedInRtl ? hashClassName.hashClassName({
        value: rtlDefinition.value.toString(),
        property: rtlDefinition.key,
        selectors,
        media,
        layer,
        support
      }) : undefined;
      const rtlCompileOptions = flippedInRtl ? {
        rtlClassName,
        rtlProperty: rtlDefinition.key,
        rtlValue: rtlDefinition.value
      } : undefined;
      const styleBucketName = getStyleBucketName.getStyleBucketName(selectors, layer, media, support, container);
      const [ltrCSS, rtlCSS] = compileCSS.compileCSS({
        className,
        media,
        layer,
        selectors,
        property,
        support,
        container,
        value,
        ...rtlCompileOptions
      });
      pushToClassesMap(cssClassesMap, key, className, rtlClassName);
      pushToCSSRules(cssRulesByBucket, styleBucketName, ltrCSS, rtlCSS, media);
    } else if (property === 'animationName') {
      const animationNameValue = Array.isArray(value) ? value : [value];
      const animationNames = [];
      const rtlAnimationNames = [];
      for (const keyframeObject of animationNameValue) {
        const keyframeCSS = compileKeyframeCSS.compileKeyframeRule(keyframeObject);
        const rtlKeyframeCSS = compileKeyframeCSS.compileKeyframeRule(core.convert(keyframeObject));
        const animationName = constants.HASH_PREFIX + hashString__default["default"](keyframeCSS);
        let rtlAnimationName;
        const keyframeRules = compileKeyframeCSS.compileKeyframesCSS(animationName, keyframeCSS);
        let rtlKeyframeRules = [];
        if (keyframeCSS === rtlKeyframeCSS) {
          // If CSS for LTR & RTL are same we will re-use animationName from LTR to avoid duplication of rules in output
          rtlAnimationName = animationName;
        } else {
          rtlAnimationName = constants.HASH_PREFIX + hashString__default["default"](rtlKeyframeCSS);
          rtlKeyframeRules = compileKeyframeCSS.compileKeyframesCSS(rtlAnimationName, rtlKeyframeCSS);
        }
        for (let i = 0; i < keyframeRules.length; i++) {
          pushToCSSRules(cssRulesByBucket,
          // keyframes styles should be inserted into own bucket
          'k', keyframeRules[i], rtlKeyframeRules[i], media);
        }
        animationNames.push(animationName);
        rtlAnimationNames.push(rtlAnimationName);
      }
      resolveStyleRules({
        animationName: animationNames.join(', ')
      }, selectors, media, layer, support, container, cssClassesMap, cssRulesByBucket, rtlAnimationNames.join(', '));
    } else if (Array.isArray(value)) {
      // not animationName property but array in the value => fallback values
      if (value.length === 0) {
        if (false) {}
        continue;
      }
      const key = hashPropertyKey.hashPropertyKey(selectors, media, support, property);
      const className = hashClassName.hashClassName({
        media,
        layer,
        value: value.map(v => (v !== null && v !== void 0 ? v : '').toString()).join(';'),
        support,
        selectors,
        property
      });
      const rtlDefinitions = value.map(v => core.convertProperty(property, v));
      const rtlPropertyConsistent = !rtlDefinitions.some(v => v.key !== rtlDefinitions[0].key);
      if (!rtlPropertyConsistent) {
        if (false) {}
        continue;
      }
      const flippedInRtl = rtlDefinitions[0].key !== property || rtlDefinitions.some((v, i) => v.value !== value[i]);
      const rtlClassName = flippedInRtl ? hashClassName.hashClassName({
        value: rtlDefinitions.map(v => {
          var _a;
          return ((_a = v === null || v === void 0 ? void 0 : v.value) !== null && _a !== void 0 ? _a : '').toString();
        }).join(';'),
        property: rtlDefinitions[0].key,
        selectors,
        layer,
        media,
        support
      }) : undefined;
      const rtlCompileOptions = flippedInRtl ? {
        rtlClassName,
        rtlProperty: rtlDefinitions[0].key,
        rtlValue: rtlDefinitions.map(d => d.value)
      } : undefined;
      const styleBucketName = getStyleBucketName.getStyleBucketName(selectors, layer, media, support, container);
      const [ltrCSS, rtlCSS] = compileCSS.compileCSS({
        className,
        media,
        layer,
        selectors,
        property,
        support,
        container,
        value: value,
        ...rtlCompileOptions
      });
      pushToClassesMap(cssClassesMap, key, className, rtlClassName);
      pushToCSSRules(cssRulesByBucket, styleBucketName, ltrCSS, rtlCSS, media);
    } else if (isObject.isObject(value)) {
      if (isNestedSelector.isNestedSelector(property)) {
        resolveStyleRules(value, selectors.concat(normalizeNestedProperty.normalizeNestedProperty(property)), media, layer, support, container, cssClassesMap, cssRulesByBucket);
      } else if (isMediaQuerySelector.isMediaQuerySelector(property)) {
        const combinedMediaQuery = generateCombinedMediaQuery.generateCombinedQuery(media, property.slice(6).trim());
        resolveStyleRules(value, selectors, combinedMediaQuery, layer, support, container, cssClassesMap, cssRulesByBucket);
      } else if (isLayerSelector.isLayerSelector(property)) {
        const combinedLayerQuery = (layer ? `${layer}.` : '') + property.slice(6).trim();
        resolveStyleRules(value, selectors, media, combinedLayerQuery, support, container, cssClassesMap, cssRulesByBucket);
      } else if (isSupportQuerySelector.isSupportQuerySelector(property)) {
        const combinedSupportQuery = generateCombinedMediaQuery.generateCombinedQuery(support, property.slice(9).trim());
        resolveStyleRules(value, selectors, media, layer, combinedSupportQuery, container, cssClassesMap, cssRulesByBucket);
      } else if (isContainerQuerySelector.isContainerQuerySelector(property)) {
        // TODO implement nested container queries if needed
        // The only way to target multiple containers is to nest container queries
        // https://developer.mozilla.org/en-US/docs/Web/CSS/@container#nested_container_queries
        const containerQuery = property.slice(10).trim();
        resolveStyleRules(value, selectors, media, layer, support, containerQuery, cssClassesMap, cssRulesByBucket);
      } else {
        warnAboutUnresolvedRule.warnAboutUnresolvedRule(property, value);
      }
    }
  }
  return [cssClassesMap, cssRulesByBucket];
}

exports.resolveStyleRules = resolveStyleRules;
//# sourceMappingURL=resolveStyleRules.cjs.js.map


/***/ }),

/***/ 7064:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var stylis = __webpack_require__(3531);

const globalPlugin = element => {
  switch (element.type) {
    case stylis.RULESET:
      if (typeof element.props === 'string') {
        if (false) {}
        return;
      }
      element.props = element.props.map(value => {
        // Avoids calling tokenize() on every string
        if (value.indexOf(':global(') === -1) {
          return value;
        }
        return stylis.tokenize(value).reduce((acc, value, index, children) => {
          if (value === '') {
            return acc;
          }
          if (value === ':' && children[index + 1] === 'global') {
            const selector =
            // An inner part of ":global()"
            children[index + 2].slice(1, -1) +
            // A separator between selectors i.e. "body .class"
            ' ';
            acc.unshift(selector);
            children[index + 1] = '';
            children[index + 2] = '';
            return acc;
          }
          acc.push(value);
          return acc;
        }, []).join('');
      });
  }
};

exports.globalPlugin = globalPlugin;
//# sourceMappingURL=globalPlugin.cjs.js.map


/***/ }),

/***/ 7206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var hyphenateProperty = __webpack_require__(5310);

function cssifyObject(style) {
  let css = '';
  // eslint-disable-next-line guard-for-in
  for (const property in style) {
    const value = style[property];
    if (typeof value !== 'string' && typeof value !== 'number') {
      continue;
    }
    css += hyphenateProperty.hyphenateProperty(property) + ':' + value + ';';
  }
  return css;
}

exports.cssifyObject = cssifyObject;
//# sourceMappingURL=cssifyObject.cjs.js.map


/***/ }),

/***/ 1349:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function generateCombinedQuery(currentMediaQuery, nestedMediaQuery) {
  if (currentMediaQuery.length === 0) {
    return nestedMediaQuery;
  }
  return `${currentMediaQuery} and ${nestedMediaQuery}`;
}

exports.generateCombinedQuery = generateCombinedQuery;
//# sourceMappingURL=generateCombinedMediaQuery.cjs.js.map


/***/ }),

/***/ 8905:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var hashString = __webpack_require__(562);
var constants = __webpack_require__(3985);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var hashString__default = /*#__PURE__*/_interopDefaultLegacy(hashString);

function hashClassName({
  media,
  layer,
  property,
  selectors,
  support,
  value
}) {
  // Trimming of value is required to generate consistent hashes
  const classNameHash = hashString__default["default"](selectors.join('') + media + layer + support + property + value.trim());
  return constants.HASH_PREFIX + classNameHash;
}

exports.hashClassName = hashClassName;
//# sourceMappingURL=hashClassName.cjs.js.map


/***/ }),

/***/ 4897:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var hashString = __webpack_require__(562);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var hashString__default = /*#__PURE__*/_interopDefaultLegacy(hashString);

function hashPropertyKey(selectors, media, support, property) {
  // uniq key based on property & selector, used for merging later
  const computedKey = selectors.join('') + media + support + property;
  // "key" can be really long as it includes selectors, we use hashes to reduce sizes of keys
  // ".foo :hover" => "abcd"
  const hashedKey = hashString__default["default"](computedKey);
  // As these hashes are used as object keys in build output we should avoid having numbers as a first character to
  // avoid having quotes:
  // {
  //   "1abc": {}, // we don't want this
  //   Aabc: {}, // no quotes
  // }
  const firstCharCode = hashedKey.charCodeAt(0);
  const startsWithNumber = firstCharCode >= 48 && firstCharCode <= 57;
  if (startsWithNumber) {
    return String.fromCharCode(firstCharCode + 17) + hashedKey.substr(1);
  }
  return hashedKey;
}

exports.hashPropertyKey = hashPropertyKey;
//# sourceMappingURL=hashPropertyKey.cjs.js.map


/***/ }),

/***/ 5288:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var hashString = __webpack_require__(562);
var constants = __webpack_require__(3985);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var hashString__default = /*#__PURE__*/_interopDefaultLegacy(hashString);

function padEndHash(value) {
  const hashLength = value.length;
  if (hashLength === constants.SEQUENCE_HASH_LENGTH) {
    return value;
  }
  for (let i = hashLength; i < constants.SEQUENCE_HASH_LENGTH; i++) {
    value += '0';
  }
  return value;
}
function hashSequence(classes, dir, sequenceIds = []) {
  if (true) {
    return constants.SEQUENCE_PREFIX + padEndHash(hashString__default["default"](classes + dir));
  }
  return constants.SEQUENCE_PREFIX + padEndHash(hashString__default["default"](classes + dir)) + constants.DEBUG_SEQUENCE_SEPARATOR + padEndHash(hashString__default["default"](sequenceIds.join('')));
}

exports.hashSequence = hashSequence;
//# sourceMappingURL=hashSequence.cjs.js.map


/***/ }),

/***/ 5310:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const uppercasePattern = /[A-Z]/g;
const msPattern = /^ms-/;
const cache = {};
function toHyphenLower(match) {
  return '-' + match.toLowerCase();
}
function hyphenateProperty(name) {
  if (Object.prototype.hasOwnProperty.call(cache, name)) {
    return cache[name];
  }
  if (name.substr(0, 2) === '--') {
    return name;
  }
  const hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}

exports.hyphenateProperty = hyphenateProperty;
//# sourceMappingURL=hyphenateProperty.cjs.js.map


/***/ }),

/***/ 5483:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function isContainerQuerySelector(property) {
  return property.substring(0, 10) === '@container';
}

exports.isContainerQuerySelector = isContainerQuerySelector;
//# sourceMappingURL=isContainerQuerySelector.cjs.js.map


/***/ }),

/***/ 907:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function isLayerSelector(property) {
  return property.substr(0, 6) === '@layer';
}

exports.isLayerSelector = isLayerSelector;
//# sourceMappingURL=isLayerSelector.cjs.js.map


/***/ }),

/***/ 3760:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function isMediaQuerySelector(property) {
  return property.substr(0, 6) === '@media';
}

exports.isMediaQuerySelector = isMediaQuerySelector;
//# sourceMappingURL=isMediaQuerySelector.cjs.js.map


/***/ }),

/***/ 8039:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const regex = /^(:|\[|>|&)/;
function isNestedSelector(property) {
  return regex.test(property);
}

exports.isNestedSelector = isNestedSelector;
//# sourceMappingURL=isNestedSelector.cjs.js.map


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

exports.isObject = isObject;
//# sourceMappingURL=isObject.cjs.js.map


/***/ }),

/***/ 9625:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function isSupportQuerySelector(property) {
  return property.substr(0, 9) === '@supports';
}

exports.isSupportQuerySelector = isSupportQuerySelector;
//# sourceMappingURL=isSupportQuerySelector.cjs.js.map


/***/ }),

/***/ 8926:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * @internal
 *
 * @param entry - CSS bucket entry that can be either a string or an array
 * @returns An array where the first element is the CSS rule
 */
function normalizeCSSBucketEntry(entry) {
  if (!Array.isArray(entry)) {
    return [entry];
  }
  if (false) {}
  return entry;
}

exports.normalizeCSSBucketEntry = normalizeCSSBucketEntry;
//# sourceMappingURL=normalizeCSSBucketEntry.cjs.js.map


/***/ }),

/***/ 2333:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function normalizeNestedProperty(nestedProperty) {
  if (nestedProperty.charAt(0) === '&') {
    return nestedProperty.slice(1);
  }
  return nestedProperty;
}

exports.normalizeNestedProperty = normalizeNestedProperty;
//# sourceMappingURL=normalizeNestedProperty.cjs.js.map


/***/ }),

/***/ 4952:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function logError(...args) {
  if (false) {}
}

exports.logError = logError;
//# sourceMappingURL=logError.cjs.js.map


/***/ }),

/***/ 7898:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var logError = __webpack_require__(4952);

function warnAboutUnresolvedRule(property, value) {
  const ruleText = JSON.stringify(value, null, 2);
  const message = ['@griffel/react: A rule was not resolved to CSS properly. ' + 'Please check your `makeStyles` or `makeResetStyles` calls for following:', ' '.repeat(2) + 'makeStyles({', ' '.repeat(4) + `[slot]: {`, ' '.repeat(6) + `"${property}": ${ruleText.split('\n').map((l, n) => ' '.repeat(n === 0 ? 0 : 6) + l).join('\n')}`, ' '.repeat(4) + '}', ' '.repeat(2) + `})`, ''];
  if (property.indexOf('&') === -1) {
    message.push(`It looks that you're are using a nested selector, but it is missing an ampersand placeholder where the generated class name should be injected.`);
    message.push(`Try to update a property to include it i.e "${property}" => "&${property}".`);
  } else {
    message.push('');
    message.push("If it's not obvious what triggers a problem, please report an issue at https://github.com/microsoft/griffel/issues");
  }
  logError.logError(message.join('\n'));
}

exports.warnAboutUnresolvedRule = warnAboutUnresolvedRule;
//# sourceMappingURL=warnAboutUnresolvedRule.cjs.js.map


/***/ }),

/***/ 9767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var logError = __webpack_require__(4952);

function warnAboutUnsupportedProperties(property, value) {
  logError.logError([`@griffel/react: You are using unsupported shorthand CSS property "${property}". ` + `Please check your "makeStyles" calls, there *should not* be following:`, ' '.repeat(2) + `makeStyles({`, ' '.repeat(4) + `[slot]: { ${property}: "${value}" }`, ' '.repeat(2) + `})`, '', 'Learn why CSS shorthands are not supported: https://aka.ms/griffel-css-shorthands'].join('\n'));
}

exports.warnAboutUnsupportedProperties = warnAboutUnsupportedProperties;
//# sourceMappingURL=warnAboutUnsupportedProperties.cjs.js.map


/***/ }),

/***/ 9395:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var borderWidth = __webpack_require__(4439);
var borderStyle = __webpack_require__(9618);
var borderColor = __webpack_require__(614);

/**
 * A function that implements expansion for "border" to all sides of an element, it's simplified - check usage examples.
 *
 * @example
 *  border('2px')
 *  border('2px', 'solid')
 *  border('2px', 'solid', 'red')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border
 */
function border(...values) {
  return {
    ...borderWidth.borderWidth(values[0]),
    ...(values[1] && borderStyle.borderStyle(values[1])),
    ...(values[2] && borderColor.borderColor(values[2]))
  };
}

exports.border = border;
//# sourceMappingURL=border.cjs.js.map


/***/ }),

/***/ 2403:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements expansion for "border-bottom", it's simplified - check usage examples.
 *
 * @example
 *  borderBottom('2px')
 *  borderBottom('2px', 'solid')
 *  borderBottom('2px', 'solid', 'red')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
 */
function borderBottom(...values) {
  return {
    borderBottomWidth: values[0],
    ...(values[1] && {
      borderBottomStyle: values[1]
    }),
    ...(values[2] && {
      borderBottomColor: values[2]
    })
  };
}

exports.borderBottom = borderBottom;
//# sourceMappingURL=borderBottom.cjs.js.map


/***/ }),

/***/ 614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var generateStyles = __webpack_require__(2263);

/**
 * A function that implements CSS spec conformant expansion for "borderColor"
 *
 * @example
 *  borderColor('red')
 *  borderColor('red', 'blue')
 *  borderColor('red', 'blue', 'green')
 *  borderColor('red', 'blue', 'green', 'yellow')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
 */
function borderColor(...values) {
  return generateStyles.generateStyles('border', 'Color', ...values);
}

exports.borderColor = borderColor;
//# sourceMappingURL=borderColor.cjs.js.map


/***/ }),

/***/ 343:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements expansion for "border-left", it's simplified - check usage examples.
 *
 * @example
 *  borderLeft('2px')
 *  borderLeft('2px', 'solid')
 *  borderLeft('2px', 'solid', 'red')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
 */
function borderLeft(...values) {
  return {
    borderLeftWidth: values[0],
    ...(values[1] && {
      borderLeftStyle: values[1]
    }),
    ...(values[2] && {
      borderLeftColor: values[2]
    })
  };
}

exports.borderLeft = borderLeft;
//# sourceMappingURL=borderLeft.cjs.js.map


/***/ }),

/***/ 1155:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements CSS spec conformant expansion for "borderRadius". "/" is not supported, please use CSS
 * longhands directly.
 *
 * @example
 *   borderRadius('10px')
 *   borderRadius('10px', '5%')
 *   borderRadius('2px', '4px', '8px')
 *   borderRadius('1px', 0, '3px', '4px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
 */
function borderRadius(value1, value2 = value1, value3 = value1, value4 = value2) {
  return {
    borderBottomRightRadius: value3,
    borderBottomLeftRadius: value4,
    borderTopRightRadius: value2,
    borderTopLeftRadius: value1
  };
}

exports.borderRadius = borderRadius;
//# sourceMappingURL=borderRadius.cjs.js.map


/***/ }),

/***/ 145:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements expansion for "border-right", it's simplified - check usage examples.
 *
 * @example
 *  borderRight('2px')
 *  borderRight('2px', 'solid')
 *  borderRight('2px', 'solid', 'red')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
 */
function borderRight(...values) {
  return {
    borderRightWidth: values[0],
    ...(values[1] && {
      borderRightStyle: values[1]
    }),
    ...(values[2] && {
      borderRightColor: values[2]
    })
  };
}

exports.borderRight = borderRight;
//# sourceMappingURL=borderRight.cjs.js.map


/***/ }),

/***/ 9618:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var generateStyles = __webpack_require__(2263);

/**
 * A function that implements CSS spec conformant expansion for "borderStyle"
 *
 * @example
 *  borderStyle('solid')
 *  borderStyle('solid', 'dashed')
 *  borderStyle('solid', 'dashed', 'dotted')
 *  borderStyle('solid', 'dashed', 'dotted', 'double')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
 */
function borderStyle(...values) {
  return generateStyles.generateStyles('border', 'Style', ...values);
}

exports.borderStyle = borderStyle;
//# sourceMappingURL=borderStyle.cjs.js.map


/***/ }),

/***/ 6800:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements expansion for "border-top", it's simplified - check usage examples.
 *
 * @example
 *  borderTop('2px')
 *  borderTop('2px', 'solid')
 *  borderTop('2px', 'solid', 'red')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
 */
function borderTop(...values) {
  return {
    borderTopWidth: values[0],
    ...(values[1] && {
      borderTopStyle: values[1]
    }),
    ...(values[2] && {
      borderTopColor: values[2]
    })
  };
}

exports.borderTop = borderTop;
//# sourceMappingURL=borderTop.cjs.js.map


/***/ }),

/***/ 4439:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var generateStyles = __webpack_require__(2263);

/**
 * A function that implements CSS spec conformant expansion for "borderWidth"
 *
 * @example
 *   borderWidth('10px')
 *   borderWidth('10px', '5px')
 *   borderWidth('2px', '4px', '8px')
 *   borderWidth('1px', 0, '3px', '4px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
 */
function borderWidth(...values) {
  return generateStyles.generateStyles('border', 'Width', ...values);
}

exports.borderWidth = borderWidth;
//# sourceMappingURL=borderWidth.cjs.js.map


/***/ }),

/***/ 802:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const isUnit = value => typeof value === 'string' && /(\d+(\w+|%))/.test(value);
const isUnitless = value => typeof value === 'number' && !Number.isNaN(value);
const isInitial = value => value === 'initial';
const isAuto = value => value === 'auto';
const isNone = value => value === 'none';
const widthReservedKeys = ['content', 'fit-content', 'max-content', 'min-content'];
const isWidth = value => widthReservedKeys.some(key => value === key) || isUnit(value);
/**
 * A function that implements CSS spec conformant expansion for "flex".
 *
 * @example
 *   flex('auto')
 *   flex(1, '2.5rem')
 *   flex(0, 0, 'auto')
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
 */
function flex(...values) {
  const isOneValueSyntax = values.length === 1;
  const isTwoValueSyntax = values.length === 2;
  const isThreeValueSyntax = values.length === 3;
  if (isOneValueSyntax) {
    const [firstValue] = values;
    if (isInitial(firstValue)) {
      return {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto'
      };
    }
    if (isAuto(firstValue)) {
      return {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto'
      };
    }
    if (isNone(firstValue)) {
      return {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto'
      };
    }
    if (isUnitless(firstValue)) {
      return {
        flexGrow: firstValue,
        flexShrink: 1,
        flexBasis: 0
      };
    }
    if (isWidth(firstValue)) {
      return {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: firstValue
      };
    }
  }
  if (isTwoValueSyntax) {
    const [firstValue, secondValue] = values;
    if (isUnitless(secondValue)) {
      return {
        flexGrow: firstValue,
        flexShrink: secondValue,
        flexBasis: 0
      };
    }
    if (isWidth(secondValue)) {
      return {
        flexGrow: firstValue,
        flexShrink: 1,
        flexBasis: secondValue
      };
    }
  }
  if (isThreeValueSyntax) {
    const [firstValue, secondValue, thirdValue] = values;
    if (isUnitless(firstValue) && isUnitless(secondValue) && (isAuto(thirdValue) || isWidth(thirdValue))) {
      return {
        flexGrow: firstValue,
        flexShrink: secondValue,
        flexBasis: thirdValue
      };
    }
  }
  if (false) {}
  return {};
}

exports.flex = flex;
//# sourceMappingURL=flex.cjs.js.map


/***/ }),

/***/ 5234:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements CSS spec conformant expansion for "gap"
 *
 * @example
 *   gap('10px')
 *   gap('10px', '5px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/gap
 */
function gap(columnGap, rowGap = columnGap) {
  return {
    columnGap,
    rowGap
  };
}

exports.gap = gap;
//# sourceMappingURL=gap.cjs.js.map


/***/ }),

/***/ 2263:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const positionMap = ['Top', 'Right', 'Bottom', 'Left'];
function generateStyles(property, suffix, ...values) {
  const [firstValue, secondValue = firstValue, thirdValue = firstValue, fourthValue = secondValue] = values;
  const valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  const styles = {};
  for (let i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      const newKey = property + positionMap[i] + suffix;
      styles[newKey] = valuesWithDefaults[i];
    }
  }
  return styles;
}

exports.generateStyles = generateStyles;
//# sourceMappingURL=generateStyles.cjs.js.map


/***/ }),

/***/ 8143:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const cssVarRegEx = /var\(.*\)/gi;
function isValidGridAreaInput(value) {
  return value === undefined || typeof value === 'number' || typeof value === 'string' && !cssVarRegEx.test(value);
}
// A custom-ident can be an alpha-numeric string including dash (-), underscore, escaped (\) characters, and escaped unicode
const customIdentRegEx = /^[a-zA-Z0-9\-_\\#;]+$/;
const nonCustomIdentRegEx = /^-moz-initial$|^auto$|^initial$|^inherit$|^revert$|^unset$|^span \d+$|\d.*/;
// See https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident
function isCustomIdent(value) {
  return value !== undefined && typeof value === 'string' && customIdentRegEx.test(value) && !nonCustomIdentRegEx.test(value);
}
/**
 * A function that implements CSS spec conformant expansion for "grid-area"
 *
 * @example
 *   gridArea('auto')
 *   gridArea('first', 'second')
 *   gridArea(2, 4, 4)
 *   gridArea(2, 4, 1, 3)
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
 */
function gridArea(...values) {
  // if any value is not valid, then do not apply the CSS.
  if (values.some(value => !isValidGridAreaInput(value))) {
    if (false) {}
    return {};
  }
  const gridRowStart = values[0] !== undefined ? values[0] : 'auto';
  // When grid-column-start is omitted, if grid-row-start is a <custom-ident>,
  // all four longhands are set to that value.
  // Otherwise, it is set to auto.
  const gridColumnStart = values[1] !== undefined ? values[1] : isCustomIdent(gridRowStart) ? gridRowStart : 'auto';
  // When grid-row-end is omitted,
  // if grid-row-start is a <custom-ident>, grid-row-end is set to that <custom-ident>;
  // otherwise, it is set to auto.
  const gridRowEnd = values[2] !== undefined ? values[2] : isCustomIdent(gridRowStart) ? gridRowStart : 'auto';
  // When grid-column-end is omitted,
  // if grid-column-start is a <custom-ident>, grid-column-end is set to that <custom-ident>;
  // otherwise, it is set to auto.
  const gridColumnEnd = values[3] !== undefined ? values[3] : isCustomIdent(gridColumnStart) ? gridColumnStart : 'auto';
  return {
    gridRowStart,
    gridColumnStart,
    gridRowEnd,
    gridColumnEnd
  };
}

exports.gridArea = gridArea;
//# sourceMappingURL=gridArea.cjs.js.map


/***/ }),

/***/ 3249:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements CSS spec conformant expansion for "inset"
 *
 * @example
 *   inset('10px')
 *   inset('10px', '5px')
 *   inset('2px', '4px', '8px')
 *   inset('1px', 0, '3px', '4px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/inset
 */
function inset(...values) {
  const [firstValue, secondValue = firstValue, thirdValue = firstValue, fourthValue = secondValue] = values;
  return {
    top: firstValue,
    right: secondValue,
    bottom: thirdValue,
    left: fourthValue
  };
}

exports.inset = inset;
//# sourceMappingURL=inset.cjs.js.map


/***/ }),

/***/ 718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var generateStyles = __webpack_require__(2263);

/**
 * A function that implements CSS spec conformant expansion for "margin"
 *
 * @example
 *   margin('10px')
 *   margin('10px', '5px')
 *   margin('2px', '4px', '8px')
 *   margin('1px', 0, '3px', '4px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/margin
 */
function margin(...values) {
  return generateStyles.generateStyles('margin', '', ...values);
}

exports.margin = margin;
//# sourceMappingURL=margin.cjs.js.map


/***/ }),

/***/ 2707:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements CSS spec conformant expansion for "margin-block"
 *
 * @example
 *   marginBlock('10px')
 *   marginBlock('10px', '5px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block
 */
function marginBlock(start, end = start) {
  return {
    marginBlockStart: start,
    marginBlockEnd: end
  };
}

exports.marginBlock = marginBlock;
//# sourceMappingURL=marginBlock.cjs.js.map


/***/ }),

/***/ 2238:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements CSS spec conformant expansion for "margin-inline"
 *
 * @example
 *   marginInline('10px')
 *   marginInline('10px', '5px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline
 */
function marginInline(start, end = start) {
  return {
    marginInlineStart: start,
    marginInlineEnd: end
  };
}

exports.marginInline = marginInline;
//# sourceMappingURL=marginInline.cjs.js.map


/***/ }),

/***/ 9591:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements expansion for "outline", it's simplified - check usage examples.
 *
 * @example
 *  outline('2px')
 *  outline('2px', 'solid')
 *  outline('2px', 'solid', 'red')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/outline
 *
 */
function outline(outlineWidth, outlineStyle, outlineColor) {
  return {
    outlineWidth,
    ...(outlineStyle && {
      outlineStyle
    }),
    ...(outlineColor && {
      outlineColor
    })
  };
}

exports.outline = outline;
//# sourceMappingURL=outline.cjs.js.map


/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements CSS spec conformant expansion for "overflow"
 *
 * @example
 *   overflow('hidden')
 *   overflow('hidden', 'scroll')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
 */
function overflow(overflowX, overflowY = overflowX) {
  return {
    overflowX,
    overflowY
  };
}

exports.overflow = overflow;
//# sourceMappingURL=overflow.cjs.js.map


/***/ }),

/***/ 5626:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var generateStyles = __webpack_require__(2263);

/**
 * A function that implements CSS spec conformant expansion for "padding"
 *
 * @example
 *   padding('10px')
 *   padding('10px', '5px')
 *   padding('2px', '4px', '8px')
 *   padding('1px', 0, '3px', '4px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/padding
 */
function padding(...values) {
  return generateStyles.generateStyles('padding', '', ...values);
}

exports.padding = padding;
//# sourceMappingURL=padding.cjs.js.map


/***/ }),

/***/ 8533:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements CSS spec conformant expansion for "padding-block"
 *
 * @example
 *   paddingBlock('10px')
 *   paddingBlock('10px', '5px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block
 */
function paddingBlock(start, end = start) {
  return {
    paddingBlockStart: start,
    paddingBlockEnd: end
  };
}

exports.paddingBlock = paddingBlock;
//# sourceMappingURL=paddingBlock.cjs.js.map


/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements CSS spec conformant expansion for "padding-inline"
 *
 * @example
 *   paddingInline('10px')
 *   paddingInline('10px', '5px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline
 */
function paddingInline(start, end = start) {
  return {
    paddingInlineStart: start,
    paddingInlineEnd: end
  };
}

exports.paddingInline = paddingInline;
//# sourceMappingURL=paddingInline.cjs.js.map


/***/ }),

/***/ 8986:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * A function that implements expansion for "transition", it's simplified - check usage examples.
 *
 * @example
 *  transition('inherit')
 *  transition('margin-right', '4s')
 *  transition('margin-right', '4s', '1s')
 *  transition('margin-right', '4s', '1s', 'ease-in')
 *  transition([
 *    ['margin-right', '4s', '1s', 'ease-in'],
 *    ['margin-right', '4s', '1s', 'ease-in'],
 * ])
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/transition
 */
function transition(...values) {
  if (isTransitionGlobalInputs(values)) {
    return {
      transitionDelay: values[0],
      transitionDuration: values[0],
      transitionProperty: values[0],
      transitionTimingFunction: values[0]
    };
  }
  const transitionInputs = normalizeTransitionInputs(values);
  return transitionInputs.reduce((acc, [property, duration = '0s', delay = '0s', timingFunction = 'ease'], index) => {
    if (index === 0) {
      acc.transitionProperty = property;
      acc.transitionDuration = duration;
      acc.transitionDelay = delay;
      acc.transitionTimingFunction = timingFunction;
    } else {
      acc.transitionProperty += `, ${property}`;
      acc.transitionDuration += `, ${duration}`;
      acc.transitionDelay += `, ${delay}`;
      acc.transitionTimingFunction += `, ${timingFunction}`;
    }
    return acc;
  }, {});
}
const transitionGlobalInputs = ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'];
function isTransitionGlobalInputs(values) {
  return values.length === 1 && transitionGlobalInputs.includes(values[0]);
}
function normalizeTransitionInputs(transitionInputs) {
  if (transitionInputs.length === 1 && Array.isArray(transitionInputs[0])) {
    return transitionInputs[0];
  }
  return [transitionInputs];
}

exports.transition = transition;
//# sourceMappingURL=transition.cjs.js.map


/***/ }),

/***/ 1092:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(4402);
var React = __webpack_require__(8038);

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/**
 * Verifies if an application can use DOM.
 */
function canUseDOM() {
  return typeof window !== 'undefined' && !!(window.document && window.document.createElement);
}
/**
 * @private
 */
const RendererContext = /*#__PURE__*/React__namespace.createContext( /*#__PURE__*/core.createDOMRenderer());
/**
 * @public
 */
const RendererProvider = ({
  children,
  renderer,
  targetDocument
}) => {
  if (canUseDOM()) {
    // This if statement technically breaks the rules of hooks, but is safe because the condition never changes after
    // mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React__namespace.useMemo(() => {
      // "rehydrateCache()" can't be called in effects as it needs to be called before any component will be rendered to
      // avoid double insertion of classes
      core.rehydrateRendererCache(renderer, targetDocument);
    }, [renderer, targetDocument]);
  }
  return /*#__PURE__*/React__namespace.createElement(RendererContext.Provider, {
    value: renderer
  }, children);
};
/**
 * Returns an instance of current makeStyles() renderer.
 *
 * @private Exported as "useRenderer_unstable" use it on own risk. Can be changed or removed without a notice.
 */
function useRenderer() {
  return React__namespace.useContext(RendererContext);
}

exports.RendererProvider = RendererProvider;
exports.useRenderer = useRenderer;
//# sourceMappingURL=RendererContext.cjs.js.map


/***/ }),

/***/ 1353:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(8038);

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/**
 * @private
 */
const TextDirectionContext = /*#__PURE__*/React__namespace.createContext('ltr');
/**
 * @public
 */
const TextDirectionProvider = ({
  children,
  dir
}) => {
  return /*#__PURE__*/React__namespace.createElement(TextDirectionContext.Provider, {
    value: dir
  }, children);
};
/**
 * Returns current directionality of the element's text.
 *
 * @private
 */
function useTextDirection() {
  return React__namespace.useContext(TextDirectionContext);
}

exports.TextDirectionProvider = TextDirectionProvider;
exports.useTextDirection = useTextDirection;
//# sourceMappingURL=TextDirectionContext.cjs.js.map


/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(4402);
var TextDirectionContext = __webpack_require__(1353);

/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms & DOM insertion.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function __css(classesMapBySlot) {
  const getStyles = core.__css(classesMapBySlot);
  return function useClasses() {
    const dir = TextDirectionContext.useTextDirection();
    return getStyles({
      dir
    });
  };
}

exports.__css = __css;
//# sourceMappingURL=__css.cjs.js.map


/***/ }),

/***/ 1010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(4402);
var TextDirectionContext = __webpack_require__(1353);

/**
 * A version of makeResetStyles() that accepts build output as an input and skips all runtime transforms & DOM insertion.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function __resetCSS(ltrClassName, rtlClassName) {
  const getStyles = core.__resetCSS(ltrClassName, rtlClassName);
  return function useClasses() {
    const dir = TextDirectionContext.useTextDirection();
    return getStyles({
      dir
    });
  };
}

exports.__resetCSS = __resetCSS;
//# sourceMappingURL=__resetCSS.cjs.js.map


/***/ }),

/***/ 8132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(4402);
var RendererContext = __webpack_require__(1092);
var TextDirectionContext = __webpack_require__(1353);

/**
 * A version of makeResetStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function __resetStyles(ltrClassName, rtlClassName, cssRules) {
  const getStyles = core.__resetStyles(ltrClassName, rtlClassName, cssRules);
  return function useClasses() {
    const dir = TextDirectionContext.useTextDirection();
    const renderer = RendererContext.useRenderer();
    return getStyles({
      dir,
      renderer
    });
  };
}

exports.__resetStyles = __resetStyles;
//# sourceMappingURL=__resetStyles.cjs.js.map


/***/ }),

/***/ 7410:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(4402);
var RendererContext = __webpack_require__(1092);
var TextDirectionContext = __webpack_require__(1353);

/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function __styles(classesMapBySlot, cssRules) {
  const getStyles = core.__styles(classesMapBySlot, cssRules);
  return function useClasses() {
    const dir = TextDirectionContext.useTextDirection();
    const renderer = RendererContext.useRenderer();
    return getStyles({
      dir,
      renderer
    });
  };
}

exports.__styles = __styles;
//# sourceMappingURL=__styles.cjs.js.map


/***/ }),

/***/ 3506:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var core = __webpack_require__(4402);
var makeStyles = __webpack_require__(6979);
var makeResetStyles = __webpack_require__(975);
var makeStaticStyles = __webpack_require__(1852);
var renderToStyleElements = __webpack_require__(9436);
var RendererContext = __webpack_require__(1092);
var TextDirectionContext = __webpack_require__(1353);
var __css = __webpack_require__(6);
var __styles = __webpack_require__(7410);
var __resetCSS = __webpack_require__(1010);
var __resetStyles = __webpack_require__(8132);



__webpack_unused_export__ = ({
	enumerable: true,
	get: function () { return core.createDOMRenderer; }
});
Object.defineProperty(exports, "ze", ({
	enumerable: true,
	get: function () { return core.mergeClasses; }
}));
__webpack_unused_export__ = ({
	enumerable: true,
	get: function () { return core.shorthands; }
});
__webpack_unused_export__ = makeStyles.makeStyles;
__webpack_unused_export__ = makeResetStyles.makeResetStyles;
__webpack_unused_export__ = makeStaticStyles.makeStaticStyles;
__webpack_unused_export__ = renderToStyleElements.renderToStyleElements;
__webpack_unused_export__ = RendererContext.RendererProvider;
__webpack_unused_export__ = RendererContext.useRenderer;
__webpack_unused_export__ = TextDirectionContext.TextDirectionProvider;
__webpack_unused_export__ = __css.__css;
exports.sF = __styles.__styles;
__webpack_unused_export__ = __resetCSS.__resetCSS;
__webpack_unused_export__ = __resetStyles.__resetStyles;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ 975:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(4402);
var isInsideComponent = __webpack_require__(1618);
var RendererContext = __webpack_require__(1092);
var TextDirectionContext = __webpack_require__(1353);

function makeResetStyles(styles) {
  const getStyles = core.makeResetStyles(styles);
  if (false) {}
  return function useClassName() {
    const dir = TextDirectionContext.useTextDirection();
    const renderer = RendererContext.useRenderer();
    return getStyles({
      dir,
      renderer
    });
  };
}

exports.makeResetStyles = makeResetStyles;
//# sourceMappingURL=makeResetStyles.cjs.js.map


/***/ }),

/***/ 1852:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(4402);
var RendererContext = __webpack_require__(1092);

function makeStaticStyles(styles) {
  const getStyles = core.makeStaticStyles(styles);
  if (false) {}
  return function useStaticStyles() {
    const renderer = RendererContext.useRenderer();
    const options = {
      renderer
    };
    return getStyles(options);
  };
}

exports.makeStaticStyles = makeStaticStyles;
//# sourceMappingURL=makeStaticStyles.cjs.js.map


/***/ }),

/***/ 6979:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(4402);
var isInsideComponent = __webpack_require__(1618);
var RendererContext = __webpack_require__(1092);
var TextDirectionContext = __webpack_require__(1353);

function makeStyles(stylesBySlots) {
  const getStyles = core.makeStyles(stylesBySlots);
  if (false) {}
  return function useClasses() {
    const dir = TextDirectionContext.useTextDirection();
    const renderer = RendererContext.useRenderer();
    return getStyles({
      dir,
      renderer
    });
  };
}

exports.makeStyles = makeStyles;
//# sourceMappingURL=makeStyles.cjs.js.map


/***/ }),

/***/ 9436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(4402);
var React = __webpack_require__(8038);

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/**
 * This method returns a list of <style> React elements with the rendered CSS. This is useful for Server-Side rendering.
 *
 * @public
 */
function renderToStyleElements(renderer) {
  const stylesheets = Object.values(renderer.stylesheets)
  // first sort: bucket names
  .sort((a, b) => {
    return core.styleBucketOrdering.indexOf(a.bucketName) - core.styleBucketOrdering.indexOf(b.bucketName);
  })
  // second sort: media queries
  .sort((a, b) => {
    const mediaA = a.elementAttributes['media'];
    const mediaB = b.elementAttributes['media'];
    if (mediaA && mediaB) {
      return renderer.compareMediaQueries(mediaA, mediaB);
    }
    if (mediaA || mediaB) {
      return mediaA ? 1 : -1;
    }
    return 0;
  });
  return stylesheets.map(stylesheet => {
    const cssRules = stylesheet.cssRules();
    // don't want to create any empty style elements
    if (!cssRules.length) {
      return null;
    }
    return /*#__PURE__*/React__namespace.createElement('style', {
      key: stylesheet.bucketName,
      // TODO: support "nonce"
      // ...renderer.styleNodeAttributes,
      ...stylesheet.elementAttributes,
      'data-make-styles-rehydration': 'true',
      dangerouslySetInnerHTML: {
        __html: cssRules.join('')
      }
    });
  }).filter(Boolean);
}

exports.renderToStyleElements = renderToStyleElements;
//# sourceMappingURL=renderToStyleElements.cjs.js.map


/***/ }),

/***/ 1618:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(8038);

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function isInsideComponent() {
  // React 18 always logs errors if a dispatcher is not present:
  // https://github.com/facebook/react/blob/42f15b324f50d0fd98322c21646ac3013e30344a/packages/react/src/ReactHooks.js#L26-L36
  try {
    // @ts-expect-error "SECRET_INTERNALS" are not typed
    const dispatcher = React__namespace.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current;
    // Before any React component was rendered "dispatcher" will be "null"
    if (dispatcher === null || dispatcher === undefined) {
      return false;
    }
    // A check with hooks call (i.e. call "React.useContext()" outside a component) will always produce errors, but
    // a call on the dispatcher wont
    dispatcher.useContext({});
    return true;
  } catch (e) {
    return false;
  }
}

exports.isInsideComponent = isInsideComponent;
//# sourceMappingURL=isInsideComponent.cjs.js.map


/***/ }),

/***/ 2148:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(6089);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 9067:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 7977:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(5967);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _resolvehref = __webpack_require__(7782);
const _islocalurl = __webpack_require__(1109);
const _formaturl = __webpack_require__(3938);
const _utils = __webpack_require__(9232);
const _addlocale = __webpack_require__(2148);
const _routercontext = __webpack_require__(4964);
const _approutercontext = __webpack_require__(3280);
const _useintersection = __webpack_require__(8670);
const _getdomainlocale = __webpack_require__(9067);
const _addbasepath = __webpack_require__(739);
const _routerreducertypes = __webpack_require__(549);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp = null , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter: onMouseEnterProp , onTouchStart: onTouchStartProp , legacyBehavior =true === false , ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    const pagesRouter = _react.default.useContext(_routercontext.RouterContext);
    const appRouter = _react.default.useContext(_approutercontext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    if (false) {}
    const { href , as  } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", {
        ...restProps,
        ...childProps
    }, children);
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 6460:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 8670:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(8038);
const _requestidlecallback = __webpack_require__(6460);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef , rootMargin , disabled  } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 1621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7977)


/***/ }),

/***/ 3551:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Takes an array of [keyValue1, keyValue2] pairs and creates an object of {keyValue1: keyValue2, keyValue2: keyValue1}
 * @param {Array} array the array of pairs
 * @return {Object} the {key, value} pair object
 */
function arrayToObject(array) {
  return array.reduce(function (obj, _ref) {
    var prop1 = _ref[0],
      prop2 = _ref[1];
    obj[prop1] = prop2;
    obj[prop2] = prop1;
    return obj;
  }, {});
}
function isBoolean(val) {
  return typeof val === 'boolean';
}
function isFunction(val) {
  return typeof val === 'function';
}
function isNumber(val) {
  return typeof val === 'number';
}
function isNullOrUndefined(val) {
  return val === null || typeof val === 'undefined';
}
function isObject(val) {
  return val && typeof val === 'object';
}
function isString(val) {
  return typeof val === 'string';
}
function includes(inclusive, inclusee) {
  return inclusive.indexOf(inclusee) !== -1;
}

/**
 * Flip the sign of a CSS value, possibly with a unit.
 *
 * We can't just negate the value with unary minus due to the units.
 *
 * @private
 * @param {String} value - the original value (for example 77%)
 * @return {String} the result (for example -77%)
 */
function flipSign(value) {
  if (parseFloat(value) === 0) {
    // Don't mangle zeroes
    return value;
  }
  if (value[0] === '-') {
    return value.slice(1);
  }
  return "-" + value;
}
function flipTransformSign(match, prefix, offset, suffix) {
  return prefix + flipSign(offset) + suffix;
}

/**
 * Takes a percentage for background position and inverts it.
 * This was copied and modified from CSSJanus:
 * https://github.com/cssjanus/cssjanus/blob/4245f834365f6cfb0239191a151432fb85abab23/src/cssjanus.js#L152-L175
 * @param {String} value - the original value (for example 77%)
 * @return {String} the result (for example 23%)
 */
function calculateNewBackgroundPosition(value) {
  var idx = value.indexOf('.');
  if (idx === -1) {
    value = 100 - parseFloat(value) + "%";
  } else {
    // Two off, one for the "%" at the end, one for the dot itself
    var len = value.length - idx - 2;
    value = 100 - parseFloat(value);
    value = value.toFixed(len) + "%";
  }
  return value;
}

/**
 * This takes a list of CSS values and converts it to an array
 * @param {String} value - something like `1px`, `1px 2em`, or `3pt rgb(150, 230, 550) 40px calc(100% - 5px)`
 * @return {Array} the split values (for example: `['3pt', 'rgb(150, 230, 550)', '40px', 'calc(100% - 5px)']`)
 */
function getValuesAsList(value) {
  return value.replace(/ +/g, ' ') // remove all extraneous spaces
  .split(' ').map(function (i) {
    return i.trim();
  }) // get rid of extra space before/after each item
  .filter(Boolean) // get rid of empty strings
  // join items which are within parenthese
  // luckily `calc (100% - 5px)` is invalid syntax and it must be `calc(100% - 5px)`, otherwise this would be even more complex
  .reduce(function (_ref2, item) {
    var list = _ref2.list,
      state = _ref2.state;
    var openParansCount = (item.match(/\(/g) || []).length;
    var closedParansCount = (item.match(/\)/g) || []).length;
    if (state.parensDepth > 0) {
      list[list.length - 1] = list[list.length - 1] + " " + item;
    } else {
      list.push(item);
    }
    state.parensDepth += openParansCount - closedParansCount;
    return {
      list: list,
      state: state
    };
  }, {
    list: [],
    state: {
      parensDepth: 0
    }
  }).list;
}

/**
 * This is intended for properties that are `top right bottom left` and will switch them to `top left bottom right`
 * @param {String} value - `1px 2px 3px 4px` for example, but also handles cases where there are too few/too many and
 * simply returns the value in those cases (which is the correct behavior)
 * @return {String} the result - `1px 4px 3px 2px` for example.
 */
function handleQuartetValues(value) {
  var splitValues = getValuesAsList(value);
  if (splitValues.length <= 3 || splitValues.length > 4) {
    return value;
  }
  var top = splitValues[0],
    right = splitValues[1],
    bottom = splitValues[2],
    left = splitValues[3];
  return [top, left, bottom, right].join(' ');
}

/**
 *
 * @param {String|Number|Object} value css property value to test
 * @returns If the css property value can(should?) have an RTL equivalent
 */
function canConvertValue(value) {
  return !isBoolean(value) && !isNullOrUndefined(value);
}

/**
 * Splits a shadow style into its separate shadows using the comma delimiter, but creating an exception
 * for comma separated values in parentheses often used for rgba colours.
 * @param {String} value
 * @returns {Array} array of all box shadow values in the string
 */
function splitShadow(value) {
  var shadows = [];
  var start = 0;
  var end = 0;
  var rgba = false;
  while (end < value.length) {
    if (!rgba && value[end] === ',') {
      shadows.push(value.substring(start, end).trim());
      end++;
      start = end;
    } else if (value[end] === "(") {
      rgba = true;
      end++;
    } else if (value[end] === ')') {
      rgba = false;
      end++;
    } else {
      end++;
    }
  }

  // push the last shadow value if there is one
  // istanbul ignore next
  if (start != end) {
    shadows.push(value.substring(start, end + 1));
  }
  return shadows;
}

// some values require a little fudging, that fudging goes here.
var propertyValueConverters = {
  padding: function padding(_ref) {
    var value = _ref.value;
    if (isNumber(value)) {
      return value;
    }
    return handleQuartetValues(value);
  },
  textShadow: function textShadow(_ref2) {
    var value = _ref2.value;
    var flippedShadows = splitShadow(value).map(function (shadow) {
      // intentionally leaving off the `g` flag here because we only want to change the first number (which is the offset-x)
      return shadow.replace(/(^|\s)(-*)([.|\d]+)/, function (match, whiteSpace, negative, number) {
        if (number === '0') {
          return match;
        }
        var doubleNegative = negative === '' ? '-' : '';
        return "" + whiteSpace + doubleNegative + number;
      });
    });
    return flippedShadows.join(',');
  },
  borderColor: function borderColor(_ref3) {
    var value = _ref3.value;
    return handleQuartetValues(value);
  },
  borderRadius: function borderRadius(_ref4) {
    var value = _ref4.value;
    if (isNumber(value)) {
      return value;
    }
    if (includes(value, '/')) {
      var _value$split = value.split('/'),
        radius1 = _value$split[0],
        radius2 = _value$split[1];
      var convertedRadius1 = propertyValueConverters.borderRadius({
        value: radius1.trim()
      });
      var convertedRadius2 = propertyValueConverters.borderRadius({
        value: radius2.trim()
      });
      return convertedRadius1 + " / " + convertedRadius2;
    }
    var splitValues = getValuesAsList(value);
    switch (splitValues.length) {
      case 2:
        {
          return splitValues.reverse().join(' ');
        }
      case 4:
        {
          var topLeft = splitValues[0],
            topRight = splitValues[1],
            bottomRight = splitValues[2],
            bottomLeft = splitValues[3];
          return [topRight, topLeft, bottomLeft, bottomRight].join(' ');
        }
      default:
        {
          return value;
        }
    }
  },
  background: function background(_ref5) {
    var value = _ref5.value,
      valuesToConvert = _ref5.valuesToConvert,
      isRtl = _ref5.isRtl,
      bgImgDirectionRegex = _ref5.bgImgDirectionRegex,
      bgPosDirectionRegex = _ref5.bgPosDirectionRegex;
    if (isNumber(value)) {
      return value;
    }

    // Yeah, this is in need of a refactor 🙃...
    // but this property is a tough cookie 🍪
    // get the backgroundPosition out of the string by removing everything that couldn't be the backgroundPosition value
    var backgroundPositionValue = value.replace(/(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g, '').trim();
    // replace that backgroundPosition value with the converted version
    value = value.replace(backgroundPositionValue, propertyValueConverters.backgroundPosition({
      value: backgroundPositionValue,
      valuesToConvert: valuesToConvert,
      isRtl: isRtl,
      bgPosDirectionRegex: bgPosDirectionRegex
    }));
    // do the backgroundImage value replacing on the whole value (because why not?)
    return propertyValueConverters.backgroundImage({
      value: value,
      valuesToConvert: valuesToConvert,
      bgImgDirectionRegex: bgImgDirectionRegex
    });
  },
  backgroundImage: function backgroundImage(_ref6) {
    var value = _ref6.value,
      valuesToConvert = _ref6.valuesToConvert,
      bgImgDirectionRegex = _ref6.bgImgDirectionRegex;
    if (!includes(value, 'url(') && !includes(value, 'linear-gradient(')) {
      return value;
    }
    return value.replace(bgImgDirectionRegex, function (match, g1, group2) {
      return match.replace(group2, valuesToConvert[group2]);
    });
  },
  backgroundPosition: function backgroundPosition(_ref7) {
    var value = _ref7.value,
      valuesToConvert = _ref7.valuesToConvert,
      isRtl = _ref7.isRtl,
      bgPosDirectionRegex = _ref7.bgPosDirectionRegex;
    return value
    // intentionally only grabbing the first instance of this because that represents `left`
    .replace(isRtl ? /^((-|\d|\.)+%)/ : null, function (match, group) {
      return calculateNewBackgroundPosition(group);
    }).replace(bgPosDirectionRegex, function (match) {
      return valuesToConvert[match];
    });
  },
  backgroundPositionX: function backgroundPositionX(_ref8) {
    var value = _ref8.value,
      valuesToConvert = _ref8.valuesToConvert,
      isRtl = _ref8.isRtl,
      bgPosDirectionRegex = _ref8.bgPosDirectionRegex;
    if (isNumber(value)) {
      return value;
    }
    return propertyValueConverters.backgroundPosition({
      value: value,
      valuesToConvert: valuesToConvert,
      isRtl: isRtl,
      bgPosDirectionRegex: bgPosDirectionRegex
    });
  },
  transition: function transition(_ref9) {
    var value = _ref9.value,
      propertiesToConvert = _ref9.propertiesToConvert;
    return value.split(/,\s*/g).map(function (transition) {
      var values = transition.split(' ');

      // Property is always defined first
      values[0] = propertiesToConvert[values[0]] || values[0];
      return values.join(' ');
    }).join(', ');
  },
  transitionProperty: function transitionProperty(_ref10) {
    var value = _ref10.value,
      propertiesToConvert = _ref10.propertiesToConvert;
    return value.split(/,\s*/g).map(function (prop) {
      return propertiesToConvert[prop] || prop;
    }).join(', ');
  },
  transform: function transform(_ref11) {
    var value = _ref11.value;
    // This was copied and modified from CSSJanus:
    // https://github.com/cssjanus/cssjanus/blob/4a40f001b1ba35567112d8b8e1d9d95eda4234c3/src/cssjanus.js#L152-L153
    var nonAsciiPattern = "[^\\u0020-\\u007e]";
    var escapePattern = "(?:" + '(?:(?:\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)' + "|\\\\[^\\r\\n\\f0-9a-f])";
    var signedQuantPattern = "((?:-?" + ('(?:[0-9]*\\.[0-9]+|[0-9]+)' + "(?:\\s*" + '(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)' + "|" + ("-?" + ("(?:[_a-z]|" + nonAsciiPattern + "|" + escapePattern + ")") + ("(?:[_a-z0-9-]|" + nonAsciiPattern + "|" + escapePattern + ")") + "*") + ")?") + ")|(?:inherit|auto))";
    var translateXRegExp = new RegExp("(translateX\\s*\\(\\s*)" + signedQuantPattern + "(\\s*\\))", 'gi');
    var translateRegExp = new RegExp("(translate\\s*\\(\\s*)" + signedQuantPattern + "((?:\\s*,\\s*" + signedQuantPattern + "){0,1}\\s*\\))", 'gi');
    var translate3dRegExp = new RegExp("(translate3d\\s*\\(\\s*)" + signedQuantPattern + "((?:\\s*,\\s*" + signedQuantPattern + "){0,2}\\s*\\))", 'gi');
    var rotateRegExp = new RegExp("(rotate[ZY]?\\s*\\(\\s*)" + signedQuantPattern + "(\\s*\\))", 'gi');
    return value.replace(translateXRegExp, flipTransformSign).replace(translateRegExp, flipTransformSign).replace(translate3dRegExp, flipTransformSign).replace(rotateRegExp, flipTransformSign);
  }
};
propertyValueConverters.objectPosition = propertyValueConverters.backgroundPosition;
propertyValueConverters.margin = propertyValueConverters.padding;
propertyValueConverters.borderWidth = propertyValueConverters.padding;
propertyValueConverters.boxShadow = propertyValueConverters.textShadow;
propertyValueConverters.webkitBoxShadow = propertyValueConverters.boxShadow;
propertyValueConverters.mozBoxShadow = propertyValueConverters.boxShadow;
propertyValueConverters.WebkitBoxShadow = propertyValueConverters.boxShadow;
propertyValueConverters.MozBoxShadow = propertyValueConverters.boxShadow;
propertyValueConverters.borderStyle = propertyValueConverters.borderColor;
propertyValueConverters.webkitTransform = propertyValueConverters.transform;
propertyValueConverters.mozTransform = propertyValueConverters.transform;
propertyValueConverters.WebkitTransform = propertyValueConverters.transform;
propertyValueConverters.MozTransform = propertyValueConverters.transform;
propertyValueConverters.transformOrigin = propertyValueConverters.backgroundPosition;
propertyValueConverters.webkitTransformOrigin = propertyValueConverters.transformOrigin;
propertyValueConverters.mozTransformOrigin = propertyValueConverters.transformOrigin;
propertyValueConverters.WebkitTransformOrigin = propertyValueConverters.transformOrigin;
propertyValueConverters.MozTransformOrigin = propertyValueConverters.transformOrigin;
propertyValueConverters.webkitTransition = propertyValueConverters.transition;
propertyValueConverters.mozTransition = propertyValueConverters.transition;
propertyValueConverters.WebkitTransition = propertyValueConverters.transition;
propertyValueConverters.MozTransition = propertyValueConverters.transition;
propertyValueConverters.webkitTransitionProperty = propertyValueConverters.transitionProperty;
propertyValueConverters.mozTransitionProperty = propertyValueConverters.transitionProperty;
propertyValueConverters.WebkitTransitionProperty = propertyValueConverters.transitionProperty;
propertyValueConverters.MozTransitionProperty = propertyValueConverters.transitionProperty;

// kebab-case versions

propertyValueConverters['text-shadow'] = propertyValueConverters.textShadow;
propertyValueConverters['border-color'] = propertyValueConverters.borderColor;
propertyValueConverters['border-radius'] = propertyValueConverters.borderRadius;
propertyValueConverters['background-image'] = propertyValueConverters.backgroundImage;
propertyValueConverters['background-position'] = propertyValueConverters.backgroundPosition;
propertyValueConverters['background-position-x'] = propertyValueConverters.backgroundPositionX;
propertyValueConverters['object-position'] = propertyValueConverters.objectPosition;
propertyValueConverters['border-width'] = propertyValueConverters.padding;
propertyValueConverters['box-shadow'] = propertyValueConverters.textShadow;
propertyValueConverters['-webkit-box-shadow'] = propertyValueConverters.textShadow;
propertyValueConverters['-moz-box-shadow'] = propertyValueConverters.textShadow;
propertyValueConverters['border-style'] = propertyValueConverters.borderColor;
propertyValueConverters['-webkit-transform'] = propertyValueConverters.transform;
propertyValueConverters['-moz-transform'] = propertyValueConverters.transform;
propertyValueConverters['transform-origin'] = propertyValueConverters.transformOrigin;
propertyValueConverters['-webkit-transform-origin'] = propertyValueConverters.transformOrigin;
propertyValueConverters['-moz-transform-origin'] = propertyValueConverters.transformOrigin;
propertyValueConverters['-webkit-transition'] = propertyValueConverters.transition;
propertyValueConverters['-moz-transition'] = propertyValueConverters.transition;
propertyValueConverters['transition-property'] = propertyValueConverters.transitionProperty;
propertyValueConverters['-webkit-transition-property'] = propertyValueConverters.transitionProperty;
propertyValueConverters['-moz-transition-property'] = propertyValueConverters.transitionProperty;

// this will be an object of properties that map to their corresponding rtl property (their doppelganger)
var propertiesToConvert = arrayToObject([['paddingLeft', 'paddingRight'], ['marginLeft', 'marginRight'], ['left', 'right'], ['borderLeft', 'borderRight'], ['borderLeftColor', 'borderRightColor'], ['borderLeftStyle', 'borderRightStyle'], ['borderLeftWidth', 'borderRightWidth'], ['borderTopLeftRadius', 'borderTopRightRadius'], ['borderBottomLeftRadius', 'borderBottomRightRadius'],
// kebab-case versions
['padding-left', 'padding-right'], ['margin-left', 'margin-right'], ['border-left', 'border-right'], ['border-left-color', 'border-right-color'], ['border-left-style', 'border-right-style'], ['border-left-width', 'border-right-width'], ['border-top-left-radius', 'border-top-right-radius'], ['border-bottom-left-radius', 'border-bottom-right-radius']]);
var propsToIgnore = ['content'];

// this is the same as the propertiesToConvert except for values
var valuesToConvert = arrayToObject([['ltr', 'rtl'], ['left', 'right'], ['w-resize', 'e-resize'], ['sw-resize', 'se-resize'], ['nw-resize', 'ne-resize']]);

// Sorry for the regex 😞, but basically thisis used to replace _every_ instance of
// `ltr`, `rtl`, `right`, and `left` in `backgroundimage` with the corresponding opposite.
// A situation we're accepting here:
// url('/left/right/rtl/ltr.png') will be changed to url('/right/left/ltr/rtl.png')
// Definite trade-offs here, but I think it's a good call.
var bgImgDirectionRegex = new RegExp('(^|\\W|_)((ltr)|(rtl)|(left)|(right))(\\W|_|$)', 'g');
var bgPosDirectionRegex = new RegExp('(left)|(right)');

/**
 * converts properties and values in the CSS in JS object to their corresponding RTL values
 * @param {Object} object the CSS in JS object
 * @return {Object} the RTL converted object
 */
function convert(object) {
  return Object.keys(object).reduce(function (newObj, originalKey) {
    var originalValue = object[originalKey];
    if (isString(originalValue)) {
      // you're welcome to later code 😺
      originalValue = originalValue.trim();
    }

    // Some properties should never be transformed
    if (includes(propsToIgnore, originalKey)) {
      newObj[originalKey] = originalValue;
      return newObj;
    }
    var _convertProperty = convertProperty(originalKey, originalValue),
      key = _convertProperty.key,
      value = _convertProperty.value;
    newObj[key] = value;
    return newObj;
  }, Array.isArray(object) ? [] : {});
}

/**
 * Converts a property and its value to the corresponding RTL key and value
 * @param {String} originalKey the original property key
 * @param {Number|String|Object} originalValue the original css property value
 * @return {Object} the new {key, value} pair
 */
function convertProperty(originalKey, originalValue) {
  var isNoFlip = /\/\*\s?@noflip\s?\*\//.test(originalValue);
  var key = isNoFlip ? originalKey : getPropertyDoppelganger(originalKey);
  var value = isNoFlip ? originalValue : getValueDoppelganger(key, originalValue);
  return {
    key: key,
    value: value
  };
}

/**
 * This gets the RTL version of the given property if it has a corresponding RTL property
 * @param {String} property the name of the property
 * @return {String} the name of the RTL property
 */
function getPropertyDoppelganger(property) {
  return propertiesToConvert[property] || property;
}

/**
 * This converts the given value to the RTL version of that value based on the key
 * @param {String} key this is the key (note: this should be the RTL version of the originalKey)
 * @param {String|Number|Object} originalValue the original css property value. If it's an object, then we'll convert that as well
 * @return {String|Number|Object} the converted value
 */
function getValueDoppelganger(key, originalValue) {
  if (!canConvertValue(originalValue)) {
    return originalValue;
  }
  if (isObject(originalValue)) {
    return convert(originalValue); // recursion 🌀
  }

  var isNum = isNumber(originalValue);
  var isFunc = isFunction(originalValue);
  var importantlessValue = isNum || isFunc ? originalValue : originalValue.replace(/ !important.*?$/, '');
  var isImportant = !isNum && importantlessValue.length !== originalValue.length;
  var valueConverter = propertyValueConverters[key];
  var newValue;
  if (valueConverter) {
    newValue = valueConverter({
      value: importantlessValue,
      valuesToConvert: valuesToConvert,
      propertiesToConvert: propertiesToConvert,
      isRtl: true,
      bgImgDirectionRegex: bgImgDirectionRegex,
      bgPosDirectionRegex: bgPosDirectionRegex
    });
  } else {
    newValue = valuesToConvert[importantlessValue] || importantlessValue;
  }
  if (isImportant) {
    return newValue + " !important";
  }
  return newValue;
}

exports.arrayToObject = arrayToObject;
exports.calculateNewBackgroundPosition = calculateNewBackgroundPosition;
exports.canConvertValue = canConvertValue;
exports.convert = convert;
exports.convertProperty = convertProperty;
exports.flipSign = flipSign;
exports.flipTransformSign = flipTransformSign;
exports.getPropertyDoppelganger = getPropertyDoppelganger;
exports.getValueDoppelganger = getValueDoppelganger;
exports.getValuesAsList = getValuesAsList;
exports.handleQuartetValues = handleQuartetValues;
exports.includes = includes;
exports.isBoolean = isBoolean;
exports.isFunction = isFunction;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.propertiesToConvert = propertiesToConvert;
exports.propertyValueConverters = propertyValueConverters;
exports.propsToIgnore = propsToIgnore;
exports.splitShadow = splitShadow;
exports.valuesToConvert = valuesToConvert;


/***/ }),

/***/ 1990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var convert = __webpack_require__(3551);



exports.arrayToObject = convert.arrayToObject;
exports.calculateNewBackgroundPosition = convert.calculateNewBackgroundPosition;
exports.calculateNewTranslate = convert.flipTransformSign;
exports.canConvertValue = convert.canConvertValue;
exports.convert = convert.convert;
exports.convertProperty = convert.convertProperty;
exports.flipSign = convert.flipSign;
exports.flipTransformSign = convert.flipTransformSign;
exports.getPropertyDoppelganger = convert.getPropertyDoppelganger;
exports.getValueDoppelganger = convert.getValueDoppelganger;
exports.getValuesAsList = convert.getValuesAsList;
exports.handleQuartetValues = convert.handleQuartetValues;
exports.includes = convert.includes;
exports.isBoolean = convert.isBoolean;
exports.isFunction = convert.isFunction;
exports.isNullOrUndefined = convert.isNullOrUndefined;
exports.isNumber = convert.isNumber;
exports.isObject = convert.isObject;
exports.isString = convert.isString;
exports.propertiesToConvert = convert.propertiesToConvert;
exports.propertyValueConverters = convert.propertyValueConverters;
exports.propsToIgnore = convert.propsToIgnore;
exports.splitShadow = convert.splitShadow;
exports.valuesToConvert = convert.valuesToConvert;


/***/ }),

/***/ 3531:
/***/ (function(__unused_webpack_module, exports) {

(function(e,r){ true?r(exports):0})(this,(function(e){"use strict";var r="-ms-";var a="-moz-";var c="-webkit-";var n="comm";var t="rule";var s="decl";var i="@page";var u="@media";var o="@import";var f="@charset";var l="@viewport";var p="@supports";var h="@document";var v="@namespace";var d="@keyframes";var b="@font-face";var w="@counter-style";var m="@font-feature-values";var g="@layer";var k=Math.abs;var $=String.fromCharCode;var x=Object.assign;function E(e,r){return M(e,0)^45?(((r<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function y(e){return e.trim()}function T(e,r){return(e=r.exec(e))?e[0]:e}function A(e,r,a){return e.replace(r,a)}function O(e,r){return e.indexOf(r)}function M(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function R(e){return e.length}function S(e){return e.length}function z(e,r){return r.push(e),e}function N(e,r){return e.map(r).join("")}e.line=1;e.column=1;e.length=0;e.position=0;e.character=0;e.characters="";function P(r,a,c,n,t,s,i){return{value:r,root:a,parent:c,type:n,props:t,children:s,line:e.line,column:e.column,length:i,return:""}}function j(e,r){return x(P("",null,null,"",null,null,0),e,{length:-e.length},r)}function U(){return e.character}function _(){e.character=e.position>0?M(e.characters,--e.position):0;if(e.column--,e.character===10)e.column=1,e.line--;return e.character}function F(){e.character=e.position<e.length?M(e.characters,e.position++):0;if(e.column++,e.character===10)e.column=1,e.line++;return e.character}function I(){return M(e.characters,e.position)}function L(){return e.position}function D(r,a){return C(e.characters,r,a)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function K(r){return e.line=e.column=1,e.length=R(e.characters=r),e.position=0,[]}function V(r){return e.characters="",r}function W(r){return y(D(e.position-1,q(r===91?r+2:r===40?r+1:r)))}function B(e){return V(H(K(e)))}function G(r){while(e.character=I())if(e.character<33)F();else break;return Y(r)>2||Y(e.character)>3?"":" "}function H(r){while(F())switch(Y(e.character)){case 0:z(Q(e.position-1),r);break;case 2:z(W(e.character),r);break;default:z($(e.character),r)}return r}function Z(r,a){while(--a&&F())if(e.character<48||e.character>102||e.character>57&&e.character<65||e.character>70&&e.character<97)break;return D(r,L()+(a<6&&I()==32&&F()==32))}function q(r){while(F())switch(e.character){case r:return e.position;case 34:case 39:if(r!==34&&r!==39)q(e.character);break;case 40:if(r===41)q(r);break;case 92:F();break}return e.position}function J(r,a){while(F())if(r+e.character===47+10)break;else if(r+e.character===42+42&&I()===47)break;return"/*"+D(a,e.position-1)+"*"+$(r===47?r:F())}function Q(r){while(!Y(I()))F();return D(r,e.position)}function X(e){return V(ee("",null,null,null,[""],e=K(e),0,[0],e))}function ee(e,r,a,c,n,t,s,i,u){var o=0;var f=0;var l=s;var p=0;var h=0;var v=0;var d=1;var b=1;var w=1;var m=0;var g="";var k=n;var x=t;var E=c;var y=g;while(b)switch(v=m,m=F()){case 40:if(v!=108&&M(y,l-1)==58){if(O(y+=A(W(m),"&","&\f"),"&\f")!=-1)w=-1;break}case 34:case 39:case 91:y+=W(m);break;case 9:case 10:case 13:case 32:y+=G(v);break;case 92:y+=Z(L()-1,7);continue;case 47:switch(I()){case 42:case 47:z(ae(J(F(),L()),r,a),u);break;default:y+="/"}break;case 123*d:i[o++]=R(y)*w;case 125*d:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+f:if(w==-1)y=A(y,/\f/g,"");if(h>0&&R(y)-l)z(h>32?ce(y+";",c,a,l-1):ce(A(y," ","")+";",c,a,l-2),u);break;case 59:y+=";";default:z(E=re(y,r,a,o,f,n,i,g,k=[],x=[],l),t);if(m===123)if(f===0)ee(y,r,E,E,k,t,l,i,x);else switch(p===99&&M(y,3)===110?100:p){case 100:case 108:case 109:case 115:ee(e,E,E,c&&z(re(e,E,E,0,0,n,i,g,n,k=[],l),x),n,x,l,i,c?k:x);break;default:ee(y,E,E,E,[""],x,0,i,x)}}o=f=h=0,d=w=1,g=y="",l=s;break;case 58:l=1+R(y),h=v;default:if(d<1)if(m==123)--d;else if(m==125&&d++==0&&_()==125)continue;switch(y+=$(m),m*d){case 38:w=f>0?1:(y+="\f",-1);break;case 44:i[o++]=(R(y)-1)*w,w=1;break;case 64:if(I()===45)y+=W(F());p=I(),f=l=R(g=y+=Q(L())),m++;break;case 45:if(v===45&&R(y)==2)d=0}}return t}function re(e,r,a,c,n,s,i,u,o,f,l){var p=n-1;var h=n===0?s:[""];var v=S(h);for(var d=0,b=0,w=0;d<c;++d)for(var m=0,g=C(e,p+1,p=k(b=i[d])),$=e;m<v;++m)if($=y(b>0?h[m]+" "+g:A(g,/&\f/g,h[m])))o[w++]=$;return P(e,r,a,n===0?t:u,o,f,l)}function ae(e,r,a){return P(e,r,a,n,$(U()),C(e,2,-2),0)}function ce(e,r,a,c){return P(e,r,a,s,C(e,0,c),C(e,c+1,-1),c)}function ne(e,n,t){switch(E(e,n)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return a+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+a+e+r+e+e;case 5936:switch(M(e,n+11)){case 114:return c+e+r+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+r+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+r+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+r+e+e;case 6165:return c+e+r+"flex-"+e+e;case 5187:return c+e+A(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+r+"flex-$1$2")+e;case 5443:return c+e+r+"flex-item-"+A(e,/flex-|-self/g,"")+(!T(e,/flex-|baseline/)?r+"grid-row-"+A(e,/flex-|-self/g,""):"")+e;case 4675:return c+e+r+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+r+A(e,"shrink","negative")+e;case 5292:return c+e+r+A(e,"basis","preferred-size")+e;case 6060:return c+"box-"+A(e,"-grow","")+c+e+r+A(e,"grow","positive")+e;case 4554:return c+A(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,c+"$1"+"$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+r+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!T(e,/flex-|baseline/))return r+"grid-column-align"+C(e,n)+e;break;case 2592:case 3360:return r+A(e,"template-","")+e;case 4384:case 3616:if(t&&t.some((function(e,r){return n=r,T(e.props,/grid-\w+-end/)}))){return~O(e+(t=t[n].value),"span")?e:r+A(e,"-start","")+e+r+"grid-row-span:"+(~O(t,"span")?T(t,/\d+/):+T(t,/\d+/)-+T(e,/\d+/))+";"}return r+A(e,"-start","")+e;case 4896:case 4128:return t&&t.some((function(e){return T(e.props,/grid-\w+-start/)}))?e:r+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-n>6)switch(M(e,n+1)){case 109:if(M(e,n+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3"+"$1"+a+(M(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~O(e,"stretch")?ne(A(e,"stretch","fill-available"),n,t)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(a,c,n,t,s,i,u){return r+c+":"+n+u+(t?r+c+"-span:"+(s?i:+i-+n)+u:"")+e}));case 4949:if(M(e,n+6)===121)return A(e,":",":"+c)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(M(e,14)===45?"inline-":"")+"box$3"+"$1"+c+"$2$3"+"$1"+r+"$2box$3")+e;case 100:return A(e,":",":"+r)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function te(e,r){var a="";var c=S(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function se(e,r,a,c){switch(e.type){case g:if(e.children.length)break;case o:case s:return e.return=e.return||e.value;case n:return"";case d:return e.return=e.value+"{"+te(e.children,c)+"}";case t:e.value=e.props.join(",")}return R(a=te(e.children,c))?e.return=e.value+"{"+a+"}":""}function ie(e){var r=S(e);return function(a,c,n,t){var s="";for(var i=0;i<r;i++)s+=e[i](a,c,n,t)||"";return s}}function ue(e){return function(r){if(!r.root)if(r=r.return)e(r)}}function oe(e,n,i,u){if(e.length>-1)if(!e.return)switch(e.type){case s:e.return=ne(e.value,e.length,i);return;case d:return te([j(e,{value:A(e.value,"@","@"+c)})],u);case t:if(e.length)return N(e.props,(function(n){switch(T(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return te([j(e,{props:[A(n,/:(read-\w+)/,":"+a+"$1")]})],u);case"::placeholder":return te([j(e,{props:[A(n,/:(plac\w+)/,":"+c+"input-$1")]}),j(e,{props:[A(n,/:(plac\w+)/,":"+a+"$1")]}),j(e,{props:[A(n,/:(plac\w+)/,r+"input-$1")]})],u)}return""}))}}function fe(e){switch(e.type){case t:e.props=e.props.map((function(r){return N(B(r),(function(r,a,c){switch(M(r,0)){case 12:return C(r,1,R(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(c[++a]==="global")c[a]="",c[++a]="\f"+C(c[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return S(c)>1?"":r;case a=S(c)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}))}}e.CHARSET=f;e.COMMENT=n;e.COUNTER_STYLE=w;e.DECLARATION=s;e.DOCUMENT=h;e.FONT_FACE=b;e.FONT_FEATURE_VALUES=m;e.IMPORT=o;e.KEYFRAMES=d;e.LAYER=g;e.MEDIA=u;e.MOZ=a;e.MS=r;e.NAMESPACE=v;e.PAGE=i;e.RULESET=t;e.SUPPORTS=p;e.VIEWPORT=l;e.WEBKIT=c;e.abs=k;e.alloc=K;e.append=z;e.assign=x;e.caret=L;e.char=U;e.charat=M;e.combine=N;e.comment=ae;e.commenter=J;e.compile=X;e.copy=j;e.dealloc=V;e.declaration=ce;e.delimit=W;e.delimiter=q;e.escaping=Z;e.from=$;e.hash=E;e.identifier=Q;e.indexof=O;e.match=T;e.middleware=ie;e.namespace=fe;e.next=F;e.node=P;e.parse=ee;e.peek=I;e.prefix=ne;e.prefixer=oe;e.prev=_;e.replace=A;e.ruleset=re;e.rulesheet=ue;e.serialize=te;e.sizeof=S;e.slice=D;e.stringify=se;e.strlen=R;e.substr=C;e.token=Y;e.tokenize=B;e.tokenizer=H;e.trim=y;e.whitespace=G;Object.defineProperty(e,"__esModule",{value:true})}));
//# sourceMappingURL=stylis.js.map


/***/ })

};
;