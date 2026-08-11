import { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 800, suffix = "" }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;

        let startTime = null;

        const animate = (currentTime) => {
            if (!startTime) {
                startTime = currentTime;
            }

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            const currentValue = Math.floor(progress * end);

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [started, end, duration]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default CountUp;