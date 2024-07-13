
import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const eventeeSchema = new Schema({
    first_name: { type: String, required:true},
    last_name: { type: String, required:true},
    password: { type: String, unique: true, required:true},
    email:{type:String,required:true},
    eventeeReminder_days:{type:String, default:"1"},
    sex:{type:String, enum:["male", "female"]},
    country:{type:String},
    state:{type:String},
    phoneNum:{type:String},
    profileImage:{type:Object, require:true},
    event_count:{type:Number, default:0},
    has_signed_agreement:{type:String, require:true},
    passwordResetToken:{type:String},
    passwordResetExpireDate:{type:Date},
    verified:{type:Boolean, default:false},
    creationDate:{type:Date, default:new Date()},
    bought_eventsId:[{type:Schema.Types.ObjectId, ref:"Event"}],
    attended_eventsId:[{type:Schema.Types.ObjectId, ref:"Event"}]
})


export interface Eventee extends mongoose.Document{
    id:string
    first_name:string
    last_name:string
    password:string
    email:string
    eventeeReminder_days:string
    sex:string
    country:string
    state:string
    phoneNum:string
    profileImage:object
    event_count:number
    has_signed_agreement:string
    passwordResetToken:string
    passwordResetExpireDate:any
    verified:boolean
    creationDate:Date
    bought_eventsId:string[]
    attended_eventsId:string[]
}
