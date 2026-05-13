---
name: latex-formatting
description: Format and normalize LaTeX math expressions in Markdown files. Use this skill whenever the user writes math, edits formulas, or asks to check/format LaTeX in Markdown notes, blog posts, or technical documents. Applies when working with any `.md` file containing `$` math delimiters, or when the user asks about LaTeX syntax, math formatting, or formula styling.
---

# LaTeX Math Formatting for Markdown

Apply these rules whenever you write or edit LaTeX math inside Markdown. When reviewing, point out violations and show corrected versions. When generating new formulas, apply all rules by default.

## 1. Delimiters (定界符)

### 1.1 Inline formulas use `$...$`

Always use `$...$` for inline math. Never use `\(...\)`.

Correct: 令 $x \in \mathbb{R}$ 为实数。
Wrong:   令 \(x \in \mathbb{R}\) 为实数。

### 1.2 Display formulas use `$$...$$`

Always use `$$...$$` for block-level math. Never use `\[...\]`.

Correct:
```markdown
$$
\int_{0}^{\infty} \mathrm{e}^{-x^2} \, \mathrm{d}x = \frac{\sqrt{\pi}}{2}
$$
```

Wrong:
```markdown
\[
\int_{0}^{\infty} \mathrm{e}^{-x^2} \, \mathrm{d}x = \frac{\sqrt{\pi}}{2}
\]
```

Important: in Markdown, `$$...$$` must have blank lines before and after the block to render correctly.

## 2. Brackets (括号)

### 2.1 All brackets use `\left` `\right`

Every pair of brackets in formulas should carry `\left` and `\right`, including `()`, `[]`, `\{\}`, `||`, `\langle\rangle`, and `\lvert\rvert`.

Correct:
$$
\left( \sum_{i=1}^{n} x_i \right)^2
$$

Wrong:
$$
( \sum_{i=1}^{n} x_i )^2
$$

### 2.2 When only one side needs a bracket

Use `\left.` or `\right.` as invisible brackets, paired with the visible side.

Correct:
$$
\left. \frac{\mathrm{d}f}{\mathrm{d}x} \right|_{x=0}
$$

### 2.3 When nesting, keep `\left` `\right` on each pair

Correct:
$$
\left[ \left( x + 1 \right) \left( x - 1 \right) \right]
$$

## 3. Matrices and Column Vectors (矩阵与列向量)

### 3.1 Use `bmatrix` for all matrices and column vectors

Always use the `bmatrix` environment (square brackets). Don't use `matrix`, `pmatrix`, or raw `\begin{array}`.

Correct:
$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

Wrong:
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

### 3.2 Column vectors are single-column `bmatrix`

Correct:
$$
\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}
$$

Wrong:
$$
\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}
$$

### 3.3 Avoid `\bmatrix` shorthand

Even if a macro `\bmatrix` exists locally, expand it to the standard `\begin{bmatrix} ... \end{bmatrix}` environment for portability across different TeX engines and Markdown renderers.

## 4. Math Constants, Number Fields, and Operators (数学常数、数域与算子)

### 4.0 Number fields use `\mathbb`

All number field symbols must be wrapped in `\mathbb{}`:

| 数域     | Write             | Not         |
| -------- | ----------------- | ----------- |
| 实数     | `\mathbb{R}`      | `R`         |
| 自然数   | `\mathbb{N}`      | `N`         |
| 整数     | `\mathbb{Z}`      | `Z`         |
| 有理数   | `\mathbb{Q}`      | `Q`         |
| 复数     | `\mathbb{C}`      | `C`         |

Correct: 令 $x \in \mathbb{R}$，$z \in \mathbb{C}$。
Wrong:   令 $x \in R$，$z \in C$。

### 4.1 Constants use `\mathrm{}`

Put these in `\mathrm{}` to distinguish them from italic variables:

| Constant  | Write       | Not      |
| --------- | ----------- | -------- |
| 微分      | `\mathrm{d}`   | `d`      |
| 欧拉数    | `\mathrm{e}`   | `e`      |
| 虚数单位  | `\mathrm{i}`   | `i`      |

Note: `\pi`（圆周率）is already upright in LaTeX by default, so `\pi` alone is fine — no `\mathrm{}` needed.

Correct:
$$
\int f(x) \, \mathrm{d}x, \quad \mathrm{e}^{\mathrm{i} \pi} + 1 = 0
$$

Wrong:
$$
\int f(x) dx, \quad e^{i \pi} + 1 = 0
$$

### 4.2 Standard functions use built-in commands

`\sin`, `\cos`, `\tan`, `\log`, `\ln`, `\exp`, `\lim`, `\max`, `\min`, `\sup`, `\inf`, `\det`, `\gcd`, `\dim`, `\arg`, `\ker` — these are pre-defined in LaTeX and need no wrapping.

Correct:
$$
\sin x, \quad \log x, \quad \lim_{n \to \infty}
$$

Wrong:
$$
sin x, \quad log x, \quad lim_{n \to \infty}
$$

### 4.3 Named vectors and matrices use `\mathbf`

Bold upright for named vectors and matrices.

Correct:
$$
\mathbf{A} \mathbf{x} = \mathbf{b}
$$

### 4.4 Vector and matrix norms use `\left\|` `\right\|`

Use `\left\| ... \right\|` for all norms, including vector magnitude and matrix norms. Don't use plain `||`, `\|`, or `\lVert`/`\rVert` without `\left` `\right`.

Correct:
$$
\left\| \mathbf{x} \right\|, \quad \left\| \mathbf{A} \right\|_2
$$

Wrong:
$$
|| \mathbf{x} ||, \quad \| \mathbf{A} \|_2
$$

For subscripted norms like Frobenius norm or $\ell^p$ norm, keep the subscript outside:

Correct:
$$
\left\| \mathbf{A} \right\|_F, \quad \left\| \mathbf{x} \right\|_p
$$

## 5. Long Formula Line Breaks & Alignment (长公式换行与对齐)

### 5.1 Use `aligned` inside display math

For multi-line formulas, wrap the content in `\begin{aligned}` inside `$$...$$`.

Correct:
$$
\begin{aligned}
f(x) &= (x + 1)^2 \\
     &= x^2 + 2x + 1
\end{aligned}
$$

### 5.2 Align at `=` or other relation symbols

Use `&` before the alignment point:

Correct:
$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0
\end{aligned}
$$

### 5.3 Long single expressions: break before binary operators

When splitting a long expression, put the `+`, `-`, `\times` etc. at the start of the new line (after `&`), not at the end of the previous line. This makes the continuation visually clear.

Correct:
$$
\begin{aligned}
S &= a + b + c \\
  &\quad + d + e + f
\end{aligned}
$$

## 6. Punctuation in Math Mode

When a formula is part of a sentence, include trailing punctuation (commas, periods) inside math mode so the spacing is correct.

Correct: 令 $f(x) = x^2 + 1$，则 $f(0) = 1$。

## 7. Spacing Inside Formulas

### 7.1 Use `\,` for thin spaces where needed

Add `\,` between integrand and `\mathrm{d}`:

Correct:
$$
\int_{0}^{1} f(x) \, \mathrm{d}x
$$

### 7.2 Don't add spaces inside braces

Correct: `\sqrt{x}` not `\sqrt{ x }`

## Workflow

When asked to check or format LaTeX in Markdown:

1. Scan for delimiter violations (`\(` → `$`, `\[` → `$$`).
2. Check every bracket pair and every norm (`||`) for missing `\left` `\right`.
3. Verify matrices use `bmatrix`, column vectors use single-column `bmatrix`.
4. Check that `d`, `e`, `i` as constants are in `\mathrm{}`, and number fields (`R`, `N`, `Z`, `Q`, `C`) are in `\mathbb{}`.
5. Check that `sin`, `cos`, `log` etc. use the backslash command form.
6. For long formulas, ensure reasonable line breaks with `aligned`.
7. For violations found, show original and corrected versions side by side. Optionally apply fixes directly to the file.
