# css 정리

# transform (출처: TCPschool.com)

CSS3에서는 transform 속성을 사용하여 HTML 요소의 모양, 크기, 위치 등을 자유롭게 바꿀 수 있습니다.

- 해당 요소를 움직입니다.

- 해당 요소를 회전시킵니다.

- 해당 요소의 크기를 변경합니다.

- 해당 요소를 기울입니다.

- 해당 요소에 위의 네 가지 동작 중 원하는 동작들을 한 번에 적용시킵니다.

## 2D 변형(transform)

2D 변형(transform)을 위해 제공되는 메소드(method)는 다음과 같습니다.

1. translate()

2. rotate()

3. scale()

4. skew()

5. matrix()

### translate()

translate() 메소드는 현재 위치에서 해당 요소를 주어진 x축과 y축의 거리만큼 이동시킵니다.

주어진 거리가 양수이면 해당 축의 양의 방향으로, 음수이면 해당 축의 음의 방향으로 이동시킵니다.

```css
transform: translate(100px, 50px);
```

### rotate()

rotate() 메소드는 해당 요소를 주어진 각도만큼 시계 방향이나 반시계 방향으로 회전시킵니다.

주어진 각도가 양수이면 시계 방향으로, 음수이면 반시계 방향으로 회전시킵니다.

```css
transform: rotate(30deg);
```

### scale()

scale() 메소드는 해당 요소의 크기를 주어진 배율만큼 늘리거나 줄입니다.

주어진 배율이 1보다 크면 크기를 늘리고, 0보다 크고 1보다 작으면 크기를 줄입니다

```css
transform: scale(1.5, 2);
```

### skewX()

skewX() 메소드는 해당 요소를 주어진 각도만큼 x축 방향으로 기울입니다.

주어진 각도가 양수이면 x축의 양의 방향으로, 음수이면 x축의 음의 방향으로 기울입니다.

```css
transform: skewX(20deg);
```

### skewY()

skewY() 메소드는 해당 요소를 주어진 각도만큼 y축 방향으로 기울입니다.

주어진 각도가 양수이면 y축의 양의 방향으로, 음수이면 y축의 음의 방향으로 기울입니다.

```css
transform: skewY(20deg);
```

### skew()

skew() 메소드는 해당 요소를 주어진 각도만큼 각각 x축과 y축 방향으로 기울입니다.

```css
transform: skew(20deg, 30deg);
```

### matrix() 메소드

matrix() 메소드는 모든 2D transform 메소드를 한 줄에 설정할 수 있도록 해줍니다.

이 메소드는 2D 변형(transform)과 관련된 6개의 매개변수를 가집니다.

matrix() 메소드의 매개변수 순서는 다음과 같습니다.

```css
matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY());
```

```css
transform: matrix(2, 0.3, 0.2, 1.3, 150, 100);
```

## CSS 2D transform 속성

| 속성             | 설명                                                 |
| ---------------- | ---------------------------------------------------- |
| transform        | 요소에 2D 또는 3D 변형(transform)을 적용함           |
| transform-origin | 요소에 변형(transform)을 적용하는 변환 중심을 설정함 |

## 3D 변형(transform)

### rotateX()

rotateX() 메소드는 해당 요소를 주어진 각도만큼 x축을 기준으로 회전시킵니다.

주어진 각도가 양수이면 x축 양의 방향으로, 음수이면 x축 음의 방향으로 회전시킵니다.

```css
transform: rotateX(20deg);
```

### rotateY()

rotateY() 메소드는 해당 요소를 주어진 각도만큼 y축을 기준으로 회전시킵니다.

주어진 각도가 양수이면 y축 양의 방향으로, 음수이면 y축 음의 방향으로 회전시킵니다.

```css
transform: rotateY(20deg);
```

### rotateZ()

rotateZ() 메소드는 해당 요소를 주어진 각도만큼 z축을 기준으로 회전시킵니다.

주어진 각도가 양수이면 z축 양의 방향으로, 음수이면 z축 음의 방향으로 회전시킵니다.

```css
transform: rotateZ(20deg);
```

### translate3d()

translate3d() 메소드는 현재 위치에서 해당 요소를 주어진 x축과 y축, z축의 거리만큼 이동시킵니다.

주어진 거리가 양수이면 해당 축의 양의 방향으로, 음수이면 해당 축의 음의 방향으로 이동시킵니다.

```css
transform: translate3d(100px, 50px, -150px);
```

| 속성                   | 설명                                                                          |
| ---------------------- | ----------------------------------------------------------------------------- |
| transform              | 요소에 2D 또는 3D 변형(transform)을 적용함                                    |
| transform-origin       | 요소에 변형(transform)을 적용하는 변환 중심을 설정함                          |
| transform-style 요소에 | 변형을 적용할 때 그 변환이 자식(child) 요소들에게도 적용될지 안 될지를 설정함 |
| perspective 3D 요소에  | 원근감을 표현할 때 사용할 픽셀 수를 설정함                                    |
| perspective-origin     | 3D 요소에 원근감을 표현할 때 사용할 기준 축을 설정함                          |
| backface-visibility    | 요소의 앞면만을 표현하고, 뒷면을 표현할지 안 할지를 설정함                    |
