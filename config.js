// Girlfriend's Day Interactive Gift Configuration
// Easily customize these values to make the experience uniquely yours!

export const CONFIG = {
  // Personal Details
  girlfriendName: "My Beautiful Girlfriend",
  yourName: "Your Favorite Person",
  relationshipDate: "August 11, 2024",
  firstDate: "The Best Day Ever",
  
  // Secret Love Lock Passcode (Case insensitive)
  secretCode: "Lov ya",
  secretHint: "Most used word 💕",

  // Gift 1: Love Letter
  loveLetter: {
    salutation: "Dear my favorite person,",
    bodyParagraphs: [
      "I don't think I say it enough, but having you in my life makes everything a little better.",
      "Your smile makes my bad days better. Your voice makes me feel calm. Your hugs feel like home.",
      "I hope you always remember how loved, appreciated, and special you are."
    ],
    closing: "Happy Girlfriend's Day, my love. ❤️"
  },

  // Gift 2: Virtual Teddy Bear Messages
  teddy: {
    greeting: "Hi cutie! 🥺💕",
    subtext: "I was sent here to give you unlimited hugs.",
    hugReactions: [
      "SQUEEEEZE! 🤗 Sending you the warmest hug ever!",
      "Holding you extra tight! 🧸💕 Never letting go!",
      "Bear hug attack! 🐾 You are officially snuggled!",
      "Warm bear hugs incoming! 🥹❤️ You deserve all the cuddles!"
    ]
  },

  // Gift 3: Never-Ending Flowers (Hidden Notes behind blooms)
  flowers: [
    { title: "Bloom of Joy 🌸", note: "You're beautiful 🌸" },
    { title: "Petal of Love 💕", note: "You're precious 💕" },
    { title: "Sweet Orchid 🌷", note: "You're my favorite person 🥹" },
    { title: "Forever Rose 🌹", note: "You're loved more than you know ❤️" },
    { title: "Golden Lily ✨", note: "Your smile lights up every room 🌟" },
    { title: "Pastel Daisy 🌼", note: "I fall for you a little more every day 💖" }
  ],

  // Gift 4: Chocolate Box Surprises
  chocolates: [
    { icon: "🍫", title: "Dark Chocolate Truffle", reward: "One Kiss 💋" },
    { icon: "🍓", title: "Strawberry Cream", reward: "One Romantic Date Night 🍷" },
    { icon: "🍪", title: "Cookie Crunch", reward: "One Extra Warm Cuddle 🧸" },
    { icon: "🍬", title: "Sweet Caramel", reward: "One Forehead Kiss 😚" },
    { icon: "🍩", title: "Glazed Donut", reward: "Unlimited Snacks Together 🍿" },
    { icon: "🧁", title: "Pink Cupcake", reward: "One 'You Choose Everything' Day 👑" }
  ],

  // Gift 5: Digital Coupon Book (Only 1 allowed to redeem!)
  coupons: [
    { title: "One Unlimited Hug", icon: "🎟️", code: "HUG-999" },
    { title: "One Movie Night", icon: "🎟️", code: "MOVIE-100" },
    { title: "One Surprise Date", icon: "🎟️", code: "DATE-777" },
    { title: "One Forehead Kiss", icon: "🎟️", code: "KISS-888" },
    { title: "One 'You Choose Everything' Day", icon: "🎟️", code: "QUEEN-1" },
    { title: "One Emergency Cuddle", icon: "🎟️", code: "SOS-CUDDLE" },
    { title: "One No-Questions-Asked Treat", icon: "🎟️", code: "TREAT-100" },
    { title: "Unlimited 'I Love You's", icon: "🎟️", code: "LOVE-INFINITY" }
  ],

  // Gift 6: Our Playlist & Love Song Player (Supports BTS & Justin Bieber!)
  playlist: [
    {
      id: "bst",
      title: "Blood, Sweat & Tears 🩸💦😭",
      artist: "BTS",
      quote: "My blood, sweat, and tears... my body, mind, and soul belong to you. ❤️",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=bts-style-track.mp3",
      albumArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "loveme",
      title: "Love Me 🎧",
      artist: "Justin Bieber",
      quote: "My heart beats for you! Love me, love me, say that you love me. ❤️",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73379.mp3?filename=pop-love-track.mp3",
      albumArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 25 BESTIE + FLIRTY QUIZ QUESTIONS
  quizQuestions: [
    {
      id: 1,
      question: "1. Who is more likely to cause trouble and then say, 'It wasn't me'? 👀",
      options: [
        { text: "Me 😇", isCorrect: true, response: "Obviously you 😂 My favorite little troublemaker." },
        { text: "You 😏", isCorrect: false, response: "Nice try! But we both know it's me 😌❤️" },
        { text: "Both of us 💀", isCorrect: false, response: "Honestly... you're not wrong. We're a dangerous combination 😭❤️" },
        { text: "We don't talk about that 😂", isCorrect: false, response: "Exactly... because you know I'm guilty 😏" }
      ]
    },
    {
      id: 2,
      question: "2. If we had one brain cell between us, who would have it? 🧠",
      options: [
        { text: "Me 😌", isCorrect: false, response: "You wish 😂 We both know what happened to that brain cell." },
        { text: "You 😭", isCorrect: false, response: "Big claim from someone who lost the brain cell too 😂❤️" },
        { text: "Neither 💀", isCorrect: true, response: "CORRECT! We lost it somewhere along the way 😭😂 But at least we lost it together." },
        { text: "We lost it long ago 😂", isCorrect: false, response: "Honestly... this is the most accurate answer 😂❤️" }
      ]
    },
    {
      id: 3,
      question: "3. Who is more likely to turn a normal conversation into complete nonsense? 😂",
      options: [
        { text: "Me 😌", isCorrect: true, response: "Yep, me 😂 But you secretly love my nonsense, don't you? 😏" },
        { text: "You 😂", isCorrect: false, response: "Excuse me?! You're the chaotic one here 😭❤️" },
        { text: "Both of us 💀", isCorrect: false, response: "Fair... but somehow your nonsense is my favorite 😌" },
        { text: "That's literally our friendship 😂", isCorrect: false, response: "Exactly! And I wouldn't change it ❤️" }
      ]
    },
    {
      id: 4,
      question: "4. If we suddenly had ₹10,000, what would we do first? 💸",
      options: [
        { text: "Go eat something amazing 🍕", isCorrect: false, response: "Food with you? I'd spend every rupee happily 😏🍕❤️" },
        { text: "Go shopping 🛍️", isCorrect: false, response: "Fine, but I'm choosing your outfit 😌👀" },
        { text: "Plan a trip ✈️", isCorrect: false, response: "As long as you're coming with me, I'm already packing 😏✈️" },
        { text: "Spend it on something completely unnecessary 😂", isCorrect: true, response: "Obviously 😂 Just like our friendship—completely unnecessary but somehow my favorite thing ❤️" }
      ]
    },
    {
      id: 5,
      question: "5. If we got lost together, who would actually save us? 🗺️",
      options: [
        { text: "Me 😎", isCorrect: false, response: "Cute confidence 😂 But let's be honest..." },
        { text: "You 🧠", isCorrect: true, response: "BIG BRAINS! 🧠😂 That's exactly why I keep you around 😌❤️" },
        { text: "Google Maps 📱", isCorrect: false, response: "Google Maps can help, but I'd rather be lost with you 👀❤️" },
        { text: "We're both doomed 💀", isCorrect: false, response: "At least we'd be lost together 😭❤️" }
      ]
    },
    {
      id: 6,
      question: "6. Who is more likely to say 'I'm fine' when they're definitely NOT fine? 😭",
      options: [
        { text: "Me 😇", isCorrect: false, response: "Hmm... suspicious answer 👀" },
        { text: "You 😂", isCorrect: false, response: "Nice try, but you're not getting away that easily 😏" },
        { text: "Both of us 😭", isCorrect: true, response: "Exactly 😂 Two idiots pretending everything is fine ❤️" },
        { text: "We just pretend everything is fine 😂", isCorrect: false, response: "Our emotional survival strategy 😂❤️" }
      ]
    },
    {
      id: 7,
      question: "7. What describes our friendship best? 💕",
      options: [
        { text: "50% roasting 🔥", isCorrect: false, response: "You roast me because you secretly like me 😏🔥" },
        { text: "30% nonsense 😂", isCorrect: false, response: "And somehow your nonsense is adorable 😂❤️" },
        { text: "20% actual good advice 🥹", isCorrect: false, response: "Look at us being responsible for approximately 20% of the time 😌" },
        { text: "Somehow it works ❤️", isCorrect: true, response: "Because we're the perfect kind of chaos for each other 😏❤️" }
      ]
    },
    {
      id: 8,
      question: "8. What's one thing you can always count on me for? 🫶",
      options: [
        { text: "Making you laugh 😂", isCorrect: true, response: "Obviously 😌 Making you smile is one of my favorite hobbies." },
        { text: "Listening to you 👂", isCorrect: true, response: "Always. You know you can tell me anything ❤️" },
        { text: "Being there for you ❤️", isCorrect: true, response: "Always. You're stuck with me 😏" },
        { text: "Joining your bad ideas 💀 (All of them ❤️)", isCorrect: true, response: "Okay... let's be honest, I'd probably make the bad idea worse 😂❤️" }
      ]
    },
    {
      id: 9,
      question: "9. What's our perfect day together? 🌸",
      options: [
        { text: "Food + movies 🍿", isCorrect: false, response: "Food, movies, and you? Sounds dangerously perfect 😏❤️" },
        { text: "Long drive + music 🚗🎶", isCorrect: false, response: "You, me, music, and nowhere to be... I'd take that 👀❤️" },
        { text: "Random adventure ✈️", isCorrect: false, response: "As long as I'm with you, I'm saying yes 😌💗" },
        { text: "Doing absolutely nothing together 🫶", isCorrect: true, response: "Honestly, doing nothing with you sounds better than doing everything with anyone else 🥹❤️" }
      ]
    },
    {
      id: 10,
      question: "10. What's the one thing about our friendship you would never change? 🥹",
      options: [
        { text: "Our jokes 😂", isCorrect: false, response: "Our jokes are terrible... but somehow you're still cute 😂❤️" },
        { text: "Our trust ❤️", isCorrect: false, response: "That's something I'd protect forever 🫶" },
        { text: "Our random conversations", isCorrect: false, response: "Our random conversations are secretly my favorite 😌" },
        { text: "Everything 🥹❤️", isCorrect: true, response: "Awww... correct answer. Now you're making me blush 😭❤️" }
      ]
    },
    {
      id: 11,
      question: "11. If we don't talk for a whole day, what happens? 📱",
      options: [
        { text: "Nothing 😌", isCorrect: false, response: "Liar 😂 You'd miss me." },
        { text: "We both pretend we're busy 😂", isCorrect: false, response: "And secretly check our phones every five minutes 👀" },
        { text: "Someone eventually says 'Yooooo!' 😂", isCorrect: true, response: "YOOOOOO! 😂❤️ Exactly! Silence never lasts with us." },
        { text: "Impossible. We're talking again within hours 🫶", isCorrect: false, response: "Because apparently we can't stay away from each other 😏❤️" }
      ]
    },
    {
      id: 12,
      question: "12. If our friendship were a movie, what would the title be? 🎬",
      options: [
        { text: "Two Idiots, One Brain Cell 💀", isCorrect: true, response: "PERFECT 😂 And somehow I'd still choose this idiot every time ❤️" },
        { text: "Partners in Crime 😈", isCorrect: false, response: "Accurate... but you're my favorite partner 😏" },
        { text: "Why Are We Like This? 😂", isCorrect: false, response: "Because we're perfect for each other's chaos 😌❤️" },
        { text: "Somehow, We're Still Friends ❤️", isCorrect: false, response: "Still friends? Please... you're not getting rid of me 😂❤️" }
      ]
    },
    {
      id: 13,
      question: "13. Be honest... who is more attractive? 👀",
      options: [
        { text: "Me 😌", isCorrect: false, response: "Confident! I respect it 😂❤️" },
        { text: "You 😏", isCorrect: false, response: "Aww, cute answer... but you forgot someone 👀" },
        { text: "Both, obviously 😌❤️", isCorrect: true, response: "CORRECT 😏 We're an unfairly attractive duo." },
        { text: "This question is dangerous 😂", isCorrect: false, response: "Exactly... because you know the answer is BOTH 😌🔥" }
      ]
    },
    {
      id: 14,
      question: "14. What's my most dangerous feature? 😏",
      options: [
        { text: "My smile 😊", isCorrect: false, response: "Careful... compliments like that might make me smile at you more 👀❤️" },
        { text: "My eyes 👀", isCorrect: false, response: "Ohhh, so you've been paying attention 😏" },
        { text: "My voice 🎶", isCorrect: false, response: "Didn't know my voice had that much power over you 👀❤️" },
        { text: "My ability to annoy you 😂", isCorrect: true, response: "Exactly 😂 And somehow you still keep coming back for more 😏❤️" }
      ]
    },
    {
      id: 15,
      question: "15. If I suddenly said 'I miss you'... what would you do? 🥹",
      options: [
        { text: "Say 'I miss you too' ❤️", isCorrect: false, response: "Aww... come here then 🥹❤️" },
        { text: "Call me immediately 📱", isCorrect: false, response: "No hesitation?! I kinda like that 😏" },
        { text: "Pretend you don't care 😌", isCorrect: false, response: "Sure... and I'm supposed to believe you? 😂❤️" },
        { text: "Start planning when we're meeting 👀", isCorrect: true, response: "That's the energy I was hoping for 😏❤️" }
      ]
    },
    {
      id: 16,
      question: "16. What would make you blush faster? 😳",
      options: [
        { text: "A compliment 🥹", isCorrect: false, response: "Then prepare yourself... I've got plenty 😏❤️" },
        { text: "Eye contact 👀", isCorrect: false, response: "Interesting... noted 👀😏" },
        { text: "A cute message 💌", isCorrect: false, response: "Good thing I'm pretty good at those 😌❤️" },
        { text: "Me flirting with you 😏", isCorrect: true, response: "HAHA, I KNEW IT! 😂❤️" }
      ]
    },
    {
      id: 17,
      question: "17. If I asked you for a surprise date right now, would you say yes? 👀",
      options: [
        { text: "Obviously ❤️", isCorrect: true, response: "I knew you'd say yes 😏 Now get ready." },
        { text: "Yes, but tell me the plan 😂", isCorrect: false, response: "Nope! It's a surprise 😌❤️" },
        { text: "Maybe... convince me 😏", isCorrect: false, response: "Challenge accepted 😏❤️" },
        { text: "Only if there's food 🍕", isCorrect: false, response: "Deal. Food first, flirting later 😂❤️" }
      ]
    },
    {
      id: 18,
      question: "18. Which would you choose? 💕",
      options: [
        { text: "A long hug 🤗", isCorrect: false, response: "Come here then 🫶 I'm not letting go anytime soon." },
        { text: "A forehead kiss 😚", isCorrect: false, response: "Cute choice... very cute 😏❤️" },
        { text: "Holding hands 🫶", isCorrect: false, response: "Guess I'm holding your hand now. No escape 😂❤️" },
        { text: "All of them 😳❤️", isCorrect: true, response: "Correct answer 😏 You clearly know what's good." }
      ]
    },
    {
      id: 19,
      question: "19. If I stared at you for 10 seconds without saying anything, what would you do? 👀",
      options: [
        { text: "Stare back 😏", isCorrect: false, response: "Ohhh, confident! I like that 😏🔥" },
        { text: "Start laughing 😂", isCorrect: false, response: "I'd probably laugh too because we'd both get shy 😂❤️" },
        { text: "Look away shyly 😳", isCorrect: false, response: "Awww, so I can actually make you shy? 👀❤️" },
        { text: "Ask 'WHY ARE YOU LOOKING AT ME?' 😭", isCorrect: true, response: "Because you're cute, obviously! 😂❤️" }
      ]
    },
    {
      id: 20,
      question: "20. Do you secretly enjoy it when I flirt with you? 😏",
      options: [
        { text: "Maybe 👀", isCorrect: false, response: "That 'maybe' sounds suspiciously like YES 😂❤️" },
        { text: "Definitely 😳", isCorrect: true, response: "Caught you! 😏❤️" },
        { text: "I LOVE IT ❤️", isCorrect: true, response: "Well then... I guess I have permission to continue 😏" },
        { text: "I'll never admit it 😂", isCorrect: false, response: "Your face already gave you away 👀😂" }
      ]
    },
    {
      id: 21,
      question: "21. What's your favorite thing about us? 🥹",
      options: [
        { text: "We can be ourselves ❤️", isCorrect: false, response: "And that's exactly why I love having you around 🫶" },
        { text: "We always make each other laugh 😂", isCorrect: false, response: "Making you laugh might be my favorite thing 😌❤️" },
        { text: "We genuinely care about each other 🥹", isCorrect: false, response: "That part means more to me than you know ❤️" },
        { text: "Honestly... everything ❤️", isCorrect: true, response: "Okayyy, stop being this cute. You're making me blush 🥹❤️" }
      ]
    },
    {
      id: 22,
      question: "22. If you could relive one moment with me, what would you choose? 🌸",
      options: [
        { text: "Our funniest moment 😂", isCorrect: false, response: "I'd laugh all over again with you 😭❤️" },
        { text: "Our first special memory 🥹", isCorrect: false, response: "I'd choose that one too... but I'd make it even better 😏" },
        { text: "One of our random adventures ✈️", isCorrect: false, response: "Let's make another one soon 👀❤️" },
        { text: "Just a normal day together 🫶", isCorrect: true, response: "Those are usually the moments I remember the most ❤️" }
      ]
    },
    {
      id: 23,
      question: "23. If I randomly showed up with your favorite food, what would you do? 🍕",
      options: [
        { text: "Hug me 🤗", isCorrect: false, response: "Correct reaction. But I'm expecting a longer hug 😏❤️" },
        { text: "Say 'I LOVE YOU' 😂", isCorrect: false, response: "I'll accept that payment 😂❤️" },
        { text: "Immediately eat it 😭", isCorrect: false, response: "Wow... not even a hug first? I'm offended 😂" },
        { text: "Wonder how I knew 👀", isCorrect: true, response: "I've been paying attention to you, obviously 😌❤️" }
      ]
    },
    {
      id: 24,
      question: "24. If we were stuck together for 24 hours with no phones, what would happen? 😂",
      options: [
        { text: "We'd talk all day 🗣️", isCorrect: false, response: "With you? I'd probably never run out of things to say ❤️" },
        { text: "We'd find something chaotic to do 💀", isCorrect: false, response: "Obviously. Peace was never an option 😂" },
        { text: "We'd probably annoy each other 😭", isCorrect: false, response: "I'd annoy you until you smiled 😏❤️" },
        { text: "Somehow we'd still have the best time ❤️", isCorrect: true, response: "Exactly. That's what makes us... us 🥹❤️" }
      ]
    },
    {
      id: 25,
      question: "25. ❤️ THE FINAL QUESTION ❤️ — If you could choose one person to keep in your life for a very, very long time... would you choose me? 🥹💕",
      options: [
        { text: "Obviously 🥹❤️", isCorrect: true, response: "Good answer. You're stuck with me forever now 😌❤️" },
        { text: "Unfortunately, yes 😂", isCorrect: true, response: "Unfortunately?! Too late. No refunds 😂❤️" },
        { text: "You're stuck with me too 😏", isCorrect: true, response: "Deal. That's exactly what I wanted to hear 😏🫶" },
        { text: "Always. 🫶", isCorrect: true, response: "Okay... you win. That one actually made my heart melt 🥹❤️" }
      ]
    }
  ],

  // Section 10: Reasons I Love You Generator (Over 20 sweet & playful reasons)
  reasonsList: [
    "Because your smile changes my entire mood.",
    "Because you make ordinary moments feel like magic.",
    "Because I can be 100% completely myself with you.",
    "Because your hugs feel like home.",
    "Because somehow you make me fall for you again every single day.",
    "Because you laugh at my terrible jokes.",
    "Because your eyes sparkle when you're happy.",
    "Because you remember the little details about me.",
    "Because holding your hand makes everything better.",
    "Because your voice is my favorite sound.",
    "Because you're my favorite troublemaker and partner in crime.",
    "Because you make me want to be a better person.",
    "Because you look adorable even when you're sleepy.",
    "Because you share your food with me (sometimes!).",
    "Because you give the warmest, best hugs in the world.",
    "Because you're cute when you try to act serious.",
    "Because our random conversations are my highlight of the day.",
    "Because you're unconditionally kind and caring.",
    "Because I love how silly we can be together.",
    "Because out of 8 billion people, you're my favorite."
  ],

  // Section 11: Pick a Surprise (3 Mystery Boxes)
  mysteryBoxes: [
    { id: 'A', name: "Open Me 🎁", title: "Box A", surprise: "Nice try! 😂 Here's a virtual kiss instead. 💋", icon: "💋" },
    { id: 'B', name: "Definitely Not Suspicious 👀", title: "Box B", surprise: "Wrong box! But you still get a warm bear hug. 🤗", icon: "🤗" },
    { id: 'C', name: "Your Luckiest Choice 🍀", title: "Box C", surprise: "🎉 YOU WIN! You just unlocked a REAL-LIFE DATE NIGHT with me! ❤️", isRealDate: true, icon: "👑" }
  ],

  // Section 12: Future Memories (Dreamy Outline Polaroids)
  futureMemories: [
    { title: "Our next adventure ✈️", text: "Ready to explore the world together" },
    { title: "Our next late-night conversation 🌙", text: "Talking under the stars until 3 AM" },
    { title: "Our next date ❤️", text: "Dressed up and creating memories" },
    { title: "Wild Card Promise 😈❤️", text: "I will let to do anything on me" },
    { title: "Our next silly photo 😂", text: "Making goofy faces like always" },
    { title: "Our next unforgettable day 🥹", text: "A day filled with smiles and love" }
  ]
};
