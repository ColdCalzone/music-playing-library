def song_to_melody(song: str, tempo: number):
    global line_length, newlines, pos, offset, mode, note_count, melody
    melodies: List[str] = []
    letters: List[str] = []
    # ???? wtheck am i working with here???
    while song.index_of("|") != -1:
        song = song.replace("|", "")
    while song.index_of(" ") != -1:
        song = song.replace(" ", "")
    line_length = song.index_of("\n")
    for i in song:
        if i == "\n":
            newlines += 1
            if newlines == 2:
                pos += line_length
                newlines = 0
            offset = 0
            continue
        if i == "" + str(int(i)):
            mode = int(i)
            if newlines == 1:
                newlines = 0
                offset = 0
        else:
            # It seems like some completely normal methods are missing??? have to do this utter crap.
            letter = i
            if letter != "-":
                if i.to_lower_case() != i:
                    letter = "" + letter + "#"
                letter = "" + letter + "" + ("" + str(mode))
            if letters[pos + offset] == None or letters[pos + offset] == "-":
                letters[pos + offset] = letter
            offset += 1
    note_count = 1
    for x in letters:
        melody = "" + melody + x + " "
        note_count += 1
        if note_count == 8:
            note_count = 0
            melodies.append(melody)
            melody = ""
    for lets_go in melodies:
        music.play_melody(lets_go, tempo)
melody = ""
note_count = 0
mode = 0
offset = 0
pos = 0
newlines = 0
line_length = 0
song_to_melody("""
        5|--d---------------d-------|
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
        4|-G-g-f-dfgcc--a--G-g-f-dfg|
    """,
    480)