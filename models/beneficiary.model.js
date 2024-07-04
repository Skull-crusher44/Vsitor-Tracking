import mongoose from 'mongoose';

const beneficiarySchema = new mongoose.Schema(
  {   
    address:{
        type: String,
      required: true,
    },
    memberCount : {
        type : Number,
        required:true, 
    },
    dependents :{
        type : Number,
        required:true, 
    },
    widow:{
        type : boolean,
        default : false,
    },
    income: {
        type: Number,   
    },
    location : {
        type: String,
        required: true,
    },
    cattleCount :{
        type : Number,
        required : true,
    },
    cattleIds :{
        type : Array,
        default :[],
    },
  },
  { timestamps: true }
);

const Beneficiary = mongoose.model('Beneficiary', beneficiarySchema);

export default Beneficiary;