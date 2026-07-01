/*
  ============================================================
  YOUR POSTS LIVE HERE.
  To add a new session: copy a block below, paste it at the
  TOP of the array, edit the fields, save, commit, push.
  That's the entire workflow.
  ============================================================

  FIELD GUIDE:
  id        — unique, no spaces (used in the URL: post.html?id=your-id)
  title     — session name, keep it short and punchy
  date      — "YYYY-MM-DD"
  spot      — where it happened (skatepark, street spot, city — whatever)
  trick     — the trick/line tag, shows as a stamped label (optional, "" to skip)
  type      — "video" | "photo" | "text"
  youtubeId — only if type is "video". Just the ID from the YouTube URL
              e.g. youtube.com/watch?v=dQw4w9WgXcQ -> "dQw4w9WgXcQ"
  images    — array of image URLs, only used if type is "photo"
              (upload images anywhere — imgur, your repo's /images folder, etc.
              and paste the direct link)
  body      — array of paragraphs (each string = one paragraph). Plain text only.
*/

const POSTS = [
  {
    id: "00003",
    title: "Back to flat setup on mesmers",
    date: "2026-07-01",
    spot: "VDNG, Kyiv",
    trick: "soul, mizu, p-star, frontside",
    type: "video",
    youtubeId: "Tc62dynb2eaDZYhu",
    images: [],
    body: [
      "30C degrees morning session. Back to flat setup on mesmers. Glad to enjoy my new Plastic Pushers t-shirt. Skated on rails and ledges."
    ]
  },
  {
    id: "00002",
    title: "New Frame Setup — First Impressions",
    date: "2026-06-18",
    spot: "Home setup",
    trick: "",
    type: "photo",
    youtubeId: "",
    images: [
      "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=1200&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
    ],
    body: [
      "Swapped to a shorter frame this week — less swing weight, should help with spins. Took a few photos of the setup before the first session so I remember what stock felt like.",
      "First impressions after a short roll around the block: noticeably snappier, but I need to relearn my grind balance since the wheelbase changed."
    ]
  },
  {
    id: "why-i-started",
    title: "Why I Started This Log",
    date: "2026-06-10",
    spot: "",
    trick: "",
    type: "text",
    youtubeId: "",
    images: [],
    body: [
      "I've been skating aggressive inline for a while now, mostly without documenting any of it. This is me starting to actually track the process instead of just the highlight clips.",
      "Expect a lot of failed attempts here, not just the clean ones. That's most of what skating actually is."
    ]
  }
];
