function init(mongoose){
    var practicumSchema = new mongoose.Schema(
        {
            name: {type: String, required: true },
            practicum_users: [{ type: mongoose.Schema.Types.ObjectId, ref: "PracticumUser" }]
        });

    mongoose.model('Practicum', practicumSchema);
}

module.exports = init;