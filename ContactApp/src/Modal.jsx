import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";
function Modal({ isOpen, onClose, children }) {
	return createPortal(
		<>
			{isOpen && (
				<>
					<div className="mx-auto top-0 relative z-50 min-h-[200px] max-w-[400px] bg-white p-4 rounded-lg">
						<div className="btn flex justify-end">
							<CgClose className="text-3xl" onClick={onClose} />
						</div>
                        {children}
					</div>
					<div
						onClick={onClose}
						className="w-screen h-screen absolute top-0 z-40 backdrop-blur"
					/>
				</>
			)}
		</>,
        document.getElementById("modal-root")
	);
}

export default Modal;
