
function Message() {
    const name = 'TEST';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Default</h1>
}

export default Message;