module.exports = {
	createFarmer: function() {
    
	},
	updateFarmer: function() {

	},
	getFarmerDetails: function(req, res) {
    	return res.ok({
    		name: 'Kishan Deshmukh',
    		phone: '8956478956',
    		villege: 'Narsi',
    		Taluka: 'Biloli',
    		District: 'Nanded',
    		State: 'Maharashtra'
    	});
	},
	deleteFarmer: function(req, res) {
		const FarmerId = req.body.farmerId;
		let sql ='DELETE FROM farmers where FarmerId ='+FarmerId;

		return res.ok('Farmer deleted successfully');
	}
};