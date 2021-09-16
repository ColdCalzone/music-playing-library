function song_to_melody(song: string, tempo: number) {
    let letter: string;
    //  ???? wtheck am i working with here???
    while (song.indexOf("|") != -1) {
        song = song.replace("|", "")
    }
    while (song.indexOf(" ") != -1) {
        song = song.replace(" ", "")
    }
    let line_length = song.indexOf("\n")
    let mode = 0
    let pos = 0
    let offset = 0
    let letters = []
    let newlines = 0
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
                    letter += "#"
                }
                
                letter += "" + ("" + mode)
            }
            
            if (letters[pos + offset] == null || letters[pos + offset] == "-") {
                letters[pos + offset] = letter
            }
            
            offset += 1
        }
        
    }
    let melodies = []
    let note_count = 1
    let melody = ""
    for (let x of letters) {
        melody += x + " "
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

song_to_melody(`5|--d---------------d-------|
4|dd--a--G-g-f-dfgcc--a--G-g|
        
5|--------d---------------d-|
4|-f-dfg----a--G-g-f-dfg----|
3|------bb--------------AA--|
        
5|--------------d-----------|
4|a--G-g-f-dfgdd--a--G-g-f-d|
        
5|----d---------------d-----|
4|fgcc--a--G-g-f-dfg----a--G|
3|------------------bb------|
        
5|----------d---------------|
4|-g-f-dfg----a--G-g-f-dfgdd|
3|--------AA----------------|
        
5|d---------------d---------|
4|--a--G-g-f-dfgcc--a--G-g-f|
        
5|------d---------------d---|
4|-dfg----a--G-g-f-dfg----a-|
3|----bb--------------AA----|
        
5|------------d-------------|
4|-G-g-f-dfgdd--a--G-g-f-dfg|
        
5|--d---------------d-------|
4|cc--a--G-g-f-dfg----a--G-g|
3|----------------bb--------|
        
5|--------d-----------------|
4|-f-dfg----a--G-g-f-dfgf-ff|
3|------AA------------------|
        
4|-f-f-d-d--d-ffff-g-G-gfdfg|
        
5|-------------c----d-d-d-dc|
4|--f-ff-g-G-a---a-------a--|
        
4|--------a-aa-a-a-g-g----a-|
        
5|---------d----d-------c---|
4|aa-a-g-a---ag---a-g-f---a-|
        
5|-----------c--------------|
4|g-f-d-ef-a----------------|
        
4|--fdfgGgfdGgfdfg--------G-|
        
5|-c-------------c--C-------|
4|a--aGgfdef-g-G------G-Ggfg|
        
4|--------------f-e---d---e-|
3|--------f-g-a-------------|
        
4|--f---g---e---a-------aGgF|
        
4|feDdC-------D-------------|
        
4|--fdfgGgfdGgfdeg--------G-|
        
5|--c-------------c-C-------|
4|a---aGgfdef-g-a-----G-Ggfg|
        
4|------------f-e---d---e---|
3|------f-g-a---------------|
        
4|f---g---e---a-------aGgFfe|
        
4|DdC-------D---------------|
3|--------------------b-----|
        
4|------f---e-------d-------|
        
4|f-------------------------|
        
4|------------------f---e---|
3|------b-------------------|
        
4|----d-----------d---------|
        
3|----------------------b---|
        
4|--------f---e-------d-----|
        
4|--f-----------------------|
        
4|--------------------f---e-|
3|--------b-----------------|
        
4|------d-------d-----------|
        
5|----d---------------d-----|
4|--dd--a--G-g-f-dfgdd--a--G|
        
5|----------d---------------|
4|-g-f-dfgCC--a--G-g-f-dfgcc|
        
5|d---------------d---------|
4|--a--G-g-f-dfgdd--a--G-g-f|
        
5|------d---------------d---|
4|-dfgdd--a--G-g-f-dfgCC--a-|
        
5|------------d-------------|
4|-G-g-f-dfgcc--a--G-g-f-dfg|`, 480)
