import { CgClose } from "react-icons/cg";
function Modal({ isOpen, children, onClose }) {
	return isOpen ? (
		<div>
			<div className="relative z-50 min-h-[200px] max-w-[400px] bg-black flex flex-col border p-2 rounded-lg mx-auto">
				<CgClose className="text-white text-xl self-end" onClick={onClose} />
                {children}
			</div>
			<div
				className="top-0 absolute z-40 h-screen w-screen backdrop-blur-sm"
				onClick={onClose}
			></div>
		</div>
	) : (
		""
	);
}

export default Modal;
