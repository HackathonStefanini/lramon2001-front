import { Component, OnInit } from '@angular/core';
import { StefamonService } from '../../shared/services/stefamon.service';

@Component({
  selector: 'app-stefamon',
  templateUrl: './stefamon.component.html',
  styleUrls: ['./stefamon.component.css'],
  providers: [StefamonService]
})
export class StefamonComponent implements OnInit {

  stefamonList = [{nome: "rockitten", urlFoto: "https://raw.githubusercontent.com/Tuxemon/Tuxemon/development/mods/tuxemon/gfx/sprites/battle/rockitten-front.png"}];

  constructor(
    private stefamonService: StefamonService
  ) { }

  ngOnInit(): void {
    this.stefamonService.list().subscribe(res => {
      this.stefamonList = res;
    });
  }

}