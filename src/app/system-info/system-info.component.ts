import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SystemService } from '../data/system.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-system-info',
  template: `
    <h3>Information</h3>
    <p>{{ info }}</p>
  `,
  styles: [],
})
export class SystemInfoComponent {
  id!: number;
  info!: string;

  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.parent &&
      this.route.parent.paramMap
        .pipe(
          switchMap((params: ParamMap) => {
            this.id = +params.get('id')!;
            return this.systemService.getSystemInfo(this.id);
          })
        )
        .subscribe((data) => {
          this.info = data;
        });
  }
}
