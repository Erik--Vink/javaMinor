function init(mongoose) {

    var userSchema = new mongoose.Schema(
        {
            number: {type: Number, required: true },
            name: {type: String, required: true },
            role: {type: String, enum: ['student', 'docent'], required: true}
        });

    mongoose.model('User', userSchema);
}

module.exports = init;