# Zhaoyang Liu Homepage

This repository contains the source for [https://zhaoyangliu12.github.io](https://zhaoyangliu12.github.io), built from the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) Jekyll template.

## Local Preview

1. Install Ruby if it is not already available.
1. Bootstrap the Bundler version required by `Gemfile.lock` into the project directory:
   ```bash
   HOME=$PWD GEM_HOME=$PWD/.gem GEM_PATH=$PWD/.gem gem install bundler -v 2.2.19 --no-document
   ```
1. Install dependencies locally:
   ```bash
   PATH="$PWD/.gem/bin:$PATH" HOME=$PWD GEM_HOME=$PWD/.gem GEM_PATH=$PWD/.gem bundle _2.2.19_ config set --local path vendor/bundle
   PATH="$PWD/.gem/bin:$PATH" HOME=$PWD GEM_HOME=$PWD/.gem GEM_PATH=$PWD/.gem bundle _2.2.19_ install
   ```
1. Start the local preview server:
   ```bash
   bash run_server.sh
   ```
1. Open [http://127.0.0.1:4000](http://127.0.0.1:4000).

## GitHub Pages Deployment

1. Create the repository `zhaoyangliu12/zhaoyangliu12.github.io` on GitHub if it does not exist yet.
1. Push the contents of this directory to the `main` branch of that repository.
1. In the GitHub repository, enable **Settings -> Pages** and serve from the default branch if GitHub does not detect it automatically.
1. Enable **Actions** for the repository.
1. Add the repository secret `GOOGLE_SCHOLAR_ID` with value `btgwZosAAAAJ`.
1. Wait for the `google_scholar_crawler` workflow to generate the `google-scholar-stats` branch used by the citation badge on the homepage.

## Content Notes

- Main site metadata lives in `_config.yml`.
- One-page homepage content lives in `_pages/about.md`.
- Top navigation lives in `_data/navigation.yml`.
- The downloadable CV is stored at `files/Zhaoyang_Liu_CV.pdf`.

## Credits

- Original template: [RayeRen/acad-homepage.github.io](https://github.com/RayeRen/acad-homepage.github.io)
- Theme influences: [mmistakes/minimal-mistakes](https://github.com/mmistakes/minimal-mistakes), [academicpages/academicpages.github.io](https://github.com/academicpages/academicpages.github.io)
