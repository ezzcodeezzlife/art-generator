/****
 * Hint Cloud Data
 */

var Facts = {

    funFacts: ['The first use of the term digital art was in the early 1980s when the pioneering digital artist Harold Cohen created AARON, a robotic machine designed to make large drawings on sheets of paper placed on the floor.', 
    'One of the earliest electronic works is \'Oscillon 40\' dating from 1952. The artist, Ben Laposky, used an oscilloscope to manipulate electronic waves that appeared on the small fluorescent screen.',
    'In the early 1960s, access to computers was limited and as a result, some of the first people to use computers creatively were computer scientists or mathematicians.',
    'In the early 1970s, the Slade School of Art in  London etablished what was later called the \'Experimental and Computing Department\'.',
    'Many artists who now work with computers incorporate this technology into their practice as just one tool amongst many that they may use interchangeably. Many no longer define themselves as practitioners of a specific media.'],

    emotions: ['light', 'peaceful', 'calm', 'serene', 'soothing', 'relaxed',
    'comforting', 'cosy', 'tranquil', 'quiet', 'delicate', 'subtle', 'mild', 'ethereal', 'elegant',
    'tender', 'soft', 'light', 'bright', 'vibrant', 'dynamic', 'spirited','vivid', 'lively', 'energetic', 
    'colorful','joyful', 'romantic', 'expressive', 'rich', 'ecstatic', 'energized', 'zestful',
    'passionate', 'hot', 'muted', 'bleak', 'funereal', 'somber', 'melancholic', 'mournful', 'gloomy',
    'dismal', 'sad', 'pale, washed-out','desaturated', 'grey', 'dull', 'dreary', 'depressing', 'weary', 'tired', 'dark', 
    'ominous', 'threatening','haunting', 'forbidding', 'gloomy', 'stormy', 'doom', 'apocalyptic','sinister', 'shadowy', 
    'ghostly', 'unnerving', 'harrowing', 'dreadful', 'frightful', 'shocking', 'terror', 'hideous', 'ghastly', 'terrifying'],

    structure_looks: ['swirling','organic','flowing','turbulent','distorted','uneven','lush','chaotic','monumental','rigorous',
    'imposing','geometric','ordered','angular','straight','rhythmic','composed','unified','harmonic','manmade','minimalist',
    'blocks','robust','defined','ornate','delicate','neat','precise','detailed','fine','elaborate','intricate','accurate',
    'meticulous','decorative','random','casual','spontaneous','uniform','offhand','experimental','improvisational','loose'],

    looks_techniques: [ 'kaleidoscopic', 'psychedelic', 'saturated', 'minimalist', 'vaporwave', 'neon', 'futuristic','post-apocalyptic','gothic','fantasy','cyberpunk',
    'cybernetic','sci-fi','steampunk','memphis','dieselpunk','industrial','afrofuturism','biopunk'],

    art_styles: ['cave paintings', 'ancient egyptian mural', 'byzantine','Renaissance','Baroque','Romanticism','Impressionism','Realism','Art Nouveau','Mannerism','Roccoco',
    'Neoclassicism','Symbolist','Art deco', 'Abstract', 'Bauhaus','Cubism', 'Fauvism', 'Dada', 'Expressionism', 'Constructivism', 'Surrealism', 'Abstract Expressionism',
    'Modernism', 'religious', 'Ottoman', 
    
    'Pablo Picasso', 'Salvador Dali', 'Keith Haring', 'Vincent van Gogh', 'Joan Miro', 'Francis Bacon','Tanguy','Claude Monet','Paul Cezanne','Auguste Renoir',
    'Félix Vallotton','Sandro Botticelli','Wassily Kandinsky'],


    //painting

    painting_types: ['crayon', 'child drawing', 'acrylic on canvas', 'watercolor','oil painting','coloured pencil', 'chinese watercolor','pastels',
    , 'airbrush','photocollage','vector art','digital art', 'pencil drawing','pencil sketch','woodcut','charcoal sketch','cartoon','animation', 'comic style','etching', 'mural',
    'blueprint', 'botanical illustration', 'anatomical illustration','map','scientific diagram','voroni diagram','pixel art'],

    painting_content: ['landscape of mars', 'portrait of judge', 'still life of fruit', 'orange elephant','old-fashioned greenhouse', 'vintage can of pickles', 
    'tower of Babel', 'secret human civilization inside a blooming flower', 'alien houseplant', 'electric sheep','bouquet of flowers', 'green family of dolphins', 
    'group of old friends with straw hats', 'godess of Love'],

    painting_setting: ['from a distance', 'during a sunset', 'in a poppy field at noon', 'in the French countryside', 'by the sea', 'during the last day on Earth', 
    'before the storm', 'in the poolclub', 'underwater', 'in a stadium', 'in the centre of the universe', 'in the middle of the ocean', 'in the middle of the desert', 'nowhere'],

    // sculpture
    sculpture_types: ['bronze','marble','terracota','jade', 'gold', 'silver','ice carving', 'plastic','fiberglass','plant','sand','butter', 'wood','glass','stone','metal',
    'ceramic', 'clay', 'wax', 'rubber', 'plaster', 'ivory', 'fabric'],
    
    sculpture_content: ['warriors awaiting the battle', 'cup of eternal life','t-rex with short legs and long arms'],

    sculpture_techniques: ['carved', 'modeled', 'molded', 'cast', 'wrought', 'welded', 'sewn', 'assembled', 'shaped', 'combined', 'kinetic'],

    sculpture_forms: ['lit from above', 'smooth texture', 'rough texture', 'large scale', 'miniature'],
    
    //photography

    photo_content: ['flying birds', 'wild animals', 'waterfalls', 'exterior of a family house', 'ministry of truth'],

    photo_setting: ['in the savanna', 'on a city square', 'in London', 'on a staircase'],

    camera_angles: ['extreme close-up', 'close-up', 'medium-shot', 'long-shot', 'wide-shot', 'overhead view', 'low angle', 'aerial view','tilted frame'],

    camera_settings: ['fast shutter speed', 'slow shutter speed', 'tilt shift photo', 'motion blur', 'telephoto lens',
    'deep depth of field', 'macro lens', 'panoramic', 'super-wide', 'fish-eye lens', 'kodachrome', 'polaroid','double exposure','daguerrotype','disposable camera',
    'CCTV', 'infrared','redscale','black and white'],

    lighting: ['golden hour', 'blue hour','midday','overcast','sunny day', 'rainy weather', 'warm lighting',
    'flash photography', 'studio lighting','colored lights']
}

var Prompts = {
    medium: 'The first decision every artist has to make is choosing a medium: what kind of artwork will it be? Each choice has its own specificities and will lead you down a slightly different creative path. Which of these is your calling?',
    painting: {
        //lookup holds the hint cloud variable for each stage ordered by stage id
        lookup: ['painting_types', 'painting_content', 'painting_setting','emotions', 'looks_techniques','art_styles'],
        //holds the guiding prompt for each dialogue stage named by stage id (such that it can be called as prompt[stage])
        1: ['Let’s get more specific. There are endless possibilities of what to do on a canvas. You might prefer the expressive colours of oil paint, or the gentler approach of pencil drawings. However, technical sketches and mosaics are not off the table! Each form has its magic and all of them are at your disposal. Now, which one will it be?'],
        2: ['Once we know how to approach the artwork, we can start filling it in. Think of things, characters - truly anything. Renaissance artworks are often full of people, abstract artworks are full of shapes and colors, and some can just be filled with emptiness. Go ahead, dream away:'],
        3: ['We know what we are focusing on, but what about everything all around. Where is this scene set? Is there even a setting? Maybe you are fine with what you’ve chosen. That is fine by me as well.'],
        4: ['Now that we know what is in the artwork, we also need to know how it will be depicted. Canvases will often radiate some energy - calming, energizing, they can even make you tired. This goes hand in hand with emotions. Artists will often want to communicate some sort of emotion through their art. This can come out softly - through colour tones and structure, but also explicitly - through dreadful expressions or symbolism. Think of emotions and energies you would want to convey through your artwork!'],
        5: ['We are getting close. There are endless styles in the world of art - these either help bring out the visuality of your scene, or better communicate the desired message. With my help, try to brainstorm styles, techinques and looks that will help shape your artwork into a truly personal masterpiece. Think about styles from history, but also also contemporary aesthetics. Perhaps you are a pioneer and don’t want to model yourself on any existing look, so this is not a must! '],
        6: ['Most of us will be driven by outer inspiration, which often take shape in a person or a group. Do you have an inspiration? Is there someone, or something that you admire and wish to follow in their footsteps? Perhaps you will want to finish you artwork off in the style of…']
    },
    sculpture: {
        lookup: ['sculpture_types', 'sculpture_content', 'sculpture_forms', 'emotions', 'structure_looks', 'art_styles'],
        1: ['sculpture stage 1 description'],
        2: ['sculpture stage 2 description'],
        3: ['sculpture stage 3 description'],
        4: ['sculpture stage 4 description'],
        5: ['sculpture stage 5 description'],
        6: ['sculpture stage 6 description']
    },
    photography: {
        lookup: ['photo_content', 'photo_setting', 'camera_angles', 'camera_settings', 'lighting', 'emotions'],
        1: ['photography stage 1 description'],
        2: ['photography stage 2 description'],
        3: ['photography stage 3 description'],
        4: ['photography stage 4 description'],
        5: ['photography stage 5 description'],
        6: ['photography stage 6 description']
    }
}

module.exports = { Facts, Prompts };

