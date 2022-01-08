module.exports = {
    name: "dci_scores",
    description: "The user enters a year and Dibot returns a link to the world championship results.",
    execute(message, args){
        var year = message.toString().slice(5);

        // check for edge cases/invalid input
        if (year === "" || year.length != 4){
            message.channel.send("Invalid year.");
            return;
        }

        for (let i = 0; i < year.length-1; i++){
            if (year.substring(i,i+1) < '0' || year.substring(i,i+1) > '9'){
                message.channel.send("Invalid year.");
                return;
            }
                
        }

        if (year === "2020"){
            message.channel.send("The 2020 season was cancelled due to the coronavirus pandemic. DCI resumed in 2021.");
            return;
        }

        if (year === "2021"){
            message.channel.send("The 2021 season was noncompetitive. Corps performed at a final exhibition event in Indianapolis, Indiana from August 12-14 on an opt-in basis.");
            return;
        }

        if (year > 2022){
            message.channel.send("That season hasn't happened yet!");
            return;
        }

        // for (let i = 0; i < year.length-1; i++){
        //     if (year.substring(i,i+1) != )
        // }
            
        message.channel.send("For placements, scores, and repertoires of the ".concat(year) + " season: " + "http://www.dcxmuseum.org/index.cfm?roomid=1310&view=decade&option=".concat(year));
    }
}