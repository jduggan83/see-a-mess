/**
 * Created by jduggan on 29/06/2016.
 */
var mongoose = require('mongoose');
var siteSchema = new mongoose.Schema({
    siteDefinition: mongoose.Schema.Types.Mixed,
    googleSheetId: String
});
mongoose.model('Site', siteSchema);