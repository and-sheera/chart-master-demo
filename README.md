# 📊 ChartMaster Documentation

Добро пожаловать в документацию библиотеки ChartMaster! ChartMaster - это мощная и гибкая библиотека для создания разнообразных графиков и диаграмм, которая поможет вам визуализировать и анализировать данные с легкостью.

>Эта документация предоставит вам полное руководство по использованию библиотеки ChartMaster, включая установку, основные концепции, API-интерфейсы и примеры использования. Здесь вы найдете всю необходимую информацию, чтобы начать создавать красивые и информативные графики для ваших проектов.

ChartMaster предоставляет мощный набор инструментов для создания различных типов графиков, включая круговые диаграммы, столбчатые диаграммы, линейные графики, радарные диаграммы и многое другое. Вы сможете представлять данные в удобной и наглядной форме, создавая профессионально выглядящие графики с минимальными усилиями.

## Круговая диаграмма
Круговая диаграмма - это графическое представление данных в виде круга, разделенного на секторы, пропорциональные значениям элементов данных. В библиотеке ChartMaster вы можете создавать круговые диаграммы с помощью простого и понятного API.
### Создание круговой диаграммы
Для создания круговой диаграммы вам потребуется использовать статический метод `createChart` класса `ChartMaster` с указанием типа диаграммы `'pie'`. Ниже приведен пример кода:
```js
const pieChart = ChartMaster.createChart('pie', {
  element: document.querySelector('#chart1'),
  data: [
    { label: 'Category A', value: 60, color: '#FF6384' },
    { label: 'Category B', value: 25, color: '#36A2EB' },
    { label: 'Category C', value: 65, color: '#FFCE56' },
    { label: 'Category D', value: 15, color: '#1c781c' }
  ],
  options: {}
})
```
Вышеуказанный код создаст круговую диаграмму и привяжет ее к элементу с идентификатором `chart1` в вашем DOM-дереве. В качестве данных указан массив объектов, содержащий следующие поля: <br>
`element`: HTMLElement, в который будет рендерится canvas, легенда, метки и др.<br>
`label`: строка, название категории данных<br>
`value`: число, значение<br>
`color`: строка, цвет соответствующего сектора диаграммы. Поддерживает HEX, RGB, RGBA<br>

### Опции круговой диаграммы
`borderWidth`: Толщина границы секторов диаграммы. По умолчанию: 0.<br>
`borderColor`: Цвет границы секторов диаграммы. По умолчанию: '#000000' (черный).<br>
`padding`: Отступ по краям canvas. По умолчанию: 0.<br>
`legend`: Флаг, указывающий, следует ли отображать легенду диаграммы. По умолчанию: true.<br>
`lightenValue`: Значение, определяющее насколько осветлить цвета секторов диаграммы при наведении. По умолчанию: 50.<br>
`tooltip`: Флаг, указывающий, следует ли отображать всплывающие подсказки при наведении на сектор диаграммы. По умолчанию: true.<br>
`labels`: Флаг, указывающий, следует ли отображать метки категорий на диаграмме. По умолчанию: false.<br>
`interaction`: Флаг, указывающий, разрешено ли взаимодействие с диаграммой (например, собятия наведения). По умолчанию: true.<br>
`colorTransitionTimingFunction`: Функция, определяющая анимацию перехода цветов секторов. По умолчанию: `easeInOutQuart`, осуществляющая плавный переход.<br>
```js
colorTransitionTimingFunction: function (progress) {
  return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2
},
```
`colorTransitionDuration`: Продолжительность анимации перехода цветов секторов в миллисекундах. По умолчанию: 200.<br>
`onSegmentHover`: Функция обратного вызова, которая вызывается при наведении на сектор диаграммы. Можно определить свою логику взаимодействия с секторами.

## Столбчатая диаграмма
Столбчатая диаграмма представляет собой графическое представление данных с использованием вертикальных столбцов различной высоты. Каждый столбец соответствует определенной категории и отображает ее числовое значение.
### Создание столбчатой диаграммы
Для создания столбчатой диаграммы вы можете использовать следующий код:
```js
const barChart = ChartMaster.createChart('bar', {
  element: document.querySelector('#chart2'),
  data: [
    { label: 'Category A', value: 60 },
    { label: 'Category B', value: 25 },
    { label: 'Category C', value: -65 },
    { label: 'Category D', value: 15 }
  ],
  options: {}
})
```
`element`: Элемент DOM-дерева, в котором будет отображаться диаграмма. Вы можете выбрать элемент, указав его селектор с помощью document.querySelector.<br>
`data`: Массив объектов, представляющих данные для столбчатой диаграммы. Каждый объект содержит свойства `label` (название категории) и `value` (числовое значение категории).<br>
`options`: Дополнительные опции для настройки столбчатой диаграммы.
### Опции столбчатой диаграммы
`gridYColor`: Цвет вертикальной линии сетки. По умолчанию: '#d4d4d4'.<br>
`gridXColor`: Цвет горизонтальной линии сетки. По умолчанию: '#d4d4d4'.<br>
`gridYWidth`: Толщина вертикальной линии сетки. По умолчанию: 1.<br>
`gridXWidth`: Толщина горизонтальной линии сетки. По умолчанию: 1.<br>
`barColor`: Цвет столбцов диаграммы. По умолчанию: '#29c5f6'.<br>
`barBorderColor`: Цвет границы столбцов диаграммы. По умолчанию: '#000000'.<br>
`barBorderWidth`: Толщина границы столбцов диаграммы. По умолчанию: 0.<br>
`barWidth`: Ширина столбцов диаграммы. По умолчанию: 50.<br>
`barSpacing`: Расстояние между столбцами диаграммы. По умолчанию: 30.<br>
`barBorderRadius`: Радиус скругления углов столбцов диаграммы. По умолчанию: 0.<br>
`yAxisSplitNumber`: Количество делений на оси Y. По умолчанию: 10.<br>
`paddingTop`: Внутренний отступ сверху диаграммы. По умолчанию: 2.<br>
`paddingBottom`: Внутренний отступ снизу диаграммы. По умолчанию: 2.<br>
`legend`: Флаг, указывающий, следует ли отображать легенду. По умолчанию: true.<br>
`labelsX`: Флаг, указывающий, следует ли отображать метки по оси X. По умолчанию: true.<br>
`labelsY`: Флаг, указывающий, следует ли отображать метки по оси Y. По умолчанию: true.<br>
`gridX`: Флаг, указывающий, следует ли отображать горизонтальные линии сетки. По умолчанию: true.<br>
`gridY`: Флаг, указывающий, следует ли отображать вертикальные линии сетки. По умолчанию: true.<br>
`interaction`: Флаг, указывающий, разрешено ли взаимодействие с диаграммой (например, наведение, щелчок). По умолчанию: true.<br>
`lightenValue`: Значение осветления цвета при наведении на столбец диаграммы. По умолчанию: 50.<br>
`tooltip`: Флаг, указывающий, следует ли отображать всплывающие подсказки при наведении на столбец диаграммы. По умолчанию: true.<br>
`colorTransitionTimingFunction`: Функция, определяющая анимацию перехода цветов. По умолчанию: `easeInOutQuart`.<br>
`colorTransitionDuration`: Продолжительность анимации перехода цветов в миллисекундах. По умолчанию: 200.<br>
`onBarHover`: Функция обратного вызова, которая вызывается при наведении на столбец диаграммы.

## Линейная диаграмма
Линейная диаграмма является графическим представлением данных, где точки соединяются линиями. Она широко используется для отображения изменений значений по оси времени или другим числовым параметрам.
### Создание линейной диаграммы
Для создания линейной диаграммы используется метод `createChart` класса `ChartMaster` с указанием типа диаграммы `'line'`. Приведенный ниже код демонстрирует пример создания линейной диаграммы:
```js
const lineChart = ChartMaster.createChart('line', {
  element: document.querySelector('#chart3'),
  data: [10, 5, 0, 90, 30, -10, 10],
  options: {}
})
```
В данном примере мы создаем линейную диаграмму с использованием элемента DOM, выбранного с помощью `document.querySelector('#chart3')`. Данные для построения линейной диаграммы указываются в массиве `data`. В данном случае мы задали значения `[10, 5, 0, 90, 30, -10, 10]`. Вы также можете настроить опции линейной диаграммы, передав их в объект `options`.
### Опции линейной диаграммы
`padding`: Внутренний отступ вокруг диаграммы. По умолчанию: 5.<br>
`axisYColor`: Цвет оси Y. По умолчанию: '#000000'.<br>
`axisYTickLength`: Длина делений на оси Y. По умолчанию: 5.<br>
`axisYTickWidth`: Толщина делений на оси Y. По умолчанию: 1.<br>
`axisYTickColor`: Цвет делений на оси Y. По умолчанию: '#000000'.<br>
`axisYWidth`: Толщина оси Y. По умолчанию: 1.<br>
`axisXColor`: Цвет оси X. По умолчанию: '#000000'.<br>
`axisXWidth`: Толщина оси X. По умолчанию: 1.<br>
`axisXTickLength`: Длина делений на оси X. По умолчанию: 5.<br>
`axisXTickColor`: Цвет делений на оси X. По умолчанию: '#000000'.<br>
`axisXTickWidth`: Толщина делений на оси X. По умолчанию: 1.<br>
`gridYColor`: Цвет вертикальных линий сетки по оси Y. По умолчанию: '#e0e0e0'.<br>
`gridYWidth`: Толщина вертикальных линий сетки по оси Y. По умолчанию: 1.<br>
`gridXColor`: Цвет горизонтальных линий сетки по оси X. По умолчанию: '#e0e0e0'.<br>
`gridXWidth`: Толщина горизонтальных линий сетки по оси X. По умолчанию: 1.<br>
`line`: Флаг, указывающий, следует ли рисовать линию диаграммы. По умолчанию: true.<br>
`lineColor`: Цвет линии диаграммы. По умолчанию: '#ff0000'.<br>
`lineWidth`: Толщина линии диаграммы. По умолчанию: 1.<br>
`interpolation`: Флаг, указывающий, следует ли использовать интерполяцию для плавного соединения точек. По умолчанию: true.<br>
`tensionCoeff`: Коэффициент натяжения линии при использовании интерполяции. По умолчанию: 1.<br>
`yAxisSplitNumber`: Количество делений на оси Y. По умолчанию: 5.<br>
`labelsX`: Флаг, указывающий, следует ли отображать метки по оси X. По умолчанию: true.<br>
`labelsY`: Флаг, указывающий, следует ли отображать метки по оси Y. По умолчанию: true.<br>
`gridX`: Флаг, указывающий, следует ли отображать сетку по оси X. По умолчанию: true.<br>
`gridY`: Флаг, указывающий, следует ли отображать сетку по оси Y. По умолчанию: true.<br>
`tooltip`: Флаг, указывающий, следует ли отображать всплывающие подсказки. По умолчанию: true.<br>
`dots`: Флаг, указывающий, следует ли рисовать точки на линии диаграммы. По умолчанию: false.<br>
`dotColor`: Цвет точек на линии диаграммы. По умолчанию: '#ffffff'.<br>
`dotRadius`: Радиус точек на линии диаграммы. По умолчанию: 3.<br>
`dotBorderWidth`: Толщина границы точек на линии диаграммы. По умолчанию: 2.<br>
`dotBorderColor`: Цвет границы точек на линии диаграммы. По умолчанию: '#000000'.<br>
`iteraction`: Флаг, указывающий, следует ли включить взаимодействие с диаграммой. По умолчанию: true.<br>
`iteractionAdditionalRadius`: Дополнительный радиус для определения области взаимодействия с точками диаграммы. По умолчанию: 4.<br>
`tooltipLabel`: Текст для метки всплывающей подсказки. По умолчанию: ''.<br>
`colorTransitionTimingFunction`: Функция, определяющая анимацию перехода цветов. По умолчанию: `easeInOutQuart`.<br>
`onDotHover`: Функция обратного вызова при наведении на точку диаграммы.

## Полярная диаграмма
Полярная круговая диаграмма является эффективным инструментом визуализации данных, так как она позволяет отобразить соотношение значений элементов данных с помощью радиусов секторов. Благодаря одинаковому углу между секторами, полярная диаграмма обеспечивает простоту сравнения значений и наглядность представления данных.
### Создание полярной диаграммы
Для создания полярной диаграммы необходимо использовать статический метод `createChart` класса `ChartMaster` с указанием типа диаграммы `'polar'`. Ниже приведен пример кода:
```js
const polarChart = ChartMaster.createChart('polar', {
  element: document.querySelector('#chart4'),
  data: [
    { label: 'Category A', value: 60, color: 'rgba(255, 99, 132, 0.6)' },
    { label: 'Category B', value: 25, color: 'rgba(54, 162, 235, 0.6)' },
    { label: 'Category C', value: 65, color: 'rgba(255, 206, 86, 0.6)' },
    { label: 'Category D', value: 15, color: 'rgba(28, 120, 28, 0.6)' },
    { label: 'Category E', value: 45, color: 'rgba(90, 50, 48, 0.6)' }
  ],
  options: {}
})
```
### Опции полярной диаграммы
`borderWidth`: Толщина границы сегментов диаграммы. По умолчанию: 0.<br>
`borderColor`: Цвет границы сегментов диаграммы. По умолчанию: '#000000'.<br>
`padding`: Внутренний отступ вокруг диаграммы. По умолчанию: 0.<br>
`legend`: Флаг, указывающий, следует ли отображать легенду. По умолчанию: true.<br>
`lightenValue`: Значение, на которое будут осветлены цвета сегментов при наведении. По умолчанию: 50.<br>
`tooltip`: Флаг, указывающий, следует ли отображать всплывающие подсказки при наведении на секторы. По умолчанию: true.<br>
`labels`: Флаг, указывающий, следует ли отображать метки категорий. По умолчанию: true.<br>
`iteraction`: Флаг, указывающий, включено ли взаимодействие с диаграммой (выделение сегментов при наведении). По умолчанию: true.<br>
`rings`: Количество колец внутри диаграммы. По умолчанию: 10.<br>
`sectorGaps`: Размер промежутков между сегментами в диаграмме. По умолчанию: 0.<br>
`gridColor`: Цвет линий сетки внутри диаграммы. По умолчанию: '#cecece'.<br>
`gridLineWidth`: Толщина линий сетки внутри диаграммы. По умолчанию: 1.<br>
`axisLabelAngle`: Угол поворота меток осей диаграммы в градусах. По умолчанию: -90.<br>
`colorTransitionTimingFunction`: Функция, определяющая анимацию перехода цветов. По умолчанию: `easeInOutQuart`.<br>
`colorTransitionDuration`: Продолжительность анимации перехода цвета сегментов. По умолчанию: 200.<br>
`onSectorHover`: Функция обратного вызова, вызываемая при наведении на секторы диаграммы.<br>
## Радарная диаграмма
Она состоит из радиальных линий, которые выходят из одной общей точки (центра диаграммы) и соединяют различные точки данных на этих линиях. Радарная диаграмма позволяет наглядно сравнить значения разных переменных внутри одного набора данных.
### Создание радарной диаграммы
Для создания радарной диаграммы необходимо использовать статический метод `createChart` класса `ChartMaster` с указанием типа диаграммы `'radar'`. Ниже приведен пример кода:
```js
const radarChart = ChartMaster.createChart('radar', {
  element: document.querySelector('#chart5'),
  data: [
    { label: 'Category A', value: 60 },
    { label: 'Category B', value: 25 },
    { label: 'Category C', value: 65 },
    { label: 'Category D', value: 15 },
    { label: 'Category E', value: 45 }
  ]
})
```
### Опции радарной диаграммы
`gridLineWidth`: Толщина линий сетки в радарной диаграмме. По умолчанию: 1.<br>
`gridColor`: Цвет линий сетки в радарной диаграмме. По умолчанию: '#565656'.<br>
`axesLineWidth`: Толщина линий осей в радарной диаграмме. По умолчанию: 1.<br>
`axesColor`: Цвет линий осей в радарной диаграмме. По умолчанию: '#000000'.<br>
`splitSections`: Количество секций, на которые разделена радарная диаграмма. По умолчанию: 8.<br>
`labelOffset`: Отступ меток категорий от радарной диаграммы. По умолчанию: 20.<br>
`labels`: Флаг, указывающий, следует ли отображать метки категорий. По умолчанию: true.<br>
`lineWidth`: Толщина линии данных в радарной диаграмме. По умолчанию: 2.<br>
`colorTransitionDuration`: Длительность анимации перехода цвета в радарной диаграмме. По умолчанию: 200.<br>
`bgSectionColor`: Цвет заливки фона секции в радарной диаграмме. По умолчанию: 'rgba(240, 55, 55, 0.4)'.<br>
`tooltip`: Флаг, указывающий, следует ли отображать всплывающие подсказки. По умолчанию: true.<br>
`dots`: Флаг, указывающий, следует ли отображать точки данных. По умолчанию: true.<br>
`dotColor`: Цвет точек данных в радарной диаграмме. По умолчанию: '#ffffff'.<br>
`dotRadius`: Радиус точек данных в радарной диаграмме. По умолчанию: 3.<br>
`dotBorderWidth`: Толщина границы точек данных в радарной диаграмме. По умолчанию: 2.<br>
`dotBorderColor`: Цвет границы точек данных в радарной диаграмме. По умолчанию: '#000000'.<br>
`iteraction`: Флаг, указывающий, включена ли взаимодействие с радарной диаграммой. По умолчанию: true.<br>
`iteractionAdditionalRadius`: Дополнительный радиус для области взаимодействия с радарной диаграммой. По умолчанию: 5.<br>
`colorTransitionTimingFunction`: Функция, определяющая анимацию перехода цветов. По умолчанию: `easeInOutQuart`.<br>
`onDotHover`: Обратный вызов, который вызывается при наведении курсора на точку данных в радарной диаграмме. По умолчанию: пустая функция.
