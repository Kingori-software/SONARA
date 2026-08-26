// ============================================================
// SONORA — Complete Application Logic
// ============================================================

// ============================================================
// DATA: CATEGORIES
// ============================================================

const CATEGORIES = [
    {
        id: 'love',
        name: 'Love & Romance',
        emoji: '💜',
        color: '#a78bfa',
        desc: 'Songs about love, romance, attraction and relationships.'
    },
    {
        id: 'heartbreak',
        name: 'Heartbreak',
        emoji: '💙',
        color: '#60a5fa',
        desc: 'Songs about heartbreak, separation and emotional pain.'
    },
    {
        id: 'latenight',
        name: 'Late Night',
        emoji: '🌌',
        color: '#4f46e5',
        desc: 'Songs that fit quiet nights, deep thoughts and nighttime vibes.'
    },
    {
        id: 'chill',
        name: 'Chill & Vibes',
        emoji: '🩵',
        color: '#2dd4bf',
        desc: 'Relaxed, smooth and easy-listening songs.'
    },
    {
        id: 'hype',
        name: 'Hype & Energy',
        emoji: '❤️‍🔥',
        color: '#f87171',
        desc: 'High-energy songs for excitement, confidence and adrenaline.'
    },
    {
        id: 'happy',
        name: 'Happy & Feel-Good',
        emoji: '💛',
        color: '#fbbf24',
        desc: 'Positive, joyful and uplifting songs.'
    },
    {
        id: 'motivation',
        name: 'Motivation & Grind',
        emoji: '💚',
        color: '#34d399',
        desc: 'Songs about ambition, discipline, growth and chasing goals.'
    },
    {
        id: 'rap',
        name: 'Rap & Hip-Hop',
        emoji: '🖤',
        color: '#9ca3af',
        desc: 'Rap, hip-hop and lyrical tracks.'
    },
    {
        id: 'rnsoul',
        name: 'R&B & Soul',
        emoji: '🩷',
        color: '#f472b6',
        desc: 'Smooth R&B, soul and emotional vocal tracks.'
    },
    {
        id: 'afrobeat',
        name: 'Afrobeat & Afropop',
        emoji: '💚',
        color: '#059669',
        desc: 'Afrobeat, Afropop and African-inspired sounds.'
    },
    {
        id: 'worship',
        name: 'Worship & Spiritual',
        emoji: '🤍',
        color: '#e5e7eb',
        desc: 'Worship, gospel and spiritually themed songs.'
    },
    {
        id: 'deep',
        name: 'Deep & Thoughtful',
        emoji: '💭',
        color: '#6366f1',
        desc: 'Songs with meaningful lyrics, deep messages and introspective themes.'
    },
    {
        id: 'victory',
        name: 'Victory & Winning',
        emoji: '🏆',
        color: '#f59e0b',
        desc: 'Songs that create a feeling of achievement, success and triumph.'
    },
    {
        id: 'flirty',
        name: 'Flirty & Attraction',
        emoji: '🩷',
        color: '#ec4899',
        desc: 'Playful, charming and attraction-themed songs.'
    },
    {
        id: 'melancholy',
        name: 'Melancholy',
        emoji: '🌧️',
        color: '#94a3b8',
        desc: 'Calm, bittersweet and emotionally reflective songs.'
    },
    {
        id: 'nostalgia',
        name: 'Nostalgia & Classics',
        emoji: '🤎',
        color: '#a78a7a',
        desc: 'Older songs and tracks that create a nostalgic feeling.'
    },
    {
        id: 'peaceful',
        name: 'Peaceful & Relaxing',
        emoji: '🌿',
        color: '#6ee7b7',
        desc: 'Calm songs for relaxation, studying and peaceful moments.'
    },
    {
        id: 'ambition',
        name: 'Ambition',
        emoji: '🚀',
        color: '#fb923c',
        desc: 'Songs that inspire confidence, ambition and forward movement.'
    },
    {
        id: 'dance',
        name: 'Dance & Party',
        emoji: '💃',
        color: '#d946ef',
        desc: 'Songs made for dancing, parties and celebrations.'
    },
    {
        id: 'cinematic',
        name: 'Cinematic & Epic',
        emoji: '🎬',
        color: '#8b5cf6',
        desc: 'Dramatic, powerful and cinematic-feeling songs.'
    }
];

// ============================================================
// DATA: SONGS
// ============================================================

const SONG_POOL = [

    // LOVE
    {
        title: 'Perfect',
        artist: 'Ed Sheeran',
        genre: 'Pop / R&B',
        moods: ['💜 Love', '🌌 Late Night'],
        rating: 9.2,
        notes: 'A romantic song perfect for love and special moments.',
        categories: ['love', 'latenight'],
        dateAdded: '2025-02-10'
    },

    {
        title: 'Adore You',
        artist: 'Harry Styles',
        genre: 'Pop / Rock',
        moods: ['💜 Love', '💛 Happy'],
        rating: 8.3,
        notes: 'A sweet and uplifting love track.',
        categories: ['love', 'happy'],
        dateAdded: '2025-01-22'
    },

    {
        title: 'Golden Hour',
        artist: 'JVKE',
        genre: 'Pop / R&B',
        moods: ['💜 Love', '🌿 Peaceful'],
        rating: 8.5,
        notes: 'A beautiful atmospheric love song.',
        categories: ['love', 'peaceful'],
        dateAdded: '2025-03-01'
    },

    {
        title: 'Leave The Door Open',
        artist: 'Silk Sonic',
        genre: 'R&B / Soul',
        moods: ['💜 Love', '🩵 Chill'],
        rating: 8.7,
        notes: 'Smooth and timeless.',
        categories: ['love', 'chill', 'rnsoul'],
        dateAdded: '2024-12-15'
    },

    {
        title: 'Positions',
        artist: 'Ariana Grande',
        genre: 'Pop / R&B',
        moods: ['💜 Love', '🩵 Chill'],
        rating: 8.0,
        notes: 'Smooth and romantic.',
        categories: ['love', 'chill', 'rnsoul'],
        dateAdded: '2025-01-05'
    },

    // HEARTBREAK
    {
        title: 'Stay',
        artist: 'Rihanna ft. Mikky Ekko',
        genre: 'Pop / R&B',
        moods: ['💙 Heartbreak', '🌧️ Melancholy'],
        rating: 8.7,
        notes: 'Emotional and vulnerable.',
        categories: ['heartbreak', 'melancholy'],
        dateAdded: '2024-11-20'
    },

    {
        title: 'Before You Go',
        artist: 'Lewis Capaldi',
        genre: 'Pop / Ballad',
        moods: ['💙 Heartbreak', '🌧️ Melancholy'],
        rating: 8.9,
        notes: 'Powerful and emotional.',
        categories: ['heartbreak', 'melancholy'],
        dateAdded: '2025-01-30'
    },

    {
        title: 'drivers license',
        artist: 'Olivia Rodrigo',
        genre: 'Pop / Ballad',
        moods: ['💙 Heartbreak', '🌧️ Melancholy'],
        rating: 8.6,
        notes: 'A coming-of-age heartbreak track.',
        categories: ['heartbreak', 'melancholy'],
        dateAdded: '2024-12-01'
    },

    {
        title: 'Heartbreak Anniversary',
        artist: 'Giveon',
        genre: 'R&B / Soul',
        moods: ['💙 Heartbreak', '🌧️ Melancholy'],
        rating: 8.7,
        notes: 'Smooth and emotional.',
        categories: ['heartbreak', 'melancholy', 'rnsoul'],
        dateAdded: '2025-02-14'
    },

    {
        title: 'My Heart Will Go On',
        artist: 'Celine Dion',
        genre: 'Pop / Ballad',
        moods: ['💙 Heartbreak', '🎬 Cinematic'],
        rating: 9.1,
        notes: 'A timeless cinematic love theme.',
        categories: ['heartbreak', 'cinematic', 'nostalgia'],
        dateAdded: '2024-10-10'
    },

    // LATE NIGHT
    {
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        genre: 'Synthwave / Pop',
        moods: ['🌌 Late Night', '❤️‍🔥 Hype'],
        rating: 9.0,
        notes: 'Perfect for late-night drives.',
        categories: ['latenight', 'hype'],
        dateAdded: '2025-02-20'
    },

    {
        title: 'Redbone',
        artist: 'Childish Gambino',
        genre: 'R&B / Funk',
        moods: ['🩵 Chill', '🌌 Late Night'],
        rating: 8.9,
        notes: 'Smooth, funky and hypnotic.',
        categories: ['chill', 'latenight', 'rnsoul'],
        dateAdded: '2024-12-28'
    },

    {
        title: 'Nights',
        artist: 'Frank Ocean',
        genre: 'R&B / Experimental',
        moods: ['🌌 Late Night', '💭 Deep'],
        rating: 9.1,
        notes: 'A late-night journey through emotion.',
        categories: ['latenight', 'deep', 'rnsoul'],
        dateAdded: '2025-01-18'
    },

    {
        title: 'Starboy',
        artist: 'The Weeknd',
        genre: 'R&B / Pop',
        moods: ['🌌 Late Night', '❤️‍🔥 Hype'],
        rating: 8.7,
        notes: 'Sleek, dark and confident.',
        categories: ['latenight', 'hype', 'rnsoul'],
        dateAdded: '2025-03-10'
    },

    {
        title: 'Rocket Man',
        artist: 'Elton John',
        genre: 'Pop / Rock',
        moods: ['🌌 Late Night', '💭 Deep'],
        rating: 8.9,
        notes: 'A reflective classic.',
        categories: ['latenight', 'deep', 'nostalgia'],
        dateAdded: '2024-09-15'
    },

    // CHILL
    {
        title: 'Good Days',
        artist: 'SZA',
        genre: 'R&B / Soul',
        moods: ['🌿 Peaceful', '🩵 Chill'],
        rating: 8.8,
        notes: 'Soothing and reflective.',
        categories: ['peaceful', 'chill', 'rnsoul'],
        dateAdded: '2025-01-12'
    },

    {
        title: 'Essence',
        artist: 'Wizkid ft. Tems',
        genre: 'Afrobeat',
        moods: ['🩵 Chill', '💚 Afrobeat'],
        rating: 8.9,
        notes: 'A smooth Afrobeat anthem.',
        categories: ['afrobeat', 'chill'],
        dateAdded: '2024-11-05'
    },

    {
        title: 'Dreams',
        artist: 'Fleetwood Mac',
        genre: 'Rock / Pop',
        moods: ['🤎 Nostalgia', '🩵 Chill'],
        rating: 9.0,
        notes: 'Timeless and dreamy.',
        categories: ['nostalgia', 'chill'],
        dateAdded: '2024-08-20'
    },

    {
        title: 'Weightless',
        artist: 'Marconi Union',
        genre: 'Ambient',
        moods: ['🌿 Peaceful', '🩵 Chill'],
        rating: 8.8,
        notes: 'A calming ambient track.',
        categories: ['peaceful', 'chill'],
        dateAdded: '2025-02-02'
    },

    // HYPE
    {
        title: 'Sicko Mode',
        artist: 'Travis Scott',
        genre: 'Hip-Hop / Trap',
        moods: ['❤️‍🔥 Hype', '🖤 Rap'],
        rating: 8.6,
        notes: 'High-energy track.',
        categories: ['hype', 'rap'],
        dateAdded: '2024-12-12'
    },

    {
        title: 'The Box',
        artist: 'Roddy Ricch',
        genre: 'Hip-Hop / Trap',
        moods: ['🖤 Rap', '❤️‍🔥 Hype'],
        rating: 8.4,
        notes: 'Hard-hitting and catchy.',
        categories: ['rap', 'hype'],
        dateAdded: '2025-01-25'
    },

    {
        title: 'Industry Baby',
        artist: 'Lil Nas X ft. Jack Harlow',
        genre: 'Hip-Hop / Rap',
        moods: ['❤️‍🔥 Hype', '🏆 Victory'],
        rating: 8.1,
        notes: 'Confident and energetic.',
        categories: ['hype', 'victory', 'rap'],
        dateAdded: '2025-02-18'
    },

    // HAPPY
    {
        title: 'Levitating',
        artist: 'Dua Lipa',
        genre: 'Pop / Disco',
        moods: ['💛 Happy', '💃 Dance'],
        rating: 8.8,
        notes: 'Pure energy and joy.',
        categories: ['happy', 'dance', 'hype'],
        dateAdded: '2025-01-08'
    },

    {
        title: 'Uptown Funk',
        artist: 'Mark Ronson ft. Bruno Mars',
        genre: 'Funk / Pop',
        moods: ['💛 Happy', '💃 Dance'],
        rating: 8.7,
        notes: 'An instant party starter.',
        categories: ['happy', 'dance'],
        dateAdded: '2024-09-30'
    },

    {
        title: 'Watermelon Sugar',
        artist: 'Harry Styles',
        genre: 'Pop / Funk',
        moods: ['💛 Happy', '🩷 Flirty'],
        rating: 8.3,
        notes: 'Warm and fun.',
        categories: ['happy', 'flirty'],
        dateAdded: '2025-02-28'
    },

    // MOTIVATION
    {
        title: 'Lose Yourself',
        artist: 'Eminem',
        genre: 'Hip-Hop',
        moods: ['🚀 Ambition', '💚 Motivation'],
        rating: 9.5,
        notes: 'A motivational classic.',
        categories: ['motivation', 'ambition', 'rap'],
        dateAdded: '2024-11-28'
    },

    {
        title: 'Fight Song',
        artist: 'Rachel Platten',
        genre: 'Pop',
        moods: ['💚 Motivation', '🏆 Victory'],
        rating: 8.1,
        notes: 'A determined and uplifting track.',
        categories: ['motivation', 'victory'],
        dateAdded: '2025-01-15'
    },

    {
        title: 'Unstoppable',
        artist: 'Sia',
        genre: 'Pop',
        moods: ['💚 Motivation', '🚀 Ambition'],
        rating: 8.4,
        notes: 'An empowering anthem.',
        categories: ['motivation', 'ambition'],
        dateAdded: '2025-02-05'
    },

    {
        title: 'Stronger',
        artist: 'Kanye West',
        genre: 'Hip-Hop / Electronic',
        moods: ['💚 Motivation', '🏆 Victory'],
        rating: 8.7,
        notes: 'A classic motivation track.',
        categories: ['motivation', 'victory', 'rap'],
        dateAdded: '2024-12-20'
    },

    // RAP
    {
        title: 'Rap God',
        artist: 'Eminem',
        genre: 'Hip-Hop / Rap',
        moods: ['🖤 Rap', '🚀 Ambition'],
        rating: 9.2,
        notes: 'A technical rap showcase.',
        categories: ['rap', 'ambition'],
        dateAdded: '2024-10-18'
    },

    {
        title: 'No Role Modelz',
        artist: 'J. Cole',
        genre: 'Hip-Hop / Rap',
        moods: ['🖤 Rap', '💭 Deep'],
        rating: 8.9,
        notes: 'Introspective and thought-provoking.',
        categories: ['rap', 'deep'],
        dateAdded: '2025-01-28'
    },

    {
        title: "God's Plan",
        artist: 'Drake',
        genre: 'Hip-Hop / Rap',
        moods: ['🏆 Victory', '💛 Happy'],
        rating: 8.4,
        notes: 'An uplifting anthem.',
        categories: ['victory', 'happy', 'rap'],
        dateAdded: '2024-09-12'
    },

    {
        title: 'Alright',
        artist: 'Kendrick Lamar',
        genre: 'Hip-Hop / Rap',
        moods: ['💭 Deep', '🏆 Victory'],
        rating: 9.3,
        notes: 'A powerful anthem of resilience.',
        categories: ['deep', 'victory', 'rap'],
        dateAdded: '2025-03-05'
    },

    // R&B
    {
        title: 'Kiss Me More',
        artist: 'Doja Cat ft. SZA',
        genre: 'R&B / Pop',
        moods: ['🩷 Flirty', '💜 Love'],
        rating: 8.3,
        notes: 'Playful and catchy.',
        categories: ['flirty', 'love', 'rnsoul'],
        dateAdded: '2025-02-12'
    },

    {
        title: 'Peaches',
        artist: 'Justin Bieber ft. Daniel Caesar, Giveon',
        genre: 'R&B / Pop',
        moods: ['💜 Love', '🩵 Chill'],
        rating: 8.0,
        notes: 'A chill love song.',
        categories: ['love', 'chill', 'rnsoul'],
        dateAdded: '2024-11-02'
    },

    // AFROBEAT
    {
        title: 'Jerusalema',
        artist: 'Master KG ft. Nomcebo',
        genre: 'Afrobeat / Dance',
        moods: ['💛 Happy', '💃 Dance', '💚 Afrobeat'],
        rating: 8.4,
        notes: 'A global dance sensation.',
        categories: ['afrobeat', 'dance', 'happy'],
        dateAdded: '2024-08-08'
    },

    {
        title: 'Rover',
        artist: 'S1mba ft. DTG',
        genre: 'Afrobeat / Pop',
        moods: ['💛 Happy', '💚 Afrobeat'],
        rating: 7.9,
        notes: 'Upbeat and infectious.',
        categories: ['afrobeat', 'happy'],
        dateAdded: '2025-01-20'
    },

    // WORSHIP
    {
        title: 'Hallelujah',
        artist: 'Jeff Buckley',
        genre: 'Rock / Folk',
        moods: ['🤍 Worship', '🌧️ Melancholy'],
        rating: 9.3,
        notes: 'A beautiful and emotional cover.',
        categories: ['worship', 'melancholy', 'nostalgia'],
        dateAdded: '2024-11-11'
    },

    {
        title: 'Way Maker',
        artist: 'Sinach',
        genre: 'Gospel / Worship',
        moods: ['🤍 Worship', '🌿 Peaceful'],
        rating: 8.9,
        notes: 'A modern worship classic.',
        categories: ['worship', 'peaceful'],
        dateAdded: '2025-02-25'
    },

    {
        title: 'Rise Up',
        artist: 'Andra Day',
        genre: 'Soul / Gospel',
        moods: ['🚀 Ambition', '🤍 Worship'],
        rating: 9.0,
        notes: 'A powerful uplifting anthem.',
        categories: ['ambition', 'worship', 'rnsoul'],
        dateAdded: '2024-12-08'
    },

    // DEEP
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        genre: 'Rock',
        moods: ['🎬 Cinematic', '💭 Deep'],
        rating: 9.8,
        notes: 'A legendary musical masterpiece.',
        categories: ['cinematic', 'deep', 'nostalgia'],
        dateAdded: '2024-07-20'
    },

    {
        title: 'Circle of Life',
        artist: 'Elton John',
        genre: 'Pop / Cinematic',
        moods: ['🎬 Cinematic', '💭 Deep'],
        rating: 9.0,
        notes: 'Epic and meaningful.',
        categories: ['cinematic', 'deep', 'nostalgia'],
        dateAdded: '2024-06-15'
    },

    // VICTORY
    {
        title: 'Congratulations',
        artist: 'Post Malone ft. Quavo',
        genre: 'Hip-Hop / Pop',
        moods: ['🏆 Victory', '🚀 Ambition'],
        rating: 8.5,
        notes: 'Celebrating success and hustle.',
        categories: ['victory', 'ambition', 'rap'],
        dateAdded: '2025-01-02'
    },

    {
        title: 'Hall of Fame',
        artist: 'The Script ft. will.i.am',
        genre: 'Pop / Rock',
        moods: ['🏆 Victory', '🚀 Ambition'],
        rating: 8.6,
        notes: 'An anthem for achievers.',
        categories: ['victory', 'ambition'],
        dateAdded: '2024-10-25'
    },

    {
        title: 'Run This Town',
        artist: 'Jay-Z ft. Rihanna, Kanye West',
        genre: 'Hip-Hop / Rap',
        moods: ['🏆 Victory', '❤️‍🔥 Hype'],
        rating: 8.6,
        notes: 'A bold and powerful anthem.',
        categories: ['victory', 'hype', 'rap'],
        dateAdded: '2024-09-05'
    },

    // FLIRTY
    {
        title: 'Montero',
        artist: 'Lil Nas X',
        genre: 'Pop / Rap',
        moods: ['🩷 Flirty', '❤️‍🔥 Hype'],
        rating: 8.2,
        notes: 'Bold and confident.',
        categories: ['flirty', 'hype', 'rap'],
        dateAdded: '2025-02-08'
    },

    // AMBITION
    {
        title: 'Counting Stars',
        artist: 'OneRepublic',
        genre: 'Pop / Rock',
        moods: ['🚀 Ambition', '💛 Happy'],
        rating: 8.2,
        notes: 'An upbeat track about chasing dreams.',
        categories: ['ambition', 'happy'],
        dateAdded: '2024-11-15'
    },

    // DANCE
    {
        title: 'The Business',
        artist: 'Tiësto',
        genre: 'Dance / Electronic',
        moods: ['💃 Dance', '❤️‍🔥 Hype'],
        rating: 7.9,
        notes: 'High-energy dance track.',
        categories: ['dance', 'hype'],
        dateAdded: '2025-01-10'
    },

    // CINEMATIC
    {
        title: 'Baba Yetu',
        artist: 'Christopher Tin',
        genre: 'Cinematic / Choral',
        moods: ['🎬 Cinematic', '🤍 Worship'],
        rating: 9.1,
        notes: 'Epic and spiritually moving.',
        categories: ['cinematic', 'worship'],
        dateAdded: '2024-12-18'
    }
];

// ============================================================
// BUILD CATEGORY MAP
// ============================================================

const categorySongMap = {};

CATEGORIES.forEach(category => {
    categorySongMap[category.id] = [];
});

SONG_POOL.forEach(song => {
    song.categories.forEach(categoryId => {
        if (categorySongMap[categoryId]) {
            categorySongMap[categoryId].push(song);
        }
    });
});

// ============================================================
// STATE
// ============================================================

let favorites = [];

try {
    favorites = JSON.parse(
        localStorage.getItem('sonora_favorites') || '[]'
    );

    if (!Array.isArray(favorites)) {
        favorites = [];
    }
} catch (error) {
    favorites = [];
}

let currentView = 'home';
let currentCategoryId = null;
let currentSort = 'rating';
let searchQuery = '';
let selectedSong = null;

// ===========