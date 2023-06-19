import { useState } from "react";
interface Prop {
    name: string;
    children: string;
    onClick?: () => void;
}

const AlertButton = ({ name, children, onClick }: Prop) => {
    const [alertOpen, setAlertOpen] = useState(false);
    return (
        <>
            {alertOpen && (
                <div className="alert alert-success" role="alert">
                    {children}
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                        style={{ float: "right" }}
                        onClick={() => setAlertOpen(false)}
                    ></button>
                </div>
            )}

            <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => {
                    setAlertOpen(true);
                    onClick && onClick();
                }}
            >
                {name}
            </button>
        </>
    );
};

export default AlertButton;
