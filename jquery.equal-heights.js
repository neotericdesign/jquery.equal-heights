jQuery.fn.equalHeights = function(options) {
	var config = {
			target: this,
			source: this,
      offset: 0
  };

  if(options) $.extend(config, options);

	var h = 0;
	
  config.source.each(function(){
    if($(this).height() > h){
			h = $(this).height();
		}
  });

	return config.target.height(h + config.offset);
};