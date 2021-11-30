# 도형

## arc()

화면에 호, 즉 아치형 선을 그립니다. x좌표, y좌표, w(너비), h(높이), 시작점, 끝점을 지정하면 호는 열린 파이 조각의 형태로 그려집니다. 모드 변수를 설정하기에 따라, 호는 각각 반원(OPEN), 닫힌 반원(CHORD), 닫힌 파이 조각(PIE) 형태로 그려집니다. ellipseMode() 함수를 이용하면 시작점을 변경할 수 있습니다.

arc(x, y, w, h, start, stop, [mode], [detail])

x 숫자: 호를 포함하는 원의 x좌표  
y 숫자: 호를 포함하는 원의 y좌표값  
w 숫자: 호를 포함하는 원의 너비값  
h 숫자: 호를 포함하는 원의 높이값  
start 숫자: 라디안 단위, 호의 시작점 각도값  
stop 숫자: 라디안 단위, 호의 끝점 각도값  
mode 상수: (선택 사항) 호를 그리는 방식들로, CHORD, PIEC, OPEN 중 선택 가능  
detail 숫자: (선택 사항) 호의 윤곽선을 구성하는 꼭짓점 개수를 지정. 기본값은 25

```js
arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);

arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
```

## ellipse()

화면에 타원을 그립니다. 너비와 높이가 동일한 값으로 지정될 경우, 원이 그려집니다. 처음 두 변수는 각각 타원의 x좌표와 y좌표를, 3번째와 4번째 변수는 각각 타원의 너비와 높이를 지정합니다. 높이값 입력을 생략할 경우, 너비값이 높이값으로 동일하게 적용됩니다. 너비나 높이에 음수로 입력해도 그 절대값이 반영됩니다.

ellipse(x, y, w, [h])

ellipse(x, y, w, h, [detail])

x 숫자: 타원의 x좌표  
y 숫자: 타원의 y좌표값  
w 숫자: 타원의 너비값  
h 숫자: (선택사항) 타원의 높이값  
detail 정수: (선택사항) 타원을 몇 개의 부분으로 나누어 그릴 것인지 지정

## circle()

화면에 원을 그립니다. 원은 닫힌 도형으로, 중심점으로부터 주어진 거리에있는 모든 점들의 집합입니다.이 함수는 높이와 너비가 다른 타원을 그려내는 ellipse() 함수와는 달리, 너비와 높이가 모두 동일한 원을 그립니다. 이 경우, 높이와 너비는 원의 지름과 같습니다. 기본값으로, 처음 두 매개변수는 원의 중심 위치를 설정하고, 세 번째 매개 변수는 원의 지름을 설정합니다.

circle(x, y, d)

x 숫자: 원 중심점의 x좌표  
y 숫자: 원 중심점의 y좌표  
d 숫자: 원의 지름

```js
circle(30, 30, 20);
```

## line();

화면에 선분, 즉 두 점을 연결하는 곧은 선을 그립니다. line() 함수에 4개의 변수를 입력하여 이차원 평면에 선을 그릴 수 있습니다. stroke() 함수를 사용해 선의 색상을 지정할 수 있습니다. 선은 면을 갖지 않으므로, 면채우기 함수인 fill()은 적용되지 않습니다. 기본값으로 제공되는 선의 두께는 1픽셀이며, 이를 변경하기 위해 strokeWeight() 함수를 사용할 수 있습니다.

```js
line(30, 20, 85, 75);

line(30, 20, 85, 20);
stroke(126);
line(85, 20, 85, 75);
stroke(255);
line(85, 75, 30, 75);
```

line(x1, y1, x2, y2)

line(x1, y1, z1, x2, y2, z2)

x1 숫자: 1번째 점의 x좌표값  
y1 숫자: 1번째 점의 y좌표값  
x2 숫자: 2번째 점의 y좌표값  
y2 숫자: 1번째 점의 y좌표값  
z1 숫자: 2번째 점의 z좌표값  
z2 숫자: 2번째 점의 z좌표값

## point()

화면 좌표에 해당하는, 1픽셀 크기의 점을 그립니다. 첫 번째 매개변수는 점의 x좌표값을, 두 번째 매개변수는 점의 y좌표값입니다. 점의 색상은 stroke() 함수로 변경할 수 있습니다. 점의 크기는 strokeWeight() 함수로 변경할 수 있습니다.

point(x, y, [z])
point(coordinate_vector)

x 숫자: x좌표값  
y 숫자: y좌표값  
z 숫자: z좌표값  
coordinate_vector p5.Vector: 좌표 벡터

```js
point(30, 20);
point(85, 20);
point(85, 75);
point(30, 75);

point(30, 20);
point(85, 20);
stroke("purple"); // Change the color
strokeWeight(10); // Make the points 10 pixels in size
point(85, 75);
point(30, 75);

let a = createVector(10, 10);
point(a);
let b = createVector(10, 20);
point(b);
point(createVector(20, 10));
point(createVector(20, 20));
```
