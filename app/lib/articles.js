export const articles = {
  "mechanical-keyboard-switch-worth-it": {
    title: "I Finally Switched to a Mechanical Keyboard After 10 Years",
    description: "My membrane keyboard died during a client call. Two weeks with a mechanical keyboard later, here's what actually changed and whether the $150 investment was worth it.",
    author: "Mark Stevens",
    date: "2024-12-20",
    readTime: "6 min read",
    keywords: "mechanical keyboard, productivity, developer tools, typing experience, Cherry MX switches",
    content: `
My $15 Dell membrane keyboard died in the middle of a client presentation. Keys started sticking. The spacebar needed two hits. Classic.

I'd resisted mechanical keyboards for years. They seemed like overpriced toys for people with too much disposable income. But my hand was forced, so I bought a Keychron K8 with Cherry MX Brown switches for $89.

## The First Day Was Weird

The sound hit me first. Every keystroke made noise. Not obnoxiously loud, but definitely present. My quiet workspace suddenly had a soundtrack.

The keys felt higher. My fingers had to travel further. After ten years of barely lifting my fingers, this felt like typing on stilts. I made more mistakes in that first hour than I had all month.

## Week One: The Adjustment Period

My typing speed dropped from 85 WPM to about 65. Frustrating when you're trying to work. The tactile bump on each key threw off my rhythm. I kept second-guessing whether I'd actually pressed keys.

But something interesting happened around day four. I stopped making certain types of errors. The ones where you're not sure if you hit the key or not? Gone. The tactile feedback was teaching my fingers exactly when a keystroke registered.

## Week Two: Things Clicked

My speed came back. 83 WPM. Close to where I started. But the error rate? Down 40%. I wasn't constantly backspacing to fix phantom characters or missing letters.

The build quality became obvious. This thing weighs nearly two pounds. It doesn't slide around my desk during heated coding sessions. The aluminum frame feels like it could survive a drop.

## The Actual Benefits (Not Marketing BS)

**Typing accuracy improved.** Each key tells you exactly when it actuates. No more wondering if that keystroke registered.

**My wrists hurt less.** The higher profile actually helps. My wrists sit at a more natural angle. I added a wrist rest, which helped even more.

**It's repairable.** When the 'N' key started feeling mushy after a coffee spill, I swapped it out in 30 seconds. Try that with a membrane keyboard.

**The sound grew on me.** It provides audio feedback. I know I'm making progress. Strange but true - the clicks make typing feel more productive.

## The Downsides Nobody Mentions

**It's louder.** Not concert-loud, but definitely noticeable. Browns are quieter than Blues, but still audible. Late-night coding sessions require consideration for sleeping partners.

**Regular keyboards feel terrible now.** Using my laptop keyboard feels like typing on a wet sponge. The membrane keys feel mushy and imprecise. I bought a separate mechanical keyboard for my laptop setup.

**Initial cost is real.** $89 isn't pocket change. Though considering I type 6-8 hours daily, even a small improvement in comfort and accuracy compounds quickly.

## Two Months Later: The Verdict

Worth every penny for me. The accuracy improvement alone justified the cost. Fewer typos means less time fixing mistakes, which means more time actually coding.

Would I recommend it to everyone? Depends on your usage. If you type less than two hours daily, probably not worth it. If you're at a keyboard all day like me, absolutely try one.

The Cherry MX Browns hit a good middle ground - tactile feedback without driving everyone around you crazy. Blues are too loud for an office. Reds lack the satisfying bump.

## What I'd Tell My Past Self

Skip the $200+ keyboards. A solid $80-100 board will serve you just as well. The fancy features don't matter much. Good switches and build quality do.

Try before you buy if possible. Some stores have demo units. Switch type matters more than brand. Browns worked for me; they might not for you.

Don't overthink it. If your current keyboard works fine and doesn't cause pain, you don't need this. But if you're typing all day and considering an upgrade, a mechanical keyboard is one of the few "productivity tools" that actually delivers.

My Dell keyboard lasted ten years. If this Keychron gives me even half that lifespan with better accuracy and less wrist strain, it's the easiest $89 I've spent on my setup.
    `
  },

  "tailwind-css-learning-experience": {
    title: "Three Months of Tailwind CSS: What Nobody Tells You",
    description: "Everyone said Tailwind would speed up development. Week one was chaos with utility class overload. Week twelve? I can't imagine going back to writing custom CSS.",
    author: "Sarah Chen",
    date: "2024-12-15",
    readTime: "7 min read",
    keywords: "Tailwind CSS, web development, CSS framework, frontend development, utility-first CSS",
    content: `
I spent three years writing custom CSS. Components had their own stylesheets. Everything was organized, maintainable, and... slow. Really slow.

Every new component meant creating a new CSS file, thinking up class names, writing media queries, and then inevitably debugging specificity issues. A senior dev suggested Tailwind. I was skeptical.

## Week One: HTML Soup

My first component looked like this:

\`\`\`html

\`\`\`

Twenty utility classes on one div. It felt wrong. Messy. Like I was doing everything backwards. Where's the separation of concerns? Where's the maintainability?

I kept opening my old CSS files, wanting to just write normal styles. Everything took longer. I questioned why anyone would choose this workflow.

## Week Two: The First Click

I needed to make that component responsive. In my old workflow, this meant:
1. Switch to the CSS file
2. Add media queries
3. Test each breakpoint
4. Fix issues
5. Repeat

With Tailwind, I added \`md:flex-row lg:p-6\` and it worked. No file switching. No hunting for the right media query. The responsive behavior lived right next to the element it affected.

That was the first moment I thought "okay, maybe this has something going for it."

## Week Three: No More Naming Things

Naming CSS classes is surprisingly hard. Is it \`.card\` or \`.panel\`? Is it \`.user-profile\` or \`.profile-user\`? Does this need BEM? Should it be \`.card__header\` or \`.card-header\`?

With Tailwind, that mental overhead disappeared. Need padding? Add \`p-4\`. Need it bigger on desktop? Add \`lg:p-8\`. No naming required.

I stopped spending ten minutes debating whether something should be called \`.notification\` or \`.alert\`. Just style it and move on.

## The Moment It Clicked (Week 4)

I needed to quickly prototype a landing page. Normally this would mean:
- Create HTML structure
- Create CSS file
- Write base styles
- Add responsive styles
- Debug layout issues
- Make changes based on feedback
- Update both HTML and CSS

With Tailwind, I built the entire page without leaving the HTML file. Changes were instant. Client wants more padding? Change \`p-4\` to \`p-6\`. Different color? Swap \`bg-blue-500\` for \`bg-purple-500\`.

The entire landing page took 90 minutes instead of a day. That's when I stopped being skeptical.

## What Actually Improved

**Speed:** I'm genuinely 3-4x faster now. Building a component that used to take an hour takes 15-20 minutes.

**Consistency:** The design system is built in. Everything uses the same spacing scale, the same colors, the same sizing. No more \`padding: 13px\` scattered throughout your CSS.

**Mobile-first is effortless:** Adding \`md:\` or \`lg:\` prefixes is so much easier than writing media queries. I actually make things responsive now instead of treating it as an afterthought.

**No dead CSS:** With custom CSS, I'd delete a component but forget to delete the styles. With Tailwind's purge feature, unused styles automatically get removed.

**File size:** My CSS bundle went from 124KB to 8KB. Tailwind only includes the utilities you actually use.

## The Real Downsides

**The learning curve is real:** You need to memorize utility classes. Is it \`items-center\` or \`align-center\`? Is it \`justify-between\` or \`space-between\`? First few weeks, I had the docs open constantly.

**Long class strings look messy:** A complex component can have 30+ utility classes. It looks chaotic. Some people never get past this mental hurdle.

**Custom designs take more work:** If you need something truly unique that doesn't fit Tailwind's system, you're fighting the framework. Sometimes you still need custom CSS.

**Your HTML files get bigger:** All those utility classes add up. Your JSX files can feel cluttered.

## Three Months In: My Honest Take

I'm not going back. The speed improvement alone justifies the switch. I'm shipping features faster, and the code feels more maintainable despite what my initial instincts said.

The HTML does look messier. But I'd rather have messy-looking HTML that's fast to write than clean-looking HTML with a separate CSS file that's slow to maintain.

## What I Wish Someone Had Told Me

**Use the official docs constantly:** They're actually good. The search works well. I keep them open in a tab all day.

**Don't fight the system:** If something feels hard, you're probably approaching it wrong. Tailwind has opinions. Learn them instead of fighting them.

**Components are your friend:** Yes, you'll repeat classes. That's okay. Extract common patterns into components. A Button component with shared Tailwind classes prevents repetition.

**Customize your config:** The default theme is good but customize it to match your brand. Takes 10 minutes and makes everything easier.

## Should You Learn It?

If you're building web apps or marketing sites, absolutely. The productivity boost is real. You'll be frustrated for 1-2 weeks, then you'll wonder how you lived without it.

If you're building highly custom, artistic sites where every element needs unique styling, maybe stick with custom CSS. Tailwind works best when you embrace its design system.

For me, Tailwind wasn't just learning a new framework. It was unlearning years of CSS conventions and trusting a utility-first approach. That mental shift was harder than learning the classes.

But three months in, I'm a convert. My CSS files are basically empty. My development speed is up. And I haven't written a media query in weeks. That alone is worth celebrating.
    `
  },

  "first-app-deployment-vercel": {
    title: "Deploying My First Real App: A Developer's Honest Story",
    description: "Six months of tutorials and zero deployed projects. I forced myself to ship something. Here's exactly what happened, including the bugs and the unexpected reality of real users.",
    author: "Jake Morrison",
    date: "2024-12-10",
    readTime: "8 min read",
    keywords: "web deployment, Vercel, first project, developer journey, shipping products, tutorial hell",
    content: `
I spent six months in tutorial hell. Finished three Udemy courses. Built a todo app seventeen times. Watched 50+ YouTube videos. Never deployed anything.

Every project stayed on localhost:3000. Safe, controlled, and completely useless. I knew I had to ship something real, but the fear was real. What if it breaks? What if people find bugs? What if nobody uses it?

## Breaking Out: The Decision

November 1st, I made a rule: Build something and deploy it by month's end. No more tutorials. No more "I'll do it when I'm ready." Just ship something.

I decided on a simple expense tracker. Nothing fancy. Log expenses, see where money goes each month. A tool I'd actually use.

## Building It: Two Weeks of Reality

**Week One:** Built the basic UI. Input for expenses, a list to display them, some basic categories. Used React because that's what I knew. Added Tailwind because I was tired of writing CSS.

Everything worked on my machine. I was feeling confident. Maybe too confident.

**Week Two:** Added data persistence with localStorage. Built a simple chart to visualize spending. Added categories and date filtering. The app felt functional. I convinced myself I was ready.

## Deployment Day: The 10-Minute Magic

I chose Vercel because everyone said it was easy. Created an account with my GitHub login. Imported my repository. Clicked "Deploy."

Two minutes later: "Your project is live."

That was it. No server configuration. No nginx setup. No SSL certificates to manage. Just... done.

I had a URL: https://expense-tracker-jake.vercel.app

My thing. On the internet. Real.

## Reality Hit Fast

I sent the link to three friends. Within an hour, reality struck:

**Friend 1:** "I added an expense for -$50 and it accepted it. Now my chart looks broken."

Negative numbers. I never validated for those. Spent an hour fixing it and pushing an update. Vercel auto-deployed in 2 minutes.

**Friend 2:** "Can you add a way to edit expenses? I typo'd and now I have to delete and re-add."

Features I thought were nice-to-have became immediately obvious as essential. Added edit functionality that evening.

**Friend 3:** "This is cool! Can I export my data?"

Export? I hadn't even thought about that. People actually wanted to use this beyond just looking at it.

## The First Week: Learning from Real Users

**Discovery 1: People use things differently than you imagine.**

I assumed people would add expenses as they happened. One user batch-entered an entire month of receipts. 47 expenses at once. The UI wasn't designed for that. The list became unusable.

Fixed it by adding pagination and bulk import.

**Discovery 2: Mobile is everything.**

Most people accessed it on their phones. My layout worked great on desktop. On mobile? Text was tiny. Buttons were hard to tap. The chart was unreadable.

Spent two days making it actually responsive. "Works on mobile" and "designed for mobile" are very different things.

**Discovery 3: Bugs appear in production.**

Data would randomly not save for some users. Spent hours debugging. Turns out Safari handles localStorage differently than Chrome. Added better error handling and a backup to IndexedDB.

## The Unexpected Benefits

**Vercel Analytics showed real usage.**

Not much - maybe 20 visits in the first week. But those were real people clicking around something I made. That felt different than localhost traffic (which was just me).

**Feedback loops became instant.**

User reports bug → I fix it → Push to GitHub → Auto-deploys in 2 minutes → User confirms fix.

Compare this to my tutorial projects that lived forever on my laptop.

**I learned more in one week than six months of tutorials.**

Tutorials don't teach you how to handle negative numbers in a form. Or how Safari treats localStorage. Or why your chart breaks on mobile. Real problems from real usage teach you these things.

## Month Two: Actual Improvements

With the app live and a handful of users, I could prioritize what actually mattered:

- Added dark mode (multiple people requested it)
- Built a monthly comparison view
- Added expense categories with icons
- Improved the mobile experience significantly
- Added data export to CSV

Every feature came from actual user feedback, not from me guessing what people might want.

## What I Learned About Shipping

**Perfect is the enemy of done.**

My app wasn't perfect on launch day. It had bugs. It was missing features. But it worked well enough for people to use and provide feedback. That feedback made it better faster than me guessing in isolation.

**Real users find real problems.**

You can test on your machine all day. Real users will use your app in ways you never imagined and break things you thought were solid.

**Deployment should be easy.**

Vercel made deployment so easy that I pushed updates constantly. Fixed a bug at 10 PM? Push it and it's live in 2 minutes. No deployment ceremony. No staging servers. Just push and ship.

**Nobody cares about your code quality as much as you do.**

I was stressed about code organization, component structure, and whether my folder naming made sense. Users cared about one thing: does it solve their problem? Everything else was in my head.

## The Numbers (One Month Later)

- 43 total users
- 847 expenses logged
- 12 bugs reported and fixed
- 6 feature requests implemented
- 0 regrets about shipping early

Not massive numbers. But 43 real people using something I built feels different than 0 people using my perfect localhost project.

## Advice for Other Tutorial Prisoners

**Just ship something.** It doesn't need to be revolutionary. It doesn't need to be perfectly coded. It needs to work well enough for one person (you) to find it useful.

**Use free tools.** Vercel is free for hobby projects. So is GitHub. So is basically everything you need to ship a basic app. Remove cost as an excuse.

**Set a deadline.** "When I'm ready" means never. Give yourself 30 days max to build and ship something. Ship before you're ready.

**Start with something you'd use.** I built an expense tracker because I wanted one. That meant I was both developer and user. Immediate feedback loop.

**Embrace the bugs.** They will happen. You will fix them. That's how you learn. A bug in production is more valuable than perfection on localhost.

## Three Months Later

My expense tracker isn't making money. It won't go viral. It's not going to change the world.

But I learned more from building and shipping it than from six months of tutorials. I understand deployment now. I understand user feedback. I understand that shipping is a skill separate from coding.

Most importantly, I'm not scared anymore. My next project won't sit on localhost for months. I'll build for two weeks and ship. Because shipping is where the real learning happens.

The difference between a developer and someone who took a course? Deployed projects. Even simple ones.

Stop learning. Start shipping.
    `
  }
}

// Helper function to get all article slugs
export function getAllSlugs() {
  return Object.keys(articles)
}

// Helper function to get article by slug
export function getArticle(slug) {
  return articles[slug]
}
