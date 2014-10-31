Meteor.methods(
{
	'upCounterWrite': function(idTag)
	{
		var tag = Tags.findOne({_id: idTag});

		if (tag == undefined)
			Tags.update(idTag, {$set: {counterWrite: tag.counterWrite + 1}})
	}
});