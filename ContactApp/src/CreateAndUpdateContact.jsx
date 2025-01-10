import { updateDoc, addDoc, collection, doc } from "firebase/firestore";
import Modal from "./Modal";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { db } from "./config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
});
function CreateAndUpdateContact({ isOpen, onClose, isUpdate, contact }) {
	const addContact = async (contact) => {
		try {
			const contactRef = collection(db, "contact");
			await addDoc(contactRef, contact);
			toast.success("Contact Added Successfully");
			onClose();
		} catch (error) {
			console.error(error);
		}
	};
	const updateContact = async (contact, id) => {
		try {
			const contactRef = doc(db, "contact", id);
			await updateDoc(contactRef, contact);
			onClose();
			toast.success("Contact Updated Successfully");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div>
			<Modal isOpen={isOpen} onClose={onClose}>
				<Formik
					validationSchema={contactSchemaValidation}
					initialValues={
						isUpdate
							? {
									name: contact.name,
									email: contact.email,
							  }
							: {
									name: "",
									email: "",
							  }
					}
					onSubmit={(values) => {
						console.log(values);
						isUpdate
							? updateContact(values, contact.id)
							: addContact(values);
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
								className="border h-10 rounded-md px-2 text-xl "
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
								className="border h-10 rounded-md px-2 text-xl "
							/>
							<ErrorMessage
								name="email"
								component="div"
								className="text-red-500 text-xs"
							/>
						</div>
						<button className="w-full my-4 h-10 bg-blue-500 text-white rounded-md">
							{isUpdate ? "Update" : "Add"} Contact
						</button>
					</Form>
				</Formik>
			</Modal>
		</div>
	);
}

export default CreateAndUpdateContact;
