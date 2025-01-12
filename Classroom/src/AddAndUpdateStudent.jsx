import { collection, addDoc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { db } from "./config/firebase";
import { toast } from "react-toastify";

function AddAndUpdateStudent({ isOpen, onClose, isUpdate, student }) {
	const addStudent = async (student) => {
		try {
			const studentRef = collection(db, "classroom");
			await addDoc(studentRef, student);
			toast.success("Student Added Successfully");
			onClose();
		} catch (error) {
			toast.error(error);
			console.error(error);
		}
	};
	const updateStudent = async (student, id) => {
		try {
			const studentRef = doc(db, "classroom", id);
			await updateDoc(studentRef, student);
			onClose();
			toast.success("Student Updated Successfully");
		} catch (error) {
			toast.error(error);
			console.error(error);
		}
	};
	return (
		<div>
			<Modal isOpen={isOpen} onClose={onClose}>
				<Formik
					initialValues={
						isUpdate
							? {
									name: student.name,
									email: student.email,
									phone_no: student.phone_no,
									address: student.address,
									roll_no: student.roll_no,
							  }
							: {
									name: "",
									email: "",
									phone_no: "",
									address: "",
									roll_no: "",
							  }
					}
					onSubmit={(values) => {
						console.log(values);
						isUpdate
							? updateStudent(values, student.id)
							: addStudent(values);
						onClose();
					}}
				>
					<Form>
						<div className="flex flex-col gap-1">
							<label htmlFor="name" className="font-bold">
								Name
							</label>
							<Field
								name="name"
								className="border h-10 rounded-md px-2 text-xl text-black bg-[#ababab]"
							/>
							<ErrorMessage
								name="name"
								component="div"
								className="text-red-500 text-xs"
							/>
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="email" className="font-bold">
								Email
							</label>
							<Field
								type="email"
								name="email"
								className="border h-10 rounded-md px-2 text-xl text-black bg-[#ababab]"
							/>
							<ErrorMessage
								name="email"
								component="div"
								className="text-red-500 text-xs"
							/>
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="address" className="font-bold">
								Address
							</label>
							<Field
								name="address"
								className="border h-10 rounded-md px-2 text-xl text-black bg-[#ababab]"
							/>
							<ErrorMessage
								name="address"
								component="div"
								className="text-red-500 text-xs"
							/>
						</div>
						<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
							<div className="flex flex-col gap-1">
								<label htmlFor="phone_no" className="font-bold">
									Phone Number
								</label>
								<Field
									name="phone_no"
									className="border h-10 rounded-md px-2 text-xl text-black bg-[#ababab]"
								/>
								<ErrorMessage
									name="phone_no"
									component="div"
									className="text-red-500 text-xs"
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="roll_no" className="font-bold">
									Roll Number
								</label>
								<Field
									name="roll_no"
									className="border h-10 rounded-md px-2 text-xl text-black bg-[#ababab]"
								/>
								<ErrorMessage
									name="roll_no"
									component="div"
									className="text-red-500 text-xs"
								/>
							</div>
						</div>
						<button
							type="submit"
							className="w-full my-4 h-10 bg-blue-500 text-white rounded-md"
						>
							{isUpdate ? "Update" : "Add"} Student
						</button>
					</Form>
				</Formik>
			</Modal>
		</div>
	);
}
export default AddAndUpdateStudent;
