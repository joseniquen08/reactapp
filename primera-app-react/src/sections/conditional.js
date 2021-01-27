import React, {Component} from 'react';

class LoginButton extends Component{
    render (){
        return <button>Iniciar Sesión</button>
    }
}

class LogoutButton extends Component{
    render (){
        return (
            <div>
                <p>Bienvenido, NombreUsuario</p>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}

export default class ConditionalSection extends Component {
    constructor (){
        super()
        this.state = { isUserLogged: false}
    }
    
    render(){
        const conditionalComponent = this.state.isUserLogged ? <LogoutButton /> : <LoginButton />
        return (
            <div>
                <h4>Renderizado Condicional</h4>
                {conditionalComponent}
            </div>
        )
    }
}