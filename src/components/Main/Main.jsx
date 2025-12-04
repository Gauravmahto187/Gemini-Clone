import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    newChat,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p onClick={() => newChat()}>Gemini</p>
        <img src={assets.user_icon} alt="user" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => { setInput("Suggest me beautiful places to see on an upcoming road trip"); onSent("Suggest me beautiful places to see on an upcoming road trip"); }}>
                <p>
                  Suggest me beautiful places 
                </p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card" onClick={() => { setInput("Briefly summarize this concept: Urban planning"); onSent("Briefly summarize this concept: Urban planning"); }}>
                <p>Briefly summarize this concept: Urban planning</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card" onClick={() => { setInput("Brainstorm team bonding activities for our work retreat"); onSent("Brainstorm team bonding activities for our work retreat"); }}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} />
              </div>
              <div className="card" onClick={() => { setInput("Improve the readability of the following code"); onSent("Improve the readability of the following code"); }}>
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini" />
              {loading ? (
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyDown={(e) => {
                if (e.key === "Enter" && input) {
                  onSent();
                }
              }}
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="send" />: null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inacurate info, including about people, so double
            check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
