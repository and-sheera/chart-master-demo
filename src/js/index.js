import '../styles/style.scss'
import 'virtual:svg-icons-register'
import 'lazysizes'
// import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker'
// import uiInput from '../blocks/_ui/ui-input/ui-input'
// import uiRange from '../blocks/_ui/ui-range/ui-range'
// import uiSelect from '../blocks/_ui/ui-select/ui-select'
// import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea'
// import uiTooltip from '../blocks/_ui/ui-tooltip/ui-tooltip'
// import gallery from '../blocks/gallery/gallery'
// import sliderInit from '../blocks/slider/slider'
// import tabs from '../blocks/tabs/tabs'
import { ChartMaster } from 'chart-master'
document.addEventListener('DOMContentLoaded', function () {
  const s1 = ChartMaster.createChart('pie', {
    element: document.querySelector('#chart1'),
    data: [
      { label: 'Категория 1', value: 40, color: '#ABBFE5' },
      { label: 'Категория 2', value: 50, color: '#00CEFF' },
      { label: 'Категория 3', value: 40, color: '#D3ADF7' },
      { label: 'Категория 4', value: 55, color: '#3C7EFF' },
      { label: 'Категория 5', value: 40, color: '#D83D6C' }
    ],
    options: {
      borderWidth: 3,
      borderColor: '#232324'
    }
  })
  const s2 = ChartMaster.createChart('bar', {
    element: document.querySelector('#chart2'),
    data: [
      { label: 'Категория 1', value: 40 },
      { label: 'Категория 2', value: -45 },
      { label: 'Категория 3', value: 40 },
      { label: 'Категория 3', value: 45 },
      { label: 'Категория 4', value: -50 },
      { label: 'Категория 5', value: 35 },
      { label: 'Категория 5', value: 42 }
    ],
    options: {
      gridX: false,
      gridYColor: 'rgba(229, 230, 235, 0.5)',
      barColor: '#3C7EFF',
      yAxisSplitNumber: 5,
      barWidth: 40,
      barSpacing: 20
    }
  })
  const s3 = ChartMaster.createChart('line', {
    element: document.querySelector('#chart3'),
    data: [30, 68, 0, 90, 30, -10, 10],
    options: {
      barColor: '#36A2EB',
      dots: true,
      dotColor: '#3C7EFF',
      dotBorderWidth: 3,
      dotBorderColor: '#ffffff',
      axisXTickLength: 0,
      axisYTickLength: 0,
      gridY: false,
      gridXColor: 'rgba(229, 230, 235, 0.5)',
      lineColor: '#3C7EFF',
      lineWidth: 2
    }
  })
  const s4 = ChartMaster.createChart('polar', {
    element: document.querySelector('#chart4'),
    data: [
      { label: 'Category A', value: 60, color: 'rgba(211, 173, 247, 0.6)' },
      { label: 'Category B', value: 25, color: 'rgba(60, 126, 255, 0.6)' },
      { label: 'Category C', value: 65, color: 'rgba(216, 61, 108, 0.6)' },
      { label: 'Category D', value: 30, color: 'rgba(171, 191, 229, 0.6)' },
      { label: 'Category E', value: 45, color: 'rgba(0, 206, 255, 0.6)' }
    ],
    options: {
      gridColor: 'rgba(229, 230, 235, 0.5)',
      rings: 7,
      axisLabelAngle: -180
    }
  })
  const radarChart = ChartMaster.createChart('radar', {
    element: document.querySelector('#chart5'),
    data: [
      { label: 'Category A', value: 60 },
      { label: 'Category B', value: 25 },
      { label: 'Category C', value: 65 },
      { label: 'Category D', value: 15 },
      { label: 'Category E', value: 45 }
    ],
    options: {
      splitSections: 6,
      gridColor: 'rgba(229, 230, 235, 0.5)',
      bgSectionColor: 'rgba(0, 206, 255, 0.6)',
      axesColor: 'rgba(229, 230, 235, 0.5)',
      dotColor: '#00CEFF',
      dotBorderWidth: 3,
      dotBorderColor: '#ffffff'
    }
  })
})
