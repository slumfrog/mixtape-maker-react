import React from "react";

const NewTape = props => {
  return (
    <>
      {/* <link href='https://fonts.googleapis.com/css?family=Lato:900,400|Shadows+Into+Light' rel='stylesheet' type='text/css'> */}

      <div>
        <form>
          <input
            type="text"
            value={props.tapeText}
            name="tapeText"
            placeholder="Name your mixtape"
            onChange={props.handleTapeText}
          />
        </form>
      </div>

      <div class="cassetteOuter">
        <span class="screw screw1">
          <span class="screwInner"></span>
        </span>
        <span class="screw screw2">
          <span class="screwInner"></span>
        </span>
        <span class="screw screw3">
          <span class="screwInner"></span>
        </span>
        <span class="screw screw4">
          <span class="screwInner"></span>
        </span>

        <div class="stickerOuter">
          <div class="sticker">
            <span class="a-side">A</span>
            <p class="cursive">{props.tapeText}</p>
            <span class="stripe"></span>
            <span class="c90">D-C90</span>
            <span class="logo">T.F.H.®</span>
            <div class="middle clearfix">
              <span class="circle one">
                <span class="teethBox">
                  <span class="teeth"></span>
                  <span class="teeth"></span>
                  <span class="teeth"></span>
                </span>
              </span>
              <div class="window">
                <span class="reelOne"></span>
                <span class="reelTwo"></span>
              </div>
              <span class="circle two">
                <span class="teethBox">
                  <span class="teeth"></span>
                  <span class="teeth"></span>
                  <span class="teeth"></span>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div class="cassetteBottom">
          <span class="screw screw5">
            <span class="screwInner"></span>
          </span>
          <span class="bottomShadow">
            <span class="bottomHoles one"></span>
            <span class="bottomHoles two"></span>
            <span class="bottomHoles three"></span>
          </span>
          <span class="holes one"></span>
          <span class="holes two"></span>
        </div>
      </div>

      {/* <div class="linerNotes">
        <div class="linerNotesTop clearfix">
          <span class="boxDesc">TFH D-C90 90min. @ 1-7/8 ips(2 × 45min.)</span>
          <div class="infoBoxes clearfix">
            <span class="box1">Tape Selector</span>
            <span class="box2">Normal</span>
            <span class="box3">Bias-Normal EQ-120µS</span>
            <span class="boxCopyright">
              ©1972-1977 TFH Electronics Co.,Ltd.
            </span>
          </div>
        </div>
        <div class="linerNotesSpine">
          <span class="spineTitle">
            D-<span class="green">C90</span> TFH
          </span>
        </div>
        <div class="linerNotesMainContent clearfix">
          <span class="side">A</span>
          <span class="side">B</span>
          <div class="linerNotesMainContentInner">
            <h1>Cassette CSS</h1>
            <p>
              This cassette and sleevenotes are made entirely from CSS and HTML.
              There's not a single image element here!
            </p>
          </div>
        </div>
        <div class="linerNotesBottom">
          <p class="black">Dynamic Cassette</p>
          <p class="white">Precision Cassette Mechanism</p>
          <p class="title">
            D-<span class="green">C90</span> TFH®
          </p>
          <p class="black">Low Noise High Output</p>
        </div>
      </div> */}
    </>
  );
};

export default NewTape;
