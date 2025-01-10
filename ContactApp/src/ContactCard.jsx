import { deleteDoc, doc } from "firebase/firestore";
import { BiTrash } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { TbEditCircle } from "react-icons/tb";
import { db } from "./config/firebase";
import useDisclose from "./hooks/useDisclose";
import CreateAndUpdateContact from "./CreateAndUpdateContact";
import { toast } from "react-toastify";

function ContactCard({ contact }) {
	const { isOpen, onOpen, onClose } = useDisclose();
	const deleteContact = async (id) => {
		try {
			await deleteDoc(doc(db, "contact", id));
            toast.success("Contact Deleted Successfully")
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div key={contact.id}>
			<div className="flex gap-2 p-2 bg-gray-100 rounded-md items-center justify- text-white border m-2">
				<HiUserCircle className="text-4xl text-orange" />
				<div className="flex flex-col w-4/5">
					<h3>{contact.name}</h3>
					<p className="text-sm text-slate-300">{contact.email}</p>
				</div>
				<div className="flex gap-1">
					<button className="btn text-white text-2xl px-2 py-1 bg-blue-600 rounded-md" onClick={onOpen}>
						<TbEditCircle />
					</button>
					<button
						className="btn text-white text-2xl px-2 py-1 bg-red-600 rounded-md"
						onClick={() => deleteContact(contact.id)}
					>
						<BiTrash />
					</button>
				</div>
			</div>
            <CreateAndUpdateContact isUpdate contact={contact} isOpen={isOpen} onClose={onClose}/>
		</div>
	);
}

export default ContactCard;
