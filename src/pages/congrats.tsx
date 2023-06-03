// pages/congrats.tsx
import { useEffect, useState } from "react";
import Confetti from 'react-dom-confetti';
import styles from '@/styles/Congrats.module.css';
import { createGlobalStyle } from 'styled-components';

// This will prevent the body from scrolling
const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default function Congrats() {
    const [confettiLeft, setConfettiLeft] = useState(false);
    const [confettiRight, setConfettiRight] = useState(false);

    useEffect(() => {
        setConfettiLeft(true);
        setConfettiRight(true);
    }, []);

    const configLeft = {
        angle: 90,
        spread: 90,
        startVelocity: 30,
        elementCount: 300,
        dragFriction: 0.1,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    const configRight = {
        angle: 60,
        spread: 180,
        startVelocity: 30,
        elementCount: 300,
        dragFriction: 0.1,
        duration: 3000,
        stagger: 5,
        width: "10px",
        height: "10px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    return (
        <div className={styles.congrats}>
            <GlobalStyle />
            <h1>Congratulations!</h1>
            <p>You are worthy of my treasure</p>
            <p>But you had the key all along!</p>
            <p>I'm not so different after all, and the key to my riches is the year of my birth: 1964</p>
            <p>Unlock the Ledger to claim your prize: 1541164.80 BTC</p>
            <div className={styles.confettiCannonLeft}>
                <Confetti active={confettiLeft} config={configLeft} />
            </div>
            <div className={styles.confettiCannonRight}>
                <Confetti active={confettiRight} config={configRight} />
            </div>
        </div>
    );
}
