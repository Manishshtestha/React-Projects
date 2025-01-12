import { deleteDoc, doc } from "firebase/firestore";
import AddAndUpdateStudent from "./AddAndUpdateStudent";
import useDisclose from "./hooks/useDisclose";
import { db } from "./config/firebase";
import { toast } from "react-toastify";

function CardCreator({ student }) {
	const { isOpen, onOpen, onClose } = useDisclose();
	const deleteStudent = async (id) => {
		if (window.confirm("Are you sure you want to delete this student?")) {
			try {
				await deleteDoc(doc(db, "classroom", id));
			} catch (error) {
				console.error(error);
			}
			toast.success("Student Deleted Successfully");
		} else {
			toast.info("Deletion Cancelled");
		}
	};
	return (
		<div key={student.id}>
			<div className="border rounded-md p-3 w-full">
				<h2 className="text-xl font-bold">
					{student.name}, {student.roll_no}
				</h2>
				<p>{student.email}</p>
				<p>{student.address}</p>
				<p>{student.phone_no}</p>
				<div className="grid grid-cols-2 gap-2">
					<button onClick={onOpen} className="bg-blue-500">
						Update Details
					</button>
					<button
						className="bg-red-600"
						onClick={() => deleteStudent(student.id)}
					>
						Delete
					</button>
				</div>
			</div>
			<AddAndUpdateStudent
				isUpdate
				onClose={onClose}
				isOpen={isOpen}
				student={student}
			/>
		</div>
	);
}

export default CardCreator;
