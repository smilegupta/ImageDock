import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({isAuth, component: Component, ...rest}) => {
    console.log()
    return (
        <Route {...rest} render={(props) => {
            console.log(props)
            if(isAuth){
                return <Component {...props} />
            } else{
               return <Redirect to={{pathname: '/login', state: {from:props.location} }}/>
            }
        }}/>
    )
}

export default ProtectedRoute
