namespace song {
    //% block="play song $song at tempo $tempo"
    export function song_to_melody(song: string, tempo: number) {
        let mode = 0
        let offset = 0
        let pos = 0
        let newlines = 0
        let line_length = 0

        let letter: string;
    
        let melodies : string[] = []
        let letters : string[] = []
        while(song.indexOf("RH:") != -1) {
            song = song.replace("RH:", "")
        }
        //  ???? wtheck am i working with here???
        while (song.indexOf("|") != -1) {
            song = song.replace("|", "")
        }
        while (song.indexOf(" ") != -1) {
            song = song.replace(" ", "")
        }
        line_length = song.indexOf("\n")
        for (let i of song) {
            if (i == "\n") {
                newlines += 1
                if (newlines == 2) {
                    pos += line_length
                    newlines = 0
                }
            
                offset = 0
                continue
            }
        
            if (i == "" + ("" + parseInt(i))) {
                mode = parseInt(i)
                if (newlines == 1) {
                    newlines = 0
                    offset = 0
                }
            
            } else {
                //  It seems like some completely normal methods are missing??? have to do this utter crap.
                letter = i
                if (letter != "-") {
                    if (i.toLowerCase() != i) {
                        letter = "" + letter + "#"
                    }
                
                    letter = "" + letter + "" + ("" + ("" + mode))
                }
            
                if (letters[pos + offset] == null || letters[pos + offset] == "-") {
                    letters[pos + offset] = letter
                }
            
                offset += 1
            }
        
        }

        let melody = ""
        let note_count = 0
        note_count = 1
        for (let x of letters) {
            melody = "" + melody + x + " "
            note_count += 1
            if (note_count == 8) {
                note_count = 0
                melodies.push(melody)
                melody = ""
            }
        
        }
        for (let lets_go of melodies) {
            music.playMelody(lets_go, tempo)
        }
    }
}
