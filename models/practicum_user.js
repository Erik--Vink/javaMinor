function init(mongoose){
    var practicumUserSchema = new mongoose.Schema(
        {
            practicum: { type: mongoose.Schema.Types.ObjectId, ref: "Practicum" },
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            status: {type: String, enum: ['open', 'closed', 'in_progress'], required: true},
            question: {type: String}
        });

    mongoose.model('PracticumUser', practicumUserSchema);
}

module.exports = init;