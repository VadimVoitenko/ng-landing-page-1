import { Component } from '@angular/core'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  items = [
    { id: 1, title: 'Старт', description: ['Ліквідація ДАБІ', 'Створення Сервісної служби'] },
    { id: 2, title: 'Березень — Травень 2020', description: ['Перехідний період', 'Мораторій на інспекційний держконтроль'] },
    { id: 3, title: 'Червень 2020', description: ['Створення ДІМ', 'Запуск нового реєстру'] },
    { id: 4, title: 'Вересень 2020', description: ['Державне агентство з питань технічного регулювання у містобудуванні'] },
    { id: 5, title: 'Січень 2021', description: ['Запровадження страхування'] },
  ]
}
