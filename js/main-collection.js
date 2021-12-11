var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song,
});

var songs = new Songs([
  new Song({ title: "Song 1", band: "rammstein", downloads: 100 }),
  new Song({ title: "Song 2", downloads: 300 }),
  new Song({ title: "Song 3", downloads: 1000 }),
]);

console.log("songs before Add", songs);
songs.add(new Song({ title: "Song 4" }));
console.log("songs after Add", songs);

songs.add(new Song({ title: "Song 5", downloads: 50 }), { at: 0 });

songs.push(
  new Song({ title: "Song 1", downloads: 200, band: "system of a down" })
);

console.log("Where", songs.where({ title: "Song 1" }));
console.log("FindWhere", songs.findWhere({ title: "Song 1" }));
console.log(
  "Filtered with where",
  songs.where({ title: "Song 1", band: "rammstein" })
);
console.log(
  "Filtered",
  songs.filter(function (song) {
    return song.get("downloads") < 100;
  })
);

console.log(
  songs.each(function (song) {
    song.set("downloads", song.get("downloads") + 1);
    return song;
  })
);
