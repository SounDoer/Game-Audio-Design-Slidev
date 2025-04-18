---
layout: section
---

## 角色拟音设计
**Character Foley Design**

<!--
- 解释什么是 Foley？
- 解释角色 Foley 一般都包含哪些声音？
-->

---
layout: header-body-center
---

### Character Locomotion Foley

::body::

<video controls width="85%">
  <source src="/SOP_Foley_FS_Demo_FIN.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--  -->

---
layout: header-body
---

### 需要考虑哪些因素

::body::

- 角色：性别、体型、性格……
- 部位：**脚步**、手部、衣物……
- 配饰：武器、背包、装饰……
- **动作类型**：走、跑、起跳、落地……
- **鞋子种类**：球鞋、皮鞋、靴子、高跟鞋……
- **地面材质**：泥土、岩石、草地、木头……
- 衣服种类：布料、皮料、盔甲……

<!--  -->

---
layout: header-body-center
---

### 角色动画结构

::body::

![](/char-anim-struct.png)

<!--  -->

---
layout: header-body
---

### Footstep

::body::

<div class="grid grid-cols-3 gap-4" v-clicks>

<div>

- 动作类型
  - Walk
  - Run
  - Sprint
  - Jump
  - Land
  - ……

</div>

<div>

- 鞋子种类
  - Highheel
  - Boot
  - Sneaker
  - Leather
  - Barefoot
  - ……

</div>

<div>

- 地面材质
  - Dirt
  - Rock
  - Wood
  - Grass
  - Metal
  - Sand
  - Water
  - ……

</div>

</div>

<!--
- 对动作类型进行抽象归类
- 通过地面材质展开讲解材质系统
-->

---
layout: header-body
---

### Data Struct
Switch Container in Wwise

::body::

- Player_Foley
  - Player_Foley_Cloth
  - Player_Foley_FS
    - **Player_Foley_FS_Run** ------------------------------------ Switch on Shoe Type
      - Player_Foley_FS_Run_Highheel ------------------ Switch on Material
        - FOL_FS_Run_Highheel_Dirt_01
        - FOL_FS_Run_Highheel_Dirt_02
        - FOL_FS_Run_Highheel_Dirt_03
        - FOL_FS_Run_Highheel_Dirt_04
        - FOL_FS_Run_Highheel_Dirt_05
      - Player_Foley_FS_Run_Sneaker
      - ...
    - ...

<!--  -->