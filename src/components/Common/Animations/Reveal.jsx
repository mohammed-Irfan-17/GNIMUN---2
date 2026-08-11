import { useEffect, useRef, useState } from "react";

function Reveal({
    children,
    direction = "up",
    className = "",
}) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal reveal-${direction} ${
                visible ? "reveal-visible" : ""
            } ${className}`}
        >
            {children}
        </div>
    );
}

export default Reveal;  