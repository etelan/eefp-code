import React, { useState, useEffect } from 'react';
import { Banknote, Droplet } from 'lucide-react';
import styles from './BPPipelineVisualisation.module.css';

export default function BPPipelineVisualisation() {
  const [moneyPositions, setMoneyPositions] = useState([0, 33, 66]);
  const [oilPositions, setOilPositions] = useState([0, 33, 66]);
  const [isActionTaken, setIsActionTaken] = useState(false);

  useEffect(() => {
  let normalSpeed = 10; // Fast speed
  let reducedSpeed = Math.round(normalSpeed / 0.33); // 33% of the normal speed

  let moneySpeed = isActionTaken ? reducedSpeed : normalSpeed;
  let oilSpeed = isActionTaken ? reducedSpeed : normalSpeed;

  const moneyInterval = setInterval(() => {
    setMoneyPositions((prev) =>
      prev.map((pos) => (pos < 100 ? pos + (isActionTaken ? 0.2 : 2) : 0))
    );
  }, moneySpeed);

  const oilInterval = setInterval(() => {
    setOilPositions((prev) =>
      prev.map((pos) => (pos < 100 ? pos + (isActionTaken ? 0.2 : 2) : 0))
    );
  }, oilSpeed);

  return () => {
    clearInterval(moneyInterval);
    clearInterval(oilInterval);
  };
}, [isActionTaken]);

  const handleTakeAction = () => {
    setIsActionTaken(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {isActionTaken ? (
              'DISRUPTED FLOW'
            ) : (
              'DISRUPT THE FLOW'
            )}
      </h2>

      <div className={styles.diagramWrapper}>
        {/* UK */}
        <div className={styles.svgContainer}>
          <svg viewBox="0 0 200 300" className={styles.svg}>
            <image
              href="https://upload.wikimedia.org/wikipedia/commons/2/2a/UK_Outline_and_Flag.svg"
              x="0"
              y="0"
              width="200"
              height="300"
              fill="none"
            />
          </svg>
          <h3 className={styles.text}>UK</h3>
        </div>

        {/* Money Flow Animation */}
        <svg width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill={isActionTaken ? 'darkred' : 'green'} />
            </marker>
          </defs>
          <text x="50" y="30" fontSize="20" fill={isActionTaken ? 'darkred' : 'green'} textAnchor="middle">
            {isActionTaken ? (
              <>
                <tspan x="50" dy="-5">LESS</tspan>
                <tspan x="50" dy="15">MONEY</tspan>
              </>
            ) : (
              'MONEY'
            )}
          </text>
          <line
            x1="0"
            y1="50"
            x2="100"
            y2="50"
            stroke={isActionTaken ? 'darkred' : 'green'}
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
            strokeDasharray="5,5"
          />
          {isActionTaken && (
            <g>
              <line x1="40" y1="45" x2="60" y2="55" stroke="red" strokeWidth="2" />
              <line x1="40" y1="55" x2="60" y2="45" stroke="red" strokeWidth="2" />
            </g>
          )}
          {moneyPositions.map((pos, idx) => (
            <g key={idx} transform={`translate(${pos}, 60)`}>
              <Banknote size={24} color={isActionTaken ? 'darkred' : 'green'} />
            </g>
          ))}
        </svg>

        {/* BP */}
        <div className={styles.svgContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 215 215" className={styles.svg}><path fill="#090" d="M210.6 125.3c-6.8-7.3-14.3-13.5-22.2-18.5 7.8-5 15.3-11.3 22.1-18.6-8.9-4.5-18.1-7.8-27.2-9.8 5.6-7.4 10.5-15.9 14.5-25-9.9-1.2-19.6-1.1-28.9.1 2.8-8.9 4.5-18.5 5-28.5-9.7 2.3-18.9 5.6-27.1 9.9-.5-9.3-2.1-18.9-5-28.5-8.3 5.5-15.8 11.8-22.1 18.6-3.6-8.6-8.5-17-14.5-25-6 8-10.8 16.5-14.4 25.1C84.5 18.2 77 11.9 68.7 6.5c-2.9 9.5-4.5 19.1-5 28.4-8.3-4.3-17.4-7.6-27.1-9.9.6 10 2.3 19.6 5.1 28.5-9.3-1.2-19-1.2-29 0 3.9 9.2 8.8 17.6 14.5 25-9.1 2.1-18.3 5.4-27.2 9.9 6.8 7.3 14.3 13.5 22.2 18.5-7.8 5-15.3 11.3-22.1 18.6 8.9 4.5 18.1 7.8 27.2 9.8-5.6 7.4-10.5 15.9-14.5 25 9.9 1.2 19.6 1.1 28.8 0-2.8 8.9-4.5 18.5-5 28.4 9.7-2.3 18.9-5.6 27.1-9.9.4 9.3 2.1 18.9 5 28.5 8.3-5.5 15.8-11.7 22.1-18.6 3.6 8.6 8.5 17.1 14.5 25.1 6-8 10.8-16.5 14.4-25.1 6.3 6.9 13.8 13.2 22.2 18.6 2.9-9.5 4.5-19.1 5-28.5 8.3 4.3 17.5 7.6 27.2 9.9-.6-10-2.3-19.5-5.1-28.4 9.2 1.2 19 1.2 28.9 0-3.9-9.2-8.8-17.6-14.5-25 9.1-2.2 18.3-5.5 27.2-10z"/><path fill="#9c0" d="M183.4 135.2c-5.2-6.8-11.1-12.8-17.5-17.7 7.7-2.4 15.2-6.1 22.5-10.7-7.3-4.6-14.8-8.2-22.5-10.6 6.4-4.9 12.2-10.9 17.5-17.8-8.4-1.9-16.7-2.7-24.8-2.3 4.3-6.8 7.8-14.4 10.3-22.7-8.5 1.1-16.6 3.2-24.1 6.3 1.7-7.9 2.4-16.2 1.9-24.9-7.6 4-14.5 8.7-20.4 14.2-1.1-8-3.3-16.1-6.7-24-5.9 6.4-10.7 13.2-14.4 20.4-3.7-7.1-8.6-14-14.5-20.3-3.3 7.9-5.5 16-6.5 23.9-5.9-5.4-12.9-10.2-20.6-14.1-.4 8.6.3 17 2 24.9-7.4-3.1-15.5-5.1-24.1-6.2 2.6 8.2 6.1 15.8 10.4 22.6-8-.3-16.4.5-24.9 2.4 5.2 6.8 11.1 12.8 17.5 17.7-7.7 2.4-15.2 6.1-22.5 10.7 7.3 4.6 14.8 8.2 22.5 10.6-6.4 4.9-12.2 10.9-17.5 17.8 8.4 1.9 16.7 2.7 24.7 2.3-4.3 6.8-7.8 14.4-10.3 22.7 8.5-1.1 16.7-3.2 24.1-6.3-1.7 7.8-2.4 16.2-2 24.8 7.7-4 14.6-8.7 20.5-14.1 1.1 8 3.3 16.1 6.6 24 5.8-6.4 10.7-13.2 14.4-20.3 3.7 7.1 8.6 14 14.5 20.3 3.3-7.9 5.5-16 6.6-24 5.9 5.4 12.9 10.2 20.6 14.1.4-8.6-.3-17-2-24.8 7.4 3.1 15.6 5.1 24.1 6.2-2.6-8.2-6.1-15.8-10.4-22.6 8.2.2 16.6-.6 25-2.5z"/><path fill="#ff0" d="M146.8 106.9c6.7-2.5 13.2-6.1 19.2-10.7-7.2-2.3-14.5-3.4-21.6-3.5 5.5-4.6 10.3-10.2 14.3-16.6-7.5.3-14.8 1.7-21.5 4.2 3.6-6.2 6.2-13.1 7.8-20.5-7 2.9-13.3 6.7-18.8 11.3 1.2-7.1 1.3-14.5.3-22-5.6 5.1-10.3 10.9-13.9 17.1-1.3-7.1-3.7-14.1-7.2-20.8C102 52.1 99.5 59 98.3 66c-3.6-6.2-8.3-11.9-13.9-17-1 7.5-.9 14.9.3 22-5.5-4.6-11.9-8.4-18.9-11.2 1.6 7.4 4.2 14.3 7.8 20.5-6.7-2.4-14-3.8-21.5-4.1 4.1 6.4 8.9 11.9 14.3 16.6-7.2 0-14.5 1.2-21.7 3.5 6 4.6 12.4 8.2 19.2 10.6-6.7 2.5-13.2 6.1-19.2 10.7 7.2 2.2 14.5 3.4 21.6 3.5-5.5 4.6-10.3 10.2-14.4 16.6 7.5-.3 14.8-1.7 21.5-4.1-3.6 6.2-6.2 13.2-7.8 20.5 7-2.9 13.3-6.7 18.8-11.3-1.2 7.1-1.3 14.4-.3 21.9 5.6-5.1 10.3-10.8 13.9-17 1.3 7.1 3.7 14 7.2 20.7 3.5-6.7 5.9-13.6 7.2-20.7 3.6 6.2 8.3 11.9 13.9 17 1-7.5.9-14.9-.3-21.9 5.5 4.6 11.9 8.4 18.9 11.3-1.6-7.4-4.2-14.3-7.8-20.5 6.8 2.4 14 3.8 21.6 4.1-4.1-6.4-8.9-11.9-14.4-16.6 7.2 0 14.5-1.2 21.7-3.5-6.1-4.7-12.5-8.3-19.2-10.7z"/><path fill="#fff" d="M126.3 110.5c7 0 13.9-1.3 20.4-3.7-6.6-2.4-13.4-3.7-20.4-3.7 6.6-2.4 12.6-6 17.9-10.5-7 0-13.9 1.1-20.5 3.5 5.4-4.5 9.8-9.9 13.3-16-6.6 2.4-12.6 5.8-18 10.3 3.5-6.1 5.8-12.7 7-19.5-5.4 4.5-9.9 9.8-13.5 15.9 1.2-6.9 1.1-13.9-.1-20.8-3.5 6-5.9 12.5-7.1 19.3-1.2-6.9-3.7-13.5-7.2-19.5-1.2 6.9-1.3 13.9-.1 20.8-3.5-6.1-8.1-11.4-13.4-15.9 1.2 6.9 3.5 13.5 7 19.5-5.4-4.5-11.5-7.9-18-10.3 3.5 6.1 7.9 11.4 13.3 16-6.6-2.4-13.5-3.5-20.4-3.5 5.3 4.5 11.3 8 17.9 10.5-7 0-13.9 1.3-20.5 3.7 6.6 2.4 13.4 3.7 20.4 3.7-6.6 2.4-12.6 6-18 10.5 7 0 13.9-1.1 20.5-3.5-5.4 4.5-9.8 9.9-13.3 16 6.6-2.4 12.7-5.8 18-10.3-3.5 6.1-5.8 12.7-7 19.6 5.4-4.5 9.9-9.8 13.4-15.8-1.2 6.9-1.1 13.9.1 20.7 3.5-6 6-12.6 7.2-19.4 1.2 6.9 3.7 13.4 7.2 19.5 1.2-6.9 1.3-13.8.1-20.7 3.5 6.1 8.1 11.4 13.4 15.8-1.2-6.9-3.5-13.4-7-19.5 5.4 4.5 11.5 7.9 18.1 10.3-3.5-6.1-7.9-11.4-13.3-16 6.6 2.4 13.5 3.5 20.5 3.5-5.3-4.5-11.3-8-17.9-10.5z"/></svg>
          <h3 className={styles.text}>BP</h3>
        </div>

        {/* Oil Flow Animation */}
        <svg width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill={isActionTaken ? 'darkred' : 'darkblue'} />
            </marker>
          </defs>
          <text x="50" y="30" fontSize="20" fill={isActionTaken ? 'darkred' : 'darkblue'} textAnchor="middle">
            {isActionTaken ? (
              <>
                <tspan x="50" dy="-5">LESS</tspan>
                <tspan x="50" dy="15">OIL</tspan>
              </>
            ) : (
              'OIL'
            )}
          </text>
          <line
            x1="0"
            y1="50"
            x2="100"
            y2="50"
            stroke={isActionTaken ? 'darkred' : 'darkblue'}
            strokeWidth="3"
            markerEnd="url(#arrowhead2)"
            strokeDasharray="5,5"
          />
          {isActionTaken && (
            <g>
              <line x1="40" y1="45" x2="60" y2="55" stroke="red" strokeWidth="2" />
              <line x1="40" y1="55" x2="60" y2="45" stroke="red" strokeWidth="2" />
            </g>
          )}
          {oilPositions.map((pos, idx) => (
            <g key={idx} transform={`translate(${pos}, 60)`}>
              <Droplet size={24} color={isActionTaken ? 'darkred' : 'darkblue'} />
            </g>
          ))}
        </svg>

        {/* Israel */}
        <div className={styles.svgContainer}>
          <svg viewBox="0 0 200 200" className={styles.svg}>
            <image
              href="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg"
              x="0"
              y="0"
              width="200"
              height="200"
            />
          </svg>
          <h3 className={styles.text}>Israel</h3>
        </div>
      </div>

      {isActionTaken && (
        <div className={styles.formWrapper}>
          <br />
          <p style={{ marginTop: '20px' }}>
            <button
              className={styles.flashingButton}
              onClick={() => window.open(
                "https://cryptpad.fr/form/#/2/form/view/cJ2tq7ViMIK8lNlguluZTI8iKQ1VbYGlwlVJmPxblqU/",
                "_blank",
                "noopener,noreferrer"
              )}
            >
              Signup to Take Action
            </button>
          </p>
        </div>
      )}

      {/* Take Action Button */}
      {!isActionTaken && (
        <div className={styles.buttonWrapper}>
        <button className={styles.takeActionButton} onClick={handleTakeAction}>
          Take Action
        </button>
      </div>
      )}

    </div>
  );
}