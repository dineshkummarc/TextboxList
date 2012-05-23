var FacebookList = new Class({
  
  Extends: TextboxList,
  
  createBox: function(text, options) {
    var li = arguments.callee.parent(text, options);
    li.addEvents({
      'mouseenter': function() { this.addClass('bit-hover') },
      'mouseleave': function() { this.removeClass('bit-hover') }
    });
    li.adopt(new Element('a', {
      'href': '#',
      'class': 'closebutton',
      'events': {
        'click': function(e) {
          new Event(e).stop();
          if(! this.current) this.focus(this.maininput);
          this.dispose(li);
        }.bind(this)
      }
    }));
    return li;
  }
  
});

window.addEvent('domready', function() {
  var tlist = new TextboxList('input-demo');
  var tlist2 = new FacebookList('input-demo2');
  var tlist3 = new FacebookList('input-demo3', {'hideempty': false, 'resizable': {'step': 8}});
  var tlist4 = new TextboxList('input-demo4', {'extrainputs': false});
  
  $('add-click').addEvent('click', function(ev) {
    new Event(ev).stop();
    if($('add-input').get('value').length > 0)
    {
      [tlist,tlist2,tlist3,tlist4].each(function(el) {
        el.add($('add-input').get('value'));
      });
    }
  });
  
  tlist.add('Karl Marx');
  tlist.add('Leon Trotsky');  
  
  tlist2.add('Jorge Luis Borges');
  tlist2.add('Julio Cortazar');
  
  tlist3.add('Steve Jobs');
  tlist3.add('Bill Gates');
  
  tlist4.add('Lost');
  tlist4.add('Prison Break');
});