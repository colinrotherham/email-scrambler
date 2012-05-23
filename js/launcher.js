/*
	Copyright (c) 2012 Colin Rotherham, http://colinr.com
	https://github.com/colinrotherham
*/

	(function()
	{
		var scrambled = [101, 221, 217, 206, 221, 220, 209, 165, 165, 221, 217, 206, 221, 220, 209, 147, 145, 210, 220];
		var unscrambled = CRD.email.unscramble(scrambled);
		var placeholder = document.getElementById('email');
		
		// Update placeholder
		placeholder.href = 'mailto:' + unscrambled;
		placeholder.innerHTML = unscrambled;
	})();