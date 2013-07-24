Email Scrambler Readme
======================

Scrambling an email
-------------------

To scramble an email into an obfuscated array:

``` js
// The 'scramble' method takes a string and returns a scrambled array
var scrambled = CRD.email.scramble('example@example.com');
```

Unscrambling an email
---------------------

To unscramble an obfuscated array into an email:

``` js
// The 'unscramble' method takes a scrambled array and returns a nice string
var unscrambled = CRD.email.unscramble([101, 221, 217, 206, 221, 220, 209, 165, 165, 221, 217, 206, 221, 220, 209, 147, 145, 210, 220]);
```

NB
--

For users browsing your site without JavaScript, make sure you have a suitable fallback!
