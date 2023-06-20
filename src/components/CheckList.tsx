import { useState } from "react";

interface Props {
    listName: string;
}

const ListCheckoff = (
    state: boolean,
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void,
    id: string
) => {
    return (
        <>
            <input
                className="form-check-input mt-0 align-middle btn-check"
                type="checkbox"
                value=""
                id={id}
                onChange={onClick}
                checked={state}
            />
            <label className="btn btn-outline-success" htmlFor="firstCheckbox">
                {state ? "✔️" : "⭕"}
            </label>
        </>
    );
};

const ListText = (defaultString: string, id: string) => {
    return (
        <input
            type="text"
            className="form-check-label form-control"
            aria-label="Text input with checkbox"
            placeholder={defaultString}
            id={id}
        />
    );
};

const ListItem = (id: string, onClick: () => void) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const onClickFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Click");
        console.log(e.target.checked);
        setIsChecked(e.target.checked);
        onClick();
    };

    return (
        <div className="row g-0">
            <div className="col-sm-auto">
                {ListCheckoff(isChecked, onClickFunction, id)}
            </div>
            <div className="col">{ListText("Put Item Here", id)}</div>
        </div>
    );
};

const CheckList = ({ listName }: Props) => {
    const [list, setList] = useState<string[]>(["a", "b"]);

    const onClick = () => {
        console.log("Clicked");
    };

    return (
        <>
            <h1>{listName}</h1>
            <ul className="list-group">
                {list.map((value) => (
                    <li className="list-group-item text-center" key={value}>
                        {ListItem(value, onClick)}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CheckList;
