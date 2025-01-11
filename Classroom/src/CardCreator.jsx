function CardCreator({key,student}){
    return (
		<div key={key}>
			<p>{student.roll_no}</p>
			<h2>{student.name}</h2>
			<p>{student.email}</p>
			<p>{student.address}</p>
			<p>{student.phone_no}</p>
		</div>
	);
}

export default CardCreator;