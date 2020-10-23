function greed(data){

    console.log(data);
    
    var numRodadas = data.rounds;
    var a = data.jogador1;
    var b = data.jogador2;
    var mx = 0, mn = 0;

    for(var i = 0; i < 3; i++) {
        var j = (i + 1) % 3;
		mx += Math.min(a[i], b[j]);
		if((a[i] - b[i] - b[(i + 2) % 3]) >= 0) {
			mn = a[i] - b[i] - b[(i + 2) % 3];
		}
    }
    
    console.log(mn, mx);
    return [mn, mx];
}

module.exports = greed;