# Environment

## describe()

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

## describeElement()

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

## textOutput()

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

## gridOutput()

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

## print()

print() 함수는 브라우저 콘솔창에 출력할 때 사용됩니다. 프로그램이 생성하는 데이터를 확인할 때 주로 도움됩니다. 함수는 매번 호출될 때마다 콘솔창에 새로운 텍스트 줄을 만듭니다. 개별 요소는 큰따옴표로 분리하고, 더하기 연산자(+)로 두 요소를 결합할 수 있습니다.

인수없이 print()를 호출하면, window.print()와 동일하게 브라우저상 인쇄 기능을 켭니다. 콘솔창에 빈 줄을 출력하려면 print(' ')을 작성하면 됩니다.

```js
let x = 10;
print("The value of x is " + x);
```

print(contents)

## frameCount()

시스템 변수 frameCount는 프로그램 시작 이후 화면에 나타난 프레임의 개수를 측정합니다. setup() 함수의 기본값은 0이고, draw() 함수의 첫 번째 반복 실행이 마치면 1씩 증가하는 식입니다.

```js
function setup() {
  frameRate(30);
  textSize(30);
  textAlign(CENTER);
}

function draw() {
  background(200);
  text(frameCount, width / 2, height / 2);
}
```

## deltaTime

deltaTime 은 전 프레임의 시작 시간과 본 프레임의 시작 시간의 차를 저장합니다.

이 변수는 시간적으로 민감한 애니매시션, 또는 프레임레이트와 관계없이 일정해야 하는 물리학적 계산에 유용합니다.

문법
deltaTime

```js
let rectX = 0;
let fr = 30; //starting FPS
let clr;

function setup() {
  background(200);
  frameRate(fr); // Attempt to refresh at starting FPS
  clr = color(255, 0, 0);
}

function draw() {
  background(200);
  rectX = rectX + 1 * (deltaTime / 50); // Move Rectangle in relation to deltaTime

  if (rectX >= width) {
    // If you go off screen.
    if (fr === 30) {
      clr = color(0, 0, 255);
      fr = 10;
      frameRate(fr); // make frameRate 10 FPS
    } else {
      clr = color(255, 0, 0);
      fr = 30;
      frameRate(fr); // make frameRate 30 FPS
    }
    rectX = 0;
  }
  fill(clr);
  rect(rectX, 40, 20, 20);
}
```

## focused

p5.js 프로그램이 등장하는 화면창의 초점이 맞는지 여부를 확인하며, 이는 곧 스케치가 마우스나 키보드 입력을 허용한다는 것을 의미합니다. 화면창의 초점이 맞으면 변수는 true이고, 그렇지 않으면 false입니다.

문법
focused

```js
function draw() {
  background(200);
  noStroke();
  fill(0, 200, 0);
  ellipse(25, 25, 50, 50);

  if (!focused) {
    // or "if (focused === false)"
    stroke(200, 0, 0);
    line(0, 0, 100, 100);
    line(100, 0, 0, 100);
  }
}
```

## cursor()

마우스 커서를 사전에 정의된 기호나 이미지로 설정하거나, 숨김 상태일 경우 이를 해제합니다. 특정 이미지를 커서로 설정할 경우, 권장 사이즈는 16x16 또는 32x32 입니다. 매개변수 x와 y의 값은 이미지의 실제 크기보다 훨씬 더 작아야 합니다.

```js
function draw() {
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  if (mouseX < 50 && mouseY < 50) {
    cursor(CROSS);
  } else if (mouseX > 50 && mouseY < 50) {
    cursor("progress");
  } else if (mouseX > 50 && mouseY > 50) {
    cursor("https://avatars0.githubusercontent.com/u/1617169?s=16");
  } else {
    cursor("grab");
  }
}
```

cursor(type, [x], [y])

type 문자열|상수: ARROW, CROSS, HAND, MOVE, TEXT, WAIT. CSS 요소인 'grab', 'progress', 'cell' 등. 외부: 커서 이미지의 경로(허용 파일 확장자:.cur, .gif, .jpg, .jpeg, .png, url)  
x 숫자: (선택 사항) 커서의 수평 활성 지점 (32미만으로 지정)  
y 숫자: (선택 사항) 커서의 수직 활성 지점 (32미만으로 지정)

## frameRate()

화면에 나타날 프레임 수를 매 초단위로 지정합니다. 예를 들어, frameRate(30)은 초당 30회씩 새로 고침을 시도합니다. 프로세서가 지정된 속도를 유지할만큼 빠르지 않다면, 프레임 속도에 달성되지 않습니다. setup() 함수 내에서 프레임 속도를 설정하는 것을 권장합니다. 기본값으로 제공되는 프레임 속도는 디스플레이의 프레임 속도('새로 고침 빈도')를 기준으로 합니다. 초당 24 프레임 정도면 애니메이션을 부드럽게 재생할 수 있습니다. 이 함수는 setFrameRate(val)와 동일한 효과를 갖습니다.

별도의 인수없이 frameRate() 함수를 호출하면 현재 프레임 속도가 반환됩니다. 프레임 속도를 반환하기 위해서는 draw() 함수를 한 번 이상 실행해야 합니다. 이는 getFrameRate() 함수와도 동일합니다.

숫자형이 아니거나 양수가 아닌 숫자형의 인수로 frameRate() 함수를 호출하면 마찬가지로 현재 프레임 속도를 반환합니다.

문법  
frameRate(fps)  
frameRate()  
매개변수  
fps 숫자：1초 동안 화면에 나타날 프레임 수

## noCursor()

설명  
화면상 커서를 숨깁니다.

문법  
noCursor()

```js
function setup() {
  noCursor();
}

function draw() {
  background(200);
  ellipse(mouseX, mouseY, 10, 10);
}
```

## displayWidth, displayHeight

```js
createCanvas(displayWidth, displayHeight);
```

pixelDensity 함수의 기본값에 따라 화면의 너비값을 저장하는 시스템 변수입니다. 모든 디스플레이에서 프로그램을 전체 화면으로 실행시킬 때 사용합니다. 실제 화면 크기값을 반환하려면 여기에 pixelDensity를 곱하면 됩니다.

## windowWidth, windowHeight

사용자의 윈도우 화면 너비값을 저장해주는 시스템 변수로, window.innerWidth에 매핑됩니다.

사용자의 윈도우 화면 높이값을 저장해주는 시스템 변수로, window.innerHeight에 매핑됩니다.

## windowResized()

windowResized() 함수는 브라우저 창의 크기가 조정될 때마다 한 번씩 호출됩니다. 캔버스 크기를 재조정하거나 새 윈도우 화면의 크기에 맞춰 조정할 때 유용합니다.

windowResized([event])

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 100, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
```

## fullScreen()

사용자가 지정한 인수값을 기준으로 스케치를 전체 화면으로 설정합니다. 인수를 지정하지 않으면 현재 전체 화면 모드를 반환합니다. 위의 예제는 브라우저 제한으로 인해 마우스 입력과같은 사용자 입력이 있을 때 이 함수를 호출합니다.

```js
function setup() {
  background(200);
}
function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
```

## pixelDensity()

픽셀 밀도가 높은 디스플레이의 픽셀 크기를 조정합니다. pixelDensity()는 그 기본값으로 화면의 픽셀 밀도와 일치하도록 설정되어 있으며, pixelDensity(1)를 호출하여 이를 해제할 수 있습니다. 별도의 인수없이 pixelDensity() 함수를 호출하면, 스케치의 현재 픽셀 밀도가 반환됩니다.

pixelDensity(val)

```js
function setup() {
  pixelDensity(1);
  createCanvas(100, 100);
  background(200);
  ellipse(width / 2, height / 2, 50, 50);
}

function setup() {
  pixelDensity(3.0);
  createCanvas(100, 100);
  background(200);
  ellipse(width / 2, height / 2, 50, 50);
}
```

## displayDensity()

스케치가 실행 중인 현재 디스플레이의 픽셀 밀도를 반환합니다.

```js
function setup() {
  let density = displayDensity();
  pixelDensity(density);
  createCanvas(100, 100);
  background(200);
  ellipse(width / 2, height / 2, 50, 50);
}
```

# getURL()

현재 URL을 받아옵니다.

```js
let url;
let x = 100;

function setup() {
  fill(0);
  noStroke();
  url = getURL();
}

function draw() {
  background(200);
  text(url, x, height / 2);
  x--;
}
```
