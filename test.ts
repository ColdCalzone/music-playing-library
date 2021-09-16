// tests go here; this will not be compiled when this package is used as an extension.
song.song_to_melody(
    `RH:5|--d---------------d-------|
RH:4|dd--a--G-g-f-dfgcc--a--G-g|

RH:5|--------d---------------d-|
RH:4|-f-dfg----a--G-g-f-dfg----|
RH:3|------bb--------------AA--|

RH:5|--------------d-----------|
RH:4|a--G-g-f-dfgdd--a--G-g-f-d|
LH:3|------------d-d-dd-d-d-ddd|

RH:5|----d---------------d-----|
RH:4|fgcc--a--G-g-f-dfg----a--G|
RH:3|------------------bb------|
LH:3|d-c-c-cc-c-c-cccc---------|
LH:2|------------------b-b-bb-b|

RH:5|----------d-------------dd|
RH:4|-g-f-dfg----a--G-g-f-dfgdd|
RH:3|--------AA----------------|
LH:3|---------------c-c-cccc---|
LH:2|-b-bbbb-A-A-AA----------d-|

RH:6|d---------------d---------|
RH:5|d-a--G-g-f-dfgccd-a--G-g-f|
RH:4|--a--G-g-f-dfgcc--a--G-g-f|
LH:3|d---d---d---d---c---c---c-|
LH:2|--dd-d-d-ddd--c---cc-c-c-c|

RH:6|------d---------------d---|
RH:5|-dfg--d-a--G-g-f-dfg--d-a-|
RH:4|-dfgbb--a--G-g-f-dfgAA--a-|
RH:3|----bb--------------AA----|
LH:3|--c-----------------------|
LH:2|cc----b---b---b---b---A---|
LH:1|----b---bb-b-b-bbb--A---AA|

RH:6|------------d-------------|
RH:5|-G-g-f-dfgddd-a--G-g-f-dfg|
RH:4|-G-g-f-dfgdd--a--G-g-f-dfg|
LH:3|----c---c---d---d---d---d-|
LH:2|Ac-c-ccc--d---dd-d-d-ddd--|

RH:6|--d---------------d-------|
RH:5|ccd-a--G-g-f-dfg--d-a--G-g|
RH:4|cc--a--G-g-f-dfgbb--a--G-g|
RH:3|----------------bb--------|
LH:3|--c---c---c---c-----------|
LH:2|c---cc-c-c-ccc----b---b---|
LH:1|----------------b---bb-b-b|

RH:6|--------d-----------------|
RH:5|-f-dfg--d-a--G-g-f-dfgf-ff|
RH:4|-f-dfgAA--a--G-g-f-dfg----|
RH:3|------AA------------------|
LH:3|----------------c---c---d-|
LH:2|b---b---A---Ac-c-ccc--d---|
LH:1|-bbb--A---AA--------------|

RH:5|---------------------gg---|
RH:5|-f-f-d-d----f-ff-g-G-Gfdfg|
LH:3|--d---d---d---c---c---c---|
LH:2|dd-d-d-ddd--c---cc-c-c-ccc|

RH:6|-------------c----d-d-d-dc|
RH:5|--f-ff-g-G-a---a-------a--|
LH:3|c-------------------------|
LH:2|----b---b---b---b---A---Ac|
LH:1|--b---bb-b-b-bbb--A---AA--|

RH:6|----g---------------------|
RH:5|--------f-aa-f-a-d-d----f-|
RH:5|--------a-ff-a-f-g-g----a-|
LH:3|--c---c---d---d---d---d---|
LH:2|-c-ccc--dd--dd-d-g-fddfgcc|
LH:2|------------a--G-d-d------|

RH:6|---------d----d-------c---|
RH:5|af-f-g-a---dc---a-f-------|
RH:5|fa-a-d-f-e-ag-bgdegdfd-dgd|
RH:4|--------------------b---b-|
LH:3|d---d---d---d---d---d---d-|
LH:2|--ac-c-c-ccdfg----a--G-g-f|
LH:2|--c--G-g-f----------------|
LH:1|--------------bb--bb-b-b-b|

RH:6|-----------c--------------|
RH:5|---------d----------------|
RH:5|f-e---cd-f-e--------------|
RH:4|bgbgA--A------------------|
LH:3|--d---d---d---d---d-------|
LH:2|-dfg----a--c-g-fcdfg--A---|
LH:2|-----------G-c-c----------|
LH:1|b---AA--AA----------A---AA|

RH:5|--d-fefgf-Gdf-e-----------|
RH:5|--fddgGeddgfd-g--------G-a|
RH:4|---A-----A----------------|
LH:3|------------c---c---c---c-|
LH:2|A---A---A-c---cc-c-c-ccc--|
LH:1|-A-A-AAA------------------|

RH:6|c-------------c-C---------|
RH:5|--aGgfdef-g-a-----G-Ggfg--|
LH:3|--d---d---d---d---C---C---|
LH:2|d---dd-d-d-ddd--C---CC-D-D|

RH:5|------------d-c-----------|
RH:5|------------f-e---d---e---|
RH:4|------f-e-f-------a---g---|
RH:4|------d-g-a---------------|
LH:3|D---D-------------------c-|
LH:2|-DDD----A---A---A---A-c---|
LH:1|------A---AA-A-A-AAA------|

RH:5|----g-------a-------------|
RH:5|f---c---e---d-------aGgFfe|
RH:4|a-------a-----------------|
LH:3|--c---c---c---d---d---d---|
LH:2|cc-c-c-ccc--d---dd-d-d-ddd|

RH:5|DdC-------D---------------|
RH:4|--G-------A---------------|
LH:3|d---C---C---D---D---------|
LH:2|--C---CC-D-D-DDD----A---A-|
LH:1|------------------A---AA-A|

RH:6|------------------------c-|
RH:5|d-fefgf-gdd-g-------------|
RH:5|fddgGeddGff-e--------G-a--|
RH:4|-A-----A------------------|
LH:3|----------c---c---c---c---|
LH:2|--A---A-c---cc-c-c-ccc--d-|
LH:1|-A-AAA--------------------|

RH:6|------------c-C-----------|
RH:5|aGgfdef-g-a-----G-Ggfg----|
LH:3|d---d---d---d---C---C---D-|
LH:2|--dd-d-d-ddd--C---CC-D-D-D|

RH:5|----------f-e-------------|
RH:5|----------d-c---d---e---f-|
RH:4|----f-e-a-------a---g---a-|
RH:4|----d-g-f-----------------|
LH:3|--D-------------------c---|
LH:2|DD----A---A---A---A-c---cc|
LH:1|----A---AA-A-A-AAA--------|

RH:5|--g-------a---------------|
RH:5|--c---e---d-------aGgFfeDd|
RH:4|------a-------------------|
LH:3|c---c---c---d---d---d---d-|
LH:2|-c-c-ccc--d---dd-d-d-ddd--|

RH:5|C-------D-----------------|
RH:4|G-------A-----------------|
RH:3|----------------A---------|
LH:3|--C---C---D---D-----------|
LH:2|C---CC-D-D-DDD------------|
LH:1|----------------A-A-AA-A-A|

RH:4|--f---e-------d-------f---|
LH:2|------c-c-cc-c-c-cccc-----|
LH:1|-AAAA-----------------b-b-|

LH:1|bb-b-b-bbbb-b-b-bb-b-b-bbb|

RH:4|--------------f---e-------|
RH:3|--A-----------------------|
LH:2|------------------c-c-cc-c|
LH:1|b-A-A-AA-A-A-AAAA---------|

RH:4|d-------d-------dc--------|
RH:4|-----------------C--------|
RH:3|------------------baGFfed-|
RH:3|-------------------A-g-D--|
LH:2|-c-cccc-d-d-dd-d-d-dddd-d-|

RH:4|----------------d---------|
RH:3|--------------dd--a--G-g-f|
RH:3|--------------A-----------|
LH:2|d-dd-d-d-dddd-------------|
LH:1|--------------A-A-AA-A-A-A|

RH:4|f---e-d-----d-------f-d---|
RH:3|-dfgcc--a--G-g-f-dfg----a-|
RH:2|--------------------bb----|
LH:2|----c-c-cc-c-c-cccc-------|
LH:1|AAA-----------------b-b-bb|

RH:4|------------fdg-fcdc-----c|
RH:4|------------d-------------|
RH:3|-G-g-f-dfg-g--a--G-g-f-gfg|
RH:3|---------------------a-da-|
RH:2|----------b---------------|
LH:1|-b-b-bbbb-b-b-bb-b-b-bbbb-|

RH:4|--d---------f---e-d-----d-|
RH:3|Ad--a--G-g-f-dfgcc--a--G-g|
RH:3|d-------------------------|
LH:2|----------------c-c-cc-c-c|
LH:1|A-A-AA-A-A-AAAA-----------|

RH:4|------d-f-e--c-e-d---c--d-|
RH:4|--------d---------------f-|
RH:3|-f-dfgdd--a--G-g-f-dfgdd--|
RH:3|-------------------ga-----|
LH:2|-cccc-d-d-dd-d-d-dddd-d-d-|

RH:4|e--c-e-d---c--------------|
RH:3|a--G-g-f-gfgA-A--f-A-f----|
RH:3|---------da-f-f--A-f-A----|
RH:2|----------------A------AAA|
LH:2|dd-d-d-dddd---A---A---A---|
LH:1|------------A---AA-A-A-AAA|

RH:4|--c-c--c-c-c----c-d-d--d-C|
RH:3|A-g-g-cg-g-g-cccg-a-a-da-G|
RH:3|f-------------------------|
LH:3|----c---c---c---c---d---d-|
LH:2|A-c---cc-c-c-ccc--d---dd-C|

RH:4|-C----C-c-c--c------------|
RH:3|-G-CCCG-g-g-cg-b-b----F-A-|
RH:3|---------------F-F----b-f-|
RH:2|-------------------bbb----|
LH:3|--C---C---c---c-----------|
LH:2|-C-CCC--c---cc----b---b---|
LH:1|---------------b-b-bbb--A-|

RH:4|--------------c-c--c-c-c--|
RH:3|A--f-f-A----f-g-g-cg-g-g-c|
RH:3|f--A-A-f----A-------------|
RH:2|--A------AAA--------------|
LH:3|----------------c---c---c-|
LH:2|A---A---A---A-c---cc-c-c-c|
LH:1|--AA-A-A-AAA--------------|

RH:4|--c-d-d--d-d-d----d-d-d--d|
RH:3|ccg-a-a-da-a-a-ddda-a-a-da|
LH:3|--c---d---d---d---d---d---|
LH:2|cc--d---dd-d-d-ddd--d---dd|

RH:4|-d-d----d-----------------|
RH:3|-a-a-ddda-f-f--f-f-A----A-|
RH:3|----------A-A--A-A-f----f-|
RH:2|--------------A------AAA--|
LH:3|d---d---d-----------------|
LH:2|-d-d-ddd----A---A---A---A-|
LH:1|----------A---AA-A-A-AAA--|

RH:4|c-c--c-c-c----c-d-d--d-C-C|
RH:3|g-g-cg-g-g-cccg-a-a-da-G-G|
LH:3|--c---c---c---c---d---d---|
LH:2|c---cc-c-c-ccc--d---dd-C-C|

RH:4|----C-c-c--c--------------|
RH:3|-CCCG-g-g-cg-b-b----F-A-A-|
RH:3|-------------F-F----b-f-f-|
RH:2|-----------------bbb------|
LH:3|C---C---c---c-------------|
LH:2|-CCC--c---cc----b---b---A-|
LH:1|-------------b-b-bbb--A---|

RH:4|------------c-c--c-c-c----|
RH:3|-f-f-A----f-g-g-cg-g-g-ccc|
RH:3|-A-A-f----A---------------|
RH:2|A------AAA----------------|
LH:3|--------------c---c---c---|
LH:2|--A---A---A-c---cc-c-c-ccc|
LH:1|AA-A-A-AAA----------------|

RH:4|c-d-d--d-d-d----d-d-d--d-d|
RH:3|g-dd--a--G-g-f-dfgdd--a--G|
LH:3|c---d---d---d---d---d---d-|
LH:2|--d---dd-d-d-ddd--d---dd-d|

RH:5|----------d---------------|
RH:4|-d----d-----a--G-g-f-dfgcc|
RH:3|-g-f-dfgAA----------------|
LH:3|--d---d-------------------|
LH:2|-d-ddd--------------------|

RH:5|d---------------d---------|
RH:4|--a--G-g-f-dfgdd--a--G-g-f|

RH:5|------d---------------d---|
RH:4|-dfgdd--a--G-g-f-dfg----a-|
RH:3|--------------------AA----|

RH:5|------------d-------------|
RH:4|-G-g-f-dfgcc--a--G-g-f-dfg|

RH:5|--d---------------d-------|
RH:4|dd--a--G-g-f-dfgcc--a--G-g|

RH:5|--------d---------------d-|
RH:4|-f-dfg----a--G-g-f-dfg----|
RH:3|------bb--------------AA--|

RH:4|a--G-g-f-dfg--------------|`, 480)