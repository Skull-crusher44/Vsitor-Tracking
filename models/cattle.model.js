import mongoose from 'mongoose';

const cattleSchema = new mongoose.Schema(
  {
    breed:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    pregnancyStatus:{
        type: Boolean,
        default: false,
    },
    weight :{
        type : Number,
        required: true,
    },
    motherId:{
        type: String,
        required: true,
    },
    fatherId :{
        type: String,
        required: true,
    },
    healthStatus : {
        type: String,
        required: true,
    },
    dateOfDeath :{
        type: Date, 
    },
    dateOfBirth : {
        type: Date,
        required: true,
    },
    isAdult:{
        type: Boolean,
        default:false,
    }
  },
  { timestamps: true }
);

const Cattle = mongoose.model('Cattle', cattleSchema);

export default Cattle;