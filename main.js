// use qwerty cause why not
const CHARACTER_ARRAY = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const WORD_ARRAY = ['abhor', 'abide', 'abler', 'abode', 'about', 'above', 'abuse', 'ached', 'aches', 'acids', 'acorn', 'acres', 'acrid', 'acted', 'actor', 'acute', 'adept', 'adieu', 'admit', 'adobe', 'adopt', 'adore', 'adorn', 'adult', 'aegis', 'aeons', 'afire', 'after', 'agent', 'agile', 'aglow', 'agony', 'aides', 'ailed', 'aimed', 'aired', 'aisle', 'album', 'alder', 'alert', 'alien', 'alike', 'alive', 'aloes', 'aloft', 'alone', 'along', 'aloud', 'alter', 'altos', 'amber', 'amble', 'amend', 'amigo', 'amity', 'among', 'amour', 'ample', 'amply', 'amuse', 'angel', 'anger', 'angle', 'angry', 'angst', 'anime', 'ankle', 'antes', 'antic', 'anvil', 'aping', 'apron', 'aptly', 'argue', 'arise', 'armed', 'arose', 'arson', 'ashen', 'aside', 'asked', 'askew', 'aspen', 'aster', 'astir', 'atoms', 'atone', 'audio', 'audit', 'auger', 'aught', 'aunts', 'autos', 'avers', 'avert', 'avoid', 'avows', 'awful', 'awoke', 'axiom', 'axles', 'azure', 'backs', 'bacon', 'badge', 'badly', 'baits', 'baize', 'baked', 'baker', 'bales', 'balmy', 'bands', 'bandy', 'bangs', 'banjo', 'banks', 'bards', 'bared', 'barge', 'barks', 'barns', 'baron', 'based', 'baser', 'basic', 'basil', 'basin', 'baste', 'batch', 'bated', 'bathe', 'baths', 'baton', 'bayou', 'beach', 'beads', 'beady', 'beaks', 'beams', 'beans', 'beard', 'bears', 'beast', 'beaux', 'befit', 'began', 'begat', 'begin', 'begot', 'begun', 'being', 'below', 'belts', 'bench', 'bends', 'bergs', 'berth', 'beryl', 'besom', 'bides', 'bight', 'bigot', 'bilge', 'binds', 'biped', 'birch', 'birds', 'birth', 'bison', 'bitch', 'bites', 'black', 'blade', 'blame', 'bland', 'blank', 'blare', 'blast', 'blaze', 'bleak', 'bleat', 'blend', 'blent', 'blest', 'blind', 'blink', 'block', 'blocs', 'blond', 'blots', 'blown', 'blows', 'bluer', 'blues', 'blunt', 'blurt', 'blush', 'board', 'boars', 'boast', 'boats', 'bodes', 'bogus', 'boils', 'boles', 'bolts', 'bonds', 'boned', 'bones', 'bonus', 'borax', 'bored', 'bores', 'borne', 'bough', 'bound', 'bouts', 'bowed', 'bowel', 'bower', 'bowls', 'boxed', 'boxer', 'boxes', 'brace', 'brags', 'braid', 'brain', 'brake', 'brand', 'brats', 'brave', 'bravo', 'brawl', 'brawn', 'bread', 'break', 'brick', 'bride', 'brief', 'brigs', 'brims', 'brine', 'bring', 'brink', 'briny', 'brisk', 'broad', 'broil', 'broke', 'broth', 'brown', 'brows', 'bruin', 'brunt', 'brush', 'brute', 'bucks', 'budge', 'bugle', 'build', 'built', 'bulge', 'bulks', 'bulky', 'bumps', 'bunch', 'bunks', 'buoys', 'burly', 'burns', 'burnt', 'burst', 'bushy', 'buxom', 'buyer', 'cabin', 'cable', 'cadet', 'cadre', 'caged', 'cages', 'cairn', 'caked', 'cakes', 'calms', 'calyx', 'camel', 'cameo', 'camps', 'candy', 'canes', 'canoe', 'canto', 'caper', 'capes', 'capon', 'cards', 'cared', 'cares', 'cargo', 'carol', 'carts', 'carve', 'cased', 'caste', 'cater', 'cause', 'caved', 'caves', 'cavil', 'cedar', 'cents', 'chafe', 'chain', 'chair', 'chalk', 'champ', 'chant', 'chaos', 'chaps', 'charm', 'chart', 'chary', 'chase', 'chasm', 'chats', 'cheap', 'cheat', 'chefs', 'chest', 'chide', 'chief', 'child', 'chime', 'china', 'chink', 'chins', 'chips', 'chirp', 'choir', 'choke', 'chops', 'chord', 'chose', 'chump', 'chums', 'chunk', 'churl', 'churn', 'chute', 'cider', 'cigar', 'cited', 'cites', 'civet', 'claim', 'clamp', 'clams', 'clang', 'clank', 'clans', 'claps', 'clash', 'clasp', 'claws', 'clean', 'clear', 'clefs', 'cleft', 'clerk', 'clews', 'climb', 'clime', 'cling', 'clink', 'clips', 'cloak', 'clods', 'clogs', 'close', 'cloth', 'cloud', 'clout', 'clove', 'clown', 'clubs', 'clues', 'clump', 'clung', 'coals', 'coast', 'coats', 'cobra', 'codes', 'coils', 'coins', 'colds', 'colts', 'combs', 'comer', 'comes', 'comet', 'cones', 'copra', 'copse', 'coral', 'cords', 'cores', 'corks', 'corns', 'corps', 'cotes', 'cough', 'could', 'count', 'coupe', 'coups', 'court', 'cover', 'coves', 'covet', 'covey', 'cowed', 'cower', 'cozen', 'crabs', 'craft', 'crags', 'cramp', 'crane', 'crank', 'crape', 'crash', 'crate', 'crave', 'crawl', 'craze', 'crazy', 'creak', 'cream', 'credo', 'crept', 'crest', 'crews', 'cribs', 'cried', 'cries', 'crime', 'crimp', 'crisp', 'croak', 'crone', 'crony', 'crops', 'croup', 'crowd', 'crown', 'crows', 'crude', 'cruel', 'crumb', 'crush', 'crust', 'crypt', 'cubes', 'cubit', 'cults', 'curds', 'cured', 'cures', 'curls', 'curly', 'curse', 'curst', 'curve', 'daily', 'dairy', 'daisy', 'dales', 'dames', 'damps', 'dance', 'dares', 'darts', 'dates', 'datum', 'daubs', 'daunt', 'dawns', 'deals', 'dealt', 'deans', 'dears', 'death', 'debar', 'debit', 'debts', 'debut', 'decay', 'decks', 'decoy', 'decry', 'deign', 'deity', 'delay', 'delta', 'demon', 'demur', 'dents', 'depot', 'depth', 'derby', 'devil', 'diary', 'dices', 'dicta', 'diets', 'dikes', 'dimes', 'dimly', 'diner', 'dines', 'dingy', 'dirge', 'dirty', 'ditch', 'divan', 'diver', 'dives', 'docks', 'doers', 'dogma', 'doing', 'domes', 'dotes', 'doubt', 'dough', 'doves', 'downs', 'downy', 'dowry', 'dozen', 'draft', 'drags', 'drain', 'drake', 'drams', 'drank', 'drape', 'drawl', 'drawn', 'draws', 'drays', 'dream', 'dregs', 'dries', 'drift', 'drily', 'drink', 'drips', 'drive', 'drone', 'drops', 'drove', 'drown', 'drugs', 'drums', 'drunk', 'ducal', 'ducat', 'duchy', 'ducks', 'ducts', 'duels', 'duets', 'dukes', 'dumps', 'dumpy', 'dunce', 'dunes', 'dupes', 'dusky', 'dusty', 'dwarf', 'dwelt', 'dying', 'dykes', 'earls', 'early', 'earns', 'earth', 'ebony', 'edict', 'edify', 'eight', 'elbow', 'elfin', 'email', 'emits', 'empty', 'enact', 'endow', 'enjoy', 'enrol', 'entry', 'envoy', 'epics', 'epoch', 'equal', 'equip', 'ethic', 'evils', 'exact', 'exalt', 'exist', 'exits', 'extol', 'extra', 'exult', 'eying', 'fable', 'faced', 'faces', 'facts', 'fades', 'fails', 'faint', 'fairs', 'fairy', 'faith', 'fakir', 'false', 'famed', 'fancy', 'fangs', 'farce', 'fared', 'fares', 'farms', 'fated', 'fates', 'fault', 'fauns', 'fawns', 'fears', 'feast', 'feats', 'feign', 'feint', 'felon', 'feral', 'ferns', 'fetch', 'fetid', 'fetus', 'feuds', 'fiche', 'field', 'fiend', 'fiery', 'fight', 'filch', 'filed', 'files', 'filet', 'films', 'filmy', 'filth', 'final', 'finch', 'finds', 'fined', 'finer', 'fines', 'fiord', 'fired', 'fires', 'firms', 'first', 'fishy', 'fitly', 'fives', 'fixed', 'fixer', 'fixes', 'fjord', 'flags', 'flair', 'flake', 'flaky', 'flame', 'flank', 'flaps', 'flare', 'flash', 'flask', 'flats', 'flaws', 'fleas', 'fleck', 'flesh', 'flick', 'flier', 'flies', 'fling', 'flint', 'flirt', 'flits', 'float', 'flock', 'floes', 'flora', 'flour', 'flout', 'flown', 'flows', 'flues', 'fluid', 'fluke', 'flume', 'flung', 'flush', 'flute', 'flyer', 'foams', 'foamy', 'focal', 'focus', 'foils', 'foist', 'folds', 'folks', 'foray', 'force', 'fords', 'forge', 'forks', 'forms', 'forte', 'forth', 'forts', 'forty', 'forum', 'found', 'fount', 'fours', 'fowls', 'foxes', 'foyer', 'frail', 'frame', 'franc', 'frank', 'fraud', 'freak', 'fresh', 'frets', 'fried', 'frisk', 'frock', 'frogs', 'frond', 'front', 'frost', 'froth', 'frown', 'froze', 'fruit', 'fudge', 'fuels', 'fumed', 'fumes', 'funds', 'fungi', 'furze', 'fused', 'gable', 'gaily', 'gains', 'gales', 'games', 'gamin', 'gamut', 'gaped', 'gapes', 'gates', 'gaudy', 'gaunt', 'gauze', 'gauzy', 'gavel', 'gawky', 'gayer', 'gazed', 'gazer', 'gazes', 'gears', 'gents', 'genus', 'germs', 'ghost', 'giant', 'gibes', 'gifts', 'gilds', 'gipsy', 'girds', 'girls', 'girth', 'given', 'gives', 'glade', 'gland', 'glare', 'glaze', 'gleam', 'glean', 'glens', 'glide', 'glint', 'gloat', 'globe', 'glory', 'glove', 'glows', 'glued', 'gnash', 'gnats', 'gnaws', 'gnome', 'goads', 'goals', 'goats', 'godly', 'gored', 'gorse', 'gourd', 'gouty', 'gowns', 'grabs', 'grace', 'grade', 'graft', 'grain', 'grams', 'grand', 'grant', 'grape', 'graph', 'grasp', 'grate', 'grave', 'gravy', 'graze', 'great', 'greys', 'grief', 'grime', 'grimy', 'grind', 'grins', 'gripe', 'grips', 'grist', 'groan', 'groin', 'grope', 'group', 'grove', 'growl', 'grown', 'grows', 'grubs', 'gruel', 'grunt', 'guano', 'guard', 'guest', 'guide', 'guild', 'guile', 'guilt', 'guise', 'gulch', 'gulfs', 'gusto', 'gusty', 'habit', 'hacks', 'hails', 'hairs', 'hairy', 'haled', 'halts', 'halve', 'hands', 'handy', 'hangs', 'hardy', 'harem', 'hares', 'harms', 'harps', 'harpy', 'harts', 'haste', 'hasty', 'hated', 'hater', 'hauls', 'haven', 'havoc', 'hawks', 'hazel', 'heads', 'heady', 'heals', 'heaps', 'heard', 'hears', 'heart', 'heats', 'heavy', 'heirs', 'helix', 'helms', 'helps', 'herbs', 'herds', 'heron', 'heros', 'hides', 'hilts', 'hinds', 'hinge', 'hints', 'hired', 'hires', 'hives', 'hoard', 'hoary', 'hoist', 'holds', 'holes', 'homes', 'honey', 'hoped', 'hopes', 'horde', 'horns', 'horse', 'hotel', 'hotly', 'hound', 'hours', 'house', 'hovel', 'hover', 'howls', 'hulks', 'human', 'humid', 'humps', 'hunts', 'hurls', 'hurts', 'husky', 'hydra', 'hyena', 'hymns', 'ideal', 'ideas', 'idler', 'idols', 'image', 'imbue', 'impel', 'imply', 'incur', 'index', 'inept', 'inert', 'infer', 'ingot', 'inlet', 'inter', 'inure', 'irate', 'irked', 'irons', 'irony', 'islet', 'items', 'ivory', 'jacks', 'jails', 'jaunt', 'jeans', 'jerks', 'jerky', 'joins', 'joint', 'joked', 'joker', 'jokes', 'joust', 'joyed', 'judge', 'juice', 'juicy', 'jumps', 'junks', 'junta', 'ketch', 'kinda', 'kinds', 'kings', 'kites', 'knave', 'knead', 'knelt', 'knife', 'knits', 'knobs', 'knots', 'knows', 'laced', 'laces', 'lacks', 'laden', 'lager', 'lairs', 'laity', 'lakes', 'lambs', 'lamed', 'lames', 'lamps', 'lance', 'lands', 'lanes', 'lanky', 'lapse', 'larch', 'large', 'largo', 'larks', 'latch', 'later', 'lathe', 'laths', 'laugh', 'lawns', 'layer', 'leads', 'leafy', 'leaks', 'leaky', 'leans', 'leaps', 'leapt', 'learn', 'leash', 'least', 'lemon', 'lends', 'liars', 'licks', 'liens', 'lifts', 'light', 'liked', 'liken', 'liker', 'likes', 'limbo', 'limbs', 'limes', 'lined', 'liner', 'lines', 'lingo', 'links', 'lions', 'lithe', 'lived', 'liver', 'lives', 'loads', 'loamy', 'loans', 'loath', 'lobes', 'locks', 'locus', 'lodge', 'lofty', 'loges', 'logic', 'login', 'loins', 'longs', 'lords', 'loser', 'lotus', 'louse', 'lousy', 'loved', 'lover', 'loves', 'lowed', 'lower', 'lucid', 'lucky', 'lumps', 'lumpy', 'lunar', 'lunch', 'lunge', 'lungs', 'lurch', 'lured', 'lures', 'lurid', 'lurks', 'lusty', 'lutes', 'lying', 'lymph', 'lynch', 'lyric', 'maces', 'madly', 'magic', 'maids', 'mails', 'mains', 'maize', 'major', 'maker', 'makes', 'males', 'manes', 'mange', 'mango', 'mangy', 'manly', 'manor', 'manse', 'maple', 'march', 'mares', 'marks', 'marsh', 'marts', 'mason', 'match', 'mated', 'mates', 'mauve', 'maybe', 'mayor', 'mazes', 'meals', 'mealy', 'means', 'meant', 'meats', 'medal', 'media', 'melon', 'melts', 'mends', 'menus', 'mercy', 'merit', 'metal', 'midst', 'miens', 'might', 'milch', 'miles', 'milky', 'mince', 'minds', 'mined', 'miner', 'mines', 'minor', 'mints', 'minus', 'mirth', 'miser', 'mites', 'mixed', 'mixes', 'moans', 'moats', 'mocks', 'model', 'modes', 'moist', 'molar', 'moles', 'money', 'monks', 'month', 'moped', 'moral', 'mores', 'motes', 'moths', 'motif', 'mound', 'mount', 'mourn', 'mouse', 'mouth', 'moved', 'mover', 'moves', 'movie', 'mowed', 'mower', 'mules', 'multi', 'munch', 'mural', 'murky', 'mused', 'music', 'musky', 'musty', 'muted', 'mutes', 'myths', 'nails', 'naive', 'naked', 'named', 'names', 'nasty', 'navel', 'naves', 'nears', 'necks', 'neigh', 'newly', 'nicer', 'niche', 'night', 'noble', 'nobly', 'noise', 'noisy', 'nomad', 'north', 'nosed', 'notch', 'noted', 'notes', 'novel', 'nudge', 'nurse', 'nymph', 'oaken', 'oakum', 'oaten', 'oaths', 'obeys', 'ocean', 'ochre', 'odium', 'often', 'oiled', 'olden', 'older', 'omens', 'omits', 'onset', 'opals', 'opens', 'opera', 'opine', 'opium', 'optic', 'orbit', 'organ', 'osier', 'other', 'ought', 'ounce', 'outer', 'ovals', 'ovary', 'ovens', 'overt', 'owing', 'owned', 'owner', 'oxide', 'paces', 'packs', 'padre', 'pages', 'pails', 'pains', 'paint', 'pairs', 'paled', 'paler', 'pales', 'palms', 'palmy', 'palsy', 'panel', 'panes', 'pangs', 'panic', 'pansy', 'pants', 'pared', 'parks', 'parse', 'parts', 'party', 'paste', 'pasty', 'patch', 'pates', 'paths', 'patio', 'pause', 'paved', 'pawed', 'pawns', 'payed', 'payer', 'peach', 'peaks', 'peals', 'pearl', 'pears', 'pecks', 'pedal', 'pelts', 'penal', 'penis', 'peons', 'perch', 'peril', 'pesky', 'petal', 'phase', 'phial', 'phone', 'piano', 'picks', 'piers', 'piety', 'pigmy', 'pikes', 'piled', 'piles', 'pilot', 'pinch', 'pined', 'pines', 'pinks', 'pinto', 'pints', 'pious', 'pique', 'pitch', 'pithy', 'pivot', 'place', 'plaid', 'plain', 'plait', 'plane', 'plank', 'plans', 'plant', 'plate', 'plays', 'plead', 'pleas', 'plied', 'plies', 'plots', 'pluck', 'plugs', 'plumb', 'plume', 'plums', 'plush', 'podia', 'poems', 'poesy', 'poets', 'point', 'poise', 'poked', 'poker', 'pokes', 'polar', 'poles', 'polka', 'ponds', 'porch', 'pored', 'pores', 'ports', 'posed', 'poser', 'pouch', 'pound', 'pours', 'power', 'prank', 'prate', 'prays', 'preys', 'price', 'prick', 'pride', 'pried', 'pries', 'prime', 'print', 'prism', 'privy', 'prize', 'probe', 'prone', 'prose', 'prosy', 'proud', 'prove', 'prowl', 'prows', 'proxy', 'prude', 'prune', 'psalm', 'pshaw', 'pudgy', 'pulse', 'punch', 'purge', 'purse', 'quack', 'quail', 'quake', 'qualm', 'quart', 'quasi', 'quays', 'query', 'quest', 'quick', 'quiet', 'quilt', 'quips', 'quire', 'quite', 'quits', 'quota', 'quote', 'quoth', 'rabid', 'raced', 'races', 'racks', 'radio', 'rafts', 'raged', 'rages', 'raids', 'rails', 'rains', 'rainy', 'raise', 'raked', 'rakes', 'ranch', 'range', 'ranks', 'rapid', 'rated', 'rates', 'ratio', 'raved', 'raven', 'raves', 'rayon', 'razed', 'reach', 'react', 'reads', 'ready', 'realm', 'reals', 'reams', 'reaps', 'rebus', 'rebut', 'refit', 'regal', 'reign', 'reins', 'relax', 'relay', 'relic', 'remit', 'rends', 'rents', 'repay', 'reply', 'resin', 'rheum', 'rhyme', 'ricks', 'rides', 'ridge', 'rifle', 'rifts', 'right', 'riled', 'rimes', 'rings', 'rinse', 'riots', 'ripen', 'risen', 'risky', 'rites', 'rival', 'riven', 'rivet', 'roads', 'roams', 'roast', 'robed', 'robes', 'robin', 'rocks', 'rocky', 'rogue', 'roles', 'roman', 'roped', 'ropes', 'rosin', 'rouge', 'rough', 'round', 'rouse', 'route', 'routs', 'roved', 'rowdy', 'rowed', 'royal', 'ruins', 'ruled', 'rules', 'runes', 'rungs', 'sable', 'sabre', 'sadly', 'safer', 'sahib', 'saint', 'saith', 'salon', 'salty', 'salve', 'salvo', 'sandy', 'saner', 'sated', 'satin', 'satyr', 'sauce', 'saucy', 'saved', 'sawed', 'scald', 'scale', 'scalp', 'scaly', 'scamp', 'scant', 'scare', 'scarf', 'scent', 'scion', 'scold', 'scope', 'score', 'scorn', 'scour', 'scout', 'scowl', 'scrap', 'screw', 'scrip', 'scrub', 'seamy', 'sedan', 'serum', 'shack', 'shade', 'shady', 'shaft', 'shake', 'shaky', 'shale', 'shalt', 'shame', 'shank', 'shape', 'share', 'shark', 'sharp', 'shave', 'shawl', 'sheaf', 'shear', 'sheik', 'shelf', 'shied', 'shift', 'shine', 'shiny', 'shire', 'shirk', 'shirt', 'shoal', 'shock', 'shone', 'shore', 'shorn', 'short', 'shout', 'shove', 'shown', 'showy', 'shred', 'shrew', 'shrub', 'shrug', 'sibyl', 'sight', 'sigma', 'silky', 'since', 'sinew', 'singe', 'siren', 'sixth', 'sixty', 'sized', 'skate', 'skein', 'skirt', 'slack', 'slain', 'slake', 'slang', 'slant', 'slate', 'slave', 'slept', 'slice', 'slick', 'slide', 'slime', 'slimy', 'sling', 'slink', 'slope', 'sloth', 'slump', 'slung', 'slunk', 'smack', 'smart', 'smear', 'smelt', 'smile', 'smirk', 'smite', 'smith', 'smock', 'smoke', 'smoky', 'smote', 'snack', 'snail', 'snake', 'snaky', 'snare', 'snarl', 'sneak', 'snipe', 'snore', 'snort', 'snout', 'snowy', 'soapy', 'sober', 'solar', 'solid', 'solve', 'sough', 'sound', 'south', 'sowed', 'sower', 'space', 'spade', 'spake', 'spank', 'spare', 'spark', 'spawn', 'speak', 'spear', 'speck', 'spelt', 'spend', 'spent', 'sperm', 'spice', 'spicy', 'spied', 'spike', 'spilt', 'spine', 'spiny', 'spire', 'spite', 'split', 'spoil', 'spoke', 'spore', 'sport', 'spout', 'spray', 'sprig', 'spunk', 'spurn', 'spurt', 'squad', 'squat', 'squaw', 'stack', 'stage', 'staid', 'stain', 'stair', 'stake', 'stale', 'stalk', 'stamp', 'stand', 'stank', 'stare', 'stark', 'stave', 'stead', 'steak', 'steal', 'steam', 'stern', 'stick', 'stile', 'sting', 'stink', 'stock', 'stoic', 'stole', 'stone', 'stony', 'store', 'stork', 'storm', 'story', 'stove', 'strap', 'straw', 'stray', 'strew', 'strip', 'stuck', 'study', 'stump', 'stung', 'style', 'suave', 'sugar', 'suing', 'suite', 'sulky', 'super', 'surge', 'surly', 'swain', 'swamp', 'sward', 'swarm', 'swear', 'sweat', 'swept', 'swift', 'swine', 'swing', 'swirl', 'sword', 'swore', 'sworn', 'swung', 'synod', 'syrup', 'table', 'tacks', 'tails', 'taken', 'takes', 'tales', 'talks', 'talon', 'tamed', 'tamer', 'tanks', 'taper', 'tapes', 'tardy', 'tares', 'tawny', 'taxed', 'taxes', 'teach', 'teams', 'tears', 'tempi', 'tempo', 'temps', 'tends', 'tenor', 'tepid', 'terms', 'thank', 'their', 'thick', 'thief', 'thine', 'thing', 'think', 'third', 'thong', 'thorn', 'those', 'threw', 'throb', 'throe', 'throw', 'thumb', 'thump', 'thyme', 'ticks', 'tidal', 'tides', 'tiers', 'tiger', 'tilde', 'tiled', 'tiles', 'timed', 'times', 'tinge', 'tipsy', 'tired', 'tires', 'toads', 'today', 'toils', 'token', 'tombs', 'tomes', 'toned', 'tones', 'tongs', 'tonic', 'topaz', 'topic', 'toque', 'torch', 'touch', 'tough', 'tours', 'towed', 'towel', 'tower', 'towns', 'toxic', 'toyed', 'trace', 'track', 'trade', 'trail', 'train', 'tramp', 'trams', 'traps', 'trash', 'trays', 'tread', 'trend', 'triad', 'trial', 'tribe', 'trice', 'trick', 'tried', 'tries', 'tripe', 'trips', 'truce', 'truck', 'truly', 'trump', 'trunk', 'tubes', 'tulip', 'tuned', 'tunes', 'tunic', 'turns', 'twain', 'twang', 'twice', 'twigs', 'twine', 'twins', 'twirl', 'tying', 'typed', 'types', 'ulcer', 'ultra', 'uncle', 'under', 'unfit', 'unite', 'units', 'unity', 'unsay', 'untie', 'until', 'upset', 'urban', 'urged', 'urges', 'urine', 'usage', 'usher', 'using', 'vague', 'vales', 'valet', 'valid', 'value', 'vanes', 'vapid', 'vault', 'vaunt', 'veils', 'veins', 'veldt', 'venal', 'venom', 'vents', 'verbs', 'vials', 'vicar', 'vices', 'video', 'views', 'viler', 'vines', 'viola', 'viper', 'virus', 'visor', 'vista', 'vital', 'vixen', 'vizor', 'vocal', 'vodka', 'vogue', 'voice', 'voile', 'volts', 'vomit', 'voted', 'voter', 'votes', 'vouch', 'vowed', 'vowel', 'vying', 'wafer', 'wafts', 'waged', 'wager', 'wages', 'wagon', 'waifs', 'wails', 'waist', 'waits', 'waive', 'waked', 'waken', 'wakes', 'walks', 'waltz', 'wands', 'waned', 'wanes', 'wants', 'wards', 'wares', 'warms', 'warns', 'warts', 'waste', 'watch', 'water', 'waved', 'waver', 'waves', 'waxed', 'waxen', 'waxes', 'wears', 'weary', 'weigh', 'weird', 'welch', 'wench', 'whack', 'whale', 'wharf', 'wheat', 'whelp', 'while', 'whims', 'whine', 'whips', 'whirl', 'whisk', 'whist', 'white', 'whole', 'whore', 'whose', 'wicks', 'widen', 'wider', 'width', 'wield', 'wight', 'wilds', 'wiles', 'wince', 'winch', 'winds', 'windy', 'wines', 'wings', 'winks', 'wiped', 'wipes', 'wired', 'wires', 'wiser', 'witch', 'wives', 'woman', 'women', 'words', 'wordy', 'works', 'world', 'worms', 'worse', 'worst', 'worth', 'would', 'wound', 'wrack', 'wraps', 'wrapt', 'wrath', 'wreak', 'wreck', 'wrest', 'wring', 'wrist', 'write', 'writs', 'wrong', 'wrote', 'wroth', 'yacht', 'yards', 'yarns', 'yawns', 'yearn', 'years', 'yeast', 'yelps', 'yield', 'yoked', 'yokes', 'yolks', 'young', 'yours', 'youth', 'zebra', 'zones'];
const MAX_HIT_COUNT = 5;

let targetWord = WORD_ARRAY[Math.trunc(Math.random()*WORD_ARRAY.length)]; // the word to be solved in hangman

let hitCount = 0;
let currentCharacters = [];

// FRONT-END FUNCTIONS ------------------------------------------------
function startFailedEnd(){
    let item0 = document.getElementById("0")
    let item1 = document.getElementById("1")
    let item2 = document.getElementById("2")
    let item3 = document.getElementById("3")
    let item4 = document.getElementById("4")

    item0.style.color = "rgb(207, 94, 94)";
    item0.style.opacity = 1;
    item1.style.color = "rgb(207, 94, 94)";
    item1.style.opacity = 1;
    item2.style.color = "rgb(207, 94, 94)";
    item2.style.opacity = 1;
    item3.style.color = "rgb(207, 94, 94)";
    item3.style.opacity = 1;
    item4.style.color = "rgb(207, 94, 94)";
    item4.style.opacity = 1;

    item0.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item1.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item2.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item3.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item4.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";

    item0.innerHTML = targetWord[0].toUpperCase()
    item1.innerHTML = targetWord[1].toUpperCase()
    item2.innerHTML = targetWord[2].toUpperCase()
    item3.innerHTML = targetWord[3].toUpperCase()
    item4.innerHTML = targetWord[4].toUpperCase()

    changeLetterColor("rgb(204, 193, 202)")
}

function startAccomplisedEnd(){
    let item0 = document.getElementById("0")
    let item1 = document.getElementById("1")
    let item2 = document.getElementById("2")
    let item3 = document.getElementById("3")
    let item4 = document.getElementById("4")

    item0.style.color = "rgb(104, 207, 135)";
    item0.style.opacity = 1;
    item1.style.color = "rgb(104, 207, 135)";
    item1.style.opacity = 1;
    item2.style.color = "rgb(104, 207, 135)";
    item2.style.opacity = 1;
    item3.style.color = "rgb(104, 207, 135)";
    item3.style.opacity = 1;
    item4.style.color = "rgb(104, 207, 135)";
    item4.style.opacity = 1;

    item0.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item1.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item2.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item3.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";
    item4.style.textShadow = "rgba(255,255,255,1) 0px 0px 38px";

    changeLetterColor("rgb(170, 204, 255)")
}

function changeLetterColor(color) {
    document.getElementById("a").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("b").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("c").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("d").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("e").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("f").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("g").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("h").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("i").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("j").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("k").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("l").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("m").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("n").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("o").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("p").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("q").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("r").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("s").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("t").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("u").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("v").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("w").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("x").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("y").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
    document.getElementById("z").style.backgroundImage = "linear-gradient("+color+", "+color+", rgba(0,0,0,0))"
}

function updateLetter(letter, success){
    let letterElement = document.getElementById(letter)
    // rgb(104, 207, 135)
    if (success){
        letterElement.style.backgroundImage = "linear-gradient(rgb(104, 207, 135), rgb(104, 207, 135), rgba(0,0,0,0))"
    } else {
        letterElement.style.backgroundImage = "linear-gradient(rgb(207, 94, 94), rgb(207, 94, 94), rgba(0,0,0,0))"
    }
}

function setBoardLetter(letter, index){
    let letterElement = document.getElementById(index);
    letterElement.innerHTML = letter.toUpperCase();
}

function updateHitVisual(){
    let visualHangman = document.getElementById("hangman")
    visualHangman.style.backgroundImage = "url(assets/images/"+hitCount+".png)"
}
// BACK-END FUNCTIONS -------------------------------------------------
// .indexOf(a) < 0  : item was not found
// .indexOf(a) >= 0 : item WAS found
// note: console logs and alerts are not semi-colon'ed. please fix later

function step(possibleKey){ // stepping function to progress the game
    let key = possibleKey

    if (CHARACTER_ARRAY.indexOf(key) < 0){
        alert("This isn't valid.")
        return;
    }

    if (key.length > 1){
        alert("This isn't valid.")
        return;
    }

    if (targetWord.indexOf(key) < 0){
        hitCount++;
        updateLetter(key, false);
        updateHitVisual();
        console.log(hitCount)
        console.log("COULD NOT FIND A HIT IN THE TARGETWORD! ALERTING.")
    } else if (targetWord.indexOf(key) >= 0 && currentCharacters.indexOf(key) < 0) {
        currentCharacters.push(key);
        updateLetter(key, true);
        setBoardLetter(key, targetWord.indexOf(key))
        console.log("FOUND A HIT IN THE TARGETWORD! ALERTING.")
    } else {
        hitCount++;
        console.log(hitCount);
        updateHitVisual();
        console.log("You've already got this correct answer. ALERTING.")
    };

    if (hitCount >= MAX_HIT_COUNT){
        console.log("GAME HAS COMPLETED. HITCOUNT HAS EXCEEDED MAX. ALERTING.")
        startFailedEnd()
        return; // to end the game
    };

    if (currentCharacters.length < targetWord.length) {
        console.log("CCA IS LESS THAN DA")
        return; // to continue the game
    };

    console.log("FINISH FINISH FINISSSSSHHHHHH!!!!!!")
    startAccomplisedEnd()
    return; // to end the game
}