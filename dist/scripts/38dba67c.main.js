console.log("Made with love and generator-stumpworks."),String.prototype.contains||(String.prototype.contains=function(a){"use strict";return this.indexOf(a)>-1}),Array.prototype.contains||(Array.prototype.contains=function(a){"use strict";return this.indexOf(a)>-1}),Number.prototype.contains||(Number.prototype.contains=function(a){"use strict";return this.toString().indexOf(a)>-1}),console.assert||(console.assert=function(a,b){"use strict";try{a||console.log("Test failed. Testing "+b+".")}catch(c){console.log("Test failed. Testing "+b+".")}});