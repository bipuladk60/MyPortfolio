import { useState } from 'react';
import { handleSubmit } from '../backend/CmntSubmit';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // Handle the email submission logic here
        console.log("Sending email:", { name, email, message });
    };


    return (
        <div className="flex flex-col items-center justify-center p-6 w-full ">
            <form
            
            className="w-full max-w-md space-y-6">
                
                {/* Name Field */}
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-b-2 border-primary focus:outline-none p-2 mb-2 text-text placeholder-text bg-transparent"
                    />
                </div>

                {/* Email Field */}
                <div className="flex flex-col">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-b-2 border-primary focus:outline-none p-2 mb-2 text-text placeholder-text bg-transparent"
                    />
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border-b-2 border-primary focus:outline-none text-text placeholder-text p-2 bg-transparent"
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                    {/* Email Button */}
                    <button
                        onClick={handleEmailSubmit}
                        className="bg-primary text-white py-2 px-4 rounded-md transition-colors"
                    >
                        Email
                    </button>

                    {/* Leave a Comment Button */}
                    <button
                        className="bg-primary text-white py-2 px-4 rounded-md transition-colors"
                        type="submit"
                        onClick={(event) => handleSubmit(event, name, email, message, setResponse, setName, setEmail, setMessage)}
                    >
                        Leave a Comment
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;