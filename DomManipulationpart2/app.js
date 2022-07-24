// Variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."`,
    person: `Martin Golding`
},
{
    quote: `"All computers wait at the same speed."`,
    person: "Unknown"
},
{
    quote: `"A misplaced decimal point will always end up where it will do the greatest damage."`,
    person: "Unknown"
},
{
    quote: `"A good programmer looks both ways before crossing a one-way street."`,
    person: "Unknown"
},
{
    quote: `"A computer program does what you tell it to do, not what you want it to do."`,
    person: "Unknown"
},
{
    quote: `"\"Intel Inside\" is a Government Warning required by Law."`,
    person: "Unknown"
},
{
    quote: ` "Common sense gets a lot of credit that belongs to cold feet."`,
    person: "Arthur Godfrey"
},
{
    quote: ` "Chuck Norris doesn’t go hunting. Chuck Norris goes killing."`,
    person: "Unknown"
},
{
    quote: ` "Chuck Norris counted to infinity... twice."`,
    person: "Unknown"
},
{
    quote: ` "C is quirky, flawed, and an enormous success."`,
    person: "Unknown"
},
{
    quote: ` "Beta is Latin for still doesn’t work."`,
    person: "Unknown"
},
{
    quote: ` "ASCII stupid question, get a stupid ANSI!"`,
    person: "Unknown"
},
{
    quote: ` "Artificial Intelligence usually beats natural stupidity."`,
    person: "Unknown"
},
{
    quote: `"Any fool can use a computer. Many do."`,
    person: "Ted Nelson"
},
{
    quote: ` "Hey! It compiles! Ship it!"`,
    person: "Unknown"
},
{
    quote: ` "Hate cannot drive out hate; only love can do that."`,
    person: "Martin Luther King Junior"
},
{
    quote: ` "Guns don’t kill people. Chuck Norris kills people."`,
    person: "Unknown"
},
{
    quote: ` "God is real, unless declared integer."`,
    person: "Unknown"
},
{
    quote: ` "First, solve the problem. Then, write the code."`,
    person: "John Johnson"
},
{
    quote: ` "Experience is the name everyone gives to their mistakes."`,
    person: "Oscar Wilde"
},
{
    quote: ` "Every piece of software written today is likely going to infringe on someone else’s patent."`,
    person: "Miguel de Icaza"
},
{
    quote: ` "Computers make very fast, very accurate mistakes."`,
    person: "Unknown"
},
{
    quote: ` "Computers do not solve problems, they execute solutions."`,
    person: "Unknown"
},
{
    quote: ` "I have NOT lost my mind—I have it backed up on tape somewhere."`,
    person: "Unknown"
},
{
    quote: ` "If brute force doesn’t solve your problems, then you aren’t using enough."`,
    person: "Unknown"
},
{
    quote: ` "It works on my machine."`,
    person: "Unknown"
},
{
    quote: ` "Java is, in many ways, C++??."`,
    person: "Unknown"
},
{
    quote: ` "Keyboard not found...Press any key to continue."`,
    person: "Unknown"
},
{
    quote: ` "Life would be so much easier if we only had the source code."`,
    person: "Unknown"
},
{
    quote: ` "Mac users swear by their Mac, PC users swear at their PC."`,
    person: "Unknown"
},
{
    quote: ` "Microsoft is not the answer. Microsoft is the question. \"No\" is the answer."`,
    person: "Unknown"
},
{
    quote: ` "MS-DOS isn’t dead, it just smells that way."`,
    person: "Unknown"
},
{
    quote: ` "Only half of programming is coding. The other 90% is debugging."`,
    person: "Unknown"
},
{
    quote: ` "Pasting code from the Internet into production code is like chewing gum found in the street."`,
    person: "Unknown"
},
{
    quote: ` "Press any key to continue or any other key to quit."`,
    person: "Unknown"
},
{
    quote: ` "Profanity is the one language all programmers know best."`,
    person: "Unknown"
},
{
    quote: ` "The best thing about a boolean is even if you are wrong, you are only off by a bit."`,
    person: "Unknown"
},
{
    quote: ` "The nice thing about standards is that there are so many to choose from."`,
    person: "Unknown"
},
{
    quote: ` "There are 3 kinds of people: those who can count and those who can’t."`,
    person: "Unknown"
},
{
    quote: ` "There is no place like 127.0.0.1"`,
    person: "Unknown"
},
{
    quote: ` "There is nothing quite so permanent as a quick fix."`,
    person: "Unknown"
},
{
    quote: ` "There’s no test like production."`,
    person: "Unknown"
},
{
    quote: ` "To err is human, but for a real disaster you need a computer."`,
    person: "Unknown"
},
{
    quote: ` "Ubuntu is an ancient African word, meaning \"can’t configure Debian\""`,
    person: "Unknown"
},
{
    quote: ` "UNIX is the answer, but only if you phrase the question very carefully."`,
    person: "Unknown"
},
{
    quote: ` "Usenet is a Mobius strand of spaghetti."`,
    person: "Unknown"
},
{
    quote: ` "Weeks of coding can save you hours of planning."`,
    person: "Unknown"
},
{
    quote: ` "When your computer starts falling apart, stop hitting it with a Hammer!"`,
    person: "Unknown"
},
{
    quote: ` "Who is General Failure? And why is he reading my disk?"`,
    person: "Unknown"
},
{
    quote: ` "You can stand on the shoulders of giants OR a big enough pile of dwarfs, works either way."`,
    person: "Unknown"
},
{
    quote: ` "You start coding. I’ll go find out what they want."`,
    person: "Unknown"
},
{
    quote: ` "I love deadlines. I like the whooshing sound they make as they fly by."`,
    person: "Douglas Adams"
},
{
    quote: ` "I think we agree, the past is over."`,
    person: "George W. Bush"
},
{
    quote: ` "In order to be irreplaceable, one must always be different."`,
    person: "Coco Chanel"
},
{
    quote: ` "In the future everyone will be famous for fifteen minutes."`,
    person: "Andy Warhol"
},
{
    quote: ` "In three words I can sum up everything I’ve learned about life: it goes on."`,
    person: "Robert Frost"
},
{
    quote: ` "It is a mistake to think you can solve any major problems just with potatoes."`,
    person: "Douglas Adams"
},
{
    quote: ` "It’s kind of fun to do the impossible."`,
    person: "Walt Disney"
},
{
    quote: ` "Java is to JavaScript what Car is to Carpet."`,
    person: "Chris Heilmann"
},
{
    quote: ` "Judge a man by his questions rather than by his answers."`,
    person: "Voltaire"
},
{
    quote: ` "Just don’t create a file called -rf."`,
    person: "Larry Wall"
},
{
    quote: ` "Knowledge is power."`,
    person: "Francis Bacon"
},
{
    quote: ` "Let’s call it an accidental feature."`,
    person: "Larry Wall"
},
{
    quote: ` "Linux is only free if your time has no value."`,
    person: "Jamie Zawinski"
},
{
    quote: ` "Measuring programming progress by lines of code is like measuring aircraft building progress by weight."`,
    person: "Bill Gates"
},
{
    quote: ` "Never trust a computer you can’t throw out a window."`,
    person: "Steve Wozniak"
},
{
    quote: ` "Nobody expects the Spanish inquisition."`,
    person: "Monty Python"
},
{
    quote: ` "On the Internet, nobody knows you’re a dog."`,
    person: "Peter Steiner"
},
{
    quote: ` "One man’s constant is another man’s variable."`,
    person: "Alan J. Perlis"
},
{
    quote: ` "People that hate cats will come back as mice in their next life."`,
    person: "Faith Resnick"
},
{
    quote: ` "Perl - The only language that looks the same before and after RSA encryption."`,
    person: "Keith Bostic"
},
{
    quote: ` "PHP – Yeah, you know me."`,
    person: "PHPaughty by PHPature"
},
{
    quote: ` "The future is here. It is just not evenly distributed yet."`,
    person: "William Gibson"
},
{
    quote: ` "The greatest performance improvement of all is when a system goes from not-working to working."`,
    person: "John Ousterhout"
},
{
    quote: ` "Software is like sex: It’s better when it’s free."`,
    person: "Linus Torvalds"
},
{
    quote: ` "Sour, sweet, bitter, pungent, all must be tasted."`,
    person: "Chinese Proverb"
},
{
    quote: ` "Stay hungry, stay foolish."`,
    person: "Whole Earth Catalog"
},
{
    quote: ` "The artist belongs to his work, not the work to the artist."`,
    person: "Novalis"
},
{
    quote: ` "The only \"intuitive\" interface is the nipple. After that it’s all learned."`,
    person: "Bruce Ediger"
},
{
    quote: ` "The only completely consistent people are the dead."`,
    person: "Aldous Huxley"
},
{
    quote: ` "The problem with troubleshooting is that trouble shoots back."`,
    person: "Unknown personm"
},
{
    quote: ` "The three great virtues of a programmer: laziness, impatience, and hubris."`,
    person: "Larry Wall"
},
{
    quote: ` "Time is an illusion. Lunchtime doubly so."`,
    person: "Douglas Adams"
},
{
    quote: ` "When debugging, novices insert corrective code; experts remove defective code."`,
    person: "Richard Pattis"
},
{
    quote: ` "When in doubt, leave it out."`,
    person: "Joshua Bloch"
},
{
    quote: ` "Walking on water and developing software from a specification are easy if both are frozen."`,
    person: "Edward V Berard"
},
{
    quote: ` "We cannot learn without pain."`,
    person: "Aristotle"
},
{
    quote: ` "We have always been shameless about stealing great ideas."`,
    person: "Steve Jobs"
},
{
    quote: ` "You can kill a man but you can’t kill an idea."`,
    person: "Medgar Evers"
},
{
    quote: ` "You can never underestimate the stupidity of the general public."`,
    person: "Scott Adams"
},
{
    quote: ` "You must have chaos in your soul to give birth to a dancing star."`,
    person: "Friedrich Nietzsche"
},
{
    quote: ` "Without requirements or design, programming is the art of adding bugs to an empty \"quote\" file."`,
    person: "Louis Srygley"
},
{
    quote: ` "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code."`,
    person: "Dan Salomon"
},
{
    quote: ` "You miss 100 percent of the shots you never take."`,
    person: "Wayne Gretzky"
},
{
    quote: ` "One of the biggest problems that software developers face is that technology changes rapidly. It is very hard to stay current."`,
    person: "Vivek Wadhwa"
},
{
    quote: ` "Ideas want to be ugly."`,
    person: "Jason Santa Maria"
},
{
    quote: ` "Developer: an organism that turns coffee into code."`,
    person: "Unknown"
},
{
    quote: ` "One man´s crappy software is another man´s full time job."`,
    person: "Jessica Gaston"
},
{
    quote: ` "It´s okay to figure out murder mysteries, but you shouldn´t need to figure out code. You should be able to read it."`,
    person: "Steve McConnell"
},
{
    quote: ` "Programming languages, like pizzas, come in only two sizes: too big and too small."`,
    person: "Richard Pattis"
},
{
    quote: ` "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning."`,
    person: "Rich Cook"
},
{
    quote: ` "Plan to throw one (implementation) away; you will, anyhow."`,
    person: "Fred Brooks"
},
{
    quote: ` "Every good work of software starts by scratching a developer´s personal itch"`,
    person: "Unknown"
},
{
    quote: ` "Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away."`,
    person: "Antoine de Saint-Exupery"
},
{
    quote: ` "Prolific programmers contribute to certain disaster."`,
    person: "Niklaus Wirth"
},
{
    quote: ` "Programming can be fun, so can cryptography; however they should not be combined."`,
    person: "Kreitzberg and Shneiderman"
},
{
    quote: ` "It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive."`,
    person: "Steve McConnell"
},
{
    quote: ` "An organization that treats its programmers as morons will soon have programmers that are willing and able to act like morons only."`,
    person: "Bjarne Stroustrup"
},
{
    quote: ` "Real programmers can write assembly code in any language."`,
    person: "Larry Wall"
},
{
    quote: ` "The key to performance is elegance, not battalions of special cases."`,
    person: "Jon Bentley, Doug McIlroy"
},
{
    quote: ` "Inside every large program, there is a program trying to get out."`,
    person: "C.A.R. Hoare"
},
{
    quote: ` "Why do we never have time to do it right, but always have time to do it over?"`,
    person: "Unknown"
},
{
    quote: ` "The goal of Computer Science is to build something that will last at least until we´ve finished building it. "`,
    person: "Unknown"
},
{
    quote: ` "A good way to stay flexible is to write less code."`,
    person: "Pragmatic Programmer"
},
{
    quote: ` "No matter what the problem is, it´s always a people problem."`,
    person: "Gerald M. Weinberg"
},
{
    quote: ` "Every big computing disaster has come from taking too many ideas and putting them in one place."`,
    person: "Gordon Bell"
},
{
    quote: ` "Adding manpower to a late software project makes it later!"`,
    person: "Fred Brooks"
},
{
    quote: ` "The best way to get a project done faster is to start sooner"`,
    person: "Jim Highsmith"
},
{
    quote: ` "Even the best planning is not so omniscient as to get it right the first time."`,
    person: "Fred Brooks"
},
{
    quote: ` "All you need is love. But a new pair of shoes never hurt anybody."`,
    person: "Unknown"
},
{
    quote: ` "The best revenge is massive success."`,
    person: "Frank Sinatra"
},
{
    quote: ` "Reality itself is too obvious to be true."`,
    person: "Jean Baudrillard"
},
{
    quote: ` "Be yourself; everyone else is already taken."`,
    person: "Oscar Wilde"
},
{
    quote: ` "Let me just change this one line of code…"`,
    person: "Unknown"
},
{
    quote: ` "Fast, Good, Cheap. Pick two."`,
    person: "Unknown"
},
{
    quote: ` "Did you know? The collective noun for a group of programmers is a merge-conflict."`,
    person: "Unknown"
},
{
    quote: ` "If there is no struggle, there is no progress."`,
    person: "Frederick Douglass"
},
{
    quote: ` "You have to learn the rules of the game. And then you have to play better than anyone else."`,
    person: "Albert Einstein"
},
{
    quote: ` "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."`,
    person: "Albert Einstein"
},
{
    quote: ` "Insanity: doing the same thing over and over again and expecting different results."`,
    person: "Albert Einstein"
},
{
    quote: ` "A person who never made a mistake never tried anything new."`,
    person: "Albert Einstein"
},
{
    quote: ` "Logic will get you from A to B. Imagination will take you everywhere."`,
    person: "Albert Einstein"
},
{
    quote: ` "When the solution is simple, God is answering."`,
    person: "Albert Einstein"
},
{
    quote: ` "If you can´t explain it simply, you don´t understand it well enough."`,
    person: "Albert Einstein"
},
{
    quote: ` "If the facts don´t fit the theory, change the facts."`,
    person: "Albert Einstein"
},
{
    quote: ` "It is a miracle that curiosity survives formal education."`,
    person: "Albert Einstein"
},
{
    quote: ` "I only believe in statistics that I doctored myself."`,
    person: "Winston S. Churchill?"
},
{
    quote: ` "Men and nations behave wisely when they have exhausted all other resources."`,
    person: "Abba Eban"
},
{
    quote: ` "If you´re going through hell, keep going."`,
    person: "Unknown"
},
{
    quote: ` "Success is not forever and failure isn´t fatal."`,
    person: "Don Shula"
},
{
    quote: ` "I have never let my schooling interfere with my education."`,
    person: "Mark Twain"
},
{
    quote: ` "The secret of getting ahead is getting started."`,
    person: "Mark Twain"
},
{
    quote: ` "Get your facts first, then you can distort them as you please."`,
    person: "Mark Twain"
},
{
    quote: ` "Apparently there is nothing that cannot happen today."`,
    person: "Mark Twain"
},
{
    quote: ` "Plans are worthless, but planning is everything."`,
    person: "Dwight D. Eisenhower"
},
{
    quote: ` "Before you marry a person you should first make them use a computer with slow Internet to see who they really are."`,
    person: "Will Ferrell"
},
{
    quote: ` "I just invent, then wait until man comes around to needing what I´ve invented."`,
    person: "R. Buckminster Fuller"
},
{
    quote: ` "The best way to make your dreams come true is to wake up."`,
    person: "Muriel Siebert"
},
{
    quote: ` "If you can't write it down in English, you can't code it."`,
    person: "Peter Halpern"
},
{
    quote: ` "Suspicion is healthy. It’ll keep you alive."`,
    person: "Laurell K. Hamilton"
},
{
    quote: ` "If your parents never had children, chances are you won’t, either."`,
    person: "Dick Cavett"
},
{
    quote: ` "Sometimes I think we´re alone in the universe & sometimes I think we´re not. In either case the idea is quite staggering"`,
    person: "Arthur C. Clarke"
},
{
    quote: ` "Talk is cheap, show me the code!"`,
    person: "Linus Torvalds"
},
{
    quote: ` "They did not know it was impossible, so they did it!"`,
    person: "Mark Twain"
},
{
    quote: ` "You are what you share."`,
    person: "Charles Leadbeater"
},
{
    quote: ` "You want it in one line? Does it have to fit in 80 columns?"`,
    person: "Larry Wall"
},
{
    quote: ` "The Internet? Is that thing still around?"`,
    person: "Homer Simpson"
},
{
    quote: ` "The journey is the destination."`,
    person: "Dan Eldon"
},
{
    quote: ` "OO programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches."`,
    person: "Paul Graham"
},
{
    quote: ` "Ruby is rubbish! PHP is phpantastic!"`,
    person: "Nikita Popov"
},
{
    quote: ` "So long and thanks for all the fish!"`,
    person: "Douglas Adams"
},
{
    quote: ` "If I had more time, I would have written a shorter letter."`,
    person: "Cicero"
},
{
    quote: ` "The best reaction to \"this is confusing, where are the docs\" is to rewrite the feature to make it less confusing, not write more docs."`,
    person: "Jeff Atwood"
},
{
    quote: ` "The older I get, the more I believe that the only way to become a better programmer is by not programming."`,
    person: "Jeff Atwood"
},
{
    quote: ` "\"That hardly ever happens\" is another way of saying \"it happens\"."`,
    person: "Douglas Crockford"
},
{
    quote: ` "Hello, PHP, my old friend."`,
    person: "Anna Debenham"
},
{
    quote: ` "Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations."`,
    person: "Melvin Conway"
},
{
    quote: ` "In design, complexity is toxic."`,
    person: "Melvin Conway"
},
{
    quote: ` "Good is the enemy of great, but great is the enemy of shipped."`,
    person: "Jeffrey Zeldman"
},
{
    quote: ` "Don't make the user provide information that the system already knows."`,
    person: "Rick Lemons"
},
{
    quote: ` "You're bound to be unhappy if you optimize everything."`,
    person: "Donald E. Knuth"
},
{
    quote: ` "If the programmers like each other, they play a game called 'pair programming'. And if not then the game is called 'peer review'."`,
    person: "Anna Nachesa"
},
{
    quote: ` "Simplicity is prerequisite for reliability."`,
    person: "Edsger W. Dijkstra"
},
{
    quote: ` "Focus on WHY instead of WHAT in your code will make you a better developer"`,
    person: "Jordi Boggiano"
},
{
    quote: ` "The best engineers I know are artists at heart. The best designers I know are secretly technicians as well."`,
    person: "Andrei Herasimchuk"
},
{
    quote: ` "Poor management can increase software costs more rapidly than any other factor."`,
    person: "Barry Boehm"
},
{
    quote: ` "If you can't deploy your services independently then they aren't microservices."`,
    person: "Daniel Bryant"
},
{
    quote: ` "No one hates software more than software developers."`,
    person: "Jeff Atwood"
},
{
    quote: ` "The proper use of comments is to compensate for our failure to express ourself in code."`,
    person: "Robert C. Martin"
},
{
    quote: ` "Code is like humor. When you have to explain it, it's bad."`,
    person: "Cory House"
},
{
    quote: ` "Fix the cause, not the symptom."`,
    person: "Steve Maguire"
},
{
    quote: ` "Programmers are constantly making things more complicated than they need to be BECAUSE FUTURE. Fuck the future. Program for today."`,
    person: "David Heinemeier Hansson"
},
{
    quote: ` "People will realize that software is not a product; you use it to build a product."`,
    person: "Linus Torvalds"
},
{
    quote: ` "Design is choosing how you will fail."`,
    person: "Ron Fein"
},
{
    quote: ` "Focus is saying no to 1000 good ideas."`,
    person: "Steve Jobs"
},
{
    quote: ` "Code never lies, comments sometimes do."`,
    person: "Ron Jeffries"
},
{
    quote: ` "Be careful with each other, so you can be dangerous together."`,
    person: "Unknown"
},
{
    quote: ` "When making a PR to a major project, you have to \"sell\" that feature \/ contribution. You have to be convincing on why it belongs there. The maintainer is going to be the one babysitting that code forever."`,
    person: "Taylor Otwell"
},
{
    quote: ` "Be the change you wish was made. Share the lessons you wish you'd been taught. Make the sacrifices you wish others had made."`,
    person: "David Heinemeier Hansson"
},
{
    quote: ` "The only way to achieve flexibility is to make things as simple and easy to change as you can."`,
    person: "Casey Brant"
},
{
    quote: ` "The computer was born to solve problems that did not exist before."`,
    person: "Bill Gates"
},
{
    quote: ` "People don't care about what you say, they care about what you build."`,
    person: "Mark Zuckerberg"
},
{
    quote: ` "We will not ship shit."`,
    person: "Robert C. Martin"
},
];

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);


    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})