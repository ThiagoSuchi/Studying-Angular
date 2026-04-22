import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MenuItem } from "../menu-item/menu-item";

@Component({
  selector: 'app-menu',
  imports: [RouterLink, MenuItem],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
