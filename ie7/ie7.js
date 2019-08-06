/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'myy\'">' + entity + '</span>' + html;
	}
	var icons = {
		'state-johor': '&#xe900;',
		'state-kedah': '&#xe901;',
		'state-kelantan': '&#xe902;',
		'state-kuala-lumpur': '&#xe903;',
		'state-labuan': '&#xe904;',
		'state-melaka': '&#xe905;',
		'state-negeri-sembilan': '&#xe906;',
		'state-pahang': '&#xe907;',
		'state-perak': '&#xe908;',
		'state-perlis': '&#xe909;',
		'state-pulau-pinang': '&#xe90a;',
		'state-putrajaya': '&#xe90b;',
		'state-sabah': '&#xe90c;',
		'state-sarawak': '&#xe90d;',
		'state-selangor': '&#xe90e;',
		'state-terengganu': '&#xe90f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/state-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
