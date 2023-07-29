function gramophone(nameBand, nameAlbum, songFromAlbum) {
    songLength = (nameBand.length * nameAlbum.length) * songFromAlbum.length / 2;
    let rotations = Math.ceil(songLength / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);   
}
gramophone('Rammstein', 'Sehnsucht', 'Engel')