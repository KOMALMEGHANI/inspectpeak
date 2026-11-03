<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules

- Shared site chrome (Header, Footer) is mounted in `src/routes/__root.tsx` around `<Outlet />` — do not add per-route headers/footers or a `_app` layout.
- The mobile menu panel must stay a sibling of `<header>`, not a child: the header's `backdrop-filter` makes it a containing block and collapses a fixed child panel to 1px.

## Brand rules

- Brand colors come from the client's IP-monogram logo: charcoal `#151E25`, brand red `#C50502`, silver grey, white. In `src/styles.css` the `navy` tokens hold the charcoal and the `amber` tokens hold the brand red (names kept for class stability).
- The logo asset is CDN-hosted via `src/assets/inspectpeak-logo.png.asset.json`; on dark backgrounds it sits on a white chip (see `Logo.tsx` variant="light"). Favicon is `public/favicon.png`.
