var app = new Vue({
  el: '#app',
  data: {
    taskList1: [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4',
        'Task 5'
      ],
      taskList2: [
      'Сделать ДЗ 23_1',
      'Сделать ДЗ 24_1',
      'Сделать ДЗ 25_1',
      'Сделать ДЗ 32_1'
    ],
},
  methods: {
    transfer (arr1, arr2) {
        arr2.unshift(arr1.pop());
        }
    }
})

