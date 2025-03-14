﻿### Competitive programming stats
Hello, I am Iliass Foukhar. I am delighted to present to you my first published NPM package built using Javascript.

#### What is CP_STAT ?
Basically, it is a javascript module that utilises API Requests & WebScrapping to get data from diverse competitive programming platforms about a specific user.
You could use it to dynamically pull your performances into your portfolio.

### Platforms supported

- Codeforces
- Atcoder
- Leetcode

### Dependencies

- axios
- cheerio
- dotenv
- request
- request-promise

### How to use

Firstly, you have to install the dependencies needed. To do that, run these command lines:

`$ npm install axios cheerio dotenv request request-promise`

Then to install this package use:

`$ npm install cp_stat`

Then if you want to use a specific function. You'll just have to import the needed function in your javascript project from cp_stat

Also, you have to add environnement variables in your projects. to do so, you will just have to create a file called '.env' and then add this text to it:

```bash
CODEFORCES_API_ENDPOINT=https://codeforces.com/api/
CODEFORCES_API_HANDLE=Your handle
CODEFORCES_API_PROFILE=https://codeforces.com/profile/

LEETCODE_API=https://leetcode-stats-api.herokuapp.com/
LEETCODE_HANDLE=Your handle

ATCODER=https://atcoder.jp/users/
ATCODER_HANDLE=Your handle

```

If you have any suggestions, feedback, questions or issues about this project. feel free to contact me.

Thank you
