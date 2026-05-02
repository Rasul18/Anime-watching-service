import { useState } from "react"

export const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onInputChange = (event) => {
        const { placeholder, value } = event.target;

        switch (placeholder) {
            case "Email":
                setEmail(value)
                return;
            case "Password":
                setPassword(value)
                return;
            default: return;
        }
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return <>
        <form>
            <input onChange={onInputChange} value={email} placeholder="Email" type="text" />
            <div>
                <input onChange={onInputChange} value={password} placeholder="Password" type={showPassword ? "text" : "password"} />
                <button onClick={handleShowPassword} type="button">eye</button>
            </div>
            <button placeholder="Login" type="submit"> Login </button>
        </form>
    </>
}