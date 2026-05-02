---
layout: post
title: SymPy 的简单使用
date: 2024-02-13 23:03:41
tags: [Python, SymPy]
categories: 工具
description: 简单介绍 SymPy 库
---

## `SymPy` 库简介

[SymPy](https://www.sympy.org/en/index.html) 是一个用于符号数学的 `Python` 库。

可以用来代替 Mathematica 和 Maple 等数学软件，同时可以结合 `Python` 其他库来拓展功能。

## 加载 `SymPy` 库

使用如下代码加载 `SymPy` 库：

```python
import sympy as sp
sp.init_printing()
```

当然，你要先使用 `pip` 安装 `sympy` 库：

```bash
pip install sympy
```

> 注意：调用 `init_printing()` 可能会使代码执行时间过长甚至出现卡死的情况，可以不调用该函数。

## 四则运算

{% tabs SymPy四则运算 %}
<!-- tab 加法 -->
$$
3 + 2
$$

```python
3 + 2
```
<!-- endtab -->

<!-- tab 减法 -->
$$
3 - 2
$$

```python
3 - 2
```
<!-- endtab -->

<!-- tab 乘法 -->
$$
3 * 2
$$

```python
3 * 2
```
<!-- endtab -->

<!-- tab 除法 -->
$$
\frac{3}{2}
$$

```python
3 / 2
```
<!-- endtab -->
{% endtabs %}

使用如下代码处理分数：

{% tabs SymPy分数 %}
<!-- tab 分数 -->
$$
\frac{3}{2}
$$

```python
sp.Rational(3, 2)
```
<!-- endtab -->

<!-- tab 分母 -->
$$
\frac{3}{2}
$$

```python
sp.denom(sp.Rational(3, 2))
```
<!-- endtab -->

<!-- tab 分子 -->
$$
\frac{3}{2}
$$

```python
sp.numer(sp.Rational(3, 2))
```
<!-- endtab -->
{% endtabs %}

## 幂、阶乘

{% tabs SymPy幂和阶乘 %}
<!-- tab 幂 -->
$$
3^2
$$

```python
3 ** 2
```
<!-- endtab -->

<!-- tab 阶乘 -->
$$
50!
$$

```python
sp.factorial(50)
```
<!-- endtab -->

<!-- tab 双阶乘 -->
$$
50!!
$$

```python
sp.factorial2(50)
```
<!-- endtab -->

<!-- tab 平方根 -->
$$
\sqrt{50}
$$

```python
sp.sqrt(50)
```
<!-- endtab -->
{% endtabs %}

## 常数

{% tabs SymPy中的常数 %}
<!-- tab 圆周率 -->
$$
\pi
$$

```python
sp.pi
```
<!-- endtab -->

<!-- tab 自然对数的底数 -->
$$
\mathrm{e}
$$

```python
sp.E
```
<!-- endtab -->

<!-- tab 无穷大 -->
$$
\infty
$$

```python
sp.oo
```
<!-- endtab -->
{% endtabs %}

## 复数

{% tabs 复数 %}
<!-- tab 虚数单位 -->
$$
\mathrm{i}
$$

```python
sp.I
```
<!-- endtab -->

<!-- tab 共轭复数 -->
$$
\overline{2 + 3\mathrm{i}}
$$

```python
sp.conjugate(2 + 3 * sp.I)
```
<!-- endtab -->

<!-- tab 实部 -->
$$
\mathrm{Re}\left(2 + 3\mathrm{i}\right)
$$

```python
sp.re(2 + sp.I * 3)
```
<!-- endtab -->

<!-- tab 虚部 -->
$$
\mathrm{Im}\left(2 + 3\mathrm{i}\right)
$$

```python
sp.im(2 + sp.I * 3)
```
<!-- endtab -->

<!-- tab 模长 -->
$$
\left|2 + 3\mathrm{i}\right|
$$

```python
sp.Abs(2 + sp.I * 3)
```
<!-- endtab -->

<!-- tab 幅角 -->
$$
\mathrm{Arg} \left(2 + 3\mathrm{i}\right)
$$

```python
sp.arg(2 + sp.I * 3)
```
<!-- endtab -->
{% endtabs %}

## 变量

### 声明变量

```python
a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, r, s, t, u, v, w, x, y, z = sp.symbols('a b c d e f g h i j k l m n o p r s t u v w x y z')
A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, U, V, W, X, Y, Z = sp.symbols('A B C D E F G H I J K L M N O P R S T U V W X Y Z')
alpha, beta, gamma, delta, epsilon, zeta, eta, theta, iota, kappa, lamda, mu, nu, xi, omicron, pi, rho, sigma, tau, upsilon, phi, chi, psi, omega = sp.symbols('alpha beta gamma delta epsilon zeta eta theta iota kappa lamda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega')
Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa, Lamda, Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi, Omega = sp.symbols('Alpha Beta Gamma Delta Epsilon Zeta Eta Theta Iota Kappa Lamda Mu Nu Xi Omicron Pi Rho Sigma Tau Upsilon Phi Chi Psi Omega')
```

### 算术运算

$$
x+y+x-y
$$

```Python
x + y + x - y
```

$$
\left(x+y\right)^2
$$

```python
(x + y) ** 2
```

## 代数运算

### 质因数分解

$$
10!=2^8 \cdot 3^4 \cdot 5^2 \cdot 7
$$

```python
sp.factorint(sp.factorial(10))
```

### 因式分解

$$
x^2 -4x+3 = \left(x-3\right)\left(x-1\right)
$$

```python
sp.factor(x ** 2 - 4 * x + 3)
```

[不可约多项式](https://en.wikipedia.org/wiki/Irreducible_polynomial)在整数上的因式分解：

$$
\left(1+x-x^2\right)\left(1-x-x^2\right)=\left(x^2-x-1\right)\left(x^2+x-1\right)
$$

```python
sp.factor((1 + x - x ** 2) * (1 - x - x ** 2))
```

[分圆多项式](https://en.wikipedia.org/wiki/Cyclotomic_polynomial)的不可约因式分解（模 5）：

```python
sp.factor((1 + x - x ** 2) * (1 - x - x ** 2), modulus=5)
```

### 化简

$$
\frac{x+xy}{x}=y+1
$$

```python
sp.simplify((x + x * y) / x)
```

$$
\frac{\sin x}{\cos x} = \tan x
$$

```python
sp.trigsimp(sp.sin(x) / sp.cos(x))
```

$$
\sin^2x + \cos^2x = 1
$$

```python
sp.trigsimp((sp.sin(a)) ** 2 + (sp.cos(a)) ** 2)
```

$$
\sinh^2a+\cosh^2a = \cosh 2a
$$

```python
sp.trigsimp((sp.sinh(a)) ** 2 + (sp.cosh(a)) ** 2)
```

### 部分分式分解

$$
\frac{1}{x^2-4x+3} = \frac{1}{2\left(x-3\right)} - \frac{1}{2\left(x-1\right)}
$$

```python
sp.apart(1 / (x ** 2 - 4 * x + 3))
```

$$
\frac{1}{x^6-1}=\frac{x-2}{6\left(x^2-x+1\right)}-\frac{x+2}{6\left(x^2+x+1\right)}-\frac{1}{6\left(x+1\right)}+\frac{1}{6\left(x-1\right)}
$$

```python
sp.apart(1 / (x ** 6 - 1))
```

### 展开

$$
\left(x+y\right)^6=x^6+6x^5y+15x^4y^2+20x^3y^3+15x^2y^4+6xy^5+y^6
$$

```python
sp.expand((x + y) ** 6)
```

$$
\tan\left(a+b\right)=\frac{\tan a+\tan b}{1-\tan a\tan b}
$$

```python
sp.simplify(sp.expand(sp.tan(a + b), trig=True))
```

{% note pink 'fas fa-car-crash' simple %}
注意：`trig=True` 表示展开三角函数。
{% endnote %}

### 通分

$$
\frac{2x-2}{\left(x-1\right)^2\left(x-2\right)}=\frac{2}{\left(x-2\right)\left(x-1\right)}
$$

```python
sp.simplify((2 * x - 2) / ((x - 1) ** 2 * (x - 2)))
```

$$
\frac{1}{\left(x-1\right)^2}+\frac{1}{\left(x-1\right)\left(x-2\right)}=\frac{2x-3}{\left(x-2\right)\left(x-1\right)^2}
$$

```python
sp.simplify(1 / (x - 1) ** 2 + 1 / ((x - 1) * (x - 2)))
```

### 通分展开

$$
\frac{2x-2}{\left(x-1\right)^2\left(x-2\right)}=\frac{2}{x^2-3x+2}
$$

```python
sp.cancel((2 * x - 2) / ((x - 1) ** 2 * (x - 2)))
```

$$
\frac{1}{\left(x-1\right)^2}+\frac{1}{\left(x-1\right)\left(x-2\right)}=\frac{2x-3}{x^3-4x^2+5x-2}
$$

```python
sp.cancel(1 / (x - 1) ** 2 + 1 / ((x - 1) * (x - 2)))
```

### 系数

求

$$
\left(x+y\right)^6
$$

的 $x^3$ 的系数：

```python
sp.expand((x + y) ** 6).coeff(x, 3)
```

### 代入

$$
a x^2+b x+c\left.\right|_{x=3}
$$

```python
(a * x ** 2 + b * x + c).subs(x, 3)
```

$$
ax^2+bx+c
$$

where:

$$
x=\frac{-b+\sqrt{-4ac+b^2}}{2a}
$$

```python
sp.expand((a * x ** 2 + b * x + c).subs(x, (-b + sp.sqrt(-4 * a * c + b ** 2)) / (2 * a)))
```

### 求和

$$
\sum_{x=1}^{10}x
$$

```python
sp.summation(x, (x, 1, 10))
```

$$
\sum_{x=1}^{a}x
$$

```python
sp.factor(sp.summation(x, (x, 1, a)))
```

$$
\sum_{x=1}^{a}x^3
$$

```python
sp.factor(sp.summation(x ** 3, (x, 1, a)))
```

### 求积

$$
\prod_{x=1}^{10}x
$$

```python
sp.product(x, (x, 1, 10))
```

## 命题逻辑

### 真伪判断

{% tabs 真伪判断 %}
<!-- tab 例1 -->
$$
0=\sqrt{2}-2^{\frac{1}{2}} \text { ? }
$$

```python
0 == sp.sqrt(2) - 2 ** (sp.Rational(1, 2))
```

输出结果：

```
True
```
<!-- endtab -->
<!-- tab 例2 -->
$$
0=\sqrt{2}-2^{\frac{1}{3}} \text { ? }
$$

```python
0 == sp.sqrt(2) - 2 ** (sp.Rational(1, 3))
```

输出结果：

```
False
```
<!-- endtab -->
<!-- tab 例3 -->
$$
10!=\prod_{x=1}^{10}x \text { ? }
$$

```python
sp.factorial(10) == sp.product(x, (x, 1, 10))
```

输出结果：

```
True
```
<!-- endtab -->
<!-- tab 例4 -->
$$
50!=50!!\times 49!!\text { ? }
$$

```python
sp.factorial(10) == sp.product(x, (x, 1, 10))
```

输出结果：

```
True
```
<!-- endtab -->
<!-- tab 例5 -->
对于公式的处理要小心，例如对于如下判断：

$$
x^2-2x+1=\left(x-1\right)^2 \text {?}
$$

结果应该为 `True`，但如果使用如下代码的话：

```python
x ** 2 - 2 * x + 1 == (x - 1) ** 2
```

其结果为 `False`，应该显示的将公式进行展开，然后再进行判断：

```python
x ** 2 - 2 * x + 1 == sp.expand((x - 1) ** 2)
```

这样就可以得到我们想要的结果。
<!-- endtab -->
{% endtabs %}

### 逻辑运算

{% tabs 逻辑运算 %}
<!-- tab 例1 -->
$$
x \wedge y=\text { True ? }
$$

```python
sp.satisfiable(x & y)
```

```
{x: True, y: True}
```
<!-- endtab -->
<!-- tab 例2 -->
$$
x \wedge \neg x=\text { True ? }
$$

```python
sp.satisfiable(x & ~x)
```

```
False
```
<!-- endtab -->
{% endtabs %}

## 数学分析

### 函数定义

$$
f\left(x\right) =\frac{\log\left(x+1\right)}{x}
$$

```python
def f(x):
    return sp.log(1 + x) / x

f(x)
```

### 极限

{% tabs 极限 %}
<!-- tab 例1 -->
$$
\lim _{x \rightarrow 0} \frac{\sin (x)}{x}=1
$$

```python
sp.limit(sp.sin(x) / x, x, 0)
```
<!-- endtab -->
<!-- tab 例2 -->
$$
\lim _{x \rightarrow \infty} x=\infty
$$

```python
sp.limit(x, x, sp.oo)
```
<!-- endtab -->
<!-- tab 例3 -->
$$
\lim _{x \rightarrow \infty} \frac{1}{x}=0
$$

```python
sp.limit(1 / x, x, sp.oo)
```
<!-- endtab -->
<!-- tab 例4 -->
$$
\lim _{x \rightarrow 0} x^x=1
$$

```python
sp.limit(x ** x, x, 0)
```
<!-- endtab -->
{% endtabs %}

### 微分

{% tabs 微分 %}
<!-- tab 例1 -->
$$
\frac{\partial}{\partial x}(x+y)^3=3(x+y)^2
$$

```python
sp.diff((x + y) ** 3, x)
```
<!-- endtab -->
<!-- tab 例2 -->
$$
\frac{\partial^2}{\partial y^2}(x+y)^3=6(x+y)
$$

```python
sp.diff((x + y) ** 3, y, 2)
```
<!-- endtab -->
<!-- tab 例3 -->
$$
\frac{\mathrm{d}}{\mathrm{d} x} \tan (x)=\tan ^2(x)+1
$$

```python
sp.diff(sp.tan(x), x)
```
<!-- endtab -->
<!-- tab 例4 -->
$$
\lim _{y \rightarrow 0} \frac{\tan (x+y)-\tan (x)}{y}=\tan ^2(x)+1
$$

```python
sp.limit((sp.tan(x + y) - sp.tan(x)) / y, y, 0)
```
<!-- endtab -->
<!-- tab 例5 -->
$$
\frac{\mathrm{d}}{\mathrm{d} x} f(x)=\frac{\mathrm{d}}{\mathrm{d} x} \frac{\log (x+1)}{x}=\frac{1}{x(x+1)}-\frac{\log (x+1)}{x^2}
$$

```python
sp.diff(f(x), x, 1)
```
<!-- endtab -->
{% endtabs %}

### 级数展开

$$
\frac{1}{\cos (x)}=1+\frac{x^2}{2}+\frac{5 x^4}{24}+\Omicron\left(x^6\right)
$$

```python
sp.series(sp.cos(x), x)
```

$$
f(x)=\frac{\log (x+1)}{x}=1-\frac{x}{2}+\frac{x^2}{3}-\frac{x^3}{4}+\frac{x^4}{5}-\frac{x^5}{6}+\frac{x^6}{7}+\Omicron\left(x^7\right)
$$

```python
sp.series(f(x), x, 0, 7)
```

### 积分

$$
\int\left(x+y\right)\mathrm{d}x = \frac{x^2}{2}+xy
$$

```python
sp.integrate(x + y, x)
```

$$
\int(2 x+\sinh x) \mathrm{d} x=x^2+\cosh (x)
$$

```python
sp.integrate(2 * x + sp.sinh(x), x)
```

$$
\int_0^6(x+y)^3 \mathrm{d} x=6 y^3+54 y^2+216 y+324
$$

```python
sp.integrate((x + y) ** 3, (x, 0, 6))
```

$$
\int_{-\infty}^{\infty} \mathrm{e}^{-x^2} \mathrm{d} x=\sqrt{\pi}
$$

```python
sp.integrate(sp.exp(-x ** 2), (x, -sp.oo, sp.oo))
```

$$
\int \mathrm{e}^{-x^2} \operatorname{erf}(x) \mathrm{d} x=\frac{\sqrt{x} \operatorname{erf}^2(x)}{4}
$$

```python
sp.integrate(sp.exp(-x ** 2) * sp.erf(x), x)
```

$$
\int f(x) \mathrm{d}  x=\int \frac{\log (x+1)}{x} \mathrm{d} x=-\operatorname{Li}_2\left(x \mathrm{e}^{i \pi}\right)
$$

```python
sp.integrate(f(x), x)
```

## 代数方程

### 求解

解方程：

$$
x^4-1=0
$$

```python
sp.solve(x ** 4 - 1, x)
```

解方程组：

$$
\begin{align*}
x+5y-2=0\\
-3x+6y-15=0
\end{align*}
$$

```python
sp.solve([x + 5 * y - 2, -3 * x + 6 * y - 15], [x, y])
```

$$
\mathrm{e}^x + 1= 0
$$

```python
sp.solve(sp.exp(x) + 1, x)
```

$$
ax^2+bx+c=0
$$

```python
sp.solve(a * x ** 2 + b * x + c, x)
```

### 等式

解方程
$$
x+1=\frac{x+1}{x^2+x-2}
$$

```python
equation = sp.Eq(x + 1, (x + 1) / (x ** 2 + x - 2))
sp.solve(equation, x)
```

得到等式右边：

```python
equation.rhs
```

得到等式左边：

```python
equation.lhs
```

## 线性代数

### 矩阵

$$
\begin{bmatrix}
1 & x \\
y & 1
\end{bmatrix}
$$

```python
sp.Matrix([[1, x], [y, 1]])
```

$$
\begin{bmatrix}
1 & x \\
y & 1
\end{bmatrix}^2=
\begin{bmatrix}
xy+1 & 2x \\
2y & xy+1  
\end{bmatrix}
$$

```python
sp.Matrix([[1, x], [y, 1]]) ** 2
```

### 阶梯型

$$
\begin{bmatrix}
1 & 0 & 1 & 3 \\
2 & 3 & 4 & 7 \\
-1 & -3 & -3 & -4
\end{bmatrix}
$$

的阶梯型：

```python
sp.Matrix([[1, 0, 1, 3], [2, 3, 4, 7], [-1, -3, -3, -4]]).rref()
```

### 零空间

$$
\begin{bmatrix}
1 & 2 & 3 & 0 & 0\\
4 & 10 & 0 & 0 & 1
\end{bmatrix}
$$

的零空间：

```python
sp.Matrix([[1, 2, 3, 0, 0], [4, 10, 0, 0, 1]]).nullspace()
```

### 列空间

$$
\begin{bmatrix}
1 & 1 & 2 \\
2 & 1 & 3 \\
3 & 1 & 4
\end{bmatrix}
$$

的列空间：

```python
sp.Matrix([[1, 1, 2], [2, 1, 3], [3, 1, 4]]).columnspace()
```

### 特征方程

$$
\begin{bmatrix}
3 & -2 & 4 & -2 \\
5 & 3 & -3 & -2 \\
5 & -2 & 2 & -2 \\
5 & -2 & -3 & 3
\end{bmatrix}
$$

的特征方程：

```python
sp.factor(sp.Matrix([[3, -2, 4, -2], [5, 3, -3, -2], [5, -2, 2, -2], [5, -2, -3, 3]]).charpoly())
```

### 特征值和特征向量

$$
\begin{bmatrix}
3 & -2 & 4 & -2 \\
5 & 3 & -3 & -2 \\
5 & -2 & 2 & -2 \\
5 & -2 & -3 & 3
\end{bmatrix}
$$

的特征值和特征向量：

```python
sp.Matrix([[3, -2, 4, -2], [5, 3, -3, -2], [5, -2, 2, -2], [5, -2, -3, 3]]).eigenvects()
```

### 对角化

$$
\begin{bmatrix}
3 & -2 & 4 & -2 \\
5 & 3 & -3 & -2 \\
5 & -2 & 2 & -2 \\
5 & -2 & -3 & 3
\end{bmatrix}
$$

对其对角化：

```python
P, D = sp.Matrix([[3, -2, 4, -2], [5, 3, -3, -2], [5, -2, 2, -2], [5, -2, -3, 3]]).diagonalize()
```

## 微分方程

### 定义未知函数

```python
f = sp.symbols('f', cls=sp.Function)
```

### 求解微分方程

$$
\frac{\mathrm{d}^2}{\mathrm{d}x^2}f(x)+f(x)=0
$$

```python
sp.dsolve(f(x).diff(x, x) + f(x), f(x))
```

$$
x \frac{\mathrm{d}}{\mathrm{d} x} f(x)+f(x)-f^2(x)=0
$$

```python
sp.dsolve(x * f(x).diff(x) + f(x) - f(x) ** 2)
```

$$
x \frac{\mathrm{d}}{\mathrm{d} x} f(x)+f(x)-f^2(x)=0
$$

这是一个伯努利类型的微分方程，我们可以暗示它：

```python
sp.dsolve(x * f(x).diff(x) + f(x) - f(x) ** 2, f(x), hint='Bernoulli')
```

## 输出 LaTex

```python
equation = sp.Eq(a * x ** 2 + b * x + c, 0)
solution = sp.solve(equation, x)
print(sp.latex(solution))
```

## 小结

尝试使用 `SymPy` 求解下面的积分吧：

$$
\int_0^1\left(x^2+\frac{x}{\sqrt{1+x^2}}\right)\left(1+\frac{x}{\left(1+x^2\right) \sqrt{1+x^2}}\right) \mathrm{d} x
$$

参考答案：

```python
sp.integrate((x ** 2 + x / sp.sqrt(1 + x ** 2)) * (1 + x / (1 + x ** 2) / sp.sqrt(1 + x ** 2)), (x, 0, 1))
```

## 参考资料

- [SymPyの使い方](https://gochikika.ntt.com/Features/SymPy.html)


