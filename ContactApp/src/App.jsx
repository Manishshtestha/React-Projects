import Navbar from "./Navbar";
import { PiPlus } from "react-icons/pi";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./ContactCard";
import CreateAndUpdateContact from "./CreateAndUpdateContact";
function App() {
	const [contacts, setContacts] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const onOpen = () => {
		setIsOpen(true);
	};
	const onClose = () => {
		setIsOpen(false);
	};
	useEffect(() => {
		const getContacts = async () => {
			try {
				const contactsRef = collection(db, "contact");
				const contactSnapshot = await getDocs(contactsRef);
				const contactLists = contactSnapshot.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					};
				});
				setContacts(contactLists);
			} catch (e) {
				console.log(e);
			}
		};
		getContacts();
	}, []);
	return (
		<>
			<div className="max-w-[400px] mx-auto font-bold">
				<Navbar />
				<div className="flex gap-2 m-2">
					<input
						type="text"
						className="pl-2 text-xl bg-transparent border border-white h-10 rounded-md w-[352px]"
						placeholder="Manushi"
					/>

					<button
						className="btn text-white bg-transparent border border-white rounded-full h-10 w-10 flex items-center justify-center"
						onClick={onOpen}
					>
						<PiPlus className="text-2xl cursor-pointer font-extrabold" />
					</button>
				</div>
				<div>
					{contacts.map((contact) => {
						return (
							<ContactCard key={contact.id} contact={contact} />
						);
					})}
				</div>
			</div>
      <CreateAndUpdateContact isOpen={isOpen} onClose={onClose}/>
		</>
	);
}

export default App;
