---
name: chinese-copywriting
description: Apply Chinese copywriting best practices (中文文案排版指北) when writing or editing Chinese text. Use this skill whenever the user asks to write, review, format, or polish Chinese prose — README docs, blog posts, website copy, technical articles, UI strings, emails, or any mixed CJK-Latin content. Automatically checks and corrects spacing, punctuation, fullwidth/halfwidth characters, and proper noun formatting according to the sparanoid/chinese-copywriting-guidelines specification.
---

# Chinese Copywriting Guidelines (中文文案排版指北)

Apply the rules below whenever you write or edit Chinese text. For any Chinese output, proactively follow these rules without being asked. When reviewing user-provided Chinese text, point out violations and offer corrected versions.

## 1. Spacing (空格)

### 1.1 Chinese + English: add spaces between them

When Chinese and English words appear next to each other, add a space on each side of the English segment.

Correct: 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。
Wrong:   在LeanCloud上，数据存储是围绕`AVObject`进行的。

Exception: product names that officially use no spaces, like "豆瓣FM" — follow the brand's own formatting.

### 1.2 Chinese + numbers: add spaces between them

Numbers and Chinese text are separate scripts — add spaces between them, just like with English.

Correct: 今天出去买菜花了 5000 元。
Wrong:   今天出去买菜花了5000元。

### 1.3 Numbers + units: add a space

Add a space between a number and its unit, except for degrees and percentages.

Correct:      我家光纤入户宽带有 10 Gbps，SSD 一共有 20 TB。
Exception:    角度为 90° 的角，新 MacBook Pro 有 15% 的 CPU 性能提升。

### 1.4 No space after fullwidth punctuation

Fullwidth punctuation marks (`，`、`。`、`！`、`？`、`；`、`：`、`」` etc.) already carry built-in visual spacing. Do not add a space after them before the next character.

Correct: 刚刚买了一部 iPhone，好开心！
Wrong:   刚刚买了一部 iPhone， 好开心！

## 2. Punctuation (标点符号)

### 2.1 Do not repeat punctuation marks

Even where certain style guides allow multiple punctuation marks, don't do it — it looks unprofessional.

Correct: 德国队竟然战胜了巴西队！
Wrong:   德国队竟然战胜了巴西队！！!
Wrong:   他说的都是真的？！？！？！

### 2.2 Fullwidth punctuation for Chinese text

In Chinese prose, always use fullwidth punctuation: `，` not `,`, `。` not `.`, `！` not `!`, `？` not `?`, `：` not `:`, `；` not `;`, `（`/`）` not `(`/`)`, `「`/`」` not `"`/`'`.

Correct: 嗨！你知道吗？今天前台的小妹跟我说「喵」了哎！
Wrong:   嗨! 你知道吗? 今天前台的小妹跟我说"喵"了哎!

The one exception: when an entire English sentence or proper name appears embedded in Chinese, keep its punctuation halfwidth.

Correct: 「Stay hungry, stay foolish.」是乔布斯的名言。
Correct: 我最喜欢的书是 _Hackers & Painters: Big Ideas from the Computer Age_。

### 2.3 Corner brackets (直角引號) for Simplified Chinese

Use `「」` and `『』` (corner brackets) instead of `""` and `''` in Chinese text.

Preferred:   「老师，『有条不紊』的『紊』是什么意思？」
Avoid:        "老师，'有条不紊'的'紊'是什么意思？"

### 2.4 Add spaces around hyperlinks in Chinese text

When a hyperlink appears within Chinese prose, add spaces around the entire link markup.

Preferred:   请 [提交一个 issue](#) 并分配给相关同事。
Avoid:       请[提交一个 issue](#)并分配给相关同事。

## 3. Fullwidth vs. Halfwidth (全形和半形)

### 3.1 Numbers use halfwidth

Write numbers as `1000`, never as `１０００`. Fullwidth digits are wrong outside of specialized design layouts.

Correct: 这件蛋糕只卖 1000 元。
Wrong:   这件蛋糕只卖 １０００ 元。

### 3.2 English letters and symbols use halfwidth

All Latin characters, digits, and common programming symbols (`@`, `#`, `/`, `.`, etc.) remain halfwidth inside Chinese text — don't artificially convert them to fullwidth.

## 4. Nouns & Capitalization (名词)

### 4.1 Use correct capitalization for proper nouns

Respect each brand's official casing. Don't blindly lowercase or uppercase.

Correct: 使用 GitHub 登录。
Correct: 我们的客户包括 GitHub、Foursquare、Microsoft Corporation、Google、Facebook, Inc.
Wrong:   使用 github 登录。
Wrong:   我们的客户包括 GITHUB、foursquare、microsoft corporation。

### 4.2 Avoid inauthentic abbreviations

Use standard, recognizable terms. Don't invent ad-hoc abbreviations.

Correct: 我们需要一位熟悉 TypeScript、HTML5，至少理解一种框架（如 React、Next.js）的前端开发者。
Wrong:   我们需要一位熟悉 Ts、h5，至少理解一种框架（如 RJS、nextjs）的前端开发者。

## Workflow

When asked to check or format Chinese text:

1. Scan the text for each rule category above (spacing, punctuation, fullwidth/halfwidth, nouns).
2. For violations found, show the original and corrected versions side by side.
3. If unsure about a product name's official casing, note it rather than guessing.
4. When generating new Chinese text from scratch, apply all rules by default — don't wait to be asked.
