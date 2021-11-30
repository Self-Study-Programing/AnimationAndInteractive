# setup()

setup() 함수는 프로그램 실행시 단 한번 호출됩니다. 함수는 화면 크기나 배경색 등의 초기 환경 요소를 정의하고, 또 이미지나 폰트같은 미디어 파일을 불러오는 데에 쓰입니다. setup() 함수는 프로그램당 한 개씩만 존재할 수 있으며, 최초 한 번 실행된 이후에는 재호출되지 않아야 합니다.

_setup() 함수 안에 선언된 변수는, draw() 함수를 비롯한 여타 함수들이 접근할 수 없습니다._

```js
let a = 0;

function setup() {
  background(0);
  noStroke();
  fill(102);
}

function draw() {
  rect(a++ % width, 10, 2, 80);
}
```

# draw()

draw() 함수는 setup() 함수 직후에 호출되며, 프로그램 실행이 중단되거나 noLoop() 함수가 호출되기 전까지 블록 내에 포함된 코드들을 계속 실행합니다. 만약 setup() 함수에서 noLoop()가 호출된다면, draw() 함수는 단 한 번 실행됩니다. draw() 함수는 자동으로 호출되며, 명시적으로 호출하면 안됩니다.

draw() 함수는 항상 noLoop(), redraw(), 그리고 loop() 함수로 제어됩니다. noLoop()함수가 draw() 함수에 포함된 코드 실행을 멈추면, redraw() 함수가 draw() 함수 안에 포함된 코드들을 한 번만 실행하게 됩니다. loop() 함수의 경우, draw() 함수 안에 있는 코드를 계속해서 반복적으로 실행되게 합니다.

draw() 함수가 초당 호출되는 횟수는 frameRate() 함수를 통해 조정할 수 있습니다.

draw() 함수는 한 스케치당 한 번만 작성되어야 하며, 코드를 계속 실행하거나 mousePressed()와 같은 이벤트를 처리할 때 반드시 필요합니다. 때로는 위의 예제처럼 비어있는 draw() 함수를 호출하기도 합니다.

드로잉의 좌표계가 매 draw() 함수가 호출될 때마다 리셋되는 점에 유의해야 합니다. draw() 함수 안에서 변형 함수(scale, rotate, translate)가 실행될 경우, draw() 함수가 재호출되는 시점에 그 효과들은 무효화되고, 따라서 시간이 지나도 변형 내용이 누적되지 않습니다. 반면, 한 번 선언된 스타일(fill, stroke 등)은 계속해서 적용됩니다.

```js
let yPos = 0;
function setup() {
  // setup() runs once
  frameRate(30);
}
function draw() {
  // draw() loops forever, until stopped
  background(204);
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
}
```

# preload()

preload() 함수는 setup() 함수 직전에 호출되며, 외부 파일의 비동기 불러오기를 차단하기 위해 사용됩니다. preload() 함수로 외부 파일 사전 불러오기가 설정되면, setup() 함수는 불러오기 호출이 완료될 때까지 대기합니다. 불러오기 호출 이외의 다른 함수(loadImage, loadJOSN, loadFont, loadString)는 preload() 함수 안에 포함되지 않아야 합니다. 만약 비동기 불러오기를 선호한다면, 불러오기 메소드를 setup() 함수 안에 포함시키거나, 그 외의 영역에서 callback 매개변수를 사용하여 호출하면 됩니다.

기본값으로 'loading..'이라는 텍스트가 화면에 나타납니다. 나만의 로딩 페이지를 만들려면 id가 p5_loading으로 지정된 HTML 요소를 추가하면 됩니다. 자세한 정보는 여기에 있습니다.

```js
let img;
let c;
function preload() {
  // preload() runs once
  img = loadImage("assets/laDefense.jpg");
}

function setup() {
  // setup() waits until preload() is done
  img.loadPixels();
  // get color of middle pixel
  c = img.get(img.width / 2, img.height / 2);
}

function draw() {
  background(c);
  image(img, 25, 25, 50, 50);
}
```

# remove()

전체 p5 스케치를 제거합니다. 이 함수는 캔버스와 p5.js로 생성한 모든 요소들을 제거합니다. 또한, 그리기 반복(draw loop)를 중지하고, 윈도우 전역 범위에서 선언된 속성이나 메소드의 구속력을 해제합니다. 새로운 p5 스케치를 만들고자 할 경우에는 변수 p5를 남겨둡니다. 원한다면 p5 = null로 처리하여 이를 제거할 수 있습니다. p5 라이브러리로 생성한 모든 함수, 변수, 그리고 객체가 제거되지만, 사용자가 코드로 생성한 여타 전역 변수들은 그대로 유지됩니다.

```js
function draw() {
  ellipse(50, 50, 10, 10);
}

function mousePressed() {
  remove(); // remove whole sketch on mouse press
}
```
