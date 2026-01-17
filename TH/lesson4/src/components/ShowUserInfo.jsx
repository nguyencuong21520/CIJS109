const ShowUserInfo = (props) => {
    const { name, email } = props;
    return (
        <div>
            <h1>User Info</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default ShowUserInfo