import { Navigate, useNavigate } from "react-router-dom"


export default class User {
    

    static logout() {
       localStorage.removeItem('ACCESS_TOKEN')
      
       
    }

    static submit(e) {  
        e.preventDefault()
    }
}
