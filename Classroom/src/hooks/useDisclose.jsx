import { useState } from "react";
function useDisclose() {
	const [isOpen, setIsOpen] = useState(false);
	const onOpen = () => {
		setIsOpen(true);
	};
	const onClose = () => {
		setIsOpen(false);
	};

    return{isOpen, onOpen, onClose}
}
export default useDisclose;
