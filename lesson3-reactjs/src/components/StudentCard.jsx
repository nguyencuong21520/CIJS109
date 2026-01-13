const StudentCard = (props) => {

    // const id = props.id;
    // const studentName = props.studentName;
    // const grade = props.grade;
    // const age = props.age;
    const {id, studentName, grade, age} = props;
    return (
        <div className="student-card">
            <div className="student-id">{id}</div>
            <div className="student-name">{studentName}</div>
            <div className="student-info">
                <span>Age: {age}</span>
                <span>Grade: {grade}</span>
            </div>
        </div>
    )
}

export default StudentCard;