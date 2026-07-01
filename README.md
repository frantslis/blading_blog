# Session Log — Rollerblading Blog

A zero-build-tool static blog. No CMS, no npm, no Jekyll. Five files total.

## Files

| File | What it's for |
|---|---|
| `posts.js` | **The only file you'll edit regularly.** One JS object per post. |
| `index.html` | Homepage — grid of all posts, built automatically from `posts.js`. |
| `post.html` | Template for a single post page (reused for every entry). |
| `script.js` | Rendering logic. You shouldn't need to touch this. |
| `styles.css` | All visual design. Edit if you want to tweak colors/fonts/layout. |

## How to add a new post

1. Open `posts.js`.
2. Copy one of the existing post objects.
3. Paste it at the **top** of the `POSTS` array (newest first isn't required — the site sorts by date automatically, but keeping it tidy helps you).
4. Fill in the fields:
   - `id` — unique slug, no spaces, e.g. `"backslide-to-fakie"`
   - `type` — `"video"`, `"photo"`, or `"text"`
   - `youtubeId` — just the ID from the YouTube URL (the part after `v=`)
   - `images` — direct image URLs (see "hosting photos" below)
   - `body` — array of paragraph strings
5. Save, commit, push. That's it — no build step.

## Hosting photos

Since this is a static site with no backend, image files need to live somewhere with a direct URL. Easiest options:

- **Your own repo**: put images in an `/images` folder in this project, reference them as `"images/my-photo.jpg"`.
- **Free image host**: imgur, Cloudinary, etc. — paste the direct image link.

## Deploying

**GitHub Pages**
1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → set source to your main branch, root folder.
3. Site goes live at `https://yourusername.github.io/reponame/`.

**Netlify**
1. Drag and drop this folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the GitHub repo.
2. Done — no build command needed, no output directory setting needed (it's already static).

## Customizing the design

All colors, fonts, and layout live in `styles.css` under the `:root` block at the top for the color/font tokens — change those five variables and the whole site re-themes itself. Fonts are loaded from Google Fonts in the `<head>` of `index.html` and `post.html` if you want to swap typefaces.
