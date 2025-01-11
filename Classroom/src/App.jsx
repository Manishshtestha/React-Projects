import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import CardCreator from "./CardCreator";
import useDisclose from "./hooks/useDisclose";
import Modal from "./Modal";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AddAndUpdateStudent from "./AddAndUpdateStudent";
function App() {
	const [students, setStudents] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclose();
	useEffect(() => {
		const getStudents = async () => {
			try {
				const classroomRef = collection(db, "classroom");
				onSnapshot(classroomRef, (snapshot) => {
					const studentList = snapshot.docs.map((doc) => {
						return {
							id: doc.id,
							...doc.data(),
						};
					});
					setStudents(studentList);
				});
			} catch (error) {
				console.log(error);
			}
		};
		getStudents();
	}, []);

	const filterStudent = (e) => {
		const value = e.target.value;
		const classroomRef = collection(db, "classroom");
		onSnapshot(classroomRef, (snapshot) => {
			const studentList = snapshot.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
			});
			const filteredStudents = studentList.filter((student) =>
				student.name.toLowerCase().includes(value.toLowerCase())
			);
			setStudents(filteredStudents);
		});
	};

	return (
		<>
			<div>
				<h1 className="text-3xl text-center">Classroom</h1>
				<div className="flex justify-between items-center">
					<h1 className="text-xl">Students</h1>
					<button
						onClick={onOpen}
						className="bg-blue-500 text-white px-3 py-2 rounded-2xl"
					>
						Add Student
					</button>
				</div>
				<div>
					<label
						htmlFor="filter"
						className="absolute top-[92px] ml-2 text-black z-10 text-2xl"
					>
						<FaMagnifyingGlass />
					</label>
					<input
						onChange={filterStudent}
						name="filter"
						type="text"
						className="relative w-full rounded-lg my-2 h-10 px-2 pl-9 text-black text-xl"
					/>
				</div>
				<AddAndUpdateStudent isOpen={isOpen} onClose={onClose} />
				<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
					{students.length > 0 ? (
						students.map((student) => {
							return (
								<CardCreator
									key={student.id}
									student={student}
								/>
							);
						})
					) : (
						<p className="text-center text-xl">No students found</p>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
