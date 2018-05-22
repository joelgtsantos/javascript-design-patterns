$(function() {

  var data = {
    current: {},
    kittens: [
        { name: 'Kitten 1', 
          count: 0, 
          image: 'css/images/k-1.jpg'
        },
        { name: 'Kitten 2', 
          count: 0, 
          image: 'css/images/k-2.jpg'
        },
        { name: 'Kitten 3', 
          count: 0, 
          image: 'css/images/k-3.jpg'
        },
        { name: 'Kitten 4', 
          count: 0, 
          image: 'css/images/k-4.jpg'
        } 
      ]
  };

  var octopus = {

    showKitten: function(kitten){
      data.currentKitten = kitten;
      kittenView.render();
    },

    getKittens: function(){
      return data.kittens;
    },

    incrementCounter: function(){
      data.currentKitten.count++;
      kittenView.render();
    },

    getCurrentKitten: function(){
      return data.currentKitten;
    },

    init: function(){
      data.currentKitten = data.kittens[0];
      listKittensView.init();
      kittenView.init();
    }
  };

  var listKittensView = {
    init: function(){
      //Get kitten list DOM
      this.$kittenList = $('#kitten-list');

      listKittensView.render();
    },

    render: function(){
      var kittenList = this.$kittenList;

      //Clean DOM First
      kittenList.html('');
      
      //Render li items
      octopus.getKittens().forEach(function(kitten){

        var elem = $('<li class="kitten-item">' + kitten.name + '</div>');

        //Add event click for each kitten in list
        elem.click((function(kitten) {
            return function(){
              octopus.showKitten(kitten);
            };
        })(kitten));

        kittenList.append(elem);
      });
    }
  }

  var kittenView = {
    init: function(){
      this.kitten = $('#kitten');
      this.kittenImg = $('#kitten-img');
      this.kittenName = $('#kitten-name');
      this.kittenCount = $('#kitte-count');

      this.kitten.click(function(e) {
        octopus.incrementCounter();
      });

      kittenView.render();
    },

    render: function(){
      var kitten = octopus.getCurrentKitten();
      this.kittenImg.attr('src', kitten.image);
      this.kittenName.text(kitten.name);
      this.kittenCount.text(kitten.count);
    }
  };

  octopus.init();
}());
