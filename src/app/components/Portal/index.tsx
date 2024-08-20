import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
    children: React.ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
    const [container] = useState(() => document.createElement("div"));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, [container]);

    return ReactDOM.createPortal(children, container);
};
