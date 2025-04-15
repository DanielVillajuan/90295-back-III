import bcrypt from 'bcrypt';
import {fileURLToPath} from 'node:url';
import { dirname } from 'node:path';

export const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salts);
}

export const passwordValidation = async(user,password) => bcrypt.compare(password,user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;


export const suma = (num1,num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') return 0
    return num1 + num2
} 
