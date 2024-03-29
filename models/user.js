function init(mongoose) {

    var userSchema = new mongoose.Schema(
        {
            number: {type: Number, required: true, unique: true },
            name: {type: String, required: true },
            role: {type: String, enum: ['student', 'docent'], required: true},
            class: { type: mongoose.Schema.Types.ObjectId, ref: "Group"}
        });

    mongoose.model('User', userSchema);
}

module.exports = init;