import { Component, OnInit } from '@angular/core';
import { ProfileService }	 from './services/profile.service';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent implements OnInit {

  constructor(public _profileService:ProfileService) { }

  ngOnInit() {
  }

}
