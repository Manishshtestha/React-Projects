import { collection, addDoc } from "firebase/firestore";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { db } from "./config/firebase";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Name is Required"),
	email: Yup.string().email("Invalid Email").required("Email is Required"),
	phone: Yup.string().required("Phone is Required"),
	address: Yup.string().required("Address is Required"),
	roll: Yup.number().required("Roll Number is Required"),
});
function AddAndUpdateStudent({ isOpen, onClose, isUpdate, student }) {
	const addStudent = async(student)=>{
		const studentRef = collection(db,"classroom");
		await addDoc(studentRef, student);
		onClose();
		
	}
	return (
		<div>
			<Modal isOpen={isOpen} onClose={onClose}>
				<Formik
					validationSchema={validationSchema}
					initialValue={
						isUpdate
							? {
									name: student.name,
									email: student.email,
									phone: student.phone_no,
									address: student.address,
									roll: student.roll_no,
							  }
							: {
									name: "",
									email: "",
									phone: "",
									address: "",
									roll: "",
							  }
					}
				>
					<Form>
						<div className="flex flex-col gap-1">
							<label htmlFor="name" className="font-bold">
								Name
							</label>
							<Field
								type="text"
								name="name"
								className="bg-transparent border h-10 rounded-md px-2 text-xl "
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
								className="bg-transparent border h-10 rounded-md px-2 text-xl "
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
								type="text"
								name="address"
								className="bg-transparent border h-10 rounded-md px-2 text-xl "
							/>
							<ErrorMessage
								name="address"
								component="div"
								className="text-red-500 text-xs"
							/>
						</div>
						<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
							<div className="flex flex-col gap-1">
								<label htmlFor="phone" className="font-bold">
									Phone Number
								</label>
								<Field
									type="text"
									name="phone"
									className="bg-transparent border h-10 rounded-md px-2 text-xl "
								/>
								<ErrorMessage
									name="phone"
									component="div"
									className="text-red-500 text-xs"
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="roll" className="font-bold">
									Roll Number
								</label>
								<Field
									type="number"
									min="0"
									max="2000"
									name="roll"
									className="bg-transparent border h-10 rounded-md px-2 text-xl "
								/>
								<ErrorMessage
									name="roll"
									component="div"
									className="text-red-500 text-xs"
								/>
							</div>
						</div>
						<button className="w-full my-4 h-10 bg-blue-500 text-white rounded-md">
							{isUpdate ? "Update" : "Add"} Student
						</button>
					</Form>
				</Formik>
			</Modal>
		</div>
	);
}
export default AddAndUpdateStudent;
