import React, { useState, useEffect } from 'react';
import { Banknote, Droplet } from 'lucide-react';
import styles from './BPPipelineVisualisation.module.css';

export default function BPPipelineVisualisation() {
  const [moneyPositions, setMoneyPositions] = useState([0, 33, 66]);
  const [oilPositions, setOilPositions] = useState([0, 33, 66]);

  useEffect(() => {
    const moneyInterval = setInterval(() => {
      setMoneyPositions((prev) => prev.map((pos) => (pos < 100 ? pos + 2 : 0)));
    }, 30);

    const oilInterval = setInterval(() => {
      setOilPositions((prev) => prev.map((pos) => (pos < 100 ? pos + 2 : 0)));
    }, 30);

    return () => {
      clearInterval(moneyInterval);
      clearInterval(oilInterval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Flow Diagram: BP, UK, and Israel</h2>

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
              fill="none" // Ensures no fill is applied
            />
          </svg>
          <h3 className={styles.text}>UK</h3>
        </div>

        {/* Money Flow Animation */}
        <svg width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="green" />
            </marker>
          </defs>
          <text x="50" y="30" fontSize="20" fill="green" textAnchor="middle">MONEY</text>
          <line x1="0" y1="50" x2="100" y2="50" stroke="green" strokeWidth="3" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
          {moneyPositions.map((pos, idx) => (
            <g key={idx} transform={`translate(${pos}, 60)`}>
              <Banknote size={24} className="text-green-600"  color='green'/>
            </g>
          ))}
        </svg>

        {/* BP */}
        <div className={styles.svgContainer}>
          <svg viewBox="0 0 200 200" className={styles.svg}>
            <rect x="40" y="40" width="120" height="120" fill="none" stroke="black" strokeWidth="2" />
            <text x="100" y="110" fontSize="40" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">BP</text>
          </svg>
          <h3 className={styles.text}>BP</h3>
        </div>

        {/* Oil Flow Animation */}
        <svg width="100" height="100" viewBox="0 0 100 100" color='darkblue'>
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="darkblue" />
            </marker>
          </defs>
          <text x="50" y="30" fontSize="20" fill="darkblue" textAnchor="middle">OIL</text>
          <line x1="0" y1="50" x2="100" y2="50" stroke="darkblue" strokeWidth="3" markerEnd="url(#arrowhead2)" strokeDasharray="5,5" />
          {oilPositions.map((pos, idx) => (
            <g key={idx} transform={`translate(${pos}, 60)`}>
              <Droplet size={24} className="text-blue-600" />
            </g>
          ))}
        </svg>

        {/* Israel */}
        <div className={styles.svgContainer}>
          <svg viewBox="0 0 200 300" className={styles.svg}>
            <image
              href="https://upload.wikimedia.org/wikipedia/commons/3/39/Israel_Flag-map_%28including_Area_C%29.svg"
              x="0"
              y="0"
              width="200"
              height="300"              
            />
          </svg>
          <h3 className={styles.text}>Israel</h3>
        </div>
      </div>
    </div>
  );
}