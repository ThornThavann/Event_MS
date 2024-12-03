import mongoose  from "mongoose";

const { Schema, model } = mongoose;

const VenueModelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
});

const VenueModel = model("Venue", VenueModelSchema);

export default VenueModel;