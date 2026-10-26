
import { useEffect, useState } from "react";
import "./pageloader.css";

export default function PageLoader() {
    const [exit, setExit] = useState(false);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const exitTimer = setTimeout(() => {
            setExit(true);
        }, 2400);

        const finishTimer = setTimeout(() => {
            setFinished(true);
        }, 2800);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(finishTimer);
        };
    }, []);

    if (finished) {
        return null;
    }

    return (
        <div
            className={`xlligent-loader ${
                exit ? "xlligent-exit" : ""
            }`}
        >
            <div className="xlligent-loader-brand">
                <div className="xlligent-loader-name">
                    <span className="xlligent-loader-x">
                        X
                    </span>

                    <span className="xlligent-loader-rest">
                        LLIGENT
                    </span>
                </div>

                <div className="xlligent-loader-software">
                    SOFTWARES
                </div>
            </div>
        </div>
    );
}
