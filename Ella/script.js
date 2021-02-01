// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="ella-logo.png"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "php",
			img: "https://image.flaticon.com/icons/png/128/4039/4039137.png",
			id: 1,
		},
		{
			name: "css3",
			img: "https://image.flaticon.com/icons/png/128/4039/4039232.png",
			id: 2
		},
		{
			name: "html5",
			img: "https://image.flaticon.com/icons/png/128/4039/4039238.png",
			id: 3
		},
		{
			name: "jquery",
			img: "https://image.flaticon.com/icons/png/128/4039/4039256.png",
			id: 4
		}, 
		{
			name: "javascript",
			img: "https://image.flaticon.com/icons/png/128/4039/4039330.png",
			id: 5
		},
		{
			name: "node",
			img: "https://image.flaticon.com/icons/png/128/4039/4039190.png",
			id: 6
		},
		{
			name: "photoshop",
			img: "https://image.flaticon.com/icons/png/128/4039/4039332.png",
			id: 7
		},
		{
			name: "python",
			img: "https://image.flaticon.com/icons/png/128/4039/4039135.png",
			id: 8
		},
		{
			name: "rails",
			img: "https://image.flaticon.com/icons/png/128/4039/4039283.png",
			id: 9
		},
		{
			name: "sass",
			img: "https://image.flaticon.com/icons/png/128/4039/4039328.png",
			id: 10
		},
		{
			name: "sublime",
			img: "https://image.flaticon.com/icons/png/128/4039/4039345.png",
			id: 11
		},
		{
			name: "wordpress",
			img: "https://image.flaticon.com/icons/png/128/4039/4039152.png",
			id: 12
		},
	];
    
	Memory.init(cards);


})();