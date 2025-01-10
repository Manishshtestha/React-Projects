import Modal from "./Modal";

function CreateAndUpdateContact({isOpen,onClose}){
    return (
		<div>
			<Modal isOpen={isOpen} onClose={onClose} />
		</div>
	);
}

export default CreateAndUpdateContact;