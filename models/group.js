/**
 * Created by Sander on 8-9-2016.
 */
function init(mongoose){
    var classSchema = new mongoose.Schema(
        {
            name: {type: String, required: true }
        });

    mongoose.model('Group', classSchema);
}

module.exports = init;