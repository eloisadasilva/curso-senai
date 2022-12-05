import { useState } from "react"

export default function Login(){

    const [login, setLogin] = useState({email:'', senha:''})

    function Logar(e){
        e.preventDefault()
        alert("Usuário logado")

    }

    return(
        <form onSubmit={Logar}>
            <label>E-mail:</label>
            <input type="email"  required value={login.email} onChange={(e)=>{setLogin({...login, email: e.target.value})}}/>

            <label>Senha:</label>
            <input type="password" minLength={8} required value={login.senha} onChange={(e)=>{setLogin({...login, senha: e.target.value})}}/>

            <button type="submit" >Login</button>

        </form>
    )
} 