const ChangeCount = (props) => {
    const { setCountFn } = props;
    const handleIncrement = () => {
        //todo
        setCountFn((prevCount) => prevCount + 1)
    }
    const handleDecrement = () => {
        //todo
        setCountFn((prevCount) => prevCount - 1)
    }
    return (
        <div>
            <button onClick={handleIncrement}>+ Increment</button>
            <button onClick={handleDecrement}>- Decrement</button>
        </div>
    )
}

export default ChangeCount