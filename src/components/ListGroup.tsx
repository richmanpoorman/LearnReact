import { useState } from "react";

// { items : [], heading : string}
interface ListGroupProps {
    items: string[];
    heading: string;
    // (item : string) => void
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
    // items = [];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const missingMessage = () => {
        return items.length == 0 && <p>No Items</p>;
    };

    return (
        <>
            <h1>{heading}</h1>
            {missingMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            index == selectedIndex
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
