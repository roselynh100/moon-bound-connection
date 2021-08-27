const app = Vue.createApp({
    data() {
        return {
            showSong: false,
            showPlaylist: true,
            name1: 'RWAE!!!',
            name2: 'Yierqi!!!',
        }
    },
    methods: {
        playSong() {
            this.showSong = !this.showSong
            this.showPlaylist = !this.showPlaylist
        },
        about() {
            this.showSong = true
            this.showPlaylist = false
            this.desc1 = 'something about liyun'
            this.desc2 = 'something about ehuang'
        },
        city127() {
            this.playSong()
            this.desc1 = 'When I hear City 127, I always think of the first time I saw <strike>Mark Lee</strike> NCT 127 in person, during the NeoCity in Toronto concert. This is the perfect song for a walk in the park, or just chilling in the sun, or getting married to your Waifu (which is exactly what I plan to do). In fact, this song - to be played at our wedding - is what inspired this entire playlist. It’s so upbeat and cute and boppy; if I were walking while listening to this, then there’d be a skip in my step. <i>Neomu areumdawo,</i> they say, describing my Waifu so perfectly. <i>Now, our story</i> - a story we will create once we start our newly-wed life :sunglasses: When they say “my girl”, that would have to be George about me, because am gorl. Thank you.'
            this.desc2 = 'It’s a wack city and the waifus are walking together, hands locked, but not looking at each other for a moment. Theres a sense of gravity holding them together but the youthful feeling of first love is still fresh. There’s energy all over toronto and so many possibilities to do together. The waifus have so much to reveal to each other, the stories that they have planned in their minds—the foods to eat, the things they want to buy together, the chickens they want to see, the waterfront they want to sit and watch together until they start fading into their own little world. George didn’t know a lot of korean, but assumed that <i>chigeum euri (????) iyagi</i> was a true representation of what the future holds. As they look towards the faint haze of city lights, and amidst their shiness of youthfulwaifulove, there is so much life they want to share with each other.'
        },
        stillintoyou() {
            this.playSong()
            this.desc1 = 'Wow, we should be in a rock band. I don’t think this song is rock, but it’s funky enough to make me want to be in a band anyways. The Waifus would definitely be having a sing-off with this song, yeeting back and forth at each other in a crazy hazednessthing where they’re like “no I’M more into you!!!” “NO I’M MORE INTO YOU!!!!” while they alternate singing this song. ‘Cause after all this time, I’m still into you. I have actually met Waifu’s mother, and she is so sweet and nice and points out doggies and drives us to McDonald’s to get McFlurries, unless I’m remembering wrong. This feels like a very summer-ish song, definitely not cold like winter. I can see us playing this while the wind is blowing in our face and getting hair all over (unless Waifu’s hair is short), and also the sun is setting in the background. I’m into you I’m into you I’m into you baby not a day goes by that i’M NOT INTO YOU (so when Waifu leaves I get very sad and it tears a hole into my heart help why does Waifu keep doing that). I don’t really need to wonder at all - this is one of the things I do not use my stupid brain for. The music cut off abruptly, just like how summer will end suddenly and slap us in the face and I will be farther away from Waifu than ever.'
            this.desc2 = 'Cheese. RWAE and Yierqi have just started learning things in grade 7 and meeting a chow who tried to make their scarf fly in the wind. It’s been so many years and school has been rough. We’ve visited parks and waifu wore a mustache in grade 6 and talking about Fantage to almost nearly running after the bus because we were having so much fun at the mall near indigo. Even if waifus have been together for so long, that sense of fun seems brand new at every turn. Something just clicks even though we shouldn’t be in love. But at the same time, it makes so much sense. We could spontaneously accomplish everything together. Kicking walls. Getting into churches. Eating ice cream together. Crying over random memes. I have a lot of images in my brain but i can’t portray them good enough onto this page. This song makes me think of Twilight for some reason, and if we were in a 2000s teen movie where there’s a prom at the end, we’d be the high school sweethearts becoming prom king and queen. But also vampires, because goth is cool. In my head I pictured this nostalgic tsundere story, where we’ve been together for a long time and the way of life of the “waifu” has been ingrained in our brains, but we have to wake up to the reality that we shouldn’t be waifus (because plot) and then we run off towards the distant skies and we realize that we’re still into each other even after all this time.'
        },
        comeinsideofmyheart() {
            this.playSong()
            this.desc1 = 'Oh no, there’s got to be some kind of miscommunication going on, because the song opens with “I love you, but I don’t really show you”. Maybe this isn’t a choice - maybe it’s because I can’t show you. We can’t meet up and do all our funky spontaneous things. Instead, all we can do is chill over Discord, on the internet, while excitedly yelling “I FEEL CONNECTED!!!!!” at random moments. Please, come save me from this pandemic, because Waifu is really the only one for me. I don’t even want to date anyone. I just want to get married with Waifu. I wonder if Waifu is looking for answers, because I definitely am. Maybe one day we’ll look for answers together, staring up at the infinite starry sky on a dark but clear night on top of a hill, wondering what our existence means in this never-ending universe. Perhaps there are higher powers that decide everything, but whether they like it or not, I’m sticking by Waifu’s side forever. There’s a nice guitar riff out, and I think of cool people who play guitar that I might have stalked. Guitar is pretty funky.'
            this.desc2 = 'CHicken. It’s been COVID-19 for some time now, and we’re stuck inside with everything to do. Yierqi has developed a liking to indie music and wants to share it with RWAE. After listening to silly love songs for a while, I dive into all of these stories. It seems to encapsulate all that has happened, like random disappearances, missed opportunities to film BOKSHEAD, crying over poetry friends. Crying over grades. But yierqi just wants it all over. Imagine if I were just like “YOOOO!!!!” and drive over to waifu’s house with a giant 70s car and we drive off all of our past and the hurt that we have had. Let’s really try to communicate this time. We can turn on music and talk until dusk and drive to nowhere. We can forget about school and the stresses in our lives, and the walls we’ve put, and the people we’re talking about in our lives that don’t really matter. I just want your heart, very plainly simple. Even if I don’t show it. But that probably won’t happen yet because I don’t have my license yet. Maybe I should go looking for 70s cars, do you think you can flirt with retro cars? We’ll just have to wait and see.'
        },
        style() {
            this.playSong()
            this.desc1 = 'I wish I could play guitar. It’s midnight, it’s definitely midnight, and as I say this, the words echo into the nothingness (which is impossible because the soundwaves must have something to bounce off of, but just go with it). This is actually one of the few Taylor Swift songs I don’t really like, but Waifu likes it so here it is in our playlist. I want to wear a skirt like in this song, but maybe not too tight or little because that’s scandalous and I am a child of God (aka Lord Barbatos). When we go crashing down, we come back every time. Even if things go bad, they always get better. Rebounding, back into place, like slime… that keeps its position. Perhaps we’d use Hooke’s Law to calculate the elasticity or something like that, and x (displacement from equilibrium) would ultimately be 0. One day I will be good at makeup and I will have a red lip and Waifu will wear a white t-shirt and we will never go out of style. I wonder how cool Waifu will be as a high school graduate, how cool Waifu will be dressing. It’ll be so funky if I could wear cool clothes and Waifu could wear cool clothes but our aesthetics would totally clash and not go together at all, but it’ll be a new style. We will be trendsetters and everyone will stare at us, but in a good, envious way.'
            this.desc2 = 'Bread. I was just randomly in a car when I was listening to this song, and we were in Toronto and I was with my family and suddenly the image of waifu popped in my head. I looked towards the front and told my parents, “hey, you know waifu really likes Taylor Swift???” Wooba rolls her eyes, because I always tell them about waifu, and I probably already told them about this detail. But it made me feel good to share these things. It’s like RWAE is a part of the family. As we drove, I started daydreaming while not really hearing the lyrics, other than “something something James Dean something something, something something little skirt” and maybe at one point I imagined Zhong li in a skirt, and then I thought awh, maybe this is like a power couple and. That’s what we are. We’re classic, and we NEVER go out of style. Waifu loves trends after they run out of interest, and I like them before they come. We’ll go crashing down, but we’ll lift each other in the darkest moments. But then there was a “this other girl” part and I was confused, so I stopped listening and my dad was probably going “OOOOOOO DOGG!!!!!” and then sounding out “Dog. E. Dog-E coin” when I correct him and say, “for the last time, it’s DOJJJJJjjjjjjj coin.”'
        },
        dontstopbelievin() {
            this.playSong()
            this.desc1 = 'The rough piano reminds me of camp - I can imagine someone at camp playing this on the piano in the main hall for eating, even though I don’t think that piano was nearly as jaggedy raggedy like this. Chow doesn’t like this song, and he coincidentally left twice exactly when it started, so it’s safe to say he stopped believin’. When I was in grade 4, I remember my group and I choreographed a dance to this. Actually, both classes did (DiTullio and Simonelli), because we collectively voted on which song to choose (I remember Valerie chose some wonky slow Celine Dion song or something). Everybody wants a thrill - oh how true that is. I want a thrill. I want this song to blare behind Waifu and I as we run into the sunset, or the sunrise, or anywhere, really. Under streetlights, in the crowded streets of Toronto, would be so lovely. We would stare at everything, in awe of the world, and I would pause to take candid pictures of a million things. Man, there’s always heckin cool guitar in all these songs. I will never stop believing, which contrasts another song I like called (Coffee’s for Closers) by Fall Out Boy (which says I will never believe again). If I stop believing, then what’s the point? Imagination and hope is what keeps me alive. If not for pushing forward, for hoping for the future, for belief that things get better, then what would I do with myself?'
            this.desc2 = 'Chow literally left the vc at this song, whether it be a coincidence or not. I remember listening to this song since i was in grade 1, and then my dad watching glee and not really liking it but it’s the memory of the song that matters even more. We’re driving through so many moments where we grow up together, in parallel, but in completely different places. I am learning how to skate speed-skating style for the first time, imagining what story this song holds with my naive brain, waifu in Toronto and literally walking on the boulevard. We’re two souls (shadows) searching in the night, trying to learn our ways around the city. Somewhere in the night, as soulmates do, our souls will become one again, just as they foretold in (scratch marks) the half of it (scratch marks) the greek gods. I remember in grade 4 or 3, I had to do a choreo of this song, and I was in a group with that dude samade? Salad? His name always made me think of salad. People thought I liked him because he was indian but really I hated him lmfao. Anyway I did this cool guitar thing, and did stars, and we had to dance in circles. This song always makes me think of late nights also spent with my dad in the pizza store after i came back from speedskating practice and i can still smell the arena, the cool air, the city smell, the smell of sweat and my sports equipment.'
        },
        spacegirl() {
            this.playSong()
            this.desc1 = '	I love space, so naturally I was drawn to this song. Anything about galaxies and stars and planets and constellations and all that good stuff, heck yes. I can’t dance, but I want to dance in the sky with Waifu, amongst the stars. We won’t even be on a solid ground or anything; we’ll just be waltzing through empty space. Or maybe we’ll be doing the macarena, or an NCT dance. This song is weak, because they say the relationship would end if one of them was sucked into a black hole, but if Waifu were to be sucked into a black hole I would simply get sucked too. [insert dab] Neither of us are Cancers but I do indeed do a whole lot of crying. If this song were a little bit less poppy and more hazy, it would fit right into my “hazy days and soft emotions” playlist. There’s a soft background chattering for some reason that I don’t quite understand, but it’s easy to tune it out, especially when you’re floating in space and all that’s on your mind is Waifu. This song is comforting but not warm, I think, and it’s nice. I could drift away listening to this, but not on an ocean - rather, in space. As I float farther away, I am still connected to Waifu by an endless invisible string, a bond.'
            this.desc2 = 'Space girl makes me think of those vivid children’s books where I imagine going to this cottage that’s A-framed and transparent and you can see the sky above. It’s snowing. This song SMELLS like purple and tastes like what I imagine planets to taste like. I spend my day dreaming about waifu, too. Waifu really likes the sky and the planets and I’ve realized that I love astronomy even more because now I just think about waifu whenever I see an image of NASA or galactic shenanigans. The guitar makes me think of sweet memories of space and gliding into childhood creativity and sparkles. I feel really cozy but also cool (the temperature) and like I’m flying in the sky, maybe waifu and I are flying together and holding hands, and flying over all of Canada or a magical world belonging to us. We can explore the galaxy together.'
        },
        frenzy() {
            this.playSong()
            this.desc1 = 'Intense. Running. Yeeting. Chirping. Screeching. Gobbling. Panic, but not the bad kind. There is so much going on. If I was running before, now I would be sprinting faster than possible with Waifu. I hope that we are running side-by-side, because otherwise I think my hair would fly into her face and that is not funky. Maybe that’s why the turkeys are gobbling in panic. Even as the main trumpet sixteenths die away, there’s still serene and calm turkey noises in the back, with a beautiful oboe solo with an equally as beautiful accompaniment. It flows and twists so gently, and the xylophone(?) percussion instrument taps incessantly in the background, like a leaky water tap that hasn’t been fixed in 8 years. The intensity grows. The turkeys are getting mad. The waifus are trapped in a corner, holding hands because all they can do is stay together, but they are surrounded by angry turkeys all around. The turkeys gobble at them like they expect something, like they need answers, but look! In the ceiling! A hole, from which sunlight gleams through - that is their escape! Maybe a rope falls down, and the Waifus must use their core to climb up. The turkeys gobble angrily, full of rage at their escape, but they do not have hands and cannot stop the two. In the back, tribal-like drums play. And finally… the Waifus are victorious. The sun is theirs, just like the stars are theirs after having killed Elon Musk. The sweet oboe tune foretells their amazing feat, a kilometer ahead of them as they head back to civilization. It is gay, almost unbearingly so, but that’s impossible because no gay is too much gay. The Waifus roll down a seemingly endless hill as turkeys and other birbs chirp at them, this time happy, cheerful. Even when it seems like something bad is going to happen, the Waifus are so happy to be together, their funky powers are too strong. The trumpets are back, this time welcoming them - they are the heroes of the village! As if someone else, Waifu does a hair flip, and as if someone else, I stare in awe with a dumb and stupefied expression on my face. The ending of the piece portrays hope that we can one day befriend the turkeys like two other gay girls once did.'
            this.desc2 = 'You can already guess what I am going to be writing about. Turkeys. Lewd magazines. Gay. Handsome, messy hair flips. Stupidity. Here in the land of the glowing turkeys, the mere human cannot fathom what it must be like to attain true power and glory over other humans and experience enlightenment. Turkeys are glorious. Everything is great and full of love. Explosions, and the joys of every day life (such as choking on korean food), meeting your first love as a terrorist, meeting english monks, and learning more about that it means to exist in this world. When the turkeys are respected, humanity and the balance in which we hold to standard our universe is withheld. We can go on glorious journeys. However, some people wish to question that power of the turkey. Harness it for their own. CRASH. BAM. AT A SUDDEN MOMENT, THE TURKEYS CAN BE HURT. THE WORLD CRASHES INTO CHAOS. Global world wars. NCT disbanding. Shortage of bubble tea. Engineering programs cancelling worldwide. Waifus being separated. Gay hate. Government. The stinky politicians want the turkeys for their own. They want the power. They NEED the power—it is right here when the fire nation attacked. Pew. Pew. More steps in the race of grabbing the crown. BUT. Gay idiots exist—and if you know idiots well, they have faith in everything, because that’s all they now. There is a brief breath of oboe, and the sunlight. Everyone looks towards the sky. With the sending of the idiot girl, who paints turkeys, and the Thai girl who just wants to understand things more complex than lewd magazines and actually seem cool, combine their IQ levels of approximately 78 to go on an adventure to capture the turkey-saving wand. BOOM BOOM. BOOM. WE HAVE TO HURRY!!! THE TURKEYS ARE ABOUT TO DIEE!!! AGHHGHHGHWE[UHFERIPGUHEPIRUGEIPRUHGERTPGUHEPRITGHEPI THAILAND…….. Oh my god. OH MY GOD. LIYUN!!! You have captured the turkey of peace! We have succeeded. And now the turkeys are celebrating the two hopeless gays. World balance is restoring. Everyone comes to applaud the two idiots, as they step across the mountains and place the turkey in its rightful place in the sun. As it takes a deep breath, it releases a victorious, conquished GOBBLE. GOBBLE, does Liyun. GOBBLE, does Ehuang. Everyone is enlightened, and the journey ends with gay. The journey, at last, is over.'
        }
    }
})

app.mount('#everything')