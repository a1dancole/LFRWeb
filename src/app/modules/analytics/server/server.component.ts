import { Component, OnInit } from '@angular/core';

@Component({
  styleUrls: ['./server.component.scss'],
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {

  public tileUris: string[] = [
    'https://chart-embed.service.eu.newrelic.com/herald/b1ca5089-d995-4511-84d1-8187ca98f53c?height=300px&timepicker=false',
    'https://chart-embed.service.eu.newrelic.com/herald/a9a01ca9-436b-4232-a988-6ed21a987ec7?height=300px&timepicker=false',
    'https://chart-embed.service.eu.newrelic.com/herald/d6e02fa1-392d-43b5-8e37-79ec03709a3d?height=300px&timepicker=false',
    'https://chart-embed.service.eu.newrelic.com/herald/fe098ed9-41f4-4d79-a575-dcd5d043b78c?height=300px&timepicker=false',
    'https://chart-embed.service.eu.newrelic.com/herald/5356b8f5-5ec9-4265-b127-a356c3ac7099?height=300px&timepicker=false',
  ];

  constructor() {}

  ngOnInit(): void {
  }

  public isDesktop(): boolean {
    return window.screen.width > 768;
  }
}
