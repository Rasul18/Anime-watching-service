import { useState } from "react"

export const RegisterPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onInputChange = (event) => {
        const { placeholder, value } = event.target;

        switch (placeholder) {
            case "Name":
                setName(value)
                return;
            case "Email":
                setEmail(value)
                return
            case "Password":
                setpassword(value)
                return
            default: return;
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return <>
        <form >
            <input onChange={onInputChange} placeholder="Name" type="text" value={name} />
            <input onChange={onInputChange} placeholder="Email" type="text" value={email} />
            <div>
                <input onChange={onInputChange} placeholder="Password" type={showPassword ? 'text' : 'password'} value={password} />
                <button onClick={handleShowPassword} type="button">eye</button>
            </div>

            <button type="submit">Sign up</button>
        </form>
    </>
}