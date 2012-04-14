/*
	Copyright (c) 2012 Colin Rotherham, http://colinr.com
	https://github.com/colinrotherham/email-obfuscator
*/

	var CRD = CRD || {};
	
	CRD.email =
	{
		scramble: function(unscrambled)
		{
			var scrambled = [], i = unscrambled.length;

			while (i--)
			{
				scrambled[i] = unscrambled.charCodeAt(i);
				if (i > 0) { scrambled[i] += unscrambled.charCodeAt(i - 1); }
			}

			return scrambled;
		},
		
		unscramble: function(scrambled)
		{
			var unscrambled = [], charCode, i, j = scrambled.length;

			for (i = 0; i < j; i++)
			{
				if (i > 0) { scrambled[i] = scrambled[i] - scrambled[i - 1]; }
				unscrambled[i] = String.fromCharCode(scrambled[i]);
			}

			return unscrambled.join('');
		}
	};