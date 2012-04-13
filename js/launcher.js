/* ---------------------------------------
	Unscramble Email
--------------------------------------- */

	(function()
	{
		/*
			To scramble an email into an obfuscated array:
			var scrambled = CRD.email.scramble('example@example.com');
		*/
		
		var scrambled = [101, 221, 217, 206, 221, 220, 209, 165, 165, 221, 217, 206, 221, 220, 209, 147, 145, 210, 220];
		var unscrambled = CRD.email.unscramble(scrambled);
		var placeholder = document.getElementById('email');
		
		// Update placeholder
		placeholder.href = 'mailto:' + unscrambled;
		placeholder.innerHTML = unscrambled;
	})();