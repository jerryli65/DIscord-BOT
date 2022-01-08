module.exports = {
    name: "dci_piece_played",
    description: "The user enters a piece and Dibot returns a link to the corps who have played that piece and the year.",
    execute(message, args){
        const piece = message.toString().slice(6);
        const words = piece.split(" ");

        for(let i = 0; i < words.length; i++){
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        piece_cap = "";
        var searchString = "";
        for(let i = 0; i < words.length-1; i++){
            piece_cap += words[i] + " ";
            searchString += words[i] + "%20";
        }
        piece_cap += words[words.length-1];
        searchString += words[words.length-1];


        message.channel.send(piece_cap + " was played during the following seasons by the following corps: "  + "http://www.dcxmuseum.org/index.cfm?view=search&song=" + searchString);
    }
}

//-dcip pictures at an exhibition