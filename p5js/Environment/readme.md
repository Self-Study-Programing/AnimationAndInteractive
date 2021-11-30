# describe()

스크린리더 (Screen Reader)를 위한 캔버스의 전체적인 서술적 묘사를 설정합니다. 첫 번째 매개변수는 문자열이며, 설정할 묘사입니다. 두 번째 매개변수는 선택 사항이며, 묘사의 표시법을 지정합니다.

describe(text, LABEL)은 설명을 모든 사용자에게 박물관 라벨/캡션을 캔버스 옆

칸 안에 나타냅니다. CSS를 통해서 스타일을 자유자재로 바꿀 수 있습니다.
describe(text, FALLBACK)는 설정된 묘사를 스크린리더 사용자들에게만 이용가능케 하며, 캔버스의 부가적 문서객체모델 (DOM)에 설정됩니다. 두번 째 매개변수가 없을 시, 기본적으로 묘사는 스크린리더 사용자들에게만 이용가능합니다.

describe(text, [display])

xt 문자열: 켄버스의 설명  
display 상수: (선택 사항) LABEL 또는 FALLBACK

```js
let x = 0;
function draw() {
  if (x > 100) {
    x = 0;
  }
  background(220);
  fill(0, 255, 0);
  ellipse(x, 50, 40, 40);
  x = x + 0.1;
  describe("green circle at x pos " + round(x) + " moving to the right", LABEL);
}
```

# describeElement()

스크린리더 (Screen Reader)를 위한 캔버스의 요소(도형, 또는 도형의 모임)의 서술적 묘사를 설정합니다. 첫 번째 매개변수는 묘사할 요소의 이름입니다. 두 번째 매개변수는 문자열이며 설정할 묘사입니다. 세 번째 매개변수는 선택 사항이며, 묘사의 표시법을 지정합니다.

describe(text, LABEL)은 설명을 모든 사용자에게 박물관 라벨/캡션을 캔버스 옆

describeElement(name, text, FALLBACK)는 설정된 묘사를 스크린리더 사용자들에게만 이용가능케 하며, 캔버스의 부가적 문서객체모델 (DOM)에 설정됩니다. 두번 째 매개변수가 없을 시, 기본적으로 묘사는 스크린리더 사용자들에게만 이용가능합니다.

describeElement(name, text, [display])  
매개변수  
name 문자열: 요소의 이름  
text 문자열: 요소의 설명 및 묘사  
display 상수: (선택 사항) LABEL 또는 FALLBACK

```js
function setup() {
  describe("Heart and yellow circle over pink background");
  noStroke();
  background("pink");
  describeElement("Circle", "Yellow circle in the top left corner");
  fill("yellow");
  ellipse(25, 25, 40, 40);
  describeElement("Heart", "red heart in the bottom right corner");
  fill("red");
  ellipse(66.6, 66.6, 20, 20);
  ellipse(83.2, 66.6, 20, 20);
  triangle(91.2, 72.6, 75, 95, 58.6, 72.6);
}
```

# textOutput()

textOutput() 함수는 스크린리더 (Screen Reader)를 위한 도형의 설명을 출력합니다. 이 설명은 자동적으로 만들어지며, 첫 부분은 캔버스의 높이 및 너비, 배경색, 그리고 캔버스상 요소 (도형, 또는 도형의 모임)의 개수를 출력합니다
각 요소에 대한 구체적 정보는 선택해서 볼 수 있습니다. 요소들의 목록이 제공됩니다. 이 목록에는 도형, 색, 위치, 좌표와 넓이가 묘사되어 있습니다
textOutput()과 texOutput(FALLBACK)은 출력물을 스크린리더 (Screen Reader)에 사용되는 캔버스의 부가적 문서객체모델 (DOM)에 제공합니다. textOutput(LABEL)은 캔버스 옆 추가적인 div요소를 만들고 그 안에 설명을 출력합니다. 이는 스크린리더를 사용하지 않지만 코딩하는 동안 출력물을 보면서 하고 싶어하는 유저들에게 유용합니다. 하지만 LABEL을 사용할 시 스크린리더 사용자들에게는 의미없는 중복성을 만들 수 있습니다. 그 이유로 LABEL은 스케치를 만드는 동안에만 사용하고 스케치를 출판하거나 스크린리더 사용자들에게 나누기 전에 지우는 것을 권장합니다.

textOutput([display])  
매개변수  
display 상수: (선택 사항) FALLBACK 또는 LABEL

```js
textOutput();
background(148, 196, 0);
fill(255, 0, 0);
ellipse(20, 20, 20, 20);
fill(0, 0, 255);
rect(50, 50, 50, 50);
```

# gridOutput()

gridOutput()은 캔버스의 내용물을 위치적에 따라 격자 (grid) 형식으로 나열합니다. 이 테이블을 출력하기 전에 컨버스의 전반적 설명을 출력합니다. 캔버스의 높이 및 너비, 배경색, 그리고 캔버스상 요소 (도형, 또는 도형의 모임)의 개수를 출력합니다 (예: 'Your output is a, 400 by 400 pixels, lavender blue canvas containing the following 4 shapes:'). 그리드는 내용물을 위치적으로 설명하며, 각 요소는 위치의 격자 위 셀 (cell)에 놓입니다. 각 셀에는 특정 요소의 색상과 모양이 저장되어 있습니다 (예: "orange ellipse"). 각 요소에 대한 구체적 정보는 선택해서 볼 수 있습니다. 각 요소의 모양, 색, 위치, 넓이 등의 정보가 표기되어 있는 목록

gridOutput() and gridOutput(FALLBACK)은 출력물을 스크린리더 (Screen Reader)에 사용되는 캔버스의 부가적 문서객체모델 (DOM)에 제공합니다. gridOutput(LABEL)은 캔버스 옆 추가적인 div요소를 만들고 그 안에 설명을 출력합니다. 이는 스크린리더를 사용하지 않지만 코딩하는 동안 출력물을 보면서 하고 싶어하는 유저들에게 유용합니다. 하지만 LABEL을 사용할 시 스크린리더 사용자들에게는 의미없는 중복성을 만들 수 있습니다. 그 이유로 LABEL은 스케치를 만드는 동안에만 사용하고 스케치를 출판하거나 스크린리더 사용자들에게 나누기 전에 지우는 것을 권장합니다.

gridOutput([display])

매개변수  
display 상수: (선택 사항) FALLBACK 또는 LABEL

```js
function setup() {
  gridOutput();
  background(148, 196, 0);
  fill(255, 0, 0);
  ellipse(20, 20, 20, 20);
  fill(0, 0, 255);
  rect(50, 50, 50, 50);
}
```

```js
let x = 0;
function draw() {
  gridOutput();
  background(148, 196, 0);
  fill(255, 0, 0);
  ellipse(x, 20, 20, 20);
  fill(0, 0, 255);
  rect(50, 50, 50, 50);
  ellipse(20, 20, 20, 20);
  x += 0.1;
}
```
