/*
 *	Resize Image
*/
import $ from 'jquery'
function resizeImage(id) {
	
	var w = $(window).width(),
		h = $(window).height(),
		o = $('#' + id).children('img'),
		iW = o.width(),
		iH = o.height();
	o.css({
		'display': 'block',
		'opacity': 0
	});
	if (w > h) {
		if (iW > iH) {
			o.css({
				'width': w
			});
			o.css({
				'height': Math.round((iH / iW) * w)
			});
			var newIh = Math.round((iH / iW) * w);
			if (newIh < h) {
				o.css({
					'height': h
				});
				o.css({
					'width': Math.round((iW / iH) * h)
				})
			}
		} else {
			o.css({
				'height': h
			});
			o.css({
				'width': Math.round((iW / iH) * h)
			})
		}
	} else {
		o.css({
			'height': h
		});
		o.css({
			'width': Math.round((iW / iH) * h)
		})
	}
	var newIW = o.width(),
		newIH = o.height();
	if (newIW > w) {
		var l = (newIW - w) / 2;
		o.css('margin-left', -l)
	} else {
		o.css('margin-left', 0)
	}
	if (newIH > h) {
		var t = (newIH - h) / 2;
		o.css('margin-top', -t)
	} else {
		o.css('margin-top', 0)
	}
	o.css({
		'opacity': '1'
	})
}
export default resizeImage