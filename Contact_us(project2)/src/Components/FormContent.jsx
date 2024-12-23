import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import styles from "./FormContent.module.css";
import contactImg from "../assets/contact.svg";
function FormContent() {
	return (
		<div className="flex justify-evenly">
			<div className="w-[472px] flex flex-col mt-20">
				<div className="flex gap-8 mb-8">
					<Button
						text="VIA SUPPORT CARE"
						icon={<MdMessage size={24} />}
					/>
					<Button text="VIA CALL" icon={<FaPhoneAlt size={24} />} />
				</div>
				<Button
					text="VIA EMAIL FORM"
					icon={<AiOutlineMail size={24} />}
					isOutline={true}
				/>
				<form>
					<div className={styles.form_control}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" required />
					</div>
					<div className={styles.form_control}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" required />
					</div>
					<div className={styles.form_control}>
						<label htmlFor="text">Text</label>
						<textarea id="Name" name="Name" required rows="8" />
					</div>
					<div className="mt-3 flex justify-center">
						<Button text="SUBMIT" />
					</div>
				</form>
			</div>
			<img src={contactImg} alt="" />
		</div>
	);
}

export default FormContent;
