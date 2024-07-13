import * as bcrypt from "bcrypt"

export async function encodeString(rawString:string){
    let hashedString =await bcrypt.hash(rawString, 10)
    return hashedString
}

export async function validateEncodedString(theString:string,  hashedString:string){
    let compare = await bcrypt.compare(theString, hashedString)
    return compare
}