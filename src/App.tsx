import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import AlertButton from "./components/AlertButton";
import { useState } from "react";
function App() {
    let items = ["a", "b", "c", "d", "e"];
    let handleFunction = (item: string) => console.log(item);

    return (
        <div>
            <ListGroup
                items={items}
                heading="Letters"
                onSelectItem={handleFunction}
            />

            <Alert>
                <h1>This is a test for the children HTML</h1>
            </Alert>

            <AlertButton
                name="Test Alert"
                onClick={() => console.log("Alerted!")}
            >
                This is what the text of the alert is
            </AlertButton>
        </div>
    );
}

export default App;
