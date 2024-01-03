import { useState } from "react";
import "./App.css";

function App() {
  const [question1, setQuestion1] = useState(true);
  const [question2, setQuestion2] = useState(true);
  const [question3, setQuestion3] = useState(true);
  const [question4, setQuestion4] = useState(true);

  const mouseOver = (event) => {
    event.target.style.color = "#a625f3"
  }
  const mouseOut = (event) => {
    event.target.style.color = "hsl(292, 42%, 14%)"
  }

  return (
    <>
      
      <div className="App">
        <div className="header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            fill="none"
            viewBox="0 0 40 41"
          >
            <path
              fill="#AD28EB"
              d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 
          2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
            />
          </svg>
          <h1>FAQs</h1>
        </div>

        <div className="faq">
          <div className="question" onClick={() => setQuestion1(!question1)}>
            <h4 onMouseEnter={mouseOver} onMouseLeave={mouseOut}>What is Frontend Mentor, and how will it help me?</h4>
            {question1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#AD28EB"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 
            0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#301534"
                  d="M15 3.313A12.187 
            12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            )}
          </div>

          {!question1 && (
            <p>
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend coding skills with projects in
              HTML, CSS, and JavaScript. It's suitable for all levels and ideal
              for portfolio building.
            </p>
          )}
        </div>

        <div className="faq">
          <div className="question" onClick={() => setQuestion2(!question2)}>
            <h4 onMouseEnter={mouseOver} onMouseLeave={mouseOut}>Is Frontend Mentor free?</h4>
            {question2 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#AD28EB"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 
            0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#301534"
                  d="M15 3.313A12.187 
            12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            )}
          </div>

          {!question2 && (
            <p>
              Yes, Frontend Mentor offers both free and premium coding
              challenges, with the free option providing access to a range of
              projects suitable for all skill levels.
            </p>
          )}
        </div>

        <div className="faq">
          <div className="question" onClick={() => setQuestion3(!question3)}>
            <h4 onMouseEnter={mouseOver} onMouseLeave={mouseOut}>Can I use Frontend Mentor projects in my portfolio?</h4>
            {question3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#AD28EB"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 
            0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#301534"
                  d="M15 3.313A12.187 
            12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            )}
          </div>

          {!question3 && (
            <p>
              Yes, you can use projects completed on Frontend Mentor in your
              portfolio. It's an excellent way to showcase your skills to
              potential employers!
            </p>
          )}
        </div>

        <div className="last">
          <div className="question" onClick={() => setQuestion4(!question4)}>
            <h4 onMouseEnter={mouseOver} onMouseLeave={mouseOut}>
              How can I get help if I'm stuck on a Frontend Mentor challenge?
            </h4>
            {question4 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#AD28EB"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 
            0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#301534"
                  d="M15 3.313A12.187 
            12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            )}
          </div>

          {!question4 && (
            <p>
              The best place to get help is inside Frontend Mentor's Discord
              community. There's a help channel where you can ask questions and
              seek support from other community members.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
