var Song = Backbone.Model.extend({
  defaults: {
    listeners: 0,
  },
});

var SongView = Backbone.View.extend({
  events: {
    click: "onClick",
  },

  onClick: function () {
    this.model.set("listeners", this.model.get("listeners") + 1);
  },
  initialize: function () {
    this.model.on("change", this.onModelChange, this);
  },
  onModelChange: function () {
    this.$el.addClass("someClass");
  },

  render: function () {
    this.$el.html(
      this.model.get("title") +
        "- Listeners: " +
        this.model.get("listeners") +
        "<button>Adicionar listener</button>"
    );
    return this;
  },
});

var song = new Song({ title: "Blue in Green" });

var songView = new SongView({
  el: "#container",
  model: song,
});

songView.render();
