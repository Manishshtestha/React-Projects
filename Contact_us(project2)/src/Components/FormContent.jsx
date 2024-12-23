import { useState } from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import styles from "./FormContent.module.css";
import contactImg from "../assets/contact.svg";
function FormContent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const onSubmit = (event)=>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setMessage(event.target[2].value);
    }
	return (
		<div className="w-3/5 flex justify-evenly mr-auto ml-auto">
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
				<form onSubmit={onSubmit}>
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
						<Button text="SUBMIT"/>
					</div>
				</form>
                <div>
                    The following data is received from the form provided:
                    <ul>
                        <li>name: {name}</li>
                        <li>email: {email}</li>
                        <li>message: {message}</li>
                    </ul>
                </div>
			</div>
			<img src={contactImg} alt="" />
		</div>
	);
}

export default FormContent;
