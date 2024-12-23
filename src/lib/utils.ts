import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { jwtDecode } from "jwt-decode";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface JWTReturnType {
  role:string
  user_id: string
  email:string
}

export function getRoleFromToken (token:string){
  try{
      const decodedToken = jwtDecode<JWTReturnType>(token)
      const role = decodedToken.role;
      const id = decodedToken.user_id;
      const email = decodedToken.email;
      return {role, id, email};
  }catch(error){
      console.log("error decoding token");
      return null
  }
  
}

export function getDataToken (token:string){
  try{
      const decodedToken = jwtDecode(token)
      return decodedToken;
  }catch(error){
      console.log("error decoding token");
      return null
  }
  
}
