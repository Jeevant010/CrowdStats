### Adding an icon

1. Add the SVG file to the appropriate folder
2. Add a `createIconic` component to the `index.ts` in that folder for that icon (iconName should be lowercase)
3. run `nvm use`
4. run `npx nx run iconic:build` to update the sprite.svg
5. run `npx nx run iconic:test -u` to update the snapshot
6. Open a PR
7. After merge, release (see below)

### Updating an icon

1. Update SVG file with new data
2. run `npx nx run iconic:build` to update the sprite.svg
3. Open a PR
4. After merge Release (see below), which will update the sprite.svg

_It will take up to 24 hours for new icon to be seen due to cache_

### Releasing

This process updates Dynamic's sprite.svg
