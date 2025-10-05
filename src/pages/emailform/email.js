import './email.css';
import React from "react";


export default function Email () {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "059c2d10-fdea-44ed-a5b4-570fc79ed7fa");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult({message: "Got it! I'll be in touch!", status: "success"});
            // event.target.reset();
        } else {
            setResult({ message: data.message, status: "error" });
            // console.log("Error", data);
            // setResult(data.message);
        }
    };
    
    return (
        
        <section className="email">
            <form onSubmit={onSubmit}>
                <h2>Send me an email!</h2>
                <div className="input-box">
                    <label>Name </label>
                    <input type="text" className="field" placeholder="Full name" name="name" required />
                </div>
                <div className="input-box">
                    <label>Email </label>
                    <input type="email" className="field" placeholder="you@example.com" name="email" required />
                </div>
                <div className="input-box">
                    <label>Message </label>
                    <textarea name="message" className="field mess" placeholder="Tell me something!" required></textarea>
                </div>
                <button type="submit">Send message</button>

                {result && (
                    <p className={`form-message ${result.status}`}>
                        {result.message}
                    </p>
                    )}
                    
            </form>
        </section>

    );
}
