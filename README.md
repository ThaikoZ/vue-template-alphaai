# wordpress-shop

Monorepo for a Vue 3 + TypeScript shop, set up with Vite.

## Scripts

- `dev`: Runs the development server with Vite.
- `build`: Type-checks with vue-tsc and builds the project with Vite.
- `preview`: Previews the production build.

## Dependencies

Includes:

- [Vue 3](https://vuejs.org/) (with `<script setup>` syntax)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/) with persisted state plugin
- [Vue Query](https://tanstack.com/query/latest/docs/framework/vue/overview)
- [Vee Validate](https://vee-validate.logaretm.com/) & [Yup](https://github.com/jquense/yup)
- [Vue I18n](https://vue-i18n.intlify.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (via @tailwindcss/vite)
- [motion-v](https://motion.vueuse.org/)
- Day.js

With types, DX tooling (auto-import, vue-tsc, TypeScript), and recommended settings.

See `package.json` for full dependency and script information.
