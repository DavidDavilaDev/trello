const mongoose = require('mongoose');

const boardSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		backgroundImageLink: {
			type: String,
			required: true,
		},
		activity: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref:'user',
				},
				name: {
					type: String
				},
				action: {
					type: String,
				},
				date: {
					type: Date,
					default: Date.now(),
				},	
				edited:{
					type: Boolean,
					default: false,
				},	
				cardTitle:{
					type: String,
					default: '',
				},		
				actionType:{
					type:String,
					default:'action',
				}
			},
		],
		members: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'user',
				},
				name: {
					type: String,
				},
				surname: {
					type: String,
				},
				email: {
					type:String,
				},
				role: {
					type: String,
					default: 'member',
				},
			},
		],
		lists: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'list',
			},
		],
		description:{
			type: String,
			default:'',
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('board', boardSchema);
