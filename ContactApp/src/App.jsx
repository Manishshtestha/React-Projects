import Navbar from "./Navbar";
import { PiPlus } from "react-icons/pi";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./ContactCard";
import CreateAndUpdateContact from "./CreateAndUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
function App() {
	const [contacts, setContacts] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclose();
	useEffect(() => {
		const getContacts = async () => {
			try {
				const contactsRef = collection(db, "contact");
				onSnapshot(contactsRef, (snapshot) => {
					const contactLists = snapshot.docs.map((doc) => {
						return {
							id: doc.id,
							...doc.data(),
						};
					});
					setContacts(contactLists);
				});
			} catch (e) {
				console.log(e);
			}
		};
		getContacts();
	}, []);
	const filterContacts = (e) => {
		const value = e.target.value;
		const contactsRef = collection(db, "contact");
		onSnapshot(contactsRef, (snapshot) => {
			const contactLists = snapshot.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
			});
			const filteredContacts = contactLists.filter((contact) =>
				contact.name.toLowerCase().includes(value.toLowerCase())
			);
			setContacts(filteredContacts);
      return filteredContacts;
		});
	};
	return (
		<>
			<div className="max-w-[400px] mx-auto font-bold">
				<Navbar />
				<div className="flex gap-2 m-2">
					<input
            onChange={filterContacts}
						type="text"
						className="pl-2 text-xl bg-transparent border border-white h-10 rounded-md w-[352px] text-white"
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
			<CreateAndUpdateContact isOpen={isOpen} onClose={onClose} />
			<ToastContainer position="bottom-center" />
		</>
	);
}

export default App;
