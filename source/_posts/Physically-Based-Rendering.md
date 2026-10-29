---
title: Physically Based Rendering
date: 2026-10-24 02:22:57
tags: [PBR]
categories: 渲染
description: PBR 综述
---

## 综述

本文以 GAMES 202 和毛星云的 *基于物理的渲染（PBR）白皮书*  为主要参考。

毛星云在 *基于物理的渲染（PBR）白皮书* 中引用了大量文献，本文也会以这些文献作为参考。

本文档会随着本人对渲染的深入了解一直更新。

主要参考文献：

《SIGGRAPH Course: Physically Based Shading in Theory and Practice》系列的 PPT 和 Note 等资料：

- [SIGGRAPH 2010 Course | Physically-Based Shading Models in Film and Game Production](http://renderwonk.com/publications/s2010-shading-course/)
- [SIGGRAPH 2012 Course | Practical Physically Based Shading in Film and Game Production](https://blog.selfshadow.com/publications/s2012-shading-course/)
- [SIGGRAPH 2013 Course | Physically Based Shading in Theory and Practice](https://blog.selfshadow.com/publications/s2013-shading-course/)
- [SIGGRAPH 2014 Course | Physically Based Shading in Theory and Practice](https://blog.selfshadow.com/publications/s2014-shading-course/)
- [SIGGRAPH 2015 Course | Physically Based Shading in Theory and Practice](https://blog.selfshadow.com/publications/s2015-shading-course/)
- [SIGGRAPH 2016 Course | Physically Based Shading in Theory and Practice](https://blog.selfshadow.com/publications/s2016-shading-course/)
- [SIGGRAPH 2017 Course | Physically Based Shading in Theory and Practice](https://blog.selfshadow.com/publications/s2017-shading-course/)

一些相关的著作：

- [《Physically Based Rendering: From Theory to Implementation, Third Edition》](https://www.pbr-book.org/): 这本书主要专注离线渲染，实时渲染只能用到里面很少的一部分。
- 《Real-Time Rendering 4th》中 PBR 的相关章节。

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
\Phi=\frac{\mathrm{d}Q}{\mathrm{d}t}\left[ \mathrm{W}=\mathrm{Watt}\right]\left[\mathrm{lm}=\mathrm{lumen}  \right]
$$

- $\Phi$: Radiant Flux，单位 $\mathrm{W}$.
- $Q$: Radiant Energy，单位 $\mathrm{J}$.
- t: 时间，单位：$\mathrm{s}$.

它表示单位时间内传递的辐射能量，可以视为光源发出的总辐射功率。

### Radiant Intensity

$$
I\left( \omega \right)=\frac{\mathrm{d}\Phi}{\mathrm{d}\omega}\left[ \frac{\mathrm{W}}{\mathrm{sr}} \right]\left[\frac{\mathrm{lm}}{\mathrm{sr}} =\mathrm{cd}=\mathrm{candela} \right]
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
E\left( \mathbf{p} \right) = \frac{\mathrm{d}\Omega\left( \mathbf{p} \right)}{\mathrm{d}A\cos \theta}\left[ \frac{\mathrm{W}}{\mathrm{m}^2} \right]\left[ \frac{\mathrm{lm}}{\mathrm{m}^2}=\mathrm{lux} \right]
$$

- $E$: 辐照度，单位 $\mathrm{W}/\mathrm{m}^2$.
- $\mathrm{d}A$: 接收光能的表面面积.

辐照度描述一个表面实际接收到的光能密度。

Lambert’s 余弦定理可以使用 Irradiance 来解释。

假设光线以 Radiant Flux $\Phi$ 均匀向外均匀发出，一个球面上的 Irradiance 和这个球的半径成平方反比。假设在半径为 1 的球面上的 Irradiance 为 $E$，则在半径为 $r$ 的球面上的 Irradiance 为：

$$
\begin{align*}
E' &= \frac{\Phi}{4 \pi r^2} \\
&= \frac{E} {r^2} \\
\end{align*}
$$

### Radiance

![辐亮度示意图](https://user-images.githubusercontent.com/62458905/230768937-da2153ee-d92e-4315-8249-879b1fa9e3c4.png)

$$
L\left(\mathbf{p}, \omega\right) \equiv \frac{\mathrm{d}^2
\Phi(\mathbf{p}, \omega)}{\mathrm{d} \omega \mathrm{d} A \cos \theta} \,
\left[\frac{\mathrm{W}}{\mathrm{sr}
\mathrm{m}^2}\right]\left[\frac{\mathrm{cd}}{\mathrm{m}^2}=\frac{\mathrm{lm}}{\mathrm{sr}
\mathrm{m}^2}=\mathrm{nit}\right]
$$

- $L$: 辐亮度，单位 $\mathbf{W}/\left( \mathbf{m}^2 \mathbf{sr} \right)$.
- $\mathrm{d}A\cos\theta$: 垂直于关照或观察方向的投影面积.

辐亮度描述某个位置，莫格方向上的辐射能量密度。

渲染其实就是要计算：表面上一点 $\mathbf{p}$ 沿着观察方向 $\omega_o$ 离开的辐亮度 $L_o$.

从入射角度来说（Incident Radiance），可以认为 Radiance 是单位立体角下的 Irradiance:

$$
L\left( \mathbf{p,\omega} \right)=\frac{\mathrm{d}E\left( \mathbf{p} \right)}{\mathrm{d}\omega\cos\theta}
$$

从出射角度来说（Exiting Radiance），可以认为 Radiance 是单位面积下的 Intensity:

$$
L\left( \mathbf{p,\omega} \right)=\frac{\mathrm{d}I\left( \mathbf{p},\omega \right)}{\mathrm{d}A\cos\theta}
$$

对于来自各个方向的入射辐射，有：

$$
\begin{align*}
E\left( \mathbf{p} \right) &=\int_{H^2} L_i\left( \omega_i \right) \cos\theta \mathrm{d} \omega_i  \\ 
&=\int_{H^2} L_i\left( \omega_i \right) \max\left\{ 0, \mathbf{n} \cdot \omega_i \right\} \mathrm{d} \omega_i 
\end{align*}
$$

![对 L 在半球上的积分](https://user-images.githubusercontent.com/62458905/230769545-ddc3545f-a97a-4b14-bc5f-d9749674dbfb.png)

其中：

- $L_i$: 入射方向的辐亮度.
- $\omega_i$：入射方向.
- $\mathbf{n}$：$\mathbf{p}$ 处的表面法线.

## 渲染方程与反射方程

$$
L_o\left(\mathbf{p}, \omega_o\right) =L_o\left( \mathbf{p},\omega \right) +\int_{H^2}f_r\left(\mathbf{p},
\omega_i , \omega_o \right)L_i\left(\mathbf{p},
\omega_i\right) \cos \theta_i \,\mathrm{d} \omega_i
$$

|    符号    |                 含义                 |
| :--------: | :----------------------------------: |
|   $L_o$    |              出射辐亮度              |
|   $L_e$    |             自发光辐亮度             |
|   $f_r$    |                 BRDF                 |
|   $L_i$    |              入射辐亮度              |
| $\omega_i$ |               入射方向               |
| $\omega_o$ |               出射方向               |
| $\theta_i$ |    入射方向于表面法向夹角的余弦值    |
|   $H^2$    | 入射半球（与法线在同一方向的半球面） |

此公式说明：出射光 = 自发光 + 所有入射光照在材质表面之后反射的总和（不考虑透射）.

如果不考虑自发光项，一般称之为反射方程（因为只描述了光的反射），也就是说，反射方程的公式是：

$$
L_o\left(\mathbf{p}, \omega_o\right) =\int_{H^2}f_r\left(\mathbf{p},
\omega_i , \omega_o \right)L_i\left(\mathbf{p},
\omega_i\right) \cos \theta_i \,\mathrm{d} \omega_i
$$

### BRDF (Bidirectional Reflectance Distribution Function)

BRDR 是一个表示一个点上的反射的函数：将从 $\omega_i$ 方向来的 Radiance 转换为 $\mathrm{d}A$ 上接收到的 Irradiance $E$，任何 Irradiance $E$ 都会变成其他任意方向 $\omega_o$ 方向的 Radiance.

> 一个点会接收来自四面八方的光照（来自四面八方的 Radiance），全部加到一起就是这个点的 Irradiance. 另外，这个点还会向四面八方发射光/能量（也就是 Radiance），我们要计算的就是这个发射出去的 Radiance.
> 也就是说，我们可以将反射分为两步：
>
> 1. 光绪入射到某一点，得到了一部分能量.
> 2. 这个点将得到的能量发射出去.

BRDF 表示从每个方向入射的光有多少发射到每个出射方向 $\omega_r$.

![BRDR 示意](https://user-images.githubusercontent.com/62458905/230770394-9a04aab5-c10e-48a4-bec3-e9e23773c4b3.png)

BRDR 的定义如下：

$$
f_r\left(\omega_i , \omega_o \right) = \frac{\mathrm{d}
L_o\left(\omega_o\right)}{\mathrm{d} E_i\left(\omega_i\right)} =
\frac{\mathrm{d}L_o\left(\omega_o\right)}{L\left(\omega_i\right) \cos
\theta_i \mathrm{d} \omega_i} \,\left[\frac{\text{1}}{\text{sr}}\right]
$$

#### BRDR 的性质

- 非负性（Non-negativity）

$$
f_r\left(\omega_i , \omega_o \right) \ge 0
$$

- 线性（Linearity）

![BRDR 的线性](https://user-images.githubusercontent.com/62458905/231383755-bd8a667b-47f4-45c6-96f8-3972624567c6.png)

- 可逆性（Reciprocity principle）

$$
f_r\left(\omega_o , \omega_i\right) = f_r\left(\omega_i ,\omega_o\right)
$$

![BRDR 的可逆性](https://user-images.githubusercontent.com/62458905/231384090-803d2a17-f56f-4351-8d6e-2fa0819f0f74.png)

- 能量守恒（Energy conservation）

$$
\forall \omega_o \int_{H^2}f_r\left(\omega_i , \omega_o\right) \cos \theta_i \, \mathrm{d}\omega_i \le 1
$$

- 各向同性 vs. 各向异性
  - 对于各向同性：$f_r\left(\theta_i, \phi_i;\theta_o, \phi_o\right) = f_r\left(\theta_i, \theta_o, \phi_o - \phi_i\right)$.
  - 对于各向异性：$f_r\left(\theta_i, \theta_o, \phi_o - \phi_i\right) = f_r\left(\theta_o, \theta_i, \phi_i - \phi_o\right) =  f_r\left(\theta_i, \theta_o, \left|\phi_o - \phi_i\right|\right)$

## Cook–Torrance 微表面 BRDF
