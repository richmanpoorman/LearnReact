import { ReactNode } from "react";

interface Prop {
    children: ReactNode;
}

const Alert = ({ children }: Prop) => {
    return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
