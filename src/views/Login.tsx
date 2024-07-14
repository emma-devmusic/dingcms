
import { useForm } from "../hooks/useForm"
import { auth, authCMS } from "../services/auth"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useAppDispatch } from "../redux/store"
import { login } from "../redux/slice/authSlice"


export const Login = () => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/')
            }
        })
    }, [])

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })


    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(
            login(values)
        )
    }

    return (
        <div className="container bg-light d-flex align-items-center justify-content-center" style={{
            maxWidth: '500px',
            height: '100vh',
            width: '100%'
        }}>
            <main className="form-signin w-100">
                <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 text-center fw-normal">Ingresar al CMS - DING</h1>

                    <div className="form-floating">
                        <input value={values.email} onChange={handleInputChange} name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input value={values.password} onChange={handleInputChange} name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    {/* <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div> */}
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                    <p className="mt-5 mb-3 text-muted">&copy; Ding - 2024</p>
                </form>
            </main>
        </div>
    )
}
