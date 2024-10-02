import { useEffect, useState } from "react";
import ITypeWriter from "./ITypeWriter";

export default function TypeWriter(props: ITypeWriter) {

    const [currentText, setCurrentText] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        let timeout;

        const word = props.texts[currentText];
        if(currentIndex <= word.length) {
            timeout = setTimeout(() => {
                setCurrentIndex(currentIndex => currentIndex + 1);
            }, 100);
        } else {
            timeout = setTimeout(() => {
                setCurrentText(currentText => (currentText + 1) % props.texts.length);
                setCurrentIndex(0);
            }, 2000);
        }
    }, [currentIndex]);

    return (
        <span> { props.texts[currentText].slice(0, currentIndex) }<span className={`text-white ${currentIndex == props.texts[currentText].length+1 ? 'animate-blink' : ''}`}>|</span></span>
    )
}