---
title: Physically Based Rendering
date: 2026-10-24 02:22:57
tags: [PBR]
categories: 渲染
description: PBR 的原理
---

## Solid Angle

$$
\omega=\frac{A}{r^2}\left[ \mathrm{sr} \right]
$$

![立体角示意](https://user-images.githubusercontent.com/62458905/230720351-28c5443d-496e-4212-b194-cdddae6370a0.png)

单位立体角度由以下公式得到：

![单位立体角示意](https://user-images.githubusercontent.com/62458905/230720515-56305412-c91a-4af5-a4e0-2e31ebd1abb2.png)

$$
\begin{align*}
\mathrm{d}A &= \left(r \mathrm{d} \theta \right)\left(r \sin
{\theta}\mathrm{d}\phi\right) \\
&=r^2 \sin {\theta} \mathrm{d} \theta \mathrm{d} \phi \\
\mathrm{d}\omega &= \frac{\mathrm{d} A}{r^2} = \sin \theta
\mathrm{d} \theta \mathrm{d}\phi
\end{align*}
$$

这里的 $\mathrm{d}A$ 是半径为 $r$ 的球面上的面微分。该面积垂直于所考察的方向。

- $\mathrm{d}\omega$: 微分立体角，也叫单位立体角，单位 $\mathrm{sr}$.
- $\mathrm{d}A$: 球面面微分，单位 $\mathrm{m}^2$.
- $r$: 球面半径，单位 $\mathrm{m}$.

整个球面的立体角是：

$$
\Omega=\int_{S^2} d \omega=\int_0^{2 \pi} \int_0^\pi \sin \theta d
\theta d \phi=4 \pi
$$

## 辐射度量学

### Radiant Flux

$$
\Phi=\frac{\mathrm{d}Q}{\mathrm{d}t}\left[ \mathrm{W}\right]\left[\mathrm{lm}=\mathrm{lumen}  \right]
$$

- $\Phi$: Radiant Flux，单位 $\mathrm{W}$.
- $Q$: Radiant Energy，单位 $\mathrm{J}$.
- t: 时间，单位：$\mathrm{s}$.

它表示单位时间内传递的辐射能量，可以视为光源发出的总辐射功率。

### Radiant Intensity

$$
I\left( \omega \right)=\frac{\mathrm{d}\Phi}{\mathrm{d}\omega}\left[ \frac{\mathrm{W}}{\mathrm{sr}} \right]\left[ \mathrm{cd} \right]
$$

- $I$: 辐射强度，单位 $\mathrm{W}/\mathrm{sr}$.
- $\mathrm{d}\Phi$: 朝着某个方向发射出的辐射通量.
- $\mathrm{d}\omega$: 该方向对于的单位立体角.

表示光源每单位立体角发出多少辐射功率。

如果对 $\mathrm{d}\Omega$ 积分：

$$
\begin{align*}
\Phi & = \int_{S^2} \mathrm{d} \Phi \\
& = \int_{S^2} I \mathrm{~d} \omega \\
& =4 \pi I \\
\end{align*}
$$

也就是说：

$$
I=\frac{\Omega}{4\pi}
$$

### Irradiance

$$
E\left( \mathbf{p} \right) = \frac{\mathrm{d}\Omega(\mathbf{p})}{\mathrm{d}A\cos \theta}\left[ \frac{\mathrm{W}}{\mathrm{m}^2} \right]\left[ \frac{\mathrm{lm}}{\mathrm{m}^2} \right]
$$

- $E$: 辐照度，单位 $\mathrm{W}/\mathrm{m}^2$.
- $\mathrm{d}A$: 接收光能的表面面积.

辐照度描述一个表面实际接收到的光能密度。
